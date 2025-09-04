$(function () {
  


  //top버튼
  $(window).on('scroll', function () {
  if ($(window).scrollTop() > 300) {
    $('.nav-gradient').addClass('active');
    $('.top').addClass('active'); // ← 요거 추가
  } else {
    $('.nav-gradient').removeClass('active');
    $('.top').removeClass('active'); // ← 이것도
  }
});


  //네비 스크롤감지
  $(window).on('scroll', function () {
  if ($(window).scrollTop() > 50) {
    $('.nav-gradient').addClass('active');
  } else {
    $('.nav-gradient').removeClass('active');
  }
  });
  

  //배너
  const slideList = $('.bslide ul');
  const slideItem = $('.bslide ul li');
  const slideCount = slideItem.length;
  const countEl = $('.count');
  let currentIndex = 0;

  function getSlideWidth() {
    return $('.bslide').width(); 
  }

  function updateSlide() {
    const moveX = -getSlideWidth() * currentIndex;
    slideList.css('transform', `translateX(${moveX}px)`);
    countEl.text(`${currentIndex + 1} / ${slideCount}`);
  }

  $('.arrow.right').on('click', function () {
    if (currentIndex < slideCount - 1) {
      currentIndex++;
      updateSlide();
    }
  });

  $('.arrow.left').on('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlide();
    }
  });

  $(window).on('resize', function () {
    updateSlide();
  });

  updateSlide();

 //웹
  const slideList2 = $('.wslide ul');
  const slideItem2 = $('.wslide ul li');
  const slideCount2 = slideItem2.length;
  const countEl2 = $('.wcount');
  let currentIndex2 = 0;

  function getSlideWidth2() {
    return $('.wslide').width();
  }

  function updateSlide2() {
    const moveX = -getSlideWidth2() * currentIndex2;
    slideList2.css('transform', `translateX(${moveX}px)`);
    countEl2.text(`${currentIndex2 + 1} / ${slideCount2}`);
  }

  $('.warrow.right').on('click', function () {
    if (currentIndex2 < slideCount2 - 1) {
      currentIndex2++;
      updateSlide2();
    }
  });

  $('.warrow.left').on('click', function () {
    if (currentIndex2 > 0) {
      currentIndex2--;
      updateSlide2();
    }
  });

  $(window).on('resize', updateSlide2);
  updateSlide2();


//일러
$(function () {
  const slideList2 = $('.islide ul');
  const slideItem2 = $('.islide ul li');
  const slideCount2 = slideItem2.length;
  const countEl2 = $('.icount');
  let currentIndex2 = 0;

  function getSlideWidth2() {
    return $('.islide').width();
  }

  function updateSlide2() {
    const moveX = -getSlideWidth2() * currentIndex2;
    slideList2.css('transform', `translateX(${moveX}px)`);
    countEl2.text(`${currentIndex2 + 1} / ${slideCount2}`);
  }

  $('.iarrow.right').on('click', function () {
    if (currentIndex2 < slideCount2 - 1) {
      currentIndex2++;
      updateSlide2();
    }
  });

  $('.iarrow.left').on('click', function () {
    if (currentIndex2 > 0) {
      currentIndex2--;
      updateSlide2();
    }
  });

  $(window).on('resize', updateSlide2);
  updateSlide2();
});

//어바웃 프로필사진 밑으로
function moveAboutForMobile() {
  const about = document.getElementById("about");
  const p1 = document.querySelector(".p1");
  const img = p1.querySelector("img");

  if (window.innerWidth <= 812) {
    if (about && about.parentNode !== p1) {
      p1.insertBefore(about, img.nextSibling);
    }
  }
}

window.addEventListener("load", moveAboutForMobile);
window.addEventListener("resize", moveAboutForMobile);


//웹화면으로 돌리기
function moveAboutMobile() {
  const about = document.getElementById("about");
  const p1 = document.querySelector(".p1");
  const p2 = document.querySelector(".p2");
  const img = p1?.querySelector("img");

  if (!about || !p1 || !p2 || !img) return; // 요소 하나라도 없으면 중단

  if (window.innerWidth <= 812) {
    if (!p1.contains(about)) {
      about.remove();
      p1.insertBefore(about, img.nextSibling);
    }
  } else {
    if (!p2.contains(about)) {
      about.remove();
      p2.insertBefore(about, p2.firstChild);
    }
  }
}

window.addEventListener("load", moveAboutMobile);
window.addEventListener("resize", moveAboutMobile);


});
  