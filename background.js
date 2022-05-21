!function(e) {
    function a(b) {
      if (d[b]) {
        return d[b].exports;
      }
      var c = d[b] = {u:b, h:!1, exports:{}};
      return e[b].call(c.exports, c, c.exports, a), c.h = !0, c.exports;
    }
    var d = {};
    a.c = d;
    a.d = function(b, c, g) {
      a.i(b, c) || Object.defineProperty(b, c, {configurable:!1, enumerable:!0, get:g});
    };
    a.n = function(b) {
      var c = b && b.m ? function() {
        return b["default"];
      } : function() {
        return b;
      };
      return a.d(c, "a", c), c;
    };
    a.i = function(b, c) {
      return Object.prototype.hasOwnProperty.call(b, c);
    };
    a.p = "/packs/";
    a(231);
  }({231:function(e, a, d) {
    d(232);
  }, 232:function() {
    $(function() {
      $("body").A("ajax:success", "[data-remote]", function(e) {
        var a = e.detail[0];
        if (a.s) {
          var d = $(e.target).j("[data-ajax=replace]").slice(0, 1);
          d && $.o({url:d.data("url"), data:{B:d.data("partial")}, D:function(h) {
            d.data("inside") ? d.g($(h)) : d.replaceWith($(h));
          }});
        } else if (a.l) {
          var b = a.id, c = a.l, g = a.C, k = a.v;
          a = a.level;
          var f = void 0;
          b ? f = $("#" + b) : (a || (a = 1), f = $(e.target).j("[data-ajax=replace]").slice(a - 1, a), g && (f = f.find('[data-replaceable="' + g + '"]')));
          k ? f.g(c) : f.replaceWith(c);
          e.preventDefault();
        }
      });
    });
  }});