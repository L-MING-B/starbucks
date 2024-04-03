const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션); to로 동작
    gsap.to (badgeEl, .6, {
      opacity: 0, 
      display: 'none'
    })
    //버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to (badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// window = 창(우리가 보는 화면 자체다.)
// 300 밀리세컨드 = 0.3초 /
// 'scroll'이라는 이벤트를 발생시킬때 _.throttle이라는 메소드를 추가해서 그 사이에 함수, 숫자(몇 초에 한번 실행되면 될지, 밀리세컨드 단위로 기록)
// _.throttle(함수,시간)


toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
})


const fadeEls =document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
// gsap.to(요소, 지속시간, 옵션); to로 동작
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,  //0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
  });
// forEach: 반복적으로 하나씩 처리, 'fade-in'이라고 찾은 개수만큼 함수가 실행된다.
// function (요소, index) 두 매개변수를 보면 'index'로 반복되는 변수를 받아줄 수 있다.

// new Swiper(선택자, 옵션) new:생성자
new Swiper ('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,      // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,     //슬라이드 사이 여백 
  centeredSlides: true,  //1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 10000
  // }
  pagination: {
    el:'.promotion .swiper-pagination',  //페이지 번호 요소 선택자
    clickable: true                      //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'

  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
 if (isHidePromotion) {
  promotionEl.classList.add('hide')
 }else {
  promotionEl.classList.remove('hide')
 }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { //옵션
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.InOut,
    delay: random(0, delay)
  });
} 
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 저장
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
