// 모바일 메뉴
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');

const setMenu = (open) => {
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
};

menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
document.addEventListener('click', (e) => {
  if (!e.target.closest('.site-head')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('open')) {
    setMenu(false);
    menuBtn.focus();
  }
});

// 스크롤 위치에 따른 목차 활성화
const links = [...document.querySelectorAll('.toc a')];
const sections = links.map((a) => document.querySelector(a.hash));
let current = null;

const updateToc = () => {
  const line = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--head')) + 80;
  const next = links[sections.findLastIndex((s) => s.getBoundingClientRect().top <= line)] ?? null;
  if (next === current) return;
  current?.removeAttribute('aria-current');
  current = next;
  if (!current) return;
  current.setAttribute('aria-current', 'true');
  // 좁은 화면의 가로 목차에서 활성 항목이 보이도록 가운데로 옮긴다
  const list = current.closest('ol');
  list.scrollLeft = current.offsetLeft - (list.clientWidth - current.offsetWidth) / 2;
};

if (links.length) {
  addEventListener('scroll', updateToc, { passive: true });
  addEventListener('resize', updateToc);
  updateToc();
}
