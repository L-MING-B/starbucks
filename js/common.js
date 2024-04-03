const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function () {
  // Logic
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
  // setAttribute: html의 속성을 지정해준다.
})
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  // setAttribute: html의 속성을 지정해준다.
})

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear(); //2021 
// 요소가 가지고 있는 글자 내용들의 값을 알아내거나 지정할때 사용