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
  KcaUI.animSec(".watching-con");
  KcaUI.mainAnimation(".main-wrap");
  KcaSwiper.swiperResponsiveSub01(".sub-swiper");
  KcaSwiper.swiperPop01(".pop-swiper");
  topScroll(".top-btn");
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

function topScroll(obj) {
  if (!KcaUI.checkObj(obj)) {
    return;
  }
  $(obj).on("click", () => {
    $("body").animate(
      {
        scrollTop: 0,
      },
      300
    );
  });
}
function resizeDone() {
  if (!KcaUI.windowSize()) {
    //pc
    $(".sitemap-wrap .nav-wrap .gnb__tab-btn-wrap li > ul").show();
    $(".sitemap-wrap").removeClass("on");
    $(".sitemap-wrap .nav-wrap .gnb__tab-btn-wrap li button").removeClass("on");
    $(".header-wrap").removeAttr("style");
    $(".header-cont").removeClass("on");
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
  
  mainAnimation: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }

    var mainWrap = $(obj),
      timeNum = 0,
      mainCont01 = mainWrap.find(".main_content01"),
      mainCont01_1 = mainCont01.find(".content-item01"),
      mainCont01_2 = mainCont01.find(".content-item02"),
      mainCont01_3 = mainCont01.find(".content-item03"),
      mainCont02 = mainWrap.find(".main_content02"),
      mainCont02_1 = mainCont02.find(".content-item01"),
      mainCont02_2 = mainCont02.find(".content-item02"),
      mainCont03 = mainWrap.find(".main_content03"),
      mainCont03_1 = mainCont03.find(".content-item01"),
      mainCont04 = mainWrap.find(".main_content04"),
      mainCont04_1 = mainCont04.find(".content-item01"),
      clickItem = $(".main_content-footer button");
      leaveTime = null;
    function clear() {
      mainWrap.removeClass("action-l01 action-l02 action-l03 action-l04 action-l05");
      mainCont01_1.removeClass("on");
      mainCont01_2.removeClass("on");
      mainCont01_3.removeClass("on");
      mainCont02_1.removeClass("on");
      // mainCont02_2.removeClass("on");
      mainCont02_2.find(".swipe-motion-area").removeClass("on motion01 motion02 motion03 motion04 motion05");
      // mainCont03_1.removeClass("on");
      mainCont03_1.find(".text-area").removeClass("on");
      mainCont03_1.find(".cont03-area").removeClass("on");
      mainCont03_1.find(".cont03-item01").removeClass("on");
      mainCont03_1.find(".cont03-item02").removeClass("on");
      mainCont03_1.find(".cont03-item03").removeClass("on");
      // mainCont04_1.removeClass("on");
      mainCont04_1.find("> .text-area").removeClass("on");
      mainCont04_1.find(".cont04-area").removeClass("on");
      $(".footer-wrap").removeClass("on");
    }

    function hoverEvnet(){
      $(".stop-cont").mouseenter(function(){
        clearTimeout(leaveTime);
        clearInterval(motionTime);
      });
      $(".stop-cont").mouseleave(function(){
        clearTimeout(leaveTime);
        clearInterval(motionTime);
        leaveTime = setTimeout(function(){
          if (timeNum <= 600 && wheelDaea < 0) {
            timeNum = 0;
          } else if (timeNum > 600 && timeNum <= 1200) {
            timeNum = 600;
          } else if (timeNum > 1200 && timeNum <= 1800) {
            timeNum = 1200;
          } else if (timeNum > 1800 && timeNum <= 2100) {
            timeNum = 1800;
          } else if (timeNum > 2100 && timeNum <= 2300) {
            timeNum = 2200;
          } else if (timeNum > 2300 && timeNum <= 2500) {
            timeNum = 2400;
          } else if (timeNum > 2500 && timeNum <= 2700) {
            timeNum = 2600;
          } else if (timeNum > 2700 && timeNum <= 3000) {
            timeNum = 2900;
          } else if (timeNum > 3000 && timeNum <= 3300) {
            timeNum = 3000;
          } else if (timeNum > 3300 && timeNum <= 3600) {
            timeNum = 3300;
          } else if (timeNum > 3600 && timeNum <= 3900) {
            timeNum = 3600;
          } else if (timeNum > 3900 && timeNum <= 4500) {
            timeNum = 3900;
          }
          event();
        },200)
      });
      mainCont03_1.find("li").mouseenter(function(){
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
      });
    }
    function setData () {
      clear();
      clearInterval(motionTime)
      clearTimeout(timeData);
      timeData = setTimeout(function(){
        if (timeNum <= 600 && wheelDaea < 0) {
          timeNum = 600;
        } else if (timeNum > 600 && timeNum <= 1200 && wheelDaea < 0) {
          timeNum = 1200;
        } else if (timeNum > 1200 && timeNum <= 1800 && wheelDaea < 0) {
          timeNum = 1800;
        } else if (timeNum > 1800 && timeNum <= 2100 && wheelDaea < 0) {
          timeNum = 2100;
        } else if (timeNum > 2100 && timeNum <= 2300 && wheelDaea < 0) {
          timeNum = 2300;
        } else if (timeNum > 2300 && timeNum <= 2500 && wheelDaea < 0) {
          timeNum = 2500;
        } else if (timeNum > 2500 && timeNum <= 2700 && wheelDaea < 0) {
          timeNum = 2700;
        } else if (timeNum > 2700 && timeNum <= 3000 && wheelDaea < 0) {
          timeNum = 3000;
        } else if (timeNum > 3000 && timeNum <= 3300 && wheelDaea < 0) {
          timeNum = 3300;
        } else if (timeNum > 3300 && timeNum <= 3600 && wheelDaea < 0) {
          timeNum = 3600;
        } else if (timeNum > 3600 && timeNum <= 3900 && wheelDaea < 0) {
          timeNum = 3900;
        } else if (timeNum > 3900 && timeNum <= 4500 && wheelDaea < 0) {
          timeNum = 4500;
        } else if (timeNum > 3900 && wheelDaea > 0) {
          timeNum = 3600;
        }else if (timeNum > 3600 && timeNum <= 3900 && wheelDaea > 0) {
          timeNum = 3300;
        }else if (timeNum > 3300 && timeNum <= 3600 && wheelDaea > 0) {
          timeNum = 3000;
        }else if (timeNum > 3000 && timeNum <= 3300 && wheelDaea > 0) {
          timeNum = 2700;
        }else if (timeNum > 2700 && timeNum <= 3000 && wheelDaea > 0) {
          timeNum = 2500;
        }else if (timeNum > 2500 && timeNum <= 2700 && wheelDaea > 0) {
          timeNum = 2300;
        }else if (timeNum > 2300 && timeNum <= 2500 && wheelDaea > 0) {
          timeNum = 2100;
        }else if (timeNum > 2100 && timeNum <= 2300 && wheelDaea > 0) {
          timeNum = 1800;
        }else if (timeNum > 1800 && timeNum <= 2100 && wheelDaea > 0) {
          timeNum = 1200;
        }else if (timeNum > 1200 && timeNum <= 1800 && wheelDaea > 0) {
          timeNum = 600;
        }else if (timeNum > 600 && timeNum <= 1200 && wheelDaea > 0) {
          timeNum = 0;
        }else if (timeNum > 0 && wheelDaea > 0) {
          timeNum = 0;
        }
        event();
      }, 100)
    }
    function event() {
      motionTime = setInterval(function () {
        timeNum++;
        // console.log(timeNum)
        if (timeNum > 0 && timeNum <= 600) {
          if (!mainWrap.hasClass("action-l01")) {
            mainWrap.addClass("action-l01");
            mainCont01_1.addClass("on");
            mainCont02_2.removeClass("on");
            $(".main_content-footer .bar").stop().css("width", "0")
            $(".main_content-footer .main-item01 .bar")
              .stop()
              .animate({ width: 33 + "%" }, 6000);
          }
        } else if (timeNum > 600 && timeNum <= 1200) {
          if (!mainCont01_2.hasClass("on")) {
            mainCont01_2.addClass("on");
            mainCont01_1.removeClass("on");
            mainCont02_2.removeClass("on");
            $(".main_content-footer .main-item02 .bar").stop().css("width", "0");
            $(".main_content-footer .main-item03 .bar").stop().css("width", "0");
            $(".main_content-footer .main-item04 .bar").stop().css("width", "0");
            $(".main_content-footer .main-item01 .bar").stop().css("width", "33%");
            $(".main_content-footer .main-item01 .bar")
              .stop()
              .animate({ width: 66 + "%" }, 6000);
          }
          if (!mainWrap.hasClass("action-l01")) {
            mainWrap.addClass("action-l01");
          }
        } else if (timeNum > 1200 && timeNum <= 1800) {
          if (!mainCont01_3.hasClass("on")) {
            mainCont01_3.addClass("on");
            mainCont01_2.removeClass("on");
            mainCont02_2.removeClass("on");
            $(".main_content-footer .main-item02 .bar").stop().css("width", "0");
            $(".main_content-footer .main-item03 .bar").stop().css("width", "0");
            $(".main_content-footer .main-item04 .bar").stop().css("width", "0");
            $(".main_content-footer .main-item01 .bar").css("width", "66%");
            $(".main_content-footer .main-item01 .bar")
              .stop()
              .animate({ width: 100 + "%" }, 6000);
          }
          if (!mainWrap.hasClass("action-l01")) {
            mainWrap.addClass("action-l01");
          }
        } else if (timeNum > 1800 && timeNum <= 2100) {
          if (!mainWrap.hasClass("action-l02")) {
            mainWrap.addClass("action-l02").removeClass("action-l01");
            $(".main_content-footer .main-item01 .bar").stop().css("width", "100%")
            $(".main_content-footer .main-item02 .bar").stop().css("width", "0")
            $(".main_content-footer .main-item03 .bar").stop().css("width", "0")
            $(".main_content-footer .main-item04 .bar").stop().css("width", "0")
            $(".main_content-footer .main-item02 .bar")
              .stop()
              .animate({ width: 33 + "%" }, 3000);
            setTimeout(function () {
              mainCont02_1.addClass("on");
              mainCont02_2.addClass("on");
              setTimeout(function () {
                mainCont02_2
                  .find(".swipe-motion-area")
                  .addClass("on motion01 show");
              }, 1000);
            }, 200);
          }
        } else if (timeNum > 2100 && timeNum <= 2300) {
          if (!mainWrap.hasClass("action-l02")) {
            mainWrap.addClass("action-l02");
            mainCont02_2.addClass("on");
            mainCont02_2.find(".swipe-motion-area").addClass("show");
          }
          if (!mainCont02_2
            .find(".swipe-motion-area").hasClass("motion02")) {
            mainCont02_1.removeClass("on");
            mainCont02_2
              .find(".swipe-motion-area")
              .addClass("motion02")
              .removeClass("on motion01");
              $(".main_content-footer .main-item01 .bar").stop().css("width", "100%")
              $(".main_content-footer .main-item02 .bar").stop().css("width", "33%")
              $(".main_content-footer .main-item03 .bar").stop().css("width", "0")
              $(".main_content-footer .main-item04 .bar").stop().css("width", "0")
            $(".main_content-footer .main-item02 .bar")
              .stop()
              .animate({ width: 54 + "%" }, 2000);
          }
        } else if (timeNum > 2300 && timeNum <= 2500) {
          if (!mainWrap.hasClass("action-l02")) {
            mainWrap.addClass("action-l02");
            mainCont02_2.addClass("on");
            mainCont02_2.find(".swipe-motion-area").addClass("show");
          }
          if (!mainCont02_2.find(".swipe-motion-area").hasClass("motion03")) {
            mainCont02_2
              .find(".swipe-motion-area")
              .addClass("on motion03")
              .removeClass("motion02");
              $(".main_content-footer .main-item01 .bar").stop().css("width", "100%")
              $(".main_content-footer .main-item02 .bar").stop().css("width", "54%");
              $(".main_content-footer .main-item03 .bar").stop().css("width", "0")
              $(".main_content-footer .main-item04 .bar").stop().css("width", "0")
            $(".main_content-footer .main-item02 .bar")
              .stop()
              .animate({ width: 76 + "%" }, 2000);
          }
        } else if (timeNum > 2500 && timeNum <= 2700) {
          if (!mainWrap.hasClass("action-l02")) {
            mainWrap.addClass("action-l02");
            mainCont02_2.addClass("on");
            mainCont02_2.find(".swipe-motion-area").addClass("show");
          }
          if (!mainCont02_2.find(".swipe-motion-area").hasClass("motion04")) {
            mainCont02_2
              .find(".swipe-motion-area")
              .addClass("motion04")
              .removeClass("on motion03");
              $(".main_content-footer .main-item01 .bar").stop().css("width", "100%")
            $(".main_content-footer .main-item02 .bar").stop().css("width", "76%")
            $(".main_content-footer .main-item03 .bar").stop().css("width", "0")
            $(".main_content-footer .main-item04 .bar").stop().css("width", "0")
            $(".main_content-footer .main-item02 .bar")
              .stop()
              .animate({ width: 88 + "%" }, 2000);
          }
        } else if (timeNum > 2700 && timeNum <= 3000) {
          if (!mainWrap.hasClass("action-l02")) {
            mainWrap.addClass("action-l02");
            mainCont02_2.addClass("on");
            mainCont02_2.find(".swipe-motion-area").addClass("show");
          }
          if (!mainCont02_2.find(".swipe-motion-area").hasClass("motion05")) {
            mainCont02_2
              .find(".swipe-motion-area")
              .addClass("on motion05")
              .removeClass("motion04");
              $(".main_content-footer .main-item01 .bar").stop().css("width", "100%")
            $(".main_content-footer .main-item02 .bar").stop().css("width", "88%")
            $(".main_content-footer .main-item03 .bar").stop().css("width", "0")
            $(".main_content-footer .main-item04 .bar").stop().css("width", "0")
            $(".main_content-footer .main-item02 .bar")
              .stop()
              .animate({ width: 100 + "%" }, 1000);
          }
        } else if (timeNum > 3000 && timeNum <= 3300) {
          if (!mainWrap.hasClass("action-l03")) {
            mainWrap.addClass("action-l03").removeClass("action-l02");
            mainCont02_2
              .find(".swipe-motion-area").addClass("motion05")
              .removeClass("show")
            mainCont03_1.addClass("on");
            $(".main_content-footer .main-item01 .bar").stop().css("width", "100%")
            $(".main_content-footer .main-item02 .bar").stop().css("width", "100%")
            $(".main_content-footer .main-item03 .bar").stop().css("width", "0")
            $(".main_content-footer .main-item04 .bar").stop().css("width", "0")
            $(".main_content-footer .main-item03 .bar")
              .stop()
              .animate({ width: 33 + "%" }, 3000);
            setTimeout(function () {
              mainCont03_1.find(".text-area").addClass("on");
              mainCont03_1.find(".cont03-area").addClass("on");
              mainCont03_1.find("li").removeClass("on");
              mainCont03_1.find(".cont03-item01").addClass("on");
            }, 200);
          }
        } else if (timeNum > 3300 && timeNum <= 3600) {
          if (!mainWrap.hasClass("action-l03")) {
            mainWrap.addClass("action-l03");
            mainCont03_1.addClass("on");
            mainCont03_1.find(".text-area").addClass("on");
            mainCont03_1.find(".cont03-area").addClass("on");
          }
          if (!mainCont03_1.find(".cont03-item02").hasClass("on")) {
            mainCont03_1.find("li").removeClass("on");
            mainCont03_1.find(".cont03-item02").addClass("on");
            $(".main_content-footer .main-item01 .bar").stop().css("width", "100%")
            $(".main_content-footer .main-item02 .bar").stop().css("width", "100%")
            $(".main_content-footer .main-item03 .bar").stop().css("width", "33%")
            $(".main_content-footer .main-item04 .bar").stop().css("width", "0")
            $(".main_content-footer .main-item03 .bar")
              .stop()
              .animate({ width: 66 + "%" }, 3000);
          }
        } else if (timeNum > 3600 && timeNum <= 3900) {
          if (!mainWrap.hasClass("action-l03")) {
            mainWrap.addClass("action-l03");
            mainCont03_1.addClass("on");
            mainCont03_1.find(".text-area").addClass("on");
            mainCont03_1.find(".cont03-area").addClass("on");
          }
          if (!mainCont03_1.find(".cont03-item03").hasClass("on")) {
            mainCont03_1.find("li").removeClass("on");
            mainCont03_1.find(".cont03-item03").addClass("on");
            $(".main_content-footer .main-item01 .bar").stop().css("width", "100%")
            $(".main_content-footer .main-item02 .bar").stop().css("width", "100%")
            $(".main_content-footer .main-item03 .bar").stop().css("width", "66%")
            $(".main_content-footer .main-item04 .bar").stop().css("width", "0")
            $(".main_content-footer .main-item03 .bar")
              .stop()
              .animate({ width: 100 + "%" }, 3000);
          }
        } else if (timeNum > 3900 && timeNum <= 4500) {
          if (!mainWrap.hasClass("action-l04")) {
            mainWrap.addClass("action-l04").removeClass("action-l03");
            mainCont04_1.addClass("on");
            mainCont02_2
              .find(".swipe-motion-area").addClass("motion05")
              .removeClass("show")
            $(".main_content-footer .bar").stop().css("width", "100%")
            $(".main_content-footer .main-item04 .bar").stop().css("width", "0")
            $(".main_content-footer .main-item04 .bar")
              .stop()
              .animate({ width: 100 + "%" }, 6000);
            setTimeout(function () {
              mainCont04_1.find(".cont-center > .text-area").addClass("on");
              mainCont04_1.find(".cont04-area").addClass("on");
            }, 200);
            clearTimeout(leaveTime);
            clearInterval(motionTime);
          }
        } else if (timeNum >= 4500) {
          if (!mainWrap.hasClass("action-l04")) {
            mainWrap.addClass("action-l04").removeClass("action-l03");
            mainCont04_1.addClass("on");
            $(".main_content-footer .bar").stop().css("width", "100%")
            $(".main_content-footer .main-item04 .bar").stop().css("width", "100%")
            setTimeout(function () {
              mainCont04_1.find(".cont-center > .text-area").addClass("on");
              mainCont04_1.find(".cont04-area").addClass("on");
            }, 200);
            clearTimeout(leaveTime);
            clearInterval(motionTime);
          }
        }
      }, 10);
    };

    function clickEvent() {
      clickItem.on("click", function(){
        var btnStop = $(this).parent().index();
        if(btnStop == 0){
          clearTimeout(leaveTime);
          clearInterval(motionTime);
          timeNum = 0;
          clear();
          event();
        }else if(btnStop == 1){
          clearTimeout(leaveTime);
          clearInterval(motionTime);
          timeNum = 1800;
          clear();
          event();
        }else if(btnStop == 2){
          clearTimeout(leaveTime);
          clearInterval(motionTime);
          timeNum = 3000;
          clear();
          event();
        }else if(btnStop == 3){
          clearTimeout(leaveTime);
          clearInterval(motionTime);
          timeNum = 3900;
          clear();
          event();
        }
      });
    };

    // function scrollEvent(){
    //   let initialY = null;
    //       wheelDaea = 0;
    //       timeData= null;
    //   mainWrap.on("mousewheel", function(e){
    //     wheelDaea = e.originalEvent.wheelDelta
    //     setData ();
    //   })
    //   mainWrap.on("touchstart", function(e){
    //     initialY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
    //   })
    //   mainWrap.on("touchmove", function(e){
    //     if (initialY !== null) {
    //       const currentY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
    //       let diffY = initialY - currentY;
    //       wheelDaea = diffY.toFixed(0)
    //       initialY = null;
    //       setData ();
    //     }
    //   })
    // };

    
    hoverEvnet();
    event();
    clickEvent();
    // scrollEvent();
  },

  headerNav: function (obj, com, par) {
    if (!KcaUI.checkObj(com)) {
      return; 
    }

    var eventbtn = $(obj),
      eventCont = $(com),
      eventParent = $(par),
      headerCont_h = 0,
      header_h = eventParent.height(),
      max_h = [];
      
    function event() {
      $(window).resize(function () {
        header_h = eventParent.height()
      });
      // pc
      eventCont.mouseenter(function () {
        if (!KcaUI.windowSize()) {
          headerCont_h = eventParent.find(".header-cont").height();
          eventCont.find(".gnb__tab-btn-wrap ul").each(function (e) {
            max_h[e] = parseInt($(this).height());
          });
          $(".header-wrap")
            .addClass("on")
            .css("height", headerCont_h + Math.max.apply(null, max_h) + 48);
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
            $(this).parents(".header-cont").removeClass("on");
            bodyControll(false);
          } else {
            $(this).parent().addClass("on");
            $(this).parents(".header-cont").addClass("on");
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
      scrollTop = scrollWrap.scrollTop();
      if (!KcaUI.windowSize02()) {
        contHeaderH = 800;
      }else{
        contHeaderH = 500;
      }

      imgSet = 0;
      $(".content-header + .content-area").css("top", contHeaderH * -1);
    function event() {
      scrollWrap.scroll(function () {
        scrollTop = scrollWrap.scrollTop();
        imgSet = (scrollTop / contHeaderH) * 50;
        txtSet = (scrollTop / contHeaderH) * 25;

        if (contHeaderH >= scrollTop) {
          $(".top-btn-wrap").hide()
          scrollEventItem.css("top", scrollTop);
          $(".content-header + .content-area").css("top", (contHeaderH * -1) + scrollTop);
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
            scrollEventItem.css("top", contHeaderH);
            scrollEventItem.find(".content-header_bg img").css("top", 0 + "%");
            $(".content-header + .content-area").css("top", 0);
          } else {
            scrollEventItem.css("top", contHeaderH);
            scrollEventItem.find(".content-header_bg img").css("top", 0 + "%");
            $(".content-header + .content-area").css("top", 0);
          }

          $(".top-btn-wrap").fadeIn(500)
        }
      });
      $(window).resize(function(){
        scrollTop = scrollWrap.scrollTop();
        if (!KcaUI.windowSize02()) {
          contHeaderH = 800; 
          if(scrollTop > scrollEventItem.height()){
            scrollEventItem.css("top", contHeaderH);
            scrollEventItem.find(".content-header_bg img").css("top", 0 + "%");
          }
        } else {
          contHeaderH = 500;
          if(scrollTop > scrollEventItem.height()){
            scrollEventItem.css("top", contHeaderH);
            scrollEventItem.find(".content-header_bg img").css("top", 0 + "%");
          }
        }
        if (contHeaderH >= scrollTop) {
          $(".content-header + .content-area").css("top", (contHeaderH * -1) + scrollTop);
        } else {
          $(".content-header + .content-area").css("top", 0);
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
    let triggerY = $(".content-header").height();
    
    $(window).resize(function () {
      triggerY = $(".content-header").height();
    });

    function event() {
      $(window).resize(function () {
        historyWrap = $(obj).height();
        if (!KcaUI.windowSize02()) {
          historyLine.show();
        }
      });
      $("body").scroll(() => {
        let scrollVaule = $("body").scrollTop();
        console.log(scrollVaule)
        let lineTop = historyLine.offset().top;        
        let screenHeight = screen.height - $header_h;
        let heightValue =
          (((scrollVaule - lineTopPos) / historyWrap) * 100) - 15;
        if (triggerY >= lineTop) {
          historyLine.stop().animate({ height: heightValue + "%" }, 300);
        } else {
          historyLine.stop().animate({ height: "0%" }, 300);
        }
      });
    }
    event();
  },

  popOpen: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }

    function event(){
      $(obj).fadeIn(500);
    };  
    event();
  },
  popClose: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }

    function event(){
      $(obj).parents(".pop-wrap").fadeOut();
    };
    event();
  },
  // RCT_004 섹션 이동
  moveCon: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }
    
    let moveTop = $(".move-con").offset().top + $win_H - $header_h;

    $(window).resize(function () {
      moveTop = $(".move-con").offset().top - $header_h + $("body").scrollTop();
    })
    $(".move-btn").on("click", () => {
      $("body").animate(
        {
          scrollTop: moveTop,
        },
        300
      );
    });
  },

  // RCT_002, 3 섹션 애니메이션
  animSec: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }

    const targetSec = document.querySelectorAll(".watching-con");

    const observer = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
          } else {
            // targetSec.classList.remove("on");
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    targetSec.forEach((el) => observer.observe(el));
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
  swiperPop01: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }

    popSwiper = new Swiper(obj, {
      loop:true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".pop-foot .swiper-pagination",
        type: "fraction",
      }
    });
    
    $(".swiper_stop-btn").on("click", function(){
      if ($(".swiper_stop-btn").hasClass("on")) {
        $(".swiper_stop-btn").removeClass("on")
        $(obj)[0].swiper.autoplay.stop();
      } else {
        $(".swiper_stop-btn").addClass("on")
        $(obj)[0].swiper.autoplay.start();
      }
    })
  },
  
  swiperResponsiveSub01: function (obj) {
    if (!KcaUI.checkObj(obj)) {
      return;
    }
    responsiveSwiper01 = new Swiper(obj, {
      slidesPerView: 1,
      spaceBetween:32,
      breakpoints: {
        768: {
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
