if ($.isFunction("checkCommonJs")) {
  checkCommonJs("com.ui.js");
}
/* 퍼블리셔 JS 셋팅 */
$(document).ready(function () {
  // KcaUI.startSet();
  KcaUI.headerNav(".nav-btn", ".nav-wrap", ".header-wrap");
  KcaUI.subMotion(".content-header");
});

let $win_W = $(window).width();
let $win_H = $(window).height();
const delta = 100;
let timer = null;
let $popDate = 0;
let swiperConfigurator;

$(window).resize(function () {
  $win_W = $(window).width();
  $win_H = $(window).height();
  clearTimeout(timer);
  timer = setTimeout(resizeDone, delta);
});

function resizeDone() {
  if (!KcaUI.windowSize()) {
    //pc
    $(".sitemap-wrap .nav-wrap .gnb__tab-btn-wrap li > ul").show();
    $(".sitemap-wrap").removeClass("on");
    $(".sitemap-wrap .nav-wrap .gnb__tab-btn-wrap li button").removeClass("on");
    bodyControll(false);
  } else {
    //mo

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
      max_h = [];

    // Math.max.apply(null, max_h);

    function event() {
      // pc
      eventCont.mouseenter(function () {
        if (!KcaUI.windowSize()) {
          header_h = eventParent.find(".header-cont").height();
          eventCont.find(".gnb__tab-btn-wrap ul").each(function (e) {
            max_h[e] = parseInt($(this).height());
          });
          $(".header-wrap")
            .addClass("on")
            .css("height", header_h + Math.max.apply(null, max_h) + 32);
        } else {
          return;
        }
      });
      eventParent.mouseleave(function () {
        if (!KcaUI.windowSize()) {
          $(this).removeClass("on").css("height", header_h);
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
      scrollTop = scrollWrap.scrollTop(),
      imgSet = 0;

    function event() {
      scrollWrap.scroll(function () {
        scrollTop = scrollWrap.scrollTop();
        imgSet = (scrollTop / $win_H) * 50;

        if ($win_H > scrollTop) {
          scrollEventItem.css("top", scrollTop);
          scrollEventItem
            .find(".content-header_bg img")
            .css("top", 50 - imgSet + "%");
        }
      });
    }
    event();
  },
  /* Dimmed */
  dimdOn: function () {
    $("body").append("<div class='dimmed' aria-hidden='true'></div>");
  },
  dimdOff: function () {
    $("body").find(".dimmed").remove();
  },
};
