webpackJsonp([3],{2:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar btn = document.querySelector(".header__menu");\nvar overlay = document.querySelector(".overlay");\n\nbtn.addEventListener("click", function (e) {\n  overlay.classList.toggle("overlay-show");\n  document.body.classList.toggle("no-scroll");\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wb3B1cC5qcz83Zjg5Il0sIm5hbWVzIjpbImJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm92ZXJsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxNQUFNQyxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQVo7QUFDQSxJQUFNQyxVQUFVRixTQUFTQyxhQUFULENBQXVCLFVBQXZCLENBQWhCOztBQUVBRixJQUFJSSxnQkFBSixDQUFxQixPQUFyQixFQUE4QixhQUFLO0FBQ2pDRCxVQUFRRSxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixjQUF6QjtBQUNBTCxXQUFTTSxJQUFULENBQWNGLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLFdBQS9CO0FBQ0QsQ0FIRCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnVcIik7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJvdmVybGF5LXNob3dcIik7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm5vLXNjcm9sbFwiKTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvcG9wdXAuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n')},3:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar strip1 = document.querySelector(".header__menu-strip-1");\nvar strip2 = document.querySelector(".header__menu-strip-2");\nvar strip3 = document.querySelector(".header__menu-strip-3");\n\nvar menu = document.querySelector(".hamburger");\n\nmenu.addEventListener("click", function (e) {\n  strip1.classList.toggle("open");\n  strip2.classList.toggle("open");\n  strip3.classList.toggle("open");\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oYW1idXJnZXIuanM/N2NhZCJdLCJuYW1lcyI6WyJzdHJpcDEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHJpcDIiLCJzdHJpcDMiLCJtZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxTQUFTQyxTQUFTQyxhQUFULENBQXVCLHVCQUF2QixDQUFmO0FBQ0EsSUFBTUMsU0FBU0YsU0FBU0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBZjtBQUNBLElBQU1FLFNBQVNILFNBQVNDLGFBQVQsQ0FBdUIsdUJBQXZCLENBQWY7O0FBRUEsSUFBTUcsT0FBT0osU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFiOztBQUVBRyxLQUFLQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixhQUFLO0FBQ2xDTixTQUFPTyxTQUFQLENBQWlCQyxNQUFqQixDQUF3QixNQUF4QjtBQUNBTCxTQUFPSSxTQUFQLENBQWlCQyxNQUFqQixDQUF3QixNQUF4QjtBQUNBSixTQUFPRyxTQUFQLENBQWlCQyxNQUFqQixDQUF3QixNQUF4QjtBQUNELENBSkQiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0cmlwMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51LXN0cmlwLTFcIik7XG5jb25zdCBzdHJpcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudS1zdHJpcC0yXCIpO1xuY29uc3Qgc3RyaXAzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnUtc3RyaXAtM1wiKTtcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgc3RyaXAxLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICBzdHJpcDIuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG4gIHN0cmlwMy5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvaGFtYnVyZ2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n')},56:function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(57);\n\n__webpack_require__(2);\n\n__webpack_require__(3);\n\n__webpack_require__(58);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz9kODVhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0EiLCJmaWxlIjoiNTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL21vZHVsZXMvc3dpcGUtYXNpZGVcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9wb3B1cFwiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL2hhbWJ1cmdlclwiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL2Jsb2ctc2Nyb2xsXCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///56\n")},57:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar btn = document.querySelector(".swiper");\nvar blogLeft = document.querySelector(".blog-left");\n\nbtn.addEventListener("click", function (e) {\n  blogLeft.classList.toggle("fixed");\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zd2lwZS1hc2lkZS5qcz9hZWNjIl0sIm5hbWVzIjpbImJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJsb2dMZWZ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxNQUFNQyxTQUFTQyxhQUFULENBQXVCLFNBQXZCLENBQVo7QUFDQSxJQUFNQyxXQUFXRixTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBQWpCOztBQUVBRixJQUFJSSxnQkFBSixDQUFxQixPQUFyQixFQUE4QixhQUFLO0FBQ2pDRCxXQUFTRSxTQUFULENBQW1CQyxNQUFuQixDQUEwQixPQUExQjtBQUNELENBRkQiLCJmaWxlIjoiNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN3aXBlclwiKTtcbmNvbnN0IGJsb2dMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9nLWxlZnRcIik7XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gIGJsb2dMZWZ0LmNsYXNzTGlzdC50b2dnbGUoXCJmaXhlZFwiKTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvc3dpcGUtYXNpZGUuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///57\n')},58:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar cnt = document.querySelector(".container");\nvar menu = document.querySelector(".blog-left");\n\nwindow.onscroll = function (e) {\n  if (cnt.getBoundingClientRect().top <= 0) {\n    menu.classList.add("blog-left--fixed");\n  } else if (cnt.getBoundingClientRect().top > 0) {\n    menu.classList.remove("blog-left--fixed");\n  }\n  addActiveClass();\n};\n\nfunction addActiveClass() {\n  var obj = {\n    article0: "link0",\n    article1: "link1",\n    article2: "link2",\n    article3: "link3"\n  };\n  for (var prop in obj) {\n    var article = document.getElementById(prop);\n    var blogLink = document.getElementById(obj[prop]);\n\n    var _article$getBoundingC = article.getBoundingClientRect(),\n        top = _article$getBoundingC.top,\n        bottom = _article$getBoundingC.bottom;\n\n    if (top < 100 && bottom > 0) {\n      blogLink.classList.add("menu-articles__link--active");\n    } else {\n      blogLink.classList.remove("menu-articles__link--active");\n    }\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibG9nLXNjcm9sbC5qcz9kMjdkIl0sIm5hbWVzIjpbImNudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEFjdGl2ZUNsYXNzIiwib2JqIiwiYXJ0aWNsZTAiLCJhcnRpY2xlMSIsImFydGljbGUyIiwiYXJ0aWNsZTMiLCJwcm9wIiwiYXJ0aWNsZSIsImdldEVsZW1lbnRCeUlkIiwiYmxvZ0xpbmsiLCJib3R0b20iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsTUFBTUMsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFaO0FBQ0EsSUFBTUMsT0FBT0YsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFiOztBQUVBRSxPQUFPQyxRQUFQLEdBQWtCLGFBQUs7QUFDckIsTUFBSUwsSUFBSU0scUJBQUosR0FBNEJDLEdBQTVCLElBQW1DLENBQXZDLEVBQTBDO0FBQ3hDSixTQUFLSyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsa0JBQW5CO0FBQ0QsR0FGRCxNQUVPLElBQUlULElBQUlNLHFCQUFKLEdBQTRCQyxHQUE1QixHQUFrQyxDQUF0QyxFQUF5QztBQUM5Q0osU0FBS0ssU0FBTCxDQUFlRSxNQUFmLENBQXNCLGtCQUF0QjtBQUNEO0FBQ0RDO0FBQ0QsQ0FQRDs7QUFTQSxTQUFTQSxjQUFULEdBQTBCO0FBQ3hCLE1BQUlDLE1BQU07QUFDUkMsY0FBVSxPQURGO0FBRVJDLGNBQVUsT0FGRjtBQUdSQyxjQUFVLE9BSEY7QUFJUkMsY0FBVTtBQUpGLEdBQVY7QUFNQSxPQUFLLElBQU1DLElBQVgsSUFBbUJMLEdBQW5CLEVBQXdCO0FBQ3RCLFFBQUlNLFVBQVVqQixTQUFTa0IsY0FBVCxDQUF3QkYsSUFBeEIsQ0FBZDtBQUNBLFFBQUlHLFdBQVduQixTQUFTa0IsY0FBVCxDQUF3QlAsSUFBSUssSUFBSixDQUF4QixDQUFmOztBQUZzQixnQ0FHQUMsUUFBUVoscUJBQVIsRUFIQTtBQUFBLFFBR2hCQyxHQUhnQix5QkFHaEJBLEdBSGdCO0FBQUEsUUFHWGMsTUFIVyx5QkFHWEEsTUFIVzs7QUFJdEIsUUFBSWQsTUFBTSxHQUFOLElBQWFjLFNBQVMsQ0FBMUIsRUFBNkI7QUFDM0JELGVBQVNaLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLDZCQUF2QjtBQUNELEtBRkQsTUFFTztBQUNMVyxlQUFTWixTQUFULENBQW1CRSxNQUFuQixDQUEwQiw2QkFBMUI7QUFDRDtBQUNGO0FBQ0YiLCJmaWxlIjoiNTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2ctbGVmdFwiKTtcblxud2luZG93Lm9uc2Nyb2xsID0gZSA9PiB7XG4gIGlmIChjbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDApIHtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJibG9nLWxlZnQtLWZpeGVkXCIpO1xuICB9IGVsc2UgaWYgKGNudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPiAwKSB7XG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvZy1sZWZ0LS1maXhlZFwiKTtcbiAgfVxuICBhZGRBY3RpdmVDbGFzcygpO1xufTtcblxuZnVuY3Rpb24gYWRkQWN0aXZlQ2xhc3MoKSB7XG4gIGxldCBvYmogPSB7XG4gICAgYXJ0aWNsZTA6IFwibGluazBcIixcbiAgICBhcnRpY2xlMTogXCJsaW5rMVwiLFxuICAgIGFydGljbGUyOiBcImxpbmsyXCIsXG4gICAgYXJ0aWNsZTM6IFwibGluazNcIlxuICB9O1xuICBmb3IgKGNvbnN0IHByb3AgaW4gb2JqKSB7XG4gICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9wKTtcbiAgICBsZXQgYmxvZ0xpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmpbcHJvcF0pO1xuICAgIGxldCB7IHRvcCwgYm90dG9tIH0gPSBhcnRpY2xlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICh0b3AgPCAxMDAgJiYgYm90dG9tID4gMCkge1xuICAgICAgYmxvZ0xpbmsuY2xhc3NMaXN0LmFkZChcIm1lbnUtYXJ0aWNsZXNfX2xpbmstLWFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmxvZ0xpbmsuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtYXJ0aWNsZXNfX2xpbmstLWFjdGl2ZVwiKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2Jsb2ctc2Nyb2xsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///58\n')}},[56]);