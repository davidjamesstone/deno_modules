// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

// @ts-nocheck
/* eslint-disable */
let System, __instantiateAsync, __instantiate;

(() => {
  const r = new Map();

  System = {
    register(id, d, f) {
      r.set(id, { d, f, exp: {} });
    },
  };

  async function dI(mid, src) {
    let id = mid.replace(/\.\w+$/i, "");
    if (id.includes("./")) {
      const [o, ...ia] = id.split("/").reverse(),
        [, ...sa] = src.split("/").reverse(),
        oa = [o];
      let s = 0,
        i;
      while ((i = ia.shift())) {
        if (i === "..") s++;
        else if (i === ".") break;
        else oa.push(i);
      }
      if (s < sa.length) oa.push(...sa.slice(s));
      id = oa.reverse().join("/");
    }
    return r.has(id) ? gExpA(id) : import(mid);
  }

  function gC(id, main) {
    return {
      id,
      import: (m) => dI(m, id),
      meta: { url: id, main },
    };
  }

  function gE(exp) {
    return (id, v) => {
      v = typeof id === "string" ? { [id]: v } : id;
      for (const [id, value] of Object.entries(v)) {
        Object.defineProperty(exp, id, {
          value,
          writable: true,
          enumerable: true,
        });
      }
    };
  }

  function rF(main) {
    for (const [id, m] of r.entries()) {
      const { f, exp } = m;
      const { execute: e, setters: s } = f(gE(exp), gC(id, id === main));
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }

  async function gExpA(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](await gExpA(d[i]));
      const r = e();
      if (r) await r;
    }
    return m.exp;
  }

  function gExp(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }

  __instantiateAsync = async (m) => {
    System = __instantiateAsync = __instantiate = undefined;
    rF(m);
    return gExpA(m);
  };

  __instantiate = (m) => {
    System = __instantiateAsync = __instantiate = undefined;
    rF(m);
    return gExp(m);
  };
})();

System.register("preact", [], function (exports_1, context_1) {
    "use strict";
    var t, e, n, r, o, u, i, _, l, a, c, F, I, O, K, $, j, V, B, q, ct, gt, kt, bt, Ct, Tt, Lt, Nt, Rt, Wt, Ft, Ot;
    var __moduleName = context_1 && context_1.id;
    function s(t, e) { for (var n in e)
        t[n] = e[n]; return t; }
    function f(t) { var e = t.parentNode; e && e.removeChild(t); }
    function p(t, e, n) { var r, o = arguments, u = {}; for (r in e)
        "key" !== r && "ref" !== r && (u[r] = e[r]); if (arguments.length > 3)
        for (n = [n], r = 3; r < arguments.length; r++)
            n.push(o[r]); if (null != n && (u.children = n), "function" == typeof t && null != t.defaultProps)
        for (r in t.defaultProps)
            void 0 === u[r] && (u[r] = t.defaultProps[r]); return h(t, u, e && e.key, e && e.ref, null); }
    exports_1("createElement", p);
    exports_1("h", p);
    function h(e, n, r, o, u) { var i = { type: e, props: n, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: u }; return null == u && (i.__v = i), t.vnode && t.vnode(i), i; }
    function d() { return {}; }
    exports_1("createRef", d);
    function v(t) { return t.children; }
    exports_1("Fragment", v);
    function y(t, e) { this.props = t, this.context = e; }
    exports_1("Component", y);
    function m(t, e) { if (null == e)
        return t.__ ? m(t.__, t.__.__k.indexOf(t) + 1) : null; for (var n; e < t.__k.length; e++)
        if (null != (n = t.__k[e]) && null != n.__e)
            return n.__e; return "function" == typeof t.type ? m(t) : null; }
    function g(t) { var e, n; if (null != (t = t.__) && null != t.__c) {
        for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e) {
                t.__e = t.__c.base = n.__e;
                break;
            }
        return g(t);
    } }
    function k(e) { (!e.__d && (e.__d = !0) && n.push(e) && !r++ || u !== t.debounceRendering) && ((u = t.debounceRendering) || o)(b); }
    function b() { for (var t; r = n.length;)
        t = n.sort((function (t, e) { return t.__v.__b - e.__v.__b; })), n = [], t.some((function (t) { var e, n, r, o, u, i, _; t.__d && (i = (u = (e = t).__v).__e, (_ = e.__P) && (n = [], (r = s({}, u)).__v = r, o = H(_, u, r, e.__n, void 0 !== _.ownerSVGElement, null, n, null == i ? m(u) : i), P(n, u), o != i && g(u))); })); }
    function C(t, e, n, r, o, u, i, _, c) { var s, p, h, d, v, y, g, k = n && n.__k || a, b = k.length; if (_ == l && (_ = null != u ? u[0] : b ? m(n, 0) : null), s = 0, e.__k = x(e.__k, (function (n) { if (null != n) {
        if (n.__ = e, n.__b = e.__b + 1, null === (h = k[s]) || h && n.key == h.key && n.type === h.type)
            k[s] = void 0;
        else
            for (p = 0; p < b; p++) {
                if ((h = k[p]) && n.key == h.key && n.type === h.type) {
                    k[p] = void 0;
                    break;
                }
                h = null;
            }
        if (d = H(t, n, h = h || l, r, o, u, i, _, c), (p = n.ref) && h.ref != p && (g || (g = []), h.ref && g.push(h.ref, null, n), g.push(p, n.__c || d, n)), null != d) {
            var a;
            if (null == y && (y = d), void 0 !== n.__d)
                a = n.__d, n.__d = void 0;
            else if (u == h || d != _ || null == d.parentNode) {
                t: if (null == _ || _.parentNode !== t)
                    t.appendChild(d), a = null;
                else {
                    for (v = _, p = 0; (v = v.nextSibling) && p < b; p += 2)
                        if (v == d)
                            break t;
                    t.insertBefore(d, _), a = _;
                }
                "option" == e.type && (t.value = "");
            }
            _ = void 0 !== a ? a : d.nextSibling, "function" == typeof e.type && (e.__d = _);
        }
        else
            _ && h.__e == _ && _.parentNode != t && (_ = m(h));
    } return s++, n; })), e.__e = y, null != u && "function" != typeof e.type)
        for (s = u.length; s--;)
            null != u[s] && f(u[s]); for (s = b; s--;)
        null != k[s] && T(k[s], k[s]); if (g)
        for (s = 0; s < g.length; s++)
            D(g[s], g[++s], g[++s]); }
    function x(t, e, n) { if (null == n && (n = []), null == t || "boolean" == typeof t)
        e && n.push(e(null));
    else if (Array.isArray(t))
        for (var r = 0; r < t.length; r++)
            x(t[r], e, n);
    else
        n.push(e ? e("string" == typeof t || "number" == typeof t ? h(null, t, null, null, t) : null != t.__e || null != t.__c ? h(t.type, t.props, t.key, null, t.__v) : t) : t); return n; }
    exports_1("toChildArray", x);
    function w(t, e, n, r, o) { var u; for (u in n)
        "children" === u || "key" === u || u in e || E(t, u, null, n[u], r); for (u in e)
        o && "function" != typeof e[u] || "children" === u || "key" === u || "value" === u || "checked" === u || n[u] === e[u] || E(t, u, e[u], n[u], r); }
    function U(t, e, n) { "-" === e[0] ? t.setProperty(e, n) : t[e] = "number" == typeof n && !1 === c.test(e) ? n + "px" : null == n ? "" : n; }
    function E(t, e, n, r, o) { var u, i, _, l, a; if (o ? "className" === e && (e = "class") : "class" === e && (e = "className"), "style" === e)
        if (u = t.style, "string" == typeof n)
            u.cssText = n;
        else {
            if ("string" == typeof r && (u.cssText = "", r = null), r)
                for (l in r)
                    n && l in n || U(u, l, "");
            if (n)
                for (a in n)
                    r && n[a] === r[a] || U(u, a, n[a]);
        }
    else
        "o" === e[0] && "n" === e[1] ? (i = e !== (e = e.replace(/Capture$/, "")), _ = e.toLowerCase(), e = (_ in t ? _ : e).slice(2), n ? (r || t.addEventListener(e, S, i), (t.l || (t.l = {}))[e] = n) : t.removeEventListener(e, S, i)) : "list" !== e && "tagName" !== e && "form" !== e && "type" !== e && "size" !== e && !o && e in t ? t[e] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== e && (e !== (e = e.replace(/^xlink:?/, "")) ? null == n || !1 === n ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(e) ? t.removeAttribute(e) : t.setAttribute(e, n)); }
    function S(e) { this.l[e.type](t.event ? t.event(e) : e); }
    function H(e, n, r, o, u, i, _, l, a) { var c, f, p, h, d, m, g, k, b, x, w = n.type; if (void 0 !== n.constructor)
        return null; (c = t.__b) && c(n); try {
        t: if ("function" == typeof w) {
            if (k = n.props, b = (c = w.contextType) && o[c.__c], x = c ? b ? b.props.value : c.__ : o, r.__c ? g = (f = n.__c = r.__c).__ = f.__E : ("prototype" in w && w.prototype.render ? n.__c = f = new w(k, x) : (n.__c = f = new y(k, x), f.constructor = w, f.render = M), b && b.sub(f), f.props = k, f.state || (f.state = {}), f.context = x, f.__n = o, p = f.__d = !0, f.__h = []), null == f.__s && (f.__s = f.state), null != w.getDerivedStateFromProps && (f.__s == f.state && (f.__s = s({}, f.__s)), s(f.__s, w.getDerivedStateFromProps(k, f.__s))), h = f.props, d = f.state, p)
                null == w.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), null != f.componentDidMount && f.__h.push(f.componentDidMount);
            else {
                if (null == w.getDerivedStateFromProps && k !== h && null != f.componentWillReceiveProps && f.componentWillReceiveProps(k, x), !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(k, f.__s, x) || n.__v === r.__v && !f.__) {
                    for (f.props = k, f.state = f.__s, n.__v !== r.__v && (f.__d = !1), f.__v = n, n.__e = r.__e, n.__k = r.__k, f.__h.length && _.push(f), c = 0; c < n.__k.length; c++)
                        n.__k[c] && (n.__k[c].__ = n);
                    break t;
                }
                null != f.componentWillUpdate && f.componentWillUpdate(k, f.__s, x), null != f.componentDidUpdate && f.__h.push((function () { f.componentDidUpdate(h, d, m); }));
            }
            f.context = x, f.props = k, f.state = f.__s, (c = t.__r) && c(n), f.__d = !1, f.__v = n, f.__P = e, c = f.render(f.props, f.state, f.context), n.__k = null != c && c.type == v && null == c.key ? c.props.children : Array.isArray(c) ? c : [c], null != f.getChildContext && (o = s(s({}, o), f.getChildContext())), p || null == f.getSnapshotBeforeUpdate || (m = f.getSnapshotBeforeUpdate(h, d)), C(e, n, r, o, u, i, _, l, a), f.base = n.__e, f.__h.length && _.push(f), g && (f.__E = f.__ = null), f.__e = !1;
        }
        else
            null == i && n.__v === r.__v ? (n.__k = r.__k, n.__e = r.__e) : n.__e = A(r.__e, n, r, o, u, i, _, a);
        (c = t.diffed) && c(n);
    }
    catch (e) {
        n.__v = null, t.__e(e, n, r);
    } return n.__e; }
    function P(e, n) { t.__c && t.__c(n, e), e.some((function (n) { try {
        e = n.__h, n.__h = [], e.some((function (t) { t.call(n); }));
    }
    catch (e) {
        t.__e(e, n.__v);
    } })); }
    function A(t, e, n, r, o, u, i, _) { var c, s, f, p, h, d = n.props, v = e.props; if (o = "svg" === e.type || o, null != u)
        for (c = 0; c < u.length; c++)
            if (null != (s = u[c]) && ((null === e.type ? 3 === s.nodeType : s.localName === e.type) || t == s)) {
                t = s, u[c] = null;
                break;
            } if (null == t) {
        if (null === e.type)
            return document.createTextNode(v);
        t = o ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type, v.is && { is: v.is }), u = null, _ = !1;
    } if (null === e.type)
        d !== v && t.data != v && (t.data = v);
    else {
        if (null != u && (u = a.slice.call(t.childNodes)), f = (d = n.props || l).dangerouslySetInnerHTML, p = v.dangerouslySetInnerHTML, !_) {
            if (d === l)
                for (d = {}, h = 0; h < t.attributes.length; h++)
                    d[t.attributes[h].name] = t.attributes[h].value;
            (p || f) && (p && f && p.__html == f.__html || (t.innerHTML = p && p.__html || ""));
        }
        w(t, v, d, o, _), p ? e.__k = [] : (e.__k = e.props.children, C(t, e, n, r, "foreignObject" !== e.type && o, u, i, l, _)), _ || ("value" in v && void 0 !== (c = v.value) && c !== t.value && E(t, "value", c, d.value, !1), "checked" in v && void 0 !== (c = v.checked) && c !== t.checked && E(t, "checked", c, d.checked, !1));
    } return t; }
    function D(e, n, r) { try {
        "function" == typeof e ? e(n) : e.current = n;
    }
    catch (e) {
        t.__e(e, r);
    } }
    function T(e, n, r) { var o, u, i; if (t.unmount && t.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || D(o, null, n)), r || "function" == typeof e.type || (r = null != (u = e.__e)), e.__e = e.__d = void 0, null != (o = e.__c)) {
        if (o.componentWillUnmount)
            try {
                o.componentWillUnmount();
            }
            catch (e) {
                t.__e(e, n);
            }
        o.base = o.__P = null;
    } if (o = e.__k)
        for (i = 0; i < o.length; i++)
            o[i] && T(o[i], n, r); null != u && f(u); }
    exports_1("_unmount", T);
    function M(t, e, n) { return this.constructor(t, n); }
    function L(e, n, r) { var o, u, _; t.__ && t.__(e, n), u = (o = r === i) ? null : r && r.__k || n.__k, e = p(v, null, [e]), _ = [], H(n, (o ? n : r || n).__k = e, u || l, l, void 0 !== n.ownerSVGElement, r && !o ? [r] : u ? null : a.slice.call(n.childNodes), _, r || l, o), P(_, e); }
    exports_1("render", L);
    function N(t, e) { L(t, e, i); }
    exports_1("hydrate", N);
    function R(t, e) { var n, r; for (r in e = s(s({}, t.props), e), arguments.length > 2 && (e.children = a.slice.call(arguments, 2)), n = {}, e)
        "key" !== r && "ref" !== r && (n[r] = e[r]); return h(t.type, n, e.key || t.key, e.ref || t.ref, null); }
    exports_1("cloneElement", R);
    function W(t) { var e = {}, n = { __c: "__cC" + _++, __: t, Consumer: function (t, e) { return t.children(e); }, Provider: function (t) { var r, o = this; return this.getChildContext || (r = [], this.getChildContext = function () { return e[n.__c] = o, e; }, this.shouldComponentUpdate = function (t) { o.props.value !== t.value && r.some((function (e) { e.context = t.value, k(e); })); }, this.sub = function (t) { r.push(t); var e = t.componentWillUnmount; t.componentWillUnmount = function () { r.splice(r.indexOf(t), 1), e && e.call(t); }; }), t.children; } }; return n.Consumer.contextType = n, n.Provider.__ = n, n; }
    exports_1("createContext", W);
    function z(e, n) { t.__h && t.__h(I, e, K || n), K = 0; var r = I.__H || (I.__H = { __: [], __h: [] }); return e >= r.__.length && r.__.push({}), r.__[e]; }
    function G(t) { return K = 1, J(at, t); }
    exports_1("useState", G);
    function J(t, e, n) { var r = z(F++, 2); return r.__c || (r.__c = I, r.__ = [n ? n(e) : at(void 0, e), function (e) { var n = t(r.__[0], e); r.__[0] !== n && (r.__[0] = n, r.__c.setState({})); }]), r.__; }
    exports_1("useReducer", J);
    function Q(e, n) { var r = z(F++, 3); !t.__s && lt(r.__H, n) && (r.__ = e, r.__H = n, I.__H.__h.push(r)); }
    exports_1("useEffect", Q);
    function X(e, n) { var r = z(F++, 4); !t.__s && lt(r.__H, n) && (r.__ = e, r.__H = n, I.__h.push(r)); }
    exports_1("useLayoutEffect", X);
    function Y(t) { return K = 5, tt((function () { return { current: t }; }), []); }
    exports_1("useRef", Y);
    function Z(t, e, n) { K = 6, X((function () { "function" == typeof t ? t(e()) : t && (t.current = e()); }), null == n ? n : n.concat(t)); }
    exports_1("useImperativeHandle", Z);
    function tt(t, e) { var n = z(F++, 7); return lt(n.__H, e) ? (n.__H = e, n.__h = t, n.__ = t()) : n.__; }
    exports_1("useMemo", tt);
    function et(t, e) { return K = 8, tt((function () { return t; }), e); }
    exports_1("useCallback", et);
    function nt(t) { var e = I.context[t.__c], n = z(F++, 9); return n.__c = t, e ? (null == n.__ && (n.__ = !0, e.sub(I)), e.props.value) : t.__; }
    exports_1("useContext", nt);
    function rt(e, n) { t.useDebugValue && t.useDebugValue(n ? n(e) : e); }
    exports_1("useDebugValue", rt);
    function ot(t) { var e = z(F++, 10), n = G(); return e.__ = t, I.componentDidCatch || (I.componentDidCatch = function (t) { e.__ && e.__(t), n[1](t); }), [n[0], function () { n[1](void 0); }]; }
    exports_1("useErrorBoundary", ot);
    function ut() { $.some((function (e) { if (e.__P)
        try {
            e.__H.__h.forEach(it), e.__H.__h.forEach(_t), e.__H.__h = [];
        }
        catch (n) {
            return e.__H.__h = [], t.__e(n, e.__v), !0;
        } })), $ = []; }
    function it(t) { t.t && t.t(); }
    function _t(t) { var e = t.__(); "function" == typeof e && (t.t = e); }
    function lt(t, e) { return !t || e.some((function (e, n) { return e !== t[n]; })); }
    function at(t, e) { return "function" == typeof e ? e(t) : e; }
    function st(t, e) { for (var n in e) {
        t[n] = e[n];
    } return t; }
    function ft(t, e, n) { var r = /(?:\?([^#]*))?(#.*)?$/, o = t.match(r), u = {}, i; if (o && o[1]) {
        var _ = o[1].split("&");
        for (var l = 0; l < _.length; l++) {
            var a = _[l].split("=");
            u[decodeURIComponent(a[0])] = decodeURIComponent(a.slice(1).join("="));
        }
    } t = dt(t.replace(r, "")); e = dt(e || ""); var c = Math.max(t.length, e.length); for (var s = 0; s < c; s++) {
        if (e[s] && e[s].charAt(0) === ":") {
            var f = e[s].replace(/(^:|[+*?]+$)/g, ""), p = (e[s].match(/[+*?]+$/) || ct)[0] || "", h = ~p.indexOf("+"), d = ~p.indexOf("*"), v = t[s] || "";
            if (!v && !d && (p.indexOf("?") < 0 || h)) {
                i = false;
                break;
            }
            u[f] = decodeURIComponent(v);
            if (h || d) {
                u[f] = t.slice(s).map(decodeURIComponent).join("/");
                break;
            }
        }
        else if (e[s] !== t[s]) {
            i = false;
            break;
        }
    } if (n.default !== true && i === false) {
        return false;
    } return u; }
    exports_1("exec", ft);
    function pt(t, e) { return t.rank < e.rank ? 1 : t.rank > e.rank ? -1 : t.index - e.index; }
    function ht(t, e) { t.index = e; t.rank = mt(t); return t.props; }
    function dt(t) { return t.replace(/(^\/+|\/+$)/g, "").split("/"); }
    function vt(t) { return t.charAt(0) == ":" ? 1 + "*+?".indexOf(t.charAt(t.length - 1)) || 4 : 5; }
    function yt(t) { return dt(t).map(vt).join(""); }
    function mt(t) { return t.props.default ? 0 : yt(t.props.path); }
    function xt(t, e) { if (e === void 0)
        e = "push"; if (gt && gt[e]) {
        gt[e](t);
    }
    else if (typeof history !== "undefined" && history[e + "State"]) {
        history[e + "State"](null, null, t);
    } }
    function wt() { var t; if (gt && gt.location) {
        t = gt.location;
    }
    else if (gt && gt.getCurrentLocation) {
        t = gt.getCurrentLocation();
    }
    else {
        t = typeof location !== "undefined" ? location : Ct;
    } return "" + (t.pathname || "") + (t.search || ""); }
    exports_1("getCurrentUrl", wt);
    function Ut(t, e) { if (e === void 0)
        e = false; if (typeof t !== "string" && t.url) {
        e = t.replace;
        t = t.url;
    } if (Et(t)) {
        xt(t, e ? "replace" : "push");
    } return St(t); }
    exports_1("route", Ut);
    function Et(t) { for (var e = kt.length; e--;) {
        if (kt[e].canRoute(t)) {
            return true;
        }
    } return false; }
    function St(t) { var e = false; for (var n = 0; n < kt.length; n++) {
        if (kt[n].routeTo(t) === true) {
            e = true;
        }
    } for (var r = bt.length; r--;) {
        bt[r](t);
    } return e; }
    function Ht(t) { if (!t || !t.getAttribute) {
        return;
    } var e = t.getAttribute("href"), n = t.getAttribute("target"); if (!e || !e.match(/^\//g) || n && !n.match(/^_?self$/i)) {
        return;
    } return Ut(e); }
    function Pt(t) { if (t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || t.button !== 0) {
        return;
    } Ht(t.currentTarget || t.target || this); return At(t); }
    function At(t) { if (t) {
        if (t.stopImmediatePropagation) {
            t.stopImmediatePropagation();
        }
        if (t.stopPropagation) {
            t.stopPropagation();
        }
        t.preventDefault();
    } return false; }
    function Dt(t) { if (t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || t.button !== 0) {
        return;
    } var e = t.target; do {
        if (String(e.nodeName).toUpperCase() === "A" && e.getAttribute("href")) {
            if (e.hasAttribute("native")) {
                return;
            }
            if (Ht(e)) {
                return At(t);
            }
        }
    } while (e = e.parentNode); }
    function Mt() { if (Tt) {
        return;
    } if (typeof addEventListener === "function") {
        if (!gt) {
            addEventListener("popstate", (function () { St(wt()); }));
        }
        addEventListener("click", Dt);
    } Tt = true; }
    function It(t) { var e = Ft.get(this); return e || (e = new Map, Ft.set(this, e)), (e = Wt(this, e.get(t) || (e.set(t, e = function (t) { for (var e, n, r = 1, o = "", u = "", i = [0], _ = function (t) { 1 === r && (t || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? i.push(0, t, o) : 3 === r && (t || o) ? (i.push(3, t, o), r = 2) : 2 === r && "..." === o && t ? i.push(4, t, 0) : 2 === r && o && !t ? i.push(5, 0, !0, o) : r >= 5 && ((o || !t && 5 === r) && (i.push(r, 0, o, n), r = 6), t && (i.push(r, t, 0, n), r = 6)), o = ""; }, l = 0; l < t.length; l++) {
        l && (1 === r && _(), _(l));
        for (var a = 0; a < t[l].length; a++)
            e = t[l][a], 1 === r ? "<" === e ? (_(), i = [i], r = 3) : o += e : 4 === r ? "--" === o && ">" === e ? (r = 1, o = "") : o = e + o[0] : u ? e === u ? u = "" : o += e : '"' === e || "'" === e ? u = e : ">" === e ? (_(), r = 1) : r && ("=" === e ? (r = 5, n = o, o = "") : "/" === e && (r < 5 || ">" === t[l][a + 1]) ? (_(), 3 === r && (i = i[0]), r = i, (i = i[0]).push(2, 0, r), r = 0) : " " === e || "\t" === e || "\n" === e || "\r" === e ? (_(), r = 2) : o += e), 3 === r && "!--" === o && (r = 4, i = i[0]);
    } return _(), i; }(t)), e), arguments, [])).length > 1 ? e : e[0]; }
    return {
        setters: [],
        execute: function () {
            l = {}, a = [], c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
            exports_1("options", t = { __e: function (t, e) { for (var n, r; e = e.__;)
                    if ((n = e.__c) && !n.__)
                        try {
                            if (n.constructor && null != n.constructor.getDerivedStateFromError && (r = !0, n.setState(n.constructor.getDerivedStateFromError(t))), null != n.componentDidCatch && (r = !0, n.componentDidCatch(t)), r)
                                return k(n.__E = n);
                        }
                        catch (e) {
                            t = e;
                        } throw t; } }), exports_1("isValidElement", e = function (t) { return null != t && void 0 === t.constructor; }), y.prototype.setState = function (t, e) { var n; n = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof t && (t = t(n, this.props)), t && s(n, t), null != t && this.__v && (e && this.__h.push(e), k(this)); }, y.prototype.forceUpdate = function (t) { this.__v && (this.__e = !0, t && this.__h.push(t), k(this)); }, y.prototype.render = v, n = [], r = 0, o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, i = l, _ = 0;
            K = 0, $ = [], j = t.__r, V = t.diffed, B = t.__c, q = t.unmount;
            t.__r = function (t) { j && j(t), F = 0, (I = t.__c).__H && (I.__H.__h.forEach(it), I.__H.__h.forEach(_t), I.__H.__h = []); }, t.diffed = function (e) { V && V(e); var n = e.__c; if (n) {
                var r = n.__H;
                r && r.__h.length && (1 !== $.push(n) && O === t.requestAnimationFrame || ((O = t.requestAnimationFrame) || function (t) { var e, n = function () { clearTimeout(r), cancelAnimationFrame(e), setTimeout(t); }, r = setTimeout(n, 100); "undefined" != typeof window && (e = requestAnimationFrame(n)); })(ut));
            } }, t.__c = function (e, n) { n.some((function (e) { try {
                e.__h.forEach(it), e.__h = e.__h.filter((function (t) { return !t.__ || _t(t); }));
            }
            catch (u) {
                n.some((function (t) { t.__h && (t.__h = []); })), n = [], t.__e(u, e.__v);
            } })), B && B(e, n); }, t.unmount = function (e) { q && q(e); var n = e.__c; if (n) {
                var r = n.__H;
                if (r)
                    try {
                        r.__.forEach((function (t) { return t.t && t.t(); }));
                    }
                    catch (e) {
                        t.__e(e, n.__v);
                    }
            } };
            ct = {};
            gt = null;
            kt = [];
            bt = [];
            exports_1("subscribers", bt);
            Ct = {};
            Tt = false;
            Lt = function (t) { function e(e) { t.call(this, e); if (e.history) {
                gt = e.history;
            } this.state = { url: e.url || wt() }; Mt(); } if (t)
                e.__proto__ = t; e.prototype = Object.create(t && t.prototype); e.prototype.constructor = e; e.prototype.shouldComponentUpdate = function t(e) { if (e.static !== true) {
                return true;
            } return e.url !== this.props.url || e.onChange !== this.props.onChange; }; e.prototype.canRoute = function t(e) { var n = x(this.props.children); return this.getMatchingChildren(n, e, false).length > 0; }; e.prototype.routeTo = function t(e) { this.setState({ url: e }); var n = this.canRoute(e); if (!this.updating) {
                this.forceUpdate();
            } return n; }; e.prototype.componentWillMount = function t() { kt.push(this); this.updating = true; }; e.prototype.componentDidMount = function t() { var e = this; if (gt) {
                this.unlisten = gt.listen((function (t) { e.routeTo("" + (t.pathname || "") + (t.search || "")); }));
            } this.updating = false; }; e.prototype.componentWillUnmount = function t() { if (typeof this.unlisten === "function") {
                this.unlisten();
            } kt.splice(kt.indexOf(this), 1); }; e.prototype.componentWillUpdate = function t() { this.updating = true; }; e.prototype.componentDidUpdate = function t() { this.updating = false; }; e.prototype.getMatchingChildren = function t(e, n, r) { return e.filter(ht).sort(pt).map((function (t) { var e = ft(n, t.props.path, t.props); if (e) {
                if (r !== false) {
                    var o = { url: n, matches: e };
                    st(o, e);
                    delete o.ref;
                    delete o.key;
                    return R(t, o);
                }
                return t;
            } })).filter(Boolean); }; e.prototype.render = function t(e, n) { var r = e.children; var o = e.onChange; var u = n.url; var i = this.getMatchingChildren(x(r), u, true); var _ = i[0] || null; var l = this.previousUrl; if (u !== l) {
                this.previousUrl = u;
                if (typeof o === "function") {
                    o({ router: this, url: u, previous: l, active: i, current: _ });
                }
            } return _; }; return e; }(y);
            exports_1("Router", Lt);
            exports_1("preact_router", Lt);
            Nt = function (t) { return p("a", st({ onClick: Pt }, t)); };
            exports_1("Link", Nt);
            Rt = function (t) { return p(t.component, t); };
            exports_1("Route", Rt);
            Lt.subscribers = bt;
            Lt.getCurrentUrl = wt;
            Lt.route = Ut;
            Lt.Router = Lt;
            Lt.Route = Rt;
            Lt.Link = Nt;
            Lt.exec = ft;
            Wt = function (t, e, n, r) { var o; e[0] = 0; for (var u = 1; u < e.length; u++) {
                var i = e[u++], _ = e[u] ? (e[0] |= i ? 1 : 2, n[e[u++]]) : e[++u];
                3 === i ? r[0] = _ : 4 === i ? r[1] = Object.assign(r[1] || {}, _) : 5 === i ? (r[1] = r[1] || {})[e[++u]] = _ : 6 === i ? r[1][e[++u]] += _ + "" : i ? (o = t.apply(_, Wt(t, _, n, ["", null])), r.push(o), _[0] ? e[0] |= 2 : (e[u - 2] = 0, e[u] = o)) : r.push(_);
            } return r; }, Ft = new Map;
            Ot = It.bind(p);
            exports_1("html", Ot);
        }
    };
});
System.register("components/header", ["preact"], function (exports_2, context_2) {
    "use strict";
    var preact_1, Header;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (preact_1_1) {
                preact_1 = preact_1_1;
            }
        ],
        execute: function () {
            exports_2("Header", Header = () => {
                return preact_1.html `<header class="app-header"></header>`;
            });
        }
    };
});
System.register("components/sidebar", ["preact"], function (exports_3, context_3) {
    "use strict";
    var preact_2, Sidebar;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (preact_2_1) {
                preact_2 = preact_2_1;
            }
        ],
        execute: function () {
            exports_3("Sidebar", Sidebar = () => {
                return (preact_2.html `
    <aside class="app-sidenav">
      <div class="menu">
        <p class="menu-label">
          General
        </p>
        <ul class="menu-list">
          <li><a>Dashboard</a></li>
          <li><a>Customers</a></li>
        </ul>
        <p class="menu-label">
          Administration
        </p>
      </div>
    </aside>`);
            });
        }
    };
});
System.register("components/counter", ["preact"], function (exports_4, context_4) {
    "use strict";
    var preact_3, Counter;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (preact_3_1) {
                preact_3 = preact_3_1;
            }
        ],
        execute: function () {
            exports_4("Counter", Counter = ({ initial }) => {
                const [value, setValue] = preact_3.useState(initial);
                const onSubmit = (e) => {
                    e.preventDefault();
                };
                const onInput = (e) => {
                    const { value } = e.target;
                    setValue(+value);
                };
                return (preact_3.html `
      <div>
        Routes ${value}:
      </div>
      <form onSubmit=${onSubmit}>
        <div class="control">
          <input class="input" type="number" value=${value} onInput=${onInput} />
        </div>
        <p>You typed this value: ${value}</p>
        <button type="submit">Submit</button>
      </form>`);
            });
        }
    };
});
System.register("components/main", ["preact", "components/counter"], function (exports_5, context_5) {
    "use strict";
    var preact_4, counter_ts_1, HomePage, CounterPage, SearchPage, Main;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (preact_4_1) {
                preact_4 = preact_4_1;
            },
            function (counter_ts_1_1) {
                counter_ts_1 = counter_ts_1_1;
            }
        ],
        execute: function () {
            HomePage = () => preact_4.html `<a href="/counter">Routes</a>`;
            CounterPage = () => preact_4.html `<${counter_ts_1.Counter} initial=${3} />`;
            SearchPage = () => "Search";
            exports_5("Main", Main = () => {
                return (preact_4.html `
    <main class="app-main">
      <${preact_4.Router}>
        <${HomePage} path="/" />
        <${CounterPage} path="/counter" />
        <${SearchPage} path="/search/:query/:advanced?" />
      </${preact_4.Router}>
    </main>`);
            });
        }
    };
});
System.register("app", ["preact", "components/header", "components/sidebar", "components/main"], function (exports_6, context_6) {
    "use strict";
    var preact_5, header_ts_1, sidebar_ts_1, main_ts_1, App;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (preact_6) {
                exports_6("preact", preact_6);
                preact_5 = preact_6;
            },
            function (header_ts_1_1) {
                header_ts_1 = header_ts_1_1;
            },
            function (sidebar_ts_1_1) {
                sidebar_ts_1 = sidebar_ts_1_1;
            },
            function (main_ts_1_1) {
                main_ts_1 = main_ts_1_1;
            }
        ],
        execute: function () {
            exports_6("App", App = () => (preact_5.html `
    <div class="app-grid-container">
      <${header_ts_1.Header} />
      <${sidebar_ts_1.Sidebar} />
      <${main_ts_1.Main} />
      <footer class="app-footer">Footer1</footer>
    </div>`));
        }
    };
});

const __exp = __instantiate("app");
export const preact = __exp["preact"];
export const App = __exp["App"];
