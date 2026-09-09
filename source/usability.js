// View state is separate from the original tasting records and purchase plan.
const pageViews=new Map();
let currentViewKey='';
let viewCaptured=false;
if(!saved.reading||typeof saved.reading!=='object')saved.reading={};
if('scrollRestoration' in history)history.scrollRestoration='manual';
function rememberPageView(){
 if(!currentViewKey)return;
 pageViews.set(currentViewKey,{y:window.scrollY,filter:state.filter,query:state.query,open:[...document.querySelectorAll('#main details[open][id]')].map(d=>d.id)});
}
function restoreRoute(){
 if(!viewCaptured)rememberPageView();viewCaptured=false;readRoute();
 const previous=pageViews.get(`${state.tab}/${state.section}`);
 state.filter=previous?.filter||(state.tab==='beer'?'favorites':'all');state.query=previous?.query||'';
 render();
 for(const id of previous?.open||[])document.getElementById(id)?.setAttribute('open','');
 requestAnimationFrame(()=>{window.scrollTo({top:previous?.y||0,behavior:'instant'});$('#main').focus({preventScroll:true});});
}
function chapterCollection(){return state.tab==='whisky'?ALL_WHISKY_LESSONS:BEER_LESSONS;}
function rememberChapter(id){
 if(!['beer','whisky'].includes(state.tab)||!chapterCollection().some(l=>l.id===id))return;
 saved.reading[state.tab]=id;persist();updateContinueButton();
}
function updateContinueButton(){
 const button=$('#continue-reading');if(!button)return;
 const lessons=chapterCollection(),last=lessons.find(l=>l.id===saved.reading[state.tab]);
 const next=last||lessons.find(l=>!saved.learned.includes(l.id))||lessons[0];
 button.dataset.lessonJump=next.id;
 button.innerHTML=`<span>${last?'읽던 장 이어 읽기':'다음 학습 시작'}</span><strong>${esc(next.title)}</strong><b aria-hidden="true">↗</b>`;
}
function jumpToLesson(id){
 const detail=document.getElementById(id);if(!detail)return;
 detail.open=true;rememberChapter(id);
 detail.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
 detail.querySelector('summary')?.focus({preventScroll:true});
}
function updateResultCount(){
 const count=$('#result-count');if(!count)return;
 const beer=state.tab==='beer',items=beer?filteredBeers():filteredWhiskies(),all=beer?BEERS:WHISKIES;
 const querying=Boolean(state.query.trim()),groups=beer?BEER_GROUPS:WHISKY_GROUPS;
 count.textContent=querying?`전체 ${all.length}${beer?'종':'병'}에서 ${items.length}개 검색됨`:`${groups[state.filter]} · ${items.length} / ${all.length}`;
 document.querySelectorAll('[data-filter]').forEach(button=>{const active=!querying&&button.dataset.filter===state.filter;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
 const clear=$('[data-action="clear-search"]');if(clear)clear.hidden=!querying;
}
function cabinetConnections(){return `<section class="cabinet-connections contentblock"><span class="eyebrow">ACROSS THE GLASS</span><h3>맥주에서 발견한 취향을 위스키로</h3><div class="two-col"><div><h4>Helles ↔ Deanston</h4><p>빵과 몰트의 작은 차이를 읽는 관심을, 원액 중심의 위스키로 이어보세요. 맛이 같다는 뜻은 아닙니다.</p></div><div><h4>BA Stout ↔ Bourbon</h4><p>통이 남기는 바닐라·오크와 베이스 술의 차이를 나란히 관찰합니다.</p></div></div><button class="textbutton" data-go="whisky/casks">통에서 연결되는 이야기 ↗</button><hr class="nav-divider"><h3>맥주 냉장고, 4℃의 기본</h3><p>헬레스와 IPA는 신선하게. 큰 배럴 맥주는 따를 때 향을 깨우기. 44개를 기준으로 사고 네 자리의 여유를 둡니다.</p><button class="textbutton" data-go="cabinet/fridge">맥주 구성·보관·별도 예산 보기 ↗</button></section>`;}
function enhancePage(){
 currentViewKey=`${state.tab}/${state.section}`;
 updateResultCount();
 if(state.tab==='cabinet'&&state.section==='shelf')$('#main').insertAdjacentHTML('beforeend',cabinetConnections());
 if(['beer','whisky'].includes(state.tab)&&state.section==='history'){
  $('#main .titlepage').insertAdjacentHTML('afterend','<button class="continue-reading" id="continue-reading"></button>');
  updateContinueButton();
 }
 if(['beer','whisky'].includes(state.tab)){
  const details=[...document.querySelectorAll('#main details.lesson[id]')];
  details.forEach((detail,i)=>{
   const prev=details[i-1],next=details[i+1];
   detail.querySelector('.lesson-body').insertAdjacentHTML('beforeend',`<nav class="lesson-paging" aria-label="장 이동">${prev?`<button class="textbutton" data-lesson-jump="${prev.id}">← 이전 장</button>`:'<span></span>'}${next?`<button class="textbutton" data-lesson-jump="${next.id}">다음 장 →</button>`:`<button class="textbutton" data-go="${state.tab}/practice">비교 시음으로 이어가기 →</button>`}</nav>`);
   detail.classList.toggle('is-read',saved.learned.includes(detail.id));
  });
 }
 const form=$('#note-form');if(form){try{const draft=JSON.parse(sessionStorage.getItem('taste-atlas-note-draft')||'null');if(draft)for(const [key,value]of Object.entries(draft)){const field=form.elements.namedItem(key);if(field&&typeof value==='string')field.value=value;}}catch{}}
 $('#back-top').hidden=window.scrollY<600;
}
document.addEventListener('click',e=>{
 const summary=e.target.closest('details.lesson[id] > summary');
 if(summary)setTimeout(()=>{const detail=summary.parentElement;if(detail.open)rememberChapter(detail.id);},0);
 const clear=e.target.closest('[data-action="clear-search"]');
 if(clear){state.query='';$('#search').value='';$('#results').innerHTML=state.tab==='beer'?beerResults():whiskyResults();updateResultCount();$('#search').focus({preventScroll:true});}
});
document.addEventListener('change',e=>{
 if(e.target.id==='section-select')navigate(state.tab,e.target.value);
 if(e.target.dataset.learn){e.target.closest('details')?.classList.toggle('is-read',e.target.checked);updateContinueButton();}
});
document.addEventListener('toggle',e=>{
 if(!e.target.matches?.('#main details.lesson'))return;
 const button=$('[data-action="expand-lessons"]');
 if(button)button.textContent=[...document.querySelectorAll('#main details.lesson')].every(d=>d.open)?'모두 접기':'모두 펼치기';
},true);
document.addEventListener('input',e=>{
 const form=e.target.closest('#note-form');if(!form)return;
 const draft=Object.fromEntries(new FormData(form));try{sessionStorage.setItem('taste-atlas-note-draft',JSON.stringify(draft));}catch{}
});
document.addEventListener('submit',e=>{
 if(e.target.id!=='note-form'||!e.target.checkValidity())return;
 const data=new FormData(e.target);if(!String(data.get('name')).trim()||!String(data.get('text')).trim())return;
 try{sessionStorage.removeItem('taste-atlas-note-draft');}catch{}
 $('#note-form')?.reset();
});
$('#detail').addEventListener('close',()=>document.body.classList.remove('dialog-open'));
$('#back-top').addEventListener('click',()=>{window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});$('#main').focus({preventScroll:true});});
window.addEventListener('scroll',()=>{$('#back-top').hidden=window.scrollY<600;},{passive:true});
readRoute();render();
