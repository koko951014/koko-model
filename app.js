const menus = [
  // 한식
  { name: '김치찌개', category: '한식', emoji: '🍲', desc: '얼큰하고 구수한 국민 찌개! 밥 도둑이 따로 없어요.' },
  { name: '된장찌개', category: '한식', emoji: '🥘', desc: '구수한 된장 향이 가득한 집밥 느낌의 찌개.' },
  { name: '제육볶음', category: '한식', emoji: '🥩', desc: '매콤달콤한 돼지고기 볶음, 흰쌀밥과 환상 궁합.' },
  { name: '불고기', category: '한식', emoji: '🥓', desc: '달콤짭조름한 소고기 불고기, 언제나 실패 없는 선택.' },
  { name: '비빔밥', category: '한식', emoji: '🥗', desc: '나물과 고추장이 어우러진 건강하고 맛있는 한 그릇.' },
  { name: '삼겹살', category: '한식', emoji: '🐷', desc: '구워 먹는 삼겹살, 상추에 싸 먹으면 더 맛있어요.' },
  { name: '순두부찌개', category: '한식', emoji: '🍜', desc: '부드러운 순두부와 얼큰한 국물의 조화.' },
  { name: '갈비탕', category: '한식', emoji: '🍖', desc: '깊은 국물 맛이 일품인 소갈비탕.' },
  { name: '냉면', category: '한식', emoji: '🍝', desc: '여름엔 시원한 물냉면, 사계절 내내 맛있어요.' },
  { name: '삼계탕', category: '한식', emoji: '🍗', desc: '보양식의 왕! 닭과 인삼이 들어간 영양만점 탕.' },
  { name: '떡갈비', category: '한식', emoji: '🍢', desc: '부드럽고 쫄깃한 궁중 스타일의 갈비 요리.' },
  { name: '해물파전', category: '한식', emoji: '🥞', desc: '바삭한 해물파전, 막걸리 없이도 맛있어요.' },

  // 중식
  { name: '짜장면', category: '중식', emoji: '🍝', desc: '한국인의 소울 푸드! 춘장의 깊은 맛이 일품.' },
  { name: '짬뽕', category: '중식', emoji: '🌶️', desc: '얼큰하고 시원한 국물이 일품인 해물 짬뽕.' },
  { name: '탕수육', category: '중식', emoji: '🍖', desc: '바삭한 튀김과 새콤달콤한 소스의 조화.' },
  { name: '마파두부', category: '중식', emoji: '🌶️', desc: '매콤하고 촉촉한 두부 요리, 밥이 술술.' },
  { name: '깐풍기', category: '중식', emoji: '🍗', desc: '바삭바삭하고 매콤달콤한 닭튀김 요리.' },
  { name: '볶음밥', category: '중식', emoji: '🍳', desc: '고소한 계란 볶음밥, 간단하지만 언제나 맛있어요.' },

  // 일식
  { name: '라멘', category: '일식', emoji: '🍜', desc: '진한 돈코츠 국물에 쫄깃한 면발, 토핑 가득.' },
  { name: '초밥', category: '일식', emoji: '🍣', desc: '신선한 생선과 식초밥의 만남, 고급스러운 한 끼.' },
  { name: '돈까스', category: '일식', emoji: '🥩', desc: '바삭한 튀김옷에 부드러운 돼지고기, 소스와 함께.' },
  { name: '우동', category: '일식', emoji: '🍜', desc: '쫄깃한 면발과 은은한 육수가 어우러진 따뜻한 한 끼.' },
  { name: '규동', category: '일식', emoji: '🥩', desc: '달콤짭조름한 소고기 덮밥, 계란 반숙 추가는 필수.' },
  { name: '카레', category: '일식', emoji: '🍛', desc: '향긋한 향신료의 일본식 카레, 진하고 부드러운 맛.' },
  { name: '오니기리', category: '일식', emoji: '🍙', desc: '간편하게 즐기는 주먹밥, 다양한 속재료 선택 가능.' },
  { name: '텐동', category: '일식', emoji: '🍤', desc: '바삭한 새우 튀김과 달큰한 소스를 얹은 덮밥.' },

  // 양식
  { name: '파스타', category: '양식', emoji: '🍝', desc: '알덴테로 삶은 면과 다양한 소스가 어우러진 이탈리안 요리.' },
  { name: '피자', category: '양식', emoji: '🍕', desc: '바삭한 도우에 풍성한 토핑, 여러 명이 함께 먹기 딱 좋아요.' },
  { name: '스테이크', category: '양식', emoji: '🥩', desc: '두툼한 소고기를 원하는 굽기로, 특별한 날의 선택.' },
  { name: '리조또', category: '양식', emoji: '🍚', desc: '크리미하게 볶은 쌀 요리, 이탈리안 레스토랑의 인기 메뉴.' },
  { name: '샐러드', category: '양식', emoji: '🥗', desc: '신선한 채소와 드레싱, 가볍고 건강한 한 끼.' },
  { name: '샌드위치', category: '양식', emoji: '🥪', desc: '다양한 재료를 빵 사이에, 간편하고 맛있는 점심.' },
  { name: '버거', category: '양식', emoji: '🍔', desc: '두툼한 패티와 신선한 채소, 손에 들고 먹는 즐거움.' },

  // 분식
  { name: '떡볶이', category: '분식', emoji: '🌶️', desc: '매콤달콤한 국민 간식! 어묵, 달걀 추가는 기본.' },
  { name: '순대국밥', category: '분식', emoji: '🍲', desc: '든든한 순대국밥 한 그릇, 새우젓으로 간 맞춰요.' },
  { name: '김밥', category: '분식', emoji: '🍙', desc: '다양한 재료를 넣은 한국식 롤, 간편하고 맛있어요.' },
  { name: '라면', category: '분식', emoji: '🍜', desc: '끓이기 쉽고 맛있는 국민 먹거리, 계란은 필수.' },
  { name: '튀김', category: '분식', emoji: '🍤', desc: '바삭바삭한 각종 튀김 모듬, 떡볶이 국물에 찍어 먹으면 더 맛있어요.' },
  { name: '만두', category: '분식', emoji: '🥟', desc: '속이 가득 찬 만두, 군만두로 구워 먹으면 더 맛있어요.' },
  { name: '핫도그', category: '분식', emoji: '🌭', desc: '바삭한 튀김 옷에 소시지, 설탕과 케첩은 취향껏.' },

  // 패스트푸드
  { name: '치킨', category: '패스트푸드', emoji: '🍗', desc: '황금빛 바삭한 치킨, 후라이드 vs 양념 고민 중이라면 반반!' },
  { name: '햄버거', category: '패스트푸드', emoji: '🍔', desc: '패스트푸드의 대명사! 세트로 주문하면 더 실속있어요.' },
  { name: '피자 (배달)', category: '패스트푸드', emoji: '🍕', desc: '빠르게 배달되는 따끈따끈한 피자.' },
  { name: '타코', category: '패스트푸드', emoji: '🌮', desc: '바삭한 또띠야에 신선한 재료, 멕시칸 푸드의 대표.' },
  { name: '핫윙', category: '패스트푸드', emoji: '🔥', desc: '매콤달콤한 소스에 버무린 닭 날개, 맥주 안주로도 최고.' },
];

let currentCategory = 'all';
let lastPicked = null;

function getFiltered() {
  return currentCategory === 'all'
    ? menus
    : menus.filter(m => m.category === currentCategory);
}

function pickRandom() {
  const pool = getFiltered();
  if (pool.length === 0) return null;
  let candidates = pool.filter(m => m !== lastPicked);
  if (candidates.length === 0) candidates = pool;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function showMenu(menu) {
  const card = document.getElementById('result-card');
  card.classList.remove('pop');
  void card.offsetWidth;
  card.classList.add('pop');

  document.getElementById('result-emoji').textContent = menu.emoji;
  document.getElementById('result-name').textContent = menu.name;
  document.getElementById('result-category').textContent = menu.category;
  document.getElementById('result-desc').textContent = menu.desc;

  document.getElementById('shuffle-btn').style.display = 'inline-flex';
  lastPicked = menu;
}

function recommend() {
  const menu = pickRandom();
  if (!menu) {
    alert('해당 카테고리에 메뉴가 없어요!');
    return;
  }
  showMenu(menu);
}

function renderGrid() {
  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';
  menus.forEach(menu => {
    const el = document.createElement('div');
    el.className = 'menu-item' + (currentCategory !== 'all' && menu.category !== currentCategory ? ' hidden' : '');
    el.innerHTML = `
      <div class="menu-item-emoji">${menu.emoji}</div>
      <div class="menu-item-name">${menu.name}</div>
      <div class="menu-item-tag">${menu.category}</div>
    `;
    el.addEventListener('click', () => showMenu(menu));
    grid.appendChild(el);
  });
}

document.getElementById('recommend-btn').addEventListener('click', recommend);
document.getElementById('shuffle-btn').addEventListener('click', recommend);

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    lastPicked = null;

    document.querySelectorAll('.menu-item').forEach(item => {
      const tag = item.querySelector('.menu-item-tag').textContent;
      item.classList.toggle('hidden', currentCategory !== 'all' && tag !== currentCategory);
    });
  });
});

renderGrid();
