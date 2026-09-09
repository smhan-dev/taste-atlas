const SOURCES = {
 bjcp:['BJCP · 맥주 스타일 가이드','https://www.bjcp.org/style/2021/guidelines/','스타일 분류의 기준. 계보 자체는 여러 역사와 지역이 교차하며, 이 페이지의 학습용 묶음은 심사 분류와 다릅니다.'],
 helles:['BJCP · Munich Helles','https://styles.bjcp.org/bjcp-2021-beer/4/4a-munich-helles','몰트 중심의 균형, 부드럽고 드라이한 끝맛, 1894년 뮌헨의 배경.'],
 pils:['Pilsner Urquell · 1842년의 변화','https://www.pilsnerurquell.com/stories/how-pilsner-urquell-changed-beer-forever/','Josef Groll과 플젠의 황금색 라거.'],
 spaten:['Spaten · Münchner Hell','https://www.spatenbraeu.de/','1894년 헬레스의 출발.'],
 czech:['BJCP · Czech Lager','https://www.bjcp.org/style/2021/3/','체코 라거의 색·농도 분류와 풍미.'],
 darklager:['BJCP · Dark European Lager','https://www.bjcp.org/style/2021/8/','둔켈과 슈바르츠비어의 차이.'],
 bock:['BJCP · Strong European Beer','https://www.bjcp.org/style/2021/9/','도펠복과 발틱 포터.'],
 porter:['BJCP · Brown British Beer','https://www.bjcp.org/style/2021/?pg=4','포터의 런던 기원과 현대 스타일의 구별.'],
 stout:['BJCP · American Porter and Stout','https://www.bjcp.org/style/2021/20/','임페리얼 스타우트의 역사와 대표 사례.'],
 haze:['BJCP · Hazy IPA','https://styles.bjcp.org/bjcp-2021-beer/21/21c-hazy-ipa','뉴잉글랜드의 분화, 홉 향과 질감.'],
 pliny:['Russian River · Pliny the Elder','https://www.russianriverbrewing.com/brew/pliny-the-elder/','2000년 출시 배경, 8% DIPA, 신선도 권장.'],
 sculpin:['Ballast Point · Sculpin','https://ballastpoint.com/beer/sculpin/','West Coast IPA, 7% ABV, 70 IBU 및 풍미.'],
 bruery:['The Bruery · Black Tuesday','https://www.thebruery.com/pages/the-bruery-black-tuesday','2025 빈티지 19.1%, 12개월 이상 버번 배럴 숙성.'],
 goose:['Goose Island · Grit & Grain','https://www.gooseisland.com/grit-grain','Bourbon County의 배럴과 양조 기록에 관한 양조장 자료.'],
 firestone:['Firestone Walker · 2026 배럴 프로그램','https://www.firestonewalker.com/brewmasters-collective/','Parabola, 변형 제품과 배럴 블렌딩의 현대적 전개.'],
 belgian:['BJCP · Monastic Ale','https://www.bjcp.org/style/2021/26/','Dubbel, Tripel, Belgian Dark Strong Ale.'],
 saison:['BJCP · Strong Belgian Ale','https://www.bjcp.org/style/2021/25/','Saison과 Belgian Golden Strong의 구별.'],
 gueuze:['BJCP · Gueuze','https://styles.bjcp.org/bjcp-2021-beer/23/23e-gueuze','서로 다른 숙성 람빅의 블렌딩과 병내 발효.'],
 storage:['Brewers Association · 온도와 맥주 품질','https://www.brewersassociation.org/educational-publications/craft-beer-retailer-temperature-cheat-sheet/','보관 온도와 마시는 온도의 목적은 다릅니다.'],
 swa:['Scotch Whisky Association · 분류','https://www.scotch-whisky.org.uk/discover-scotch/enjoying-scotch/scotch-whisky-categories/','싱글 몰트·싱글 그레인·블렌디드 몰트·블렌디드 그레인·블렌디드 스카치.'],
 scotchlaw:['Scotch Whisky Association · 스카치의 정의','https://www.scotch-whisky.org.uk/industry-insights/protecting-scotch-whisky/','스코틀랜드 생산, 오크통에서 최소 3년, 병입 최소 40% 등.'],
 swahistory:['Scotch Whisky Association · 역사','https://www.scotch-whisky.org.uk/discover-scotch/story-of-scotch/','허가 양조의 확대, 연속식 증류, 블렌디드 스카치의 성장.'],
 maker:["Maker’s Mark · Cask Strength",'https://www.makersmark.com/bourbons/makers-mark-cask-strength','배치별 병입 도수와 제품 설명.'],
 broken:['Breaking Bourbon · Broken Barrel CS','https://www.breakingbourbon.com/review/broken-barrel-cask-strength-bourbon','오크 조각을 이용한 피니시. 제조사 페이지 접근이 어려워 독립 리뷰를 보조 출처로 사용했습니다.'],
 turkey:['Wild Turkey · Rare Breed','https://www.wildturkeybourbon.com/products/rare-breed/','배럴 프루프 버번. 유통 국가별 도수 표기가 달라 실제 병을 확인해야 합니다.'],
 rye:['Michter’s · US★1 Rye','https://michters.com/us1-kentucky-straight-rye/','싱글 배럴 라이의 성격.'],
 talisker:['Talisker · 18 Year Old','https://www.malts.com/en-us/products/talisker-18-year-old-single-malt-scotch-whisky-750ml','숙성된 해안 풍미의 기준 후보.'],
 caol:['Caol Ila · 18 Year Old','https://www.malts.com/en-gb/products/caol-ila-18-year-old-single-malt-scotch-whisky','43%, 오일·모닥불·염분의 풍미.'],
 hp:['Highland Park · 18 Year Old','https://www.highlandparkwhisky.com/en-us/products/18-year-old-single-malt-whisky','셰리 시즈닝 오크, 과실·향신료·연기의 조합.'],
 bowmore:['Bowmore · 18 Sherry Oak Cask','https://www.bowmore.com/en-gb/whiskies/18-year-old-sherry-oak-cask','현재 제품명. 이전 대화의 구형 18년과 구분합니다.'],
 benromach:['Benromach · 15 Years Old','https://www.benromach.com/en-us/whisky/aged-15-years','스페이사이드의 스모키한 몰트.'],
 kilkerran:['Kilkerran · 12 Year Old','https://kilkerran.scot/kilkerran-bottlings/12yo/','가벼운 피트, 46%, 버번·셰리 캐스크 조합.'],
 springbank:['Springbank · 코어 제품','https://www.springbank.scot/whisky/springbank-range/','15년의 셰리와 피트 표현. 기본 구성의 교체 후보.'],
 dronach:['Glendronach · 18 Year Old','https://www.glendronachdistillery.com/product/aged-18-years/','졸인 과일·견과·초콜릿 풍미.'],
 macallan:['Macallan · Sherry Oak 18, 2026','https://www.themacallan.com/en-us/single-malt-scotch-whisky/sherry-oak-18-years-old-2026-release','연간 릴리스와 셰리 시즈닝 오크 설명.'],
 cuvee:['GlenAllachie · 2012 Cuvée 출시 자료','https://theglenallachie.com/news/glenallachie-introduces-innovative-cuvee-wine-cask-release/','48% 한정 릴리스, 여러 와인 피니시 원액의 결합.'],
 tamdhu:['Tamdhu · 15년 공식 지역 사이트','https://tamdhu.com.tw/classic-whiskies-tamdhu-15.html','15년 셰리 캐스크 제품.'],
 farclas:['Glenfarclas · 공식 제품군','https://glenfarclas.com/whisky/','전통 셰리 몰트의 비교 후보.'],
 deanston:['Deanston · 18 Year Old','https://deanstonmalt.com/products/18-year-old','버번 캐스크 중심의 몰트.'],
 clynelish:['Clynelish · 14 Year Old','https://www.malts.com/en-gb/products/clynelish-14-year-old-single-malt-scotch-whisky-70cl','왁시한 질감, 과실·해안의 풍미.'],
 royal:['Royal Salute · 21 Blended Grain','https://www.royalsalute.com/en/whisky/the-blended-grain/','21년 이상 그레인 원액, 미국산 오크. Signature Blend와 다른 제품.'],
 compass:['Compass Box · Orchard House','https://www.compassboxwhisky.com/products/orchard-house-1','46% 블렌디드 몰트. 사과·배와 원액 중심의 표현.'],
 kavalan:['Kavalan · 유럽 제품 안내','https://www.kavalanwhisky.eu/en/whiskies/','Solist Vinho Barrique 제품군. 도수와 통은 병마다 확인합니다.'],
 hakushu:['Suntory · Hakushu 12','https://house.suntory.com/hakushu-whisky/hakushu-12-years-old','허브·풋사과·은근한 스모크.'],
 kione:['기원 배치 8 CS · 유통 상품','https://web.dailyshot.co/m/item/36044/reviews?item=524709','해당 배치의 유통 흔적 확인. 향미는 배치별로 달라집니다.'],
 redbreast:['Redbreast · 15 Year Old','https://www.redbreastwhiskey.com/en/whiskey-collections/redbreast-15-year-old-whiskey/','몰팅·비몰팅 보리, 3회 증류, 46%.'],
 yoichi:['Nikka · Yoichi / Miyagikyo','https://www.nikka.com/en/brands/yoichi_miyagikyo/','서로 다른 증류·풍미 표현.'],
 springprice:['Springbank 15 · 국내 판매 사례','https://dailyshot.co/m/item/1646','조회 시 53.9만 원인 판매 사례. 전국 최저가가 아니며 기본 구성에서 제외한 판단의 참고 자료.']
};
const BEER_GROUPS={all:'전체 지도',favorites:'관심 축',lager:'라거',hop:'홉 · IPA',dark:'다크 · 배럴',yeast:'밀 · 벨기에',wild:'산미 · 야생발효'};
const BEERS = [
 ['helles','뮌헨 헬레스','Munich Helles','lager','4.7–5.4%','#d9b95f',[4,2,0,0,3],'갓 구운 빵, 은은한 허브. 몰트가 중심이고 끝은 부드럽게 마른다.','Spaten Münchner Hell · Augustiner Lagerbier Hell · Weihenstephaner Original Helles','필스너의 성공에 뮌헨이 대응하며 1894년에 등장했다. 밝은 맥주를 만들되 바이에른의 몰트 중심 균형을 지켰다는 점을 읽자.','몰트 향의 달콤한 인상과 실제 잔당을 구별해보자.','helles',true],
 ['czech','체코 필스너','Czech Premium Pale Lager','lager','대체로 4–6%','#c6a13d',[3,4,0,0,3],'빵 같은 몰트와 허브성 홉, 둥근 질감 속 선명한 쓴맛.','Pilsner Urquell','1842년 플젠의 황금색 라거가 세계의 밝은 맥주에 큰 영향을 줬다. 체코에서는 색과 원맥즙 농도에 따른 분류도 함께 사용한다.','헬레스보다 홉이 앞으로 나오는가? 거친 쓴맛과 선명한 쓴맛은 다르다.','czech',true],
 ['german','독일 필스','German Pils','lager','대체로 4–5%','#d3bd6a',[2,4,0,0,2],'드라이하고 날렵한 마무리, 꽃·풀·허브 계열 홉.','Jever · Bitburger','체코의 밝은 라거를 독일의 원료·물·양조 취향으로 재해석했다. 모든 독일 필스가 같은 강도로 쓰지는 않다.','같은 온도에서 체코 필스너와 질감·끝맛을 비교한다.','bjcp',true],
 ['dunkel','뮌헨 둔켈','Munich Dunkel','lager','대체로 4–6%','#8c4b27',[5,1,2,0,3],'토스트와 빵껍질, 둥근 몰트. 커피 같은 강한 로스트는 절제된다.','Ayinger Altbairisch Dunkel','밝은 몰트가 보편화되기 전 바이에른의 어두운 라거 전통을 보여준다. 검은색을 곧바로 스타우트로 읽으면 이 계보가 사라진다.','헬레스와의 차이를 색보다 빵껍질·토스트에서 찾자.','darklager',false],
 ['schwarz','슈바르츠비어','Schwarzbier','lager','대체로 4–5%','#40362c',[3,2,3,0,2],'짙은 색, 가벼운 로스트, 비교적 산뜻한 몸체.','Köstritzer Schwarzbier','독일의 검은 라거 전통. 포터·스타우트와 발효 배경이 다르며 색이 진해도 무겁거나 고도수일 필요가 없다.','검은 맥주인데도 가볍게 느껴지는 이유를 생각한다.','darklager',false],
 ['marzen','메르첸','Märzen','lager','대체로 5–6%','#b77936',[5,2,1,0,3],'호박색, 토스트, 풍성한 몰트.','Ayinger Oktober Fest-Märzen','서늘한 계절의 양조와 저장이라는 배경을 가진 축제 라거. 현대 옥토버페스트의 밝은 Festbier와 구분해야 한다.','Festbier와 색·토스트·질감을 비교한다.','bjcp',false],
 ['festbier','페스트비어','Festbier','lager','대체로 5–6%','#cda64f',[4,2,0,0,3],'밝은 금색, 헬레스보다 든든한 몰트와 도수.','Weihenstephaner Festbier · Paulaner Oktoberfest Bier','축제에서 반복해 마시기 좋은 밝은 라거로 자리 잡았다. 메르첸과 연관되지만 동일한 이름의 대체어는 아니다.','강한 헬레스와 토스트 풍미의 메르첸 사이에서 위치를 잡자.','helles',false],
 ['bock','복 · 도펠복','Bock / Doppelbock','lager','대체로 6–10%','#864924',[5,1,1,0,5],'농축된 빵·몰트·말린 과일. 도펠복은 한층 깊다.','Einbecker Ur-Bock · Ayinger Celebrator · Paulaner Salvator','복은 아인베크의 양조 전통과 뮌헨의 재해석을 잇는다. 도펠복은 수도원과 강한 몰트 맥주의 역사도 품고 있다. 밝은 버전도 존재한다.','임페리얼 스타우트와 비교하면 로스트 없이 생기는 깊이를 배운다.','bock',false],
 ['rauch','라우흐비어','Rauchbier','lager','제품별','#9d652e',[4,2,1,0,3],'훈연 몰트에서 오는 장작·햄 같은 향.','Schlenkerla Märzen','맥아 건조에 연기가 개입하던 역사를 밤베르크가 보존했다. 훈연은 여러 기본 스타일 위에 붙을 수 있다.','위스키의 피트 연기와 연료·곡물 처리의 차이를 비교하자.','bjcp',false],
 ['kolsch','쾰쉬','Kölsch','yeast','대체로 4–5%','#d8c57d',[2,2,0,0,2],'매우 절제된 과실, 깨끗한 몰트와 산뜻한 끝.','Früh Kölsch · Gaffel Kölsch','쾰른의 상면발효 전통에 차가운 컨디셔닝이 결합한다. 맛이 깨끗하다고 모두 라거인 것은 아니다.','헬레스와 눈을 가리고 비교하면 발효 분류의 한계를 느낀다.','bjcp',false],
 ['weiss','바이스비어','Weissbier / Hefeweizen','yeast','대체로 4–6%','#cda756',[3,1,0,1,3],'바나나·정향과 부드러운 밀 질감.','Weihenstephaner Hefeweissbier · Schneider Weisse','남독일의 밀맥주 전통. 바나나와 정향 향은 일반적으로 바나나·정향 첨가보다 효모의 발효에서 나온다.','벨기에 Witbier의 오렌지·고수씨와 원인을 나눠 기록한다.','bjcp',false],
 ['wit','벨기에 밀맥주','Witbier','yeast','대체로 4–6%','#d1c58f',[2,1,0,1,2],'시트러스·고수씨와 가벼운 밀의 질감.','Hoegaarden · St. Bernardus Wit','벨기에의 밀·향신료 전통을 잇고 현대에 부흥한 스타일. 독일 바이스비어와 같은 밀맥주라도 향을 설계하는 방식이 다르다.','밀 사용량만 보지 말고 효모와 향신료를 따로 본다.','bjcp',false],
 ['bitter','비터 · 영국 페일 에일','Bitter / English Pale Ale','hop','대체로 3–6%','#b48a42',[4,3,0,0,2],'비스킷·약한 과실과 흙·꽃 계열 홉의 균형.','Fuller’s London Pride · Timothy Taylor Landlord','밝게 건조한 몰트, 지역 홉, 펍의 캐스크 에일 문화가 함께 만든 계열. 이름이 Bitter라고 현대 IPA보다 더 쓴 것은 아니다.','강한 향보다 몰트와 홉이 번갈아 나타나는 균형을 본다.','bjcp',false],
 ['apa','아메리칸 페일 에일','American Pale Ale','hop','대체로 4.5–6%','#c7963e',[3,4,0,0,3],'감귤·솔향 홉과 받쳐주는 몰트.','Sierra Nevada Pale Ale','미국 크래프트 부흥에서 미국산 홉의 향을 일상적인 맥주로 정착시켰다. Sierra Nevada Pale Ale은 1980년부터 중요한 기준점이다.','영국 페일 에일과 홉 향의 어휘를 비교한다.','bjcp',false],
 ['west','웨스트코스트 IPA','West Coast IPA','hop','대체로 6–8%','#c39433',[2,5,0,0,2],'감귤 껍질·솔·수지, 또렷한 쓴맛과 마른 마무리.','Ballast Point Sculpin · Stone IPA','미국 서부에서 홉 향과 드라이한 마무리를 강조한 흐름이다. Sculpin은 7%, 70 IBU의 대표적인 샌디에이고 사례.','과일을 넣지 않아도 과일 향이 날 수 있다. 향과 쓴맛을 따로 기록한다.','sculpin',true],
 ['dipa','더블 IPA','Double / Imperial IPA','hop','대체로 7.5–10%','#b1822b',[3,5,0,0,4],'홉의 밀도와 알코올을 높이되 마무리의 균형이 관건.','Russian River Pliny the Elder','Pliny the Elder는 2000년 DIPA 행사에서 시작했다. DIPA는 강도의 축이어서 West Coast·Hazy와 교차할 수 있다.','고도수라는 이유만으로 홉이 더 거칠어야 하는 것은 아니다.','pliny',false],
 ['hazy','헤이지 IPA','Hazy / New England IPA','hop','대체로 6–9%','#d8b861',[2,5,0,0,4],'열대과일 같은 홉 향, 부드러운 질감, 상대적으로 낮은 체감 쓴맛.','The Alchemist Heady Topper · Tree House Julius · Trillium Congress Street','뉴잉글랜드에서 분화해 2010년대에 확산했다. West Coast의 다음 단계라기보다 홉을 다르게 표현하는 갈래다.','탁함 자체가 품질은 아니다. 산화·거친 홉 자극도 확인한다.','haze',false],
 ['porter','포터','English Porter','dark','대체로 4–6%','#57392b',[4,2,3,0,3],'갈색 빵·초콜릿·부드러운 로스트.','Fuller’s London Porter','18세기 초 런던의 상업 양조와 함께 성장했다. 역사적 포터는 시대마다 변했고, 오늘의 심사 스타일 하나로 과거 전부를 설명할 수 없다.','로스트가 커피처럼 날카로운지, 초콜릿처럼 둥근지 비교한다.','porter',false],
 ['dry','드라이 · 수출 스타우트','Dry / Foreign Extra Stout','dark','제품별 약 4–8%','#332b25',[2,2,5,0,3],'볶은 곡물의 마른 인상. 수출형은 농도·도수가 올라간다.','Guinness Draught · Guinness Foreign Extra Stout','Stout는 원래 강하다는 뜻으로 쓰였고 Stout Porter에서 명칭이 분화했다. Guinness는 그 가운데 아일랜드 계열의 대표다.','질소 거품의 부드러움과 실제 잔당을 혼동하지 말자.','stout',false],
 ['milk','밀크 · 오트밀 스타우트','Milk / Oatmeal Stout','dark','제품별','#463023',[4,2,4,0,4],'밀크 스타우트는 유당의 단맛, 오트밀은 귀리의 질감에 초점.','Left Hand Milk Stout · Samuel Smith Oatmeal Stout','스타우트가 로스트 강도뿐 아니라 잔당과 곡물의 촉감으로도 분화한 사례다. 두 이름은 같은 제조법을 뜻하지 않는다.','질감과 당도를 별개의 항목으로 메모한다.','bjcp',false],
 ['imperial','임페리얼 스타우트','Imperial Stout / RIS','dark','대체로 8–12%+','#2d2723',[5,3,5,0,5],'카카오·에스프레소·검은 과일과 큰 몸체.','Samuel Smith Imperial Stout · Old Rasputin · Yeti · Bell’s Expedition · Ten Fidy','강한 영국 포터·스타우트의 수출 역사, 특히 러시아·발트해 시장과 연결된다. 미국 크래프트가 도수·홉·로스트를 확장했다.','배럴에 들어가기 전 기본 맥주가 어떤 맛인지 먼저 익힌다.','stout',true],
 ['baltic','발틱 포터','Baltic Porter','dark','대체로 6.5–9.5%','#573426',[5,2,3,0,4],'말린 과일·매끈한 몰트와 절제된 로스트.','Sinebrychoff Porter · Żywiec Porter','영국 포터의 북유럽 수출과 현지 양조가 만난 갈래. 많은 현대 사례가 라거 효모나 차가운 발효를 사용한다.','임페리얼 스타우트와 과실·로스트·발효 인상을 비교한다.','bock',false],
 ['ba','배럴 숙성 임페리얼 스타우트','Barrel-Aged Imperial Stout','dark','제품·빈티지별','#3c2a23',[5,2,5,0,5],'로스트 위에 바닐라·오크·증류주 향이 겹친다.','Goose Island Bourbon County · Firestone Walker Parabola · The Bruery Black Tuesday','미국의 버번 배럴 활용이 현대 BA 스타우트를 크게 확장했다. Barrel-aged는 기본 스타일 위에 적용하는 공정이다.','배럴 향, 베이스 맥주, 단맛, 알코올이 얼마나 자연스럽게 이어지는가?','bruery',true],
 ['pastry','페이스트리 스타우트','Pastry / Dessert Stout','dark','제품별','#4b3026',[5,1,4,0,5],'디저트를 연상시키는 농도와 재료의 조합.','Bottle Logic · WeldWerks Medianoche 변형 · The Bruery 디저트 변형','현대 크래프트에서 바닐라·코코넛·카카오·커피·메이플 등을 적극 사용한다. 모든 페이스트리가 배럴 숙성이거나 모든 BA가 페이스트리는 아니다.','바닐라빈 첨가와 오크의 바닐라 향은 라벨·양조 정보로 구분한다.','firestone',false],
 ['barleywine','발리와인 · 올드 에일','Barleywine / Old Ale','dark','제품별 약 7–12%+','#914c29',[5,3,1,0,5],'토피·말린 과일·깊은 몰트. 로스트가 중심인 스타우트와 다르다.','Sierra Nevada Bigfoot · Fuller’s Golden Pride · The Bruery 고도수 에일','영국의 강한 저장용 에일 전통을 미국이 재해석했다. 미국식 발리와인은 홉도 강할 수 있고, 배럴 숙성 버전은 위스키와 연결된다.','BA 임스가 좋다면 로스트를 줄인 배럴 맥주로 확장해보자.','bjcp',false],
 ['saison','세종','Saison','yeast','제품별','#c2a052',[2,2,0,1,2],'후추·과실·드라이함, 살아 있는 탄산.','Saison Dupont','벨기에·프랑스 접경의 농가 양조 배경을 현대에 다양하게 재해석했다. 모든 세종이 시거나 야생발효인 것은 아니다.','효모의 향신료 같은 향을 홉의 쓴맛과 구분한다.','saison',false],
 ['dubbel','두벨','Belgian Dubbel','yeast','대체로 6–8%','#935129',[4,1,1,0,3],'건포도·카라멜·효모의 과실 향.','Westmalle Dubbel','수도원 맥주 문화와 현대 벨기에 갈색 강한 에일의 기준. 두벨·트리펠은 단순 원료량 배수 공식이 아니다.','셰리 위스키와 닮은 과실 향도 만드는 원인은 다를 수 있다.','belgian',false],
 ['tripel','트리펠 · 골든 스트롱','Tripel / Belgian Golden Strong','yeast','대체로 7.5–10.5%','#d8ba59',[3,2,0,0,3],'밝은 색, 높은 도수, 효모의 과실·향신료와 드라이함.','Westmalle Tripel · Duvel','Westmalle의 현대 트리펠과 Duvel식 골든 스트롱은 닮았지만 다른 스타일이다. 트리펠은 상대적으로 몰트·향신료의 무게를 더 느낄 수 있다.','색이 밝다는 이유로 도수가 낮다고 추측하지 않는다.','belgian',false],
 ['strong','벨기에 다크 스트롱','Belgian Dark Strong Ale','yeast','대체로 8–12%','#713e2c',[5,1,1,0,5],'무화과·건포도·풍성한 발효 향과 알코올.','Rochefort 10 · Westvleteren 12','수도원·벨기에 강한 에일의 어두운 갈래. Trappist는 수도원 생산과 관련된 명칭이며 맛 스타일 하나를 가리키지 않는다.','임스와 비교해 검은 과일은 비슷해도 로스트가 덜한지 보자.','belgian',false],
 ['brett','브렛 계열 에일','Brett / Mixed-Fermentation Ale','wild','제품별','#b38c4a',[2,1,0,2,2],'건초·가죽·과실 등 시간이 바꾸는 발효의 표현.','Orval · 숙성 세종 · 미국 Wild Ale','Brettanomyces 효모를 쓰는 방식은 매우 다양하다. Brett 존재와 강한 산미는 같은 뜻이 아니며 병입 후 변화도 중요하다.','Orval의 병입일이 다른 병을 비교하면 시간이라는 변수를 배운다.','bjcp',false],
 ['gueuze','람빅 · 괴즈','Lambic / Gueuze','wild','대체로 5–8%','#b89a58',[1,0,0,5,2],'산미·건초·과실과 건조한 마무리, 괴즈는 풍성한 탄산.','Cantillon Gueuze · 3 Fonteinen Oude Geuze · Boon Oude Geuze','자연발효한 람빅을 숙성하고 서로 다른 연령의 원액을 섞어 괴즈를 만든다. 양조장뿐 아니라 블렌더의 선택도 맛을 만든다.','산미의 세기보다 산미·과실·발효 향이 엮이는 방식을 본다.','gueuze',false],
 ['flanders','플랜더스 레드 · 고제','Flanders Red / Gose','wild','제품별','#a25c3c',[2,0,0,4,2],'플랜더스는 산미·과실·숙성, 고제는 산미·소금·고수씨의 조합.','Rodenbach Grand Cru · 전통 Gose · Berliner Weisse','역사와 공정이 다른 산미 맥주들이다. 현대 고제·베를리너 계열에는 빠른 케틀 사워링도 많아 람빅의 장기 자연발효와 분리해 이해한다.','신맛이라는 결과만으로 같은 계보에 넣지 말자.','bjcp',false]
].map(([id,name,en,group,abv,color,profile,desc,examples,history,question,source,favorite])=>({id,name,en,group,abv,color,profile,desc,examples,history,question,source,favorite}));
// Related traditions keep separate cards so their different histories remain visible.
function splitBeer(id,variants){const index=BEERS.findIndex(b=>b.id===id),base=BEERS[index];BEERS.splice(index,1,...variants.map(v=>({...base,...v})));}
splitBeer('bock',[
 {id:'bock',name:'복',en:'Bock',abv:'대체로 6–7%',profile:[5,1,1,0,4],desc:'진한 빵과 몰트, 따뜻한 알코올. 밝은 복도 존재한다.',examples:'Einbecker Ur-Bock',history:'아인베크의 강한 맥주 전통이 남독일에서 재해석된 갈래. 밝은 Helles Bock와 어두운 Dunkles Bock도 구별한다.'},
 {id:'doppelbock',name:'도펠복',en:'Doppelbock',abv:'대체로 7–10%',examples:'Ayinger Celebrator · Paulaner Salvator',desc:'농축된 빵·몰트·말린 과일, 큰 몸체.',history:'바이에른 수도원의 강한 몰트 맥주와 연결되는 역사. 복보다 강한 경향이지만 단순히 재료를 정확히 두 배 넣는다는 뜻은 아니다.'}
]);
splitBeer('dry',[
 {id:'dry',name:'드라이 스타우트',en:'Irish / Dry Stout',abv:'대체로 4–5%',desc:'마른 로스트, 볶은 곡물과 비교적 가벼운 몸체.',examples:'Guinness Draught',question:'질소 거품의 매끈함과 실제 당도를 구별한다.'},
 {id:'foreign',name:'포린 엑스트라 스타우트',en:'Foreign Extra Stout',abv:'대체로 6–8%',desc:'수출형의 더 큰 로스트·농도·알코올.',examples:'Guinness Foreign Extra Stout',profile:[4,3,5,0,4],history:'강한 수출용 스타우트의 흐름과 연결되는 갈래. 오늘의 Dry Stout와 비교하면 같은 브랜드 안에서도 강도와 발효 인상이 달라진다.',question:'Guinness Draught와 탄산·로스트·농도의 차이를 각각 적는다.'}
]);
splitBeer('milk',[
 {id:'milk',name:'밀크 · 스위트 스타우트',en:'Milk / Sweet Stout',examples:'Left Hand Milk Stout',desc:'유당 등을 활용한 단맛과 로스트의 조합.',history:'스타우트가 마른 로스트뿐 아니라 단맛을 남기는 방향으로도 분화한 사례. Milk는 우유를 그대로 붓는다는 일반 규칙이 아니다.'},
 {id:'oatmeal',name:'오트밀 스타우트',en:'Oatmeal Stout',examples:'Samuel Smith Oatmeal Stout',desc:'귀리가 더하는 부드러운 질감과 둥근 로스트.',history:'곡물 선택으로 스타우트의 촉감을 조절한 갈래. 오트밀과 밀크 스타우트는 서로 다른 원료·목적을 가진다.',question:'단맛이 크지 않아도 매끄럽게 느껴지는지 관찰한다.'}
]);
splitBeer('barleywine',[
 {id:'barleywine',name:'발리와인',en:'English / American Barleywine',examples:'Fuller’s Golden Pride · Sierra Nevada Bigfoot',desc:'토피·말린 과일·깊은 몰트. 미국식은 홉도 강할 수 있다.'},
 {id:'oldale',name:'올드 에일',en:'Old Ale',examples:'Theakston Old Peculier · The Bruery의 Old Ale 계열',desc:'몰트·말린 과일·숙성의 표현에 주목하는 에일.',history:'영국의 저장과 숙성 에일 전통을 읽는 갈래. 발리와인과 겹치는 영역이 있지만 이름이 같은 스타일을 뜻하지는 않는다.',question:'견과·건과일의 숙성 인상이 좋은 복합성인지 과한 산화인지 비교한다.'}
]);
splitBeer('tripel',[
 {id:'tripel',name:'트리펠',en:'Belgian Tripel',abv:'대체로 7.5–9.5%',examples:'Westmalle Tripel',desc:'밝은 색, 큰 도수, 효모의 과실·향신료와 드라이함.',history:'Westmalle를 중요한 기준점으로 하는 현대 벨기에 강한 에일. 밝은 색과 높은 도수, 효모의 향신료 표현을 함께 본다.'},
 {id:'golden',name:'벨기에 골든 스트롱',en:'Belgian Golden Strong Ale',abv:'대체로 7.5–10.5%',examples:'Duvel',desc:'밝고 발포감이 크며, 과실 향 뒤로 마른 마무리.',history:'Duvel을 기준점으로 읽는 강한 금색 벨기에 에일. 트리펠과 닮았지만 더 가볍게 느껴지는 몸체와 드라이한 표현을 비교할 수 있다.',profile:[2,2,0,0,2],source:'saison'}
]);
splitBeer('gueuze',[
 {id:'lambic',name:'람빅',en:'Lambic',desc:'자연발효·시간의 표현. 전통적인 비혼합 람빅은 탄산이 매우 적다.',examples:'Cantillon의 비혼합 Lambic',history:'브뤼셀과 주변 지역의 자연발효·숙성 전통. 어린 맥주와 오래된 맥주의 차이는 블렌딩의 재료가 된다.',question:'탄산이 적을 때 산미·발효 향·질감이 어떻게 느껴지는가?'},
 {id:'gueuze',name:'괴즈',en:'Gueuze / Geuze',desc:'숙성이 다른 람빅을 섞어 만든 복합적 산미와 풍성한 탄산.'}
]);
splitBeer('flanders',[
 {id:'flanders',name:'플랜더스 레드 · 브라운',en:'Flanders Red / Oud Bruin',desc:'과실·산미·몰트와 숙성의 조합.',examples:'Rodenbach Grand Cru · Oud Bruin 계열',history:'플랑드르의 산미 있는 에일 전통. 레드와 브라운도 통 사용·몰트·산미 표현이 달라 하나로 완전히 같다고 볼 수 없다.',question:'괴즈와 산미의 세기보다 과실·몰트의 위치를 비교한다.'},
 {id:'gose',name:'고제',en:'Gose',abv:'대체로 4–5%',color:'#c9b16c',profile:[2,0,0,3,2],desc:'산미에 소금·고수씨의 인상이 더해진 밀맥주.',examples:'Leipziger Gose · 현대 크래프트 Gose',history:'독일의 지역 밀맥주 전통에서 이어지는 스타일. 현대에는 케틀 사워링 제품이 많고 과일을 더한 변형도 흔하다.',question:'짠맛이 강하지 않아도 소금이 질감을 바꾸는지 관찰한다.'},
 {id:'berliner',name:'베를리너 바이세',en:'Berliner Weisse',abv:'대체로 3–4%',color:'#d4c387',profile:[1,0,0,4,1],desc:'가벼운 몸체, 낮은 도수, 선명한 산미의 밀맥주.',examples:'Berliner Weisse · 현대 과일 변형',history:'베를린의 산미 밀맥주 전통. 시럽과 곁들이는 서비스 문화, 현대의 빠른 산미 공정·과일 첨가 제품을 구분해 읽는다.',question:'고제의 소금·향신료와 다른, 산미 자체의 표현을 본다.'}
]);
const lagerBase=BEERS.find(b=>b.id==='marzen');
BEERS.splice(BEERS.findIndex(b=>b.id==='marzen'),0,{...lagerBase,id:'vienna',name:'비엔나 라거',en:'Vienna Lager',abv:'대체로 4.5–5.5%',desc:'호박색, 우아한 토스트 몰트와 드라이한 균형.',examples:'전통 Vienna Lager · 현대 크래프트 비엔나 라거',history:'19세기 오스트리아의 밝아진 몰트와 라거 기술의 만남. 메르첸보다 상대적으로 가벼운 몰트·균형을 비교하며 지역 밖의 재해석도 살핀다.',question:'메르첸과 비교해 토스트·몸체·마무리의 차이를 적는다.'});
BEERS.splice(BEERS.findIndex(b=>b.id==='kolsch')+1,0,{...BEERS.find(b=>b.id==='kolsch'),id:'alt',name:'알트비어',en:'Altbier',color:'#a27339',desc:'토스트 몰트와 단단한 쓴맛, 깨끗한 발효 인상.',examples:'Düsseldorf Altbier · Uerige',history:'뒤셀도르프의 상면발효 맥주 전통과 차가운 숙성. 쾰쉬와 마찬가지로 깨끗한 맛이 곧 라거를 뜻하지 않음을 보여준다.',question:'쾰쉬와 몰트 색·홉·질감이 어떻게 다른가?',profile:[4,3,1,0,3]});
const WHISKY_GROUPS={all:'24병 전체',peat:'섬세한 피트',sherry:'셰리 · 와인',american:'버번 · 라이',spirit:'원액 · 질감',blend:'블렌딩',world:'세계 위스키'};
const WHISKIES=[
 [1,'Maker’s Mark Cask Strength','메이커스 마크 CS','american',10,'배치별','밀 버번 · 새 오크','바닐라 · 캐러멜 · 밀의 부드러움','선호한 버번을 기준점으로 유지. Rare Breed와 곡물 배합의 차이를 비교한다.','고도수라 처음부터 섬세하게 느껴지지는 않을 수 있다. 물을 조금 더한 잔과 비교.','Maker’s Mark 101','maker',1,[2,1,4,4,5]],
 [2,'Broken Barrel Cask Strength','브로큰 배럴 CS','american',11,'실물 확인','버번 · 오크 스테이브 피니시','오크 · 과실 · 스파이스','기존 관심 병. 오크 조각을 더하는 피니시와 전통 통 숙성을 비교하는 실험용.','일반적인 통 교체 피니시와 제조 방식이 다르다. 병의 Oak Bill을 확인.','Woodford Reserve Double Oaked','broken',2,[2,1,4,5,5]],
 [3,'Wild Turkey Rare Breed','와일드 터키 레어 브리드','american',10,'국가·배치 확인','버번 · 배럴 프루프','구운 곡물 · 바닐라 · 후추','밀 버번과 대비할 전통적인 버번. 가격을 과도하게 쓰지 않고 미국 축을 완성.','병입 도수와 용량은 유통 국가·릴리스를 확인.','Wild Turkey 101','turkey',2,[2,1,4,4,5]],
 [4,'Michter’s US★1 Rye','믹터스 US1 라이','american',10,'42.4%','라이 · 싱글 배럴','감귤 · 후추 · 버터스카치','버번 셋만으로는 빠지는 라이 곡물의 표현을 별도 한 칸으로 확보.','라이도 달고 둥글 수 있다. 후추 하나만 찾으면 차이가 작게 느껴질 수 있다.','Wild Turkey 101 Rye','rye',3,[2,0,3,3,3]],
 [5,'Talisker 18','탈리스커 18','peat',33,'45.8%','Skye · 버번/셰리 계열','후추 · 해안 · 숙성 과실','피트 축의 중심. 향이 큰 폭발보다 과실·연기·후추가 잇는 여운을 본다.','18년이어도 연기와 후추는 또렷하다. 무조건 순한 술을 뜻하지 않는다.','Talisker Distillers Edition','talisker',1,[3,4,3,3,4]],
 [6,'Caol Ila 18','쿨일라 18','peat',38,'43%','Islay · 숙성 피트','모닥불 · 오일 · 염분','Talisker의 후추와 대비하는 오일·해안의 표현. 주인장 취향의 기준 병.','장기 숙성만으로 피트가 약하다고 보장되지는 않는다. 재고·가격 편차 확인.','Caol Ila 12 + 시음으로 18년 확인','caol',1,[2,4,2,3,3]],
 [7,'Highland Park 18','하이랜드 파크 18','peat',33,'실물 확인','Orkney · 셰리 시즈닝 오크','꿀 · 말린 과일 · 부드러운 연기','셰리와 피트를 이어주는 병. 해안형 둘에 비해 과실과 꿀의 비중을 살핀다.','구형·신형 패키지와 판매 지역의 사양을 구분. 숙성연수만 같다고 같은 병은 아니다.','Highland Park 15','hp',1,[4,3,4,3,3]],
 [8,'Bowmore 18 Sherry Oak Cask','보모어 18 셰리 오크 캐스크','peat',30,'실물 확인','Islay · 셰리 오크','짙은 과실 · 초콜릿 · 스모크','과실과 연기의 교차를 읽는 자리. 기존 추천의 구형 18년과 현행 제품을 분리했다.','구형 18년의 과거 가격을 현행 제품에 적용하면 안 된다.','Bowmore 15 또는 구형 18년, 각각 별도 비교','bowmore',2,[4,3,4,4,3]],
 [9,'Benromach 15','벤로막 15','peat',17,'43%','Speyside · 버번/셰리','몰트 · 과실 · 은근한 모닥불','스페이사이드에도 피트가 있다는 반례. 강렬함보다 전통적 몰트와 연기의 결합.','흙·스모키함은 호불호가 있을 수 있다. 무피트 셰리와 구분해서 시음.','Benromach 10','benromach',2,[3,3,3,3,3]],
 [10,'Kilkerran 12','킬커란 12','peat',20,'46%','Campbeltown · 버번/셰리','시트러스 · 오일 · 가벼운 연기','캠벨타운의 질감과 약한 피트를 배우는 자리. 53.9만 원 판매 사례가 보인 Springbank 15 대신 기본안에 채택.','가벼운 피트여도 오일·흙 느낌은 개성이 있다. 과도한 희소성 프리미엄은 지양.','Springbank 15: 시음 후 예산 안에서 교체','kilkerran',3,[3,3,2,3,4]],
 [11,'Glendronach 18','글렌드로낙 18','sherry',35,'46%','Highland · 셰리','졸인 과일 · 견과 · 초콜릿','요청한 꾸덕한 셰리의 중심. Macallan 18과 구조·향신료·질감을 비교.','구형 Allardice와 새 패키지의 설명을 섞지 말고 실제 릴리스 확인.','Glendronach 15','dronach',1,[5,0,5,4,4]],
 [12,'Macallan 18 Sherry Oak','맥캘란 18 셰리 오크','sherry',55,'릴리스 확인','Speyside · 셰리 시즈닝 오크','말린 과일 · 생강 · 다크초콜릿','명성 높은 셰리의 상징 한 병. 브랜드의 가격을 맛과 별도로 판단할 비교 기준.','Double Cask 18과 다른 제품. 높은 브랜드 프리미엄이 취향상 만족을 보장하지 않는다.','Tamdhu 18 또는 Macallan 12 Sherry Oak','macallan',2,[5,0,4,5,4]],
 [13,'GlenAllachie 2012 Cuvée','글렌알라키 2012 뀌베','sherry',20,'48%','Speyside · 와인 피니시 블렌드','붉은 과실 · 초콜릿 · 향신료','와인 캐스크의 특이함 담당. Kavalan Vinho와 기후·원액·피니시의 차이를 비교.','2012 빈티지 한정 제품. 후속 Cuvée와 캐스크 구성이 다르므로 같은 병처럼 취급하지 않는다.','현행 GlenAllachie Cuvée: 구성·가격 확인 후','cuvee',3,[5,0,4,4,4]],
 [14,'Tamdhu 15','탐두 15','sherry',20,'46%','Speyside · 셰리 오크','과실 · 견과 · 오크 스파이스','셰리 캐스크에 집중한 증류소의 해석. Macallan의 명성과 분리해 맛을 비교한다.','다른 셰리 병과 역할이 겹친다. 이미 취향이 확고하면 18년 한 병으로 업그레이드도 가능.','Tamdhu 12','tamdhu',2,[4,0,4,4,4]],
 [15,'Glenfarclas 25','글렌파클라스 25','sherry',35,'43%','Speyside · 장기 숙성 몰트','견과 · 오래된 과실 · 오크','고도수 농축과 다른 장기 숙성의 여운을 배우는 한 자리.','25년 숫자만으로 18년보다 진하거나 우수하지 않다. 실제 유통 병·가격 확인.','Glenfarclas 15','farclas',3,[4,0,3,5,3]],
 [16,'Deanston 18','딘스톤 18','spirit',20,'46.3%','Highland · 버번 캐스크','꿀 · 몰트 · 바닐라','헬레스를 좋아하는 관심과 연결해 볼 몰트의 자리. 원료와 버번통의 비교적 밝은 표현.','이 연결은 취향의 가설이다. 맥주 몰트와 증류주의 몰트는 경험이 다르다.','Deanston 12','deanston',1,[3,0,3,3,4]],
 [17,'Clynelish 14','클라이넬리시 14','spirit',14,'46%','Highland · 원액 중심','왁스 · 과실 · 해안','피트·셰리 외에 질감이라는 새 축. 오일리함과 왁시함을 비교하는 데 유용.','왁스는 질감·향의 비유다. 처음에는 뚜렷하게 느껴지지 않을 수 있다.','Arran 10','clynelish',1,[4,1,2,2,4]],
 [18,'Royal Salute 21 Blended Grain','로얄살루트 21 블렌디드 그레인','blend',23,'실물 확인','그레인 블렌드 · 미국산 오크','꿀 · 크림 · 바닐라','이전부터 원한 그레인 전용 병. 몰트 중심 술장에 부드러운 질감의 대비를 준다.','Signature Blend 21, Malts Blend 21과 다른 제품인지 제품명 전체를 확인.','Compass Box Hedonism: 예산 재검토 후','royal',1,[3,0,4,3,3]],
 [19,'Compass Box Orchard House','컴파스 박스 오차드 하우스','blend',10,'46%','블렌디드 몰트','사과 · 배 · 꿀 · 가벼운 오크','그레인을 섞지 않은 블렌딩의 사례. 로얄살루트 그레인과 분류부터 대비된다.','가격이 낮아도 학습 역할은 선명하다. 연수 미표기를 품질 부족으로 읽지 않는다.','Johnnie Walker Green Label 15','compass',1,[5,0,3,2,3]],
 [20,'Kavalan Solist Vinho Barrique','카발란 솔리스트 비노 바리끄','world',33,'통별 CS','Taiwan · 와인 배럴','진한 과실 · 오크 · 높은 농도','대만 기후와 캐스크의 작용을 읽는 병. GlenAllachie Cuvée와 비교할 세계 위스키의 중심.','CS·싱글 캐스크의 도수와 맛은 통별로 달라진다. 다른 나라의 연수와 등가 비교 불가.','Kavalan Concertmaster: 별개의 포트 피니시','kavalan',2,[5,0,5,5,5]],
 [21,'Hakushu 12','하쿠슈 12','world',38,'43%','Japan · 싱글 몰트','허브 · 풋사과 · 은근한 연기','사용자가 원하는 섬세한 피트의 일본 해석. 24병으로 확장하며 추가하는 자리.','일본 위스키의 가격 프리미엄이 크다. 예산이 오르면 가장 먼저 재검토.','Hakushu Distiller’s Reserve','hakushu',3,[4,2,2,2,3]],
 [22,'Ki One Batch 8 CS','기원 배치 8 CS','world',22,'배치 라벨 확인','Korea · 싱글 몰트','몰트 · 과실 · 캐스크 변화 관찰','한국 위스키를 같은 선반에서 비교. 이전 관심 배치를 유지하되 구입 시 사양을 다시 읽는다.','도수·캐스크를 다른 배치와 섞지 않는다. 품절이면 현행 배치의 성격을 보고 대체.','기원 현행 CS 배치: 별도 시음 후','kione',3,[3,0,3,3,4]],
 [23,'Redbreast 15','레드브레스트 15','world',19,'46%','Ireland · 싱글 팟 스틸','과실 · 오일 · 향신료','몰팅·비몰팅 보리와 세 번의 증류라는 새 비교 축. 몰트 스카치의 바깥을 배운다.','모든 아일랜드 위스키가 같은 원료·3회 증류를 쓰는 것은 아니다.','Redbreast 12','redbreast',2,[4,0,3,3,4]],
 [24,'Nikka Yoichi Single Malt','니카 요이치 싱글 몰트','world',11,'45%','Japan · 싱글 몰트','훈연 · 몰트 · 묵직한 질감','하쿠슈의 허브와 대비할 일본 원액의 다른 표현. 연수 없는 병도 의미 있게 배치.','하쿠슈보다 강건하게 느껴질 수 있다. 더 부드러운 일본 축을 원하면 미야기쿄로.','Nikka Miyagikyo Single Malt','yoichi',3,[3,3,3,3,4]]
].map(([id,name,ko,group,price,abv,cask,notes,why,caution,alt,source,phase,profile])=>({id,name,ko,group,price,abv,cask,notes,why,caution,alt,source,phase,profile}));
const GROUP_COLORS={peat:'#687965',sherry:'#9a6249',american:'#bd934d',spirit:'#a29a60',blend:'#747c5b',world:'#687e81'};
const CASKS=[
 {name:'버번 배럴',en:'EX-BOURBON',text:'미국 버번에 쓰였던 통을 다시 사용한다. 바닐라·코코넛·꿀을 연상시키는 향이 흔하고, 원액의 과실·몰트와 어떻게 균형을 이루는지가 관건이다. 버번에서 비운 통이 스카치, 이어 맥주로 이동하기도 하지만 모든 통이 같은 순서로 순환하지는 않는다.',pair:'Deanston 18 ↔ Maker’s Mark CS ↔ Bourbon County',note:'새 오크의 버번과 사용한 버번통의 스카치는 같은 맛이 아니다.',source:'deanston'},
 {name:'셰리 오크',en:'SHERRY-SEASONED OAK',text:'셰리를 담아 시즈닝한 오크통을 사용하는 경우가 많다. 유럽산·미국산 오크, Oloroso·PX, 처음 쓰는 통인지 재사용 통인지에 따라 표현이 달라진다. 건과일·견과·스파이스는 전형적 연상이지만 자동으로 달다는 뜻은 아니다.',pair:'Glendronach 18 ↔ Macallan 18 ↔ Tamdhu 15',note:'셰리 캐스크는 오크 종류가 아니다. Oloroso 자체는 드라이한 와인이다.',source:'macallan'},
 {name:'와인 피니시',en:'WINE CASK FINISH',text:'기본 숙성 뒤 와인통으로 옮겨 추가 숙성할 수 있다. 붉은 과실·탄닌·산뜻한 인상이 원액과 어떻게 결합하는지 본다. 피니시 기간이 길수록 무조건 좋지 않고, 와인 향이 술 전체를 덮을 수도 있다.',pair:'GlenAllachie Cuvée ↔ Kavalan Vinho',note:'Vinho의 통 처리·숙성 방식과 Cuvée의 추가 숙성을 같은 공정으로 단정하지 않는다.',source:'cuvee'},
 {name:'새 오크 · 스테이브',en:'NEW OAK / STAVES',text:'새로 탄화한 오크통은 강한 나무 추출과 바닐라·스파이스를 만들 수 있다. Broken Barrel의 스테이브는 오크 판재를 추가하는 방식이다. 통 전체로 옮기는 숙성 방식과 접촉 면적·제조 설계가 다르다.',pair:'Rare Breed ↔ Broken Barrel CS',note:'Oak Bill은 원료 곡물 비율인 Mash Bill과 다르다.',source:'broken'},
 {name:'리필 · 시간',en:'REFILL & MATURATION',text:'앞서 사용한 통을 다시 채우면 대체로 나무의 추출이 덜 강해 원액을 보기 좋다. 숙성은 추출만이 아니라 산화·성분 변화가 함께 일어나는 과정이다. 긴 숙성이 항상 조화롭지는 않고 나무의 떫음이 두드러질 수도 있다.',pair:'Clynelish 14의 질감 ↔ 장기 숙성 몰트',note:'First fill은 그 통이 해당 위스키 숙성에 처음 쓰였다는 뜻. 항상 새 통은 아니다.',source:'scotchlaw'}
];
const BEER_FLIGHTS=[
 ['라거의 갈림길','Pilsner Urquell → Augustiner Hell → Weihenstephaner Helles','홉의 위치, 빵 향, 마무리의 질감. Spaten을 구하면 역사적 기준점으로 추가한다.','5–8℃ 부근에서 시작해 잔에서 온도 변화를 비교.'],
 ['어두운 색의 두 역사','Ayinger Dunkel → Fuller’s London Porter → Guinness Foreign Extra','라거의 토스트, 포터의 초콜릿, 수출 스타우트의 로스트. 같은 검은색 안의 차이를 본다.','8–12℃를 출발점으로 제품에 맞춰 조절.'],
 ['스타우트에 배럴이 더하는 것','Old Rasputin → Bourbon County → Parabola','베이스 맥주·버번통·단맛·알코올을 네 항목으로 적는다. 동일한 베이스가 아니므로 배럴만의 효과를 분리한 실험은 아니다.','고도수 제품은 50–80ml 정도의 비교 시음으로 나눠 마시기.'],
 ['더 브루어리의 농도','Parabola → Black Tuesday → 재료 첨가 BA 1종','기본 스타우트와 배럴의 결합을 익힌 뒤 첨가 재료의 역할을 읽는다. Black Tuesday는 반드시 빈티지 도수를 확인.','12–16℃까지 잔에서 천천히 변화 관찰. 보관 온도와 구별.'],
 ['홉을 표현하는 세 방법','Sierra Nevada Pale Ale → Sculpin → 신선한 Hazy IPA','홉의 과일 향과 체감 쓴맛을 따로 적는다. Pliny는 DIPA의 추가 비교로 배치한다.','같은 날 비슷한 온도·용량, 유통 신선도 우선.'],
 ['효모와 시간이 만드는 향','Saison Dupont → Orval → Westmalle Tripel → Rochefort 10','후추·건초·과실·검은 과일. 모두 같은 날 마시기보다 두 병씩 나눠 비교한다.','Orval의 병입일을 기록하고 산미와 Brett 향을 구분.'],
 ['블렌더의 산미','Rodenbach Grand Cru → Boon / 3 Fonteinen → Cantillon','산미 맥주의 서로 다른 공정과 역사를 읽는다. 강하게 시다는 이유로 더 복잡하다고 평가하지 않는다.','한 병을 나눠 시음하고 탄산·향·건조함을 함께 기록.']
];
const WHISKY_FLIGHTS=[
 ['곡물이 바뀌면','Maker’s Mark CS ↔ Rare Breed ↔ Michter’s Rye','밀을 쓴 버번, 다른 버번 배합, 라이의 차이. 도수가 달라 물을 넣은 비교도 함께 기록.'],
 ['해안 피트의 세 결','Caol Ila 18 ↔ Talisker 18 ↔ Highland Park 18','오일·모닥불, 후추·해안, 꿀·과실·연기의 위치를 본다. 연기 강도와 질감을 분리한다.'],
 ['셰리를 읽는 기준점','Glendronach 18 ↔ Macallan 18 ↔ Tamdhu 15','향을 적은 뒤 가격을 떠올린다. 건과일의 밀도, 떫음, 여운이 취향에 맞는지 본다.'],
 ['원액과 블렌딩','Deanston 18 ↔ Clynelish 14 ↔ Orchard House','몰트·왁스·사과/배. 강한 셰리·피트 없이도 구분되는 특징을 찾는다.'],
 ['와인과 기후','GlenAllachie Cuvée ↔ Kavalan Vinho ↔ Ki One CS','나라만으로 맛을 설명하지 말고 도수·통·원액 차이를 함께 읽는다.'],
 ['세계를 넓히는 병','Royal Salute Grain ↔ Redbreast 15 / Hakushu 12 ↔ Yoichi','그레인과 팟 스틸은 별도 날, 일본 두 병도 별도 날에 비교. 한 자리에서 네 병 모두 마실 필요는 없다.']
];
const QUIZ=[
 ['헬레스의 몰트 향이 달콤하다. 이것이 꼭 뜻하는 것은?', ['잔당이 많다','달콤한 향의 인상이 있다','에일 효모를 사용했다'],1,'몰트의 빵·곡물 향이 주는 인상과 혀에서 느끼는 당도는 다르다. 헬레스는 끝이 부드럽고 드라이할 수 있다.'],
 ['Barrel-aged는 맥주 분류의 어느 축일까?', ['기본 발효 계열 하나','숙성 공정','도수 등급'],1,'임페리얼 스타우트·발리와인·세종 등 여러 기본 스타일에 적용되는 공정이다.'],
 ['West Coast → DIPA → Hazy를 단일 역사로 읽기 어려운 이유는?', ['DIPA는 맥주가 아니다','강도와 향미 방향이라는 다른 축이 겹치기 때문','Hazy는 항상 라거이기 때문'],1,'DIPA는 강도의 표현이고 West Coast·Hazy는 향미·질감의 갈래다. Hazy DIPA도 가능하다.'],
 ['괴즈의 핵심은?', ['홉을 세 배 넣기','서로 다른 숙성 람빅을 블렌딩하기','스타우트에 와인을 섞기'],1,'숙성된 원액을 조합하고 병내 발효로 탄산·복합성을 만든다.'],
 ['싱글 몰트의 Single이 의미하는 것은?', ['통 하나','한 증류소','보리 한 품종'],1,'한 증류소의 몰트 위스키라는 뜻. 여러 통을 섞어 병입해도 싱글 몰트다.'],
 ['Royal Salute 21 Blended Grain에 대한 올바른 설명은?', ['몰트와 그레인을 섞은 Signature Blend와 같다','그레인 위스키들을 블렌딩한 별도 제품','몰트만 섞은 제품'],1,'그레인 전용 블렌드다. Signature Blend·Malts Blend와 이름 전체를 구별해야 한다.'],
 ['18년 숙성 위스키가 보장하는 것은?', ['항상 더 약한 피트','항상 더 좋은 맛','스카치 연수 표기에서 가장 어린 원액이 최소 18년 숙성'],2,'연수는 통 숙성 기간의 기준이지 취향 적합성·연기 강도·품질의 절대 순위가 아니다.'],
 ['피트 PPM 수치가 크면 반드시 더 자극적일까?', ['그렇다','아니다, 측정 단계·증류·숙성·도수도 영향을 준다','도수와 같은 숫자다'],1,'맥아의 페놀 수치와 최종 잔에서의 체감은 다르다. 동일 척도인지부터 확인한다.'],
 ['맥주 냉장고를 4℃로 설정했다면 BA 스타우트도 그 온도에서 바로 마셔야 할까?', ['그렇다','아니다, 따를 때 온도를 올려 향을 볼 수 있다','BA는 반드시 상온 보관해야 한다'],1,'차가운 보관은 품질 보존, 서빙 온도는 향미 표현을 위한 선택이다. 둘을 구분한다.'],
 ['Cask Strength와 Single Cask는 같은 뜻일까?', ['같다','다르다, 도수 방식과 원액 통 수의 차이다','둘 다 숙성연수다'],1,'CS는 병입 도수와 관련된 표현, Single Cask는 한 통의 병입이라는 뜻이다. 여러 통을 섞은 CS도 있다.']
];
