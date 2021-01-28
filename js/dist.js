
// Dark Mode Detection
jQuery(function ($) {
    var cookieStorage = {
        setCookie: function setCookie(key, value, time, path) {
            var expires = new Date();
            expires.setTime(expires.getTime() + time);
            var pathValue = "";
            if (typeof path !== "undefined") {
                pathValue = "path=" + path + ";"
            }
            document.cookie = key + "=" + value + ";" + pathValue + "expires=" + expires.toUTCString()
        },
        getCookie: function getCookie(key) {
            var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
            return keyValue ? keyValue[2] : null
        },
        removeCookie: function removeCookie(key) {
            document.cookie = key + "=; Max-Age=0; path=/"
        }
    };
    $(".tmnf-button").click(function () {
        $(".tmnf-button").toggleClass("active");
        if ($(".tmnf-button").hasClass("active")) {
            $("body").addClass("theme-dark");
            cookieStorage.setCookie("tmnfNightMode", "true", 2628000000, "/")
        } else {
            $("body").removeClass("theme-dark");
            setTimeout(function () {
                cookieStorage.removeCookie("tmnfNightMode")
            }, 100)
        }
    });
    if (cookieStorage.getCookie("tmnfNightMode")) {
        $("body").addClass("theme-dark");
        $(".tmnf-button").addClass("active")
    }
});


/**
 * Minified by jsDelivr using UglifyJS v3.4.4.
 * Original file: /npm/jquery.cookie@1.4.1/jquery.cookie.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)}(function(v){var i=/\+/g;function x(e){return l.raw?e:encodeURIComponent(e)}function k(e,o){var n=l.raw?e:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(i," ")),l.json?JSON.parse(e):e}catch(e){}}(e);return v.isFunction(o)?o(n):n}var l=v.cookie=function(e,o,n){if(void 0!==o&&!v.isFunction(o)){if("number"==typeof(n=v.extend({},l.defaults,n)).expires){var i=n.expires,r=n.expires=new Date;r.setTime(+r+864e5*i)}return document.cookie=[x(e),"=",(t=o,x(l.json?JSON.stringify(t):String(t))),n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}for(var t,c,u=e?void 0:{},a=document.cookie?document.cookie.split("; "):[],d=0,f=a.length;d<f;d++){var p=a[d].split("="),s=(c=p.shift(),l.raw?c:decodeURIComponent(c)),m=p.join("=");if(e&&e===s){u=k(m,o);break}e||void 0===(m=k(m))||(u[s]=m)}return u};l.defaults={},v.removeCookie=function(e,o){return void 0!==v.cookie(e)&&(v.cookie(e,"",v.extend({},o,{expires:-1})),!v.cookie(e))}});


function openUserSubPage(e, t, n) {
    return !(!e.metaKey && !e.ctrlKey) || ("about" != currentTab ? tapNavigationBarButton(null, "about", function () {
        checkPushCapab(), openAboutSubPage(t, n)
    }) : openAboutSubPage(t, n), !1)
}
function openAboutPage(e, t, n) {
    return !(!e.metaKey && !e.ctrlKey) || ("about" != currentTab ? (element("container").style.display = "none",
        element("topbar-title").style.display = "none", tapNavigationBarButton(null, "about", function () {
            checkPushCapab(), openAboutSubPage(t, n)
        })) : (popToRoot(e), openAboutSubPage(t, n)), !1)
}


function toggleDetails() {
    "block" == element("app-stats-container").style.display ? (element("app-stats-container").style.display = "none",
        element("app-stats-show").innerHTML = '查看更多信息 <i class="far fa-chevron-down"></i>') : (
        element("app-stats-container").style.display = "block", element("app-stats-show").innerHTML =
        '隐藏更多信息 <i class="far fa-chevron-up"></i>')
}


function showCancel() {
    element("search").classList.add("focus"), element("cancel").style.visibility = "visible"
}
function hideCancel() {
    element("cancel").style.visibility = "hidden", element("search").classList.remove("focus")
}
$(function(){
 var slideHeight = 200; // px
 var defHeight = $('#wrap').height();
 if(defHeight >= slideHeight){
  $('#wrap').css('height' , slideHeight + 'px');
  $('#read-more').append('<a href="#"><svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> 更多</a>');
  $('#read-more a').click(function(){
   var curHeight = $('#wrap').height();
   if(curHeight == slideHeight){
    $('#wrap').animate({
     height: defHeight
    }, "normal");
    $('#read-more a').html('<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> 收起');
    $('#gradient').fadeOut();
   }else{
    $('#wrap').animate({
     height: slideHeight
    }, "normal");
    $('#read-more a').html('<svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> 更多');
    $('#gradient').fadeIn();
   }
   return false;
  });  
 }
});
function element(e) {
    return document.getElementById(e)
}

// Add to Home
var osDetection = navigator.userAgent || navigator.vendor || window.opera;
var windowsPhoneDetection = /windows phone/i.test(osDetection);
var androidDetection = /android/i.test(osDetection);
var iosDetection = /iPad|iPhone|iPod/.test(osDetection) && !window.MSStream;
$(function(){
if (windowsPhoneDetection) {
    // Windows Phone Detected
    $(".windowsphone-detection").addClass("is-active");
    $(".mobile-detection").addClass("is-active");
}
else if (androidDetection) {
    // Android Detected
    $(".android-detection").addClass("is-active");
    $(".mobile-detection").addClass("is-active");
}
else if (iosDetection) {
    // iOS Detected
    $(".ios-detection").addClass("is-active");
    $(".mobile-detection").addClass("is-active");
}
else {
    // Non-Mobile Detected
    $(".non-mobile-detection").addClass("is-active");

}
});
function AddtoHome(time, once) {
    if (once) {
        var AddHomeStatus = localStorage.getItem("MobilekitAddHomeStatus");
        if (AddHomeStatus === "1" || AddHomeStatus === 1) {
            // already showed up
        }
        else {
            localStorage.setItem("MobilekitAddHomeStatus", 1)
            window.addEventListener('load', () => {
                if (navigator.standalone) {
                    // if app installed ios home screen
                }
                else if (matchMedia('(display-mode: standalone)').matches) {
                    // if app installed android home screen
                }
                else {
                    // if app is not installed
                    if (androidDetection) {
                        setTimeout(() => {
                            $('#android-add-to-home-screen').modal();
                        }, time);
                    }
                    if (iosDetection) {
                        setTimeout(() => {
                            $('#ios-add-to-home-screen').modal();
                        }, time);
                    }
                }
            });
        }
    }
    else {
        window.addEventListener('load', () => {
            if (navigator.standalone) {
                // app loaded to ios
            }
            else if (matchMedia('(display-mode: standalone)').matches) {
                // app loaded to android
            }
            else {
                // app not loaded
                if (androidDetection) {
                    setTimeout(() => {
                        $('#android-add-to-home-screen').modal();
                    }, time);
                }
                if (iosDetection) {
                    setTimeout(() => {
                        $('#ios-add-to-home-screen').modal();
                    }, time);
                }
            }
        });
    }

}
