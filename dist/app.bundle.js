!(function (e) {
  var n = {};
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
    }),
    (t.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if ((t.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & n && 'string' != typeof e))
        for (var o in e)
          t.d(
            r,
            o,
            function (n) {
              return e[n];
            }.bind(null, o)
          );
      return r;
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, 'a', n), n;
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = '/'),
    t((t.s = 0));
})([
  function (e, n, t) {
    'use strict';
    function r() {
      console.log('I get called from print.js!！！66！');
    }
    function o() {
      const e = document.createElement('div');
      var n;
      (e.innerHTML = ['1112226664446', '5 cubed is equal to ' + ((n = 5), n * n * n)].join('\n\n')),
        e.classList.add('hello');
      const t = document.createElement('button');
      return (t.innerHTML = 'Click me and check the console!'), (t.onclick = r), e.appendChild(t), e;
    }
    t.r(n);
    let u = o();
    document.body.appendChild(u), document.body.appendChild(o());
  },
]);
