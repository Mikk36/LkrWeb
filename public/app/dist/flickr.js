System.register(["aurelia-http-client"], function (_export) {
  var HttpClient, _createClass, _classCallCheck, url, Flickr;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json";
      Flickr = _export("Flickr", (function () {
        function Flickr(http) {
          _classCallCheck(this, Flickr);

          this.heading = "Flickr";
          this.images = [];
          this.http = http;
        }

        _createClass(Flickr, {
          activate: {
            value: function activate() {
              var _this = this;

              return this.http.jsonp(url).then(function (response) {
                _this.images = response.content.items;
              });
            }
          },
          canDeactivate: {
            value: function canDeactivate() {
              return confirm("Are you sure you want to leave?");
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [HttpClient];
            }
          }
        });

        return Flickr;
      })());
    }
  };
});