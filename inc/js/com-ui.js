if ($.isFunction("checkCommonJs")) {
  checkCommonJs("com.ui.js");
}
/* 퍼블리셔 JS 셋팅 */
$(document).ready(function () {
  // KcaUI.startSet();
  KcaUI.headerNav(".nav-btn", ".nav-wrap", ".header-wrap");
  KcaUI.subMotion(".content-header");
  KcaUI.subPageMap(".page-map-wrap");
  KcaUI.selectEvent(".select-js");
  KcaUI.tabEvent(".tab-wrap", ".tab-cont");
  KcaUI.passwordHide(".password");
  KcaUI.closestAcco(".accoTrigger");
  KcaUI.historyLine(".histroy-wrap");
  KcaUI.moveCon(".move-con");
  KcaSwiper.swiperResponsiveSub01(".sub-swiper");
});

let $win_W = $(window).width();
let $win_H = $(window).height();
let $header_h = $(".header-wrap").height();
const delta = 100;
let timer = null;
let $popDate = 0;
let swiperConfigurator;

$(window).resize(function () {
  $win_W = $(window).width();
  $win_H = $(window).height();
  $header_h = $(".header-wrap").height();
  clearTimeout(timer);
  timer = setTimeout(resizeDone, delta);
});

function resizeDone() {
  if (!KcaUI.windowSize()) {
    //pc
    $(".sitemap-wrap .nav-wrap .gnb__tab-btn-wrap li > ul").show();
    $(".sitemap-wrap").removeClass("on");
    $(".sitemap-wrap .nav-wrap .gnb__tab-btn-wrap li button").removeClass("on");
    $(".header-wrap").removeAttr("style");
    bodyControll(false);
  } else {
    //mo
    $(".header-wrap").removeAttr("style");
    $(".sitemap-wrap .nav-wrap .gnb__tab-btn-wrap li > ul").hide();
  }
}
function bodyControll(state) {
  if (!state) {
    $("body").removeClass("fix");
  } else {
    $("body").addClass("fix");
  }
}

var KcaUI = {
  checkObj: function (obj) {
    return $(obj).length == 0 ? false : true;
  },

  windowSize: function () {
    return $win_W >= 1360 ? false : true;
  },
  windowSize02: function () {
    return $win_W >= 1024 ? false : true;
  },
  windowSizeMo: function () {
    return $win_W >= 768 ? false : true;
  },
  toggleEvent: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }
    navigationBtn = $(obj);
    navigationBtn.toggleClass("on");
  },

  headerNav: function (obj, com, par) {
    if (!KcaUI.checkObj(com)) {
      return;
    }

    var eventbtn = $(obj),
      eventCont = $(com),
      eventParent = $(par),
      header_h = eventParent.height();
      max_h = [];

    // Math.max.apply(null, max_h);

    function event() {
      // pc
      eventCont.mouseenter(function () {
        if (!KcaUI.windowSize()) {
          headerCont_h = eventParent.find(".header-cont").height();
          eventCont.find(".gnb__tab-btn-wrap ul").each(function (e) {
            max_h[e] = parseInt($(this).height());
          });
          $(".header-wrap")
            .addClass("on")
            .css("height", headerCont_h + Math.max.apply(null, max_h) + 32);
        } else {
          return;
        }
      });
      eventParent.mouseleave(function () {
        if (!KcaUI.windowSize()) {
          $(this)
            .removeClass("on")
            .css("height", header_h + 1);
        } else {
          return;
        }
      });
      eventbtn.on("click", function () {
        if (KcaUI.windowSize()) {
          if ($(this).parent().hasClass("on")) {
            $(this).parent().removeClass("on");
            bodyControll(false);
          } else {
            $(this).parent().addClass("on");
            bodyControll(true);
          }
        } else {
          return;
        }
      });
      $(".sitemap-wrap .nav-wrap button").click(function () {
        if (KcaUI.windowSize()) {
          $(this).toggleClass("on").siblings("ul").stop().slideToggle(300);
        } else {
          return;
        }
      });
    }
    event();
  },
  subMotion: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }
    var scrollWrap = $("body"),
      scrollEventItem = $(obj),
      scrollEventTxt = $(obj).find(".content-header-cont"),
      scrollTop = scrollWrap.scrollTop(),
      imgSet = 0;

    function event() {
      scrollWrap.scroll(function () {
        scrollTop = scrollWrap.scrollTop();
        imgSet = (scrollTop / ($win_H - $header_h)) * 50;
        txtSet = (scrollTop / ($win_H - $header_h)) * 25;

        if ($win_H - $header_h >= scrollTop) {
          scrollEventItem.css("top", scrollTop);
          scrollEventItem
            .find(".content-header_bg img")
            .css("top", 50 - imgSet + "%");

          if (!KcaUI.windowSize02()) {
            if (txtSet <= 24) {
              scrollEventTxt.css("top", 25 + txtSet + "%");
            }
            if (txtSet >= 7.2) {
              scrollEventTxt.find(".subp-tit").addClass("on");
              scrollEventTxt.find(".page-map-wrap").addClass("on");
            } else {
              scrollEventTxt.find(".subp-tit").removeClass("on");
              scrollEventTxt.find(".page-map-wrap").removeClass("on");
            }
            if (txtSet >= 10.5) {
              scrollEventTxt.find(".subp-txt").addClass("on");
            } else {
              scrollEventTxt.find(".subp-txt").removeClass("on");
            }
          } else {
            if (txtSet <= 24) {
              scrollEventTxt.css("top", 25 + txtSet + "%");
            }
            if (txtSet >= 7.2) {
              scrollEventTxt.find(".subp-tit").addClass("on");
              scrollEventTxt.find(".page-map-wrap").addClass("on");
            } else {
              scrollEventTxt.find(".subp-tit").removeClass("on");
              scrollEventTxt.find(".page-map-wrap").removeClass("on");
            }

            if (txtSet >= 4.2) {
              scrollEventTxt.find(".page-map-wrap").addClass("on");
            } else {
              scrollEventTxt.find(".page-map-wrap").removeClass("on");
            }
            if (txtSet >= 9.5) {
              scrollEventTxt.find(".subp-txt").addClass("on");
            } else {
              scrollEventTxt.find(".subp-txt").removeClass("on");
            }
          }
        } else {
          if (!KcaUI.windowSize02()) {
            scrollEventItem.css("top", $win_H - $header_h - 100);
            scrollEventItem.find(".content-header_bg img").css("top", 0 + "%");
          } else {
            scrollEventItem.css("top", $win_H - $header_h - 60);
            scrollEventItem.find(".content-header_bg img").css("top", 0 + "%");
          }
        }
      });
    }
    event();
  },
  subPageMap: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }
    pageMap = $(obj);
    pageMapEventBtn = pageMap.find("button");
    function event() {
      pageMapEventBtn.on("click", function () {
        $(this).toggleClass("on");
        $(this).siblings(".page-map").slideToggle(200);
      });

      $("html, body").click(function (e) {
        if (
          $(e.target).parents(obj).length < 1 &&
          $(e.target).attr("class") !== pageMap.attr("class")
        ) {
          pageMapEventBtn.removeClass("on");
          pageMapEventBtn.siblings(".page-map").slideUp(200);
        }
      });
    }
    event();
  },
  selectEvent: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }
    selectButton = $(obj);
    function event() {
      selectButton.on("click", function () {
        $(this).parent().toggleClass("on");
      });

      $("html, body").click(function (e) {
        if (
          $(e.target).parents(obj).length < 1 &&
          $(e.target).attr("class") !== selectButton.attr("class")
        ) {
          selectButton.parent().removeClass("on");
        }
      });
    }
    event();
  },

  tabEvent: function (obj, com) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }
    tabButton = $(obj).find(".tab");
    tabCont = $(com);
    function event() {
      tabButton.on("click", function () {
        tabData = $(this).index();
        tabButton.removeClass("on");
        $(this).addClass("on");
        tabCont.removeClass("on");
        tabCont.eq(tabData).addClass("on");
      });
    }
    event();
  },
  passwordHide: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }
    passwordButton = $(obj).find("button");
    function event() {
      passwordButton.on("click", function () {
        $(this).prev("input").toggleClass("active");
        if ($(this).prev("input").hasClass("active")) {
          $(this).addClass("on").prev("input").attr("type", "text");
        } else {
          $(this).removeClass("on").prev("input").attr("type", "password");
        }
      });
    }
    event();
  },

  closestAcco: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }
    accoBtn = $(obj);
    function event() {
      accoBtn.on("click", (el) => {
        el.target.closest(".accoWrap").classList.toggle("on");
      });
      $(".all-acco-btn").on("click", function () {
        $(this).toggleClass("on");
        if ($(this).hasClass("on")) {
          $(".accoWrap").each(function () {
            if (!$(this).hasClass("on")) {
              $(this).addClass("on");
            }
          });
        } else {
          $(".accoWrap").each(function () {
            $(this).removeClass("on");
          });
        }
      });
    }
    event();
  },

  historyLine: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }

    let historyWrap = $(obj).height();
    const historyLine = $(obj).find(".histroy-line");
    const lineTopPos = historyLine.offset().top;

    function event() {
      $(window).resize(function () {
        historyWrap = $(obj).height();
        if (!KcaUI.windowSize02()) {
          historyLine.show();
        }
      });
      $("body").scroll(() => {
        let scrollVaule = $("body").scrollTop();
        let lineTop = historyLine.offset().top;
        let screenHeight = screen.height;
        let triggerY = (screenHeight * 60) / 100;
        let heightValue =
          ((scrollVaule - lineTopPos + triggerY) / historyWrap) * 100;
        if (triggerY >= lineTop) {
          historyLine.stop().animate({ height: heightValue + "%" }, 300);
        } else {
          historyLine.stop().animate({ height: "0%" }, 300);
        }
      });
    }
    event();
  },

  // RCT_004 섹션 이동
  moveCon: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }

    const moveTop = $(".move-con").offset().top - 150;
    console.log(moveTop);
    $(".move-btn").on("click", () => {
      $("body").animate(
        {
          scrollTop: moveTop,
        },
        300
      );
    });
  },

  /* Dimmed */
  dimdOn: function () {
    $("body").append("<div class='dimmed' aria-hidden='true'></div>");
  },
  dimdOff: function () {
    $("body").find(".dimmed").remove();
  },
};

var KcaSwiper = {
  swiperResponsiveSub01: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }
    responsiveSwiper01 = new Swiper(obj, {
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1361: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
