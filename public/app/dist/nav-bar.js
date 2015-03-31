System.register(["aurelia-framework"], function (_export) {
  var Behavior, _createClass, _classCallCheck, NavBar;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NavBar = _export("NavBar", (function () {
        function NavBar() {
          _classCallCheck(this, NavBar);
        }

        _createClass(NavBar, null, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("router");
            }
          }
        });

        return NavBar;
      })());
    }
  };
});