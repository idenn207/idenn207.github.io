// 모바일 메뉴
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');

const setMenu = (open) => {
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
};

menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
// 같은 페이지 안 절로 이동할 때 메뉴가 도착한 내용을 덮지 않게 닫는다
nav.addEventListener('click', () => setMenu(false));
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
  let index = sections.findLastIndex((s) => s.getBoundingClientRect().top <= line);
  // 끝에 닿으면 마지막 절들은 기준선까지 못 올라오므로 누른 항목, 없으면 마지막 항목을 켠다
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 1) {
    const clicked = links.findIndex((a) => a.hash === location.hash);
    index = clicked >= index ? clicked : links.length - 1;
  }
  const next = links[index] ?? null;
  if (next === current) return;
  current?.removeAttribute('aria-current');
  current = next;
  if (!current) return;
  current.setAttribute('aria-current', 'true');
  // 가로 목차는 활성 항목이 잘릴 때만 옮긴다. 다 보이는 항목을 누르면 그 자리에 그대로 둔다
  const list = current.closest('ol');
  list.scrollLeft = Math.min(current.offsetLeft, Math.max(list.scrollLeft, current.offsetLeft + current.offsetWidth - list.clientWidth));
};

if (links.length) {
  addEventListener('scroll', updateToc, { passive: true });
  addEventListener('resize', updateToc);
  updateToc();
}
