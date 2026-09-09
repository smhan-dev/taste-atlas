// Additional learning surfaces. Existing lessons, bottle IDs and saved-data keys remain intact.
function whiskyHistoryPage(){
 const groups=[
  {start:0,end:3,title:'근본과 탄생',sub:'분류의 축 → 맛의 생성 → 기술·세금·무역의 역사'},
  {start:3,end:6,title:'스카치와 맛의 문법',sub:'법적 분류·지역·생산자 → 피트 → 캐스크'},
  {start:6,end:10,title:'세계로 갈라진 계보',sub:'미국 → 아일랜드 → 일본 → 캐나다·새로운 산지'},
  {start:10,end:13,title:'한 병과 나의 취향',sub:'독립병입·라벨 → 시장 현황 → 술장에 대입하기'}
 ];
 return `${titlePage('THE WHISKY READER · ORIGINS, LINEAGES & MAKERS','이름의 목록에서,<br>맛이 생겨난 계보로.','종류의 지도와 향미의 지도를 나누고, 제조·역사·대표 생산자를 다시 연결합니다. 첨부 전문 13개 장을 본문으로, 기존 8개 장을 보충 학습으로 모두 유지했습니다.')}
 <div class="course-phases" aria-label="학습 단계">${groups.map((g,i)=>`<button data-lesson-jump="wf${g.start+1}"><b>0${i+1}</b><span>${g.title}</span><small>${g.start+1}–${g.end}장</small></button>`).join('')}</div>
 <details class="lesson intro-lesson"><summary><span class="lesson-number">↳</span><span><h3>첨부문의 시작 — 서로 다른 분류 기준을 분리하기</h3><p>첨부 서문 전체 · 학습 방향과 향미 표현의 한계</p></span></summary><div class="lesson-body course-intro">${WHISKY_INTRO}</div></details>
 <div class="chapter-jumps" aria-label="장 바로가기">${WHISKY_FOUNDATIONS.map((l,i)=>`<button data-lesson-jump="${l.id}">${String(i+1).padStart(2,'0')} ${['큰 지도','만드는 법','역사','스카치','피트','오크통','미국','아일랜드','일본','새로운 산지','독립병입·라벨','시장 현황','나의 취향'][i]}</button>`).join('')}</div>
 <div class="sectionline"><p class="fine">13개 본문 · 46개 소제목 · ${number(WHISKY_ATTACHMENT.text.length)}자 원문 보존</p><button class="textbutton" data-action="expand-lessons">모두 펼치기</button></div>
 ${groups.map((g,i)=>`<section class="course-group"><header class="course-part"><span class="eyebrow">PART 0${i+1} · CHAPTER ${g.start+1}–${g.end}</span><h2>${g.title}</h2><p class="fine" style="margin-top:10px">${g.sub}</p></header>${WHISKY_FOUNDATIONS.slice(g.start,g.end).map((l,j)=>lessonHTML(l,g.start+j)).join('')}</section>`).join('')}
 <div class="course-part"><span class="eyebrow">COMPANION READINGS · 기존 내용도 그대로</span><h2>술장과 비교 시음으로 이어지는 8개 보충 학습</h2><p class="fine" style="margin-top:12px">앞서 만든 내용의 제품 사례·대안·보관법을 삭제하지 않았습니다. 본문과 겹치는 설명은 복습용으로 남겼고, 기존 읽음 표시도 유지됩니다.</p></div>
 ${WHISKY_LESSONS.map((l,i)=>lessonHTML(l,i+13)).join('')}
 <div class="attachment-actions"><button class="action" data-go="cabinet/shelf">배운 내용으로 24병 술장 읽기 ↗</button><button class="textbutton" data-go="sources/archive">첨부 원문 그대로 대조하기 ↗</button></div>`;
}
function attachmentArchive(){return `<section class="attachment-archive"><div class="sectionline"><div><span class="eyebrow">ADDED READING · 2026.09.09</span><h2>위스키 첨부 전문</h2></div><small>${number(WHISKY_ATTACHMENT.text.length)}자</small></div><div class="callout warm">첨부 파일의 문장·표·소제목·수치 모두를 그대로 보존한 원문입니다. 학습 본문의 법적 분류·시장 통계 보완 메모와 함께 읽어주세요.</div><div class="attachment-actions"><button class="textbutton" data-action="download-whisky-attachment">원문 텍스트 내려받기 ↓</button><button class="textbutton" data-go="whisky/history">13개 장으로 읽기 ↗</button></div><details class="lesson"><summary><span class="lesson-number">＋</span><span><h3>${esc(WHISKY_ATTACHMENT.title)}</h3><p>내용 생략 없음 · 원문 전체 펼치기</p></span></summary><div class="lesson-body archive-complete" id="whisky-attachment-original">${esc(WHISKY_ATTACHMENT.text)}</div></details></section>`;}
function archivePage(){return baseArchivePage()+attachmentArchive();}
function sourcesPage(){
 return baseSourcesPage().replace('<div class="contentblock">',`<div class="contentblock"><span class="eyebrow">CASK LOUNGE · 추가 편집 2026.09.09</span><h3 style="margin-top:12px">첨부 전문을 본문에 통합한 방식</h3><p>추가 위스키 첨부문의 서문, 13개 장, 46개 소제목, 표와 인용문 전체를 학습 본문에 넣었습니다. 원문 ${number(WHISKY_ATTACHMENT.text.length)}자는 별도 원문 화면에도 그대로 보존합니다. 기존 위스키 8개 장과 맥주 12개 장·42개 카드·대화 원문은 삭제하지 않았습니다.</p><p>법적 분류와 표시 기준, 셰리의 성격, 2025년 시장 집계와 2026년 발표는 공식 자료로 범위를 확인했습니다. Brown-Forman의 한 분기 매출을 모든 위스키 수요나 캐나다 개별 수요로 일반화하지 않도록 12장 앞에 메모를 덧붙였습니다. 첨부문에 나온 모든 생산자의 모든 제품·배치를 전수 재검증한 것은 아닙니다.</p><p>A 시안의 차콜·구리빛 팔레트, 가로 목차와 오른쪽 술장 배치를 적용했습니다. 긴 글은 본문 폭과 행간을 넓게 조절하고 표는 가로로 넘겨 읽도록 했습니다. 작은 화면에서는 상단의 ‘내 술장’에서 24병·구매 계획·맥주 냉장고로 바로 이동합니다. 학습 화면 아래에 추천 패널을 반복하지 않습니다.</p><button class="action" data-go="whisky/history">위스키 계보 학습 시작 ↗</button></div><div class="contentblock">`);
}
function caskPage(){return baseCaskPage()+`<div class="course-part"><span class="eyebrow">첨부 전문에서 더 깊이</span><h2>나무와 이전 내용물, 시즈닝과 피니시</h2></div>`+lessonHTML(WHISKY_FOUNDATIONS[5],5);}
function regionsPage(){return baseRegionsPage()+`<div class="course-part"><span class="eyebrow">첨부 전문에서 더 넓게</span><h2>나라별로 달라진 역사와 생산자</h2></div>`+WHISKY_FOUNDATIONS.slice(6,10).map((l,i)=>lessonHTML(l,i+6)).join('');}
document.addEventListener('click',e=>{
 const el=e.target.closest('[data-lesson-jump],[data-action="download-whisky-attachment"]');if(!el)return;
 if(el.dataset.lessonJump)jumpToLesson(el.dataset.lessonJump);
 if(el.dataset.action==='download-whisky-attachment')downloadFile('위스키-근본과계보-첨부원문.txt',WHISKY_ATTACHMENT.text,'text/plain;charset=utf-8');
});
