(function() {
    let e = document.createElement(`link`).relList;
    if (e && e.supports && e.supports(`modulepreload`))
        return;
    for (let e of document.querySelectorAll(`link[rel="modulepreload"]`))
        n(e);
    new MutationObserver(e => {
        for (let t of e)
            if (t.type === `childList`)
                for (let e of t.addedNodes)
                    e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(e) {
        let t = {};
        return e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        e.crossOrigin === `use-credentials` ? t.credentials = `include` : e.crossOrigin === `anonymous` ? t.credentials = `omit` : t.credentials = `same-origin`,
        t
    }
    function n(e) {
        if (e.ep)
            return;
        e.ep = !0;
        let n = t(e);
        fetch(e.href, n)
    }
}
)();
function e(e) {
    let t = Object.create(null);
    for (let n of e.split(`,`))
        t[n] = 1;
    return e => e in t
}
var t = {}, n = [], r = () => {}
, i = () => !1, a = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), o = e => e.startsWith(`onUpdate:`), s = Object.assign, c = (e, t) => {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = e => x(e) === `[object Map]`, p = e => x(e) === `[object Set]`, m = e => x(e) === `[object Date]`, h = e => typeof e == `function`, g = e => typeof e == `string`, _ = e => typeof e == `symbol`, v = e => typeof e == `object` && !!e, y = e => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = e => b.call(e), S = e => x(e).slice(8, -1), C = e => x(e) === `[object Object]`, w = e => g(e) && e !== `NaN` && e[0] !== `-` && `` + parseInt(e, 10) === e, T = e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`), E = e => {
    let t = Object.create(null);
    return (n => t[n] || (t[n] = e(n)))
}
, D = /-\w/g, O = E(e => e.replace(D, e => e.slice(1).toUpperCase())), k = /\B([A-Z])/g, A = E(e => e.replace(k, `-$1`).toLowerCase()), j = E(e => e.charAt(0).toUpperCase() + e.slice(1)), M = E(e => e ? `on${j(e)}` : ``), N = (e, t) => !Object.is(e, t), P = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
, ee = (e, t, n, r=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: r,
        value: n
    })
}
, te = e => {
    let t = parseFloat(e);
    return isNaN(t) ? e : t
}
, ne = e => {
    let t = g(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
, re, ie = () => re ||= typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : typeof window < `u` ? window : typeof global < `u` ? global : {};
function F(e) {
    if (d(e)) {
        let t = {};
        for (let n = 0; n < e.length; n++) {
            let r = e[n]
              , i = g(r) ? ce(r) : F(r);
            if (i)
                for (let e in i)
                    t[e] = i[e]
        }
        return t
    } else if (g(e) || v(e))
        return e
}
var ae = /;(?![^(]*\))/g
  , oe = /:([^]+)/
  , se = /\/\*[^]*?\*\//g;
function ce(e) {
    let t = {};
    return e.replace(se, ``).split(ae).forEach(e => {
        if (e) {
            let n = e.split(oe);
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
    }
    ),
    t
}
function I(e) {
    let t = ``;
    if (g(e))
        t = e;
    else if (d(e))
        for (let n = 0; n < e.length; n++) {
            let r = I(e[n]);
            r && (t += r + ` `)
        }
    else if (v(e))
        for (let n in e)
            e[n] && (t += n + ` `);
    return t.trim()
}
var le = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`
  , ue = e(le);
le + ``;
function de(e) {
    return !!e || e === ``
}
function fe(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++)
        n = pe(e[r], t[r]);
    return n
}
function L(e, t) {
    if (e.size !== t.size)
        return !1;
    let n = Array.from(t)
      , r = new Uint8Array(n.length);
    for (let t of e) {
        let e = -1;
        for (let i = 0; i < n.length; i++)
            if (!r[i] && pe(t, n[i])) {
                e = i;
                break
            }
        if (e < 0)
            return !1;
        r[e] = 1
    }
    return !0
}
function pe(e, t) {
    if (e === t)
        return !0;
    let n = m(e)
      , r = m(t);
    if (n || r)
        return n && r ? e.getTime() === t.getTime() : !1;
    if (n = _(e),
    r = _(t),
    n || r)
        return e === t;
    if (n = d(e),
    r = d(t),
    n || r)
        return n && r ? fe(e, t) : !1;
    if (n = v(e),
    r = v(t),
    n || r) {
        if (!n || !r)
            return !1;
        if (n = f(e),
        r = f(t),
        n || r || (n = p(e),
        r = p(t),
        n || r))
            return n && r ? L(e, t) : !1;
        if (Object.keys(e).length !== Object.keys(t).length)
            return !1;
        for (let n in e) {
            let r = e.hasOwnProperty(n)
              , i = t.hasOwnProperty(n);
            if (r && !i || !r && i || !pe(e[n], t[n]))
                return !1
        }
    }
    return String(e) === String(t)
}
var me = e => !!(e && e.__v_isRef === !0), R = e => g(e) ? e : e == null ? `` : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? me(e) ? R(e.value) : JSON.stringify(e, he, 2) : String(e), he = (e, t) => me(t) ? he(e, t.value) : f(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (e, [t,n], r) => (e[ge(t, r) + ` =>`] = n,
    e), {})
} : p(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(e => ge(e))
} : _(t) ? ge(t) : v(t) && !d(t) && !C(t) ? String(t) : t, ge = (e, t=``) => _(e) ? `Symbol(${e.description ?? t})` : e, _e, ve = class {
    constructor(e=!1) {
        this.detached = e,
        this._active = !0,
        this._on = 0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this._warnOnRun = !0,
        this.__v_skip = !0,
        !e && _e && (_e.active ? (this.parent = _e,
        this.index = (_e.scopes ||= []).push(this) - 1) : (this._active = !1,
        this._warnOnRun = !1))
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let e, t;
            if (this.scopes) {
                let n = this.scopes.slice();
                for (e = 0,
                t = n.length; e < t; e++)
                    n[e].pause()
            }
            for (e = 0,
            t = this.effects.length; e < t; e++)
                this.effects[e].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let e, t;
            if (this.scopes) {
                let n = this.scopes.slice();
                for (e = 0,
                t = n.length; e < t; e++)
                    n[e].resume()
            }
            let n = this.effects.slice();
            for (e = 0,
            t = n.length; e < t; e++)
                n[e].resume()
        }
    }
    run(e) {
        if (this._active) {
            let t = _e;
            try {
                return _e = this,
                e()
            } finally {
                _e = t
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = _e,
        _e = this)
    }
    off() {
        if (this._on > 0 && --this._on === 0) {
            if (_e === this)
                _e = this.prevScope;
            else {
                let e = _e;
                for (; e; ) {
                    if (e.prevScope === this) {
                        e.prevScope = this.prevScope;
                        break
                    }
                    e = e.prevScope
                }
            }
            this.prevScope = void 0
        }
    }
    stop(e) {
        if (this._active) {
            this._active = !1;
            let t, n;
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].stop();
            for (this.effects.length = 0,
            t = 0,
            n = this.cleanups.length; t < n; t++)
                this.cleanups[t]();
            if (this.cleanups.length = 0,
            this.scopes) {
                let e = this.scopes.slice();
                for (t = 0,
                n = e.length; t < n; t++)
                    e[t].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !e) {
                let e = this.parent.scopes.pop();
                e && e !== this && (this.parent.scopes[this.index] = e,
                e.index = this.index)
            }
            this.parent = void 0
        }
    }
}
;
function ye(e) {
    return new ve(e)
}
function be() {
    return _e
}
function z(e, t=!1) {
    _e && _e.cleanups.push(e)
}
var xe, Se = new WeakSet, Ce = class {
    constructor(e) {
        this.fn = e,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        _e && (_e.active ? _e.effects.push(this) : this.flags &= -2)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        Se.has(this) && (Se.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || De(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        Be(this),
        Ae(this);
        let e = xe
          , t = Ie;
        xe = this,
        Ie = !0;
        try {
            return this.fn()
        } finally {
            je(this),
            xe = e,
            Ie = t,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let e = this.deps; e; e = e.nextDep)
                Pe(e);
            this.deps = this.depsTail = void 0,
            Be(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? Se.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Me(this) && this.run()
    }
    get dirty() {
        return Me(this)
    }
}
, we = 0, Te, Ee;
function De(e, t=!1) {
    if (e.flags |= 8,
    t) {
        e.next = Ee,
        Ee = e;
        return
    }
    e.next = Te,
    Te = e
}
function Oe() {
    we++
}
function ke() {
    if (--we > 0)
        return;
    if (Ee) {
        let e = Ee;
        for (Ee = void 0; e; ) {
            let t = e.next;
            e.next = void 0,
            e.flags &= -9,
            e = t
        }
    }
    let e;
    for (; Te; ) {
        let t = Te;
        for (Te = void 0; t; ) {
            let n = t.next;
            if (t.next = void 0,
            t.flags &= -9,
            t.flags & 1)
                try {
                    t.trigger()
                } catch (t) {
                    e ||= t
                }
            t = n
        }
    }
    if (e)
        throw e
}
function Ae(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
        t.prevActiveLink = t.dep.activeLink,
        t.dep.activeLink = t
}
function je(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
        let e = r.prevDep;
        r.version === -1 ? (r === n && (n = e),
        Pe(r),
        Fe(r)) : t = r,
        r.dep.activeLink = r.prevActiveLink,
        r.prevActiveLink = void 0,
        r = e
    }
    e.deps = t,
    e.depsTail = n
}
function Me(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (Ne(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function Ne(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
    e.globalVersion === Ve) || (e.globalVersion = Ve,
    !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Me(e))))
        return;
    e.flags |= 2;
    let t = e.dep
      , n = xe
      , r = Ie;
    xe = e,
    Ie = !0;
    try {
        Ae(e);
        let n = e.fn(e._value);
        (t.version === 0 || N(n, e._value)) && (e.flags |= 128,
        e._value = n,
        t.version++)
    } catch (e) {
        throw t.version++,
        e
    } finally {
        xe = n,
        Ie = r,
        je(e),
        e.flags &= -3
    }
}
function Pe(e, t=!1) {
    let {dep: n, prevSub: r, nextSub: i} = e;
    if (r && (r.nextSub = i,
    e.prevSub = void 0),
    i && (i.prevSub = r,
    e.nextSub = void 0),
    n.subs === e && (n.subs = r,
    !r && n.computed)) {
        n.computed.flags &= -5;
        for (let e = n.computed.deps; e; e = e.nextDep)
            Pe(e, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Fe(e) {
    let {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n,
    e.prevDep = void 0),
    n && (n.prevDep = t,
    e.nextDep = void 0)
}
var Ie = !0
  , Le = [];
function Re() {
    Le.push(Ie),
    Ie = !1
}
function ze() {
    let e = Le.pop();
    Ie = e === void 0 ? !0 : e
}
function Be(e) {
    let {cleanup: t} = e;
    if (e.cleanup = void 0,
    t) {
        let e = xe;
        xe = void 0;
        try {
            t()
        } finally {
            xe = e
        }
    }
}
var Ve = 0
  , He = class {
    constructor(e, t) {
        this.sub = e,
        this.dep = t,
        this.version = t.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
  , Ue = class {
    constructor(e) {
        this.computed = e,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0,
        this.__v_skip = !0
    }
    track(e) {
        if (!xe || !Ie || xe === this.computed)
            return;
        let t = this.activeLink;
        if (t === void 0 || t.sub !== xe)
            t = this.activeLink = new He(xe,this),
            xe.deps ? (t.prevDep = xe.depsTail,
            xe.depsTail.nextDep = t,
            xe.depsTail = t) : xe.deps = xe.depsTail = t,
            We(t);
        else if (t.version === -1 && (t.version = this.version,
        t.nextDep)) {
            let e = t.nextDep;
            e.prevDep = t.prevDep,
            t.prevDep && (t.prevDep.nextDep = e),
            t.prevDep = xe.depsTail,
            t.nextDep = void 0,
            xe.depsTail.nextDep = t,
            xe.depsTail = t,
            xe.deps === t && (xe.deps = e)
        }
        return t
    }
    trigger(e) {
        this.version++,
        Ve++,
        this.notify(e)
    }
    notify(e) {
        Oe();
        try {
            for (let e = this.subs; e; e = e.prevSub)
                e.sub.notify() && e.sub.dep.notify()
        } finally {
            ke()
        }
    }
}
;
function We(e) {
    if (e.dep.sc++,
    e.sub.flags & 4) {
        let t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let e = t.deps; e; e = e.nextDep)
                We(e)
        }
        let n = e.dep.subs;
        n !== e && (e.prevSub = n,
        n && (n.nextSub = e)),
        e.dep.subs = e
    }
}
var Ge = new WeakMap
  , Ke = Symbol(``)
  , qe = Symbol(``)
  , Je = Symbol(``);
function Ye(e, t, n) {
    if (Ie && xe) {
        let t = Ge.get(e);
        t || Ge.set(e, t = new Map);
        let r = t.get(n);
        r || (t.set(n, r = new Ue),
        r.map = t,
        r.key = n),
        r.track()
    }
}
function Xe(e, t, n, r, i, a) {
    let o = Ge.get(e);
    if (!o) {
        Ve++;
        return
    }
    let s = e => {
        e && e.trigger()
    }
    ;
    if (Oe(),
    t === `clear`)
        o.forEach(s);
    else {
        let i = d(e)
          , a = i && w(n);
        if (i && n === `length`) {
            let e = Number(r);
            o.forEach( (t, n) => {
                (n === `length` || n === Je || !_(n) && n >= e) && s(t)
            }
            )
        } else
            switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)),
            a && s(o.get(Je)),
            t) {
            case `add`:
                i ? a && s(o.get(`length`)) : (s(o.get(Ke)),
                f(e) && s(o.get(qe)));
                break;
            case `delete`:
                i || (s(o.get(Ke)),
                f(e) && s(o.get(qe)));
                break;
            case `set`:
                f(e) && s(o.get(Ke));
                break
            }
    }
    ke()
}
function Ze(e, t) {
    let n = Ge.get(e);
    return n && n.get(t)
}
function Qe(e) {
    let t = zt(e);
    return t === e ? t : (Ye(t, `iterate`, Je),
    Lt(e) ? t : t.map(Vt))
}
function $e(e) {
    return Ye(e = zt(e), `iterate`, Je),
    e
}
function et(e, t) {
    return It(e) ? Ht(Ft(e) ? Vt(t) : t) : Vt(t)
}
var tt = {
    __proto__: null,
    [Symbol.iterator]() {
        return nt(this, Symbol.iterator, e => et(this, e))
    },
    concat(...e) {
        return Qe(this).concat(...e.map(e => d(e) ? Qe(e) : e))
    },
    entries() {
        return nt(this, `entries`, e => (e[1] = et(this, e[1]),
        e))
    },
    every(e, t) {
        return it(this, `every`, e, t, void 0, arguments)
    },
    filter(e, t) {
        return it(this, `filter`, e, t, e => e.map(e => et(this, e)), arguments)
    },
    find(e, t) {
        return it(this, `find`, e, t, e => et(this, e), arguments)
    },
    findIndex(e, t) {
        return it(this, `findIndex`, e, t, void 0, arguments)
    },
    findLast(e, t) {
        return it(this, `findLast`, e, t, e => et(this, e), arguments)
    },
    findLastIndex(e, t) {
        return it(this, `findLastIndex`, e, t, void 0, arguments)
    },
    forEach(e, t) {
        return it(this, `forEach`, e, t, void 0, arguments)
    },
    includes(...e) {
        return ot(this, `includes`, e)
    },
    indexOf(...e) {
        return ot(this, `indexOf`, e)
    },
    join(e) {
        return Qe(this).join(e)
    },
    lastIndexOf(...e) {
        return ot(this, `lastIndexOf`, e)
    },
    map(e, t) {
        return it(this, `map`, e, t, void 0, arguments)
    },
    pop() {
        return st(this, `pop`)
    },
    push(...e) {
        return st(this, `push`, e)
    },
    reduce(e, ...t) {
        return at(this, `reduce`, e, t)
    },
    reduceRight(e, ...t) {
        return at(this, `reduceRight`, e, t)
    },
    shift() {
        return st(this, `shift`)
    },
    some(e, t) {
        return it(this, `some`, e, t, void 0, arguments)
    },
    splice(...e) {
        return st(this, `splice`, e)
    },
    toReversed() {
        return Qe(this).toReversed()
    },
    toSorted(e) {
        return Qe(this).toSorted(e)
    },
    toSpliced(...e) {
        return Qe(this).toSpliced(...e)
    },
    unshift(...e) {
        return st(this, `unshift`, e)
    },
    values() {
        return nt(this, `values`, e => et(this, e))
    }
};
function nt(e, t, n) {
    let r = $e(e)
      , i = r[t]();
    return r !== e && !Lt(e) && (i._next = i.next,
    i.next = () => {
        let e = i._next();
        return e.done || (e.value = n(e.value)),
        e
    }
    ),
    i
}
var rt = Array.prototype;
function it(e, t, n, r, i, a) {
    let o = $e(e)
      , s = o !== e && !Lt(e)
      , c = o[t];
    if (c !== rt[t]) {
        let t = c.apply(e, a);
        return s ? Vt(t) : t
    }
    let l = n;
    o !== e && (s ? l = function(t, r) {
        return n.call(this, et(e, t), r, e)
    }
    : n.length > 2 && (l = function(t, r) {
        return n.call(this, t, r, e)
    }
    ));
    let u = c.call(o, l, r);
    return s && i ? i(u) : u
}
function at(e, t, n, r) {
    let i = $e(e)
      , a = i !== e && !Lt(e)
      , o = n
      , s = !1;
    i !== e && (a ? (s = r.length === 0,
    o = function(t, r, i) {
        return s && (s = !1,
        t = et(e, t)),
        n.call(this, t, et(e, r), i, e)
    }
    ) : n.length > 3 && (o = function(t, r, i) {
        return n.call(this, t, r, i, e)
    }
    ));
    let c = i[t](o, ...r);
    return s ? et(e, c) : c
}
function ot(e, t, n) {
    let r = zt(e);
    Ye(r, `iterate`, Je);
    let i = r[t](...n);
    return (i === -1 || i === !1) && Rt(n[0]) ? (n[0] = zt(n[0]),
    r[t](...n)) : i
}
function st(e, t, n=[]) {
    Re(),
    Oe();
    let r = zt(e)[t].apply(e, n);
    return ke(),
    ze(),
    r
}
var ct = e(`__proto__,__v_isRef,__isVue`)
  , lt = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== `arguments` && e !== `caller`).map(e => Symbol[e]).filter(_));
function ut(e) {
    _(e) || (e = String(e));
    let t = zt(this);
    return Ye(t, `has`, e),
    t.hasOwnProperty(e)
}
var dt = class {
    constructor(e=!1, t=!1) {
        this._isReadonly = e,
        this._isShallow = t
    }
    get(e, t, n) {
        if (t === `__v_skip`)
            return e.__v_skip;
        let r = this._isReadonly
          , i = this._isShallow;
        if (t === `__v_isReactive`)
            return !r;
        if (t === `__v_isReadonly`)
            return r;
        if (t === `__v_isShallow`)
            return i;
        if (t === `__v_raw`)
            return n === (r ? i ? kt : Ot : i ? Dt : Et).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
        let a = d(e);
        if (!r) {
            let e;
            if (a && (e = tt[t]))
                return e;
            if (t === `hasOwnProperty`)
                return ut
        }
        let o = Reflect.get(e, t, Ut(e) ? e : n);
        if ((_(t) ? lt.has(t) : ct(t)) || (r || Ye(e, `get`, t),
        i))
            return o;
        if (Ut(o)) {
            let e = a && w(t) ? o : o.value;
            return r && v(e) ? Nt(e) : e
        }
        return v(o) ? r ? Nt(o) : jt(o) : o
    }
}
  , ft = class extends dt {
    constructor(e=!1) {
        super(!1, e)
    }
    set(e, t, n, r) {
        let i = e[t]
          , a = d(e) && w(t);
        if (!this._isShallow) {
            let e = It(i);
            if (!Lt(n) && !It(n) && (i = zt(i),
            n = zt(n)),
            !a && Ut(i) && !Ut(n))
                return e || (i.value = n),
                !0
        }
        let o = a ? Number(t) < e.length : u(e, t)
          , s = Reflect.set(e, t, n, Ut(e) ? e : r);
        return e === zt(r) && s && (o ? N(n, i) && Xe(e, `set`, t, n, i) : Xe(e, `add`, t, n)),
        s
    }
    deleteProperty(e, t) {
        let n = u(e, t)
          , r = e[t]
          , i = Reflect.deleteProperty(e, t);
        return i && n && Xe(e, `delete`, t, void 0, r),
        i
    }
    has(e, t) {
        let n = Reflect.has(e, t);
        return (!_(t) || !lt.has(t)) && Ye(e, `has`, t),
        n
    }
    ownKeys(e) {
        return Ye(e, `iterate`, d(e) ? `length` : Ke),
        Reflect.ownKeys(e)
    }
}
  , pt = class extends dt {
    constructor(e=!1) {
        super(!0, e)
    }
    set(e, t) {
        return !0
    }
    deleteProperty(e, t) {
        return !0
    }
}
  , mt = new ft
  , ht = new pt
  , gt = new ft(!0)
  , _t = e => e
  , vt = e => Reflect.getPrototypeOf(e);
function yt(e, t, n) {
    return function(...r) {
        let i = this.__v_raw
          , a = zt(i)
          , o = f(a)
          , c = e === `entries` || e === Symbol.iterator && o
          , l = e === `keys` && o
          , u = i[e](...r)
          , d = n ? _t : t ? Ht : Vt;
        return !t && Ye(a, `iterate`, l ? qe : Ke),
        s(Object.create(u), {
            next() {
                let {value: e, done: t} = u.next();
                return t ? {
                    value: e,
                    done: t
                } : {
                    value: c ? [d(e[0]), d(e[1])] : d(e),
                    done: t
                }
            }
        })
    }
}
function bt(e) {
    return function(...t) {
        return e === `delete` ? !1 : e === `clear` ? void 0 : this
    }
}
function xt(e, t) {
    let n = {
        get(n) {
            let r = this.__v_raw
              , i = zt(r)
              , a = zt(n);
            e || (N(n, a) && Ye(i, `get`, n),
            Ye(i, `get`, a));
            let {has: o} = vt(i)
              , s = t ? _t : e ? Ht : Vt;
            if (o.call(i, n))
                return s(r.get(n));
            if (o.call(i, a))
                return s(r.get(a));
            r !== i && r.get(n)
        },
        get size() {
            let t = this.__v_raw;
            return !e && Ye(zt(t), `iterate`, Ke),
            t.size
        },
        has(t) {
            let n = this.__v_raw
              , r = zt(n)
              , i = zt(t);
            return e || (N(t, i) && Ye(r, `has`, t),
            Ye(r, `has`, i)),
            t === i ? n.has(t) : n.has(t) || n.has(i)
        },
        forEach(n, r) {
            let i = this
              , a = i.__v_raw
              , o = zt(a)
              , s = t ? _t : e ? Ht : Vt;
            return !e && Ye(o, `iterate`, Ke),
            a.forEach( (e, t) => n.call(r, s(e), s(t), i))
        }
    };
    return s(n, e ? {
        add: bt(`add`),
        set: bt(`set`),
        delete: bt(`delete`),
        clear: bt(`clear`)
    } : {
        add(e) {
            let n = zt(this)
              , r = vt(n)
              , i = zt(e)
              , a = !t && !Lt(e) && !It(e) ? i : e;
            return r.has.call(n, a) || N(e, a) && r.has.call(n, e) || N(i, a) && r.has.call(n, i) || (n.add(a),
            Xe(n, `add`, a, a)),
            this
        },
        set(e, n) {
            !t && !Lt(n) && !It(n) && (n = zt(n));
            let r = zt(this)
              , {has: i, get: a} = vt(r)
              , o = i.call(r, e);
            o ||= (e = zt(e),
            i.call(r, e));
            let s = a.call(r, e);
            return r.set(e, n),
            o ? N(n, s) && Xe(r, `set`, e, n, s) : Xe(r, `add`, e, n),
            this
        },
        delete(e) {
            let t = zt(this)
              , {has: n, get: r} = vt(t)
              , i = n.call(t, e);
            i ||= (e = zt(e),
            n.call(t, e));
            let a = r ? r.call(t, e) : void 0
              , o = t.delete(e);
            return i && Xe(t, `delete`, e, void 0, a),
            o
        },
        clear() {
            let e = zt(this)
              , t = e.size !== 0
              , n = e.clear();
            return t && Xe(e, `clear`, void 0, void 0, void 0),
            n
        }
    }),
    [`keys`, `values`, `entries`, Symbol.iterator].forEach(r => {
        n[r] = yt(r, e, t)
    }
    ),
    n
}
function St(e, t) {
    let n = xt(e, t);
    return (t, r, i) => r === `__v_isReactive` ? !e : r === `__v_isReadonly` ? e : r === `__v_raw` ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i)
}
var Ct = {
    get: St(!1, !1)
}
  , wt = {
    get: St(!1, !0)
}
  , Tt = {
    get: St(!0, !1)
}
  , Et = new WeakMap
  , Dt = new WeakMap
  , Ot = new WeakMap
  , kt = new WeakMap;
function At(e) {
    switch (e) {
    case `Object`:
    case `Array`:
        return 1;
    case `Map`:
    case `Set`:
    case `WeakMap`:
    case `WeakSet`:
        return 2;
    default:
        return 0
    }
}
function jt(e) {
    return It(e) ? e : Pt(e, !1, mt, Ct, Et)
}
function Mt(e) {
    return Pt(e, !1, gt, wt, Dt)
}
function Nt(e) {
    return Pt(e, !0, ht, Tt, Ot)
}
function Pt(e, t, n, r, i) {
    if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
        return e;
    let a = i.get(e);
    if (a)
        return a;
    let o = At(S(e));
    if (o === 0)
        return e;
    let s = new Proxy(e,o === 2 ? r : n);
    return i.set(e, s),
    s
}
function Ft(e) {
    return It(e) ? Ft(e.__v_raw) : !!(e && e.__v_isReactive)
}
function It(e) {
    return !!(e && e.__v_isReadonly)
}
function Lt(e) {
    return !!(e && e.__v_isShallow)
}
function Rt(e) {
    return e ? !!e.__v_raw : !1
}
function zt(e) {
    let t = e && e.__v_raw;
    return t ? zt(t) : e
}
function Bt(e) {
    return !u(e, `__v_skip`) && Object.isExtensible(e) && ee(e, `__v_skip`, !0),
    e
}
var Vt = e => v(e) ? jt(e) : e
  , Ht = e => v(e) ? Nt(e) : e;
function Ut(e) {
    return e ? e.__v_isRef === !0 : !1
}
function Wt(e) {
    return Kt(e, !1)
}
function Gt(e) {
    return Kt(e, !0)
}
function Kt(e, t) {
    return Ut(e) ? e : new qt(e,t)
}
var qt = class {
    constructor(e, t) {
        this.dep = new Ue,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = t ? e : zt(e),
        this._value = t ? e : Vt(e),
        this.__v_isShallow = t
    }
    get value() {
        return this.dep.track(),
        this._value
    }
    set value(e) {
        let t = this._rawValue
          , n = this.__v_isShallow || Lt(e) || It(e);
        e = n ? e : zt(e),
        N(e, t) && (this._rawValue = e,
        this._value = n ? e : Vt(e),
        this.dep.trigger())
    }
}
;
function Jt(e) {
    return Ut(e) ? e.value : e
}
var Yt = {
    get: (e, t, n) => t === `__v_raw` ? e : Jt(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        let i = e[t];
        return Ut(i) && !Ut(n) ? (i.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function Xt(e) {
    return Ft(e) ? e : new Proxy(e,Yt)
}
function Zt(e) {
    let t = d(e) ? Array(e.length) : {};
    for (let n in e)
        t[n] = $t(e, n);
    return t
}
var Qt = class {
    constructor(e, t, n) {
        this._object = e,
        this._defaultValue = n,
        this.__v_isRef = !0,
        this._value = void 0,
        this._key = _(t) ? t : String(t),
        this._raw = zt(e);
        let r = !0
          , i = e;
        if (!d(e) || _(this._key) || !w(this._key))
            do
                r = !Rt(i) || Lt(i);
            while (r && (i = i.__v_raw));
        this._shallow = r
    }
    get value() {
        let e = this._object[this._key];
        return this._shallow && (e = Jt(e)),
        this._value = e === void 0 ? this._defaultValue : e
    }
    set value(e) {
        if (this._shallow && Ut(this._raw[this._key])) {
            let t = this._object[this._key];
            if (Ut(t)) {
                t.value = e;
                return
            }
        }
        this._object[this._key] = e
    }
    get dep() {
        return Ze(this._raw, this._key)
    }
}
;
function $t(e, t, n) {
    return new Qt(e,t,n)
}
var en = class {
    constructor(e, t, n) {
        this.fn = e,
        this.setter = t,
        this._value = void 0,
        this.dep = new Ue(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = Ve - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !t,
        this.isSSR = n
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && xe !== this)
            return De(this, !0),
            !0
    }
    get value() {
        let e = this.dep.track();
        return Ne(this),
        e && (e.version = this.dep.version),
        this._value
    }
    set value(e) {
        this.setter && this.setter(e)
    }
}
;
function tn(e, t, n=!1) {
    let r, i;
    return h(e) ? r = e : (r = e.get,
    i = e.set),
    new en(r,i,n)
}
var nn = {}
  , rn = new WeakMap
  , an = void 0;
function on(e, t=!1, n=an) {
    if (n) {
        let t = rn.get(n);
        t || rn.set(n, t = []),
        t.push(e)
    }
}
function sn(e, n, i=t) {
    let {immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f} = i, p = e => o ? e : Lt(e) || o === !1 || o === 0 ? cn(e, 1) : cn(e), m, g, _, v, y = !1, b = !1;
    if (Ut(e) ? (g = () => e.value,
    y = Lt(e)) : Ft(e) ? (g = () => p(e),
    y = !0) : d(e) ? (b = !0,
    y = e.some(e => Ft(e) || Lt(e)),
    g = () => e.map(e => {
        if (Ut(e))
            return e.value;
        if (Ft(e))
            return p(e);
        if (h(e))
            return f ? f(e, 2) : e()
    }
    )) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
        if (_) {
            Re();
            try {
                _()
            } finally {
                ze()
            }
        }
        let t = an;
        an = m;
        try {
            return f ? f(e, 3, [v]) : e(v)
        } finally {
            an = t
        }
    }
    : r,
    n && o) {
        let e = g
          , t = o === !0 ? 1 / 0 : o;
        g = () => cn(e(), t)
    }
    let x = be()
      , S = () => {
        m.stop(),
        x && x.active && c(x.effects, m)
    }
    ;
    if (s && n) {
        let e = n;
        n = (...t) => {
            let n = e(...t);
            return S(),
            n
        }
    }
    let C = b ? Array(e.length).fill(nn) : nn
      , w = e => {
        if (!(!(m.flags & 1) || !m.dirty && !e))
            if (n) {
                let t = m.run();
                if (e || o || y || (b ? t.some( (e, t) => N(e, C[t])) : N(t, C))) {
                    _ && _();
                    let e = an;
                    an = m;
                    try {
                        let e = [t, C === nn ? void 0 : b && C[0] === nn ? [] : C, v];
                        C = t,
                        f ? f(n, 3, e) : n(...e)
                    } finally {
                        an = e
                    }
                }
            } else
                m.run()
    }
    ;
    return u && u(w),
    m = new Ce(g),
    m.scheduler = l ? () => l(w, !1) : w,
    v = e => on(e, !1, m),
    _ = m.onStop = () => {
        let e = rn.get(m);
        if (e) {
            if (f)
                f(e, 4);
            else
                for (let t of e)
                    t();
            rn.delete(m)
        }
    }
    ,
    n ? a ? w(!0) : C = m.run() : l ? l(w.bind(null, !0), !0) : m.run(),
    S.pause = m.pause.bind(m),
    S.resume = m.resume.bind(m),
    S.stop = S,
    S
}
function cn(e, t=1 / 0, n) {
    if (t <= 0 || !v(e) || e.__v_skip || (n ||= new Map,
    (n.get(e) || 0) >= t))
        return e;
    if (n.set(e, t),
    t--,
    Ut(e))
        cn(e.value, t, n);
    else if (d(e))
        for (let r = 0; r < e.length; r++)
            cn(e[r], t, n);
    else if (p(e) || f(e))
        e.forEach(e => {
            cn(e, t, n)
        }
        );
    else if (C(e)) {
        for (let r in e)
            cn(e[r], t, n);
        for (let r of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, r) && cn(e[r], t, n)
    }
    return e
}
function ln(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (e) {
        dn(e, t, n)
    }
}
function un(e, t, n, r) {
    if (h(e)) {
        let i = ln(e, t, n, r);
        return i && y(i) && i.catch(e => {
            dn(e, t, n)
        }
        ),
        i
    }
    if (d(e)) {
        let i = [];
        for (let a = 0; a < e.length; a++)
            i.push(un(e[a], t, n, r));
        return i
    }
}
function dn(e, n, r, i=!0) {
    let a = n ? n.vnode : null
      , {errorHandler: o, throwUnhandledErrorInProduction: s} = n && n.appContext.config || t;
    if (n) {
        let t = n.parent
          , i = n.proxy
          , a = `https://vuejs.org/error-reference/#runtime-${r}`;
        for (; t; ) {
            let n = t.ec;
            if (n) {
                for (let t = 0; t < n.length; t++)
                    if (n[t](e, i, a) === !1)
                        return
            }
            t = t.parent
        }
        if (o) {
            Re(),
            ln(o, null, 10, [e, i, a]),
            ze();
            return
        }
    }
    fn(e, r, a, i, s)
}
function fn(e, t, n, r=!0, i=!1) {
    if (i)
        throw e;
    console.error(e)
}
var pn = []
  , mn = -1
  , hn = []
  , gn = null
  , _n = 0
  , vn = Promise.resolve()
  , yn = null;
function bn(e) {
    let t = yn || vn;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function xn(e) {
    let t = mn + 1
      , n = pn.length;
    for (; t < n; ) {
        let r = t + n >>> 1
          , i = pn[r]
          , a = Dn(i);
        a < e || a === e && i.flags & 2 ? t = r + 1 : n = r
    }
    return t
}
function Sn(e) {
    if (!(e.flags & 1)) {
        let t = Dn(e)
          , n = pn[pn.length - 1];
        !n || !(e.flags & 2) && t >= Dn(n) ? pn.push(e) : pn.splice(xn(t), 0, e),
        e.flags |= 1,
        Cn()
    }
}
function Cn() {
    yn ||= vn.then(On)
}
function wn(e) {
    if (!d(e))
        gn && e.id === -1 ? gn.splice(_n + 1, 0, e) : e.flags & 1 || (hn.push(e),
        e.flags |= 1);
    else
        for (let t = 0; t < e.length; t++)
            hn.push(e[t]);
    Cn()
}
function Tn(e, t, n=mn + 1) {
    for (; n < pn.length; n++) {
        let t = pn[n];
        if (t && t.flags & 2) {
            if (e && t.id !== e.uid)
                continue;
            pn.splice(n, 1),
            n--,
            t.flags & 4 && (t.flags &= -2),
            t(),
            t.flags & 4 || (t.flags &= -2)
        }
    }
}
function En(e) {
    if (hn.length) {
        let e = [...new Set(hn)].sort( (e, t) => Dn(e) - Dn(t));
        if (hn.length = 0,
        gn) {
            for (let t = 0; t < e.length; t++)
                gn.push(e[t]);
            return
        }
        for (gn = e,
        _n = 0; _n < gn.length; _n++) {
            let e = gn[_n];
            e.flags & 4 && (e.flags &= -2),
            e.flags & 8 || e(),
            e.flags &= -2
        }
        gn = null,
        _n = 0
    }
}
var Dn = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function On(e) {
    try {
        for (mn = 0; mn < pn.length; mn++) {
            let e = pn[mn];
            e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2),
            ln(e, e.i, e.i ? 15 : 14),
            e.flags & 4 || (e.flags &= -2))
        }
    } finally {
        for (; mn < pn.length; mn++) {
            let e = pn[mn];
            e && (e.flags &= -2)
        }
        mn = -1,
        pn.length = 0,
        En(e),
        yn = null,
        (pn.length || hn.length) && On(e)
    }
}
var kn = null
  , An = null;
function jn(e) {
    let t = kn;
    return kn = e,
    An = e && e.type.__scopeId || null,
    t
}
function Mn(e, t=kn, n) {
    if (!t || e._n)
        return e;
    let r = (...n) => {
        r._d && _a(-1);
        let i = jn(t), a = pa.length, o;
        try {
            o = e(...n)
        } finally {
            for (let e = pa.length; e > a; e--)
                ha();
            jn(i),
            r._d && _a(1)
        }
        return o
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function B(e, n) {
    if (kn === null)
        return e;
    let r = eo(kn)
      , i = e.dirs ||= [];
    for (let e = 0; e < n.length; e++) {
        let[a,o,s,c=t] = n[e];
        a && (h(a) && (a = {
            mounted: a,
            updated: a
        }),
        a.deep && cn(o),
        i.push({
            dir: a,
            instance: r,
            value: o,
            oldValue: void 0,
            arg: s,
            modifiers: c
        }))
    }
    return e
}
function Nn(e, t, n, r) {
    let i = e.dirs
      , a = t && t.dirs;
    for (let o = 0; o < i.length; o++) {
        let s = i[o];
        a && (s.oldValue = a[o].value);
        let c = s.dir[r];
        c && (Re(),
        un(c, n, 8, [e.el, s, e, t]),
        ze())
    }
}
function Pn(e, t) {
    if (Ra) {
        let n = Ra.provides
          , r = Ra.parent && Ra.parent.provides;
        r === n && (n = Ra.provides = Object.create(r)),
        n[e] = t
    }
}
function Fn(e, t, n=!1) {
    let r = za();
    if (r || bi) {
        let i = bi ? bi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (i && e in i)
            return i[e];
        if (arguments.length > 1)
            return n && h(t) ? t.call(r && r.proxy) : t
    }
}
function In() {
    return !!(za() || bi)
}
var Ln = Symbol.for(`v-scx`)
  , Rn = () => Fn(Ln);
function zn(e, t, n) {
    return Bn(e, t, n)
}
function Bn(e, n, i=t) {
    let {immediate: a, deep: o, flush: c, once: l} = i, u = s({}, i), d = n && a || !n && c !== `post`, f;
    if (Ga) {
        if (c === `sync`) {
            let e = Rn();
            f = e.__watcherHandles ||= []
        } else if (!d) {
            let e = () => {}
            ;
            return e.stop = r,
            e.resume = r,
            e.pause = r,
            e
        }
    }
    let p = Ra;
    u.call = (e, t, n) => un(e, p, t, n);
    let m = !1;
    c === `post` ? u.scheduler = e => {
        Zi(e, p && p.suspense)
    }
    : c !== `sync` && (m = !0,
    u.scheduler = (e, t) => {
        t ? e() : Sn(e)
    }
    ),
    u.augmentJob = e => {
        n && (e.flags |= 4),
        m && (e.flags |= 2,
        p && (e.id = p.uid,
        e.i = p))
    }
    ;
    let h = sn(e, n, u);
    return Ga && (f ? f.push(h) : d && h()),
    h
}
function Vn(e, t, n) {
    let r = this.proxy, i = g(e) ? e.includes(`.`) ? Hn(r, e) : () => r[e] : e.bind(r, r), a;
    h(t) ? a = t : (a = t.handler,
    n = t);
    let o = Ha(this)
      , s = Bn(i, a.bind(r), n);
    return o(),
    s
}
function Hn(e, t) {
    let n = t.split(`.`);
    return () => {
        let t = e;
        for (let e = 0; e < n.length && t; e++)
            t = t[n[e]];
        return t
    }
}
var Un = new WeakMap
  , Wn = Symbol(`_vte`)
  , Gn = e => e.__isTeleport
  , Kn = e => e && (e.disabled || e.disabled === ``)
  , qn = e => e && (e.defer || e.defer === ``)
  , Jn = e => typeof SVGElement < `u` && e instanceof SVGElement
  , Yn = e => typeof MathMLElement == `function` && e instanceof MathMLElement
  , Xn = (e, t) => {
    let n = e && e.to;
    return g(n) ? t ? t(n) : null : n
}
  , Zn = {
    name: `Teleport`,
    __isTeleport: !0,
    process(e, t, n, r, i, a, o, s, c, l) {
        let {mc: u, pc: d, pbc: f, o: {insert: p, querySelector: m, createText: h, createComment: g, parentNode: _}} = l
          , v = Kn(t.props)
          , {dynamicChildren: y} = t
          , b = (e, t, n) => {
            e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c)
        }
          , x = (e=t) => {
            let n = Kn(e.props)
              , r = e.target = Xn(e.props, m)
              , a = nr(r, e, h, p);
            r && (o !== `svg` && Jn(r) ? o = `svg` : o !== `mathml` && Yn(r) && (o = `mathml`),
            i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = new Set)).add(r),
            n || (b(e, r, a),
            tr(e, !1)))
        }
          , S = e => {
            let t = () => {
                Un.get(e) === t && (Un.delete(e),
                Kn(e.props) && (b(e, _(e.el) || n, e.anchor),
                tr(e, !0)),
                x(e))
            }
            ;
            Un.set(e, t),
            Zi(t, a)
        }
        ;
        if (e == null) {
            let e = t.el = h(``)
              , i = t.anchor = h(``);
            if (p(e, n, r),
            p(i, n, r),
            qn(t.props) || a && a.pendingBranch) {
                S(t);
                return
            }
            v && (b(t, n, i),
            tr(t, !0)),
            x()
        } else {
            t.el = e.el;
            let r = t.anchor = e.anchor
              , u = Un.get(e);
            if (u) {
                u.flags |= 8,
                Un.delete(e),
                S(t);
                return
            }
            t.targetStart = e.targetStart;
            let p = t.target = e.target
              , h = t.targetAnchor = e.targetAnchor
              , g = Kn(e.props)
              , _ = g ? n : p
              , b = g ? r : h;
            if (o === `svg` || Jn(p) ? o = `svg` : (o === `mathml` || Yn(p)) && (o = `mathml`),
            y ? (f(e.dynamicChildren, y, _, i, a, o, s),
            ra(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1),
            v)
                g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Qn(t, n, r, l, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                let e = Xn(t.props, m);
                e && (t.target = e,
                Qn(t, e, null, l, 0))
            } else
                g && Qn(t, p, h, l, 1);
            tr(t, v)
        }
    },
    remove(e, t, n, {um: r, o: {remove: i}}, a) {
        let {shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f} = e
          , p = Kn(f)
          , m = a || !p
          , h = Un.get(e);
        if (h && (h.flags |= 8,
        Un.delete(e)),
        d && (i(l),
        i(u)),
        a && i(c),
        !h && (p || d) && o & 16)
            for (let e = 0; e < s.length; e++) {
                let i = s[e];
                r(i, t, n, m, !!i.dynamicChildren)
            }
    },
    move: Qn,
    hydrate: $n
};
function Qn(e, t, n, {o: {insert: r}, m: i}, a=2) {
    a === 0 && r(e.targetAnchor, t, n);
    let {el: o, anchor: s, shapeFlag: c, children: l, props: u} = e
      , d = a === 2;
    if (d && r(o, t, n),
    !Un.has(e) && (!d || Kn(u)) && c & 16)
        for (let e = 0; e < l.length; e++)
            i(l[e], t, n, 2);
    d && r(s, t, n)
}
function $n(e, t, n, r, i, a, {o: {nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u}}, d) {
    function f(e, n) {
        let r = n;
        for (; r; ) {
            if (r && r.nodeType === 8) {
                if (r.data === `teleport start anchor`)
                    t.targetStart = r;
                else if (r.data === `teleport anchor`) {
                    t.targetAnchor = r,
                    e._lpa = t.targetAnchor && o(t.targetAnchor);
                    break
                }
            }
            r = o(r)
        }
    }
    function p(e, t) {
        t.anchor = d(o(e), t, s(e), n, r, i, a)
    }
    let m = t.target = Xn(t.props, c)
      , h = Kn(t.props);
    if (m) {
        let c = m._lpa || m.firstChild;
        t.shapeFlag & 16 && (h ? (p(e, t),
        f(m, c),
        t.targetAnchor || nr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e),
        f(m, c),
        t.targetAnchor || nr(m, t, u, l),
        d(c && o(c), t, m, n, r, i, a))),
        tr(t, h)
    } else
        h && t.shapeFlag & 16 && (p(e, t),
        t.targetStart = e,
        t.targetAnchor = o(e));
    return t.anchor && o(t.anchor)
}
var er = Zn;
function tr(e, t) {
    let n = e.ctx;
    if (n && n.ut) {
        let r, i;
        for (t ? (r = e.el,
        i = e.anchor) : (r = e.targetStart,
        i = e.targetAnchor); r && r !== i; )
            r.nodeType === 1 && r.setAttribute(`data-v-owner`, n.uid),
            r = r.nextSibling;
        n.ut()
    }
}
function nr(e, t, n, r, i=null) {
    let a = t.targetStart = n(``)
      , o = t.targetAnchor = n(``);
    return a[Wn] = o,
    e && (r(a, e, i),
    r(o, e, i)),
    o
}
var rr = Symbol(`_leaveCb`)
  , ir = Symbol(`_enterCb`);
function ar() {
    let e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Nr( () => {
        e.isMounted = !0
    }
    ),
    Ir( () => {
        e.isUnmounting = !0
    }
    ),
    e
}
var or = [Function, Array]
  , sr = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: or,
    onEnter: or,
    onAfterEnter: or,
    onEnterCancelled: or,
    onBeforeLeave: or,
    onLeave: or,
    onAfterLeave: or,
    onLeaveCancelled: or,
    onBeforeAppear: or,
    onAppear: or,
    onAfterAppear: or,
    onAppearCancelled: or
}
  , cr = e => {
    let t = e.subTree;
    return t.component ? cr(t.component) : t
}
  , lr = {
    name: `BaseTransition`,
    props: sr,
    setup(e, {slots: t}) {
        let n = za()
          , r = ar();
        return () => {
            let i = t.default && _r(t.default(), !0)
              , a = i && i.length ? ur(i) : n.subTree ? ka() : void 0;
            if (!a)
                return;
            let o = zt(e)
              , {mode: s} = o;
            if (r.isLeaving)
                return mr(a);
            let c = hr(a);
            if (!c)
                return mr(a);
            let l = pr(c, o, r, n, e => l = e);
            c.type !== da && gr(c, l);
            let u = n.subTree && hr(n.subTree);
            if (u && u.type !== da && !xa(u, c) && cr(n).type !== da) {
                let e = pr(u, o, r, n);
                if (gr(u, e),
                s === `out-in` && c.type !== da)
                    return r.isLeaving = !0,
                    e.afterLeave = () => {
                        r.isLeaving = !1,
                        n.job.flags & 8 || n.update(),
                        delete e.afterLeave,
                        u = void 0
                    }
                    ,
                    mr(a);
                s === `in-out` && c.type !== da ? e.delayLeave = (e, t, n) => {
                    let i = fr(r, u);
                    i[String(u.key)] = u,
                    e[rr] = () => {
                        t(),
                        e[rr] = void 0,
                        delete l.delayedLeave,
                        u = void 0
                    }
                    ,
                    l.delayedLeave = () => {
                        n(),
                        delete l.delayedLeave,
                        u = void 0
                    }
                }
                : u = void 0
            } else
                u &&= void 0;
            return a
        }
    }
};
function ur(e) {
    let t = e[0];
    if (e.length > 1) {
        for (let n of e)
            if (n.type !== da) {
                t = n;
                break
            }
    }
    return t
}
var dr = lr;
function fr(e, t) {
    let {leavingVNodes: n} = e
      , r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function pr(e, t, n, r, i) {
    let {appear: a, mode: o, persisted: s=!1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: f, onBeforeLeave: p, onLeave: m, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: _, onAppear: v, onAfterAppear: y, onAppearCancelled: b} = t
      , x = String(e.key)
      , S = fr(n, e)
      , C = (e, t) => {
        e && un(e, r, 9, t)
    }
      , w = (e, t) => {
        let n = t[1];
        C(e, t),
        d(e) ? e.every(e => e.length <= 1) && n() : e.length <= 1 && n()
    }
      , T = {
        mode: o,
        persisted: s,
        beforeEnter(t) {
            let r = c;
            if (!n.isMounted)
                if (a)
                    r = _ || c;
                else
                    return;
            t[rr] && t[rr](!0);
            let i = S[x];
            i && xa(e, i) && i.el[rr] && i.el[rr](),
            C(r, [t])
        },
        enter(t) {
            if (S[x] === e)
                return;
            let r = l
              , i = u
              , o = f;
            if (!n.isMounted)
                if (a)
                    r = v || l,
                    i = y || u,
                    o = b || f;
                else
                    return;
            let s = !1;
            t[ir] = e => {
                s || (s = !0,
                C(e ? o : i, [t]),
                T.delayedLeave && T.delayedLeave(),
                t[ir] = void 0)
            }
            ;
            let c = t[ir].bind(null, !1);
            r ? w(r, [t, c]) : c()
        },
        leave(t, r) {
            let i = String(e.key);
            if (t[ir] && t[ir](!0),
            n.isUnmounting)
                return r();
            C(p, [t]);
            let a = !1;
            t[rr] = n => {
                a || (a = !0,
                r(),
                C(n ? g : h, [t]),
                t[rr] = void 0,
                S[i] === e && delete S[i])
            }
            ;
            let o = t[rr].bind(null, !1);
            S[i] = e,
            m ? w(m, [t, o]) : o()
        },
        clone(e) {
            let a = pr(e, t, n, r, i);
            return i && i(a),
            a
        }
    };
    return T
}
function mr(e) {
    if (Tr(e))
        return e = Ea(e),
        e.children = null,
        e
}
function hr(e) {
    if (!Tr(e))
        return Gn(e.type) && e.children ? ur(e.children) : e;
    if (e.component)
        return e.component.subTree;
    let {shapeFlag: t, children: n} = e;
    if (n) {
        if (t & 16)
            return n[0];
        if (t & 32 && h(n.default))
            return n.default()
    }
}
function gr(e, t) {
    if (e.shapeFlag & 6 && e.component) {
        e.transition = t;
        let n = e.component.subTree;
        gr(Gn(n.type) && hr(n) || n, t)
    } else
        e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
        e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function _r(e, t=!1, n) {
    let r = []
      , i = 0;
    for (let a = 0; a < e.length; a++) {
        let o = e[a]
          , s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
        o.type === U ? (o.patchFlag & 128 && i++,
        r = r.concat(_r(o.children, t, s))) : (t || o.type !== da) && r.push(s == null ? o : Ea(o, {
            key: s
        }))
    }
    if (i > 1)
        for (let e = 0; e < r.length; e++)
            r[e].patchFlag = -2;
    return r
}
function vr(e, t) {
    return h(e) ? ( () => s({
        name: e.name
    }, t, {
        setup: e
    }))() : e
}
function yr(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + `-`, 0, 0]
}
function br(e, t) {
    let n;
    return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable)
}
var xr = new WeakMap;
function Sr(e, n, r, a, o=!1) {
    if (d(e)) {
        e.forEach( (e, t) => Sr(e, n && (d(n) ? n[t] : n), r, a, o));
        return
    }
    if (wr(a) && !o) {
        a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Sr(e, n, r, a.component.subTree);
        return
    }
    let s = a.shapeFlag & 4 ? eo(a.component) : a.el
      , l = o ? null : s
      , {i: f, r: p} = e
      , m = n && n.r
      , _ = f.refs === t ? f.refs = {} : f.refs
      , v = f.setupState
      , y = zt(v)
      , b = v === t ? i : e => br(_, e) ? !1 : u(y, e)
      , x = (e, t) => !(t && br(_, t));
    if (m != null && m !== p) {
        if (Cr(n),
        g(m))
            _[m] = null,
            b(m) && (v[m] = null);
        else if (Ut(m)) {
            let e = n;
            x(m, e.k) && (m.value = null),
            e.k && (_[e.k] = null)
        }
    }
    if (h(p))
        ln(p, f, 12, [l, _]);
    else {
        let t = g(p)
          , n = Ut(p);
        if (t || n) {
            let i = () => {
                if (e.f) {
                    let n = t ? b(p) ? v[p] : _[p] : x(p) || !e.k ? p.value : _[e.k];
                    if (o)
                        d(n) && c(n, s);
                    else if (d(n))
                        n.includes(s) || n.push(s);
                    else if (t)
                        _[p] = [s],
                        b(p) && (v[p] = _[p]);
                    else {
                        let t = [s];
                        x(p, e.k) && (p.value = t),
                        e.k && (_[e.k] = t)
                    }
                } else
                    t ? (_[p] = l,
                    b(p) && (v[p] = l)) : n && (x(p, e.k) && (p.value = l),
                    e.k && (_[e.k] = l))
            }
            ;
            if (l) {
                let t = () => {
                    i(),
                    xr.delete(e)
                }
                ;
                t.id = -1,
                xr.set(e, t),
                Zi(t, r)
            } else
                Cr(e),
                i()
        }
    }
}
function Cr(e) {
    let t = xr.get(e);
    t && (t.flags |= 8,
    xr.delete(e))
}
ie().requestIdleCallback,
ie().cancelIdleCallback;
var wr = e => !!e.type.__asyncLoader
  , Tr = e => e.type.__isKeepAlive;
function Er(e, t) {
    Or(e, `a`, t)
}
function Dr(e, t) {
    Or(e, `da`, t)
}
function Or(e, t, n=Ra) {
    let r = e.__wdc ||= () => {
        let t = n;
        for (; t; ) {
            if (t.isDeactivated)
                return;
            t = t.parent
        }
        return e()
    }
    ;
    if (Ar(t, r, n),
    n) {
        let e = n.parent;
        for (; e && e.parent; )
            Tr(e.parent.vnode) && kr(r, t, n, e),
            e = e.parent
    }
}
function kr(e, t, n, r) {
    let i = Ar(t, e, r, !0);
    Lr( () => {
        c(r[t], i)
    }
    , n)
}
function Ar(e, t, n=Ra, r=!1) {
    if (n) {
        let i = n[e] || (n[e] = [])
          , a = t.__weh ||= (...r) => {
            Re();
            let i = Ha(n)
              , a = un(t, n, e, r);
            return i(),
            ze(),
            a
        }
        ;
        return r ? i.unshift(a) : i.push(a),
        a
    }
}
var jr = e => (t, n=Ra) => {
    (!Ga || e === `sp`) && Ar(e, (...e) => t(...e), n)
}
  , Mr = jr(`bm`)
  , Nr = jr(`m`)
  , Pr = jr(`bu`)
  , Fr = jr(`u`)
  , Ir = jr(`bum`)
  , Lr = jr(`um`)
  , Rr = jr(`sp`)
  , zr = jr(`rtg`)
  , Br = jr(`rtc`);
function Vr(e, t=Ra) {
    Ar(`ec`, e, t)
}
var Hr = `components`
  , Ur = `directives`;
function V(e, t) {
    return qr(Hr, e, !0, t) || e
}
var Wr = Symbol.for(`v-ndc`);
function Gr(e) {
    return g(e) ? qr(Hr, e, !1) || e : e || Wr
}
function Kr(e) {
    return qr(Ur, e)
}
function qr(e, t, n=!0, r=!1) {
    let i = kn || Ra;
    if (i) {
        let n = i.type;
        if (e === Hr) {
            let e = to(n, !1);
            if (e && (e === t || e === O(t) || e === j(O(t))))
                return n
        }
        let a = Jr(i[e] || n[e], t) || Jr(i.appContext[e], t);
        return !a && r ? n : a
    }
}
function Jr(e, t) {
    return e && (e[t] || e[O(t)] || e[j(O(t))])
}
function H(e, t, n, r) {
    let i, a = n && n[r], o = d(e);
    if (o || g(e)) {
        let n = o && Ft(e)
          , r = !1
          , s = !1;
        n && (r = !Lt(e),
        s = It(e),
        e = $e(e)),
        i = Array(e.length);
        for (let n = 0, o = e.length; n < o; n++)
            i[n] = t(r ? s ? Ht(Vt(e[n])) : Vt(e[n]) : e[n], n, void 0, a && a[n])
    } else if (typeof e == `number`) {
        i = Array(e);
        for (let n = 0; n < e; n++)
            i[n] = t(n + 1, n, void 0, a && a[n])
    } else if (v(e))
        if (e[Symbol.iterator])
            i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
        else {
            let n = Object.keys(e);
            i = Array(n.length);
            for (let r = 0, o = n.length; r < o; r++) {
                let o = n[r];
                i[r] = t(e[o], o, r, a && a[r])
            }
        }
    else
        i = [];
    return n && (n[r] = i),
    i
}
function Yr(e, t, n, r, i, a) {
    if (n ??= {},
    kn.ce || kn.parent && wr(kn.parent) && kn.parent.ce) {
        let e = a != null && n.key == null ? s({}, n, {
            key: a
        }) : n
          , i = Object.keys(e).length > 0;
        return t !== `default` && (e.name = t),
        W(),
        ya(U, null, [q(`slot`, e, r && r())], i ? -2 : 64)
    }
    let o = e[t];
    o && o._c && (o._d = !1);
    let c = pa.length;
    W();
    let l;
    try {
        let i = o && Xr(o(n))
          , s = n.key || a || i && i.key;
        l = ya(U, {
            key: (s && !_(s) ? s : `_${t}`) + (!i && r ? `_fb` : ``)
        }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2)
    } catch (e) {
        for (let e = pa.length; e > c; e--)
            ha();
        throw e
    } finally {
        o && o._c && (o._d = !0)
    }
    return !i && l.scopeId && (l.slotScopeIds = [l.scopeId + `-s`]),
    l
}
function Xr(e) {
    return e.some(e => ba(e) ? !(e.type === da || e.type === U && !Xr(e.children)) : !0) ? e : null
}
var Zr = e => e ? Wa(e) ? eo(e) : Zr(e.parent) : null
  , Qr = s(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Zr(e.parent),
    $root: e => Zr(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => si(e),
    $forceUpdate: e => e.f ||= () => {
        Sn(e.update)
    }
    ,
    $nextTick: e => e.n ||= bn.bind(e.proxy),
    $watch: e => Vn.bind(e)
})
  , $r = (e, n) => e !== t && !e.__isScriptSetup && u(e, n)
  , ei = {
    get({_: e}, n) {
        if (n === `__v_skip`)
            return !0;
        let {ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l} = e;
        if (n[0] !== `$`) {
            let e = s[n];
            if (e !== void 0)
                switch (e) {
                case 1:
                    return i[n];
                case 2:
                    return a[n];
                case 4:
                    return r[n];
                case 3:
                    return o[n]
                }
            else if ($r(i, n))
                return s[n] = 1,
                i[n];
            else if (a !== t && u(a, n))
                return s[n] = 2,
                a[n];
            else if (u(o, n))
                return s[n] = 3,
                o[n];
            else if (r !== t && u(r, n))
                return s[n] = 4,
                r[n];
            else
                ni && (s[n] = 0)
        }
        let d = Qr[n], f, p;
        if (d)
            return n === `$attrs` && Ye(e.attrs, `get`, ``),
            d(e);
        if ((f = c.__cssModules) && (f = f[n]))
            return f;
        if (r !== t && u(r, n))
            return s[n] = 4,
            r[n];
        if (p = l.config.globalProperties,
        u(p, n))
            return p[n]
    },
    set({_: e}, n, r) {
        let {data: i, setupState: a, ctx: o} = e;
        return $r(a, n) ? (a[n] = r,
        !0) : i !== t && u(i, n) ? (i[n] = r,
        !0) : u(e.props, n) || n[0] === `$` && n.slice(1) in e ? !1 : (o[n] = r,
        !0)
    },
    has({_: {data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s}}, c) {
        let l;
        return !!(r[c] || e !== t && c[0] !== `$` && u(e, c) || $r(n, c) || u(o, c) || u(i, c) || u(Qr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c])
    },
    defineProperty(e, t, n) {
        return n.get == null ? u(n, `value`) && this.set(e, t, n.value, null) : e._.accessCache[t] = 0,
        Reflect.defineProperty(e, t, n)
    }
};
function ti(e) {
    return d(e) ? e.reduce( (e, t) => (e[t] = null,
    e), {}) : e
}
var ni = !0;
function ri(e) {
    let t = si(e)
      , n = e.proxy
      , i = e.ctx;
    ni = !1,
    t.beforeCreate && ai(t.beforeCreate, e, `bc`);
    let {data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: T, renderTracked: E, renderTriggered: D, errorCaptured: O, serverPrefetch: k, expose: A, inheritAttrs: j, components: M, directives: N, filters: P} = t;
    if (u && ii(u, i, null),
    s)
        for (let e in s) {
            let t = s[e];
            h(t) && (i[e] = t.bind(n))
        }
    if (a) {
        let t = a.call(n, n);
        v(t) && (e.data = jt(t))
    }
    if (ni = !0,
    o)
        for (let e in o) {
            let t = o[e]
              , a = ro({
                get: h(t) ? t.bind(n, n) : h(t.get) ? t.get.bind(n, n) : r,
                set: !h(t) && h(t.set) ? t.set.bind(n) : r
            });
            Object.defineProperty(i, e, {
                enumerable: !0,
                configurable: !0,
                get: () => a.value,
                set: e => a.value = e
            })
        }
    if (c)
        for (let e in c)
            oi(c[e], i, n, e);
    if (l) {
        let e = h(l) ? l.call(n) : l;
        Reflect.ownKeys(e).forEach(t => {
            Pn(t, e[t])
        }
        )
    }
    f && ai(f, e, `c`);
    function ee(e, t) {
        d(t) ? t.forEach(t => e(t.bind(n))) : t && e(t.bind(n))
    }
    if (ee(Mr, p),
    ee(Nr, m),
    ee(Pr, g),
    ee(Fr, _),
    ee(Er, y),
    ee(Dr, b),
    ee(Vr, O),
    ee(Br, E),
    ee(zr, D),
    ee(Ir, S),
    ee(Lr, w),
    ee(Rr, k),
    d(A))
        if (A.length) {
            let t = e.exposed ||= {};
            A.forEach(e => {
                Object.defineProperty(t, e, {
                    get: () => n[e],
                    set: t => n[e] = t,
                    enumerable: !0
                })
            }
            )
        } else
            e.exposed ||= {};
    T && e.render === r && (e.render = T),
    j != null && (e.inheritAttrs = j),
    M && (e.components = M),
    N && (e.directives = N),
    k && yr(e)
}
function ii(e, t, n=r) {
    for (let n in d(e) && (e = fi(e)),
    e) {
        let r = e[n], i;
        i = v(r) ? `default` in r ? Fn(r.from || n, r.default, !0) : Fn(r.from || n) : Fn(r),
        Ut(i) ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: e => i.value = e
        }) : t[n] = i
    }
}
function ai(e, t, n) {
    un(d(e) ? e.map(e => e.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function oi(e, t, n, r) {
    let i = r.includes(`.`) ? Hn(n, r) : () => n[r];
    if (g(e)) {
        let n = t[e];
        h(n) && zn(i, n)
    } else if (h(e))
        zn(i, e.bind(n));
    else if (v(e))
        if (d(e))
            e.forEach(e => oi(e, t, n, r));
        else {
            let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
            h(r) && zn(i, r, e)
        }
}
function si(e) {
    let t = e.type, {mixins: n, extends: r} = t, {mixins: i, optionsCache: a, config: {optionMergeStrategies: o}} = e.appContext, s = a.get(t), c;
    return s ? c = s : !i.length && !n && !r ? c = t : (c = {},
    i.length && i.forEach(e => ci(c, e, o, !0)),
    ci(c, t, o)),
    v(t) && a.set(t, c),
    c
}
function ci(e, t, n, r=!1) {
    let {mixins: i, extends: a} = t;
    for (let o in a && ci(e, a, n, !0),
    i && i.forEach(t => ci(e, t, n, !0)),
    t)
        if (!(r && o === `expose`)) {
            let r = li[o] || n && n[o];
            e[o] = r ? r(e[o], t[o]) : t[o]
        }
    return e
}
var li = {
    data: ui,
    props: hi,
    emits: hi,
    methods: mi,
    computed: mi,
    beforeCreate: pi,
    created: pi,
    beforeMount: pi,
    mounted: pi,
    beforeUpdate: pi,
    updated: pi,
    beforeDestroy: pi,
    beforeUnmount: pi,
    destroyed: pi,
    unmounted: pi,
    activated: pi,
    deactivated: pi,
    errorCaptured: pi,
    serverPrefetch: pi,
    components: mi,
    directives: mi,
    watch: gi,
    provide: ui,
    inject: di
};
function ui(e, t) {
    return t ? e ? function() {
        return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t)
    }
    : t : e
}
function di(e, t) {
    return mi(fi(e), fi(t))
}
function fi(e) {
    if (d(e)) {
        let t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function pi(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function mi(e, t) {
    return e ? s(Object.create(null), e, t) : t
}
function hi(e, t) {
    return e ? d(e) && d(t) ? [...new Set([...e, ...t])] : s(Object.create(null), ti(e), ti(t ?? {})) : t
}
function gi(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    let n = s(Object.create(null), e);
    for (let r in t)
        n[r] = pi(e[r], t[r]);
    return n
}
function _i() {
    return {
        app: null,
        config: {
            isNativeTag: i,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
var vi = 0;
function yi(e, t) {
    return function(n, r=null) {
        h(n) || (n = s({}, n)),
        r != null && !v(r) && (r = null);
        let i = _i()
          , a = new WeakSet
          , o = []
          , c = !1
          , l = i.app = {
            _uid: vi++,
            _component: n,
            _props: r,
            _container: null,
            _context: i,
            _instance: null,
            version: ao,
            get config() {
                return i.config
            },
            set config(e) {},
            use(e, ...t) {
                return a.has(e) || (e && h(e.install) ? (a.add(e),
                e.install(l, ...t)) : h(e) && (a.add(e),
                e(l, ...t))),
                l
            },
            mixin(e) {
                return i.mixins.includes(e) || i.mixins.push(e),
                l
            },
            component(e, t) {
                return t ? (i.components[e] = t,
                l) : i.components[e]
            },
            directive(e, t) {
                return t ? (i.directives[e] = t,
                l) : i.directives[e]
            },
            mount(a, o, s) {
                if (!c) {
                    let u = l._ceVNode || q(n, r);
                    return u.appContext = i,
                    s === !0 ? s = `svg` : s === !1 && (s = void 0),
                    o && t ? t(u, a) : e(u, a, s),
                    c = !0,
                    l._container = a,
                    a.__vue_app__ = l,
                    eo(u.component)
                }
            },
            onUnmount(e) {
                o.push(e)
            },
            unmount() {
                c && (un(o, l._instance, 16),
                e(null, l._container),
                delete l._container.__vue_app__)
            },
            provide(e, t) {
                return i.provides[e] = t,
                l
            },
            runWithContext(e) {
                let t = bi;
                bi = l;
                try {
                    return e()
                } finally {
                    bi = t
                }
            }
        };
        return l
    }
}
var bi = null
  , xi = (e, t) => t === `modelValue` || t === `model-value` ? e.modelModifiers : e[`${t}Modifiers`] || e[`${O(t)}Modifiers`] || e[`${A(t)}Modifiers`];
function Si(e, n, ...r) {
    if (e.isUnmounted)
        return;
    let i = e.vnode.props || t
      , a = r
      , o = n.startsWith(`update:`)
      , s = o && xi(i, n.slice(7));
    s && (s.trim && (a = r.map(e => g(e) ? e.trim() : e)),
    s.number && (a = a.map(te)));
    let c, l = i[c = M(n)] || i[c = M(O(n))];
    !l && o && (l = i[c = M(A(n))]),
    l && un(l, e, 6, a);
    let u = i[c + `Once`];
    if (u) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[c])
            return;
        e.emitted[c] = !0,
        un(u, e, 6, a)
    }
}
var Ci = new WeakMap;
function wi(e, t, n=!1) {
    let r = n ? Ci : t.emitsCache
      , i = r.get(e);
    if (i !== void 0)
        return i;
    let a = e.emits
      , o = {}
      , c = !1;
    if (!h(e)) {
        let r = e => {
            let n = wi(e, t, !0);
            n && (c = !0,
            s(o, n))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(r),
        e.extends && r(e.extends),
        e.mixins && e.mixins.forEach(r)
    }
    return !a && !c ? (v(e) && r.set(e, null),
    null) : (d(a) ? a.forEach(e => o[e] = null) : s(o, a),
    v(e) && r.set(e, o),
    o)
}
function Ti(e, t) {
    return !e || !a(t) ? !1 : (t = t.slice(2),
    t = t === `Once` ? t : t.replace(/Once$/, ``),
    u(e, t[0].toLowerCase() + t.slice(1)) || u(e, A(t)) || u(e, t))
}
function Ei(e) {
    let {type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g} = e, _ = jn(e), v, y;
    try {
        if (n.shapeFlag & 4) {
            let e = i || r
              , t = e;
            v = Aa(u.call(t, e, d, f, m, p, h)),
            y = c
        } else {
            let e = t;
            v = Aa(e.length > 1 ? e(f, {
                attrs: c,
                slots: s,
                emit: l
            }) : e(f, null)),
            y = t.props ? c : Di(c)
        }
    } catch (t) {
        pa.length = 0,
        dn(t, e, 1),
        v = q(da)
    }
    let b = v;
    if (y && g !== !1) {
        let e = Object.keys(y)
          , {shapeFlag: t} = b;
        e.length && t & 7 && (a && e.some(o) && (y = Oi(y, a)),
        b = Ea(b, y, !1, !0))
    }
    return n.dirs && (b = Ea(b, null, !1, !0),
    b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs),
    n.transition && gr(Gn(b.type) && hr(b) || b, n.transition),
    v = b,
    jn(_),
    v
}
var Di = e => {
    let t;
    for (let n in e)
        (n === `class` || n === `style` || a(n)) && ((t ||= {})[n] = e[n]);
    return t
}
  , Oi = (e, t) => {
    let n = {};
    for (let r in e)
        (!o(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n
}
;
function ki(e, t, n) {
    let {props: r, children: i, component: a} = e
      , {props: o, children: s, patchFlag: c} = t
      , l = a.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && c >= 0) {
        if (c & 1024)
            return !0;
        if (c & 16)
            return r ? Ai(r, o, l) : !!o;
        if (c & 8) {
            let e = t.dynamicProps;
            for (let t = 0; t < e.length; t++) {
                let n = e[t];
                if (ji(o, r, n) && !Ti(l, n))
                    return !0
            }
        }
    } else
        return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Ai(r, o, l) : !0 : !!o;
    return !1
}
function Ai(e, t, n) {
    let r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let i = 0; i < r.length; i++) {
        let a = r[i];
        if (ji(t, e, a) && !Ti(n, a))
            return !0
    }
    return !1
}
function ji(e, t, n) {
    let r = e[n]
      , i = t[n];
    return n === `style` && v(r) && v(i) ? !pe(r, i) : r !== i
}
function Mi({vnode: e, parent: t, suspense: n}, r) {
    for (; t; ) {
        let n = t.subTree;
        if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r,
        e = n),
        n === e)
            (e = t.vnode).el = r,
            t = t.parent;
        else
            break
    }
    n && n.activeBranch === e && (n.vnode.el = r)
}
var Ni = {}
  , Pi = () => Object.create(Ni)
  , Fi = e => Object.getPrototypeOf(e) === Ni;
function Ii(e, t, n, r=!1) {
    let i = {}
      , a = Pi();
    for (let n in e.propsDefaults = Object.create(null),
    Ri(e, t, i, a),
    e.propsOptions[0])
        n in i || (i[n] = void 0);
    n ? e.props = r ? i : Mt(i) : e.type.props ? e.props = i : e.props = a,
    e.attrs = a
}
function Li(e, t, n, r) {
    let {props: i, attrs: a, vnode: {patchFlag: o}} = e
      , s = zt(i)
      , [c] = e.propsOptions
      , l = !1;
    if ((r || o > 0) && !(o & 16)) {
        if (o & 8) {
            let n = e.vnode.dynamicProps;
            for (let r = 0; r < n.length; r++) {
                let o = n[r];
                if (Ti(e.emitsOptions, o))
                    continue;
                let d = t[o];
                if (c)
                    if (u(a, o))
                        d !== a[o] && (a[o] = d,
                        l = !0);
                    else {
                        let t = O(o);
                        i[t] = zi(c, s, t, d, e, !1)
                    }
                else
                    d !== a[o] && (a[o] = d,
                    l = !0)
            }
        }
    } else {
        Ri(e, t, i, a) && (l = !0);
        let r;
        for (let a in s)
            (!t || !u(t, a) && ((r = A(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = zi(c, s, a, void 0, e, !0)) : delete i[a]);
        if (a !== s)
            for (let e in a)
                (!t || !u(t, e)) && (delete a[e],
                l = !0)
    }
    l && Xe(e.attrs, `set`, ``)
}
function Ri(e, n, r, i) {
    let[a,o] = e.propsOptions, s = !1, c;
    if (n)
        for (let t in n) {
            if (T(t))
                continue;
            let l = n[t], d;
            a && u(a, d = O(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : Ti(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l,
            s = !0)
        }
    if (o) {
        let n = zt(r)
          , i = c || t;
        for (let t = 0; t < o.length; t++) {
            let s = o[t];
            r[s] = zi(a, n, s, i[s], e, !u(i, s))
        }
    }
    return s
}
function zi(e, t, n, r, i, a) {
    let o = e[n];
    if (o != null) {
        let e = u(o, `default`);
        if (e && r === void 0) {
            let e = o.default;
            if (o.type !== Function && !o.skipFactory && h(e)) {
                let {propsDefaults: a} = i;
                if (n in a)
                    r = a[n];
                else {
                    let o = Ha(i);
                    r = a[n] = e.call(null, t),
                    o()
                }
            } else
                r = e;
            i.ce && i.ce._setProp(n, r)
        }
        o[0] && (a && !e ? r = !1 : o[1] && (r === `` || r === A(n)) && (r = !0))
    }
    return r
}
var Bi = new WeakMap;
function Vi(e, r, i=!1) {
    let a = i ? Bi : r.propsCache
      , o = a.get(e);
    if (o)
        return o;
    let c = e.props
      , l = {}
      , f = []
      , p = !1;
    if (!h(e)) {
        let t = e => {
            p = !0;
            let[t,n] = Vi(e, r, !0);
            s(l, t),
            n && f.push(...n)
        }
        ;
        !i && r.mixins.length && r.mixins.forEach(t),
        e.extends && t(e.extends),
        e.mixins && e.mixins.forEach(t)
    }
    if (!c && !p)
        return v(e) && a.set(e, n),
        n;
    if (d(c))
        for (let e = 0; e < c.length; e++) {
            let n = O(c[e]);
            Hi(n) && (l[n] = t)
        }
    else if (c)
        for (let e in c) {
            let t = O(e);
            if (Hi(t)) {
                let n = c[e]
                  , r = l[t] = d(n) || h(n) ? {
                    type: n
                } : s({}, n)
                  , i = r.type
                  , a = !1
                  , o = !0;
                if (d(i))
                    for (let e = 0; e < i.length; ++e) {
                        let t = i[e]
                          , n = h(t) && t.name;
                        if (n === `Boolean`) {
                            a = !0;
                            break
                        } else
                            n === `String` && (o = !1)
                    }
                else
                    a = h(i) && i.name === `Boolean`;
                r[0] = a,
                r[1] = o,
                (a || u(r, `default`)) && f.push(t)
            }
        }
    let m = [l, f];
    return v(e) && a.set(e, m),
    m
}
function Hi(e) {
    return e[0] !== `$` && !T(e)
}
var Ui = e => e === `_` || e === `_ctx` || e === `$stable`
  , Wi = e => d(e) ? e.map(Aa) : [Aa(e)]
  , Gi = (e, t, n) => {
    if (t._n)
        return t;
    let r = Mn( (...e) => Wi(t(...e)), n);
    return r._c = !1,
    r
}
  , Ki = (e, t, n) => {
    let r = e._ctx;
    for (let n in e) {
        if (Ui(n))
            continue;
        let i = e[n];
        if (h(i))
            t[n] = Gi(n, i, r);
        else if (i != null) {
            let e = Wi(i);
            t[n] = () => e
        }
    }
}
  , qi = (e, t) => {
    let n = Wi(t);
    e.slots.default = () => n
}
  , Ji = (e, t, n) => {
    for (let r in t)
        (n || !Ui(r)) && (e[r] = t[r])
}
  , Yi = (e, t, n) => {
    let r = e.slots = Pi();
    if (e.vnode.shapeFlag & 32) {
        let e = t._;
        e ? (Ji(r, t, n),
        n && ee(r, `_`, e, !0)) : Ki(t, r)
    } else
        t && qi(e, t)
}
  , Xi = (e, n, r) => {
    let {vnode: i, slots: a} = e
      , o = !0
      , s = t;
    if (i.shapeFlag & 32) {
        let e = n._;
        e ? r && e === 1 ? o = !1 : Ji(a, n, r) : (o = !n.$stable,
        Ki(n, a)),
        s = n
    } else
        n && (qi(e, n),
        s = {
            default: 1
        });
    if (o)
        for (let e in a)
            !Ui(e) && s[e] == null && delete a[e]
}
  , Zi = la;
function Qi(e) {
    return $i(e)
}
function $i(e, i) {
    let a = ie();
    a.__VUE__ = !0;
    let {insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g=r, insertStaticContent: _} = e, v = (e, t, n, r=null, i=null, a=null, o=void 0, s=null, c=!!t.dynamicChildren) => {
        if (e === t)
            return;
        e && !xa(e, t) && (r = fe(e),
        ce(e, i, a, !0),
        e = null),
        t.patchFlag === -2 && (c = !1,
        t.dynamicChildren = null);
        let {type: l, ref: u, shapeFlag: d} = t;
        switch (l) {
        case ua:
            y(e, t, n, r);
            break;
        case da:
            b(e, t, n, r);
            break;
        case fa:
            e ?? x(t, n, r, o);
            break;
        case U:
            M(e, t, n, r, i, a, o, s, c);
            break;
        default:
            d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? N(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, me)
        }
        u != null && i ? Sr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Sr(e.ref, null, a, e, !0)
    }
    , y = (e, t, n, r) => {
        if (e == null)
            o(t.el = u(t.children), n, r);
        else {
            let n = t.el = e.el;
            t.children !== e.children && f(n, t.children)
        }
    }
    , b = (e, t, n, r) => {
        e == null ? o(t.el = d(t.children || ``), n, r) : t.el = e.el
    }
    , x = (e, t, n, r) => {
        [e.el,e.anchor] = _(e.children, t, n, r, e.el, e.anchor)
    }
    , S = ({el: e, anchor: t}, n, r) => {
        let i;
        for (; e && e !== t; )
            i = h(e),
            o(e, n, r),
            e = i;
        o(t, n, r)
    }
    , C = ({el: e, anchor: t}) => {
        let n;
        for (; e && e !== t; )
            n = h(e),
            s(e),
            e = n;
        s(t)
    }
    , w = (e, t, n, r, i, a, o, s, c) => {
        if (t.type === `svg` ? o = `svg` : t.type === `math` && (o = `mathml`),
        e == null)
            E(t, n, r, i, a, o, s, c);
        else {
            let n = e.el && e.el._isVueCE ? e.el : null;
            try {
                n && n._beginPatch(),
                k(e, t, i, a, o, s, c)
            } finally {
                n && n._endPatch()
            }
        }
    }
    , E = (e, t, n, r, i, a, s, u) => {
        let d, f, {props: m, shapeFlag: h, transition: g, dirs: _} = e;
        if (d = e.el = l(e.type, a, m && m.is, m),
        h & 8 ? p(d, e.children) : h & 16 && O(e.children, d, null, r, i, ea(e, a), s, u),
        _ && Nn(e, null, r, `created`),
        D(d, e, e.scopeId, s, r),
        m) {
            for (let e in m)
                e !== `value` && !T(e) && c(d, e, null, m[e], a, r);
            `value` in m && c(d, `value`, null, m.value, a),
            (f = m.onVnodeBeforeMount) && Pa(f, r, e)
        }
        _ && Nn(e, null, r, `beforeMount`);
        let v = na(i, g);
        v && g.beforeEnter(d),
        o(d, t, n),
        ((f = m && m.onVnodeMounted) || v || _) && Zi( () => {
            try {
                f && Pa(f, r, e),
                v && g.enter(d),
                _ && Nn(e, null, r, `mounted`)
            } finally {}
        }
        , i)
    }
    , D = (e, t, n, r, i) => {
        if (n && g(e, n),
        r)
            for (let t = 0; t < r.length; t++)
                g(e, r[t]);
        if (i) {
            let n = i.subTree;
            if (t === n || ca(n.type) && (n.ssContent === t || n.ssFallback === t)) {
                let t = i.vnode;
                D(e, t, t.scopeId, t.slotScopeIds, i.parent)
            }
        }
    }
    , O = (e, t, n, r, i, a, o, s, c=0) => {
        for (let l = c; l < e.length; l++)
            v(null, e[l] = s ? ja(e[l]) : Aa(e[l]), t, n, r, i, a, o, s)
    }
    , k = (e, n, r, i, a, o, s) => {
        let l = n.el = e.el
          , {patchFlag: u, dynamicChildren: d, dirs: f} = n;
        u |= e.patchFlag & 16;
        let m = e.props || t, h = n.props || t, g;
        if (r && ta(r, !1),
        (g = h.onVnodeBeforeUpdate) && Pa(g, r, n, e),
        f && Nn(n, e, r, `beforeUpdate`),
        r && ta(r, !0),
        d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0,
        s = !1,
        d = null),
        (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ``),
        d ? A(e.dynamicChildren, d, l, r, i, ea(n, a), o) : s || F(e, n, l, null, r, i, ea(n, a), o, !1),
        u > 0) {
            if (u & 16)
                j(l, m, h, r, a);
            else if (u & 2 && m.class !== h.class && c(l, `class`, null, h.class, a),
            u & 4 && c(l, `style`, m.style, h.style, a),
            u & 8) {
                let e = n.dynamicProps;
                for (let t = 0; t < e.length; t++) {
                    let n = e[t]
                      , i = m[n]
                      , o = h[n];
                    (o !== i || n === `value`) && c(l, n, i, o, a, r)
                }
            }
            u & 1 && e.children !== n.children && p(l, n.children)
        } else
            !s && d == null && j(l, m, h, r, a);
        ((g = h.onVnodeUpdated) || f) && Zi( () => {
            g && Pa(g, r, n, e),
            f && Nn(n, e, r, `updated`)
        }
        , i)
    }
    , A = (e, t, n, r, i, a, o) => {
        for (let s = 0; s < t.length; s++) {
            let c = e[s]
              , l = t[s];
            v(c, l, c.el && (c.type === U || !xa(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0)
        }
    }
    , j = (e, n, r, i, a) => {
        if (n !== r) {
            if (n !== t)
                for (let t in n)
                    !T(t) && !(t in r) && c(e, t, n[t], null, a, i);
            for (let t in r) {
                if (T(t))
                    continue;
                let o = r[t]
                  , s = n[t];
                o !== s && t !== `value` && c(e, t, s, o, a, i)
            }
            `value` in r && c(e, `value`, n.value, r.value, a)
        }
    }
    , M = (e, t, n, r, i, a, s, c, l) => {
        let d = t.el = e ? e.el : u(``)
          , f = t.anchor = e ? e.anchor : u(``)
          , {patchFlag: p, dynamicChildren: m, slotScopeIds: h} = t;
        h && (c = c ? c.concat(h) : h),
        e == null ? (o(d, n, r),
        o(f, n, r),
        O(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (A(e.dynamicChildren, m, n, i, a, s, c),
        (t.key != null || i && t === i.subTree) && ra(e, t, !0)) : F(e, t, n, f, i, a, s, c, l)
    }
    , N = (e, t, n, r, i, a, o, s, c) => {
        t.slotScopeIds = s,
        e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ee(t, n, r, i, a, o, c) : te(e, t, c)
    }
    , ee = (e, t, n, r, i, a, o) => {
        let s = e.component = La(e, r, i);
        if (Tr(e) && (s.ctx.renderer = me),
        Ka(s, !1, o),
        s.asyncDep) {
            if (i && i.registerDep(s, ne, o),
            !e.el) {
                let r = s.subTree = q(da);
                b(null, r, t, n),
                e.placeholder = r.el
            }
        } else
            ne(s, e, t, n, i, a, o)
    }
    , te = (e, t, n) => {
        let r = t.component = e.component;
        if (ki(e, t, n))
            if (r.asyncDep && !r.asyncResolved) {
                re(r, t, n);
                return
            } else
                r.next = t,
                r.update();
        else
            t.el = e.el,
            r.vnode = t
    }
    , ne = (e, t, n, r, i, a, o) => {
        let s = () => {
            if (e.isMounted) {
                let {next: t, bu: n, u: r, parent: s, vnode: c} = e;
                {
                    let n = aa(e);
                    if (n) {
                        t && (t.el = c.el,
                        re(e, t, o)),
                        n.asyncDep.then( () => {
                            Zi( () => {
                                e.isUnmounted || l()
                            }
                            , i)
                        }
                        );
                        return
                    }
                }
                let u = t, d;
                ta(e, !1),
                t ? (t.el = c.el,
                re(e, t, o)) : t = c,
                n && P(n),
                (d = t.props && t.props.onVnodeBeforeUpdate) && Pa(d, s, t, c),
                ta(e, !0);
                let f = Ei(e)
                  , p = e.subTree;
                e.subTree = f,
                v(p, f, m(p.el), fe(p), e, i, a),
                t.el = f.el,
                u === null && Mi(e, f.el),
                r && Zi(r, i),
                (d = t.props && t.props.onVnodeUpdated) && Zi( () => Pa(d, s, t, c), i)
            } else {
                let o, {el: s, props: c} = t, {bm: l, m: u, parent: d, root: f, type: p} = e, m = wr(t);
                if (ta(e, !1),
                l && P(l),
                !m && (o = c && c.onVnodeBeforeMount) && Pa(o, d, t),
                ta(e, !0),
                s && he) {
                    let t = () => {
                        e.subTree = Ei(e),
                        he(s, e.subTree, e, i, null)
                    }
                    ;
                    m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t()
                } else {
                    f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
                    let o = e.subTree = Ei(e);
                    v(null, o, n, r, e, i, a),
                    t.el = o.el
                }
                if (u && Zi(u, i),
                !m && (o = c && c.onVnodeMounted)) {
                    let e = t;
                    Zi( () => Pa(o, d, e), i)
                }
                (t.shapeFlag & 256 || d && wr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Zi(e.a, i),
                e.isMounted = !0,
                t = n = r = null
            }
        }
        ;
        e.scope.on();
        let c = e.effect = new Ce(s);
        e.scope.off();
        let l = e.update = c.run.bind(c)
          , u = e.job = c.runIfDirty.bind(c);
        u.i = e,
        u.id = e.uid,
        c.scheduler = () => Sn(u),
        ta(e, !0),
        l()
    }
    , re = (e, t, n) => {
        t.component = e;
        let r = e.vnode.props;
        e.vnode = t,
        e.next = null,
        Li(e, t.props, r, n),
        Xi(e, t.children, n),
        Re(),
        Tn(e),
        ze()
    }
    , F = (e, t, n, r, i, a, o, s, c=!1) => {
        let l = e && e.children
          , u = e ? e.shapeFlag : 0
          , d = t.children
          , {patchFlag: f, shapeFlag: m} = t;
        if (f > 0) {
            if (f & 128) {
                oe(l, d, n, r, i, a, o, s, c);
                return
            } else if (f & 256) {
                ae(l, d, n, r, i, a, o, s, c);
                return
            }
        }
        m & 8 ? (u & 16 && de(l, i, a),
        d !== l && p(n, d)) : u & 16 ? m & 16 ? oe(l, d, n, r, i, a, o, s, c) : de(l, i, a, !0) : (u & 8 && p(n, ``),
        m & 16 && O(d, n, r, i, a, o, s, c))
    }
    , ae = (e, t, r, i, a, o, s, c, l) => {
        e ||= n,
        t ||= n;
        let u = e.length, d = t.length, f = Math.min(u, d), p;
        for (p = 0; p < f; p++) {
            let n = t[p] = l ? ja(t[p]) : Aa(t[p]);
            v(e[p], n, r, null, a, o, s, c, l)
        }
        u > d ? de(e, a, o, !0, !1, f) : O(t, r, i, a, o, s, c, l, f)
    }
    , oe = (e, t, r, i, a, o, s, c, l) => {
        let u = 0
          , d = t.length
          , f = e.length - 1
          , p = d - 1;
        for (; u <= f && u <= p; ) {
            let n = e[u]
              , i = t[u] = l ? ja(t[u]) : Aa(t[u]);
            if (xa(n, i))
                v(n, i, r, null, a, o, s, c, l);
            else
                break;
            u++
        }
        for (; u <= f && u <= p; ) {
            let n = e[f]
              , i = t[p] = l ? ja(t[p]) : Aa(t[p]);
            if (xa(n, i))
                v(n, i, r, null, a, o, s, c, l);
            else
                break;
            f--,
            p--
        }
        if (u > f) {
            if (u <= p) {
                let e = p + 1
                  , n = e < d ? t[e].el : i;
                for (; u <= p; )
                    v(null, t[u] = l ? ja(t[u]) : Aa(t[u]), r, n, a, o, s, c, l),
                    u++
            }
        } else if (u > p)
            for (; u <= f; )
                ce(e[u], a, o, !0),
                u++;
        else {
            let m = u
              , h = u
              , g = new Map;
            for (u = h; u <= p; u++) {
                let e = t[u] = l ? ja(t[u]) : Aa(t[u]);
                e.key != null && g.set(e.key, u)
            }
            let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
            for (u = 0; u < b; u++)
                C[u] = 0;
            for (u = m; u <= f; u++) {
                let n = e[u];
                if (y >= b) {
                    ce(n, a, o, !0);
                    continue
                }
                let i;
                if (n.key != null)
                    i = g.get(n.key);
                else
                    for (_ = h; _ <= p; _++)
                        if (C[_ - h] === 0 && xa(n, t[_])) {
                            i = _;
                            break
                        }
                i === void 0 ? ce(n, a, o, !0) : (C[i - h] = u + 1,
                i >= S ? S = i : x = !0,
                v(n, t[i], r, null, a, o, s, c, l),
                y++)
            }
            let w = x ? ia(C) : n;
            for (_ = w.length - 1,
            u = b - 1; u >= 0; u--) {
                let e = h + u
                  , n = t[e]
                  , f = t[e + 1]
                  , p = e + 1 < d ? f.el || sa(f) : i;
                C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? se(n, r, p, 2) : _--)
            }
        }
    }
    , se = (e, t, n, r, i=null) => {
        let {el: a, type: c, transition: l, children: u, shapeFlag: d} = e;
        if (d & 6) {
            se(e.component.subTree, t, n, r);
            return
        }
        if (d & 128) {
            e.suspense.move(t, n, r);
            return
        }
        if (d & 64) {
            c.move(e, t, n, me);
            return
        }
        if (c === U) {
            o(a, t, n);
            for (let e = 0; e < u.length; e++)
                se(u[e], t, n, r);
            o(e.anchor, t, n);
            return
        }
        if (c === fa) {
            S(e, t, n);
            return
        }
        if (r !== 2 && d & 1 && l)
            if (r === 0)
                l.persisted && !a[rr] ? o(a, t, n) : (l.beforeEnter(a),
                o(a, t, n),
                Zi( () => l.enter(a), i));
            else {
                let {leave: r, delayLeave: i, afterLeave: c} = l
                  , u = () => {
                    e.ctx.isUnmounted ? s(a) : o(a, t, n)
                }
                  , d = () => {
                    let e = a._isLeaving || !!a[rr];
                    a._isLeaving && a[rr](!0),
                    l.persisted && !e ? u() : r(a, () => {
                        u(),
                        c && c()
                    }
                    )
                }
                ;
                i ? i(a, u, d) : d()
            }
        else
            o(a, t, n)
    }
    , ce = (e, t, n, r=!1, i=!1) => {
        let {type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m} = e;
        if (d === -2 && (i = !1),
        s != null && (Re(),
        Sr(s, null, n, e, !0),
        ze()),
        p != null && (t.renderCache[p] = void 0),
        u & 256) {
            t.ctx.deactivate(e);
            return
        }
        let h = u & 1 && f, g = !wr(e), _;
        if (g && (_ = o && o.onVnodeBeforeUnmount) && Pa(_, t, e),
        u & 6)
            ue(e.component, n, r);
        else {
            if (u & 128) {
                e.suspense.unmount(n, r);
                return
            }
            h && Nn(e, null, t, `beforeUnmount`),
            u & 64 ? e.type.remove(e, t, n, me, r) : l && !l.hasOnce && (a !== U || d > 0 && d & 64) ? de(l, t, n, !1, !0) : (a === U && d & 384 || !i && u & 16) && de(c, t, n),
            r && I(e)
        }
        let v = m != null && p == null;
        (g && (_ = o && o.onVnodeUnmounted) || h || v) && Zi( () => {
            _ && Pa(_, t, e),
            h && Nn(e, null, t, `unmounted`),
            v && (e.el = null)
        }
        , n)
    }
    , I = e => {
        let {type: t, el: n, anchor: r, transition: i} = e;
        if (t === U) {
            le(n, r);
            return
        }
        if (t === fa) {
            C(e);
            return
        }
        let a = () => {
            s(n),
            i && !i.persisted && i.afterLeave && i.afterLeave()
        }
        ;
        if (e.shapeFlag & 1 && i && !i.persisted) {
            let {leave: t, delayLeave: r} = i
              , o = () => t(n, a);
            r ? r(e.el, a, o) : o()
        } else
            a()
    }
    , le = (e, t) => {
        let n;
        for (; e !== t; )
            n = h(e),
            s(e),
            e = n;
        s(t)
    }
    , ue = (e, t, n) => {
        let {bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l} = e;
        oa(c),
        oa(l),
        r && P(r),
        i.stop(),
        a && (a.flags |= 8,
        ce(o, e, t, n)),
        s && Zi(s, t),
        Zi( () => {
            e.isUnmounted = !0
        }
        , t)
    }
    , de = (e, t, n, r=!1, i=!1, a=0) => {
        for (let o = a; o < e.length; o++)
            ce(e[o], t, n, r, i)
    }
    , fe = e => {
        if (e.shapeFlag & 6)
            return fe(e.component.subTree);
        if (e.shapeFlag & 128)
            return e.suspense.next();
        let t = h(e.anchor || e.el)
          , n = t && t[Wn];
        return n ? h(n) : t
    }
    , L = !1, pe = (e, t, n) => {
        let r;
        e == null ? t._vnode && (ce(t._vnode, null, null, !0),
        r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n),
        t._vnode = e,
        L ||= (L = !0,
        Tn(r),
        En(),
        !1)
    }
    , me = {
        p: v,
        um: ce,
        m: se,
        r: I,
        mt: ee,
        mc: O,
        pc: F,
        pbc: A,
        n: fe,
        o: e
    }, R, he;
    return i && ([R,he] = i(me)),
    {
        render: pe,
        hydrate: R,
        createApp: yi(pe, R)
    }
}
function ea({type: e, props: t}, n) {
    return n === `svg` && e === `foreignObject` || n === `mathml` && e === `annotation-xml` && t && t.encoding && t.encoding.includes(`html`) ? void 0 : n
}
function ta({effect: e, job: t}, n) {
    n ? (e.flags |= 32,
    t.flags |= 4) : (e.flags &= -33,
    t.flags &= -5)
}
function na(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function ra(e, t, n=!1) {
    let r = e.children
      , i = t.children;
    if (d(r) && d(i))
        for (let e = 0; e < r.length; e++) {
            let t = r[e]
              , a = i[e];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ja(i[e]),
            a.el = t.el),
            !n && a.patchFlag !== -2 && ra(t, a)),
            a.type === ua && (a.patchFlag === -1 && (a = i[e] = ja(a)),
            a.el = t.el),
            a.type === da && !a.el && (a.el = t.el)
        }
}
function ia(e) {
    let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
    for (r = 0; r < c; r++) {
        let c = e[r];
        if (c !== 0) {
            if (i = n[n.length - 1],
            e[i] < c) {
                t[r] = i,
                n.push(r);
                continue
            }
            for (a = 0,
            o = n.length - 1; a < o; )
                s = a + o >> 1,
                e[n[s]] < c ? a = s + 1 : o = s;
            c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]),
            n[a] = r)
        }
    }
    for (a = n.length,
    o = n[a - 1]; a-- > 0; )
        n[a] = o,
        o = t[o];
    return n
}
function aa(e) {
    let t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : aa(t)
}
function oa(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
function sa(e) {
    if (e.placeholder)
        return e.placeholder;
    let t = e.component;
    return t ? sa(t.subTree) : null
}
var ca = e => e.__isSuspense;
function la(e, t) {
    t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : wn(e)
}
var U = Symbol.for(`v-fgt`)
  , ua = Symbol.for(`v-txt`)
  , da = Symbol.for(`v-cmt`)
  , fa = Symbol.for(`v-stc`)
  , pa = []
  , ma = null;
function W(e=!1) {
    pa.push(ma = e ? null : [])
}
function ha() {
    pa.pop(),
    ma = pa[pa.length - 1] || null
}
var ga = 1;
function _a(e, t=!1) {
    ga += e,
    e < 0 && ma && t && (ma.hasOnce = !0)
}
function va(e) {
    return e.dynamicChildren = ga > 0 ? ma || n : null,
    ha(),
    ga > 0 && ma && ma.push(e),
    e
}
function G(e, t, n, r, i, a) {
    return va(K(e, t, n, r, i, a, !0))
}
function ya(e, t, n, r, i) {
    return va(q(e, t, n, r, i, !0))
}
function ba(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function xa(e, t) {
    return e.type === t.type && e.key === t.key
}
var Sa = ({key: e}) => e ?? null
  , Ca = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == `number` && (e = `` + e),
e == null ? null : g(e) || Ut(e) || h(e) ? {
    i: kn,
    r: e,
    k: t,
    f: !!n
} : e);
function K(e, t=null, n=null, r=0, i=null, a=e === U ? 0 : 1, o=!1, s=!1) {
    let c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Sa(t),
        ref: t && Ca(t),
        scopeId: An,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: a,
        patchFlag: r,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: kn
    };
    return s ? (Ma(c, n),
    a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16),
    ga > 0 && !o && ma && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ma.push(c),
    c
}
var q = wa;
function wa(e, t=null, n=null, r=0, i=null, a=!1) {
    if ((!e || e === Wr) && (e = da),
    ba(e)) {
        let r = Ea(e, t, !0);
        return n && Ma(r, n),
        ga > 0 && !a && ma && (r.shapeFlag & 6 ? ma[ma.indexOf(e)] = r : ma.push(r)),
        r.patchFlag = -2,
        r
    }
    if (no(e) && (e = e.__vccOpts),
    t) {
        t = Ta(t);
        let {class: e, style: n} = t;
        e && !g(e) && (t.class = I(e)),
        v(n) && (Rt(n) && !d(n) && (n = s({}, n)),
        t.style = F(n))
    }
    let o = g(e) ? 1 : ca(e) ? 128 : Gn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
    return K(e, t, n, r, i, o, a, !0)
}
function Ta(e) {
    return e ? Rt(e) || Fi(e) ? s({}, e) : e : null
}
function Ea(e, t, n=!1, r=!1) {
    let {props: i, ref: a, patchFlag: o, children: s, transition: c} = e
      , l = t ? Na(i || {}, t) : i
      , u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: l,
        key: l && Sa(l),
        ref: t && t.ref ? n && a ? d(a) ? a.concat(Ca(t)) : [a, Ca(t)] : Ca(t) : a,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== U ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: c,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Ea(e.ssContent),
        ssFallback: e.ssFallback && Ea(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return c && r && gr(u, c.clone(u)),
    u
}
function Da(e=` `, t=0) {
    return q(ua, null, e, t)
}
function Oa(e, t) {
    let n = q(fa, null, e);
    return n.staticCount = t,
    n
}
function ka(e=``, t=!1) {
    return t ? (W(),
    ya(da, null, e)) : q(da, null, e)
}
function Aa(e) {
    return e == null || typeof e == `boolean` ? q(da) : d(e) ? q(U, null, e.slice()) : ba(e) ? ja(e) : q(ua, null, String(e))
}
function ja(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ea(e)
}
function Ma(e, t) {
    let n = 0
      , {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (d(t))
        n = 16;
    else if (typeof t == `object`)
        if (r & 65) {
            let n = t.default;
            n && (n._c && (n._d = !1),
            Ma(e, n()),
            n._c && (n._d = !0));
            return
        } else {
            n = 32;
            let r = t._;
            !r && !Fi(t) ? t._ctx = kn : r === 3 && kn && (kn.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else if (h(t)) {
        if (r & 65) {
            Ma(e, {
                default: t
            });
            return
        }
        t = {
            default: t,
            _ctx: kn
        },
        n = 32
    } else
        t = String(t),
        r & 64 ? (n = 16,
        t = [Da(t)]) : n = 8;
    e.children = t,
    e.shapeFlag |= n
}
function Na(...e) {
    let t = {};
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        for (let e in r)
            if (e === `class`)
                t.class !== r.class && (t.class = I([t.class, r.class]));
            else if (e === `style`)
                t.style = F([t.style, r.style]);
            else if (a(e)) {
                let n = t[e]
                  , i = r[e];
                i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i)
            } else
                e !== `` && (t[e] = r[e])
    }
    return t
}
function Pa(e, t, n, r=null) {
    un(e, t, 7, [n, r])
}
var Fa = _i()
  , Ia = 0;
function La(e, n, r) {
    let i = e.type
      , a = (n ? n.appContext : e.appContext) || Fa
      , o = {
        uid: Ia++,
        vnode: e,
        type: i,
        parent: n,
        appContext: a,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new ve(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: n ? n.provides : Object.create(a.provides),
        ids: n ? n.ids : [``, 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Vi(i, a),
        emitsOptions: wi(i, a),
        emit: null,
        emitted: null,
        propsDefaults: t,
        inheritAttrs: i.inheritAttrs,
        ctx: t,
        data: t,
        props: t,
        attrs: t,
        slots: t,
        refs: t,
        setupState: t,
        setupContext: null,
        suspense: r,
        suspenseId: r ? r.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {
        _: o
    },
    o.root = n ? n.root : o,
    o.emit = Si.bind(null, o),
    e.ce && e.ce(o),
    o
}
var Ra = null, za = () => Ra || kn, Ba, Va;
{
    let e = ie()
      , t = (t, n) => {
        let r;
        return (r = e[t]) || (r = e[t] = []),
        r.push(n),
        e => {
            r.length > 1 ? r.forEach(t => t(e)) : r[0](e)
        }
    }
    ;
    Ba = t(`__VUE_INSTANCE_SETTERS__`, e => Ra = e),
    Va = t(`__VUE_SSR_SETTERS__`, e => Ga = e)
}
var Ha = e => {
    let t = Ra;
    return Ba(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Ba(t)
    }
}
  , Ua = () => {
    Ra && Ra.scope.off(),
    Ba(null)
}
;
function Wa(e) {
    return e.vnode.shapeFlag & 4
}
var Ga = !1;
function Ka(e, t=!1, n=!1) {
    t && Va(t);
    let {props: r, children: i} = e.vnode
      , a = Wa(e);
    Ii(e, r, a, t),
    Yi(e, i, n || t);
    let o = a ? qa(e, t) : void 0;
    return t && Va(!1),
    o
}
function qa(e, t) {
    let n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,ei);
    let {setup: r} = n;
    if (r) {
        Re();
        let n = e.setupContext = r.length > 1 ? $a(e) : null
          , i = Ha(e)
          , a = ln(r, e, 0, [e.props, n])
          , o = y(a);
        if (ze(),
        i(),
        (o || e.sp) && !wr(e) && yr(e),
        o) {
            if (a.then(Ua, Ua),
            t)
                return a.then(n => {
                    Va(!0);
                    try {
                        Ja(e, n, t)
                    } finally {
                        Va(!1)
                    }
                }
                ).catch(t => {
                    dn(t, e, 0)
                }
                );
            e.asyncDep = a
        } else
            Ja(e, a, t)
    } else
        Za(e, t)
}
function Ja(e, t, n) {
    h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = Xt(t)),
    Za(e, n)
}
var Ya, Xa;
function Za(e, t, n) {
    let i = e.type;
    if (!e.render) {
        if (!t && Ya && !i.render) {
            let t = i.template || si(e).template;
            if (t) {
                let {isCustomElement: n, compilerOptions: r} = e.appContext.config
                  , {delimiters: a, compilerOptions: o} = i;
                i.render = Ya(t, s(s({
                    isCustomElement: n,
                    delimiters: a
                }, r), o))
            }
        }
        e.render = i.render || r,
        Xa && Xa(e)
    }
    {
        let t = Ha(e);
        Re();
        try {
            ri(e)
        } finally {
            ze(),
            t()
        }
    }
}
var Qa = {
    get(e, t) {
        return Ye(e, `get`, ``),
        e[t]
    }
};
function $a(e) {
    return {
        attrs: new Proxy(e.attrs,Qa),
        slots: e.slots,
        emit: e.emit,
        expose: t => {
            e.exposed = t || {}
        }
    }
}
function eo(e) {
    return e.exposed ? e.exposeProxy ||= new Proxy(Xt(Bt(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in Qr)
                return Qr[n](e)
        },
        has(e, t) {
            return t in e || t in Qr
        }
    }) : e.proxy
}
function to(e, t=!0) {
    return h(e) ? e.displayName || e.name : e.name || t && e.__name
}
function no(e) {
    return h(e) && `__vccOpts` in e
}
var ro = (e, t) => tn(e, t, Ga);
function io(e, t, n) {
    try {
        _a(-1);
        let r = arguments.length;
        return r === 2 ? v(t) && !d(t) ? ba(t) ? q(e, null, [t]) : q(e, t) : q(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ba(n) && (n = [n]),
        q(e, t, n))
    } finally {
        _a(1)
    }
}
var ao = `3.5.42`
  , oo = void 0
  , so = typeof window < `u` && window.trustedTypes;
if (so)
    try {
        oo = so.createPolicy(`vue`, {
            createHTML: e => e
        })
    } catch {}
var co = oo ? e => oo.createHTML(e) : e => e
  , lo = `http://www.w3.org/2000/svg`
  , uo = `http://www.w3.org/1998/Math/MathML`
  , fo = typeof document < `u` ? document : null
  , po = fo && fo.createElement(`template`)
  , mo = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        let t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, r) => {
        let i = t === `svg` ? fo.createElementNS(lo, e) : t === `mathml` ? fo.createElementNS(uo, e) : n ? fo.createElement(e, {
            is: n
        }) : fo.createElement(e);
        return e === `select` && r && r.multiple != null && i.setAttribute(`multiple`, r.multiple),
        i
    }
    ,
    createText: e => fo.createTextNode(e),
    createComment: e => fo.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => fo.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, ``)
    },
    insertStaticContent(e, t, n, r, i, a) {
        let o = n ? n.previousSibling : t.lastChild;
        if (i && (i === a || i.nextSibling))
            for (; t.insertBefore(i.cloneNode(!0), n),
            !(i === a || !(i = i.nextSibling)); )
                ;
        else {
            po.innerHTML = co(r === `svg` ? `<svg>${e}</svg>` : r === `mathml` ? `<math>${e}</math>` : e);
            let i = po.content;
            if (r === `svg` || r === `mathml`) {
                let e = i.firstChild;
                for (; e.firstChild; )
                    i.appendChild(e.firstChild);
                i.removeChild(e)
            }
            t.insertBefore(i, n)
        }
        return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , ho = `transition`
  , go = `animation`
  , _o = Symbol(`_vtc`)
  , vo = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , yo = s({}, sr, vo)
  , bo = (e => (e.displayName = `Transition`,
e.props = yo,
e))( (e, {slots: t}) => io(dr, Co(e), t))
  , xo = (e, t=[]) => {
    d(e) ? e.forEach(e => e(...t)) : e && e(...t)
}
  , So = e => e ? d(e) ? e.some(e => e.length > 1) : e.length > 1 : !1;
function Co(e) {
    let t = {};
    for (let n in e)
        n in vo || (t[n] = e[n]);
    if (e.css === !1)
        return t;
    let {name: n=`v`, type: r, duration: i, enterFromClass: a=`${n}-enter-from`, enterActiveClass: o=`${n}-enter-active`, enterToClass: c=`${n}-enter-to`, appearFromClass: l=a, appearActiveClass: u=o, appearToClass: d=c, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: p=`${n}-leave-active`, leaveToClass: m=`${n}-leave-to`} = e
      , h = wo(i)
      , g = h && h[0]
      , _ = h && h[1]
      , {onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C=v, onAppear: w=y, onAppearCancelled: T=b} = t
      , E = (e, t, n, r) => {
        e._enterCancelled = r,
        Do(e, t ? d : c),
        Do(e, t ? u : o),
        n && n()
    }
      , D = (e, t) => {
        e._isLeaving = !1,
        Do(e, f),
        Do(e, m),
        Do(e, p),
        t && t()
    }
      , O = e => (t, n) => {
        let i = e ? w : y
          , o = () => E(t, e, n);
        xo(i, [t, o]),
        Oo( () => {
            Do(t, e ? l : a),
            Eo(t, e ? d : c),
            So(i) || Ao(t, r, g, o)
        }
        )
    }
    ;
    return s(t, {
        onBeforeEnter(e) {
            xo(v, [e]),
            Eo(e, a),
            Eo(e, o)
        },
        onBeforeAppear(e) {
            xo(C, [e]),
            Eo(e, l),
            Eo(e, u)
        },
        onEnter: O(!1),
        onAppear: O(!0),
        onLeave(e, t) {
            e._isLeaving = !0;
            let n = () => D(e, t);
            Eo(e, f),
            e._enterCancelled ? (Eo(e, p),
            Po(e)) : (Po(e),
            Eo(e, p)),
            Oo( () => {
                e._isLeaving && (Do(e, f),
                Eo(e, m),
                So(x) || Ao(e, r, _, n))
            }
            ),
            xo(x, [e, n])
        },
        onEnterCancelled(e) {
            E(e, !1, void 0, !0),
            xo(b, [e])
        },
        onAppearCancelled(e) {
            E(e, !0, void 0, !0),
            xo(T, [e])
        },
        onLeaveCancelled(e) {
            D(e),
            xo(S, [e])
        }
    })
}
function wo(e) {
    if (e == null)
        return null;
    if (v(e))
        return [To(e.enter), To(e.leave)];
    {
        let t = To(e);
        return [t, t]
    }
}
function To(e) {
    return ne(e)
}
function Eo(e, t) {
    t.split(/\s+/).forEach(t => t && e.classList.add(t)),
    (e[_o] || (e[_o] = new Set)).add(t)
}
function Do(e, t) {
    t.split(/\s+/).forEach(t => t && e.classList.remove(t));
    let n = e[_o];
    n && (n.delete(t),
    n.size || (e[_o] = void 0))
}
function Oo(e) {
    requestAnimationFrame( () => {
        requestAnimationFrame(e)
    }
    )
}
var ko = 0;
function Ao(e, t, n, r) {
    let i = e._endId = ++ko
      , a = () => {
        i === e._endId && r()
    }
    ;
    if (n != null)
        return setTimeout(a, n);
    let {type: o, timeout: s, propCount: c} = jo(e, t);
    if (!o)
        return r();
    let l = o + `end`
      , u = 0
      , d = () => {
        e.removeEventListener(l, f),
        a()
    }
      , f = t => {
        t.target === e && ++u >= c && d()
    }
    ;
    setTimeout( () => {
        u < c && d()
    }
    , s + 1),
    e.addEventListener(l, f)
}
function jo(e, t) {
    let n = window.getComputedStyle(e)
      , r = e => (n[e] || ``).split(`, `)
      , i = r(`${ho}Delay`)
      , a = r(`${ho}Duration`)
      , o = Mo(i, a)
      , s = r(`${go}Delay`)
      , c = r(`${go}Duration`)
      , l = Mo(s, c)
      , u = null
      , d = 0
      , f = 0;
    t === ho ? o > 0 && (u = ho,
    d = o,
    f = a.length) : t === go ? l > 0 && (u = go,
    d = l,
    f = c.length) : (d = Math.max(o, l),
    u = d > 0 ? o > l ? ho : go : null,
    f = u ? u === ho ? a.length : c.length : 0);
    let p = u === ho && /\b(?:transform|all)(?:,|$)/.test(r(`${ho}Property`).toString());
    return {
        type: u,
        timeout: d,
        propCount: f,
        hasTransform: p
    }
}
function Mo(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map( (t, n) => No(t) + No(e[n])))
}
function No(e) {
    return e === `auto` ? 0 : Number(e.slice(0, -1).replace(`,`, `.`)) * 1e3
}
function Po(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight
}
function Fo(e, t, n) {
    let r = e[_o];
    r && (t = (t ? [t, ...r] : [...r]).join(` `)),
    t == null ? e.removeAttribute(`class`) : n ? e.setAttribute(`class`, t) : e.className = t
}
var Io = Symbol(`_vod`)
  , Lo = Symbol(`_vsh`)
  , Ro = {
    name: `show`,
    beforeMount(e, {value: t}, {transition: n}) {
        e[Io] = e.style.display === `none` ? `` : e.style.display,
        n && t ? n.beforeEnter(e) : zo(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        zo(e, !0),
        r.enter(e)) : r.leave(e, () => {
            zo(e, !1)
        }
        ) : zo(e, t))
    },
    beforeUnmount(e, {value: t}) {
        zo(e, t)
    }
};
function zo(e, t) {
    e.style.display = t ? e[Io] : `none`,
    e[Lo] = !t
}
var Bo = Symbol(``)
  , Vo = /(?:^|;)\s*display\s*:/;
function Ho(e, t, n) {
    let r = e.style
      , i = g(n)
      , a = !1;
    if (n && !i) {
        if (t)
            if (g(t))
                for (let e of t.split(`;`)) {
                    let t = e.slice(0, e.indexOf(`:`)).trim();
                    n[t] ?? Wo(r, t, ``)
                }
            else
                for (let e in t)
                    n[e] ?? Wo(r, e, ``);
        for (let i in n) {
            i === `display` && (a = !0);
            let o = n[i];
            o == null ? Wo(r, i, ``) : Jo(e, i, !g(t) && t ? t[i] : void 0, o) || Wo(r, i, o)
        }
    } else if (i) {
        if (t !== n) {
            let e = r[Bo];
            e && (n += `;` + e),
            r.cssText = n,
            a = Vo.test(n)
        }
    } else
        t && e.removeAttribute(`style`);
    Io in e && (e[Io] = a ? r.display : ``,
    e[Lo] && (r.display = `none`))
}
var Uo = /\s*!important$/;
function Wo(e, t, n) {
    if (d(n))
        n.forEach(n => Wo(e, t, n));
    else if (n ??= ``,
    t.startsWith(`--`))
        Uo.test(n) ? e.setProperty(t, n.replace(Uo, ``), `important`) : e.setProperty(t, n);
    else {
        let r = qo(e, t);
        Uo.test(n) ? e.setProperty(A(r), n.replace(Uo, ``), `important`) : e[r] = n
    }
}
var Go = [`Webkit`, `Moz`, `ms`]
  , Ko = {};
function qo(e, t) {
    let n = Ko[t];
    if (n)
        return n;
    let r = O(t);
    if (r !== `filter` && r in e)
        return Ko[t] = r;
    r = j(r);
    for (let n = 0; n < Go.length; n++) {
        let i = Go[n] + r;
        if (i in e)
            return Ko[t] = i
    }
    return t
}
function Jo(e, t, n, r) {
    return e.tagName === `TEXTAREA` && (t === `width` || t === `height`) && g(r) && n === r
}
var Yo = `http://www.w3.org/1999/xlink`;
function Xo(e, t, n, r, i, a=ue(t)) {
    r && t.startsWith(`xlink:`) ? n == null ? e.removeAttributeNS(Yo, t.slice(6, t.length)) : e.setAttributeNS(Yo, t, n) : n == null || a && !de(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? `` : _(n) ? String(n) : n)
}
function Zo(e, t, n, r, i) {
    if (t === `innerHTML` || t === `textContent`) {
        n != null && (e[t] = t === `innerHTML` ? co(n) : n);
        return
    }
    let a = e.tagName;
    if (t === `value` && a !== `PROGRESS` && !a.includes(`-`)) {
        let r = a === `OPTION` ? e.getAttribute(`value`) || `` : e.value
          , i = n == null ? e.type === `checkbox` ? `on` : `` : String(n);
        (r !== i || !(`_value` in e)) && (e.value = i),
        n ?? e.removeAttribute(t),
        e._value = n;
        return
    }
    let o = !1;
    if (n === `` || n == null) {
        let r = typeof e[t];
        r === `boolean` ? n = de(n) : n == null && r === `string` ? (n = ``,
        o = !0) : r === `number` && (n = 0,
        o = !0)
    }
    try {
        e[t] = n
    } catch {}
    o && e.removeAttribute(i || t)
}
function Qo(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function $o(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
var es = Symbol(`_vei`);
function ts(e, t, n, r, i=null) {
    let a = e[es] || (e[es] = {})
      , o = a[t];
    if (r && o)
        o.value = r;
    else {
        let[n,s] = is(t);
        r ? Qo(e, n, a[t] = cs(r, i), s) : o && ($o(e, n, o, s),
        a[t] = void 0)
    }
}
var ns = /(Once|Passive|Capture)$/
  , rs = /^on:?(?:Once|Passive|Capture)$/;
function is(e) {
    let t, n;
    for (; (n = e.match(ns)) && !rs.test(e); )
        t ||= {},
        e = e.slice(0, e.length - n[1].length),
        t[n[1].toLowerCase()] = !0;
    return [e[2] === `:` ? e.slice(3) : A(e.slice(2)), t]
}
var as = 0
  , os = Promise.resolve()
  , ss = () => as ||= (os.then( () => as = 0),
Date.now());
function cs(e, t) {
    let n = e => {
        if (!e._vts)
            e._vts = Date.now();
        else if (e._vts <= n.attached)
            return;
        let r = n.value;
        if (d(r)) {
            let n = e.stopImmediatePropagation;
            e.stopImmediatePropagation = () => {
                n.call(e),
                e._stopped = !0
            }
            ;
            let i = r.slice()
              , a = [e];
            for (let n = 0; n < i.length && !e._stopped; n++) {
                let e = i[n];
                e && un(e, t, 5, a)
            }
        } else
            un(r, t, 5, [e])
    }
    ;
    return n.value = e,
    n.attached = ss(),
    n
}
var ls = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , us = (e, t, n, r, i, s) => {
    let c = i === `svg`;
    t === `class` ? Fo(e, r, c) : t === `style` ? Ho(e, n, r) : a(t) ? o(t) || ts(e, t, n, r, s) : (t[0] === `.` ? (t = t.slice(1),
    !0) : t[0] === `^` ? (t = t.slice(1),
    !1) : ds(e, t, r, c)) ? (Zo(e, t, r),
    !e.tagName.includes(`-`) && (t === `value` || t === `checked` || t === `selected`) && Xo(e, t, r, c, s, t !== `value`)) : e._isVueCE && (fs(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Zo(e, O(t), r, s, t) : (t === `true-value` ? e._trueValue = r : t === `false-value` && (e._falseValue = r),
    Xo(e, t, r, c))
}
;
function ds(e, t, n, r) {
    if (r)
        return !!(t === `innerHTML` || t === `textContent` || t in e && ls(t) && h(n));
    if (t === `spellcheck` || t === `draggable` || t === `translate` || t === `autocorrect` || t === `sandbox` && e.tagName === `IFRAME` || t === `form` || t === `list` && e.tagName === `INPUT` || t === `type` && e.tagName === `TEXTAREA`)
        return !1;
    if (t === `width` || t === `height`) {
        let t = e.tagName;
        if (t === `IMG` || t === `VIDEO` || t === `CANVAS` || t === `SOURCE`)
            return !1
    }
    return ls(t) && g(n) ? !1 : t in e
}
function fs(e, t) {
    let n = e._def.props;
    if (!n)
        return !1;
    let r = O(t);
    return Array.isArray(n) ? n.some(e => O(e) === r) : Object.keys(n).some(e => O(e) === r)
}
var ps = e => {
    let t = e.props[`onUpdate:modelValue`] || !1;
    return d(t) ? e => P(t, e) : t
}
;
function ms(e) {
    e.target.composing = !0
}
function hs(e) {
    let t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event(`input`)))
}
var gs = Symbol(`_assign`)
  , _s = Symbol(`_initialValue`);
function vs(e, t, n) {
    return t && (e = e.trim()),
    n && (e = te(e)),
    e
}
var ys = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, i) {
        e.parentNode && (e.type === `text` ? e[_s] = e.defaultValue.replace(/[\r\n]/g, ``) : e.type === `textarea` && (e[_s] = e.defaultValue.replace(/\r\n?/g, `
`))),
        e[gs] = ps(i);
        let a = r || i.props && i.props.type === `number`;
        Qo(e, t ? `change` : `input`, t => {
            t.target.composing || e[gs](vs(e.value, n, a))
        }
        ),
        (n || a) && Qo(e, `change`, () => {
            e.value = vs(e.value, n, a)
        }
        ),
        t || (Qo(e, `compositionstart`, ms),
        Qo(e, `compositionend`, hs),
        Qo(e, `change`, hs))
    },
    mounted(e, {value: t, modifiers: {trim: n, number: r}}) {
        let i = t ?? ``
          , a = e[_s];
        delete e[_s],
        a !== void 0 && (e.type === `text` || e.type === `textarea`) && e.value !== a ? e[gs](vs(e.value, n, r)) : e.value = i
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: r, trim: i, number: a}}, o) {
        if (e[gs] = ps(o),
        e.composing)
            return;
        let s = (a || e.type === `number`) && !/^0\d/.test(e.value) ? te(e.value) : e.value
          , c = t ?? ``;
        if (s === c)
            return;
        let l = e.getRootNode();
        (l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== `range` && (r && t === n || i && e.value.trim() === c) || (e.value = c)
    }
}, bs = [`ctrl`, `shift`, `alt`, `meta`], xs = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => `button` in e && e.button !== 0,
    middle: e => `button` in e && e.button !== 1,
    right: e => `button` in e && e.button !== 2,
    exact: (e, t) => bs.some(n => e[`${n}Key`] && !t.includes(n))
}, Ss = (e, t) => {
    if (!e)
        return e;
    let n = e._withMods ||= {}
      , r = t.join(`.`);
    return n[r] || (n[r] = ( (n, ...r) => {
        for (let e = 0; e < t.length; e++) {
            let r = xs[t[e]];
            if (r && r(n, t))
                return
        }
        return e(n, ...r)
    }
    ))
}
, Cs = s({
    patchProp: us
}, mo), ws;
function Ts() {
    return ws ||= Qi(Cs)
}
var Es = ( (...e) => {
    let t = Ts().createApp(...e)
      , {mount: n} = t;
    return t.mount = e => {
        let r = Os(e);
        if (!r)
            return;
        let i = t._component;
        !h(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = ``);
        let a = n(r, !1, Ds(r));
        return r instanceof Element && (r.removeAttribute(`v-cloak`),
        r.setAttribute(`data-v-app`, ``)),
        a
    }
    ,
    t
}
);
function Ds(e) {
    if (e instanceof SVGElement)
        return `svg`;
    if (typeof MathMLElement == `function` && e instanceof MathMLElement)
        return `mathml`
}
function Os(e) {
    return g(e) ? document.querySelector(e) : e
}
var ks = typeof document < `u`;
function As(e) {
    return typeof e == `object` || `displayName` in e || `props` in e || `__vccOpts` in e
}
function js(e) {
    return e.__esModule || e[Symbol.toStringTag] === `Module` || e.default && As(e.default)
}
var Ms = Object.assign;
function Ns(e, t) {
    let n = {};
    for (let r in t) {
        let i = t[r];
        n[r] = Fs(i) ? i.map(e) : e(i)
    }
    return n
}
var Ps = () => {}
  , Fs = Array.isArray;
function Is(e, t) {
    let n = {};
    for (let r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
var Ls = /#/g
  , Rs = /&/g
  , zs = /\//g
  , Bs = /=/g
  , Vs = /\?/g
  , Hs = /\+/g
  , Us = /%5B/g
  , Ws = /%5D/g
  , Gs = /%5E/g
  , Ks = /%60/g
  , qs = /%7B/g
  , Js = /%7C/g
  , Ys = /%7D/g
  , Xs = /%20/g;
function Zs(e) {
    return e == null ? `` : encodeURI(`` + e).replace(Js, `|`).replace(Us, `[`).replace(Ws, `]`)
}
function Qs(e) {
    return Zs(e).replace(qs, `{`).replace(Ys, `}`).replace(Gs, `^`)
}
function $s(e) {
    return Zs(e).replace(Hs, `%2B`).replace(Xs, `+`).replace(Ls, `%23`).replace(Rs, `%26`).replace(Ks, "`").replace(qs, `{`).replace(Ys, `}`).replace(Gs, `^`)
}
function ec(e) {
    return $s(e).replace(Bs, `%3D`)
}
function tc(e) {
    return Zs(e).replace(Ls, `%23`).replace(Vs, `%3F`)
}
function nc(e) {
    return tc(e).replace(zs, `%2F`)
}
function rc(e) {
    if (e == null)
        return null;
    try {
        return decodeURIComponent(`` + e)
    } catch {}
    return `` + e
}
var ic = /\/$/
  , ac = e => e.replace(ic, ``);
function oc(e, t, n=`/`) {
    let r, i = {}, a = ``, o = ``, s = t.indexOf(`#`), c = t.indexOf(`?`);
    return c = s >= 0 && c > s ? -1 : c,
    c >= 0 && (r = t.slice(0, c),
    a = t.slice(c, s > 0 ? s : t.length),
    i = e(a.slice(1))),
    s >= 0 && (r ||= t.slice(0, s),
    o = t.slice(s, t.length)),
    r = mc(r ?? t, n),
    {
        fullPath: r + a + o,
        path: r,
        query: i,
        hash: rc(o)
    }
}
function sc(e, t) {
    let n = t.query ? e(t.query) : ``;
    return t.path + (n && `?`) + n + (t.hash || ``)
}
function cc(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || `/`
}
function lc(e, t, n) {
    let r = t.matched.length - 1
      , i = n.matched.length - 1;
    return r > -1 && r === i && uc(t.matched[r], n.matched[i]) && dc(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function uc(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function dc(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (var n in e)
        if (!fc(e[n], t[n]))
            return !1;
    return !0
}
function fc(e, t) {
    return Fs(e) ? pc(e, t) : Fs(t) ? pc(t, e) : e?.valueOf() === t?.valueOf()
}
function pc(e, t) {
    return Fs(t) ? e.length === t.length && e.every( (e, n) => e === t[n]) : e.length === 1 && e[0] === t
}
function mc(e, t) {
    if (e.startsWith(`/`))
        return e;
    if (!e)
        return t;
    let n = t.split(`/`)
      , r = e.split(`/`)
      , i = r[r.length - 1];
    (i === `..` || i === `.`) && r.push(``);
    let a = n.length - 1, o, s;
    for (o = 0; o < r.length; o++)
        if (s = r[o],
        s !== `.`)
            if (s === `..`)
                a > 1 && a--;
            else
                break;
    return n.slice(0, a).join(`/`) + `/` + r.slice(o).join(`/`)
}
var hc = {
    path: `/`,
    name: void 0,
    params: {},
    query: {},
    hash: ``,
    fullPath: `/`,
    matched: [],
    meta: {},
    redirectedFrom: void 0
}
  , gc = function(e) {
    return e.pop = `pop`,
    e.push = `push`,
    e
}({})
  , _c = function(e) {
    return e.back = `back`,
    e.forward = `forward`,
    e.unknown = ``,
    e
}({});
function vc(e) {
    if (!e)
        if (ks) {
            let t = document.querySelector(`base`);
            e = t && t.getAttribute(`href`) || `/`,
            e = e.replace(/^\w+:\/\/[^\/]+/, ``)
        } else
            e = `/`;
    return e[0] !== `/` && e[0] !== `#` && (e = `/` + e),
    ac(e)
}
var yc = /^[^#]+#/;
function bc(e, t) {
    return e.replace(yc, `#`) + t
}
function xc(e, t) {
    let n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
var Sc = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function Cc(e) {
    let t;
    if (`el` in e) {
        let n = e.el
          , r = typeof n == `string` && n.startsWith(`#`)
          , i = typeof n == `string` ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!i)
            return;
        t = xc(i, e)
    } else
        t = e;
    `scrollBehavior` in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top)
}
function wc(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
var Tc = new Map;
function Ec(e, t) {
    Tc.set(e, t)
}
function Dc(e) {
    let t = Tc.get(e);
    return Tc.delete(e),
    t
}
function Oc(e) {
    return typeof e == `string` || e && typeof e == `object`
}
function kc(e) {
    return typeof e == `string` || typeof e == `symbol`
}
var Ac = function(e) {
    return e[e.MATCHER_NOT_FOUND = 1] = `MATCHER_NOT_FOUND`,
    e[e.NAVIGATION_GUARD_REDIRECT = 2] = `NAVIGATION_GUARD_REDIRECT`,
    e[e.NAVIGATION_ABORTED = 4] = `NAVIGATION_ABORTED`,
    e[e.NAVIGATION_CANCELLED = 8] = `NAVIGATION_CANCELLED`,
    e[e.NAVIGATION_DUPLICATED = 16] = `NAVIGATION_DUPLICATED`,
    e
}({})
  , jc = Symbol(``);
Ac.MATCHER_NOT_FOUND,
Ac.NAVIGATION_GUARD_REDIRECT,
Ac.NAVIGATION_ABORTED,
Ac.NAVIGATION_CANCELLED,
Ac.NAVIGATION_DUPLICATED;
function Mc(e, t) {
    return Ms(Error(), {
        type: e,
        [jc]: !0
    }, t)
}
function Nc(e, t) {
    return e instanceof Error && jc in e && (t == null || !!(e.type & t))
}
function Pc(e) {
    let t = {};
    if (e === `` || e === `?`)
        return t;
    let n = (e[0] === `?` ? e.slice(1) : e).split(`&`);
    for (let e = 0; e < n.length; ++e) {
        let r = n[e].replace(Hs, ` `)
          , i = r.indexOf(`=`)
          , a = rc(i < 0 ? r : r.slice(0, i))
          , o = i < 0 ? null : rc(r.slice(i + 1));
        if (a in t) {
            let e = t[a];
            Fs(e) || (e = t[a] = [e]),
            e.push(o)
        } else
            t[a] = o
    }
    return t
}
function Fc(e) {
    let t = ``;
    for (let n in e) {
        let r = e[n];
        if (n = ec(n),
        r == null) {
            r !== void 0 && (t += (t.length ? `&` : ``) + n);
            continue
        }
        (Fs(r) ? r.map(e => e && $s(e)) : [r && $s(r)]).forEach(e => {
            e !== void 0 && (t += (t.length ? `&` : ``) + n,
            e != null && (t += `=` + e))
        }
        )
    }
    return t
}
function Ic(e) {
    let t = {};
    for (let n in e) {
        let r = e[n];
        r !== void 0 && (t[n] = Fs(r) ? r.map(e => e == null ? null : `` + e) : r == null ? r : `` + r)
    }
    return t
}
var Lc = Symbol(``)
  , Rc = Symbol(``)
  , zc = Symbol(``)
  , Bc = Symbol(``)
  , Vc = Symbol(``);
function Hc() {
    let e = [];
    function t(t) {
        return e.push(t),
        () => {
            let n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}
function Uc(e, t, n, r, i, a=e => e()) {
    let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
    return () => new Promise( (s, c) => {
        let l = e => {
            e === !1 ? c(Mc(Ac.NAVIGATION_ABORTED, {
                from: n,
                to: t
            })) : e instanceof Error ? c(e) : Oc(e) ? c(Mc(Ac.NAVIGATION_GUARD_REDIRECT, {
                from: t,
                to: e
            })) : (o && r.enterCallbacks[i] === o && typeof e == `function` && o.push(e),
            s())
        }
          , u = a( () => e.call(r && r.instances[i], t, n, l))
          , d = Promise.resolve(u);
        e.length < 3 && (d = d.then(l)),
        d.catch(e => c(e))
    }
    )
}
function Wc(e, t, n, r, i=e => e()) {
    let a = [];
    for (let o of e)
        for (let e in o.components) {
            let s = o.components[e];
            if (!(t !== `beforeRouteEnter` && !o.instances[e]))
                if (As(s)) {
                    let c = (s.__vccOpts || s)[t];
                    c && a.push(Uc(c, n, r, o, e, i))
                } else {
                    let c = s();
                    a.push( () => c.then(a => {
                        if (!a)
                            throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
                        let s = js(a) ? a.default : a;
                        o.mods[e] = a,
                        o.components[e] = s;
                        let c = (s.__vccOpts || s)[t];
                        return c && Uc(c, n, r, o, e, i)()
                    }
                    ))
                }
        }
    return a
}
function Gc(e, t) {
    let n = []
      , r = []
      , i = []
      , a = Math.max(t.matched.length, e.matched.length);
    for (let o = 0; o < a; o++) {
        let a = t.matched[o];
        a && (e.matched.find(e => uc(e, a)) ? r.push(a) : n.push(a));
        let s = e.matched[o];
        s && (t.matched.find(e => uc(e, s)) || i.push(s))
    }
    return [n, r, i]
}
var Kc = () => location.protocol + `//` + location.host;
function qc(e, t) {
    let {pathname: n, search: r, hash: i} = t
      , a = e.indexOf(`#`);
    if (a > -1) {
        let t = i.includes(e.slice(a)) ? e.slice(a).length : 1
          , n = i.slice(t);
        return n[0] !== `/` && (n = `/` + n),
        cc(n, ``)
    }
    return cc(n, e) + r + i
}
function Jc(e, t, n, r) {
    let i = []
      , a = []
      , o = null
      , s = ({state: a}) => {
        let s = qc(e, location)
          , c = n.value
          , l = t.value
          , u = 0;
        if (a) {
            if (n.value = s,
            t.value = a,
            o && o === c) {
                o = null;
                return
            }
            u = l ? a.position - l.position : 0
        } else
            r(s);
        i.forEach(e => {
            e(n.value, c, {
                delta: u,
                type: gc.pop,
                direction: u ? u > 0 ? _c.forward : _c.back : _c.unknown
            })
        }
        )
    }
    ;
    function c() {
        o = n.value
    }
    function l(e) {
        i.push(e);
        let t = () => {
            let t = i.indexOf(e);
            t > -1 && i.splice(t, 1)
        }
        ;
        return a.push(t),
        t
    }
    function u() {
        if (document.visibilityState === `hidden`) {
            let {history: e} = window;
            if (!e.state)
                return;
            e.replaceState(Ms({}, e.state, {
                scroll: Sc()
            }), ``)
        }
    }
    function d() {
        for (let e of a)
            e();
        a = [],
        window.removeEventListener(`popstate`, s),
        window.removeEventListener(`pagehide`, u),
        document.removeEventListener(`visibilitychange`, u)
    }
    return window.addEventListener(`popstate`, s),
    window.addEventListener(`pagehide`, u),
    document.addEventListener(`visibilitychange`, u),
    {
        pauseListeners: c,
        listen: l,
        destroy: d
    }
}
function Yc(e, t, n, r=!1, i=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: i ? Sc() : null
    }
}
function Xc(e) {
    let {history: t, location: n} = window
      , r = {
        value: qc(e, n)
    }
      , i = {
        value: t.state
    };
    i.value || a(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function a(r, a, o) {
        let s = e.indexOf(`#`)
          , c = s > -1 ? (n.host && document.querySelector(`base`) ? e : e.slice(s)) + r : Kc() + e + r;
        try {
            t[o ? `replaceState` : `pushState`](a, ``, c),
            i.value = a
        } catch (e) {
            console.error(e),
            n[o ? `replace` : `assign`](c)
        }
    }
    function o(e, n) {
        a(e, Ms({}, t.state, Yc(i.value.back, e, i.value.forward, !0), n, {
            position: i.value.position
        }), !0),
        r.value = e
    }
    function s(e, n) {
        let o = Ms({}, i.value, t.state, {
            forward: e,
            scroll: Sc()
        });
        a(o.current, o, !0),
        a(e, Ms({}, Yc(r.value, e, null), {
            position: o.position + 1
        }, n), !1),
        r.value = e
    }
    return {
        location: r,
        state: i,
        push: s,
        replace: o
    }
}
function Zc(e) {
    e = vc(e);
    let t = Xc(e)
      , n = Jc(e, t.state, t.location, t.replace);
    function r(e, t=!0) {
        t || n.pauseListeners(),
        history.go(e)
    }
    let i = Ms({
        location: ``,
        base: e,
        go: r,
        createHref: bc.bind(null, e)
    }, t, n);
    return Object.defineProperty(i, `location`, {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(i, `state`, {
        enumerable: !0,
        get: () => t.state.value
    }),
    i
}
var Qc = function(e) {
    return e[e.Static = 0] = `Static`,
    e[e.Param = 1] = `Param`,
    e[e.Group = 2] = `Group`,
    e
}({})
  , $c = function(e) {
    return e[e.Static = 0] = `Static`,
    e[e.Param = 1] = `Param`,
    e[e.ParamRegExp = 2] = `ParamRegExp`,
    e[e.ParamRegExpEnd = 3] = `ParamRegExpEnd`,
    e[e.EscapeNext = 4] = `EscapeNext`,
    e
}($c || {})
  , el = {
    type: Qc.Static,
    value: ``
}
  , tl = /[a-zA-Z0-9_]/;
function nl(e) {
    if (!e)
        return [[]];
    if (e === `/`)
        return [[el]];
    if (!e.startsWith(`/`))
        throw Error(`Invalid path "${e}"`);
    function t(e) {
        throw Error(`ERR (${n})/"${l}": ${e}`)
    }
    let n = $c.Static, r = n, i = [], a;
    function o() {
        a && i.push(a),
        a = []
    }
    let s = 0, c, l = ``, u = ``;
    function d() {
        l &&= (n === $c.Static ? a.push({
            type: Qc.Static,
            value: l
        }) : n === $c.Param || n === $c.ParamRegExp || n === $c.ParamRegExpEnd ? (a.length > 1 && (c === `*` || c === `+`) && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),
        a.push({
            type: Qc.Param,
            value: l,
            regexp: u,
            repeatable: c === `*` || c === `+`,
            optional: c === `*` || c === `?`
        })) : t(`Invalid state to consume buffer`),
        ``)
    }
    function f() {
        l += c
    }
    for (; s < e.length; ) {
        if (c = e[s++],
        c === `\\` && n !== $c.ParamRegExp) {
            r = n,
            n = $c.EscapeNext;
            continue
        }
        switch (n) {
        case $c.Static:
            c === `/` ? (l && d(),
            o()) : c === `:` ? (d(),
            n = $c.Param) : f();
            break;
        case $c.EscapeNext:
            f(),
            n = r;
            break;
        case $c.Param:
            c === `(` ? n = $c.ParamRegExp : tl.test(c) ? f() : (d(),
            n = $c.Static,
            c !== `*` && c !== `?` && c !== `+` && s--);
            break;
        case $c.ParamRegExp:
            c === `)` ? u[u.length - 1] == `\\` ? u = u.slice(0, -1) + c : n = $c.ParamRegExpEnd : u += c;
            break;
        case $c.ParamRegExpEnd:
            d(),
            n = $c.Static,
            c !== `*` && c !== `?` && c !== `+` && s--,
            u = ``;
            break;
        default:
            t(`Unknown state`);
            break
        }
    }
    return n === $c.ParamRegExp && t(`Unfinished custom RegExp for param "${l}"`),
    d(),
    o(),
    i
}
var rl = `[^/]+?`
  , il = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , al = function(e) {
    return e[e._multiplier = 10] = `_multiplier`,
    e[e.Root = 90] = `Root`,
    e[e.Segment = 40] = `Segment`,
    e[e.SubSegment = 30] = `SubSegment`,
    e[e.Static = 40] = `Static`,
    e[e.Dynamic = 20] = `Dynamic`,
    e[e.BonusCustomRegExp = 10] = `BonusCustomRegExp`,
    e[e.BonusWildcard = -50] = `BonusWildcard`,
    e[e.BonusRepeatable = -20] = `BonusRepeatable`,
    e[e.BonusOptional = -8] = `BonusOptional`,
    e[e.BonusStrict = .7000000000000001] = `BonusStrict`,
    e[e.BonusCaseSensitive = .25] = `BonusCaseSensitive`,
    e
}(al || {})
  , ol = /[.+*?^${}()[\]/\\]/g;
function sl(e, t) {
    let n = Ms({}, il, t)
      , r = []
      , i = n.start ? `^` : ``
      , a = [];
    for (let t of e) {
        let e = t.length ? [] : [al.Root];
        n.strict && !t.length && (i += `/`);
        for (let r = 0; r < t.length; r++) {
            let o = t[r]
              , s = al.Segment + (n.sensitive ? al.BonusCaseSensitive : 0);
            if (o.type === Qc.Static)
                r || (i += `/`),
                i += o.value.replace(ol, `\\$&`),
                s += al.Static;
            else if (o.type === Qc.Param) {
                let {value: e, repeatable: n, optional: c, regexp: l} = o;
                a.push({
                    name: e,
                    repeatable: n,
                    optional: c
                });
                let u = l || rl;
                if (u !== rl) {
                    s += al.BonusCustomRegExp;
                    try {
                        `${u}`
                    } catch (t) {
                        throw Error(`Invalid custom RegExp for param "${e}" (${u}): ` + t.message)
                    }
                }
                let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
                r || (d = c && t.length < 2 ? `(?:/${d})` : `/` + d),
                c && (d += `?`),
                i += d,
                s += al.Dynamic,
                c && (s += al.BonusOptional),
                n && (s += al.BonusRepeatable),
                u === `.*` && (s += al.BonusWildcard)
            }
            e.push(s)
        }
        r.push(e)
    }
    if (n.strict && n.end) {
        let e = r.length - 1;
        r[e][r[e].length - 1] += al.BonusStrict
    }
    n.strict || (i += `/?`),
    n.end ? i += `$` : n.strict && !i.endsWith(`/`) && (i += `(?:/|$)`);
    let o = new RegExp(i,n.sensitive ? `` : `i`);
    function s(e) {
        let t = e.match(o)
          , n = {};
        if (!t)
            return null;
        for (let e = 1; e < t.length; e++) {
            let r = t[e] || ``
              , i = a[e - 1];
            n[i.name] = r && i.repeatable ? r.split(`/`) : r
        }
        return n
    }
    function c(t) {
        let n = ``
          , r = !1;
        for (let i of e) {
            (!r || !n.endsWith(`/`)) && (n += `/`),
            r = !1;
            for (let e of i)
                if (e.type === Qc.Static)
                    n += e.value;
                else if (e.type === Qc.Param) {
                    let {value: a, repeatable: o, optional: s} = e
                      , c = a in t ? t[a] : ``;
                    if (Fs(c) && !o)
                        throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
                    let l = Fs(c) ? c.join(`/`) : c;
                    if (!l)
                        if (s)
                            i.length < 2 && (n.endsWith(`/`) ? n = n.slice(0, -1) : r = !0);
                        else
                            throw Error(`Missing required param "${a}"`);
                    n += l
                }
        }
        return n || `/`
    }
    return {
        re: o,
        score: r,
        keys: a,
        parse: s,
        stringify: c
    }
}
function cl(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        let r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === al.Static + al.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === al.Static + al.Segment ? 1 : -1 : 0
}
function ll(e, t) {
    let n = 0
      , r = e.score
      , i = t.score;
    for (; n < r.length && n < i.length; ) {
        let e = cl(r[n], i[n]);
        if (e)
            return e;
        n++
    }
    if (Math.abs(i.length - r.length) === 1) {
        if (ul(r))
            return 1;
        if (ul(i))
            return -1
    }
    return i.length - r.length
}
function ul(e) {
    let t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
var dl = {
    strict: !1,
    end: !0,
    sensitive: !1
};
function fl(e, t, n) {
    let r = Ms(sl(nl(e.path), n), {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r),
    r
}
function pl(e, t) {
    let n = []
      , r = new Map;
    t = Is(dl, t);
    function i(e) {
        return r.get(e)
    }
    function a(e, n, r) {
        let i = !r
          , s = hl(e);
        s.aliasOf = r && r.record;
        let l = Is(t, e)
          , u = [s];
        if (`alias` in e) {
            let t = typeof e.alias == `string` ? [e.alias] : e.alias;
            for (let e of t)
                u.push(hl(Ms({}, s, {
                    components: r ? r.record.components : s.components,
                    path: e,
                    aliasOf: r ? r.record : s
                })))
        }
        let d, f;
        for (let t of u) {
            let {path: u} = t;
            if (n && u[0] !== `/`) {
                let e = n.record.path
                  , r = e[e.length - 1] === `/` ? `` : `/`;
                t.path = n.record.path + (u && r + u)
            }
            if (d = fl(t, n, l),
            r ? r.alias.push(d) : (f ||= d,
            f !== d && f.alias.push(d),
            i && e.name && !_l(d) && o(e.name)),
            xl(d) && c(d),
            s.children) {
                let e = s.children;
                for (let t = 0; t < e.length; t++)
                    a(e[t], d, r && r.children[t])
            }
            r ||= d
        }
        return f ? () => {
            o(f)
        }
        : Ps
    }
    function o(e) {
        if (kc(e)) {
            let t = r.get(e);
            t && (r.delete(e),
            n.splice(n.indexOf(t), 1),
            t.children.forEach(o),
            t.alias.forEach(o))
        } else {
            let t = n.indexOf(e);
            t > -1 && (n.splice(t, 1),
            e.record.name && r.delete(e.record.name),
            e.children.forEach(o),
            e.alias.forEach(o))
        }
    }
    function s() {
        return n
    }
    function c(e) {
        let t = yl(e, n);
        n.splice(t, 0, e),
        e.record.name && !_l(e) && r.set(e.record.name, e)
    }
    function l(e, t) {
        let i, a = {}, o, s;
        if (`name` in e && e.name) {
            if (i = r.get(e.name),
            !i)
                throw Mc(Ac.MATCHER_NOT_FOUND, {
                    location: e
                });
            s = i.record.name,
            a = Ms(ml(t.params, i.keys.filter(e => !e.optional).concat(i.parent ? i.parent.keys.filter(e => e.optional) : []).map(e => e.name)), e.params && ml(e.params, i.keys.map(e => e.name))),
            o = i.stringify(a)
        } else if (e.path != null)
            o = e.path,
            i = n.find(e => e.re.test(o)),
            i && (a = i.parse(o),
            s = i.record.name);
        else {
            if (i = t.name ? r.get(t.name) : n.find(e => e.re.test(t.path)),
            !i)
                throw Mc(Ac.MATCHER_NOT_FOUND, {
                    location: e,
                    currentLocation: t
                });
            s = i.record.name,
            a = Ms({}, t.params, e.params),
            o = i.stringify(a)
        }
        let c = []
          , l = i;
        for (; l; )
            c.unshift(l.record),
            l = l.parent;
        return {
            name: s,
            path: o,
            params: a,
            matched: c,
            meta: vl(c)
        }
    }
    e.forEach(e => a(e));
    function u() {
        n.length = 0,
        r.clear()
    }
    return {
        addRoute: a,
        resolve: l,
        removeRoute: o,
        clearRoutes: u,
        getRoutes: s,
        getRecordMatcher: i
    }
}
function ml(e, t) {
    let n = {};
    for (let r of t)
        r in e && (n[r] = e[r]);
    return n
}
function hl(e) {
    let t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: gl(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: `components` in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, `mods`, {
        value: {}
    }),
    t
}
function gl(e) {
    let t = {}
      , n = e.props || !1;
    if (`component` in e)
        t.default = n;
    else
        for (let r in e.components)
            t[r] = typeof n == `object` ? n[r] : n;
    return t
}
function _l(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function vl(e) {
    return e.reduce( (e, t) => Ms(e, t.meta), {})
}
function yl(e, t) {
    let n = 0
      , r = t.length;
    for (; n !== r; ) {
        let i = n + r >> 1;
        ll(e, t[i]) < 0 ? r = i : n = i + 1
    }
    let i = bl(e);
    return i && (r = t.lastIndexOf(i, r - 1)),
    r
}
function bl(e) {
    let t = e;
    for (; t = t.parent; )
        if (xl(t) && ll(e, t) === 0)
            return t
}
function xl({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}
function Sl(e) {
    let t = Fn(zc)
      , n = Fn(Bc)
      , r = ro( () => {
        let n = Jt(e.to);
        return t.resolve(n)
    }
    )
      , i = ro( () => {
        let {matched: e} = r.value
          , {length: t} = e
          , i = e[t - 1]
          , a = n.matched;
        if (!i || !a.length)
            return -1;
        let o = a.findIndex(uc.bind(null, i));
        if (o > -1)
            return o;
        let s = Dl(e[t - 2]);
        return t > 1 && Dl(i) === s && a[a.length - 1].path !== s ? a.findIndex(uc.bind(null, e[t - 2])) : o
    }
    )
      , a = ro( () => i.value > -1 && El(n.params, r.value.params))
      , o = ro( () => i.value > -1 && i.value === n.matched.length - 1 && dc(n.params, r.value.params));
    function s(n={}) {
        if (Tl(n)) {
            let n = t[Jt(e.replace) ? `replace` : `push`](Jt(e.to)).catch(Ps);
            return e.viewTransition && typeof document < `u` && `startViewTransition` in document && document.startViewTransition( () => n),
            n
        }
        return Promise.resolve()
    }
    return {
        route: r,
        href: ro( () => r.value.href),
        isActive: a,
        isExactActive: o,
        navigate: s
    }
}
function Cl(e) {
    return e.length === 1 ? e[0] : e
}
var wl = vr({
    name: `RouterLink`,
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: `page`
        },
        viewTransition: Boolean
    },
    useLink: Sl,
    setup(e, {slots: t}) {
        let n = jt(Sl(e))
          , {options: r} = Fn(zc)
          , i = ro( () => ({
            [Ol(e.activeClass, r.linkActiveClass, `router-link-active`)]: n.isActive,
            [Ol(e.exactActiveClass, r.linkExactActiveClass, `router-link-exact-active`)]: n.isExactActive
        }));
        return () => {
            let r = t.default && Cl(t.default(n));
            return e.custom ? r : io(`a`, {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value
            }, r)
        }
    }
});
function Tl(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            let t = e.currentTarget.getAttribute(`target`);
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function El(e, t) {
    for (let n in t) {
        let r = t[n]
          , i = e[n];
        if (typeof r == `string`) {
            if (r !== i)
                return !1
        } else if (!Fs(i) || i.length !== r.length || r.some( (e, t) => e.valueOf() !== i[t].valueOf()))
            return !1
    }
    return !0
}
function Dl(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ``
}
var Ol = (e, t, n) => e ?? t ?? n
  , kl = vr({
    name: `RouterView`,
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: `default`
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        let r = Fn(Vc)
          , i = ro( () => e.route || r.value)
          , a = Fn(Rc, 0)
          , o = ro( () => {
            let e = Jt(a), {matched: t} = i.value, n;
            for (; (n = t[e]) && !n.components; )
                e++;
            return e
        }
        )
          , s = ro( () => i.value.matched[o.value]);
        Pn(Rc, ro( () => o.value + 1)),
        Pn(Lc, s),
        Pn(Vc, i);
        let c = Wt();
        return zn( () => [c.value, s.value, e.name], ([e,t,n], [r,i,a]) => {
            t && (t.instances[n] = e,
            i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards),
            t.updateGuards.size || (t.updateGuards = i.updateGuards))),
            e && t && (!i || !uc(t, i) || !r) && (t.enterCallbacks[n] || []).forEach(t => t(e))
        }
        , {
            flush: `post`
        }),
        () => {
            let r = i.value
              , a = e.name
              , o = s.value
              , l = o && o.components[a];
            if (!l)
                return Al(n.default, {
                    Component: l,
                    route: r
                });
            let u = o.props[a]
              , d = io(l, Ms({}, u ? u === !0 ? r.params : typeof u == `function` ? u(r) : u : null, t, {
                onVnodeUnmounted: e => {
                    e.component.isUnmounted && (o.instances[a] = null)
                }
                ,
                ref: c
            }));
            return Al(n.default, {
                Component: d,
                route: r
            }) || d
        }
    }
});
function Al(e, t) {
    if (!e)
        return null;
    let n = e(t);
    return n.length === 1 ? n[0] : n
}
var jl = kl;
function Ml(e) {
    let t = pl(e.routes, e)
      , n = e.parseQuery || Pc
      , r = e.stringifyQuery || Fc
      , i = e.history
      , a = Hc()
      , o = Hc()
      , s = Hc()
      , c = Gt(hc)
      , l = hc;
    ks && e.scrollBehavior && `scrollRestoration` in history && (history.scrollRestoration = `manual`);
    let u = Ns.bind(null, e => `` + e)
      , d = Ns.bind(null, nc)
      , f = Ns.bind(null, rc);
    function p(e, n) {
        let r, i;
        return kc(e) ? (r = t.getRecordMatcher(e),
        i = n) : i = e,
        t.addRoute(i, r)
    }
    function m(e) {
        let n = t.getRecordMatcher(e);
        n && t.removeRoute(n)
    }
    function h() {
        return t.getRoutes().map(e => e.record)
    }
    function g(e) {
        return !!t.getRecordMatcher(e)
    }
    function _(e, a) {
        if (a = Ms({}, a || c.value),
        typeof e == `string`) {
            let r = oc(n, e, a.path)
              , o = t.resolve({
                path: r.path
            }, a)
              , s = i.createHref(r.fullPath);
            return Ms(r, o, {
                params: f(o.params),
                hash: rc(r.hash),
                redirectedFrom: void 0,
                href: s
            })
        }
        let o;
        if (e.path != null)
            o = Ms({}, e, {
                path: oc(n, e.path, a.path).path
            });
        else {
            let t = Ms({}, e.params);
            for (let e in t)
                t[e] ?? delete t[e];
            o = Ms({}, e, {
                params: d(t)
            }),
            a.params = d(a.params)
        }
        let s = t.resolve(o, a)
          , l = e.hash || ``;
        s.params = u(f(s.params));
        let p = sc(r, Ms({}, e, {
            hash: Qs(l),
            path: s.path
        }))
          , m = i.createHref(p);
        return Ms({
            fullPath: p,
            hash: l,
            query: r === Fc ? Ic(e.query) : e.query || {}
        }, s, {
            redirectedFrom: void 0,
            href: m
        })
    }
    function v(e) {
        return typeof e == `string` ? oc(n, e, c.value.path) : Ms({}, e)
    }
    function y(e, t) {
        if (l !== e)
            return Mc(Ac.NAVIGATION_CANCELLED, {
                from: t,
                to: e
            })
    }
    function b(e) {
        return C(e)
    }
    function x(e) {
        return b(Ms(v(e), {
            replace: !0
        }))
    }
    function S(e, t) {
        let n = e.matched[e.matched.length - 1];
        if (n && n.redirect) {
            let {redirect: r} = n
              , i = typeof r == `function` ? r(e, t) : r;
            return typeof i == `string` && (i = i.includes(`?`) || i.includes(`#`) ? i = v(i) : {
                path: i
            },
            i.params = {}),
            Ms({
                query: e.query,
                hash: e.hash,
                params: i.path == null ? e.params : {}
            }, i)
        }
    }
    function C(e, t) {
        let n = l = _(e)
          , i = c.value
          , a = e.state
          , o = e.force
          , s = e.replace === !0
          , u = S(n, i);
        if (u)
            return C(Ms(v(u), {
                state: typeof u == `object` ? Ms({}, a, u.state) : a,
                force: o,
                replace: s
            }), t || n);
        let d = n;
        d.redirectedFrom = t;
        let f;
        return !o && lc(r, i, n) && (f = Mc(Ac.NAVIGATION_DUPLICATED, {
            to: d,
            from: i
        }),
        ne(i, i, !0, !1)),
        (f ? Promise.resolve(f) : E(d, i)).catch(e => Nc(e) ? Nc(e, Ac.NAVIGATION_GUARD_REDIRECT) ? e : te(e) : P(e, d, i)).then(e => {
            if (e) {
                if (Nc(e, Ac.NAVIGATION_GUARD_REDIRECT))
                    return C(Ms({
                        replace: s
                    }, v(e.to), {
                        state: typeof e.to == `object` ? Ms({}, a, e.to.state) : a,
                        force: o
                    }), t || d)
            } else
                e = O(d, i, !0, s, a);
            return D(d, i, e),
            e
        }
        )
    }
    function w(e, t) {
        let n = y(e, t);
        return n ? Promise.reject(n) : Promise.resolve()
    }
    function T(e) {
        let t = F.values().next().value;
        return t && typeof t.runWithContext == `function` ? t.runWithContext(e) : e()
    }
    function E(e, t) {
        let n, [r,i,s] = Gc(e, t);
        n = Wc(r.reverse(), `beforeRouteLeave`, e, t);
        for (let i of r)
            i.leaveGuards.forEach(r => {
                n.push(Uc(r, e, t))
            }
            );
        let c = w.bind(null, e, t);
        return n.push(c),
        oe(n).then( () => {
            n = [];
            for (let r of a.list())
                n.push(Uc(r, e, t));
            return n.push(c),
            oe(n)
        }
        ).then( () => {
            n = Wc(i, `beforeRouteUpdate`, e, t);
            for (let r of i)
                r.updateGuards.forEach(r => {
                    n.push(Uc(r, e, t))
                }
                );
            return n.push(c),
            oe(n)
        }
        ).then( () => {
            n = [];
            for (let r of s)
                if (r.beforeEnter)
                    if (Fs(r.beforeEnter))
                        for (let i of r.beforeEnter)
                            n.push(Uc(i, e, t));
                    else
                        n.push(Uc(r.beforeEnter, e, t));
            return n.push(c),
            oe(n)
        }
        ).then( () => (e.matched.forEach(e => e.enterCallbacks = {}),
        n = Wc(s, `beforeRouteEnter`, e, t, T),
        n.push(c),
        oe(n))).then( () => {
            n = [];
            for (let r of o.list())
                n.push(Uc(r, e, t));
            return n.push(c),
            oe(n)
        }
        ).catch(e => Nc(e, Ac.NAVIGATION_CANCELLED) ? e : Promise.reject(e))
    }
    function D(e, t, n) {
        s.list().forEach(r => T( () => r(e, t, n)))
    }
    function O(e, t, n, r, a) {
        let o = y(e, t);
        if (o)
            return o;
        let s = t === hc
          , l = ks ? history.state : {};
        n && (r || s ? i.replace(e.fullPath, Ms({
            scroll: s && l && l.scroll
        }, a)) : i.push(e.fullPath, a)),
        c.value = e,
        ne(e, t, n, s),
        te()
    }
    let k;
    function A() {
        k ||= i.listen( (e, t, n) => {
            if (!ae.listening)
                return;
            let r = _(e)
              , a = S(r, ae.currentRoute.value);
            if (a) {
                C(Ms(a, {
                    replace: !0,
                    force: !0
                }), r).catch(Ps);
                return
            }
            l = r;
            let o = c.value;
            ks && Ec(wc(o.fullPath, n.delta), Sc()),
            E(r, o).catch(e => Nc(e, Ac.NAVIGATION_ABORTED | Ac.NAVIGATION_CANCELLED) ? e : Nc(e, Ac.NAVIGATION_GUARD_REDIRECT) ? (C(Ms(v(e.to), {
                force: !0
            }), r).then(e => {
                Nc(e, Ac.NAVIGATION_ABORTED | Ac.NAVIGATION_DUPLICATED) && !n.delta && n.type === gc.pop && i.go(-1, !1)
            }
            ).catch(Ps),
            Promise.reject()) : (n.delta && i.go(-n.delta, !1),
            P(e, r, o))).then(e => {
                e ||= O(r, o, !1),
                e && (n.delta && !Nc(e, Ac.NAVIGATION_CANCELLED) ? i.go(-n.delta, !1) : n.type === gc.pop && Nc(e, Ac.NAVIGATION_ABORTED | Ac.NAVIGATION_DUPLICATED) && i.go(-1, !1)),
                D(r, o, e)
            }
            ).catch(Ps)
        }
        )
    }
    let j = Hc(), M = Hc(), N;
    function P(e, t, n) {
        te(e);
        let r = M.list();
        return r.length ? r.forEach(r => r(e, t, n)) : console.error(e),
        Promise.reject(e)
    }
    function ee() {
        return N && c.value !== hc ? Promise.resolve() : new Promise( (e, t) => {
            j.add([e, t])
        }
        )
    }
    function te(e) {
        return N || (N = !e,
        A(),
        j.list().forEach( ([t,n]) => e ? n(e) : t()),
        j.reset()),
        e
    }
    function ne(t, n, r, i) {
        let {scrollBehavior: a} = e;
        if (!ks || !a)
            return Promise.resolve();
        let o = !r && Dc(wc(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
        return bn().then( () => a(t, n, o)).then(e => e && Cc(e)).catch(e => P(e, t, n))
    }
    let re = e => i.go(e), ie, F = new Set, ae = {
        currentRoute: c,
        listening: !0,
        addRoute: p,
        removeRoute: m,
        clearRoutes: t.clearRoutes,
        hasRoute: g,
        getRoutes: h,
        resolve: _,
        options: e,
        push: b,
        replace: x,
        go: re,
        back: () => re(-1),
        forward: () => re(1),
        beforeEach: a.add,
        beforeResolve: o.add,
        afterEach: s.add,
        onError: M.add,
        isReady: ee,
        install(e) {
            e.component(`RouterLink`, wl),
            e.component(`RouterView`, jl),
            e.config.globalProperties.$router = ae,
            Object.defineProperty(e.config.globalProperties, `$route`, {
                enumerable: !0,
                get: () => Jt(c)
            }),
            ks && !ie && c.value === hc && (ie = !0,
            b(i.location).catch(e => {}
            ));
            let t = {};
            for (let e in hc)
                Object.defineProperty(t, e, {
                    get: () => c.value[e],
                    enumerable: !0
                });
            e.provide(zc, ae),
            e.provide(Bc, Mt(t)),
            e.provide(Vc, c);
            let n = e.unmount;
            F.add(e),
            e.unmount = function() {
                F.delete(e),
                F.size < 1 && (l = hc,
                k && k(),
                k = null,
                c.value = hc,
                ie = !1,
                N = !1),
                n()
            }
        }
    };
    function oe(e) {
        return e.reduce( (e, t) => e.then( () => T(t)), Promise.resolve())
    }
    return ae
}
var J = (e, t) => {
    let n = e.__vccOpts || e;
    for (let[e,r] of t)
        n[e] = r;
    return n
}
  , Nl = {};
function Pl(e, t, n, r, i, a) {
    let o = V(`RouterView`);
    return W(),
    ya(o)
}
var Fl = J(Nl, [[`render`, Pl]])
  , Il = {
    name: `AppFooter`,
    props: {
        logo: {
            type: String,
            default: `/sji.svg`
        },
        company: {
            type: String,
            default: `PT Simple Journey`
        },
        address: {
            type: String,
            default: `Ruko Cendana, Jl. Benteng Betawi No.37, RT.004/RW.015, Tanah Tinggi, Kec. Tangerang, Kota Tangerang, Banten 15119`
        },
        menus: {
            type: Array,
            default: () => [{
                label: `Home`,
                link: `/`
            }, {
                label: `About`,
                link: `/about`
            }, {
                label: `Services`,
                link: `/services`
            }, {
                label: `Contact`,
                link: `/contact`
            }]
        },
        socials: {
            type: Array,
            default: () => [{
                name: `Facebook`,
                link: `https://facebook.com`,
                icon: `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg`
            }, {
                name: `X`,
                link: `https://twitter.com`,
                icon: `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg`
            }, {
                name: `Instagram`,
                link: `https://instagram.com`,
                icon: `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg`
            }, {
                name: `Whatsapp`,
                link: `https://whatsapp.com`,
                icon: `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg`
            }]
        }
    },
    computed: {
        year() {
            return new Date().getFullYear()
        }
    }
}
  , Ll = {
    class: `footer`
}
  , Rl = {
    class: `top`
}
  , zl = {
    class: `brand`
}
  , Bl = {
    class: `logo`
}
  , Vl = [`src`]
  , Hl = {
    class: `set-flex`
}
  , Ul = {
    class: `address`
}
  , Wl = {
    class: `bottom`
}
  , Gl = {
    class: `copyright`
}
  , Kl = {
    class: `socials`
}
  , ql = [`href`]
  , Jl = [`src`, `alt`];
function Yl(e, t, n, r, i, a) {
    return W(),
    G(`footer`, Ll, [K(`div`, Rl, [K(`div`, zl, [K(`div`, Bl, [K(`img`, {
        src: n.logo,
        alt: `Simple Journey`
    }, null, 8, Vl), t[0] ||= K(`span`, {
        class: `text`
    }, `Simple Journey`, -1)]), K(`div`, Hl, [K(`p`, Ul, R(n.address), 1)])])]), t[2] ||= K(`div`, {
        class: `divider`
    }, null, -1), K(`div`, Wl, [K(`span`, Gl, [Da(` © ` + R(a.year) + ` ` + R(n.company) + `. All Rights Reserved. | `, 1), t[1] ||= K(`a`, {
        href: `/privacy-policy`,
        class: `footer-link`
    }, `Privacy Policy`, -1)]), K(`div`, Kl, [(W(!0),
    G(U, null, H(n.socials, e => (W(),
    G(`a`, {
        key: e.name,
        href: e.link,
        target: `_blank`,
        rel: `noopener`
    }, [K(`img`, {
        src: e.icon,
        alt: e.name
    }, null, 8, Jl)], 8, ql))), 128))])])])
}
var Xl = J(Il, [[`render`, Yl], [`__scopeId`, `data-v-468a0494`]])
  , Zl = {
    name: `HeroCenterSection`,
    props: {
        title: {
            type: String,
            default: `Accelerating Your Digital Transformation`
        },
        description: {
            type: String,
            default: `Enterprise-grade solutions for scalable, secure, and future-ready systems.`
        },
        badge: {
            type: String,
            default: `DIGITAL SOLUTIONS`
        },
        backgroundImage: {
            type: String,
            default: `https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80`
        }
    }
}
  , Ql = {
    class: `content`
}
  , $l = {
    key: 0,
    class: `badge`
}
  , eu = {
    key: 0
};
function tu(e, t, n, r, i, a) {
    return W(),
    G(`section`, {
        class: `hero-center`,
        style: F({
            backgroundImage: `url(${n.backgroundImage})`
        })
    }, [t[0] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, Ql, [Yr(e.$slots, `badge`, {}, () => [n.badge ? (W(),
    G(`span`, $l, R(n.badge), 1)) : ka(``, !0)], !0), K(`h1`, null, R(n.title), 1), n.description ? (W(),
    G(`p`, eu, R(n.description), 1)) : ka(``, !0), Yr(e.$slots, `default`, {}, void 0, !0)])], 4)
}
var nu = J(Zl, [[`render`, tu], [`__scopeId`, `data-v-4ff0f99e`]])
  , ru = {
    name: `ContactButton`
}
  , iu = {
    href: `/contact`,
    class: `link-wrapper`
}
  , au = {
    class: `contact-btn`
}
  , ou = {
    class: `content`
};
function su(e, t, n, r, i, a) {
    return W(),
    G(`a`, iu, [K(`button`, au, [K(`span`, ou, [Yr(e.$slots, `default`, {}, () => [t[0] ||= Da(`Contact Us`, -1)], !0), t[1] ||= K(`img`, {
        class: `icon`,
        src: `/arrow.png`
    }, null, -1)])])])
}
var cu = J(ru, [[`render`, su], [`__scopeId`, `data-v-86d9ff63`]])
  , lu = {
    name: `FeatureCard`,
    props: {
        number: {
            type: [String, Number],
            required: !0
        },
        title: {
            type: String,
            required: !0
        },
        description: {
            type: String,
            required: !0
        },
        animate: {
            type: Boolean
        },
        status: {
            type: Boolean
        },
        delay: {
            type: Number
        }
    }
}
  , uu = {
    class: `feature-card`
}
  , du = {
    class: `feature-header`
}
  , fu = {
    class: `feature-number`
}
  , pu = {
    class: `feature-title`
}
  , mu = {
    class: `feature-description`
};
function hu(e, t, n, r, i, a) {
    return W(),
    G(`div`, uu, [K(`div`, du, [K(`div`, fu, R(n.number), 1), K(`h3`, pu, R(n.title), 1)]), t[0] ||= K(`div`, {
        class: `divider`
    }, null, -1), K(`p`, mu, R(n.description), 1)])
}
var gu = J(lu, [[`render`, hu], [`__scopeId`, `data-v-9d313a25`]])
  , _u = {
    name: `Navbar`,
    components: {
        ContactButton: cu
    },
    data() {
        return {
            isOpen: !1,
            isScrolled: !1,
            currentPath: window.location.pathname,
            menus: [{
                label: `Home`,
                link: `/`
            }, {
                label: `Services`,
                link: `/services`
            }, {
                label: `Products`,
                link: `/products`
            }, {
                label: `About`,
                link: `/about`
            }, {
                label: `Career`,
                link: `/career`
            }]
        }
    },
    mounted() {
        window.addEventListener(`scroll`, this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener(`scroll`, this.handleScroll)
    },
    watch: {
        isOpen(e) {
            document.body.style.overflow = e ? `hidden` : ``
        }
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 50
        },
        toggleMenu() {
            this.isOpen = !this.isOpen
        },
        isActive(e) {
            return !!(e === `/` && this.currentPath === `/` || e !== `/` && this.currentPath.startsWith(e))
        }
    }
}
  , vu = {
    class: `container-wrapper`
}
  , yu = {
    class: `right`
}
  , bu = {
    class: `menu desktop`
}
  , xu = [`href`]
  , Su = {
    key: 0,
    class: `mobile-menu`
}
  , Cu = {
    style: {
        display: `flex`,
        position: `absolute`,
        top: `80px`,
        "flex-direction": `column`,
        "align-items": `center`,
        gap: `2.3rem`
    }
}
  , wu = [`href`];
function Tu(e, t, n, r, i, a) {
    let o = V(`ContactButton`);
    return W(),
    G(U, null, [K(`div`, vu, [K(`nav`, {
        class: I([`navbar`, {
            scrolled: i.isScrolled
        }])
    }, [t[3] ||= K(`div`, {
        class: `logo`
    }, [K(`img`, {
        src: `/sji_icon.png`,
        alt: `SJI Logo`,
        height: `50`
    })], -1), K(`div`, yu, [K(`ul`, bu, [(W(!0),
    G(U, null, H(i.menus, e => (W(),
    G(`li`, {
        key: e.label
    }, [K(`a`, {
        href: e.link,
        class: I([`menu-link`, {
            active: a.isActive(e.link)
        }])
    }, R(e.label), 11, xu)]))), 128)), q(o, {
        class: `desktop`
    })]), q(o, {
        class: `mobile-contact`
    }), K(`button`, {
        class: `hamburger`,
        onClick: t[0] ||= (...e) => a.toggleMenu && a.toggleMenu(...e)
    }, [K(`span`, {
        class: I({
            open: i.isOpen
        })
    }, null, 2), K(`span`, {
        class: I({
            open: i.isOpen
        })
    }, null, 2), K(`span`, {
        class: I({
            open: i.isOpen
        })
    }, null, 2), K(`span`, {
        class: I({
            open: i.isOpen
        })
    }, null, 2)])])], 2)]), q(bo, {
        "enter-active-class": `animate__animated animate__fadeInRight`,
        "leave-active-class": `animate__animated animate__fadeOutRight`
    }, {
        default: Mn( () => [i.isOpen ? (W(),
        G(`div`, Su, [K(`button`, {
            class: `hamburger position-close`,
            onClick: t[1] ||= (...e) => a.toggleMenu && a.toggleMenu(...e)
        }, [K(`span`, {
            class: I({
                open: i.isOpen
            })
        }, null, 2), K(`span`, {
            class: I({
                open: i.isOpen
            })
        }, null, 2), K(`span`, {
            class: I({
                open: i.isOpen
            })
        }, null, 2), K(`span`, {
            class: I({
                open: i.isOpen
            })
        }, null, 2)]), K(`div`, Cu, [(W(!0),
        G(U, null, H(i.menus, e => (W(),
        G(`a`, {
            key: e.label,
            href: e.link,
            class: I({
                active: a.isActive(e.link)
            }),
            onClick: t[2] ||= e => i.isOpen = !1
        }, R(e.label), 11, wu))), 128))])])) : ka(``, !0)]),
        _: 1
    })], 64)
}
var Eu = J(_u, [[`render`, Tu], [`__scopeId`, `data-v-aac37128`]])
  , Du = {
    name: `HeroSection`,
    components: {
        Navbar: Eu
    },
    data() {
        return {
            isVisible: !1
        }
    },
    mounted() {
        setTimeout( () => {
            this.isVisible = !0
        }
        , 100)
    }
}
  , Ou = {
    class: `hero`,
    ref: `heroSection`
}
  , ku = {
    class: `container-wrapper`
};
function Au(e, t, n, r, i, a) {
    let o = V(`navbar`);
    return W(),
    G(`section`, Ou, [t[1] ||= K(`video`, {
        class: `hero-video`,
        autoplay: ``,
        loop: ``,
        muted: ``,
        playsinline: ``
    }, [K(`source`, {
        src: `/hero_home.webm`,
        type: `video/webm`
    }), Da(` Your browser does not support the video tag. `)], -1), q(o), t[2] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, ku, [K(`div`, {
        class: I([`hero-content`, {
            visible: i.isVisible
        }])
    }, [...t[0] ||= [K(`div`, {
        class: `left`
    }, [K(`span`, null, ` Accelerating Your Digital Transformation `)], -1), K(`div`, {
        class: `right`
    }, [K(`span`, null, [Da(` Enterprise-grade solutions for scalable,`), K(`br`), Da(` secure, and future-ready systems. `)])], -1)]], 2)])], 512)
}
var ju = J(Du, [[`render`, Au], [`__scopeId`, `data-v-c437a423`]])
  , Mu = {
    name: `HeroCtaSection`,
    components: {
        ContactButton: cu
    },
    props: {
        title: {
            type: String,
            default: `Start Your IT Modernization Journey`
        },
        subtitle: {
            type: String,
            default: `We provide strategic guidance and end-to-end solutions tailored to your business needs.`
        },
        backgroundImage: {
            type: String,
            default: `/situation.webp`
        },
        buttonText: {
            type: String,
            default: `Let's Get Started`
        }
    },
    computed: {
        backgroundStyle() {
            return {
                backgroundImage: `url(${this.backgroundImage})`
            }
        }
    },
    methods: {
        onClick() {
            this.$emit(`cta-click`)
        }
    }
}
  , Nu = {
    class: `content`
}
  , Pu = {
    class: `text`
}
  , Fu = {
    class: `delay-300`
}
  , Iu = {
    class: `delay-700`
};
function Lu(e, t, n, r, i, a) {
    let o = V(`ContactButton`)
      , s = Kr(`fade-viewport`);
    return W(),
    G(`div`, null, [K(`div`, Nu, [K(`div`, Pu, [B((W(),
    G(`h1`, Fu, [Da(R(n.title), 1)])), [[s]]), B((W(),
    G(`p`, Iu, [Da(R(n.subtitle), 1)])), [[s]])]), B((W(),
    ya(o, {
        class: `delay-1000`,
        onClick: a.onClick
    }, {
        default: Mn( () => [Da(R(n.buttonText), 1)]),
        _: 1
    }, 8, [`onClick`])), [[s]])]), K(`section`, {
        class: `hero`,
        style: F(a.backgroundStyle)
    }, [...t[0] ||= [K(`div`, {
        class: `overlay`
    }, null, -1)]], 4)])
}
var Ru = J(Mu, [[`render`, Lu], [`__scopeId`, `data-v-8d9a565c`]]);
function zu(e) {
    if (e === void 0)
        throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
    return e
}
function Bu(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    e.__proto__ = t
}
var Vu = {
    autoSleep: 120,
    force3D: `auto`,
    nullTargetWarn: 1,
    units: {
        lineHeight: ``
    }
}, Hu = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Uu, Wu, Gu, Ku = 1e8, qu = 1 / Ku, Ju = Math.PI * 2, Yu = Ju / 4, Xu = 0, Zu = Math.sqrt, Qu = Math.cos, $u = Math.sin, ed = function(e) {
    return typeof e == `string`
}, td = function(e) {
    return typeof e == `function`
}, nd = function(e) {
    return typeof e == `number`
}, rd = function(e) {
    return e === void 0
}, id = function(e) {
    return typeof e == `object`
}, ad = function(e) {
    return e !== !1
}, od = function() {
    return typeof window < `u`
}, sd = function(e) {
    return td(e) || ed(e)
}, cd = typeof ArrayBuffer == `function` && ArrayBuffer.isView || function() {}
, ld = Array.isArray, ud = /random\([^)]+\)/g, dd = /,\s*/g, fd = /(?:-?\.?\d|\.)+/gi, pd = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, md = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, hd = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, gd = /[+-]=-?[.\d]+/, _d = /[^,'"\[\]\s]+/gi, vd = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, yd, bd, xd, Sd, Cd = {}, wd = {}, Td, Ed = function(e) {
    return (wd = af(e, Cd)) && wm
}, Dd = function(e, t) {
    return console.warn(`Invalid property`, e, `set to`, t, `Missing plugin? gsap.registerPlugin()`)
}, Od = function(e, t) {
    return !t && console.warn(e)
}, kd = function(e, t) {
    return e && (Cd[e] = t) && wd && (wd[e] = t) || Cd
}, Ad = function() {
    return 0
}, jd = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, Md = {
    suppressEvents: !0,
    kill: !1
}, Nd = {
    suppressEvents: !0
}, Pd = {}, Fd = [], Id = {}, Ld, Rd = {}, zd = {}, Bd = 30, Vd = [], Hd = ``, Ud = function(e) {
    var t = e[0], n, r;
    if (id(t) || td(t) || (e = [e]),
    !(n = (t._gsap || {}).harness)) {
        for (r = Vd.length; r-- && !Vd[r].targetTest(t); )
            ;
        n = Vd[r]
    }
    for (r = e.length; r--; )
        e[r] && (e[r]._gsap || (e[r]._gsap = new Pp(e[r],n))) || e.splice(r, 1);
    return e
}, Wd = function(e) {
    return e._gsap || Ud(Hf(e))[0]._gsap
}, Gd = function(e, t, n) {
    return (n = e[t]) && td(n) ? e[t]() : rd(n) && e.getAttribute && e.getAttribute(t) || n
}, Kd = function(e, t) {
    return (e = e.split(`,`)).forEach(t) || e
}, qd = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, Jd = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, Yd = function(e, t) {
    var n = t.charAt(0)
      , r = parseFloat(t.substr(2));
    return e = parseFloat(e),
    n === `+` ? e + r : n === `-` ? e - r : n === `*` ? e * r : e / r
}, Xd = function(e, t) {
    for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; )
        ;
    return r < n
}, Zd = function() {
    var e = Fd.length, t = Fd.slice(0), n, r;
    for (Id = {},
    Fd.length = 0,
    n = 0; n < e; n++)
        r = t[n],
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
}, Qd = function(e) {
    return !!(e._initted || e._startAt || e.add)
}, $d = function(e, t, n, r) {
    Fd.length && !Wu && Zd(),
    e.render(t, n, r || !!(Wu && t < 0 && Qd(e))),
    Fd.length && !Wu && Zd()
}, ef = function(e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + ``).match(_d).length < 2 ? t : ed(e) ? e.trim() : e
}, tf = function(e) {
    return e
}, nf = function(e, t) {
    for (var n in t)
        n in e || (e[n] = t[n]);
    return e
}, rf = function(e) {
    return function(t, n) {
        for (var r in n)
            r in t || r === `duration` && e || r === `ease` || (t[r] = n[r])
    }
}, af = function(e, t) {
    for (var n in t)
        e[n] = t[n];
    return e
}, of = function e(t, n) {
    for (var r in n)
        r !== `__proto__` && r !== `constructor` && r !== `prototype` && (t[r] = id(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
    return t
}, sf = function(e, t) {
    var n = {}, r;
    for (r in e)
        r in t || (n[r] = e[r]);
    return n
}, cf = function(e) {
    var t = e.parent || yd
      , n = e.keyframes ? rf(ld(e.keyframes)) : nf;
    if (ad(e.inherit))
        for (; t; )
            n(e, t.vars.defaults),
            t = t.parent || t._dp;
    return e
}, lf = function(e, t) {
    for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n]; )
        ;
    return n < 0
}, uf = function(e, t, n, r, i) {
    n === void 0 && (n = `_first`),
    r === void 0 && (r = `_last`);
    var a = e[r], o;
    if (i)
        for (o = t[i]; a && a[i] > o; )
            a = a._prev;
    return a ? (t._next = a._next,
    a._next = t) : (t._next = e[n],
    e[n] = t),
    t._next ? t._next._prev = t : e[r] = t,
    t._prev = a,
    t.parent = t._dp = e,
    t
}, df = function(e, t, n, r) {
    n === void 0 && (n = `_first`),
    r === void 0 && (r = `_last`);
    var i = t._prev
      , a = t._next;
    i ? i._next = a : e[n] === t && (e[n] = a),
    a ? a._prev = i : e[r] === t && (e[r] = i),
    t._next = t._prev = t.parent = null
}, ff = function(e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, pf = function(e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
        for (var n = e; n; )
            n._dirty = 1,
            n = n.parent;
    return e
}, mf = function(e) {
    for (var t = e.parent; t && t.parent; )
        t._dirty = 1,
        t.totalDuration(),
        t = t.parent;
    return e
}, hf = function(e, t, n, r) {
    return e._startAt && (Wu ? e._startAt.revert(Md) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
}, gf = function e(t) {
    return !t || t._ts && e(t.parent)
}, _f = function(e) {
    return e._repeat ? vf(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, vf = function(e, t) {
    var n = Math.floor(e = Jd(e / t));
    return e && n === e ? n - 1 : n
}, yf = function(e, t) {
    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
}, bf = function(e) {
    return e._end = Jd(e._start + (e._tDur / Math.abs(e._ts || e._rts || qu) || 0))
}, xf = function(e, t) {
    var n = e._dp;
    return n && n.smoothChildTiming && e._ts && (e._start = Jd(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
    bf(e),
    n._dirty || pf(n, e)),
    e
}, Sf = function(e, t) {
    var n;
    if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = yf(e.rawTime(), t),
    (!t._dur || If(0, t.totalDuration(), n) - t._tTime > qu) && t.render(n, !0)),
    pf(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (n = e; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime),
                n = n._dp;
        e._zTime = -qu
    }
}, Cf = function(e, t, n, r) {
    return t.parent && ff(t),
    t._start = Jd((nd(n) ? n : n || e !== yd ? Nf(e, n, t) : e._time) + t._delay),
    t._end = Jd(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
    uf(e, t, `_first`, `_last`, e._sort ? `_start` : 0),
    Df(t) || (e._recent = t),
    r || Sf(e, t),
    e._ts < 0 && xf(e, e._tTime),
    e
}, wf = function(e, t) {
    return (Cd.ScrollTrigger || Dd(`scrollTrigger`, t)) && Cd.ScrollTrigger.create(t, e)
}, Tf = function(e, t, n, r, i) {
    if (Up(e, t, i),
    !e._initted)
        return 1;
    if (!n && e._pt && !Wu && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Ld !== bp.frame)
        return Fd.push(e),
        e._lazy = [i, r],
        1
}, Ef = function e(t) {
    var n = t.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
}, Df = function(e) {
    var t = e.data;
    return t === `isFromStart` || t === `isStart`
}, Of = function(e, t, n, r) {
    var i = e.ratio, a = t < 0 || !t && (!e._start && Ef(e) && !(!e._initted && Df(e)) || (e._ts < 0 || e._dp._ts < 0) && !Df(e)) ? 0 : 1, o = e._rDelay, s = 0, c, l, u;
    if (o && e._repeat && (s = If(0, e._tDur, t),
    l = vf(s, o),
    e._yoyo && l & 1 && (a = 1 - a),
    l !== vf(e._tTime, o) && (i = 1 - a,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    a !== i || Wu || r || e._zTime === qu || !t && e._zTime) {
        if (!e._initted && Tf(e, t, r, n, s))
            return;
        for (u = e._zTime,
        e._zTime = t || (n ? qu : 0),
        n ||= t && !u,
        e.ratio = a,
        e._from && (a = 1 - a),
        e._time = 0,
        e._tTime = s,
        c = e._pt; c; )
            c.r(a, c.d),
            c = c._next;
        t < 0 && hf(e, t, n, !0),
        e._onUpdate && !n && ap(e, `onUpdate`),
        s && e._repeat && !n && e.parent && ap(e, `onRepeat`),
        (t >= e._tDur || t < 0) && e.ratio === a && (a && ff(e, 1),
        !n && !Wu && (ap(e, a ? `onComplete` : `onReverseComplete`, !0),
        e._prom && e._prom()))
    } else
        e._zTime ||= t
}, kf = function(e, t, n) {
    var r;
    if (n > t)
        for (r = e._first; r && r._start <= n; ) {
            if (r.data === `isPause` && r._start > t)
                return r;
            r = r._next
        }
    else
        for (r = e._last; r && r._start >= n; ) {
            if (r.data === `isPause` && r._start < t)
                return r;
            r = r._prev
        }
}, Af = function(e, t, n, r) {
    var i = e._repeat
      , a = Jd(t) || 0
      , o = e._tTime / e._tDur;
    return o && !r && (e._time *= a / e._dur),
    e._dur = a,
    e._tDur = i ? i < 0 ? 1e10 : Jd(a * (i + 1) + e._rDelay * i) : a,
    o > 0 && !r && xf(e, e._tTime = e._tDur * o),
    e.parent && bf(e),
    n || pf(e.parent, e),
    e
}, jf = function(e) {
    return e instanceof Ip ? pf(e) : Af(e, e._dur)
}, Mf = {
    _start: 0,
    endTime: Ad,
    totalDuration: Ad
}, Nf = function e(t, n, r) {
    var i = t.labels, a = t._recent || Mf, o = t.duration() >= Ku ? a.endTime(!1) : t._dur, s, c, l;
    return ed(n) && (isNaN(n) || n in i) ? (c = n.charAt(0),
    l = n.substr(-1) === `%`,
    s = n.indexOf(`=`),
    c === `<` || c === `>` ? (s >= 0 && (n = n.replace(/=/, ``)),
    (c === `<` ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (l ? (s < 0 ? a : r).totalDuration() / 100 : 1)) : s < 0 ? (n in i || (i[n] = o),
    i[n]) : (c = parseFloat(n.charAt(s - 1) + n.substr(s + 1)),
    l && r && (c = c / 100 * (ld(r) ? r[0] : r).totalDuration()),
    s > 1 ? e(t, n.substr(0, s - 1), r) + c : o + c)) : n == null ? o : +n
}, Pf = function(e, t, n) {
    var r = nd(t[1]), i = (r ? 2 : 1) + (e < 2 ? 0 : 1), a = t[i], o, s;
    if (r && (a.duration = t[1]),
    a.parent = n,
    e) {
        for (o = a,
        s = n; s && !(`immediateRender` in o); )
            o = s.vars.defaults || {},
            s = ad(s.vars.inherit) && s.parent;
        a.immediateRender = ad(o.immediateRender),
        e < 2 ? a.runBackwards = 1 : a.startAt = t[i - 1]
    }
    return new Xp(t[0],a,t[i + 1])
}, Ff = function(e, t) {
    return e || e === 0 ? t(e) : t
}, If = function(e, t, n) {
    return n < e ? e : n > t ? t : n
}, Lf = function(e, t) {
    return !ed(e) || !(t = vd.exec(e)) ? `` : t[1]
}, Rf = function(e, t, n) {
    return Ff(n, function(n) {
        return If(e, t, n)
    })
}, zf = [].slice, Bf = function(e, t) {
    return e && id(e) && `length` in e && (!t && !e.length || e.length - 1 in e && id(e[0])) && !e.nodeType && e !== bd
}, Vf = function(e, t, n) {
    return n === void 0 && (n = []),
    e.forEach(function(e) {
        var r;
        return ed(e) && !t || Bf(e, 1) ? (r = n).push.apply(r, Hf(e)) : n.push(e)
    }) || n
}, Hf = function(e, t, n) {
    return Gu && !t && Gu.selector ? Gu.selector(e) : ed(e) && !n && (xd || !xp()) ? zf.call((t || Sd).querySelectorAll(e), 0) : ld(e) ? Vf(e, n) : Bf(e) ? zf.call(e, 0) : e ? [e] : []
}, Uf = function(e) {
    return e = Hf(e)[0] || Od(`Invalid scope`) || {},
    function(t) {
        var n = e.current || e.nativeElement || e;
        return Hf(t, n.querySelectorAll ? n : n === e ? Od(`Invalid scope`) || Sd.createElement(`div`) : e)
    }
}, Wf = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, Gf = function(e) {
    if (td(e))
        return e;
    var t = id(e) ? e : {
        each: e
    }
      , n = kp(t.ease)
      , r = t.from || 0
      , i = parseFloat(t.base) || 0
      , a = {}
      , o = r > 0 && r < 1
      , s = isNaN(r) || o
      , c = t.axis
      , l = r
      , u = r;
    return ed(r) ? l = u = {
        center: .5,
        edges: .5,
        end: 1
    }[r] || 0 : !o && s && (l = r[0],
    u = r[1]),
    function(e, o, d) {
        var f = (d || t).length, p = a[f], m, h, g, _, v, y, b, x, S;
        if (!p) {
            if (S = t.grid === `auto` ? 0 : (t.grid || [1, Ku])[1],
            !S) {
                for (b = -Ku; b < (b = d[S++].getBoundingClientRect().left) && S < f; )
                    ;
                S < f && S--
            }
            for (p = a[f] = [],
            m = s ? Math.min(S, f) * l - .5 : r % S,
            h = S === Ku ? 0 : s ? f * u / S - .5 : r / S | 0,
            b = 0,
            x = Ku,
            y = 0; y < f; y++)
                g = y % S - m,
                _ = h - (y / S | 0),
                p[y] = v = c ? Math.abs(c === `y` ? _ : g) : Zu(g * g + _ * _),
                v > b && (b = v),
                v < x && (x = v);
            r === `random` && Wf(p),
            p.max = b - x,
            p.min = x,
            p.v = f = (parseFloat(t.amount) || parseFloat(t.each) * (S > f ? f - 1 : c ? c === `y` ? f / S : S : Math.max(S, f / S)) || 0) * (r === `edges` ? -1 : 1),
            p.b = f < 0 ? i - f : i,
            p.u = Lf(t.amount || t.each) || 0,
            n = n && f < 0 ? Op(n) : n
        }
        return f = (p[e] - p.min) / p.max || 0,
        Jd(p.b + (n ? n(f) : f) * p.v) + p.u
    }
}, Kf = function(e) {
    var t = 10 ** ((e + ``).split(`.`)[1] || ``).length;
    return function(n) {
        var r = Jd(Math.round(parseFloat(n) / e) * e * t);
        return (r - r % 1) / t + (nd(n) ? 0 : Lf(n))
    }
}, qf = function(e, t) {
    var n = ld(e), r, i;
    return !n && id(e) && (r = n = e.radius || Ku,
    e.values ? (e = Hf(e.values),
    (i = !nd(e[0])) && (r *= r)) : e = Kf(e.increment)),
    Ff(t, n ? td(e) ? function(t) {
        return i = e(t),
        Math.abs(i - t) <= r ? i : t
    }
    : function(t) {
        for (var n = parseFloat(i ? t.x : t), a = parseFloat(i ? t.y : 0), o = Ku, s = 0, c = e.length, l, u; c--; )
            i ? (l = e[c].x - n,
            u = e[c].y - a,
            l = l * l + u * u) : l = Math.abs(e[c] - n),
            l < o && (o = l,
            s = c);
        return s = !r || o <= r ? e[s] : t,
        i || s === t || nd(t) ? s : s + Lf(t)
    }
    : Kf(e))
}, Jf = function(e, t, n, r) {
    return Ff(ld(e) ? !t : n === !0 ? !!(n = 0) : !r, function() {
        return ld(e) ? e[~~(Math.random() * e.length)] : (n ||= 1e-5) && (r = n < 1 ? 10 ** ((n + ``).length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * .99)) / n) * n * r) / r
    })
}, Yf = function() {
    var e = [...arguments];
    return function(t) {
        return e.reduce(function(e, t) {
            return t(e)
        }, t)
    }
}, Xf = function(e, t) {
    return function(n) {
        return e(parseFloat(n)) + (t || Lf(n))
    }
}, Zf = function(e, t, n) {
    return np(e, t, 0, 1, n)
}, Qf = function(e, t, n) {
    return Ff(n, function(n) {
        return e[~~t(n)]
    })
}, $f = function e(t, n, r) {
    var i = n - t;
    return ld(t) ? Qf(t, e(0, t.length), n) : Ff(r, function(e) {
        return (i + (e - t) % i) % i + t
    })
}, ep = function e(t, n, r) {
    var i = n - t
      , a = i * 2;
    return ld(t) ? Qf(t, e(0, t.length - 1), n) : Ff(r, function(e) {
        return e = (a + (e - t) % a) % a || 0,
        t + (e > i ? a - e : e)
    })
}, tp = function(e) {
    return e.replace(ud, function(e) {
        var t = e.indexOf(`[`) + 1
          , n = e.substring(t || 7, t ? e.indexOf(`]`) : e.length - 1).split(dd);
        return Jf(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 1e-5)
    })
}, np = function(e, t, n, r, i) {
    var a = t - e
      , o = r - n;
    return Ff(i, function(t) {
        return n + ((t - e) / a * o || 0)
    })
}, rp = function e(t, n, r, i) {
    var a = isNaN(t + n) ? 0 : function(e) {
        return (1 - e) * t + e * n
    }
    ;
    if (!a) {
        var o = ed(t), s = {}, c, l, u, d, f;
        if (r === !0 && (i = 1) && (r = null),
        o)
            t = {
                p: t
            },
            n = {
                p: n
            };
        else if (ld(t) && !ld(n)) {
            for (u = [],
            d = t.length,
            f = d - 2,
            l = 1; l < d; l++)
                u.push(e(t[l - 1], t[l]));
            d--,
            a = function(e) {
                e *= d;
                var t = Math.min(f, ~~e);
                return u[t](e - t)
            }
            ,
            r = n
        } else
            i || (t = af(ld(t) ? [] : {}, t));
        if (!u) {
            for (c in n)
                Rp.call(s, t, c, `get`, n[c]);
            a = function(e) {
                return am(e, s) || (o ? t.p : t)
            }
        }
    }
    return Ff(r, a)
}, ip = function(e, t, n) {
    var r = e.labels, i = Ku, a, o, s;
    for (a in r)
        o = r[a] - t,
        o < 0 == !!n && o && i > (o = Math.abs(o)) && (s = a,
        i = o);
    return s
}, ap = function(e, t, n) {
    var r = e.vars, i = r[t], a = Gu, o = e._ctx, s, c, l;
    if (i)
        return s = r[t + `Params`],
        c = r.callbackScope || e,
        n && Fd.length && Zd(),
        o && (Gu = o),
        l = s ? i.apply(c, s) : i.call(c),
        Gu = a,
        l
}, op = function(e) {
    return ff(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!Wu),
    e.progress() < 1 && ap(e, `onInterrupt`),
    e
}, sp, cp = [], lp = function(e) {
    if (e)
        if (e = !e.name && e.default || e,
        od() || e.headless) {
            var t = e.name
              , n = td(e)
              , r = t && !n && e.init ? function() {
                this._props = []
            }
            : e
              , i = {
                init: Ad,
                render: am,
                add: Rp,
                kill: sm,
                modifier: om,
                rawVars: 0
            }
              , a = {
                targetTest: 0,
                get: 0,
                getSetter: tm,
                aliases: {},
                register: 0
            };
            if (xp(),
            e !== r) {
                if (Rd[t])
                    return;
                nf(r, nf(sf(e, i), a)),
                af(r.prototype, af(i, sf(e, a))),
                Rd[r.prop = t] = r,
                e.targetTest && (Vd.push(r),
                Pd[t] = 1),
                t = (t === `css` ? `CSS` : t.charAt(0).toUpperCase() + t.substr(1)) + `Plugin`
            }
            kd(t, r),
            e.register && e.register(wm, r, um)
        } else
            cp.push(e)
}, up = 255, dp = {
    aqua: [0, up, up],
    lime: [0, up, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, up],
    navy: [0, 0, 128],
    white: [up, up, up],
    olive: [128, 128, 0],
    yellow: [up, up, 0],
    orange: [up, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [up, 0, 0],
    pink: [up, 192, 203],
    cyan: [0, up, up],
    transparent: [up, up, up, 0]
}, fp = function(e, t, n) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * up + .5 | 0
}, pp = function(e, t, n) {
    var r = e ? nd(e) ? [e >> 16, e >> 8 & up, e & up] : 0 : dp.black, i, a, o, s, c, l, u, d, f, p;
    if (!r) {
        if (e.substr(-1) === `,` && (e = e.substr(0, e.length - 1)),
        dp[e])
            r = dp[e];
        else if (e.charAt(0) === `#`) {
            if (e.length < 6 && (i = e.charAt(1),
            a = e.charAt(2),
            o = e.charAt(3),
            e = `#` + i + i + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : ``)),
            e.length === 9)
                return r = parseInt(e.substr(1, 6), 16),
                [r >> 16, r >> 8 & up, r & up, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            r = [e >> 16, e >> 8 & up, e & up]
        } else if (e.substr(0, 3) === `hsl`) {
            if (r = p = e.match(fd),
            !t)
                s = r[0] % 360 / 360,
                c = r[1] / 100,
                l = r[2] / 100,
                a = l <= .5 ? l * (c + 1) : l + c - l * c,
                i = l * 2 - a,
                r.length > 3 && (r[3] *= 1),
                r[0] = fp(s + 1 / 3, i, a),
                r[1] = fp(s, i, a),
                r[2] = fp(s - 1 / 3, i, a);
            else if (~e.indexOf(`=`))
                return r = e.match(pd),
                n && r.length < 4 && (r[3] = 1),
                r
        } else
            r = e.match(fd) || dp.transparent;
        r = r.map(Number)
    }
    return t && !p && (i = r[0] / up,
    a = r[1] / up,
    o = r[2] / up,
    u = Math.max(i, a, o),
    d = Math.min(i, a, o),
    l = (u + d) / 2,
    u === d ? s = c = 0 : (f = u - d,
    c = l > .5 ? f / (2 - u - d) : f / (u + d),
    s = u === i ? (a - o) / f + (a < o ? 6 : 0) : u === a ? (o - i) / f + 2 : (i - a) / f + 4,
    s *= 60),
    r[0] = ~~(s + .5),
    r[1] = ~~(c * 100 + .5),
    r[2] = ~~(l * 100 + .5)),
    n && r.length < 4 && (r[3] = 1),
    r
}, mp = function(e) {
    var t = []
      , n = []
      , r = -1;
    return e.split(gp).forEach(function(e) {
        var i = e.match(md) || [];
        t.push.apply(t, i),
        n.push(r += i.length + 1)
    }),
    t.c = n,
    t
}, hp = function(e, t, n) {
    var r = ``, i = (e + r).match(gp), a = t ? `hsla(` : `rgba(`, o = 0, s, c, l, u;
    if (!i)
        return e;
    if (i = i.map(function(e) {
        return (e = pp(e, t, 1)) && a + (t ? e[0] + `,` + e[1] + `%,` + e[2] + `%,` + e[3] : e.join(`,`)) + `)`
    }),
    n && (l = mp(e),
    s = n.c,
    s.join(r) !== l.c.join(r)))
        for (c = e.replace(gp, `1`).split(md),
        u = c.length - 1; o < u; o++)
            r += c[o] + (~s.indexOf(o) ? i.shift() || a + `0,0,0,0)` : (l.length ? l : i.length ? i : n).shift());
    if (!c)
        for (c = e.split(gp),
        u = c.length - 1; o < u; o++)
            r += c[o] + i[o];
    return r + c[u]
}, gp = function() {
    var e = `(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`, t;
    for (t in dp)
        e += `|` + t + `\\b`;
    return RegExp(e + `)`, `gi`)
}(), _p = /hsl[a]?\(/, vp = function(e) {
    var t = e.join(` `), n;
    if (gp.lastIndex = 0,
    gp.test(t))
        return n = _p.test(t),
        e[1] = hp(e[1], n),
        e[0] = hp(e[0], n, mp(e[1])),
        !0
}, yp, bp = function() {
    var e = Date.now, t = 500, n = 33, r = e(), i = r, a = 1e3 / 240, o = a, s = [], c, l, u, d, f, p, m = function u(m) {
        var h = e() - i, g = m === !0, _, v, y, b;
        if ((h > t || h < 0) && (r += h - n),
        i += h,
        y = i - r,
        _ = y - o,
        (_ > 0 || g) && (b = ++d.frame,
        f = y - d.time * 1e3,
        d.time = y /= 1e3,
        o += _ + (_ >= a ? 4 : a - _),
        v = 1),
        g || (c = l(u)),
        v)
            for (p = 0; p < s.length; p++)
                s[p](y, f, b, m)
    };
    return d = {
        time: 0,
        frame: 0,
        tick: function() {
            m(!0)
        },
        deltaRatio: function(e) {
            return f / (1e3 / (e || 60))
        },
        wake: function() {
            Td && (!xd && od() && (bd = xd = window,
            Sd = bd.document || {},
            Cd.gsap = wm,
            (bd.gsapVersions ||= []).push(wm.version),
            Ed(wd || bd.GreenSockGlobals || !bd.gsap && bd || {}),
            cp.forEach(lp)),
            u = typeof requestAnimationFrame < `u` && requestAnimationFrame,
            c && d.sleep(),
            l = u || function(e) {
                return setTimeout(e, o - d.time * 1e3 + 1 | 0)
            }
            ,
            yp = 1,
            m(2))
        },
        sleep: function() {
            (u ? cancelAnimationFrame : clearTimeout)(c),
            yp = 0,
            l = Ad
        },
        lagSmoothing: function(e, r) {
            t = e || 1 / 0,
            n = Math.min(r || 33, t)
        },
        fps: function(e) {
            a = 1e3 / (e || 240),
            o = d.time * 1e3 + a
        },
        add: function(e, t, n) {
            var r = t ? function(t, n, i, a) {
                e(t, n, i, a),
                d.remove(r)
            }
            : e;
            return d.remove(e),
            s[n ? `unshift` : `push`](r),
            xp(),
            r
        },
        remove: function(e, t) {
            ~(t = s.indexOf(e)) && s.splice(t, 1) && p >= t && p--
        },
        _listeners: s
    },
    d
}(), xp = function() {
    return !yp && bp.wake()
}, Sp = {}, Cp = /^[\d.\-M][\d.\-,\s]/, wp = /["']/g, Tp = function(e) {
    for (var t = {}, n = e.substr(1, e.length - 3).split(`:`), r = n[0], i = 1, a = n.length, o, s, c; i < a; i++)
        s = n[i],
        o = i === a - 1 ? s.length : s.lastIndexOf(`,`),
        c = s.substr(0, o),
        t[r] = isNaN(c) ? c.replace(wp, ``).trim() : +c,
        r = s.substr(o + 1).trim();
    return t
}, Ep = function(e) {
    var t = e.indexOf(`(`) + 1
      , n = e.indexOf(`)`)
      , r = e.indexOf(`(`, t);
    return e.substring(t, ~r && r < n ? e.indexOf(`)`, n + 1) : n)
}, Dp = function(e) {
    var t = (e + ``).split(`(`)
      , n = Sp[t[0]];
    return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf(`{`) ? [Tp(t[1])] : Ep(e).split(`,`).map(ef)) : Sp._CE && Cp.test(e) ? Sp._CE(``, e) : n
}, Op = function(e) {
    return function(t) {
        return 1 - e(1 - t)
    }
}, kp = function(e, t) {
    return e && (td(e) ? e : Sp[e] || Dp(e)) || t
}, Ap = function(e, t, n, r) {
    n === void 0 && (n = function(e) {
        return 1 - t(1 - e)
    }
    ),
    r === void 0 && (r = function(e) {
        return e < .5 ? t(e * 2) / 2 : 1 - t((1 - e) * 2) / 2
    }
    );
    var i = {
        easeIn: t,
        easeOut: n,
        easeInOut: r
    }, a;
    return Kd(e, function(e) {
        for (var t in Sp[e] = Cd[e] = i,
        Sp[a = e.toLowerCase()] = n,
        i)
            Sp[a + (t === `easeIn` ? `.in` : t === `easeOut` ? `.out` : `.inOut`)] = Sp[e + `.` + t] = i[t]
    }),
    i
}, jp = function(e) {
    return function(t) {
        return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
    }
}, Mp = function e(t, n, r) {
    var i = n >= 1 ? n : 1
      , a = (r || (t ? .3 : .45)) / (n < 1 ? n : 1)
      , o = a / Ju * (Math.asin(1 / i) || 0)
      , s = function(e) {
        return e === 1 ? 1 : i * 2 ** (-10 * e) * $u((e - o) * a) + 1
    }
      , c = t === `out` ? s : t === `in` ? function(e) {
        return 1 - s(1 - e)
    }
    : jp(s);
    return a = Ju / a,
    c.config = function(n, r) {
        return e(t, n, r)
    }
    ,
    c
}, Np = function e(t, n) {
    n === void 0 && (n = 1.70158);
    var r = function(e) {
        return e ? --e * e * ((n + 1) * e + n) + 1 : 0
    }
      , i = t === `out` ? r : t === `in` ? function(e) {
        return 1 - r(1 - e)
    }
    : jp(r);
    return i.config = function(n) {
        return e(t, n)
    }
    ,
    i
};
Kd(`Linear,Quad,Cubic,Quart,Quint,Strong`, function(e, t) {
    var n = t < 5 ? t + 1 : t;
    Ap(e + `,Power` + (n - 1), t ? function(e) {
        return e ** +n
    }
    : function(e) {
        return e
    }
    , function(e) {
        return 1 - (1 - e) ** n
    }, function(e) {
        return e < .5 ? (e * 2) ** n / 2 : 1 - ((1 - e) * 2) ** n / 2
    })
}),
Sp.Linear.easeNone = Sp.none = Sp.Linear.easeIn,
Ap(`Elastic`, Mp(`in`), Mp(`out`), Mp()),
(function(e, t) {
    var n = 1 / t
      , r = 2 * n
      , i = 2.5 * n
      , a = function(a) {
        return a < n ? e * a * a : a < r ? e * (a - 1.5 / t) ** 2 + .75 : a < i ? e * (a -= 2.25 / t) * a + .9375 : e * (a - 2.625 / t) ** 2 + .984375
    };
    Ap(`Bounce`, function(e) {
        return 1 - a(1 - e)
    }, a)
}
)(7.5625, 2.75),
Ap(`Expo`, function(e) {
    return 2 ** (10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e)
}),
Ap(`Circ`, function(e) {
    return -(Zu(1 - e * e) - 1)
}),
Ap(`Sine`, function(e) {
    return e === 1 ? 1 : -Qu(e * Yu) + 1
}),
Ap(`Back`, Np(`in`), Np(`out`), Np()),
Sp.SteppedEase = Sp.steps = Cd.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var n = 1 / e
          , r = e + (t ? 0 : 1)
          , i = t ? 1 : 0
          , a = 1 - qu;
        return function(e) {
            return ((r * If(0, a, e) | 0) + i) * n
        }
    }
},
Hu.ease = Sp[`quad.out`],
Kd(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`, function(e) {
    return Hd += e + `,` + e + `Params,`
});
var Pp = function(e, t) {
    this.id = Xu++,
    e._gsap = this,
    this.target = e,
    this.harness = t,
    this.get = t ? t.get : Gd,
    this.set = t ? t.getSetter : tm
}
  , Fp = function() {
    function e(e) {
        this.vars = e,
        this._delay = +e.delay || 0,
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0,
        this._yoyo = !!e.yoyo || !!e.yoyoEase),
        this._ts = 1,
        Af(this, +e.duration, 1, 1),
        this.data = e.data,
        Gu && (this._ctx = Gu,
        Gu.data.push(this)),
        yp || bp.wake()
    }
    var t = e.prototype;
    return t.delay = function(e) {
        return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay),
        this._delay = e,
        this) : this._delay
    }
    ,
    t.duration = function(e) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
    }
    ,
    t.totalDuration = function(e) {
        return arguments.length ? (this._dirty = 0,
        Af(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    t.totalTime = function(e, t) {
        if (xp(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (xf(this, e),
            !n._dp || n.parent || Sf(n, this); n && n.parent; )
                n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Cf(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === qu || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e),
        $d(this, e, t)),
        this
    }
    ,
    t.time = function(e, t) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + _f(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
    }
    ,
    t.totalProgress = function(e, t) {
        return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
    }
    ,
    t.progress = function(e, t) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + _f(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    t.iteration = function(e, t) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? vf(this._tTime, n) + 1 : 1
    }
    ,
    t.timeScale = function(e, t) {
        if (!arguments.length)
            return this._rts === -qu ? 0 : this._rts;
        if (this._rts === e)
            return this;
        var n = this.parent && this._ts ? yf(this.parent._time, this) : this._tTime;
        return this._rts = +e || 0,
        this._ts = this._ps || e === -qu ? 0 : this._rts,
        this.totalTime(If(-Math.abs(this._delay), this.totalDuration(), n), t !== !1),
        bf(this),
        mf(this)
    }
    ,
    t.paused = function(e) {
        return arguments.length ? (this._ps !== e && (this._ps = e,
        e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (xp(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== qu && (this._tTime -= qu)))),
        this) : this._ps
    }
    ,
    t.startTime = function(e) {
        if (arguments.length) {
            this._start = Jd(e);
            var t = this.parent || this._dp;
            return t && (t._sort || !this.parent) && Cf(t, this, this._start - this._delay),
            this
        }
        return this._start
    }
    ,
    t.endTime = function(e) {
        return this._start + (ad(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    t.rawTime = function(e) {
        var t = this.parent || this._dp;
        return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? yf(t.rawTime(e), this) : this._tTime : this._tTime
    }
    ,
    t.revert = function(e) {
        e === void 0 && (e = Nd);
        var t = Wu;
        return Wu = e,
        Qd(this) && (this.timeline && this.timeline.revert(e),
        this.totalTime(-.01, e.suppressEvents)),
        this.data !== `nested` && e.kill !== !1 && this.kill(),
        Wu = t,
        this
    }
    ,
    t.globalTime = function(e) {
        for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
            n = t._start + n / (Math.abs(t._ts) || 1),
            t = t._dp;
        return !this.parent && this._sat ? this._sat.globalTime(e) : n
    }
    ,
    t.repeat = function(e) {
        return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e,
        jf(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    t.repeatDelay = function(e) {
        if (arguments.length) {
            var t = this._time;
            return this._rDelay = e,
            jf(this),
            t ? this.time(t) : this
        }
        return this._rDelay
    }
    ,
    t.yoyo = function(e) {
        return arguments.length ? (this._yoyo = e,
        this) : this._yoyo
    }
    ,
    t.seek = function(e, t) {
        return this.totalTime(Nf(this, e), ad(t))
    }
    ,
    t.restart = function(e, t) {
        return this.play().totalTime(e ? -this._delay : 0, ad(t)),
        this._dur || (this._zTime = -qu),
        this
    }
    ,
    t.play = function(e, t) {
        return e != null && this.seek(e, t),
        this.reversed(!1).paused(!1)
    }
    ,
    t.reverse = function(e, t) {
        return e != null && this.seek(e || this.totalDuration(), t),
        this.reversed(!0).paused(!1)
    }
    ,
    t.pause = function(e, t) {
        return e != null && this.seek(e, t),
        this.paused(!0)
    }
    ,
    t.resume = function() {
        return this.paused(!1)
    }
    ,
    t.reversed = function(e) {
        return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -qu : 0)),
        this) : this._rts < 0
    }
    ,
    t.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -qu,
        this
    }
    ,
    t.isActive = function() {
        var e = this.parent || this._dp, t = this._start, n;
        return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(!0)) >= t && n < this.endTime(!0) - qu)
    }
    ,
    t.eventCallback = function(e, t, n) {
        var r = this.vars;
        return arguments.length > 1 ? (t ? (r[e] = t,
        n && (r[e + `Params`] = n),
        e === `onUpdate` && (this._onUpdate = t)) : delete r[e],
        this) : r[e]
    }
    ,
    t.then = function(e) {
        var t = this
          , n = t._prom;
        return new Promise(function(r) {
            var i = td(e) ? e : tf
              , a = function() {
                var e = t.then;
                t.then = null,
                n && n(),
                td(i) && (i = i(t)) && (i.then || i === t) && (t.then = e),
                r(i),
                t.then = e
            };
            t._initted && t.totalProgress() === 1 && t._ts >= 0 || !t._tTime && t._ts < 0 ? a() : t._prom = a
        }
        )
    }
    ,
    t.kill = function() {
        op(this)
    }
    ,
    e
}();
nf(Fp.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -qu,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Ip = function(e) {
    Bu(t, e);
    function t(t, n) {
        var r;
        return t === void 0 && (t = {}),
        r = e.call(this, t) || this,
        r.labels = {},
        r.smoothChildTiming = !!t.smoothChildTiming,
        r.autoRemoveChildren = !!t.autoRemoveChildren,
        r._sort = ad(t.sortChildren),
        yd && Cf(t.parent || yd, zu(r), n),
        t.reversed && r.reverse(),
        t.paused && r.paused(!0),
        t.scrollTrigger && wf(zu(r), t.scrollTrigger),
        r
    }
    var n = t.prototype;
    return n.to = function(e, t, n) {
        return Pf(0, arguments, this),
        this
    }
    ,
    n.from = function(e, t, n) {
        return Pf(1, arguments, this),
        this
    }
    ,
    n.fromTo = function(e, t, n, r) {
        return Pf(2, arguments, this),
        this
    }
    ,
    n.set = function(e, t, n) {
        return t.duration = 0,
        t.parent = this,
        cf(t).repeatDelay || (t.repeat = 0),
        t.immediateRender = !!t.immediateRender,
        new Xp(e,t,Nf(this, n),1),
        this
    }
    ,
    n.call = function(e, t, n) {
        return Cf(this, Xp.delayedCall(0, e, t), n)
    }
    ,
    n.staggerTo = function(e, t, n, r, i, a, o) {
        return n.duration = t,
        n.stagger = n.stagger || r,
        n.onComplete = a,
        n.onCompleteParams = o,
        n.parent = this,
        new Xp(e,n,Nf(this, i)),
        this
    }
    ,
    n.staggerFrom = function(e, t, n, r, i, a, o) {
        return n.runBackwards = 1,
        cf(n).immediateRender = ad(n.immediateRender),
        this.staggerTo(e, t, n, r, i, a, o)
    }
    ,
    n.staggerFromTo = function(e, t, n, r, i, a, o, s) {
        return r.startAt = n,
        cf(r).immediateRender = ad(r.immediateRender),
        this.staggerTo(e, t, r, i, a, o, s)
    }
    ,
    n.render = function(e, t, n) {
        var r = this._time, i = this._dirty ? this.totalDuration() : this._tDur, a = this._dur, o = e <= 0 ? 0 : Jd(e), s = this._zTime < 0 != e < 0 && (this._initted || !a), c, l, u, d, f, p, m, h, g, _, v, y;
        if (this !== yd && o > i && e >= 0 && (o = i),
        o !== this._tTime || n || s) {
            if (r !== this._time && a && (o += this._time - r,
            e += this._time - r),
            c = o,
            g = this._start,
            h = this._ts,
            p = !h,
            s && (a || (r = this._zTime),
            (e || !t) && (this._zTime = e)),
            this._repeat) {
                if (v = this._yoyo,
                f = a + this._rDelay,
                this._repeat < -1 && e < 0)
                    return this.totalTime(f * 100 + e, t, n);
                if (c = Jd(o % f),
                o === i ? (d = this._repeat,
                c = a) : (_ = Jd(o / f),
                d = ~~_,
                d && d === _ && (c = a,
                d--),
                c > a && (c = a)),
                _ = vf(this._tTime, f),
                !r && this._tTime && _ !== d && this._tTime - _ * f - this._dur <= 0 && (_ = d),
                v && d & 1 && (c = a - c,
                y = 1),
                d !== _ && !this._lock) {
                    var b = v && _ & 1
                      , x = b === (v && d & 1);
                    if (d < _ && (b = !b),
                    r = b ? 0 : o % a ? a : o,
                    this._lock = 1,
                    this.render(r || (y ? 0 : Jd(d * f)), t, !a)._lock = 0,
                    this._tTime = o,
                    !t && this.parent && ap(this, `onRepeat`),
                    this.vars.repeatRefresh && !y && (this.invalidate()._lock = 1,
                    _ = d),
                    r && r !== this._time || p !== !this._ts || this.vars.onRepeat && !this.parent && !this._act || (a = this._dur,
                    i = this._tDur,
                    x && (this._lock = 2,
                    r = b ? a : -1e-4,
                    this.render(r, !0),
                    this.vars.repeatRefresh && !y && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !p))
                        return this
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (m = kf(this, Jd(r), Jd(c)),
            m && (o -= c - (c = m._start))),
            this._tTime = o,
            this._time = c,
            this._act = !!h,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = e,
            r = 0),
            !r && o && a && !t && !_ && (ap(this, `onStart`),
            this._tTime !== o))
                return this;
            if (c >= r && e >= 0)
                for (l = this._first; l; ) {
                    if (u = l._next,
                    (l._act || c >= l._start) && l._ts && m !== l) {
                        if (l.parent !== this)
                            return this.render(e, t, n);
                        if (l.render(l._ts > 0 ? (c - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (c - l._start) * l._ts, t, n),
                        c !== this._time || !this._ts && !p) {
                            m = 0,
                            u && (o += this._zTime = -qu);
                            break
                        }
                    }
                    l = u
                }
            else {
                l = this._last;
                for (var S = e < 0 ? e : c; l; ) {
                    if (u = l._prev,
                    (l._act || S <= l._end) && l._ts && m !== l) {
                        if (l.parent !== this)
                            return this.render(e, t, n);
                        if (l.render(l._ts > 0 ? (S - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (S - l._start) * l._ts, t, n || Wu && Qd(l)),
                        c !== this._time || !this._ts && !p) {
                            m = 0,
                            u && (o += this._zTime = S ? -qu : qu);
                            break
                        }
                    }
                    l = u
                }
            }
            if (m && !t && (this.pause(),
            m.render(c >= r ? 0 : -qu)._zTime = c >= r ? 1 : -1,
            this._ts))
                return this._start = g,
                bf(this),
                this.render(e, t, n);
            this._onUpdate && !t && ap(this, `onUpdate`, !0),
            (o === i && this._tTime >= this.totalDuration() || !o && r) && (g === this._start || Math.abs(h) !== Math.abs(this._ts)) && (this._lock || ((e || !a) && (o === i && this._ts > 0 || !o && this._ts < 0) && ff(this, 1),
            !t && !(e < 0 && !r) && (o || r || !i) && (ap(this, o === i && e >= 0 ? `onComplete` : `onReverseComplete`, !0),
            this._prom && !(o < i && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    n.add = function(e, t) {
        var n = this;
        if (nd(t) || (t = Nf(this, t, e)),
        !(e instanceof Fp)) {
            if (ld(e))
                return e.forEach(function(e) {
                    return n.add(e, t)
                }),
                this;
            if (ed(e))
                return this.addLabel(e, t);
            if (td(e))
                e = Xp.delayedCall(0, e);
            else
                return this
        }
        return this === e ? this : Cf(this, e, t)
    }
    ,
    n.getChildren = function(e, t, n, r) {
        e === void 0 && (e = !0),
        t === void 0 && (t = !0),
        n === void 0 && (n = !0),
        r === void 0 && (r = -Ku);
        for (var i = [], a = this._first; a; )
            a._start >= r && (a instanceof Xp ? t && i.push(a) : (n && i.push(a),
            e && i.push.apply(i, a.getChildren(!0, t, n)))),
            a = a._next;
        return i
    }
    ,
    n.getById = function(e) {
        for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
            if (t[n].vars.id === e)
                return t[n]
    }
    ,
    n.remove = function(e) {
        return ed(e) ? this.removeLabel(e) : td(e) ? this.killTweensOf(e) : (e.parent === this && df(this, e),
        e === this._recent && (this._recent = this._last),
        pf(this))
    }
    ,
    n.totalTime = function(t, n) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = Jd(bp.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
        e.prototype.totalTime.call(this, t, n),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    n.addLabel = function(e, t) {
        return this.labels[e] = Nf(this, t),
        this
    }
    ,
    n.removeLabel = function(e) {
        return delete this.labels[e],
        this
    }
    ,
    n.addPause = function(e, t, n) {
        var r = Xp.delayedCall(0, t || Ad, n);
        return r.data = `isPause`,
        this._hasPause = 1,
        Cf(this, r, Nf(this, e))
    }
    ,
    n.removePause = function(e) {
        var t = this._first;
        for (e = Nf(this, e); t; )
            t._start === e && t.data === `isPause` && ff(t),
            t = t._next
    }
    ,
    n.killTweensOf = function(e, t, n) {
        for (var r = this.getTweensOf(e, n), i = r.length; i--; )
            Vp !== r[i] && r[i].kill(e, t);
        return this
    }
    ,
    n.getTweensOf = function(e, t) {
        for (var n = [], r = Hf(e), i = this._first, a = nd(t), o; i; )
            i instanceof Xp ? Xd(i._targets, r) && (a ? (!Vp || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && n.push(i) : (o = i.getTweensOf(r, t)).length && n.push.apply(n, o),
            i = i._next;
        return n
    }
    ,
    n.tweenTo = function(e, t) {
        t ||= {};
        var n = this, r = Nf(n, e), i = t, a = i.startAt, o = i.onStart, s = i.onStartParams, c = i.immediateRender, l, u = Xp.to(n, nf({
            ease: t.ease || `none`,
            lazy: !1,
            immediateRender: !1,
            time: r,
            overwrite: `auto`,
            duration: t.duration || Math.abs((r - (a && `time` in a ? a.time : n._time)) / n.timeScale()) || qu,
            onStart: function() {
                if (n.pause(),
                !l) {
                    var e = t.duration || Math.abs((r - (a && `time` in a ? a.time : n._time)) / n.timeScale());
                    u._dur !== e && Af(u, e, 0, 1).render(u._time, !0, !0),
                    l = 1
                }
                o && o.apply(u, s || [])
            }
        }, t));
        return c ? u.render(0) : u
    }
    ,
    n.tweenFromTo = function(e, t, n) {
        return this.tweenTo(t, nf({
            startAt: {
                time: Nf(this, e)
            }
        }, n))
    }
    ,
    n.recent = function() {
        return this._recent
    }
    ,
    n.nextLabel = function(e) {
        return e === void 0 && (e = this._time),
        ip(this, Nf(this, e))
    }
    ,
    n.previousLabel = function(e) {
        return e === void 0 && (e = this._time),
        ip(this, Nf(this, e), 1)
    }
    ,
    n.currentLabel = function(e) {
        return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + qu)
    }
    ,
    n.shiftChildren = function(e, t, n) {
        n === void 0 && (n = 0);
        var r = this._first, i = this.labels, a;
        for (e = Jd(e); r; )
            r._start >= n && (r._start += e,
            r._end += e),
            r = r._next;
        if (t)
            for (a in i)
                i[a] >= n && (i[a] += e);
        return pf(this)
    }
    ,
    n.invalidate = function(t) {
        var n = this._first;
        for (this._lock = 0; n; )
            n.invalidate(t),
            n = n._next;
        return e.prototype.invalidate.call(this, t)
    }
    ,
    n.clear = function(e) {
        e === void 0 && (e = !0);
        for (var t = this._first, n; t; )
            n = t._next,
            this.remove(t),
            t = n;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        e && (this.labels = {}),
        pf(this)
    }
    ,
    n.totalDuration = function(e) {
        var t = 0, n = this, r = n._last, i = Ku, a, o, s;
        if (arguments.length)
            return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -e : e));
        if (n._dirty) {
            for (s = n.parent; r; )
                a = r._prev,
                r._dirty && r.totalDuration(),
                o = r._start,
                o > i && n._sort && r._ts && !n._lock ? (n._lock = 1,
                Cf(n, r, o - r._delay, 1)._lock = 0) : i = o,
                o < 0 && r._ts && (t -= o,
                (!s && !n._dp || s && s.smoothChildTiming) && (n._start += Jd(o / n._ts),
                n._time -= o,
                n._tTime -= o),
                n.shiftChildren(-o, !1, -1 / 0),
                i = 0),
                r._end > t && r._ts && (t = r._end),
                r = a;
            Af(n, n === yd && n._time > t ? n._time : t, 1, 1),
            n._dirty = 0
        }
        return n._tDur
    }
    ,
    t.updateRoot = function(e) {
        if (yd._ts && ($d(yd, yf(e, yd)),
        Ld = bp.frame),
        bp.frame >= Bd) {
            Bd += Vu.autoSleep || 120;
            var t = yd._first;
            if ((!t || !t._ts) && Vu.autoSleep && bp._listeners.length < 2) {
                for (; t && !t._ts; )
                    t = t._next;
                t || bp.sleep()
            }
        }
    }
    ,
    t
}(Fp);
nf(Ip.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Lp = function(e, t, n, r, i, a, o) {
    var s = new um(this._pt,e,t,0,1,im,null,i), c = 0, l = 0, u, d, f, p, m, h, g, _;
    for (s.b = n,
    s.e = r,
    n += ``,
    r += ``,
    (g = ~r.indexOf(`random(`)) && (r = tp(r)),
    a && (_ = [n, r],
    a(_, e, t),
    n = _[0],
    r = _[1]),
    d = n.match(hd) || []; u = hd.exec(r); )
        p = u[0],
        m = r.substring(c, u.index),
        f ? f = (f + 1) % 5 : m.substr(-5) === `rgba(` && (f = 1),
        p !== d[l++] && (h = parseFloat(d[l - 1]) || 0,
        s._pt = {
            _next: s._pt,
            p: m || l === 1 ? m : `,`,
            s: h,
            c: p.charAt(1) === `=` ? Yd(h, p) - h : parseFloat(p) - h,
            m: f && f < 4 ? Math.round : 0
        },
        c = hd.lastIndex);
    return s.c = c < r.length ? r.substring(c, r.length) : ``,
    s.fp = o,
    (gd.test(r) || g) && (s.e = 0),
    this._pt = s,
    s
}, Rp = function(e, t, n, r, i, a, o, s, c, l) {
    td(r) && (r = r(i || 0, e, a));
    var u = e[t], d = n === `get` ? td(u) ? c ? e[t.indexOf(`set`) || !td(e[`get` + t.substr(3)]) ? t : `get` + t.substr(3)](c) : e[t]() : u : n, f = td(u) ? c ? $p : Qp : Zp, p;
    if (ed(r) && (~r.indexOf(`random(`) && (r = tp(r)),
    r.charAt(1) === `=` && (p = Yd(d, r) + (Lf(d) || 0),
    (p || p === 0) && (r = p))),
    !l || d !== r || Hp)
        return !isNaN(d * r) && r !== `` ? (p = new um(this._pt,e,t,+d || 0,r - (d || 0),typeof u == `boolean` ? rm : nm,0,f),
        c && (p.fp = c),
        o && p.modifier(o, this, e),
        this._pt = p) : (!u && !(t in e) && Dd(t, r),
        Lp.call(this, e, t, d, r, f, s || Vu.stringFilter, c))
}, zp = function(e, t, n, r, i) {
    if (td(e) && (e = qp(e, i, t, n, r)),
    !id(e) || e.style && e.nodeType || ld(e) || cd(e))
        return ed(e) ? qp(e, i, t, n, r) : e;
    var a = {}, o;
    for (o in e)
        a[o] = qp(e[o], i, t, n, r);
    return a
}, Bp = function(e, t, n, r, i, a) {
    var o, s, c, l;
    if (Rd[e] && (o = new Rd[e]).init(i, o.rawVars ? t[e] : zp(t[e], r, i, a, n), n, r, a) !== !1 && (n._pt = s = new um(n._pt,i,e,0,1,o.render,o,0,o.priority),
    n !== sp))
        for (c = n._ptLookup[n._targets.indexOf(i)],
        l = o._props.length; l--; )
            c[o._props[l]] = s;
    return o
}, Vp, Hp, Up = function e(t, n, r) {
    var i = t.vars, a = i.ease, o = i.startAt, s = i.immediateRender, c = i.lazy, l = i.onUpdate, u = i.runBackwards, d = i.yoyoEase, f = i.keyframes, p = i.autoRevert, m = t._dur, h = t._startAt, g = t._targets, _ = t.parent, v = _ && _.data === `nested` ? _.vars.targets : g, y = t._overwrite === `auto` && !Uu, b = t.timeline, x = i.easeReverse || d, S, C, w, T, E, D, O, k, A, j, M, N, P;
    if (b && (!f || !a) && (a = `none`),
    t._ease = kp(a, Hu.ease),
    t._rEase = x && (kp(x) || t._ease),
    t._from = !b && !!i.runBackwards,
    t._from && (t.ratio = 1),
    !b || f && !i.stagger) {
        if (k = g[0] ? Wd(g[0]).harness : 0,
        N = k && i[k.prop],
        S = sf(i, Pd),
        h && (h._zTime < 0 && h.progress(1),
        n < 0 && u && s && !p ? h.render(-1, !0) : h.revert(u && m ? Md : jd),
        h._lazy = 0),
        o) {
            if (ff(t._startAt = Xp.set(g, nf({
                data: `isStart`,
                overwrite: !1,
                parent: _,
                immediateRender: !0,
                lazy: !h && ad(c),
                startAt: null,
                delay: 0,
                onUpdate: l && function() {
                    return ap(t, `onUpdate`)
                }
                ,
                stagger: 0
            }, o))),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            n < 0 && (Wu || !s && !p) && t._startAt.revert(Md),
            s && m && n <= 0 && r <= 0) {
                n && (t._zTime = n);
                return
            }
        } else if (u && m && !h) {
            if (n && (s = !1),
            w = nf({
                overwrite: !1,
                data: `isFromStart`,
                lazy: s && !h && ad(c),
                immediateRender: s,
                stagger: 0,
                parent: _
            }, S),
            N && (w[k.prop] = N),
            ff(t._startAt = Xp.set(g, w)),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            n < 0 && (Wu ? t._startAt.revert(Md) : t._startAt.render(-1, !0)),
            t._zTime = n,
            !s)
                e(t._startAt, qu, qu);
            else if (!n)
                return
        }
        for (t._pt = t._ptCache = 0,
        c = m && ad(c) || c && !m,
        C = 0; C < g.length; C++) {
            if (E = g[C],
            O = E._gsap || Ud(g)[C]._gsap,
            t._ptLookup[C] = j = {},
            Id[O.id] && Fd.length && Zd(),
            M = v === g ? C : v.indexOf(E),
            k && (A = new k).init(E, N || S, t, M, v) !== !1 && (t._pt = T = new um(t._pt,E,A.name,0,1,A.render,A,0,A.priority),
            A._props.forEach(function(e) {
                j[e] = T
            }),
            A.priority && (D = 1)),
            !k || N)
                for (w in S)
                    Rd[w] && (A = Bp(w, S, t, M, E, v)) ? A.priority && (D = 1) : j[w] = T = Rp.call(t, E, w, `get`, S[w], M, v, 0, i.stringFilter);
            t._op && t._op[C] && t.kill(E, t._op[C]),
            y && t._pt && (Vp = t,
            yd.killTweensOf(E, j, t.globalTime(n)),
            P = !t.parent,
            Vp = 0),
            t._pt && c && (Id[O.id] = 1)
        }
        D && lm(t),
        t._onInit && t._onInit(t)
    }
    t._onUpdate = l,
    t._initted = (!t._op || t._pt) && !P,
    f && n <= 0 && b.render(Ku, !0, !0)
}, Wp = function(e, t, n, r, i, a, o, s) {
    var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], l, u, d, f;
    if (!c)
        for (c = e._ptCache[t] = [],
        d = e._ptLookup,
        f = e._targets.length; f--; ) {
            if (l = d[f][t],
            l && l.d && l.d._pt)
                for (l = l.d._pt; l && l.p !== t && l.fp !== t; )
                    l = l._next;
            if (!l)
                return Hp = 1,
                e.vars[t] = `+=0`,
                Up(e, o),
                Hp = 0,
                s ? Od(t + ` not eligible for reset. Try splitting into individual properties`) : 1;
            c.push(l)
        }
    for (f = c.length; f--; )
        u = c[f],
        l = u._pt || u,
        l.s = (r || r === 0) && !i ? r : l.s + (r || 0) + a * l.c,
        l.c = n - l.s,
        u.e &&= qd(n) + Lf(u.e),
        u.b &&= l.s + Lf(u.b)
}, Gp = function(e, t) {
    var n = e[0] ? Wd(e[0]).harness : 0, r = n && n.aliases, i, a, o, s;
    if (!r)
        return t;
    for (a in i = af({}, t),
    r)
        if (a in i)
            for (s = r[a].split(`,`),
            o = s.length; o--; )
                i[s[o]] = i[a];
    return i
}, Kp = function(e, t, n, r) {
    var i = t.ease || r || `power1.inOut`, a, o;
    if (ld(t))
        o = n[e] || (n[e] = []),
        t.forEach(function(e, n) {
            return o.push({
                t: n / (t.length - 1) * 100,
                v: e,
                e: i
            })
        });
    else
        for (a in t)
            o = n[a] || (n[a] = []),
            a === `ease` || o.push({
                t: parseFloat(e),
                v: t[a],
                e: i
            })
}, qp = function(e, t, n, r, i) {
    return td(e) ? e.call(t, n, r, i) : ed(e) && ~e.indexOf(`random(`) ? tp(e) : e
}, Jp = Hd + `repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`, Yp = {};
Kd(Jp + `,id,stagger,delay,duration,paused,scrollTrigger`, function(e) {
    return Yp[e] = 1
});
var Xp = function(e) {
    Bu(t, e);
    function t(t, n, r, i) {
        var a;
        typeof n == `number` && (r.duration = n,
        n = r,
        r = null),
        a = e.call(this, i ? n : cf(n)) || this;
        var o = a.vars, s = o.duration, c = o.delay, l = o.immediateRender, u = o.stagger, d = o.overwrite, f = o.keyframes, p = o.defaults, m = o.scrollTrigger, h = n.parent || yd, g = (ld(t) || cd(t) ? nd(t[0]) : `length` in n) ? [t] : Hf(t), _, v, y, b, x, S, C, w;
        if (a._targets = g.length ? Ud(g) : Od(`GSAP target ` + t + ` not found. https://gsap.com`, !Vu.nullTargetWarn) || [],
        a._ptLookup = [],
        a._overwrite = d,
        f || u || sd(s) || sd(c)) {
            n = a.vars;
            var T = n.easeReverse || n.yoyoEase;
            if (_ = a.timeline = new Ip({
                data: `nested`,
                defaults: p || {},
                targets: h && h.data === `nested` ? h.vars.targets : g
            }),
            _.kill(),
            _.parent = _._dp = zu(a),
            _._start = 0,
            u || sd(s) || sd(c)) {
                if (b = g.length,
                C = u && Gf(u),
                id(u))
                    for (x in u)
                        ~Jp.indexOf(x) && (w ||= {},
                        w[x] = u[x]);
                for (v = 0; v < b; v++)
                    y = sf(n, Yp),
                    y.stagger = 0,
                    T && (y.easeReverse = T),
                    w && af(y, w),
                    S = g[v],
                    y.duration = +qp(s, zu(a), v, S, g),
                    y.delay = (+qp(c, zu(a), v, S, g) || 0) - a._delay,
                    !u && b === 1 && y.delay && (a._delay = c = y.delay,
                    a._start += c,
                    y.delay = 0),
                    _.to(S, y, C ? C(v, S, g) : 0),
                    _._ease = Sp.none;
                _.duration() ? s = c = 0 : a.timeline = 0
            } else if (f) {
                cf(nf(_.vars.defaults, {
                    ease: `none`
                })),
                _._ease = kp(f.ease || n.ease || `none`);
                var E = 0, D, O, k;
                if (ld(f))
                    f.forEach(function(e) {
                        return _.to(g, e, `>`)
                    }),
                    _.duration();
                else {
                    for (x in y = {},
                    f)
                        x === `ease` || x === `easeEach` || Kp(x, f[x], y, f.easeEach);
                    for (x in y)
                        for (D = y[x].sort(function(e, t) {
                            return e.t - t.t
                        }),
                        E = 0,
                        v = 0; v < D.length; v++)
                            O = D[v],
                            k = {
                                ease: O.e,
                                duration: (O.t - (v ? D[v - 1].t : 0)) / 100 * s
                            },
                            k[x] = O.v,
                            _.to(g, k, E),
                            E += k.duration;
                    _.duration() < s && _.to({}, {
                        duration: s - _.duration()
                    })
                }
            }
            s || a.duration(s = _.duration())
        } else
            a.timeline = 0;
        return d === !0 && !Uu && (Vp = zu(a),
        yd.killTweensOf(g),
        Vp = 0),
        Cf(h, zu(a), r),
        n.reversed && a.reverse(),
        n.paused && a.paused(!0),
        (l || !s && !f && a._start === Jd(h._time) && ad(l) && gf(zu(a)) && h.data !== `nested`) && (a._tTime = -qu,
        a.render(Math.max(0, -c) || 0)),
        m && wf(zu(a), m),
        a
    }
    var n = t.prototype;
    return n.render = function(e, t, n) {
        var r = this._time, i = this._tDur, a = this._dur, o = e < 0, s = e > i - qu && !o ? i : e < qu ? 0 : e, c, l, u, d, f, p, m, h;
        if (!a)
            Of(this, e, t, n);
        else if (s !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== o || this._lazy) {
            if (c = s,
            h = this.timeline,
            this._repeat) {
                if (d = a + this._rDelay,
                this._repeat < -1 && o)
                    return this.totalTime(d * 100 + e, t, n);
                if (c = Jd(s % d),
                s === i ? (u = this._repeat,
                c = a) : (f = Jd(s / d),
                u = ~~f,
                u && u === f ? (c = a,
                u--) : c > a && (c = a)),
                p = this._yoyo && u & 1,
                p && (c = a - c),
                f = vf(this._tTime, d),
                c === r && !n && this._initted && u === f)
                    return this._tTime = s,
                    this;
                u !== f && this.vars.repeatRefresh && !p && !this._lock && c !== d && this._initted && (this._lock = n = 1,
                this.render(Jd(d * u), !0).invalidate()._lock = 0)
            }
            if (!this._initted) {
                if (Tf(this, o ? e : c, n, t, s))
                    return this._tTime = 0,
                    this;
                if (r !== this._time && !(n && this.vars.repeatRefresh && u !== f))
                    return this;
                if (a !== this._dur)
                    return this.render(e, t, n)
            }
            if (this._rEase) {
                var g = c < r;
                if (g !== this._inv) {
                    var _ = g ? r : a - r;
                    this._inv = g,
                    this._from && (this.ratio = 1 - this.ratio),
                    this._invRatio = this.ratio,
                    this._invTime = r,
                    this._invRecip = _ ? (g ? -1 : 1) / _ : 0,
                    this._invScale = g ? -this.ratio : 1 - this.ratio,
                    this._invEase = g ? this._rEase : this._ease
                }
                this.ratio = m = this._invRatio + this._invScale * this._invEase((c - this._invTime) * this._invRecip)
            } else
                this.ratio = m = this._ease(c / a);
            if (this._from && (this.ratio = m = 1 - m),
            this._tTime = s,
            this._time = c,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            !r && s && !t && !f && (ap(this, `onStart`),
            this._tTime !== s))
                return this;
            for (l = this._pt; l; )
                l.r(m, l.d),
                l = l._next;
            h && h.render(e < 0 ? e : h._dur * h._ease(c / this._dur), t, n) || this._startAt && (this._zTime = e),
            this._onUpdate && !t && (o && hf(this, e, t, n),
            ap(this, `onUpdate`)),
            this._repeat && u !== f && this.vars.onRepeat && !t && this.parent && ap(this, `onRepeat`),
            (s === this._tDur || !s) && this._tTime === s && (o && !this._onUpdate && hf(this, e, !0, !0),
            (e || !a) && (s === this._tDur && this._ts > 0 || !s && this._ts < 0) && ff(this, 1),
            !t && !(o && !r) && (s || r || p) && (ap(this, s === i ? `onComplete` : `onReverseComplete`, !0),
            this._prom && !(s < i && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    n.targets = function() {
        return this._targets
    }
    ,
    n.invalidate = function(t) {
        return (!t || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(t),
        e.prototype.invalidate.call(this, t)
    }
    ,
    n.resetTo = function(e, t, n, r, i) {
        yp || bp.wake(),
        this._ts || this.play();
        var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts), o;
        return this._initted || Up(this, a),
        o = this._ease(a / this._dur),
        Wp(this, e, t, n, r, o, a, i) ? this.resetTo(e, t, n, r, 1) : (xf(this, 0),
        this.parent || uf(this._dp, this, `_first`, `_last`, this._dp._sort ? `_start` : 0),
        this.render(0))
    }
    ,
    n.kill = function(e, t) {
        if (t === void 0 && (t = `all`),
        !e && (!t || t === `all`))
            return this._lazy = this._pt = 0,
            this.parent ? op(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Wu),
            this;
        if (this.timeline) {
            var n = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, t, Vp && Vp.vars.overwrite !== !0)._first || op(this),
            this.parent && n !== this.timeline.totalDuration() && Af(this, this._dur * this.timeline._tDur / n, 0, 1),
            this
        }
        var r = this._targets, i = e ? Hf(e) : r, a = this._ptLookup, o = this._pt, s, c, l, u, d, f, p;
        if ((!t || t === `all`) && lf(r, i))
            return t === `all` && (this._pt = 0),
            op(this);
        for (s = this._op = this._op || [],
        t !== `all` && (ed(t) && (d = {},
        Kd(t, function(e) {
            return d[e] = 1
        }),
        t = d),
        t = Gp(r, t)),
        p = r.length; p--; )
            if (~i.indexOf(r[p]))
                for (d in c = a[p],
                t === `all` ? (s[p] = t,
                u = c,
                l = {}) : (l = s[p] = s[p] || {},
                u = t),
                u)
                    f = c && c[d],
                    f && ((!(`kill` in f.d) || f.d.kill(d) === !0) && df(this, f, `_pt`),
                    delete c[d]),
                    l !== `all` && (l[d] = 1);
        return this._initted && !this._pt && o && op(this),
        this
    }
    ,
    t.to = function(e, n) {
        return new t(e,n,arguments[2])
    }
    ,
    t.from = function(e, t) {
        return Pf(1, arguments)
    }
    ,
    t.delayedCall = function(e, n, r, i) {
        return new t(n,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i
        })
    }
    ,
    t.fromTo = function(e, t, n) {
        return Pf(2, arguments)
    }
    ,
    t.set = function(e, n) {
        return n.duration = 0,
        n.repeatDelay || (n.repeat = 0),
        new t(e,n)
    }
    ,
    t.killTweensOf = function(e, t, n) {
        return yd.killTweensOf(e, t, n)
    }
    ,
    t
}(Fp);
nf(Xp.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}),
Kd(`staggerTo,staggerFrom,staggerFromTo`, function(e) {
    Xp[e] = function() {
        var t = new Ip
          , n = zf.call(arguments, 0);
        return n.splice(e === `staggerFromTo` ? 5 : 4, 0, 0),
        t[e].apply(t, n)
    }
});
var Zp = function(e, t, n) {
    return e[t] = n
}
  , Qp = function(e, t, n) {
    return e[t](n)
}
  , $p = function(e, t, n, r) {
    return e[t](r.fp, n)
}
  , em = function(e, t, n) {
    return e.setAttribute(t, n)
}
  , tm = function(e, t) {
    return td(e[t]) ? Qp : rd(e[t]) && e.setAttribute ? em : Zp
}
  , nm = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
}
  , rm = function(e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t)
}
  , im = function(e, t) {
    var n = t._pt
      , r = ``;
    if (!e && t.b)
        r = t.b;
    else if (e === 1 && t.e)
        r = t.e;
    else {
        for (; n; )
            r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + r,
            n = n._next;
        r += t.c
    }
    t.set(t.t, t.p, r, t)
}
  , am = function(e, t) {
    for (var n = t._pt; n; )
        n.r(e, n.d),
        n = n._next
}
  , om = function(e, t, n, r) {
    for (var i = this._pt, a; i; )
        a = i._next,
        i.p === r && i.modifier(e, t, n),
        i = a
}
  , sm = function(e) {
    for (var t = this._pt, n, r; t; )
        r = t._next,
        t.p === e && !t.op || t.op === e ? df(this, t, `_pt`) : t.dep || (n = 1),
        t = r;
    return !n
}
  , cm = function(e, t, n, r) {
    r.mSet(e, t, r.m.call(r.tween, n, r.mt), r)
}
  , lm = function(e) {
    for (var t = e._pt, n, r, i, a; t; ) {
        for (n = t._next,
        r = i; r && r.pr > t.pr; )
            r = r._next;
        (t._prev = r ? r._prev : a) ? t._prev._next = t : i = t,
        (t._next = r) ? r._prev = t : a = t,
        t = n
    }
    e._pt = i
}
  , um = function() {
    function e(e, t, n, r, i, a, o, s, c) {
        this.t = t,
        this.s = r,
        this.c = i,
        this.p = n,
        this.r = a || nm,
        this.d = o || this,
        this.set = s || Zp,
        this.pr = c || 0,
        this._next = e,
        e && (e._prev = this)
    }
    var t = e.prototype;
    return t.modifier = function(e, t, n) {
        this.mSet = this.mSet || this.set,
        this.set = cm,
        this.m = e,
        this.mt = n,
        this.tween = t
    }
    ,
    e
}();
Kd(Hd + `parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`, function(e) {
    return Pd[e] = 1
}),
Cd.TweenMax = Cd.TweenLite = Xp,
Cd.TimelineLite = Cd.TimelineMax = Ip,
yd = new Ip({
    sortChildren: !1,
    defaults: Hu,
    autoRemoveChildren: !0,
    id: `root`,
    smoothChildTiming: !0
}),
Vu.stringFilter = vp;
var dm = []
  , fm = {}
  , pm = []
  , mm = 0
  , hm = 0
  , gm = function(e) {
    return (fm[e] || pm).map(function(e) {
        return e()
    })
}
  , _m = function() {
    var e = Date.now()
      , t = [];
    e - mm > 2 && (gm(`matchMediaInit`),
    dm.forEach(function(e) {
        var n = e.queries, r = e.conditions, i, a, o, s;
        for (a in n)
            i = bd.matchMedia(n[a]).matches,
            i && (o = 1),
            i !== r[a] && (r[a] = i,
            s = 1);
        s && (e.revert(),
        o && t.push(e))
    }),
    gm(`matchMediaRevert`),
    t.forEach(function(e) {
        return e.onMatch(e, function(t) {
            return e.add(null, t)
        })
    }),
    mm = e,
    gm(`matchMedia`))
}
  , vm = function() {
    function e(e, t) {
        this.selector = t && Uf(t),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = hm++,
        e && this.add(e)
    }
    var t = e.prototype;
    return t.add = function(e, t, n) {
        td(e) && (n = t,
        t = e,
        e = td);
        var r = this
          , i = function() {
            var e = Gu, i = r.selector, a;
            return e && e !== r && e.data.push(r),
            n && (r.selector = Uf(n)),
            Gu = r,
            a = t.apply(r, arguments),
            td(a) && r._r.push(a),
            Gu = e,
            r.selector = i,
            r.isReverted = !1,
            a
        };
        return r.last = i,
        e === td ? i(r, function(e) {
            return r.add(null, e)
        }) : e ? r[e] = i : i
    }
    ,
    t.ignore = function(e) {
        var t = Gu;
        Gu = null,
        e(this),
        Gu = t
    }
    ,
    t.getTweens = function() {
        var t = [];
        return this.data.forEach(function(n) {
            return n instanceof e ? t.push.apply(t, n.getTweens()) : n instanceof Xp && !(n.parent && n.parent.data === `nested`) && t.push(n)
        }),
        t
    }
    ,
    t.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    t.kill = function(e, t) {
        var n = this;
        if (e ? (function() {
            for (var t = n.getTweens(), r = n.data.length, i; r--; )
                i = n.data[r],
                i.data === `isFlip` && (i.revert(),
                i.getChildren(!0, !0, !1).forEach(function(e) {
                    return t.splice(t.indexOf(e), 1)
                }));
            for (t.map(function(e) {
                return {
                    g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -1 / 0,
                    t: e
                }
            }).sort(function(e, t) {
                return t.g - e.g || -1 / 0
            }).forEach(function(t) {
                return t.t.revert(e)
            }),
            r = n.data.length; r--; )
                i = n.data[r],
                i instanceof Ip ? i.data !== `nested` && (i.scrollTrigger && i.scrollTrigger.revert(),
                i.kill()) : !(i instanceof Xp) && i.revert && i.revert(e);
            n._r.forEach(function(t) {
                return t(e, n)
            }),
            n.isReverted = !0
        }
        )() : this.data.forEach(function(e) {
            return e.kill && e.kill()
        }),
        this.clear(),
        t)
            for (var r = dm.length; r--; )
                dm[r].id === this.id && dm.splice(r, 1)
    }
    ,
    t.revert = function(e) {
        this.kill(e || {})
    }
    ,
    e
}()
  , ym = function() {
    function e(e) {
        this.contexts = [],
        this.scope = e,
        Gu && Gu.data.push(this)
    }
    var t = e.prototype;
    return t.add = function(e, t, n) {
        id(e) || (e = {
            matches: e
        });
        var r = new vm(0,n || this.scope), i = r.conditions = {}, a, o, s;
        for (o in Gu && !r.selector && (r.selector = Gu.selector),
        this.contexts.push(r),
        t = r.add(`onMatch`, t),
        r.queries = e,
        e)
            o === `all` ? s = 1 : (a = bd.matchMedia(e[o]),
            a && (dm.indexOf(r) < 0 && dm.push(r),
            (i[o] = a.matches) && (s = 1),
            a.addListener ? a.addListener(_m) : a.addEventListener(`change`, _m)));
        return s && t(r, function(e) {
            return r.add(null, e)
        }),
        this
    }
    ,
    t.revert = function(e) {
        this.kill(e || {})
    }
    ,
    t.kill = function(e) {
        this.contexts.forEach(function(t) {
            return t.kill(e, !0)
        })
    }
    ,
    e
}()
  , bm = {
    registerPlugin: function() {
        [...arguments].forEach(function(e) {
            return lp(e)
        })
    },
    timeline: function(e) {
        return new Ip(e)
    },
    getTweensOf: function(e, t) {
        return yd.getTweensOf(e, t)
    },
    getProperty: function(e, t, n, r) {
        ed(e) && (e = Hf(e)[0]);
        var i = Wd(e || {}).get
          , a = n ? tf : ef;
        return n === `native` && (n = ``),
        e && (t ? a((Rd[t] && Rd[t].get || i)(e, t, n, r)) : function(t, n, r) {
            return a((Rd[t] && Rd[t].get || i)(e, t, n, r))
        }
        )
    },
    quickSetter: function(e, t, n) {
        if (e = Hf(e),
        e.length > 1) {
            var r = e.map(function(e) {
                return wm.quickSetter(e, t, n)
            })
              , i = r.length;
            return function(e) {
                for (var t = i; t--; )
                    r[t](e)
            }
        }
        e = e[0] || {};
        var a = Rd[t]
          , o = Wd(e)
          , s = o.harness && (o.harness.aliases || {})[t] || t
          , c = a ? function(t) {
            var r = new a;
            sp._pt = 0,
            r.init(e, n ? t + n : t, sp, 0, [e]),
            r.render(1, r),
            sp._pt && am(1, sp)
        }
        : o.set(e, s);
        return a ? c : function(t) {
            return c(e, s, n ? t + n : t, o, 1)
        }
    },
    quickTo: function(e, t, n) {
        var r, i = wm.to(e, nf((r = {},
        r[t] = `+=0.1`,
        r.paused = !0,
        r.stagger = 0,
        r), n || {})), a = function(e, n, r) {
            return i.resetTo(t, e, n, r)
        };
        return a.tween = i,
        a
    },
    isTweening: function(e) {
        return yd.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = kp(e.ease, Hu.ease)),
        of(Hu, e || {})
    },
    config: function(e) {
        return of(Vu, e || {})
    },
    registerEffect: function(e) {
        var t = e.name
          , n = e.effect
          , r = e.plugins
          , i = e.defaults
          , a = e.extendTimeline;
        (r || ``).split(`,`).forEach(function(e) {
            return e && !Rd[e] && !Cd[e] && Od(t + ` effect requires ` + e + ` plugin.`)
        }),
        zd[t] = function(e, t, r) {
            return n(Hf(e), nf(t || {}, i), r)
        }
        ,
        a && (Ip.prototype[t] = function(e, n, r) {
            return this.add(zd[t](e, id(n) ? n : (r = n) && {}, this), r)
        }
        )
    },
    registerEase: function(e, t) {
        Sp[e] = kp(t)
    },
    parseEase: function(e, t) {
        return arguments.length ? kp(e, t) : Sp
    },
    getById: function(e) {
        return yd.getById(e)
    },
    exportRoot: function(e, t) {
        e === void 0 && (e = {});
        var n = new Ip(e), r, i;
        for (n.smoothChildTiming = ad(e.smoothChildTiming),
        yd.remove(n),
        n._dp = 0,
        n._time = n._tTime = yd._time,
        r = yd._first; r; )
            i = r._next,
            (t || !(!r._dur && r instanceof Xp && r.vars.onComplete === r._targets[0])) && Cf(n, r, r._start - r._delay),
            r = i;
        return Cf(yd, n, 0),
        n
    },
    context: function(e, t) {
        return e ? new vm(e,t) : Gu
    },
    matchMedia: function(e) {
        return new ym(e)
    },
    matchMediaRefresh: function() {
        return dm.forEach(function(e) {
            var t = e.conditions, n, r;
            for (r in t)
                t[r] && (t[r] = !1,
                n = 1);
            n && e.revert()
        }) || _m()
    },
    addEventListener: function(e, t) {
        var n = fm[e] || (fm[e] = []);
        ~n.indexOf(t) || n.push(t)
    },
    removeEventListener: function(e, t) {
        var n = fm[e]
          , r = n && n.indexOf(t);
        r >= 0 && n.splice(r, 1)
    },
    utils: {
        wrap: $f,
        wrapYoyo: ep,
        distribute: Gf,
        random: Jf,
        snap: qf,
        normalize: Zf,
        getUnit: Lf,
        clamp: Rf,
        splitColor: pp,
        toArray: Hf,
        selector: Uf,
        mapRange: np,
        pipe: Yf,
        unitize: Xf,
        interpolate: rp,
        shuffle: Wf
    },
    install: Ed,
    effects: zd,
    ticker: bp,
    updateRoot: Ip.updateRoot,
    plugins: Rd,
    globalTimeline: yd,
    core: {
        PropTween: um,
        globals: kd,
        Tween: Xp,
        Timeline: Ip,
        Animation: Fp,
        getCache: Wd,
        _removeLinkedListItem: df,
        reverting: function() {
            return Wu
        },
        context: function(e) {
            return e && Gu && (Gu.data.push(e),
            e._ctx = Gu),
            Gu
        },
        suppressOverwrites: function(e) {
            return Uu = e
        }
    }
};
Kd(`to,from,fromTo,delayedCall,set,killTweensOf`, function(e) {
    return bm[e] = Xp[e]
}),
bp.add(Ip.updateRoot),
sp = bm.to({}, {
    duration: 0
});
var xm = function(e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
        n = n._next;
    return n
}
  , Sm = function(e, t) {
    var n = e._targets, r, i, a;
    for (r in t)
        for (i = n.length; i--; )
            a = e._ptLookup[i][r],
            (a &&= a.d) && (a._pt && (a = xm(a, r)),
            a && a.modifier && a.modifier(t[r], e, n[i], r))
}
  , Cm = function(e, t) {
    return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function(e, n, r) {
            r._onInit = function(e) {
                var r, i;
                if (ed(n) && (r = {},
                Kd(n, function(e) {
                    return r[e] = 1
                }),
                n = r),
                t) {
                    for (i in r = {},
                    n)
                        r[i] = t(n[i]);
                    n = r
                }
                Sm(e, n)
            }
        }
    }
}
  , wm = bm.registerPlugin({
    name: `attr`,
    init: function(e, t, n, r, i) {
        var a, o, s;
        for (a in this.tween = n,
        t)
            s = e.getAttribute(a) || ``,
            o = this.add(e, `setAttribute`, (s || 0) + ``, t[a], r, i, 0, 0, a),
            o.op = a,
            o.b = s,
            this._props.push(a)
    },
    render: function(e, t) {
        for (var n = t._pt; n; )
            Wu ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d),
            n = n._next
    }
}, {
    name: `endArray`,
    headless: 1,
    init: function(e, t) {
        for (var n = t.length; n--; )
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
    }
}, Cm(`roundProps`, Kf), Cm(`modifiers`), Cm(`snap`, qf)) || bm;
Xp.version = Ip.version = wm.version = `3.15.0`,
Td = 1,
od() && xp(),
Sp.Power0,
Sp.Power1,
Sp.Power2,
Sp.Power3,
Sp.Power4,
Sp.Linear,
Sp.Quad,
Sp.Cubic,
Sp.Quart,
Sp.Quint,
Sp.Strong,
Sp.Elastic,
Sp.Back,
Sp.SteppedEase,
Sp.Bounce,
Sp.Sine,
Sp.Expo,
Sp.Circ;
var Tm, Em, Dm, Om, km, Am, jm, Mm = function() {
    return typeof window < `u`
}, Nm = {}, Pm = 180 / Math.PI, Fm = Math.PI / 180, Im = Math.atan2, Lm = 1e8, Rm = /([A-Z])/g, zm = /(left|right|width|margin|padding|x)/i, Bm = /[\s,\(]\S/, Vm = {
    autoAlpha: `opacity,visibility`,
    scale: `scaleX,scaleY`,
    alpha: `opacity`
}, Hm = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, Um = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, Wm = function(e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
}, Gm = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
}, Km = function(e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
}, qm = function(e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t)
}, Jm = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : t.b, t)
}, Ym = function(e, t, n) {
    return e.style[t] = n
}, Xm = function(e, t, n) {
    return e.style.setProperty(t, n)
}, Zm = function(e, t, n) {
    return e._gsap[t] = n
}, Qm = function(e, t, n) {
    return e._gsap.scaleX = e._gsap.scaleY = n
}, $m = function(e, t, n, r, i) {
    var a = e._gsap;
    a.scaleX = a.scaleY = n,
    a.renderTransform(i, a)
}, eh = function(e, t, n, r, i) {
    var a = e._gsap;
    a[t] = n,
    a.renderTransform(i, a)
}, th = `transform`, nh = th + `Origin`, rh = function e(t, n) {
    var r = this
      , i = this.target
      , a = i.style
      , o = i._gsap;
    if (t in Nm && a) {
        if (this.tfm = this.tfm || {},
        t !== `transform`)
            t = Vm[t] || t,
            ~t.indexOf(`,`) ? t.split(`,`).forEach(function(e) {
                return r.tfm[e] = Sh(i, e)
            }) : this.tfm[t] = o.x ? o[t] : Sh(i, t),
            t === nh && (this.tfm.zOrigin = o.zOrigin);
        else
            return Vm.transform.split(`,`).forEach(function(t) {
                return e.call(r, t, n)
            });
        if (this.props.indexOf(th) >= 0)
            return;
        o.svg && (this.svgo = i.getAttribute(`data-svg-origin`),
        this.props.push(nh, n, ``)),
        t = th
    }
    (a || n) && this.props.push(t, n, a[t])
}, ih = function(e) {
    e.translate && (e.removeProperty(`translate`),
    e.removeProperty(`scale`),
    e.removeProperty(`rotate`))
}, ah = function() {
    var e = this.props, t = this.target, n = t.style, r = t._gsap, i, a;
    for (i = 0; i < e.length; i += 3)
        e[i + 1] ? e[i + 1] === 2 ? t[e[i]](e[i + 2]) : t[e[i]] = e[i + 2] : e[i + 2] ? n[e[i]] = e[i + 2] : n.removeProperty(e[i].substr(0, 2) === `--` ? e[i] : e[i].replace(Rm, `-$1`).toLowerCase());
    if (this.tfm) {
        for (a in this.tfm)
            r[a] = this.tfm[a];
        r.svg && (r.renderTransform(),
        t.setAttribute(`data-svg-origin`, this.svgo || ``)),
        i = jm(),
        (!i || !i.isStart) && !n[th] && (ih(n),
        r.zOrigin && n[nh] && (n[nh] += ` ` + r.zOrigin + `px`,
        r.zOrigin = 0,
        r.renderTransform()),
        r.uncache = 1)
    }
}, oh = function(e, t) {
    var n = {
        target: e,
        props: [],
        revert: ah,
        save: rh
    };
    return e._gsap || wm.core.getCache(e),
    t && e.style && e.nodeType && t.split(`,`).forEach(function(e) {
        return n.save(e)
    }),
    n
}, sh, ch = function(e, t) {
    var n = Em.createElementNS ? Em.createElementNS((t || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`), e) : Em.createElement(e);
    return n && n.style ? n : Em.createElement(e)
}, lh = function e(t, n, r) {
    var i = getComputedStyle(t);
    return i[n] || i.getPropertyValue(n.replace(Rm, `-$1`).toLowerCase()) || i.getPropertyValue(n) || !r && e(t, dh(n) || n, 1) || ``
}, uh = `O,Moz,ms,Ms,Webkit`.split(`,`), dh = function(e, t, n) {
    var r = (t || km).style
      , i = 5;
    if (e in r && !n)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(uh[i] + e in r); )
        ;
    return i < 0 ? null : (i === 3 ? `ms` : i >= 0 ? uh[i] : ``) + e
}, fh = function() {
    Mm() && window.document && (Tm = window,
    Em = Tm.document,
    Dm = Em.documentElement,
    km = ch(`div`) || {
        style: {}
    },
    ch(`div`),
    th = dh(th),
    nh = th + `Origin`,
    km.style.cssText = `border-width:0;line-height:0;position:absolute;padding:0`,
    sh = !!dh(`perspective`),
    jm = wm.core.reverting,
    Om = 1)
}, ph = function(e) {
    var t = e.ownerSVGElement, n = ch(`svg`, t && t.getAttribute(`xmlns`) || `http://www.w3.org/2000/svg`), r = e.cloneNode(!0), i;
    r.style.display = `block`,
    n.appendChild(r),
    Dm.appendChild(n);
    try {
        i = r.getBBox()
    } catch {}
    return n.removeChild(r),
    Dm.removeChild(n),
    i
}, mh = function(e, t) {
    for (var n = t.length; n--; )
        if (e.hasAttribute(t[n]))
            return e.getAttribute(t[n])
}, hh = function(e) {
    var t, n;
    try {
        t = e.getBBox()
    } catch {
        t = ph(e),
        n = 1
    }
    return t && (t.width || t.height) || n || (t = ph(e)),
    t && !t.width && !t.x && !t.y ? {
        x: +mh(e, [`x`, `cx`, `x1`]) || 0,
        y: +mh(e, [`y`, `cy`, `y1`]) || 0,
        width: 0,
        height: 0
    } : t
}, gh = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && hh(e))
}, _h = function(e, t) {
    if (t) {
        var n = e.style, r;
        t in Nm && t !== nh && (t = th),
        n.removeProperty ? (r = t.substr(0, 2),
        (r === `ms` || t.substr(0, 6) === `webkit`) && (t = `-` + t),
        n.removeProperty(r === `--` ? t : t.replace(Rm, `-$1`).toLowerCase())) : n.removeAttribute(t)
    }
}, vh = function(e, t, n, r, i, a) {
    var o = new um(e._pt,t,n,0,1,a ? Jm : qm);
    return e._pt = o,
    o.b = r,
    o.e = i,
    e._props.push(n),
    o
}, yh = {
    deg: 1,
    rad: 1,
    turn: 1
}, bh = {
    grid: 1,
    flex: 1
}, xh = function e(t, n, r, i) {
    var a = parseFloat(r) || 0, o = (r + ``).trim().substr((a + ``).length) || `px`, s = km.style, c = zm.test(n), l = t.tagName.toLowerCase() === `svg`, u = (l ? `client` : `offset`) + (c ? `Width` : `Height`), d = 100, f = i === `px`, p = i === `%`, m, h, g, _;
    if (i === o || !a || yh[i] || yh[o])
        return a;
    if (o !== `px` && !f && (a = e(t, n, r, `px`)),
    _ = t.getCTM && gh(t),
    (p || o === `%`) && (Nm[n] || ~n.indexOf(`adius`)))
        return m = _ ? t.getBBox()[c ? `width` : `height`] : t[u],
        qd(p ? a / m * d : a / 100 * m);
    if (s[c ? `width` : `height`] = d + (f ? o : i),
    h = i !== `rem` && ~n.indexOf(`adius`) || i === `em` && t.appendChild && !l ? t : t.parentNode,
    _ && (h = (t.ownerSVGElement || {}).parentNode),
    (!h || h === Em || !h.appendChild) && (h = Em.body),
    g = h._gsap,
    g && p && g.width && c && g.time === bp.time && !g.uncache)
        return qd(a / g.width * d);
    if (p && (n === `height` || n === `width`)) {
        var v = t.style[n];
        t.style[n] = d + i,
        m = t[u],
        v ? t.style[n] = v : _h(t, n)
    } else
        (p || o === `%`) && !bh[lh(h, `display`)] && (s.position = lh(t, `position`)),
        h === t && (s.position = `static`),
        h.appendChild(km),
        m = km[u],
        h.removeChild(km),
        s.position = `absolute`;
    return c && p && (g = Wd(h),
    g.time = bp.time,
    g.width = h[u]),
    qd(f ? m * a / d : m && a ? d / m * a : 0)
}, Sh = function(e, t, n, r) {
    var i;
    return Om || fh(),
    t in Vm && t !== `transform` && (t = Vm[t],
    ~t.indexOf(`,`) && (t = t.split(`,`)[0])),
    Nm[t] && t !== `transform` ? (i = Ph(e, r),
    i = t === `transformOrigin` ? i.svg ? i.origin : Fh(lh(e, nh)) + ` ` + i.zOrigin + `px` : i[t]) : (i = e.style[t],
    (!i || i === `auto` || r || ~(i + ``).indexOf(`calc(`)) && (i = Dh[t] && Dh[t](e, t, n) || lh(e, t) || Gd(e, t) || (t === `opacity` ? 1 : 0))),
    n && !~(i + ``).trim().indexOf(` `) ? xh(e, t, i, n) + n : i
}, Ch = function(e, t, n, r) {
    if (!n || n === `none`) {
        var i = dh(t, e, 1)
          , a = i && lh(e, i, 1);
        a && a !== n ? (t = i,
        n = a) : t === `borderColor` && (n = lh(e, `borderTopColor`))
    }
    var o = new um(this._pt,e.style,t,0,1,im), s = 0, c = 0, l, u, d, f, p, m, h, g, _, v, y, b;
    if (o.b = n,
    o.e = r,
    n += ``,
    r += ``,
    r.substring(0, 6) === `var(--` && (r = lh(e, r.substring(4, r.indexOf(`)`)))),
    r === `auto` && (m = e.style[t],
    e.style[t] = r,
    r = lh(e, t) || r,
    m ? e.style[t] = m : _h(e, t)),
    l = [n, r],
    vp(l),
    n = l[0],
    r = l[1],
    d = n.match(md) || [],
    b = r.match(md) || [],
    b.length) {
        for (; u = md.exec(r); )
            h = u[0],
            _ = r.substring(s, u.index),
            p ? p = (p + 1) % 5 : (_.substr(-5) === `rgba(` || _.substr(-5) === `hsla(`) && (p = 1),
            h !== (m = d[c++] || ``) && (f = parseFloat(m) || 0,
            y = m.substr((f + ``).length),
            h.charAt(1) === `=` && (h = Yd(f, h) + y),
            g = parseFloat(h),
            v = h.substr((g + ``).length),
            s = md.lastIndex - v.length,
            v || (v = v || Vu.units[t] || y,
            s === r.length && (r += v,
            o.e += v)),
            y !== v && (f = xh(e, t, m, v) || 0),
            o._pt = {
                _next: o._pt,
                p: _ || c === 1 ? _ : `,`,
                s: f,
                c: g - f,
                m: p && p < 4 || t === `zIndex` ? Math.round : 0
            });
        o.c = s < r.length ? r.substring(s, r.length) : ``
    } else
        o.r = t === `display` && r === `none` ? Jm : qm;
    return gd.test(r) && (o.e = 0),
    this._pt = o,
    o
}, wh = {
    top: `0%`,
    bottom: `100%`,
    left: `0%`,
    right: `100%`,
    center: `50%`
}, Th = function(e) {
    var t = e.split(` `)
      , n = t[0]
      , r = t[1] || `50%`;
    return (n === `top` || n === `bottom` || r === `left` || r === `right`) && (e = n,
    n = r,
    r = e),
    t[0] = wh[n] || n,
    t[1] = wh[r] || r,
    t.join(` `)
}, Eh = function(e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
        var n = t.t, r = n.style, i = t.u, a = n._gsap, o, s, c;
        if (i === `all` || i === !0)
            r.cssText = ``,
            s = 1;
        else
            for (i = i.split(`,`),
            c = i.length; --c > -1; )
                o = i[c],
                Nm[o] && (s = 1,
                o = o === `transformOrigin` ? nh : th),
                _h(n, o);
        s && (_h(n, th),
        a && (a.svg && n.removeAttribute(`transform`),
        r.scale = r.rotate = r.translate = `none`,
        Ph(n, 1),
        a.uncache = 1,
        ih(r)))
    }
}, Dh = {
    clearProps: function(e, t, n, r, i) {
        if (i.data !== `isFromStart`) {
            var a = e._pt = new um(e._pt,t,n,0,0,Eh);
            return a.u = r,
            a.pr = -10,
            a.tween = i,
            e._props.push(n),
            1
        }
    }
}, Oh = [1, 0, 0, 1, 0, 0], kh = {}, Ah = function(e) {
    return e === `matrix(1, 0, 0, 1, 0, 0)` || e === `none` || !e
}, jh = function(e) {
    var t = lh(e, th);
    return Ah(t) ? Oh : t.substr(7).match(pd).map(qd)
}, Mh = function(e, t) {
    var n = e._gsap || Wd(e), r = e.style, i = jh(e), a, o, s, c;
    return n.svg && e.getAttribute(`transform`) ? (s = e.transform.baseVal.consolidate().matrix,
    i = [s.a, s.b, s.c, s.d, s.e, s.f],
    i.join(`,`) === `1,0,0,1,0,0` ? Oh : i) : (i === Oh && !e.offsetParent && e !== Dm && !n.svg && (s = r.display,
    r.display = `block`,
    a = e.parentNode,
    (!a || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1,
    o = e.nextElementSibling,
    Dm.appendChild(e)),
    i = jh(e),
    s ? r.display = s : _h(e, `display`),
    c && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : Dm.removeChild(e))),
    t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i)
}, Nh = function(e, t, n, r, i, a) {
    var o = e._gsap, s = i || Mh(e, !0), c = o.xOrigin || 0, l = o.yOrigin || 0, u = o.xOffset || 0, d = o.yOffset || 0, f = s[0], p = s[1], m = s[2], h = s[3], g = s[4], _ = s[5], v = t.split(` `), y = parseFloat(v[0]) || 0, b = parseFloat(v[1]) || 0, x, S, C, w;
    n ? s !== Oh && (S = f * h - p * m) && (C = y * (h / S) + b * (-m / S) + (m * _ - h * g) / S,
    w = y * (-p / S) + b * (f / S) - (f * _ - p * g) / S,
    y = C,
    b = w) : (x = hh(e),
    y = x.x + (~v[0].indexOf(`%`) ? y / 100 * x.width : y),
    b = x.y + (~(v[1] || v[0]).indexOf(`%`) ? b / 100 * x.height : b)),
    r || r !== !1 && o.smooth ? (g = y - c,
    _ = b - l,
    o.xOffset = u + (g * f + _ * m) - g,
    o.yOffset = d + (g * p + _ * h) - _) : o.xOffset = o.yOffset = 0,
    o.xOrigin = y,
    o.yOrigin = b,
    o.smooth = !!r,
    o.origin = t,
    o.originIsAbsolute = !!n,
    e.style[nh] = `0px 0px`,
    a && (vh(a, o, `xOrigin`, c, y),
    vh(a, o, `yOrigin`, l, b),
    vh(a, o, `xOffset`, u, o.xOffset),
    vh(a, o, `yOffset`, d, o.yOffset)),
    e.setAttribute(`data-svg-origin`, y + ` ` + b)
}, Ph = function(e, t) {
    var n = e._gsap || new Pp(e);
    if (`x` in n && !t && !n.uncache)
        return n;
    var r = e.style, i = n.scaleX < 0, a = `px`, o = `deg`, s = getComputedStyle(e), c = lh(e, nh) || `0`, l = u = d = m = h = g = _ = v = y = 0, u, d, f = p = 1, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, ee, te, ne, re, ie, F;
    return n.svg = !!(e.getCTM && gh(e)),
    s.translate && ((s.translate !== `none` || s.scale !== `none` || s.rotate !== `none`) && (r[th] = (s.translate === `none` ? `` : `translate3d(` + (s.translate + ` 0 0`).split(` `).slice(0, 3).join(`, `) + `) `) + (s.rotate === `none` ? `` : `rotate(` + s.rotate + `) `) + (s.scale === `none` ? `` : `scale(` + s.scale.split(` `).join(`,`) + `) `) + (s[th] === `none` ? `` : s[th])),
    r.scale = r.rotate = r.translate = `none`),
    S = Mh(e, n.svg),
    n.svg && (n.uncache ? (N = e.getBBox(),
    c = n.xOrigin - N.x + `px ` + (n.yOrigin - N.y) + `px`,
    M = ``) : M = !t && e.getAttribute(`data-svg-origin`),
    Nh(e, M || c, !!M || n.originIsAbsolute, n.smooth !== !1, S)),
    b = n.xOrigin || 0,
    x = n.yOrigin || 0,
    S !== Oh && (E = S[0],
    D = S[1],
    O = S[2],
    k = S[3],
    l = A = S[4],
    u = j = S[5],
    S.length === 6 ? (f = Math.sqrt(E * E + D * D),
    p = Math.sqrt(k * k + O * O),
    m = E || D ? Im(D, E) * Pm : 0,
    _ = O || k ? Im(O, k) * Pm + m : 0,
    _ && (p *= Math.abs(Math.cos(_ * Fm))),
    n.svg && (l -= b - (b * E + x * O),
    u -= x - (b * D + x * k))) : (F = S[6],
    re = S[7],
    ee = S[8],
    te = S[9],
    ne = S[10],
    ie = S[11],
    l = S[12],
    u = S[13],
    d = S[14],
    C = Im(F, ne),
    h = C * Pm,
    C && (w = Math.cos(-C),
    T = Math.sin(-C),
    M = A * w + ee * T,
    N = j * w + te * T,
    P = F * w + ne * T,
    ee = A * -T + ee * w,
    te = j * -T + te * w,
    ne = F * -T + ne * w,
    ie = re * -T + ie * w,
    A = M,
    j = N,
    F = P),
    C = Im(-O, ne),
    g = C * Pm,
    C && (w = Math.cos(-C),
    T = Math.sin(-C),
    M = E * w - ee * T,
    N = D * w - te * T,
    P = O * w - ne * T,
    ie = k * T + ie * w,
    E = M,
    D = N,
    O = P),
    C = Im(D, E),
    m = C * Pm,
    C && (w = Math.cos(C),
    T = Math.sin(C),
    M = E * w + D * T,
    N = A * w + j * T,
    D = D * w - E * T,
    j = j * w - A * T,
    E = M,
    A = N),
    h && Math.abs(h) + Math.abs(m) > 359.9 && (h = m = 0,
    g = 180 - g),
    f = qd(Math.sqrt(E * E + D * D + O * O)),
    p = qd(Math.sqrt(j * j + F * F)),
    C = Im(A, j),
    _ = Math.abs(C) > 2e-4 ? C * Pm : 0,
    y = ie ? 1 / (ie < 0 ? -ie : ie) : 0),
    n.svg && (M = e.getAttribute(`transform`),
    n.forceCSS = e.setAttribute(`transform`, ``) || !Ah(lh(e, th)),
    M && e.setAttribute(`transform`, M))),
    Math.abs(_) > 90 && Math.abs(_) < 270 && (i ? (f *= -1,
    _ += m <= 0 ? 180 : -180,
    m += m <= 0 ? 180 : -180) : (p *= -1,
    _ += _ <= 0 ? 180 : -180)),
    t ||= n.uncache,
    n.x = l - ((n.xPercent = l && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + a,
    n.y = u - ((n.yPercent = u && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + a,
    n.z = d + a,
    n.scaleX = qd(f),
    n.scaleY = qd(p),
    n.rotation = qd(m) + o,
    n.rotationX = qd(h) + o,
    n.rotationY = qd(g) + o,
    n.skewX = _ + o,
    n.skewY = v + o,
    n.transformPerspective = y + a,
    (n.zOrigin = parseFloat(c.split(` `)[2]) || !t && n.zOrigin || 0) && (r[nh] = Fh(c)),
    n.xOffset = n.yOffset = 0,
    n.force3D = Vu.force3D,
    n.renderTransform = n.svg ? Hh : sh ? Vh : Lh,
    n.uncache = 0,
    n
}, Fh = function(e) {
    return (e = e.split(` `))[0] + ` ` + e[1]
}, Ih = function(e, t, n) {
    var r = Lf(t);
    return qd(parseFloat(t) + parseFloat(xh(e, `x`, n + `px`, r))) + r
}, Lh = function(e, t) {
    t.z = `0px`,
    t.rotationY = t.rotationX = `0deg`,
    t.force3D = 0,
    Vh(e, t)
}, Rh = `0deg`, zh = `0px`, Bh = `) `, Vh = function(e, t) {
    var n = t || this
      , r = n.xPercent
      , i = n.yPercent
      , a = n.x
      , o = n.y
      , s = n.z
      , c = n.rotation
      , l = n.rotationY
      , u = n.rotationX
      , d = n.skewX
      , f = n.skewY
      , p = n.scaleX
      , m = n.scaleY
      , h = n.transformPerspective
      , g = n.force3D
      , _ = n.target
      , v = n.zOrigin
      , y = ``
      , b = g === `auto` && e && e !== 1 || g === !0;
    if (v && (u !== Rh || l !== Rh)) {
        var x = parseFloat(l) * Fm, S = Math.sin(x), C = Math.cos(x), w;
        x = parseFloat(u) * Fm,
        w = Math.cos(x),
        a = Ih(_, a, S * w * -v),
        o = Ih(_, o, -Math.sin(x) * -v),
        s = Ih(_, s, C * w * -v + v)
    }
    h !== zh && (y += `perspective(` + h + Bh),
    (r || i) && (y += `translate(` + r + `%, ` + i + `%) `),
    (b || a !== zh || o !== zh || s !== zh) && (y += s !== zh || b ? `translate3d(` + a + `, ` + o + `, ` + s + `) ` : `translate(` + a + `, ` + o + Bh),
    c !== Rh && (y += `rotate(` + c + Bh),
    l !== Rh && (y += `rotateY(` + l + Bh),
    u !== Rh && (y += `rotateX(` + u + Bh),
    (d !== Rh || f !== Rh) && (y += `skew(` + d + `, ` + f + Bh),
    (p !== 1 || m !== 1) && (y += `scale(` + p + `, ` + m + Bh),
    _.style[th] = y || `translate(0, 0)`
}, Hh = function(e, t) {
    var n = t || this, r = n.xPercent, i = n.yPercent, a = n.x, o = n.y, s = n.rotation, c = n.skewX, l = n.skewY, u = n.scaleX, d = n.scaleY, f = n.target, p = n.xOrigin, m = n.yOrigin, h = n.xOffset, g = n.yOffset, _ = n.forceCSS, v = parseFloat(a), y = parseFloat(o), b, x, S, C, w;
    s = parseFloat(s),
    c = parseFloat(c),
    l = parseFloat(l),
    l && (l = parseFloat(l),
    c += l,
    s += l),
    s || c ? (s *= Fm,
    c *= Fm,
    b = Math.cos(s) * u,
    x = Math.sin(s) * u,
    S = Math.sin(s - c) * -d,
    C = Math.cos(s - c) * d,
    c && (l *= Fm,
    w = Math.tan(c - l),
    w = Math.sqrt(1 + w * w),
    S *= w,
    C *= w,
    l && (w = Math.tan(l),
    w = Math.sqrt(1 + w * w),
    b *= w,
    x *= w)),
    b = qd(b),
    x = qd(x),
    S = qd(S),
    C = qd(C)) : (b = u,
    C = d,
    x = S = 0),
    (v && !~(a + ``).indexOf(`px`) || y && !~(o + ``).indexOf(`px`)) && (v = xh(f, `x`, a, `px`),
    y = xh(f, `y`, o, `px`)),
    (p || m || h || g) && (v = qd(v + p - (p * b + m * S) + h),
    y = qd(y + m - (p * x + m * C) + g)),
    (r || i) && (w = f.getBBox(),
    v = qd(v + r / 100 * w.width),
    y = qd(y + i / 100 * w.height)),
    w = `matrix(` + b + `,` + x + `,` + S + `,` + C + `,` + v + `,` + y + `)`,
    f.setAttribute(`transform`, w),
    _ && (f.style[th] = w)
}, Uh = function(e, t, n, r, i) {
    var a = 360, o = ed(i), s = parseFloat(i) * (o && ~i.indexOf(`rad`) ? Pm : 1) - r, c = r + s + `deg`, l, u;
    return o && (l = i.split(`_`)[1],
    l === `short` && (s %= a,
    s !== s % (a / 2) && (s += s < 0 ? a : -a)),
    l === `cw` && s < 0 ? s = (s + a * Lm) % a - ~~(s / a) * a : l === `ccw` && s > 0 && (s = (s - a * Lm) % a - ~~(s / a) * a)),
    e._pt = u = new um(e._pt,t,n,r,s,Um),
    u.e = c,
    u.u = `deg`,
    e._props.push(n),
    u
}, Wh = function(e, t) {
    for (var n in t)
        e[n] = t[n];
    return e
}, Gh = function(e, t, n) {
    var r = Wh({}, n._gsap), i = `perspective,force3D,transformOrigin,svgOrigin`, a = n.style, o, s, c, l, u, d, f, p;
    for (s in r.svg ? (c = n.getAttribute(`transform`),
    n.setAttribute(`transform`, ``),
    a[th] = t,
    o = Ph(n, 1),
    _h(n, th),
    n.setAttribute(`transform`, c)) : (c = getComputedStyle(n)[th],
    a[th] = t,
    o = Ph(n, 1),
    a[th] = c),
    Nm)
        c = r[s],
        l = o[s],
        c !== l && i.indexOf(s) < 0 && (f = Lf(c),
        p = Lf(l),
        u = f === p ? parseFloat(c) : xh(n, s, c, p),
        d = parseFloat(l),
        e._pt = new um(e._pt,o,s,u,d - u,Hm),
        e._pt.u = p || 0,
        e._props.push(s));
    Wh(o, r)
};
Kd(`padding,margin,Width,Radius`, function(e, t) {
    var n = `Top`
      , r = `Right`
      , i = `Bottom`
      , a = `Left`
      , o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(function(n) {
        return t < 2 ? e + n : `border` + n + e
    });
    Dh[t > 1 ? `border` + e : e] = function(e, t, n, r, i) {
        var a, s;
        if (arguments.length < 4)
            return a = o.map(function(t) {
                return Sh(e, t, n)
            }),
            s = a.join(` `),
            s.split(a[0]).length === 5 ? a[0] : s;
        a = (r + ``).split(` `),
        s = {},
        o.forEach(function(e, t) {
            return s[e] = a[t] = a[t] || a[(t - 1) / 2 | 0]
        }),
        e.init(t, s, i)
    }
});
var Kh = {
    name: `css`,
    register: fh,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, n, r, i) {
        var a = this._props, o = e.style, s = n.vars.startAt, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w;
        for (m in Om || fh(),
        this.styles = this.styles || oh(e),
        C = this.styles.props,
        this.tween = n,
        t)
            if (m !== `autoRound` && (l = t[m],
            !(Rd[m] && Bp(m, t, n, r, e, i)))) {
                if (f = typeof l,
                p = Dh[m],
                f === `function` && (l = l.call(n, r, e, i),
                f = typeof l),
                f === `string` && ~l.indexOf(`random(`) && (l = tp(l)),
                p)
                    p(this, e, m, l, n) && (S = 1);
                else if (m.substr(0, 2) === `--`)
                    c = (getComputedStyle(e).getPropertyValue(m) + ``).trim(),
                    l += ``,
                    gp.lastIndex = 0,
                    gp.test(c) || (h = Lf(c),
                    g = Lf(l),
                    g ? h !== g && (c = xh(e, m, c, g) + g) : h && (l += h)),
                    this.add(o, `setProperty`, c, l, r, i, 0, 0, m),
                    a.push(m),
                    C.push(m, 0, o[m]);
                else if (f !== `undefined`) {
                    if (s && m in s ? (c = typeof s[m] == `function` ? s[m].call(n, r, e, i) : s[m],
                    ed(c) && ~c.indexOf(`random(`) && (c = tp(c)),
                    Lf(c + ``) || c === `auto` || (c += Vu.units[m] || Lf(Sh(e, m)) || ``),
                    (c + ``).charAt(1) === `=` && (c = Sh(e, m))) : c = Sh(e, m),
                    d = parseFloat(c),
                    _ = f === `string` && l.charAt(1) === `=` && l.substr(0, 2),
                    _ && (l = l.substr(2)),
                    u = parseFloat(l),
                    m in Vm && (m === `autoAlpha` && (d === 1 && Sh(e, `visibility`) === `hidden` && u && (d = 0),
                    C.push(`visibility`, 0, o.visibility),
                    vh(this, o, `visibility`, d ? `inherit` : `hidden`, u ? `inherit` : `hidden`, !u)),
                    m !== `scale` && m !== `transform` && (m = Vm[m],
                    ~m.indexOf(`,`) && (m = m.split(`,`)[0]))),
                    v = m in Nm,
                    v) {
                        if (this.styles.save(m),
                        w = l,
                        f === `string` && l.substring(0, 6) === `var(--`) {
                            if (l = lh(e, l.substring(4, l.indexOf(`)`))),
                            l.substring(0, 5) === `calc(`) {
                                var T = e.style.perspective;
                                e.style.perspective = l,
                                l = lh(e, `perspective`),
                                T ? e.style.perspective = T : _h(e, `perspective`)
                            }
                            u = parseFloat(l)
                        }
                        if (y || (b = e._gsap,
                        b.renderTransform && !t.parseTransform || Ph(e, t.parseTransform),
                        x = t.smoothOrigin !== !1 && b.smooth,
                        y = this._pt = new um(this._pt,o,th,0,1,b.renderTransform,b,0,-1),
                        y.dep = 1),
                        m === `scale`)
                            this._pt = new um(this._pt,b,`scaleY`,b.scaleY,(_ ? Yd(b.scaleY, _ + u) : u) - b.scaleY || 0,Hm),
                            this._pt.u = 0,
                            a.push(`scaleY`, m),
                            m += `X`;
                        else if (m === `transformOrigin`) {
                            C.push(nh, 0, o[nh]),
                            l = Th(l),
                            b.svg ? Nh(e, l, 0, x, 0, this) : (g = parseFloat(l.split(` `)[2]) || 0,
                            g !== b.zOrigin && vh(this, b, `zOrigin`, b.zOrigin, g),
                            vh(this, o, m, Fh(c), Fh(l)));
                            continue
                        } else if (m === `svgOrigin`) {
                            Nh(e, l, 1, x, 0, this);
                            continue
                        } else if (m in kh) {
                            Uh(this, b, m, d, _ ? Yd(d, _ + l) : l);
                            continue
                        } else if (m === `smoothOrigin`) {
                            vh(this, b, `smooth`, b.smooth, l);
                            continue
                        } else if (m === `force3D`) {
                            b[m] = l;
                            continue
                        } else if (m === `transform`) {
                            Gh(this, l, e);
                            continue
                        }
                    } else
                        m in o || (m = dh(m) || m);
                    if (v || (u || u === 0) && (d || d === 0) && !Bm.test(l) && m in o)
                        h = (c + ``).substr((d + ``).length),
                        u ||= 0,
                        g = Lf(l) || (m in Vu.units ? Vu.units[m] : h),
                        h !== g && (d = xh(e, m, c, g)),
                        this._pt = new um(this._pt,v ? b : o,m,d,(_ ? Yd(d, _ + u) : u) - d,!v && (g === `px` || m === `zIndex`) && t.autoRound !== !1 ? Km : Hm),
                        this._pt.u = g || 0,
                        v && w !== l ? (this._pt.b = c,
                        this._pt.e = w,
                        this._pt.r = Gm) : h !== g && g !== `%` && (this._pt.b = c,
                        this._pt.r = Wm);
                    else if (m in o)
                        Ch.call(this, e, m, c, _ ? _ + l : l);
                    else if (m in e)
                        this.add(e, m, c || e[m], _ ? _ + l : l, r, i);
                    else if (m !== `parseTransform`) {
                        Dd(m, l);
                        continue
                    }
                    v || (m in o ? C.push(m, 0, o[m]) : typeof e[m] == `function` ? C.push(m, 2, e[m]()) : C.push(m, 1, c || e[m])),
                    a.push(m)
                }
            }
        S && lm(this)
    },
    render: function(e, t) {
        if (t.tween._time || !jm())
            for (var n = t._pt; n; )
                n.r(e, n.d),
                n = n._next;
        else
            t.styles.revert()
    },
    get: Sh,
    aliases: Vm,
    getSetter: function(e, t, n) {
        var r = Vm[t];
        return r && r.indexOf(`,`) < 0 && (t = r),
        t in Nm && t !== nh && (e._gsap.x || Sh(e, `x`)) ? n && Am === n ? t === `scale` ? Qm : Zm : (Am = n || {}) && (t === `scale` ? $m : eh) : e.style && !rd(e.style[t]) ? Ym : ~t.indexOf(`-`) ? Xm : tm(e, t)
    },
    core: {
        _removeProperty: _h,
        _getMatrix: Mh
    }
};
wm.utils.checkPrefix = dh,
wm.core.getStyleSaver = oh,
(function(e, t, n, r) {
    var i = Kd(e + `,` + t + `,` + n, function(e) {
        Nm[e] = 1
    });
    Kd(t, function(e) {
        Vu.units[e] = `deg`,
        kh[e] = 1
    }),
    Vm[i[13]] = e + `,` + t,
    Kd(r, function(e) {
        var t = e.split(`:`);
        Vm[t[1]] = i[t[0]]
    })
}
)(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`, `rotation,rotationX,rotationY,skewX,skewY`, `transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`, `0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),
Kd(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`, function(e) {
    Vu.units[e] = `px`
}),
wm.registerPlugin(Kh);
var qh = wm.registerPlugin(Kh) || wm;
qh.core.Tween;
function Jh(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        `value` in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
}
function Yh(e, t, n) {
    return t && Jh(e.prototype, t),
    n && Jh(e, n),
    e
}
var Xh, Zh, Qh, $h, eg, tg, ng, rg, ig, ag, og, sg, cg, lg = function() {
    return Xh || typeof window < `u` && (Xh = window.gsap) && Xh.registerPlugin && Xh
}, ug = 1, dg = [], Y = [], fg = [], pg = Date.now, mg = function(e, t) {
    return t
}, hg = function() {
    var e = ig.core
      , t = e.bridge || {}
      , n = e._scrollers
      , r = e._proxies;
    n.push.apply(n, Y),
    r.push.apply(r, fg),
    Y = n,
    fg = r,
    mg = function(e, n) {
        return t[e](n)
    }
}, gg = function(e, t) {
    return ~fg.indexOf(e) && fg[fg.indexOf(e) + 1][t]
}, _g = function(e) {
    return !!~ag.indexOf(e)
}, vg = function(e, t, n, r, i) {
    return e.addEventListener(t, n, {
        passive: r !== !1,
        capture: !!i
    })
}, yg = function(e, t, n, r) {
    return e.removeEventListener(t, n, !!r)
}, bg = `scrollLeft`, xg = `scrollTop`, Sg = function() {
    return og && og.isPressed || Y.cache++
}, Cg = function(e, t) {
    var n = function n(r) {
        if (r || r === 0) {
            ug && (Qh.history.scrollRestoration = `manual`);
            var i = og && og.isPressed;
            r = n.v = Math.round(r) || (og && og.iOS ? 1 : 0),
            e(r),
            n.cacheID = Y.cache,
            i && mg(`ss`, r)
        } else
            (t || Y.cache !== n.cacheID || mg(`ref`)) && (n.cacheID = Y.cache,
            n.v = e());
        return n.v + n.offset
    };
    return n.offset = 0,
    e && n
}, wg = {
    s: bg,
    p: `left`,
    p2: `Left`,
    os: `right`,
    os2: `Right`,
    d: `width`,
    d2: `Width`,
    a: `x`,
    sc: Cg(function(e) {
        return arguments.length ? Qh.scrollTo(e, Tg.sc()) : Qh.pageXOffset || $h[bg] || eg[bg] || tg[bg] || 0
    })
}, Tg = {
    s: xg,
    p: `top`,
    p2: `Top`,
    os: `bottom`,
    os2: `Bottom`,
    d: `height`,
    d2: `Height`,
    a: `y`,
    op: wg,
    sc: Cg(function(e) {
        return arguments.length ? Qh.scrollTo(wg.sc(), e) : Qh.pageYOffset || $h[xg] || eg[xg] || tg[xg] || 0
    })
}, Eg = function(e, t) {
    return (t && t._ctx && t._ctx.selector || Xh.utils.toArray)(e)[0] || (typeof e == `string` && Xh.config().nullTargetWarn !== !1 ? console.warn(`Element not found:`, e) : null)
}, Dg = function(e, t) {
    for (var n = t.length; n--; )
        if (t[n] === e || t[n].contains(e))
            return !0;
    return !1
}, Og = function(e, t) {
    var n = t.s
      , r = t.sc;
    _g(e) && (e = $h.scrollingElement || eg);
    var i = Y.indexOf(e)
      , a = r === Tg.sc ? 1 : 2;
    !~i && (i = Y.push(e) - 1),
    Y[i + a] || vg(e, `scroll`, Sg);
    var o = Y[i + a]
      , s = o || (Y[i + a] = Cg(gg(e, n), !0) || (_g(e) ? r : Cg(function(t) {
        return arguments.length ? e[n] = t : e[n]
    })));
    return s.target = e,
    o || (s.smooth = Xh.getProperty(e, `scrollBehavior`) === `smooth`),
    s
}, kg = function(e, t, n) {
    var r = e
      , i = e
      , a = pg()
      , o = a
      , s = t || 50
      , c = Math.max(500, s * 3)
      , l = function(e, t) {
        var c = pg();
        t || c - a > s ? (i = r,
        r = e,
        o = a,
        a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o)
    };
    return {
        update: l,
        reset: function() {
            i = r = n ? 0 : r,
            o = a = 0
        },
        getVelocity: function(e) {
            var t = o
              , s = i
              , u = pg();
            return (e || e === 0) && e !== r && l(e),
            a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3
        }
    }
}, Ag = function(e, t) {
    return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, jg = function(e) {
    var t = Math.max.apply(Math, e)
      , n = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(n) ? t : n
}, Mg = function() {
    ig = Xh.core.globals().ScrollTrigger,
    ig && ig.core && hg()
}, Ng = function(e) {
    return Xh = e || lg(),
    !Zh && Xh && typeof document < `u` && document.body && (Qh = window,
    $h = document,
    eg = $h.documentElement,
    tg = $h.body,
    ag = [Qh, $h, eg, tg],
    Xh.utils.clamp,
    cg = Xh.core.context || function() {}
    ,
    rg = `onpointerenter` in tg ? `pointer` : `mouse`,
    ng = Pg.isTouch = Qh.matchMedia && Qh.matchMedia(`(hover: none), (pointer: coarse)`).matches ? 1 : `ontouchstart` in Qh || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    sg = Pg.eventTypes = (`ontouchstart` in eg ? `touchstart,touchmove,touchcancel,touchend` : `onpointerdown` in eg ? `pointerdown,pointermove,pointercancel,pointerup` : `mousedown,mousemove,mouseup,mouseup`).split(`,`),
    setTimeout(function() {
        return ug = 0
    }, 500),
    Zh = 1),
    ig || Mg(),
    Zh
};
wg.op = Tg,
Y.cache = 0;
var Pg = function() {
    function e(e) {
        this.init(e)
    }
    var t = e.prototype;
    return t.init = function(e) {
        Zh || Ng(Xh) || console.warn(`Please gsap.registerPlugin(Observer)`),
        ig || Mg();
        var t = e.tolerance
          , n = e.dragMinimum
          , r = e.type
          , i = e.target
          , a = e.lineHeight
          , o = e.debounce
          , s = e.preventDefault
          , c = e.onStop
          , l = e.onStopDelay
          , u = e.ignore
          , d = e.wheelSpeed
          , f = e.event
          , p = e.onDragStart
          , m = e.onDragEnd
          , h = e.onDrag
          , g = e.onPress
          , _ = e.onRelease
          , v = e.onRight
          , y = e.onLeft
          , b = e.onUp
          , x = e.onDown
          , S = e.onChangeX
          , C = e.onChangeY
          , w = e.onChange
          , T = e.onToggleX
          , E = e.onToggleY
          , D = e.onHover
          , O = e.onHoverEnd
          , k = e.onMove
          , A = e.ignoreCheck
          , j = e.isNormalizer
          , M = e.onGestureStart
          , N = e.onGestureEnd
          , P = e.onWheel
          , ee = e.onEnable
          , te = e.onDisable
          , ne = e.onClick
          , re = e.scrollSpeed
          , ie = e.capture
          , F = e.allowClicks
          , ae = e.lockAxis
          , oe = e.onLockAxis;
        this.target = i = Eg(i) || eg,
        this.vars = e,
        u &&= Xh.utils.toArray(u),
        t ||= 1e-9,
        n ||= 0,
        d ||= 1,
        re ||= 1,
        r ||= `wheel,touch,pointer`,
        o = o !== !1,
        a ||= parseFloat(Qh.getComputedStyle(tg).lineHeight) || 22;
        var se, ce, I, le, ue, de, fe, L = this, pe = 0, me = 0, R = e.passive || !s && e.passive !== !1, he = Og(i, wg), ge = Og(i, Tg), _e = he(), ve = ge(), ye = ~r.indexOf(`touch`) && !~r.indexOf(`pointer`) && sg[0] === `pointerdown`, be = _g(i), z = i.ownerDocument || $h, xe = [0, 0, 0], Se = [0, 0, 0], Ce = 0, we = function() {
            return Ce = pg()
        }, Te = function(e, t) {
            return (L.event = e) && u && Dg(e.target, u) || t && ye && e.pointerType !== `touch` || A && A(e, t)
        }, Ee = function() {
            L._vx.reset(),
            L._vy.reset(),
            ce.pause(),
            c && c(L)
        }, De = function() {
            var e = L.deltaX = jg(xe)
              , n = L.deltaY = jg(Se)
              , r = Math.abs(e) >= t
              , i = Math.abs(n) >= t;
            w && (r || i) && w(L, e, n, xe, Se),
            r && (v && L.deltaX > 0 && v(L),
            y && L.deltaX < 0 && y(L),
            S && S(L),
            T && L.deltaX < 0 != pe < 0 && T(L),
            pe = L.deltaX,
            xe[0] = xe[1] = xe[2] = 0),
            i && (x && L.deltaY > 0 && x(L),
            b && L.deltaY < 0 && b(L),
            C && C(L),
            E && L.deltaY < 0 != me < 0 && E(L),
            me = L.deltaY,
            Se[0] = Se[1] = Se[2] = 0),
            (le || I) && (k && k(L),
            I &&= (p && I === 1 && p(L),
            h && h(L),
            0),
            le = !1),
            de && !(de = !1) && oe && oe(L),
            ue &&= (P(L),
            !1),
            se = 0
        }, Oe = function(e, t, n) {
            xe[n] += e,
            Se[n] += t,
            L._vx.update(e),
            L._vy.update(t),
            o ? se ||= requestAnimationFrame(De) : De()
        }, ke = function(e, t) {
            ae && !fe && (L.axis = fe = Math.abs(e) > Math.abs(t) ? `x` : `y`,
            de = !0),
            fe !== `y` && (xe[2] += e,
            L._vx.update(e, !0)),
            fe !== `x` && (Se[2] += t,
            L._vy.update(t, !0)),
            o ? se ||= requestAnimationFrame(De) : De()
        }, Ae = function(e) {
            if (!Te(e, 1)) {
                e = Ag(e, s);
                var t = e.clientX
                  , r = e.clientY
                  , i = t - L.x
                  , a = r - L.y
                  , o = L.isDragging;
                L.x = t,
                L.y = r,
                (o || (i || a) && (Math.abs(L.startX - t) >= n || Math.abs(L.startY - r) >= n)) && (I ||= o ? 2 : 1,
                o || (L.isDragging = !0),
                ke(i, a))
            }
        }, je = L.onPress = function(e) {
            Te(e, 1) || e && e.button || (L.axis = fe = null,
            ce.pause(),
            L.isPressed = !0,
            e = Ag(e),
            pe = me = 0,
            L.startX = L.x = e.clientX,
            L.startY = L.y = e.clientY,
            L._vx.reset(),
            L._vy.reset(),
            vg(j ? i : z, sg[1], Ae, R, !0),
            L.deltaX = L.deltaY = 0,
            g && g(L))
        }
        , Me = L.onRelease = function(e) {
            if (!Te(e, 1)) {
                yg(j ? i : z, sg[1], Ae, !0);
                var t = !isNaN(L.y - L.startY)
                  , n = L.isDragging
                  , r = n && (Math.abs(L.x - L.startX) > 3 || Math.abs(L.y - L.startY) > 3)
                  , a = Ag(e);
                !r && t && (L._vx.reset(),
                L._vy.reset(),
                s && F && Xh.delayedCall(.08, function() {
                    if (pg() - Ce > 300 && !e.defaultPrevented) {
                        if (e.target.click)
                            e.target.click();
                        else if (z.createEvent) {
                            var t = z.createEvent(`MouseEvents`);
                            t.initMouseEvent(`click`, !0, !0, Qh, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null),
                            e.target.dispatchEvent(t)
                        }
                    }
                })),
                L.isDragging = L.isGesturing = L.isPressed = !1,
                c && n && !j && ce.restart(!0),
                I && De(),
                m && n && m(L),
                _ && _(L, r)
            }
        }
        , Ne = function(e) {
            return e.touches && e.touches.length > 1 && (L.isGesturing = !0) && M(e, L.isDragging)
        }, Pe = function() {
            return (L.isGesturing = !1) || N(L)
        }, Fe = function(e) {
            if (!Te(e)) {
                var t = he()
                  , n = ge();
                Oe((t - _e) * re, (n - ve) * re, 1),
                _e = t,
                ve = n,
                c && ce.restart(!0)
            }
        }, Ie = function(e) {
            if (!Te(e)) {
                e = Ag(e, s),
                P && (ue = !0);
                var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? Qh.innerHeight : 1) * d;
                Oe(e.deltaX * t, e.deltaY * t, 0),
                c && !j && ce.restart(!0)
            }
        }, Le = function(e) {
            if (!Te(e)) {
                var t = e.clientX
                  , n = e.clientY
                  , r = t - L.x
                  , i = n - L.y;
                L.x = t,
                L.y = n,
                le = !0,
                c && ce.restart(!0),
                (r || i) && ke(r, i)
            }
        }, Re = function(e) {
            L.event = e,
            D(L)
        }, ze = function(e) {
            L.event = e,
            O(L)
        }, Be = function(e) {
            return Te(e) || Ag(e, s) && ne(L)
        };
        ce = L._dc = Xh.delayedCall(l || .25, Ee).pause(),
        L.deltaX = L.deltaY = 0,
        L._vx = kg(0, 50, !0),
        L._vy = kg(0, 50, !0),
        L.scrollX = he,
        L.scrollY = ge,
        L.isDragging = L.isGesturing = L.isPressed = !1,
        cg(this),
        L.enable = function(e) {
            return L.isEnabled || (vg(be ? z : i, `scroll`, Sg),
            r.indexOf(`scroll`) >= 0 && vg(be ? z : i, `scroll`, Fe, R, ie),
            r.indexOf(`wheel`) >= 0 && vg(i, `wheel`, Ie, R, ie),
            (r.indexOf(`touch`) >= 0 && ng || r.indexOf(`pointer`) >= 0) && (vg(i, sg[0], je, R, ie),
            vg(z, sg[2], Me),
            vg(z, sg[3], Me),
            F && vg(i, `click`, we, !0, !0),
            ne && vg(i, `click`, Be),
            M && vg(z, `gesturestart`, Ne),
            N && vg(z, `gestureend`, Pe),
            D && vg(i, rg + `enter`, Re),
            O && vg(i, rg + `leave`, ze),
            k && vg(i, rg + `move`, Le)),
            L.isEnabled = !0,
            L.isDragging = L.isGesturing = L.isPressed = le = I = !1,
            L._vx.reset(),
            L._vy.reset(),
            _e = he(),
            ve = ge(),
            e && e.type && je(e),
            ee && ee(L)),
            L
        }
        ,
        L.disable = function() {
            L.isEnabled && (dg.filter(function(e) {
                return e !== L && _g(e.target)
            }).length || yg(be ? z : i, `scroll`, Sg),
            L.isPressed && (L._vx.reset(),
            L._vy.reset(),
            yg(j ? i : z, sg[1], Ae, !0)),
            yg(be ? z : i, `scroll`, Fe, ie),
            yg(i, `wheel`, Ie, ie),
            yg(i, sg[0], je, ie),
            yg(z, sg[2], Me),
            yg(z, sg[3], Me),
            yg(i, `click`, we, !0),
            yg(i, `click`, Be),
            yg(z, `gesturestart`, Ne),
            yg(z, `gestureend`, Pe),
            yg(i, rg + `enter`, Re),
            yg(i, rg + `leave`, ze),
            yg(i, rg + `move`, Le),
            L.isEnabled = L.isPressed = L.isDragging = !1,
            te && te(L))
        }
        ,
        L.kill = L.revert = function() {
            L.disable();
            var e = dg.indexOf(L);
            e >= 0 && dg.splice(e, 1),
            og === L && (og = 0)
        }
        ,
        dg.push(L),
        j && _g(i) && (og = L),
        L.enable(f)
    }
    ,
    Yh(e, [{
        key: `velocityX`,
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: `velocityY`,
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    e
}();
Pg.version = `3.15.0`,
Pg.create = function(e) {
    return new Pg(e)
}
,
Pg.register = Ng,
Pg.getAll = function() {
    return dg.slice()
}
,
Pg.getById = function(e) {
    return dg.filter(function(t) {
        return t.vars.id === e
    })[0]
}
,
lg() && Xh.registerPlugin(Pg);
var X, Fg, Z, Ig, Lg, Rg, zg, Bg, Vg, Hg, Ug, Wg, Gg, Kg, qg, Jg, Yg, Xg, Zg, Qg, $g, e_, t_, n_, r_, i_, a_, o_, s_, c_, l_, u_, d_, f_, p_ = 1, m_ = Date.now, h_ = m_(), g_ = 0, __ = 0, v_ = function(e, t, n) {
    var r = P_(e) && (e.substr(0, 6) === `clamp(` || e.indexOf(`max`) > -1);
    return n[`_` + t + `Clamp`] = r,
    r ? e.substr(6, e.length - 7) : e
}, y_ = function(e, t) {
    return t && (!P_(e) || e.substr(0, 6) !== `clamp(`) ? `clamp(` + e + `)` : e
}, b_ = function e() {
    return __ && requestAnimationFrame(e)
}, x_ = function() {
    return Kg = 1
}, S_ = function() {
    return Kg = 0
}, C_ = function(e) {
    return e
}, w_ = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, T_ = function() {
    return typeof window < `u`
}, E_ = function() {
    return X || T_() && (X = window.gsap) && X.registerPlugin && X
}, D_ = function(e) {
    return !!~zg.indexOf(e)
}, O_ = function(e) {
    return (e === `Height` ? l_ : Z[`inner` + e]) || Lg[`client` + e] || Rg[`client` + e]
}, k_ = function(e) {
    return gg(e, `getBoundingClientRect`) || (D_(e) ? function() {
        return ty.width = Z.innerWidth,
        ty.height = l_,
        ty
    }
    : function() {
        return av(e)
    }
    )
}, A_ = function(e, t, n) {
    var r = n.d
      , i = n.d2
      , a = n.a;
    return (a = gg(e, `getBoundingClientRect`)) ? function() {
        return a()[r]
    }
    : function() {
        return (t ? O_(i) : e[`client` + i]) || 0
    }
}, j_ = function(e, t) {
    return !t || ~fg.indexOf(e) ? k_(e) : function() {
        return ty
    }
}, M_ = function(e, t) {
    var n = t.s
      , r = t.d2
      , i = t.d
      , a = t.a;
    return Math.max(0, (n = `scroll` + r) && (a = gg(e, n)) ? a() - k_(e)()[i] : D_(e) ? (Lg[n] || Rg[n]) - O_(r) : e[n] - e[`offset` + r])
}, N_ = function(e, t) {
    for (var n = 0; n < Zg.length; n += 3)
        (!t || ~t.indexOf(Zg[n + 1])) && e(Zg[n], Zg[n + 1], Zg[n + 2])
}, P_ = function(e) {
    return typeof e == `string`
}, F_ = function(e) {
    return typeof e == `function`
}, I_ = function(e) {
    return typeof e == `number`
}, L_ = function(e) {
    return typeof e == `object`
}, R_ = function(e, t, n) {
    return e && e.progress(t ? 0 : 1) && n && e.pause()
}, z_ = function(e, t, n) {
    if (e.enabled) {
        var r = e._ctx ? e._ctx.add(function() {
            return t(e, n)
        }) : t(e, n);
        r && r.totalTime && (e.callbackAnimation = r)
    }
}, B_ = Math.abs, V_ = `left`, H_ = `top`, U_ = `right`, W_ = `bottom`, G_ = `width`, K_ = `height`, q_ = `Right`, J_ = `Left`, Y_ = `Top`, X_ = `Bottom`, Z_ = `padding`, Q_ = `margin`, $_ = `Width`, ev = `Height`, tv = `px`, nv = function(e) {
    return Z.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e)
}, rv = function(e) {
    var t = nv(e).position;
    e.style.position = t === `absolute` || t === `fixed` ? t : `relative`
}, iv = function(e, t) {
    for (var n in t)
        n in e || (e[n] = t[n]);
    return e
}, av = function(e, t) {
    var n = t && nv(e)[qg] !== `matrix(1, 0, 0, 1, 0, 0)` && X.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , r = e.getBoundingClientRect ? e.getBoundingClientRect() : e.scrollingElement.getBoundingClientRect();
    return n && n.progress(0).kill(),
    r
}, ov = function(e, t) {
    var n = t.d2;
    return e[`offset` + n] || e[`client` + n] || 0
}, sv = function(e) {
    var t = [], n = e.labels, r = e.duration(), i;
    for (i in n)
        t.push(n[i] / r);
    return t
}, cv = function(e) {
    return function(t) {
        return X.utils.snap(sv(e), t)
    }
}, lv = function(e) {
    var t = X.utils.snap(e)
      , n = Array.isArray(e) && e.slice(0).sort(function(e, t) {
        return e - t
    });
    return n ? function(e, r, i) {
        i === void 0 && (i = .001);
        var a;
        if (!r)
            return t(e);
        if (r > 0) {
            for (e -= i,
            a = 0; a < n.length; a++)
                if (n[a] >= e)
                    return n[a];
            return n[a - 1]
        } else
            for (a = n.length,
            e += i; a--; )
                if (n[a] <= e)
                    return n[a];
        return n[0]
    }
    : function(n, r, i) {
        i === void 0 && (i = .001);
        var a = t(n);
        return !r || Math.abs(a - n) < i || a - n < 0 == r < 0 ? a : t(r < 0 ? n - e : n + e)
    }
}, uv = function(e) {
    return function(t, n) {
        return lv(sv(e))(t, n.direction)
    }
}, dv = function(e, t, n, r) {
    return n.split(`,`).forEach(function(n) {
        return e(t, n, r)
    })
}, fv = function(e, t, n, r, i) {
    return e.addEventListener(t, n, {
        passive: !r,
        capture: !!i
    })
}, pv = function(e, t, n, r) {
    return e.removeEventListener(t, n, !!r)
}, mv = function(e, t, n) {
    n &&= n.wheelHandler,
    n && (e(t, `wheel`, n),
    e(t, `touchmove`, n))
}, hv = {
    startColor: `green`,
    endColor: `red`,
    indent: 0,
    fontSize: `16px`,
    fontWeight: `normal`
}, gv = {
    toggleActions: `play`,
    anticipatePin: 0
}, _v = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, vv = function(e, t) {
    if (P_(e)) {
        var n = e.indexOf(`=`)
          , r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
        ~n && (e.indexOf(`%`) > n && (r *= t / 100),
        e = e.substr(0, n - 1)),
        e = r + (e in _v ? _v[e] * t : ~e.indexOf(`%`) ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
    }
    return e
}, yv = function(e, t, n, r, i, a, o, s) {
    var c = i.startColor
      , l = i.endColor
      , u = i.fontSize
      , d = i.indent
      , f = i.fontWeight
      , p = Ig.createElement(`div`)
      , m = D_(n) || gg(n, `pinType`) === `fixed`
      , h = e.indexOf(`scroller`) !== -1
      , g = m ? Rg : n.tagName === `IFRAME` ? n.contentDocument.body : n
      , _ = e.indexOf(`start`) !== -1
      , v = _ ? c : l
      , y = `border-color:` + v + `;font-size:` + u + `;color:` + v + `;font-weight:` + f + `;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;
    return y += `position:` + ((h || s) && m ? `fixed;` : `absolute;`),
    (h || s || !m) && (y += (r === Tg ? U_ : W_) + `:` + (a + parseFloat(d)) + `px;`),
    o && (y += `box-sizing:border-box;text-align:left;width:` + o.offsetWidth + `px;`),
    p._isStart = _,
    p.setAttribute(`class`, `gsap-marker-` + e + (t ? ` marker-` + t : ``)),
    p.style.cssText = y,
    p.innerText = t || t === 0 ? e + `-` + t : e,
    g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
    p._offset = p[`offset` + r.op.d2],
    bv(p, 0, r, _),
    p
}, bv = function(e, t, n, r) {
    var i = {
        display: `block`
    }
      , a = n[r ? `os2` : `p2`]
      , o = n[r ? `p2` : `os2`];
    e._isFlipped = r,
    i[n.a + `Percent`] = r ? -100 : 0,
    i[n.a] = r ? `1px` : 0,
    i[`border` + a + $_] = 1,
    i[`border` + o + $_] = 0,
    i[n.p] = t + `px`,
    X.set(e, i)
}, Q = [], xv = {}, Sv, Cv = function() {
    return m_() - g_ > 34 && (Sv ||= requestAnimationFrame(Kv))
}, wv = function() {
    (!t_ || !t_.isPressed || t_.startX > Rg.clientWidth) && (Y.cache++,
    t_ ? Sv ||= requestAnimationFrame(Kv) : Kv(),
    g_ || Av(`scrollStart`),
    g_ = m_())
}, Tv = function() {
    i_ = Z.innerWidth,
    r_ = Z.innerHeight
}, Ev = function(e) {
    Y.cache++,
    (e === !0 || !Gg && !e_ && !Ig.fullscreenElement && !Ig.webkitFullscreenElement && (!n_ || i_ !== Z.innerWidth || Math.abs(Z.innerHeight - r_) > Z.innerHeight * .25)) && Bg.restart(!0)
}, Dv = {}, Ov = [], kv = function e() {
    return pv($, `scrollEnd`, e) || Hv(!0)
}, Av = function(e) {
    return Dv[e] && Dv[e].map(function(e) {
        return e()
    }) || Ov
}, jv = [], Mv = function(e) {
    for (var t = 0; t < jv.length; t += 5)
        (!e || jv[t + 4] && jv[t + 4].query === e) && (jv[t].style.cssText = jv[t + 1],
        jv[t].getBBox && jv[t].setAttribute(`transform`, jv[t + 2] || ``),
        jv[t + 3].uncache = 1)
}, Nv = function() {
    return Y.forEach(function(e) {
        return F_(e) && ++e.cacheID && (e.rec = e())
    })
}, Pv = function(e, t) {
    var n;
    for (Jg = 0; Jg < Q.length; Jg++)
        n = Q[Jg],
        n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
    u_ = !0,
    t && Mv(t),
    t || Av(`revert`)
}, Fv = function(e, t) {
    Y.cache++,
    (t || !Iv) && Y.forEach(function(e) {
        return F_(e) && e.cacheID++ && (e.rec = 0)
    }),
    P_(e) && (Z.history.scrollRestoration = s_ = e)
}, Iv, Lv = 0, Rv, zv = function() {
    if (Rv !== Lv) {
        var e = Rv = Lv;
        requestAnimationFrame(function() {
            return e === Lv && Hv(!0)
        })
    }
}, Bv = function() {
    Rg.appendChild(c_),
    l_ = !t_ && c_.offsetHeight || Z.innerHeight,
    Rg.removeChild(c_)
}, Vv = function(e) {
    return Vg(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t) {
        return t.style.display = e ? `none` : `block`
    })
}, Hv = function(e, t) {
    if (Lg = Ig.documentElement,
    Rg = Ig.body,
    zg = [Z, Ig, Lg, Rg],
    g_ && !e && !u_) {
        fv($, `scrollEnd`, kv);
        return
    }
    Bv(),
    Iv = $.isRefreshing = !0,
    u_ || Nv();
    var n = Av(`refreshInit`);
    Qg && $.sort(),
    t || Pv(),
    Y.forEach(function(e) {
        F_(e) && (e.smooth && (e.target.style.scrollBehavior = `auto`),
        e(0))
    }),
    Q.slice(0).forEach(function(e) {
        return e.refresh()
    }),
    u_ = !1,
    Q.forEach(function(e) {
        if (e._subPinOffset && e.pin) {
            var t = e.vars.horizontal ? `offsetWidth` : `offsetHeight`
              , n = e.pin[t];
            e.revert(!0, 1),
            e.adjustPinSpacing(e.pin[t] - n),
            e.refresh()
        }
    }),
    d_ = 1,
    Vv(!0),
    Q.forEach(function(e) {
        var t = M_(e.scroller, e._dir)
          , n = e.vars.end === `max` || e._endClamp && e.end > t
          , r = e._startClamp && e.start >= t;
        (n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0)
    }),
    Vv(!1),
    d_ = 0,
    n.forEach(function(e) {
        return e && e.render && e.render(-1)
    }),
    Y.forEach(function(e) {
        F_(e) && (e.smooth && requestAnimationFrame(function() {
            return e.target.style.scrollBehavior = `smooth`
        }),
        e.rec && e(e.rec))
    }),
    Fv(s_, 1),
    Bg.pause(),
    Lv++,
    Iv = 2,
    Kv(2),
    Q.forEach(function(e) {
        return F_(e.vars.onRefresh) && e.vars.onRefresh(e)
    }),
    Iv = $.isRefreshing = !1,
    Av(`refresh`)
}, Uv = 0, Wv = 1, Gv, Kv = function(e) {
    if (e === 2 || !Iv && !u_) {
        $.isUpdating = !0,
        Gv && Gv.update(0);
        var t = Q.length
          , n = m_()
          , r = n - h_ >= 50
          , i = t && Q[0].scroll();
        if (Wv = Uv > i ? -1 : 1,
        Iv || (Uv = i),
        r && (g_ && !Kg && n - g_ > 200 && (g_ = 0,
        Av(`scrollEnd`)),
        Ug = h_,
        h_ = n),
        Wv < 0) {
            for (Jg = t; Jg-- > 0; )
                Q[Jg] && Q[Jg].update(0, r);
            Wv = 1
        } else
            for (Jg = 0; Jg < t; Jg++)
                Q[Jg] && Q[Jg].update(0, r);
        $.isUpdating = !1
    }
    Sv = 0
}, qv = [V_, H_, W_, U_, Q_ + X_, Q_ + q_, Q_ + Y_, Q_ + J_, `display`, `flexShrink`, `float`, `zIndex`, `gridColumnStart`, `gridColumnEnd`, `gridRowStart`, `gridRowEnd`, `gridArea`, `justifySelf`, `alignSelf`, `placeSelf`, `order`], Jv = qv.concat([G_, K_, `boxSizing`, `max` + $_, `max` + ev, `position`, Q_, Z_, Z_ + Y_, Z_ + q_, Z_ + X_, Z_ + J_]), Yv = function(e, t, n) {
    Qv(n);
    var r = e._gsap;
    if (r.spacerIsNative)
        Qv(r.spacerState);
    else if (e._gsap.swappedIn) {
        var i = t.parentNode;
        i && (i.insertBefore(e, t),
        i.removeChild(t))
    }
    e._gsap.swappedIn = !1
}, Xv = function(e, t, n, r) {
    if (!e._gsap.swappedIn) {
        for (var i = qv.length, a = t.style, o = e.style, s; i--; )
            s = qv[i],
            a[s] = n[s];
        a.position = n.position === `absolute` ? `absolute` : `relative`,
        n.display === `inline` && (a.display = `inline-block`),
        o[W_] = o[U_] = `auto`,
        a.flexBasis = n.flexBasis || `auto`,
        a.overflow = `visible`,
        a.boxSizing = `border-box`,
        a[G_] = ov(e, wg) + tv,
        a[K_] = ov(e, Tg) + tv,
        a[Z_] = o[Q_] = o[H_] = o[V_] = `0`,
        Qv(r),
        o[G_] = o[`max` + $_] = n[G_],
        o[K_] = o[`max` + ev] = n[K_],
        o[Z_] = n[Z_],
        e.parentNode !== t && (e.parentNode.insertBefore(t, e),
        t.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, Zv = /([A-Z])/g, Qv = function(e) {
    if (e) {
        var t = e.t.style, n = e.length, r = 0, i, a;
        for ((e.t._gsap || X.core.getCache(e.t)).uncache = 1; r < n; r += 2)
            a = e[r + 1],
            i = e[r],
            a ? t[i] = a : t[i] && t.removeProperty(i.replace(Zv, `-$1`).toLowerCase())
    }
}, $v = function(e) {
    for (var t = Jv.length, n = e.style, r = [], i = 0; i < t; i++)
        r.push(Jv[i], n[Jv[i]]);
    return r.t = e,
    r
}, ey = function(e, t, n) {
    for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2)
        o = e[a],
        r.push(o, o in t ? t[o] : e[a + 1]);
    return r.t = e.t,
    r
}, ty = {
    left: 0,
    top: 0
}, ny = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
    F_(e) && (e = e(s)),
    P_(e) && e.substr(0, 3) === `max` && (e = d + (e.charAt(4) === `=` ? vv(`0` + e.substr(3), n) : 0));
    var m = f ? f.time() : 0, h, g, _;
    if (f && f.seek(0),
    isNaN(e) || (e = +e),
    I_(e))
        f && (e = X.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)),
        o && bv(o, n, r, !0);
    else {
        F_(t) && (t = t(s));
        var v = (e || `0`).split(` `), y, b, x, S;
        _ = Eg(t, s) || Rg,
        y = av(_) || {},
        (!y || !y.left && !y.top) && nv(_).display === `none` && (S = _.style.display,
        _.style.display = `block`,
        y = av(_),
        S ? _.style.display = S : _.style.removeProperty(`display`)),
        b = vv(v[0], y[r.d]),
        x = vv(v[1] || `0`, n),
        e = y[r.p] - c[r.p] - l + b + i - x,
        o && bv(o, x, r, n - x < 20 || o._isStart && x > 20),
        n -= n - x
    }
    if (p && (s[p] = e || -.001,
    e < 0 && (e = 0)),
    a) {
        var C = e + n
          , w = a._isStart;
        h = `scroll` + r.d2,
        bv(a, C, r, w && C > 20 || !w && (u ? Math.max(Rg[h], Lg[h]) : a.parentNode[h]) <= C + 1),
        u && (c = av(o),
        u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + tv))
    }
    return f && _ && (h = av(_),
    f.seek(d),
    g = av(_),
    f._caScrollDist = h[r.p] - g[r.p],
    e = e / f._caScrollDist * d),
    f && f.seek(m),
    f ? e : Math.round(e)
}, ry = /(webkit|moz|length|cssText|inset)/i, iy = function(e, t, n, r) {
    if (e.parentNode !== t) {
        var i = e.style, a, o;
        if (t === Rg) {
            for (a in e._stOrig = i.cssText,
            o = nv(e),
            o)
                !+a && !ry.test(a) && o[a] && typeof i[a] == `string` && a !== `0` && (i[a] = o[a]);
            i.top = n,
            i.left = r
        } else
            i.cssText = e._stOrig;
        X.core.getCache(e).uncache = 1,
        t.appendChild(e)
    }
}, ay = function(e, t, n) {
    var r = t
      , i = r;
    return function(t) {
        var a = Math.round(e());
        return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a,
        n && n()),
        i = r,
        r = Math.round(t),
        r
    }
}, oy = function(e, t, n) {
    var r = {};
    r[t.p] = `+=` + n,
    X.set(e, r)
}, sy = function(e, t) {
    var n = Og(e, t)
      , r = `_scroll` + t.p2
      , i = function t(i, a, o, s, c) {
        var l = t.tween
          , u = a.onComplete
          , d = {};
        o ||= n();
        var f = ay(n, o, function() {
            l.kill(),
            t.tween = 0
        });
        return c = s && c || 0,
        s ||= i - o,
        l && l.kill(),
        a[r] = i,
        a.inherit = !1,
        a.modifiers = d,
        d[r] = function() {
            return f(o + s * l.ratio + c * l.ratio * l.ratio)
        }
        ,
        a.onUpdate = function() {
            Y.cache++,
            t.tween && Kv()
        }
        ,
        a.onComplete = function() {
            t.tween = 0,
            u && u.call(l)
        }
        ,
        l = t.tween = X.to(e, a),
        l
    };
    return e[r] = n,
    n.wheelHandler = function() {
        return i.tween && i.tween.kill() && (i.tween = 0)
    }
    ,
    fv(e, `wheel`, n.wheelHandler),
    $.isTouch && fv(e, `touchmove`, n.wheelHandler),
    i
}, $ = function() {
    function e(t, n) {
        Fg || e.register(X) || console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),
        o_(this),
        this.init(t, n)
    }
    var t = e.prototype;
    return t.init = function(t, n) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !__) {
            this.update = this.refresh = this.kill = C_;
            return
        }
        t = iv(P_(t) || I_(t) || t.nodeType ? {
            trigger: t
        } : t, gv);
        var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, C = r.preventOverlaps, w = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? wg : Tg, T = !l && l !== 0, E = Eg(t.scroller || Z), D = X.core.getCache(E), O = D_(E), k = (`pinType` in t ? t.pinType : gg(E, `pinType`) || O && `fixed`) === `fixed`, A = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], j = T && t.toggleActions.split(` `), M = `markers` in t ? t.markers : gv.markers, N = O ? 0 : parseFloat(nv(E)[`border` + w.p2 + $_]) || 0, P = this, ee = t.onRefreshInit && function() {
            return t.onRefreshInit(P)
        }
        , te = A_(E, O, w), ne = j_(E, O), re = 0, ie = 0, F = 0, ae = Og(E, w), oe, se, ce, I, le, ue, de, fe, L, pe, me, R, he, ge, _e, ve, ye, be, z, xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be;
        if (P._startClamp = P._endClamp = !1,
        P._dir = w,
        m *= 45,
        P.scroller = E,
        P.scroll = x ? x.time.bind(x) : ae,
        I = ae(),
        P.vars = t,
        n ||= t.animation,
        `refreshPriority` in t && (Qg = 1,
        t.refreshPriority === -9999 && (Gv = P)),
        D.tweenScroll = D.tweenScroll || {
            top: sy(E, Tg),
            left: sy(E, wg)
        },
        P.tweenTo = oe = D.tweenScroll[w.p],
        P.scrubDuration = function(e) {
            Pe = I_(e) && e,
            Pe ? Ne ? Ne.duration(e) : Ne = X.to(n, {
                ease: `expo`,
                totalProgress: `+=0`,
                inherit: !1,
                duration: Pe,
                paused: !0,
                onComplete: function() {
                    return h && h(P)
                }
            }) : (Ne && Ne.progress(1).kill(),
            Ne = 0)
        }
        ,
        n && (n.vars.lazy = !1,
        n._initted && !P.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0),
        P.animation = n.pause(),
        n.scrollTrigger = P,
        P.scrubDuration(l),
        je = 0,
        o ||= n.vars.id),
        v && ((!L_(v) || v.push) && (v = {
            snapTo: v
        }),
        `scrollBehavior` in Rg.style && X.set(O ? [Rg, Lg] : E, {
            scrollBehavior: `auto`
        }),
        Y.forEach(function(e) {
            return F_(e) && e.target === (O ? Ig.scrollingElement || Lg : E) && (e.smooth = !1)
        }),
        ce = F_(v.snapTo) ? v.snapTo : v.snapTo === `labels` ? cv(n) : v.snapTo === `labelsDirectional` ? uv(n) : v.directional === !1 ? X.utils.snap(v.snapTo) : function(e, t) {
            return lv(v.snapTo)(e, m_() - ie < 500 ? 0 : t.direction)
        }
        ,
        Fe = v.duration || {
            min: .1,
            max: 2
        },
        Fe = L_(Fe) ? Hg(Fe.min, Fe.max) : Hg(Fe, Fe),
        Ie = X.delayedCall(v.delay || Pe / 2 || .1, function() {
            var e = ae()
              , t = m_() - ie < 500
              , r = oe.tween;
            if ((t || Math.abs(P.getVelocity()) < 10) && !r && !Kg && re !== e) {
                var i = (e - ue) / ge, a = n && !T ? n.totalProgress() : i, o = t ? 0 : (a - Me) / (m_() - Ug) * 1e3 || 0, s = X.utils.clamp(-i, 1 - i, B_(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
                if (l = ce(c, P),
                I_(l) || (l = c),
                u = Math.max(0, Math.round(ue + l * ge)),
                e <= de && e >= ue && u !== e) {
                    if (r && !r._initted && r.data <= B_(u - e))
                        return;
                    v.inertia === !1 && (s = l - i),
                    oe(u, {
                        duration: Fe(B_(Math.max(B_(c - a), B_(l - a)) * .185 / o / .05 || 0)),
                        ease: v.ease || `power3`,
                        data: B_(u - e),
                        onInterrupt: function() {
                            return Ie.restart(!0) && p && z_(P, p)
                        },
                        onComplete: function() {
                            P.update(),
                            re = ae(),
                            n && !T && (Ne ? Ne.resetTo(`totalProgress`, l, n._tTime / n._tDur) : n.progress(l)),
                            je = Me = n && !T ? n.totalProgress() : P.progress,
                            g && g(P),
                            m && z_(P, m)
                        }
                    }, e, s * ge, u - e - s * ge),
                    f && z_(P, f, oe.tween)
                }
            } else
                P.isActive && re !== e && Ie.restart(!0)
        }).pause()),
        o && (xv[o] = P),
        u = P.trigger = Eg(u || d !== !0 && d),
        Be = u && u._gsap && u._gsap.stRevert,
        Be &&= Be(P),
        d = d === !0 ? u : Eg(d),
        P_(a) && (a = {
            targets: u,
            className: a
        }),
        d && (f === !1 || f === Q_ || (f = !f && d.parentNode && d.parentNode.style && nv(d.parentNode).display === `flex` ? !1 : Z_),
        P.pin = d,
        se = X.core.getCache(d),
        se.spacer ? _e = se.pinState : (b && (b = Eg(b),
        b && !b.nodeType && (b = b.current || b.nativeElement),
        se.spacerIsNative = !!b,
        b && (se.spacerState = $v(b))),
        se.spacer = be = b || Ig.createElement(`div`),
        be.classList.add(`pin-spacer`),
        o && be.classList.add(`pin-spacer-` + o),
        se.pinState = _e = $v(d)),
        t.force3D !== !1 && X.set(d, {
            force3D: !0
        }),
        P.spacer = be = se.spacer,
        Ae = nv(d),
        Te = Ae[f + w.os2],
        xe = X.getProperty(d),
        Se = X.quickSetter(d, w.a, tv),
        Xv(d, be, Ae),
        ye = $v(d)),
        M) {
            R = L_(M) ? iv(M, hv) : hv,
            pe = yv(`scroller-start`, o, E, w, R, 0),
            me = yv(`scroller-end`, o, E, w, R, 0, pe),
            z = pe[`offset` + w.op.d2];
            var Ve = Eg(gg(E, `content`) || E);
            fe = this.markerStart = yv(`start`, o, Ve, w, R, z, 0, x),
            L = this.markerEnd = yv(`end`, o, Ve, w, R, z, 0, x),
            x && (ze = X.quickSetter([fe, L], w.a, tv)),
            !k && !(fg.length && gg(E, `fixedMarkers`) === !0) && (rv(O ? Rg : E),
            X.set([pe, me], {
                force3D: !0
            }),
            De = X.quickSetter(pe, w.a, tv),
            ke = X.quickSetter(me, w.a, tv))
        }
        if (x) {
            var He = x.vars.onUpdate
              , Ue = x.vars.onUpdateParams;
            x.eventCallback(`onUpdate`, function() {
                P.update(0, 0, 1),
                He && He.apply(x, Ue || [])
            })
        }
        if (P.previous = function() {
            return Q[Q.indexOf(P) - 1]
        }
        ,
        P.next = function() {
            return Q[Q.indexOf(P) + 1]
        }
        ,
        P.revert = function(e, t) {
            if (!t)
                return P.kill(!0);
            var r = e !== !1 || !P.enabled
              , i = Gg;
            r !== P.isReverted && (r && (Le = Math.max(ae(), P.scroll.rec || 0),
            F = P.progress,
            Re = n && n.progress()),
            fe && [fe, L, pe, me].forEach(function(e) {
                return e.style.display = r ? `none` : `block`
            }),
            r && (Gg = P,
            P.update(r)),
            d && (!y || !P.isActive) && (r ? Yv(d, be, _e) : Xv(d, be, nv(d), Ee)),
            r || P.update(r),
            Gg = i,
            P.isReverted = r)
        }
        ,
        P.refresh = function(r, i, a, o) {
            if (!((Gg || !P.enabled) && !i)) {
                if (d && r && g_) {
                    fv(e, `scrollEnd`, kv);
                    return
                }
                !Iv && ee && ee(P),
                Gg = P,
                oe.tween && !a && (oe.tween.kill(),
                oe.tween = 0),
                Ne && Ne.pause(),
                p && n && (n.revert({
                    kill: !1
                }).invalidate(),
                n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
                    return e.vars.immediateRender && e.render(0, !0, !0)
                }) : n.vars.immediateRender && n.render(0, !0, !0)),
                P.isReverted || P.revert(!0, !0),
                P._subPinOffset = !1;
                var s = te(), l = ne(), m = x ? x.duration() : M_(E, w), h = ge <= .01 || !ge, g = 0, _ = o || 0, v = L_(a) ? a.end : t.end, b = t.endTrigger || u, S = L_(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? `0 0` : `0 100%`), C = P.pinnedContainer = t.pinnedContainer && Eg(t.pinnedContainer, P), D = u && Math.max(0, Q.indexOf(P)) || 0, A = D, j, se, ce, R, z, Se, Te, De, ke, Ae, je, Me, Pe;
                for (M && L_(a) && (Me = X.getProperty(pe, w.p),
                Pe = X.getProperty(me, w.p)); A-- > 0; )
                    Se = Q[A],
                    Se.end || Se.refresh(0, 1) || (Gg = P),
                    Te = Se.pin,
                    Te && (Te === u || Te === d || Te === C) && !Se.isReverted && (Ae ||= [],
                    Ae.unshift(Se),
                    Se.revert(!0, !0)),
                    Se !== Q[A] && (D--,
                    A--);
                for (F_(S) && (S = S(P)),
                S = v_(S, `start`, P),
                ue = ny(S, u, s, w, ae(), fe, pe, P, l, N, k, m, x, P._startClamp && `_startClamp`) || (d ? -.001 : 0),
                F_(v) && (v = v(P)),
                P_(v) && !v.indexOf(`+=`) && (~v.indexOf(` `) ? v = (P_(S) ? S.split(` `)[0] : ``) + v : (g = vv(v.substr(2), s),
                v = P_(S) ? S : (x ? X.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, ue) : ue) + g,
                b = u)),
                v = v_(v, `end`, P),
                de = Math.max(ue, ny(v || (b ? `100% 0` : m), b, s, w, ae() + g, L, me, P, l, N, k, m, x, P._endClamp && `_endClamp`)) || -.001,
                g = 0,
                A = D; A--; )
                    Se = Q[A] || {},
                    Te = Se.pin,
                    Te && Se.start - Se._pinPush <= ue && !x && Se.end > 0 && (j = Se.end - (P._startClamp ? Math.max(0, Se.start) : Se.start),
                    (Te === u && Se.start - Se._pinPush < ue || Te === C) && isNaN(S) && (g += j * (1 - Se.progress)),
                    Te === d && (_ += j));
                if (ue += g,
                de += g,
                P._startClamp && (P._startClamp += g),
                P._endClamp && !Iv && (P._endClamp = de || -.001,
                de = Math.min(de, M_(E, w))),
                ge = de - ue || (ue -= .01) && .001,
                h && (F = X.utils.clamp(0, 1, X.utils.normalize(ue, de, Le))),
                P._pinPush = _,
                fe && g && (j = {},
                j[w.a] = `+=` + g,
                C && (j[w.p] = `-=` + ae()),
                X.set([fe, L], j)),
                d && !(d_ && P.end >= M_(E, w)))
                    j = nv(d),
                    R = w === Tg,
                    ce = ae(),
                    Ce = parseFloat(xe(w.a)) + _,
                    !m && de > 1 && (je = (O ? Ig.scrollingElement || Lg : E).style,
                    je = {
                        style: je,
                        value: je[`overflow` + w.a.toUpperCase()]
                    },
                    O && nv(Rg)[`overflow` + w.a.toUpperCase()] !== `scroll` && (je.style[`overflow` + w.a.toUpperCase()] = `scroll`)),
                    Xv(d, be, j),
                    ye = $v(d),
                    se = av(d, !0),
                    De = k && Og(E, R ? wg : Tg)(),
                    f ? (Ee = [f + w.os2, ge + _ + tv],
                    Ee.t = be,
                    A = f === Z_ ? ov(d, w) + ge + _ : 0,
                    A && (Ee.push(w.d, A + tv),
                    be.style.flexBasis !== `auto` && (be.style.flexBasis = A + tv)),
                    Qv(Ee),
                    C && Q.forEach(function(e) {
                        e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0)
                    }),
                    k && ae(Le)) : (A = ov(d, w),
                    A && be.style.flexBasis !== `auto` && (be.style.flexBasis = A + tv)),
                    k && (z = {
                        top: se.top + (R ? ce - ue : De) + tv,
                        left: se.left + (R ? De : ce - ue) + tv,
                        boxSizing: `border-box`,
                        position: `fixed`
                    },
                    z[G_] = z[`max` + $_] = Math.ceil(se.width) + tv,
                    z[K_] = z[`max` + ev] = Math.ceil(se.height) + tv,
                    z[Q_] = z[Q_ + Y_] = z[Q_ + q_] = z[Q_ + X_] = z[Q_ + J_] = `0`,
                    z[Z_] = j[Z_],
                    z[Z_ + Y_] = j[Z_ + Y_],
                    z[Z_ + q_] = j[Z_ + q_],
                    z[Z_ + X_] = j[Z_ + X_],
                    z[Z_ + J_] = j[Z_ + J_],
                    ve = ey(_e, z, y),
                    Iv && ae(0)),
                    n ? (ke = n._initted,
                    $g(1),
                    n.render(n.duration(), !0, !0),
                    we = xe(w.a) - Ce + ge + _,
                    Oe = Math.abs(ge - we) > 1,
                    k && Oe && ve.splice(ve.length - 2, 2),
                    n.render(0, !0, !0),
                    ke || n.invalidate(!0),
                    n.parent || n.totalTime(n.totalTime()),
                    $g(0)) : we = ge,
                    je && (je.value ? je.style[`overflow` + w.a.toUpperCase()] = je.value : je.style.removeProperty(`overflow-` + w.a));
                else if (u && ae() && !x)
                    for (se = u.parentNode; se && se !== Rg; )
                        se._pinOffset && (ue -= se._pinOffset,
                        de -= se._pinOffset),
                        se = se.parentNode;
                Ae && Ae.forEach(function(e) {
                    return e.revert(!1, !0)
                }),
                P.start = ue,
                P.end = de,
                I = le = Iv ? Le : ae(),
                !x && !Iv && (I < Le && ae(Le),
                P.scroll.rec = 0),
                P.revert(!1, !0),
                ie = m_(),
                Ie && (re = -1,
                Ie.restart(!0)),
                Gg = 0,
                n && T && (n._initted || Re) && n.progress() !== Re && n.progress(Re || 0, !0).render(n.time(), !0, !0),
                (h || F !== P.progress || x || p || n && !n._initted) && (n && !T && (n._initted || F || n.vars.immediateRender !== !1) && n.totalProgress(x && ue < -.001 && !F ? X.utils.normalize(ue, de, 0) : F, !0),
                P.progress = h || (I - ue) / ge === F ? 0 : F),
                d && f && (be._pinOffset = Math.round(P.progress * we)),
                Ne && Ne.invalidate(),
                isNaN(Me) || (Me -= X.getProperty(pe, w.p),
                Pe -= X.getProperty(me, w.p),
                oy(pe, w, Me),
                oy(fe, w, Me - (o || 0)),
                oy(me, w, Pe),
                oy(L, w, Pe - (o || 0))),
                h && !Iv && P.update(),
                c && !Iv && !he && (he = !0,
                c(P),
                he = !1)
            }
        }
        ,
        P.getVelocity = function() {
            return (ae() - le) / (m_() - Ug) * 1e3 || 0
        }
        ,
        P.endAnimation = function() {
            R_(P.callbackAnimation),
            n && (Ne ? Ne.progress(1) : n.paused() ? T || R_(n, P.direction < 0, 1) : R_(n, n.reversed()))
        }
        ,
        P.labelToScroll = function(e) {
            return n && n.labels && (ue || P.refresh() || ue) + n.labels[e] / n.duration() * ge || 0
        }
        ,
        P.getTrailing = function(e) {
            var t = Q.indexOf(P)
              , n = P.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
            return (P_(e) ? n.filter(function(t) {
                return t.vars.preventOverlaps === e
            }) : n).filter(function(e) {
                return P.direction > 0 ? e.end <= ue : e.start >= de
            })
        }
        ,
        P.update = function(e, t, r) {
            if (!(x && !r && !e)) {
                var o = Iv === !0 ? Le : P.scroll(), c = e ? 0 : (o - ue) / ge, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = P.progress, h, g, b, D, O, M, N, ee;
                if (t && (le = I,
                I = x ? ae() : o,
                v && (Me = je,
                je = n && !T ? n.totalProgress() : u)),
                m && d && !Gg && !p_ && g_ && (!u && ue < o + (o - le) / (m_() - Ug) * m ? u = 1e-4 : u === 1 && de > o + (o - le) / (m_() - Ug) * m && (u = .9999)),
                u !== p && P.enabled) {
                    if (h = P.isActive = !!u && u < 1,
                    g = !!p && p < 1,
                    M = h !== g,
                    O = M || !!u != !!p,
                    P.direction = u > p ? 1 : -1,
                    P.progress = u,
                    O && !Gg && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3,
                    T && (D = !M && j[b + 1] !== `none` && j[b + 1] || j[b],
                    ee = n && (D === `complete` || D === `reset` || D in n))),
                    C && (M || ee) && (ee || l || !n) && (F_(C) ? C(P) : P.getTrailing(C).forEach(function(e) {
                        return e.endAnimation()
                    })),
                    T || (Ne && !Gg && !p_ ? (Ne._dp._time - Ne._start !== Ne._time && Ne.render(Ne._dp._time - Ne._start),
                    Ne.resetTo ? Ne.resetTo(`totalProgress`, u, n._tTime / n._tDur) : (Ne.vars.totalProgress = u,
                    Ne.invalidate().restart())) : n && n.totalProgress(u, !!(Gg && (ie || e)))),
                    d) {
                        if (e && f && (be.style[f + w.os2] = Te),
                        !k)
                            Se(w_(Ce + we * u));
                        else if (O) {
                            if (N = !e && u > p && de + 1 > o && o + 1 >= M_(E, w),
                            y)
                                if (!e && (h || N)) {
                                    var te = av(d, !0)
                                      , ne = o - ue;
                                    iy(d, Rg, te.top + (w === Tg ? ne : 0) + tv, te.left + (w === Tg ? 0 : ne) + tv)
                                } else
                                    iy(d, be);
                            Qv(h || N ? ve : ye),
                            Oe && u < 1 && h || Se(Ce + (u === 1 && !N ? we : 0))
                        }
                    }
                    v && !oe.tween && !Gg && !p_ && Ie.restart(!0),
                    a && (M || _ && u && (u < 1 || !f_)) && Vg(a.targets).forEach(function(e) {
                        return e.classList[h || _ ? `add` : `remove`](a.className)
                    }),
                    i && !T && !e && i(P),
                    O && !Gg ? (T && (ee && (D === `complete` ? n.pause().totalProgress(1) : D === `reset` ? n.restart(!0).pause() : D === `restart` ? n.restart(!0) : n[D]()),
                    i && i(P)),
                    (M || !f_) && (s && M && z_(P, s),
                    A[b] && z_(P, A[b]),
                    _ && (u === 1 ? P.kill(!1, 1) : A[b] = 0),
                    M || (b = u === 1 ? 1 : 3,
                    A[b] && z_(P, A[b]))),
                    S && !h && Math.abs(P.getVelocity()) > (I_(S) ? S : 2500) && (R_(P.callbackAnimation),
                    Ne ? Ne.progress(1) : R_(n, D === `reverse` ? 1 : !u, 1))) : T && i && !Gg && i(P)
                }
                if (ke) {
                    var re = x ? o / x.duration() * (x._caScrollDist || 0) : o;
                    De(re + (pe._isFlipped ? 1 : 0)),
                    ke(re)
                }
                ze && ze(-o / x.duration() * (x._caScrollDist || 0))
            }
        }
        ,
        P.enable = function(t, n) {
            P.enabled || (P.enabled = !0,
            fv(E, `resize`, Ev),
            O || fv(E, `scroll`, wv),
            ee && fv(e, `refreshInit`, ee),
            t !== !1 && (P.progress = F = 0,
            I = le = re = ae()),
            n !== !1 && P.refresh())
        }
        ,
        P.getTween = function(e) {
            return e && oe ? oe.tween : Ne
        }
        ,
        P.setPositions = function(e, t, n, r) {
            if (x) {
                var i = x.scrollTrigger
                  , a = x.duration()
                  , o = i.end - i.start;
                e = i.start + o * e / a,
                t = i.start + o * t / a
            }
            P.refresh(!1, !1, {
                start: y_(e, n && !!P._startClamp),
                end: y_(t, n && !!P._endClamp)
            }, r),
            P.update()
        }
        ,
        P.adjustPinSpacing = function(e) {
            if (Ee && e) {
                var t = Ee.indexOf(w.d) + 1;
                Ee[t] = parseFloat(Ee[t]) + e + tv,
                Ee[1] = parseFloat(Ee[1]) + e + tv,
                Qv(Ee)
            }
        }
        ,
        P.disable = function(t, n) {
            if (t !== !1 && P.revert(!0, !0),
            P.enabled && (P.enabled = P.isActive = !1,
            n || Ne && Ne.pause(),
            Le = 0,
            se && (se.uncache = 1),
            ee && pv(e, `refreshInit`, ee),
            Ie && (Ie.pause(),
            oe.tween && oe.tween.kill() && (oe.tween = 0)),
            !O)) {
                for (var r = Q.length; r--; )
                    if (Q[r].scroller === E && Q[r] !== P)
                        return;
                pv(E, `resize`, Ev),
                O || pv(E, `scroll`, wv)
            }
        }
        ,
        P.kill = function(e, r) {
            P.disable(e, r),
            Ne && !r && Ne.kill(),
            o && delete xv[o];
            var i = Q.indexOf(P);
            i >= 0 && Q.splice(i, 1),
            i === Jg && Wv > 0 && Jg--,
            i = 0,
            Q.forEach(function(e) {
                return e.scroller === P.scroller && (i = 1)
            }),
            i || Iv || (P.scroll.rec = 0),
            n && (n.scrollTrigger = null,
            e && n.revert({
                kill: !1
            }),
            r || n.kill()),
            fe && [fe, L, pe, me].forEach(function(e) {
                return e.parentNode && e.parentNode.removeChild(e)
            }),
            Gv === P && (Gv = 0),
            d && (se && (se.uncache = 1),
            i = 0,
            Q.forEach(function(e) {
                return e.pin === d && i++
            }),
            i || (se.spacer = 0)),
            t.onKill && t.onKill(P)
        }
        ,
        Q.push(P),
        P.enable(!1, !1),
        Be && Be(P),
        n && n.add && !ge) {
            var We = P.update;
            P.update = function() {
                P.update = We,
                Y.cache++,
                ue || de || P.refresh()
            }
            ,
            X.delayedCall(.01, P.update),
            ge = .01,
            ue = de = 0
        } else
            P.refresh();
        d && zv()
    }
    ,
    e.register = function(t) {
        return Fg ||= (X = t || E_(),
        T_() && window.document && e.enable(),
        __),
        Fg
    }
    ,
    e.defaults = function(e) {
        if (e)
            for (var t in e)
                gv[t] = e[t];
        return gv
    }
    ,
    e.disable = function(e, t) {
        __ = 0,
        Q.forEach(function(n) {
            return n[t ? `kill` : `disable`](e)
        }),
        pv(Z, `wheel`, wv),
        pv(Ig, `scroll`, wv),
        clearInterval(Wg),
        pv(Ig, `touchcancel`, C_),
        pv(Rg, `touchstart`, C_),
        dv(pv, Ig, `pointerdown,touchstart,mousedown`, x_),
        dv(pv, Ig, `pointerup,touchend,mouseup`, S_),
        Bg.kill(),
        N_(pv);
        for (var n = 0; n < Y.length; n += 3)
            mv(pv, Y[n], Y[n + 1]),
            mv(pv, Y[n], Y[n + 2])
    }
    ,
    e.enable = function() {
        if (Z = window,
        Ig = document,
        Lg = Ig.documentElement,
        Rg = Ig.body,
        X)
            if (Vg = X.utils.toArray,
            Hg = X.utils.clamp,
            o_ = X.core.context || C_,
            $g = X.core.suppressOverwrites || C_,
            s_ = Z.history.scrollRestoration || `auto`,
            Uv = Z.pageYOffset || 0,
            X.core.globals(`ScrollTrigger`, e),
            Rg) {
                __ = 1,
                c_ = document.createElement(`div`),
                c_.style.height = `100vh`,
                c_.style.position = `absolute`,
                Bv(),
                b_(),
                Pg.register(X),
                e.isTouch = Pg.isTouch,
                a_ = Pg.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                n_ = Pg.isTouch === 1,
                fv(Z, `wheel`, wv),
                zg = [Z, Ig, Lg, Rg],
                X.matchMedia ? (e.matchMedia = function(e) {
                    var t = X.matchMedia(), n;
                    for (n in e)
                        t.add(n, e[n]);
                    return t
                }
                ,
                X.addEventListener(`matchMediaInit`, function() {
                    Nv(),
                    Pv()
                }),
                X.addEventListener(`matchMediaRevert`, function() {
                    return Mv()
                }),
                X.addEventListener(`matchMedia`, function() {
                    Hv(0, 1),
                    Av(`matchMedia`)
                }),
                X.matchMedia().add(`(orientation: portrait)`, function() {
                    return Tv(),
                    Tv
                })) : console.warn(`Requires GSAP 3.11.0 or later`),
                Tv(),
                fv(Ig, `scroll`, wv);
                var t = Rg.hasAttribute(`style`), n = Rg.style, r = n.borderTopStyle, i = X.core.Animation.prototype, a, o;
                for (i.revert || Object.defineProperty(i, `revert`, {
                    value: function() {
                        return this.time(-.01, !0)
                    }
                }),
                n.borderTopStyle = `solid`,
                a = av(Rg),
                Tg.m = Math.round(a.top + Tg.sc()) || 0,
                wg.m = Math.round(a.left + wg.sc()) || 0,
                r ? n.borderTopStyle = r : n.removeProperty(`border-top-style`),
                t || (Rg.setAttribute(`style`, ``),
                Rg.removeAttribute(`style`)),
                Wg = setInterval(Cv, 250),
                X.delayedCall(.5, function() {
                    return p_ = 0
                }),
                fv(Ig, `touchcancel`, C_),
                fv(Rg, `touchstart`, C_),
                dv(fv, Ig, `pointerdown,touchstart,mousedown`, x_),
                dv(fv, Ig, `pointerup,touchend,mouseup`, S_),
                qg = X.utils.checkPrefix(`transform`),
                Jv.push(qg),
                Fg = m_(),
                Bg = X.delayedCall(.2, Hv).pause(),
                Zg = [Ig, `visibilitychange`, function() {
                    var e = Z.innerWidth
                      , t = Z.innerHeight;
                    Ig.hidden ? (Yg = e,
                    Xg = t) : (Yg !== e || Xg !== t) && Ev()
                }
                , Ig, `DOMContentLoaded`, Hv, Z, `load`, Hv, Z, `resize`, Ev],
                N_(fv),
                Q.forEach(function(e) {
                    return e.enable(0, 1)
                }),
                o = 0; o < Y.length; o += 3)
                    mv(pv, Y[o], Y[o + 1]),
                    mv(pv, Y[o], Y[o + 2])
            } else
                Ig && Ig.addEventListener(`DOMContentLoaded`, function t() {
                    e.enable(),
                    Ig.removeEventListener(`DOMContentLoaded`, t)
                })
    }
    ,
    e.config = function(t) {
        `limitCallbacks` in t && (f_ = !!t.limitCallbacks);
        var n = t.syncInterval;
        n && clearInterval(Wg) || (Wg = n) && setInterval(Cv, n),
        `ignoreMobileResize` in t && (n_ = e.isTouch === 1 && t.ignoreMobileResize),
        `autoRefreshEvents` in t && (N_(pv) || N_(fv, t.autoRefreshEvents || `none`),
        e_ = (t.autoRefreshEvents + ``).indexOf(`resize`) === -1)
    }
    ,
    e.scrollerProxy = function(e, t) {
        var n = Eg(e)
          , r = Y.indexOf(n)
          , i = D_(n);
        ~r && Y.splice(r, i ? 6 : 2),
        t && (i ? fg.unshift(Z, t, Rg, t, Lg, t) : fg.unshift(n, t))
    }
    ,
    e.clearMatchMedia = function(e) {
        Q.forEach(function(t) {
            return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
        })
    }
    ,
    e.isInViewport = function(e, t, n) {
        var r = (P_(e) ? Eg(e) : e).getBoundingClientRect()
          , i = r[n ? G_ : K_] * t || 0;
        return n ? r.right - i > 0 && r.left + i < Z.innerWidth : r.bottom - i > 0 && r.top + i < Z.innerHeight
    }
    ,
    e.positionInViewport = function(e, t, n) {
        P_(e) && (e = Eg(e));
        var r = e.getBoundingClientRect()
          , i = r[n ? G_ : K_]
          , a = t == null ? i / 2 : t in _v ? _v[t] * i : ~t.indexOf(`%`) ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
        return n ? (r.left + a) / Z.innerWidth : (r.top + a) / Z.innerHeight
    }
    ,
    e.killAll = function(e) {
        if (Q.slice(0).forEach(function(e) {
            return e.vars.id !== `ScrollSmoother` && e.kill()
        }),
        e !== !0) {
            var t = Dv.killAll || [];
            Dv = {},
            t.forEach(function(e) {
                return e()
            })
        }
    }
    ,
    e
}();
$.version = `3.15.0`,
$.saveStyles = function(e) {
    return e ? Vg(e).forEach(function(e) {
        if (e && e.style) {
            var t = jv.indexOf(e);
            t >= 0 && jv.splice(t, 5),
            jv.push(e, e.style.cssText, e.getBBox && e.getAttribute(`transform`), X.core.getCache(e), o_())
        }
    }) : jv
}
,
$.revert = function(e, t) {
    return Pv(!e, t)
}
,
$.create = function(e, t) {
    return new $(e,t)
}
,
$.refresh = function(e) {
    return e ? Ev(!0) : (Fg || $.register()) && Hv(!0)
}
,
$.update = function(e) {
    return ++Y.cache && Kv(e === !0 ? 2 : 0)
}
,
$.clearScrollMemory = Fv,
$.maxScroll = function(e, t) {
    return M_(e, t ? wg : Tg)
}
,
$.getScrollFunc = function(e, t) {
    return Og(Eg(e), t ? wg : Tg)
}
,
$.getById = function(e) {
    return xv[e]
}
,
$.getAll = function() {
    return Q.filter(function(e) {
        return e.vars.id !== `ScrollSmoother`
    })
}
,
$.isScrolling = function() {
    return !!g_
}
,
$.snapDirectional = lv,
$.addEventListener = function(e, t) {
    var n = Dv[e] || (Dv[e] = []);
    ~n.indexOf(t) || n.push(t)
}
,
$.removeEventListener = function(e, t) {
    var n = Dv[e]
      , r = n && n.indexOf(t);
    r >= 0 && n.splice(r, 1)
}
,
$.batch = function(e, t) {
    var n = [], r = {}, i = t.interval || .016, a = t.batchMax || 1e9, o = function(e, t) {
        var n = []
          , r = []
          , o = X.delayedCall(i, function() {
            t(n, r),
            n = [],
            r = []
        }).pause();
        return function(e) {
            n.length || o.restart(!0),
            n.push(e.trigger),
            r.push(e),
            a <= n.length && o.progress(1)
        }
    }, s;
    for (s in t)
        r[s] = s.substr(0, 2) === `on` && F_(t[s]) && s !== `onRefreshInit` ? o(s, t[s]) : t[s];
    return F_(a) && (a = a(),
    fv($, `refresh`, function() {
        return a = t.batchMax()
    })),
    Vg(e).forEach(function(e) {
        var t = {};
        for (s in r)
            t[s] = r[s];
        t.trigger = e,
        n.push($.create(t))
    }),
    n
}
;
var cy = function(e, t, n, r) {
    return t > r ? e(r) : t < 0 && e(0),
    n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
}, ly = function e(t, n) {
    n === !0 ? t.style.removeProperty(`touch-action`) : t.style.touchAction = n === !0 ? `auto` : n ? `pan-` + n + (Pg.isTouch ? ` pinch-zoom` : ``) : `none`,
    t === Lg && e(Rg, n)
}, uy = {
    auto: 1,
    scroll: 1
}, dy = function(e) {
    var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || X.core.getCache(i), o = m_(), s;
    if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (; i && i !== Rg && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(uy[(s = nv(i)).overflowY] || uy[s.overflowX])); )
            i = i.parentNode;
        a._isScroll = i && i !== n && !D_(i) && (uy[(s = nv(i)).overflowY] || uy[s.overflowX]),
        a._isScrollT = o
    }
    (a._isScroll || r === `x`) && (t.stopPropagation(),
    t._gsapAllow = !0)
}, fy = function(e, t, n, r) {
    return Pg.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: r &&= dy,
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function() {
            return n && fv(Ig, Pg.eventTypes[0], hy, !1, !0)
        },
        onDisable: function() {
            return pv(Ig, Pg.eventTypes[0], hy, !0)
        }
    })
}, py = /(input|label|select|textarea)/i, my, hy = function(e) {
    var t = py.test(e.target.tagName);
    (t || my) && (e._gsapAllow = !0,
    my = t)
}, gy = function(e) {
    L_(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type ||= `wheel,touch`,
    e.debounce = !!e.debounce,
    e.id = e.id || `normalizer`;
    var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = Eg(e.target) || Lg, l = X.core.globals().ScrollSmoother, u = l && l.get(), d = a_ && (e.content && Eg(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = Og(c, Tg), p = Og(c, wg), m = 1, h = (Pg.isTouch && Z.visualViewport ? Z.visualViewport.scale * Z.visualViewport.width : Z.outerWidth) / Z.innerWidth, g = 0, _ = F_(r) ? function() {
        return r(o)
    }
    : function() {
        return r || 2.8
    }
    , v, y, b = fy(c, e.type, !0, i), x = function() {
        return y = !1
    }, S = C_, C = C_, w = function() {
        s = M_(c, Tg),
        C = Hg(a_ ? 1 : 0, s),
        n && (S = Hg(0, M_(c, wg))),
        v = Lv
    }, T = function() {
        d._gsap.y = w_(parseFloat(d._gsap.y) + f.offset) + `px`,
        d.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` + parseFloat(d._gsap.y) + `, 0, 1)`,
        f.offset = f.cacheID = 0
    }, E = function() {
        if (y) {
            requestAnimationFrame(x);
            var e = w_(o.deltaY / 2)
              , t = C(f.v - e);
            if (d && t !== f.v + f.offset) {
                f.offset = t - f.v;
                var n = w_((parseFloat(d && d._gsap.y) || 0) - f.offset);
                d.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` + n + `, 0, 1)`,
                d._gsap.y = n + `px`,
                f.cacheID = Y.cache,
                Kv()
            }
            return !0
        }
        f.offset && T(),
        y = !0
    }, D, O, k, A, j = function() {
        w(),
        D.isActive() && D.vars.scrollY > s && (f() > s ? D.progress(1) && f(s) : D.resetTo(`scrollY`, s))
    };
    return d && X.set(d, {
        y: `+=0`
    }),
    e.ignoreCheck = function(e) {
        return a_ && e.type === `touchmove` && E(e) || m > 1.05 && e.type !== `touchstart` || o.isGesturing || e.touches && e.touches.length > 1
    }
    ,
    e.onPress = function() {
        y = !1;
        var e = m;
        m = w_((Z.visualViewport && Z.visualViewport.scale || 1) / h),
        D.pause(),
        e !== m && ly(c, m > 1.01 ? !0 : n ? !1 : `x`),
        O = p(),
        k = f(),
        w(),
        v = Lv
    }
    ,
    e.onRelease = e.onGestureStart = function(e, t) {
        if (f.offset && T(),
        !t)
            A.restart(!0);
        else {
            Y.cache++;
            var r = _(), i, o;
            n && (i = p(),
            o = i + r * .05 * -e.velocityX / .227,
            r *= cy(p, i, o, M_(c, wg)),
            D.vars.scrollX = S(o)),
            i = f(),
            o = i + r * .05 * -e.velocityY / .227,
            r *= cy(f, i, o, M_(c, Tg)),
            D.vars.scrollY = C(o),
            D.invalidate().duration(r).play(.01),
            (a_ && D.vars.scrollY >= s || i >= s - 1) && X.to({}, {
                onUpdate: j,
                duration: r
            })
        }
        a && a(e)
    }
    ,
    e.onWheel = function() {
        D._ts && D.pause(),
        m_() - g > 1e3 && (v = 0,
        g = m_())
    }
    ,
    e.onChange = function(e, t, r, i, a) {
        if (Lv !== v && w(),
        t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])),
        r) {
            f.offset && T();
            var o = a[2] === r
              , s = o ? k + e.startY - e.y : f() + r - a[1]
              , c = C(s);
            o && s !== c && (k += c - s),
            f(c)
        }
        (r || t) && Kv()
    }
    ,
    e.onEnable = function() {
        ly(c, n ? !1 : `x`),
        $.addEventListener(`refresh`, j),
        fv(Z, `resize`, j),
        f.smooth &&= (f.target.style.scrollBehavior = `auto`,
        p.smooth = !1),
        b.enable()
    }
    ,
    e.onDisable = function() {
        ly(c, !0),
        pv(Z, `resize`, j),
        $.removeEventListener(`refresh`, j),
        b.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    o = new Pg(e),
    o.iOS = a_,
    a_ && !f() && f(1),
    a_ && X.ticker.add(C_),
    A = o._dc,
    D = X.to(o, {
        ease: `power4`,
        paused: !0,
        inherit: !1,
        scrollX: n ? `+=0.1` : `+=0`,
        scrollY: `+=0.1`,
        modifiers: {
            scrollY: ay(f, f(), function() {
                return D.pause()
            })
        },
        onUpdate: Kv,
        onComplete: A.vars.onComplete
    }),
    o
};
$.sort = function(e) {
    if (F_(e))
        return Q.sort(e);
    var t = Z.pageYOffset || 0;
    return $.getAll().forEach(function(e) {
        return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + Z.innerHeight
    }),
    Q.sort(e || function(e, t) {
        return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6)
    }
    )
}
,
$.observe = function(e) {
    return new Pg(e)
}
,
$.normalizeScroll = function(e) {
    if (e === void 0)
        return t_;
    if (e === !0 && t_)
        return t_.enable();
    if (e === !1) {
        t_ && t_.kill(),
        t_ = e;
        return
    }
    var t = e instanceof Pg ? e : gy(e);
    return t_ && t_.target === t.target && t_.kill(),
    D_(t.target) && (t_ = t),
    t
}
,
$.core = {
    _getVelocityProp: kg,
    _inputObserver: fy,
    _scrollers: Y,
    _proxies: fg,
    bridge: {
        ss: function() {
            g_ || Av(`scrollStart`),
            g_ = m_()
        },
        ref: function() {
            return Gg
        }
    }
},
E_() && X.registerPlugin($),
qh.registerPlugin($);
var _y = {
    name: `HeroStatement`,
    props: {
        backgroundImage: {
            type: String,
            default: `/about.webp`
        },
        count: {
            type: Number,
            default: 2
        }
    },
    data() {
        return {
            currentIndex: 0,
            trigger: null,
            tl: null
        }
    },
    beforeUnmount() {
        $.getAll().forEach(e => e.kill()),
        qh.globalTimeline.clear()
    },
    mounted() {},
    methods: {
        initScroll() {
            let e = this.$refs.slides;
            qh.set(e, {
                opacity: 0,
                y: 30
            }),
            qh.set(e[0], {
                opacity: 1,
                y: 0
            }),
            !(this.count <= 1) && qh.timeline({
                scrollTrigger: {
                    trigger: this.$refs.hero,
                    start: `top top`,
                    end: `+=15%`,
                    scrub: !0,
                    pin: !0,
                    anticipatePin: 1
                }
            }).to(e[0], {
                opacity: 0,
                y: -30,
                duration: 1,
                ease: `power2.out`
            }).to(e[1], {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: `power2.out`
            })
        }
    }
}
  , vy = {
    class: `scroll-content`
};
function yy(e, t, n, r, i, a) {
    return W(),
    G(`section`, {
        ref: `hero`,
        class: `hero-statement`,
        style: F({
            backgroundImage: `url(${n.backgroundImage})`
        })
    }, [t[0] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, vy, [K(`div`, null, [Yr(e.$slots, `default`, {}, void 0, !0)])])], 4)
}
var by = J(_y, [[`render`, yy], [`__scopeId`, `data-v-26aefc97`]])
  , xy = {
    name: `Badge`,
    props: {
        badge: {
            type: String,
            default: `Software`
        }
    }
}
  , Sy = {
    class: `badge`
};
function Cy(e, t, n, r, i, a) {
    return W(),
    G(`span`, Sy, R(n.badge), 1)
}
var wy = J(xy, [[`render`, Cy]])
  , Ty = {
    name: `ProductCard`,
    props: {
        badge: {
            type: String,
            default: `Software`
        },
        image: {
            type: String
        },
        title: {
            type: String
        }
    },
    components: {
        Badge: wy
    }
}
  , Ey = {
    class: `product-card`
}
  , Dy = {
    class: `image-wrapper`
}
  , Oy = [`src`, `alt`]
  , ky = {
    class: `title`
};
function Ay(e, t, n, r, i, a) {
    let o = V(`Badge`);
    return W(),
    G(`div`, Ey, [K(`div`, Dy, [q(o, {
        badge: n.badge
    }, null, 8, [`badge`]), K(`img`, {
        style: {
            "border-radius": `12px`
        },
        src: n.image,
        alt: n.title
    }, null, 8, Oy)]), K(`h3`, ky, R(n.title), 1)])
}
var jy = J(Ty, [[`render`, Ay], [`__scopeId`, `data-v-4f4b14b5`]])
  , My = {
    name: `Statement`,
    props: {
        brand: {
            type: [String, Boolean],
            default: `SIMPLE JOURNEY`
        },
        brandIcon: {
            type: [String, Boolean],
            default: `/icon_diamond.png`
        },
        statement: {
            type: String,
            default: `PT Simple Journey is an IT consulting company and a provider of Infrastructure Solutions, Digital Solutions, Cross-Industry Solutions, and IT Operation Services.`
        },
        align: {
            type: String,
            default: `center`,
            validator: e => [`center`, `left`].includes(e)
        },
        disableMinHeight: {
            type: Boolean,
            default: !1
        }
    },
    data() {
        return {
            brandVisible: !1,
            statementVisible: !1,
            observer: null
        }
    },
    computed: {
        alignmentClass() {
            return {
                "align-center": this.align === `center`,
                "align-left": this.align === `left`
            }
        },
        sectionStyle() {
            return this.disableMinHeight ? {
                minHeight: `auto`
            } : {}
        }
    },
    mounted() {
        this.observer = new IntersectionObserver( ([e]) => {
            e.isIntersecting && (this.brandVisible = !0,
            setTimeout( () => this.statementVisible = !0, 100),
            this.observer.disconnect())
        }
        ,{
            threshold: .1,
            rootMargin: `0px 0px -150px 0px`
        }),
        this.observer.observe(this.$refs.section)
    },
    beforeUnmount() {
        this.observer && this.observer.disconnect()
    }
}
  , Ny = {
    class: `content`
}
  , Py = {
    class: `brand delay-300`
}
  , Fy = [`src`]
  , Iy = {
    class: `brand-text`
}
  , Ly = {
    class: `delay-1000`
};
function Ry(e, t, n, r, i, a) {
    let o = Kr(`fade-viewport`);
    return W(),
    G(`section`, {
        ref: `section`,
        class: I(a.alignmentClass),
        style: F(a.sectionStyle)
    }, [K(`div`, Ny, [B((W(),
    G(`div`, Py, [K(`img`, {
        src: n.brandIcon,
        alt: `brand icon`,
        class: `brand-icon`
    }, null, 8, Fy), K(`span`, Iy, R(n.brand), 1)])), [[o]]), B((W(),
    G(`h1`, Ly, [Da(R(n.statement), 1)])), [[o]]), Yr(e.$slots, `default`, {}, void 0, !0)])], 6)
}
var zy = J(My, [[`render`, Ry], [`__scopeId`, `data-v-02e88d9d`]]), By = typeof window < `u`, Vy, Hy = e => Vy = e, Uy = Symbol();
function Wy(e) {
    return e && typeof e == `object` && Object.prototype.toString.call(e) === `[object Object]` && typeof e.toJSON != `function`
}
var Gy;
(function(e) {
    e.direct = `direct`,
    e.patchObject = `patch object`,
    e.patchFunction = `patch function`
}
)(Gy ||= {});
var Ky = ( () => typeof window == `object` && window.window === window ? window : typeof self == `object` && self.self === self ? self : typeof global == `object` && global.global === global ? global : typeof globalThis == `object` ? globalThis : {
    HTMLElement: null
})();
function qy(e, {autoBom: t=!1}={}) {
    return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([`﻿`, e],{
        type: e.type
    }) : e
}
function Jy(e, t, n) {
    let r = new XMLHttpRequest;
    r.open(`GET`, e),
    r.responseType = `blob`,
    r.onload = function() {
        $y(r.response, t, n)
    }
    ,
    r.onerror = function() {
        console.error(`could not download file`)
    }
    ,
    r.send()
}
function Yy(e) {
    let t = new XMLHttpRequest;
    t.open(`HEAD`, e, !1);
    try {
        t.send()
    } catch {}
    return t.status >= 200 && t.status <= 299
}
function Xy(e) {
    try {
        e.dispatchEvent(new MouseEvent(`click`))
    } catch {
        let t = new MouseEvent(`click`,{
            bubbles: !0,
            cancelable: !0,
            view: window,
            detail: 0,
            screenX: 80,
            screenY: 20,
            clientX: 80,
            clientY: 20,
            ctrlKey: !1,
            altKey: !1,
            shiftKey: !1,
            metaKey: !1,
            button: 0,
            relatedTarget: null
        });
        e.dispatchEvent(t)
    }
}
var Zy = typeof navigator == `object` ? navigator : {
    userAgent: ``
}
  , Qy = ( () => /Macintosh/.test(Zy.userAgent) && /AppleWebKit/.test(Zy.userAgent) && !/Safari/.test(Zy.userAgent))()
  , $y = By ? typeof HTMLAnchorElement < `u` && `download` in HTMLAnchorElement.prototype && !Qy ? eb : `msSaveOrOpenBlob` in Zy ? tb : nb : () => {}
;
function eb(e, t=`download`, n) {
    let r = document.createElement(`a`);
    r.download = t,
    r.rel = `noopener`,
    typeof e == `string` ? (r.href = e,
    r.origin === location.origin ? Xy(r) : Yy(r.href) ? Jy(e, t, n) : (r.target = `_blank`,
    Xy(r))) : (r.href = URL.createObjectURL(e),
    setTimeout(function() {
        URL.revokeObjectURL(r.href)
    }, 4e4),
    setTimeout(function() {
        Xy(r)
    }, 0))
}
function tb(e, t=`download`, n) {
    if (typeof e == `string`)
        if (Yy(e))
            Jy(e, t, n);
        else {
            let t = document.createElement(`a`);
            t.href = e,
            t.target = `_blank`,
            setTimeout(function() {
                Xy(t)
            })
        }
    else
        navigator.msSaveOrOpenBlob(qy(e, n), t)
}
function nb(e, t, n, r) {
    if (r ||= open(``, `_blank`),
    r && (r.document.title = r.document.body.innerText = `downloading...`),
    typeof e == `string`)
        return Jy(e, t, n);
    let i = e.type === `application/octet-stream`
      , a = /constructor/i.test(String(Ky.HTMLElement)) || `safari` in Ky
      , o = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((o || i && a || Qy) && typeof FileReader < `u`) {
        let t = new FileReader;
        t.onloadend = function() {
            let e = t.result;
            if (typeof e != `string`)
                throw r = null,
                Error(`Wrong reader.result type`);
            e = o ? e : e.replace(/^data:[^;]*;/, `data:attachment/file;`),
            r ? r.location.href = e : location.assign(e),
            r = null
        }
        ,
        t.readAsDataURL(e)
    } else {
        let t = URL.createObjectURL(e);
        r ? r.location.assign(t) : location.href = t,
        r = null,
        setTimeout(function() {
            URL.revokeObjectURL(t)
        }, 4e4)
    }
}
var {assign: rb} = Object;
function ib() {
    let e = ye(!0)
      , t = e.run( () => Wt({}))
      , n = []
      , r = []
      , i = Bt({
        install(e) {
            Hy(i),
            i._a = e,
            e.provide(Uy, i),
            e.config.globalProperties.$pinia = i,
            r.forEach(e => n.push(e)),
            r = []
        },
        use(e) {
            return this._a ? n.push(e) : r.push(e),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return i
}
var ab = () => {}
;
function ob(e, t, n, r=ab) {
    e.add(t);
    let i = () => {
        e.delete(t) && r()
    }
    ;
    return !n && be() && z(i),
    i
}
function sb(e, ...t) {
    e.forEach(e => {
        e(...t)
    }
    )
}
var cb = e => e()
  , lb = Symbol()
  , ub = Symbol();
function db(e, t) {
    for (let n in e instanceof Map && t instanceof Map ? t.forEach( (t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e),
    t) {
        if (!t.hasOwnProperty(n))
            continue;
        let r = t[n]
          , i = e[n];
        Wy(i) && Wy(r) && e.hasOwnProperty(n) && !Ut(r) && !Ft(r) ? e[n] = db(i, r) : e[n] = r
    }
    return e
}
var fb = Symbol();
function pb(e) {
    return !Wy(e) || !Object.prototype.hasOwnProperty.call(e, fb)
}
var {assign: mb} = Object;
function hb(e) {
    return !!(Ut(e) && e.effect)
}
function gb(e, t, n, r) {
    let {state: i, actions: a, getters: o} = t, s = n.state.value[e], c;
    function l() {
        return s || (n.state.value[e] = i ? i() : {}),
        mb(Zt(n.state.value[e]), a, Object.keys(o || {}).reduce( (t, r) => (t[r] = Bt(ro( () => {
            Hy(n);
            let t = n._s.get(e);
            return o[r].call(t, t)
        }
        )),
        t), {}))
    }
    return c = _b(e, l, t, n, r, !0),
    c
}
function _b(e, t, n={}, r, i, a) {
    let o, s = mb({
        actions: {}
    }, n), c = {
        deep: !0
    }, l, u, d = new Set, f = new Set, p = r.state.value[e];
    !a && !p && (r.state.value[e] = {});
    let m;
    function h(t) {
        let n;
        l = u = !1,
        typeof t == `function` ? (t(r.state.value[e]),
        n = {
            type: Gy.patchFunction,
            storeId: e,
            events: void 0
        }) : (db(r.state.value[e], t),
        n = {
            type: Gy.patchObject,
            payload: t,
            storeId: e,
            events: void 0
        });
        let i = m = Symbol();
        bn().then( () => {
            m === i && (l = !0)
        }
        ),
        u = !0,
        sb(d, n, r.state.value[e])
    }
    let g = a ? function() {
        let {state: e} = n
          , t = e ? e() : {};
        this.$patch(e => {
            mb(e, t)
        }
        )
    }
    : ab;
    function _() {
        o.stop(),
        d.clear(),
        f.clear(),
        r._s.delete(e)
    }
    let v = (t, n=``) => {
        if (lb in t)
            return t[ub] = n,
            t;
        let i = function() {
            Hy(r);
            let n = Array.from(arguments)
              , a = new Set
              , o = new Set;
            function s(e) {
                a.add(e)
            }
            function c(e) {
                o.add(e)
            }
            sb(f, {
                args: n,
                name: i[ub],
                store: y,
                after: s,
                onError: c
            });
            let l;
            try {
                l = t.apply(this && this.$id === e ? this : y, n)
            } catch (e) {
                throw sb(o, e),
                e
            }
            return l instanceof Promise ? l.then(e => (sb(a, e),
            e)).catch(e => (sb(o, e),
            Promise.reject(e))) : (sb(a, l),
            l)
        };
        return i[lb] = !0,
        i[ub] = n,
        i
    }
      , y = jt({
        _p: r,
        $id: e,
        $onAction: ob.bind(null, f),
        $patch: h,
        $reset: g,
        $subscribe(t, n={}) {
            let i = ob(d, t, n.detached, () => a())
              , a = o.run( () => zn( () => r.state.value[e], r => {
                (n.flush === `sync` ? u : l) && t({
                    storeId: e,
                    type: Gy.direct,
                    events: void 0
                }, r)
            }
            , mb({}, c, n)));
            return i
        },
        $dispose: _
    });
    r._s.set(e, y);
    let b = (r._a && r._a.runWithContext || cb)( () => r._e.run( () => (o = ye()).run( () => t({
        action: v
    }))));
    for (let t in b) {
        let n = b[t];
        Ut(n) && !hb(n) || Ft(n) ? a || (p && pb(n) && (Ut(n) ? n.value = p[t] : db(n, p[t])),
        r.state.value[e][t] = n) : typeof n == `function` && (b[t] = v(n, t),
        s.actions[t] = n)
    }
    return mb(y, b),
    mb(zt(y), b),
    Object.defineProperty(y, `$state`, {
        get: () => r.state.value[e],
        set: e => {
            h(t => {
                mb(t, e)
            }
            )
        }
    }),
    r._p.forEach(e => {
        mb(y, o.run( () => e({
            store: y,
            app: r._a,
            pinia: r,
            options: s
        })))
    }
    ),
    p && a && n.hydrate && n.hydrate(y.$state, p),
    l = !0,
    u = !0,
    y
}
function vb(e, t, n) {
    let r, i = typeof t == `function`;
    r = i ? n : t;
    function a(n, a) {
        let o = In();
        return n ||= o ? Fn(Uy, null) : null,
        n && Hy(n),
        n = Vy,
        n._s.has(e) || (i ? _b(e, t, r, n) : gb(e, r, n)),
        n._s.get(e)
    }
    return a.$id = e,
    a
}
const yb = [{
    badge: `Software`,
    title: `Seamless Passenger`,
    image: `/seamless_passenger.png`,
    name: `seamless-passenger`,
    list_images: [{
        picture: `/seamless_passenger.png`
    }, {
        picture: `/seamless_passenger.png`
    }, {
        picture: `/seamless_passenger.png`
    }, {
        picture: `/seamless_passenger.png`
    }],
    sections: [{
        title: `Overview`,
        open: !0,
        type: `text`,
        content: `Seamless Passenger is an end-to-end software solution designed to optimize passenger flow using biometric verification and real-time data integration. The system improves operational efficiency while enhancing security and passenger experience.`
    }, {
        title: `Specification`,
        open: !0,
        type: `spec`,
        content: [{
            label: `Right-hand Gate`,
            value: `1720 (L) x 210 (W) x 1100 (H) mm`
        }, {
            label: `Left-hand Gate`,
            value: `1720 (L) x 210 (W) x 1100 (H) mm`
        }, {
            label: `Intermediate Gate`,
            value: `1888 (L) x 310 (W) x 1100 (H) mm`
        }, {
            label: `Walkway Width (Minimum)`,
            value: `660mm`
        }, {
            label: `Material`,
            value: `Mild Steel / Tempered Glass`
        }, {
            label: `Finishing`,
            value: `Powder Coated / Clear`
        }]
    }, {
        title: `Use Case`,
        open: !0,
        type: `list`,
        content: [`Airports & immigration checkpoints`, `Border control facilities`, `Smart transportation terminals`]
    }, {
        title: `Why This Product Matters`,
        open: !0,
        type: `text`,
        content: `This product ensures smooth passenger movement, higher security, and improved operational efficiency.`
    }]
}, {
    badge: `Software`,
    title: `Passport Issuance`,
    image: `/ds.png`,
    name: `passport-issuance`,
    list_images: [{
        picture: `/ds.png`
    }, {
        picture: `/ds.png`
    }, {
        picture: `/ds.png`
    }, {
        picture: `/ds.png`
    }],
    sections: [{
        title: `Overview`,
        open: !0,
        type: `text`,
        content: `The Passport Issuance Management System is a centralized platform that supports end-to-end passport application and issuance processes. It manages applicant data, biometric capture, verification workflows, and approval stages in a controlled environment. Designed for government-scale operations, it supports large user volumes and multi-location deployments, strengthening identity governance and document security.`
    }, {
        title: `Key Capabilities`,
        open: !0,
        type: `list`,
        content: [`End-to-end passport issuance workflow`, `Biometric and identity data integration`, `Audit trail and compliance monitoring`, `Secure data management`]
    }, {
        title: `Use Case`,
        open: !0,
        type: `list`,
        content: [`Immigration offices`, `Government identity authorities`]
    }, {
        title: `Why This Product Matters`,
        open: !0,
        type: `text`,
        content: `The system ensures data integrity, regulatory compliance, and full auditability throughout the passport issuance lifecycle.`
    }]
}, {
    badge: `Software`,
    title: `Management Deteni`,
    image: `/management_deteni.png`,
    name: `management-deteni`,
    list_images: [{
        picture: `/management_deteni.png`
    }, {
        picture: `/management_deteni.png`
    }, {
        picture: `/management_deteni.png`
    }, {
        picture: `/management_deteni.png`
    }],
    sections: [{
        title: `Overview`,
        open: !0,
        type: `text`,
        content: `The Detention Management System is a digital platform designed to securely manage detention records and monitoring activities. It centralizes identity data, status tracking, and administrative workflows within a single system. The platform enhances transparency, accountability, and operational consistency across facilities. It supports real-time updates and controlled access based on authority levels, making it suitable for correctional, immigration, and detention management environments.`
    }, {
        title: `Key Capabilities`,
        open: !0,
        type: `list`,
        content: [`Centralized detainee records`, `Status and movement tracking`, `Role-based access control`, `Audit and reporting features`]
    }, {
        title: `Use Case`,
        open: !0,
        type: `list`,
        content: [`Detention centers`, `Correctional facilities`, `Law enforcement agencies`]
    }, {
        title: `Why This Product Matters`,
        open: !0,
        type: `text`,
        content: `Improves control, transparency, and accountability in detention management.`
    }]
}, {
    badge: `Software`,
    title: `PKI Solution`,
    image: `/pki_solution.png`,
    name: `pki-solution`,
    list_images: [{
        picture: `/pki_solution.png`
    }, {
        picture: `/pki_solution.png`
    }, {
        picture: `/pki_solution.png`
    }, {
        picture: `/pki_solution.png`
    }],
    sections: [{
        title: `Overview`,
        open: !0,
        type: `text`,
        content: `The PKI Solution provides a robust digital trust infrastructure for secure authentication, encryption, and digital signing. It enables organizations to protect sensitive data and ensure identity assurance across digital services. Designed for enterprise and government environments, the solution supports high-availability deployment and compliance with international security standards.`
    }, {
        title: `Key Capabilities`,
        open: !0,
        type: `list`,
        content: [`Digital certificate management`, `Secure authentication and encryption`, `Compliance with security standards`, `Scalable architecture`]
    }, {
        title: `Use Case`,
        open: !0,
        type: `list`,
        content: [`Government digital services`, `Enterprise security infrastructure`]
    }, {
        title: `Why This Product Matters`,
        open: !0,
        type: `text`,
        content: `Provides a trusted foundation for secure digital transformation initiatives.`
    }]
}, {
    badge: `Software`,
    title: `E-Kiosk`,
    image: `/kiosk.png`,
    name: `e-kiosk`,
    list_images: [{
        picture: `/kiosk.png`
    }, {
        picture: `/kiosk.png`
    }, {
        picture: `/kiosk.png`
    }, {
        picture: `/kiosk.png`
    }],
    sections: [{
        title: `Overview`,
        open: !0,
        type: `text`,
        content: `The E-Kiosk System is an interactive software solution designed to support self-service operations across public and business environments. It enables users to access information, perform transactions, and complete service processes efficiently through a structured digital interface. Built with flexibility and system integration in mind, the E-Kiosk System can seamlessly connect with backend services such as databases, payment systems, and operational platforms.`
    }, {
        title: `Key Capabilities`,
        open: !0,
        type: `list`,
        content: [`Centralized service orchestration`, `Integration with internal and external systems`, `Multi-language support`]
    }, {
        title: `Use Case`,
        open: !0,
        type: `list`,
        content: [`Self check-in and self-registration`, `Service and administrative payments`, `Digital information and wayfinding`, `Public service delivery and onboarding`, `Corporate internal service automation`]
    }, {
        title: `Why This Product Matters`,
        open: !0,
        type: `text`,
        content: `Enhances service accessibility while reducing operational workload.`
    }]
}, {
    badge: `Hardware`,
    title: `Airport Autogate`,
    image: `/gate.png`,
    name: `airport-autogate`,
    list_images: [{
        picture: `/gate.png`
    }, {
        picture: `/gate.png`
    }, {
        picture: `/gate.png`
    }, {
        picture: `/gate.png`
    }],
    sections: [{
        title: `Overview`,
        open: !0,
        type: `text`,
        content: `The Automated Border Control Gate is a hardware solution designed to accelerate and secure clearance processes at airports. It enables self-service passenger verification through the integration of biometric technologies, electronic travel documents, and backend systems. By adopting a standardized self-service approach`
    }, {
        title: `Specification`,
        open: !0,
        type: `spec`,
        content: [{
            label: `Right-hand Gate`,
            value: `1720 (L) x 210 (W) x 1100 (H) mm`
        }, {
            label: `Left-hand Gate`,
            value: `1720 (L) x 210 (W) x 1100 (H) mm`
        }, {
            label: `Intermediate Gate`,
            value: `1888 (L) x 310 (W) x 1100 (H) mm`
        }, {
            label: `Walkway Width (Minimum)`,
            value: `660mm`
        }, {
            label: `Material`,
            value: `Mild Steel / Tempered Glass`
        }, {
            label: `Finishing`,
            value: `Powder Coated / Clear`
        }]
    }, {
        title: `Use Case`,
        open: !0,
        type: `list`,
        content: [`International and domestic airport checkpoints`, `Automated arrival and departure gates`, `High-volume passenger processing zones`, `Smart airport infrastructure initiatives`]
    }, {
        title: `Why This Product Matters`,
        open: !0,
        type: `text`,
        content: `Accelerates passenger flow while maintaining strict security standards.`
    }]
}, {
    badge: `Hardware`,
    title: `Enrollment Devices`,
    image: `/enrollment_device.png`,
    name: `enrollment-devices`,
    list_images: [{
        picture: `/enrollment_device.png`
    }, {
        picture: `/enrollment_device.png`
    }, {
        picture: `/enrollment_device.png`
    }, {
        picture: `/enrollment_device.png`
    }],
    sections: [{
        title: `Overview`,
        open: !0,
        type: `text`,
        content: `Biometric Enrollment Devices are hardware solutions designed for accurate and standardized identity data capture. These devices support the collection of biometric data such as facial images, fingerprints, and identity documents with high precision. Built for large-scale enrollment scenarios and regulated environments, the devices ensure consistent identity data quality. This reliability forms a critical foundation for security systems, digital identity platforms, and verification-based services.`
    }, {
        title: `Specification`,
        open: !0,
        type: `spec`,
        content: [{
            label: `Dimension`,
            value: `224.5 (W) x 650 (D) x 1545 (H) mm`
        }, {
            label: `Material`,
            value: `Mild Steel`
        }, {
            label: `Finishing`,
            value: `Powder Coated`
        }]
    }, {
        title: `Use Case`,
        open: !0,
        type: `list`,
        content: [`National ID and civil registration programs`, `Employee or visitor enrollment systems`, `Border control and enrollment`, `Access control and identity verification projects`]
    }, {
        title: `Why This Product Matters`,
        open: !0,
        type: `text`,
        content: `Biometric Enrollment Devices ensure accurate, secure, and standardized enrollment processes, reducing errors and the risk of data misuse.`
    }]
}, {
    badge: `Hardware`,
    title: `Micro HSM`,
    image: `/default.png`,
    name: `micro-hsm`,
    list_images: [{
        picture: `/default.png`
    }, {
        picture: `/default.png`
    }, {
        picture: `/default.png`
    }, {
        picture: `/default.png`
    }],
    sections: [{
        title: `Overview`,
        open: !0,
        type: `text`,
        content: `The Micro Hardware Security Module (Micro HSM) is a cryptographic security device designed to protect digital keys and encryption processes in an isolated environment. It provides a high level of security for systems sensitive data and critical transactions. With its compact form factor and optimized performance, It helps organizations meet security standards, regulatory compliance, and long-term data protection requirements.`
    }, {
        title: `Key Capabilities`,
        open: !0,
        type: `list`,
        content: [`Secure cryptographic key storage and management`, `Hardware-based encryption and decryption`, `Compliance with security and cryptographic standards`, `Integration with enterprise systems`]
    }, {
        title: `Use Case`,
        open: !0,
        type: `list`,
        content: [`Secure transaction processing systems`, `Digital identity and PKI infrastructure`, `Enterprise security architectures`]
    }, {
        title: `Why This Product Matters`,
        open: !0,
        type: `text`,
        content: `As digital security threats continue to evolve, the Micro HSM delivers hardware-based cryptographic protection that keeps data and transactions secure, even in high-risk environments.`
    }]
}, {
    badge: `Software`,
    title: `Passkey`,
    image: `/default.png`,
    name: `passkey`,
    list_images: [{
        picture: `/defaault.png`
    }, {
        picture: `/defaault.png`
    }, {
        picture: `/defaault.png`
    }, {
        picture: `/defaault.png`
    }],
    sections: [{
        title: `Overview`,
        open: !0,
        type: `text`,
        content: `The Passkey Authentication Platform enables passwordless authentication using cryptographic credentials. It enhances security while simplifying user access across digital services. The platform reduces identity-related risks and supports modern authentication standards suitable for enterprise environments.`
    }, {
        title: `Key Capabilities`,
        open: !0,
        type: `list`,
        content: [`Passwordless authentication`, `Strong cryptographic security`, `Integration with existing systems`, `Compliance with modern standards`]
    }, {
        title: `Use Case`,
        open: !0,
        type: `list`,
        content: [`Enterprise applications`, `Secure portals`, `Identity-based systems`, `Government digital access`]
    }, {
        title: `Why This Product Matters`,
        open: !0,
        type: `text`,
        content: `It delivers stronger security with a seamless user experience.`
    }]
}]
  , bb = vb(`product`, {
    state: () => ({
        products: [],
        showAll: !0,
        productDetail: [],
        productName: ``
    }),
    actions: {
        loadProducts() {
            this.products = yb
        },
        getByName(e) {
            let t = yb.filter(t => t.name === e);
            this.productName = t[0].name,
            this.productDetail = t
        },
        getSearch(e) {
            if (!e) {
                this.products = yb;
                return
            }
            let t = e.toLowerCase();
            this.products = yb.filter(e => e.name.toLowerCase().includes(t))
        },
        getCategory(e) {
            this.products = yb.filter(t => t.badge.includes(e))
        },
        getTwoData(e) {
            this.showAll = e;
            let t = () => this.productName ? (this.products = yb.filter(e => e.name !== this.productName),
            this.products) : (this.products = yb,
            this.products);
            this.showAll ? this.products = t() : this.products = t().slice(0, 2)
        }
    }
});
var xb = {
    name: `ProductsSection`,
    components: {
        ProductCard: jy,
        Statement: zy
    },
    props: {
        subtitle: String,
        heading: String,
        description: String,
        products: {
            type: Array
        },
        showMore: {
            type: Boolean,
            default: !0
        }
    },
    created() {
        this.productState = bb()
    },
    methods: {
        handleViewMore() {
            this.productState.getTwoData(!this.productState.showAll)
        }
    }
}
  , Sb = {
    class: `products-section`
}
  , Cb = {
    class: `header`
}
  , wb = {
    class: `title-width`
}
  , Tb = {
    class: `info-width`
}
  , Eb = {
    class: `delay-1000`
}
  , Db = {
    class: `cards delay-1500`
}
  , Ob = [`href`];
function kb(e, t, n, r, i, a) {
    let o = V(`Statement`)
      , s = V(`ProductCard`)
      , c = Kr(`fade-viewport`);
    return W(),
    G(`section`, Sb, [K(`div`, Cb, [t[2] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, wb, [q(o, {
        brand: `OUR SOLUTIONS`,
        statement: `Delivering scalable digital solutions that support operational excellence`
    })]), K(`div`, Tb, [B((W(),
    G(`p`, Eb, [...t[1] ||= [Da(` Our products are developed to help organizations streamline processes, enhance efficiency, and adopt modern digital capabilities. `, -1)]])), [[c]])])]), B((W(),
    G(`div`, Db, [(W(!0),
    G(U, null, H(n.products, (e, t) => (W(),
    G(`a`, {
        key: t,
        href: `/products/${e.name}`,
        class: `card-link`
    }, [q(s, {
        badge: e.badge,
        image: e.image,
        title: e.title
    }, null, 8, [`badge`, `image`, `title`])], 8, Ob))), 128))])), [[c]]), n.showMore ? B((W(),
    G(`p`, {
        key: 0,
        onClick: t[0] ||= (...e) => a.handleViewMore && a.handleViewMore(...e),
        class: `delay-700 view-more`
    }, [Da(` View ` + R(n.products.length <= 2 ? `More` : `Less`) + ` → `, 1)])), [[c]]) : ka(``, !0)])
}
var Ab = J(xb, [[`render`, kb], [`__scopeId`, `data-v-2d80f7e5`]])
  , jb = {
    name: `SectionHeading`,
    props: {
        label: {
            type: String,
            default: ``
        },
        title: {
            type: String,
            required: !0
        },
        subtitle: {
            type: String,
            default: ``
        },
        labelIcon: {
            type: String,
            default: ``
        }
    }
}
  , Mb = {
    class: `section-heading`
}
  , Nb = {
    class: `label`
}
  , Pb = [`src`]
  , Fb = {
    class: `title`
}
  , Ib = {
    key: 0
}
  , Lb = {
    key: 1
};
function Rb(e, t, n, r, i, a) {
    return W(),
    G(`div`, Mb, [K(`div`, Nb, [n.labelIcon ? (W(),
    G(`img`, {
        key: 0,
        src: n.labelIcon,
        alt: `label icon`,
        class: `label-icon`
    }, null, 8, Pb)) : ka(``, !0), K(`span`, null, R(n.label), 1)]), K(`h2`, Fb, [Da(R(n.title) + ` `, 1), n.subtitle ? (W(),
    G(`br`, Ib)) : ka(``, !0), n.subtitle ? (W(),
    G(`span`, Lb, R(n.subtitle), 1)) : ka(``, !0)])])
}
var zb = J(jb, [[`render`, Rb], [`__scopeId`, `data-v-07bca1dd`]])
  , Bb = {
    name: `ServiceText`,
    props: {
        title: {
            type: String,
            default: `Enterprise Digital Solutions`
        },
        description: {
            type: String,
            default: `We deliver scalable, secure, and future-ready systems to accelerate your business transformation.`
        }
    }
}
  , Vb = {
    class: `service-text`
}
  , Hb = {
    class: `title`
}
  , Ub = {
    class: `description`
};
function Wb(e, t, n, r, i, a) {
    return W(),
    G(`div`, Vb, [K(`h3`, Hb, R(n.title), 1), K(`p`, Ub, R(n.description), 1)])
}
var Gb = J(Bb, [[`render`, Wb], [`__scopeId`, `data-v-81ca55ab`]])
  , Kb = {
    name: `PagerNavigation`
}
  , qb = {
    class: `pager`
};
function Jb(e, t, n, r, i, a) {
    return W(),
    G(`div`, qb, [K(`button`, {
        class: `pager-btn`,
        onClick: t[0] ||= t => e.$emit(`prev`)
    }, [...t[2] ||= [K(`svg`, {
        viewBox: `0 0 24 24`
    }, [K(`path`, {
        d: `M15 18l-6-6 6-6`
    })], -1)]]), K(`button`, {
        class: `pager-btn`,
        onClick: t[1] ||= t => e.$emit(`next`)
    }, [...t[3] ||= [K(`svg`, {
        viewBox: `0 0 24 24`
    }, [K(`path`, {
        d: `M9 6l6 6-6 6`
    })], -1)]])])
}
var Yb = J(Kb, [[`render`, Jb], [`__scopeId`, `data-v-a5402a03`]])
  , Xb = {
    name: `ParentSlide`,
    props: {
        slides: {
            type: Array
        }
    },
    components: {
        PageNavigation: Yb
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    mounted() {
        window.addEventListener(`keydown`, this.onKeydown)
    },
    beforeUnmount() {
        window.removeEventListener(`keydown`, this.onKeydown)
    },
    computed: {
        trackStyle() {
            return {
                transform: `translateX(-${this.currentIndex * 100}%)`
            }
        },
        total() {
            return this.slides.length
        }
    },
    methods: {
        onKeydown(e) {
            switch ([`PageDown`, `PageUp`, `ArrowRight`, `ArrowLeft`].includes(e.code) && e.preventDefault(),
            e.code) {
            case `PageDown`:
            case `ArrowRight`:
                this.next();
                break;
            case `PageUp`:
            case `ArrowLeft`:
                this.prev();
                break
            }
        },
        next() {
            this.currentIndex < this.total - 1 && this.currentIndex++
        },
        prev() {
            this.currentIndex > 0 && this.currentIndex--
        }
    }
}
  , Zb = {
    class: `viewport`
}
  , Qb = {
    style: {
        display: `flex`,
        gap: `1rem`,
        position: `absolute`,
        top: `88%`,
        left: `5%`
    }
};
function $b(e, t, n, r, i, a) {
    let o = V(`PageNavigation`);
    return W(),
    G(`section`, Zb, [K(`div`, {
        class: `track`,
        style: F(a.trackStyle)
    }, [(W(!0),
    G(U, null, H(n.slides, (e, t) => (W(),
    G(`div`, {
        class: `slide`,
        key: t
    }, [(W(),
    ya(Gr(e)))]))), 128))], 4), K(`div`, Qb, [q(o, {
        onPrev: a.prev,
        onNext: a.next
    }, null, 8, [`onPrev`, `onNext`])])])
}
var ex = J(Xb, [[`render`, $b]])
  , tx = {
    components: {
        HeroStatement: by,
        Statement: zy
    }
}
  , nx = {
    class: `set-width`
};
function rx(e, t, n, r, i, a) {
    let o = V(`Statement`)
      , s = V(`HeroStatement`);
    return W(),
    ya(s, null, {
        default: Mn( () => [K(`div`, nx, [q(o)])]),
        _: 1
    })
}
var ix = J(tx, [[`render`, rx]]);
qh.registerPlugin($);
var ax = {
    name: `WhyChooseUs`,
    components: {
        FeatureCard: gu,
        Statement: zy
    },
    props: {
        execution: {
            type: Boolean
        }
    },
    computed: {
        allMobileFeatures() {
            return [...this.leftFeaturesMobile, ...this.rightFeaturesMobile].sort( (e, t) => parseInt(e.number, 10) - parseInt(t.number, 10))
        },
        mobileOffset() {
            let e = this.screenWidth <= 380
              , t = {
                1: 0,
                2: -120,
                3: -155,
                4: -280
            }
              , n = {
                1: 0,
                2: -110,
                3: -140,
                4: -250
            };
            return r => {
                let i = parseInt(r, 10);
                return e ? t[i] ?? 0 : n[i] ?? 0
            }
        }
    },
    data() {
        return {
            leftFeatures: [{
                number: `01`,
                title: `Experienced & Proven Team`,
                description: `Our team brings deep expertise in delivering complex digital solutions for diverse industries.`
            }, {
                number: `03`,
                title: `Reliable & Scalable Technology`,
                description: `We utilize technology architectures that support long-term growth and modernization.`
            }],
            rightFeatures: [{
                number: `02`,
                title: `Tailored to Your Business`,
                description: `We design solutions based on your operational challenges and industry context.`
            }, {
                number: `04`,
                title: `Integrated End to End Support`,
                description: `Supporting clients from consultation and implementation to maintenance.`
            }],
            leftFeaturesMobile: [{
                number: `01`,
                title: `Experienced & Proven Team`,
                description: `Our team brings deep expertise in delivering complex digital solutions for diverse industries.`
            }, {
                number: `02`,
                title: `Tailored to Your Business`,
                description: `We design solutions based on your operational challenges and industry context.`
            }],
            rightFeaturesMobile: [{
                number: `03`,
                title: `Reliable & Scalable Technology`,
                description: `We utilize technology architectures that support long-term growth and modernization.`
            }, {
                number: `04`,
                title: `Integrated End to End Support`,
                description: `Supporting clients from consultation and implementation to maintenance.`
            }],
            scrollCtx: null,
            screenWidth: window.innerWidth
        }
    },
    mounted() {
        window.addEventListener(`resize`, () => {
            this.screenWidth = window.innerWidth
        }
        ),
        this.$nextTick( () => {
            this.playAnimation()
        }
        )
    },
    beforeUnmount() {
        this.scrollCtx && this.scrollCtx.revert()
    },
    methods: {
        playAnimation() {
            this.scrollCtx && this.scrollCtx.revert(),
            this.scrollCtx = qh.context( () => {
                let e = window.innerWidth <= 768
                  , t = this.$el.querySelector(e ? `.center-mobile` : `.center`);
                t && qh.from(t, {
                    scrollTrigger: {
                        trigger: t,
                        start: `top 45%`
                    },
                    opacity: 0,
                    y: 30,
                    duration: .5,
                    ease: `power3.out`
                });
                let n = [];
                n = e ? Array.from(this.$el.querySelectorAll(`.column-mobile-container .feature-card`)) : Array.from(this.$el.querySelectorAll(`.column .feature-card`));
                let r = n.sort( (e, t) => parseInt(e.querySelector(`.feature-number`).textContent.trim(), 10) - parseInt(t.querySelector(`.feature-number`).textContent.trim(), 10));
                qh.set(r, {
                    opacity: 0,
                    y: 50
                });
                let i = qh.timeline({
                    scrollTrigger: {
                        trigger: this.$refs.section,
                        start: `top top`,
                        end: e ? `+=50%` : `+=10%`,
                        scrub: 1,
                        pin: !0,
                        anticipatePin: 1,
                        pinSpacing: !1
                    }
                });
                r.forEach(e => {
                    i.to(e, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: `power2.out`
                    })
                }
                )
            }
            , this.$el)
        },
        getCardStyle(e) {
            if (this.screenWidth > 768)
                return {};
            let t = Number(e);
            if (t < 2)
                return {};
            let n = 0;
            return n = this.screenWidth <= 360 ? -14 : this.screenWidth <= 390 ? -12 : this.screenWidth <= 412 ? -11 : this.screenWidth <= 428 ? -10 : -9,
            {
                marginTop: `${n}vh`,
                zIndex: t,
                position: `relative`
            }
        }
    }
}
  , ox = {
    class: `why-choose`,
    ref: `section`
}
  , sx = {
    class: `grid`
}
  , cx = {
    class: `column left`
}
  , lx = {
    class: `center`
}
  , ux = {
    class: `column right`
}
  , dx = {
    class: `mobile-display`
}
  , fx = {
    class: `center-mobile`
}
  , px = {
    class: `column-mobile-container`
};
function mx(e, t, n, r, i, a) {
    let o = V(`FeatureCard`)
      , s = V(`Statement`);
    return W(),
    G(`section`, ox, [t[0] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, sx, [K(`div`, cx, [(W(!0),
    G(U, null, H(i.leftFeatures, e => (W(),
    ya(o, Na({
        key: e.number
    }, {
        ref_for: !0
    }, e, {
        class: `feature-card`
    }), null, 16))), 128))]), K(`div`, lx, [q(s, {
        brand: `WHY CHOOSE US`,
        statement: `Expertise, Speed, and Targeted Solutions`
    })]), K(`div`, ux, [(W(!0),
    G(U, null, H(i.rightFeatures, e => (W(),
    ya(o, Na({
        key: e.number
    }, {
        ref_for: !0
    }, e, {
        class: `feature-card`
    }), null, 16))), 128))])]), K(`div`, dx, [K(`div`, fx, [q(s, {
        brand: `WHY CHOOSE US`,
        statement: `Expertise, Speed, and Targeted Solutions`,
        disableMinHeight: !0
    })]), K(`div`, px, [(W(!0),
    G(U, null, H(a.allMobileFeatures, e => (W(),
    ya(o, Na({
        key: e.number
    }, {
        ref_for: !0
    }, e, {
        class: `feature-card`,
        style: a.getCardStyle(e.number)
    }), null, 16, [`style`]))), 128))])])], 512)
}
var hx = J(ax, [[`render`, mx], [`__scopeId`, `data-v-e33e2721`]]);
const gx = vb(`animate`, {
    state: () => ({
        indexAbout: 0
    }),
    actions: {
        setCurrentIndex(e) {
            this.indexAbout = e
        }
    }
});
var _x = {
    name: `MainStatement`,
    props: {
        backgroundImage: {
            type: String,
            default: `/about.webp`
        }
    },
    data() {
        return {
            currentIndex: 0,
            maxIndex: 1,
            inViewport: !1,
            isScrolling: !1,
            scrollTimeout: null,
            observer: null,
            debugTop: 0
        }
    },
    created() {
        this.animateState = gx()
    },
    mounted() {
        this.setupObserver(),
        window.addEventListener(`keydown`, this.onKeydown);
        let e = this.$refs.hero;
        e.addEventListener(`touchstart`, this.onTouchStart, {
            passive: !0
        }),
        e.addEventListener(`touchmove`, this.onTouchMove, {
            passive: !1
        }),
        e.addEventListener(`touchend`, this.onTouchEnd, {
            passive: !0
        })
    },
    beforeUnmount() {
        this.observer && this.observer.disconnect(),
        this.scrollTimeout && clearTimeout(this.scrollTimeout),
        window.removeEventListener(`keydown`, this.onKeydown);
        let e = this.$refs.hero;
        e && (e.removeEventListener(`touchstart`, this.onTouchStart),
        e.removeEventListener(`touchmove`, this.onTouchMove),
        e.removeEventListener(`touchend`, this.onTouchEnd))
    },
    methods: {
        setupObserver() {
            this.observer = new IntersectionObserver( ([e]) => {
                let t = e.boundingClientRect
                  , n = window.innerHeight
                  , r = t.top <= 5 && t.bottom > n * .3;
                this.inViewport = r,
                this.debugTop = Math.round(t.top),
                !r && this.currentIndex !== 0 && setTimeout( () => {
                    this.inViewport || (this.currentIndex = 0)
                }
                , 500)
            }
            ,{
                threshold: Array.from({
                    length: 101
                }, (e, t) => t / 100),
                rootMargin: `0px`
            }),
            this.observer.observe(this.$refs.hero)
        },
        onWheel(e) {
            if (!this.inViewport || this.isScrolling)
                return;
            let t = e.deltaY > 0
              , n = e.deltaY < 0;
            t && this.currentIndex < this.maxIndex ? (e.preventDefault(),
            this.currentIndex++,
            this.animateState.setCurrentIndex(this.currentIndex),
            this.throttleScroll()) : n && this.currentIndex > 0 && (e.preventDefault(),
            this.currentIndex--,
            this.animateState.setCurrentIndex(this.currentIndex),
            this.throttleScroll())
        },
        onKeydown(e) {
            !this.inViewport || this.isScrolling || ([`PageDown`, `ArrowDown`, ` `].includes(e.key) && this.currentIndex < this.maxIndex ? (e.preventDefault(),
            this.currentIndex++,
            this.animateState.setCurrentIndex(this.currentIndex),
            console.log(`plus`, this.currentIndex),
            this.throttleScroll()) : [`PageUp`, `ArrowUp`].includes(e.key) && this.currentIndex > 0 ? (e.preventDefault(),
            this.currentIndex--,
            this.animateState.setCurrentIndex(this.currentIndex),
            this.throttleScroll()) : console.log(`   🔓 Letting browser scroll (at boundary)`))
        },
        throttleScroll() {
            this.isScrolling = !0,
            this.scrollTimeout && clearTimeout(this.scrollTimeout),
            this.scrollTimeout = setTimeout( () => {
                this.isScrolling = !1
            }
            , 800)
        }
    }
}
  , vx = {
    class: `scroll-content`
};
function yx(e, t, n, r, i, a) {
    return W(),
    G(`section`, {
        ref: `hero`,
        class: `hero-statement`,
        style: F({
            backgroundImage: `url(${n.backgroundImage})`
        }),
        onWheel: t[0] ||= (...e) => a.onWheel && a.onWheel(...e)
    }, [t[1] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, vx, [(W(),
    G(U, null, H(2, t => K(`div`, {
        key: t,
        class: I([`slide`, {
            active: i.currentIndex === t - 1
        }])
    }, [Yr(e.$slots, `default`, {
        index: t - 1
    }, void 0, !0)], 2)), 64))])], 36)
}
var bx = J(_x, [[`render`, yx], [`__scopeId`, `data-v-58294568`]])
  , xx = {
    name: `Statement`,
    props: {
        brand: {
            type: [String, Boolean],
            default: `SIMPLE JOURNEY`
        },
        brandIcon: {
            type: [String, Boolean],
            default: `/icon_diamond.png`
        },
        statement: {
            type: String,
            default: `PT Simple Journey is an IT consulting company and a provider of Infrastructure Solutions, Digital Solutions, Cross-Industry Solutions, and IT Operation Services.`
        },
        align: {
            type: String,
            default: `center`,
            validator: e => [`center`, `left`].includes(e)
        }
    },
    data() {
        return {
            brandVisible: !1,
            statementVisible: !1,
            observer: null
        }
    },
    computed: {
        alignmentClass() {
            return {
                "align-center": this.align === `center`,
                "align-left": this.align === `left`
            }
        }
    },
    mounted() {
        this.observer = new IntersectionObserver( ([e]) => {
            e.isIntersecting && (this.brandVisible = !0,
            setTimeout( () => this.statementVisible = !0, 100),
            this.observer.disconnect())
        }
        ,{
            threshold: .1,
            rootMargin: `0px 0px -150px 0px`
        }),
        this.observer.observe(this.$refs.section)
    },
    beforeUnmount() {
        this.observer && this.observer.disconnect()
    }
}
  , Sx = {
    class: `content`
}
  , Cx = {
    class: `brand delay-500`
}
  , wx = [`src`]
  , Tx = {
    class: `brand-text`
}
  , Ex = {
    class: `delay-1000`
};
function Dx(e, t, n, r, i, a) {
    let o = Kr(`fade-viewport`);
    return B((W(),
    G(`section`, {
        ref: `section`,
        class: I(a.alignmentClass)
    }, [K(`div`, Sx, [K(`div`, Cx, [K(`img`, {
        src: n.brandIcon,
        alt: `brand icon`,
        class: `brand-icon`
    }, null, 8, wx), K(`span`, Tx, R(n.brand), 1)]), K(`h1`, Ex, R(n.statement), 1), Yr(e.$slots, `default`, {}, void 0, !0)])], 2)), [[o]])
}
var Ox = J(xx, [[`render`, Dx], [`__scopeId`, `data-v-a7ed792a`]]);
qh.registerPlugin($);
var kx = {
    name: `WhyChooseUs`,
    components: {
        FeatureCard: gu,
        Statement: zy
    },
    props: {
        execution: {
            type: Boolean
        },
        animationMode: {
            type: String,
            default: `simultaneous`
        }
    },
    computed: {
        getCurrentIndex() {
            return gx().indexAbout
        },
        mobileOffset() {
            let e = this.screenWidth <= 380
              , t = {
                1: 0,
                2: -120,
                3: -155,
                4: -280
            }
              , n = {
                1: 0,
                2: -110,
                3: -140,
                4: -250
            };
            return r => {
                let i = parseInt(r, 10);
                return e ? t[i] ?? 0 : n[i] ?? 0
            }
        }
    },
    data() {
        return {
            leftFeatures: [{
                number: `01`,
                title: `Experienced & Proven Team`,
                description: `Our team brings deep expertise in delivering complex digital solutions for diverse industries.`
            }, {
                number: `03`,
                title: `Reliable & Scalable Technology`,
                description: `We utilize technology architectures that support long-term growth and modernization.`
            }],
            rightFeatures: [{
                number: `02`,
                title: `Tailored to Your Business`,
                description: `We design solutions based on your operational challenges and industry context.`
            }, {
                number: `04`,
                title: `Integrated End to End Support`,
                description: `Supporting clients from consultation and implementation to maintenance.`
            }],
            leftFeaturesMobile: [{
                number: `01`,
                title: `Experienced & Proven Team`,
                description: `Our team brings deep expertise in delivering complex digital solutions for diverse industries.`
            }, {
                number: `02`,
                title: `Tailored to Your Business`,
                description: `We design solutions based on your operational challenges and industry context.`
            }],
            rightFeaturesMobile: [{
                number: `03`,
                title: `Reliable & Scalable Technology`,
                description: `We utilize technology architectures that support long-term growth and modernization.`
            }, {
                number: `04`,
                title: `Integrated End to End Support`,
                description: `Supporting clients from consultation and implementation to maintenance.`
            }],
            screenWidth: window.innerWidth,
            ctx: null
        }
    },
    mounted() {
        window.addEventListener(`resize`, () => {
            this.screenWidth = window.innerWidth
        }
        )
    },
    beforeUnmount() {
        this.ctx && this.ctx.revert()
    },
    watch: {
        getCurrentIndex(e) {
            e === 1 && this.$nextTick( () => {
                this.initScrollAnimation()
            }
            )
        }
    },
    methods: {
        initScrollAnimation() {
            this.ctx ||= qh.context( () => {
                qh.set(`.center, .center-mobile`, {
                    opacity: 0,
                    y: 30
                }),
                qh.set(`.feature-card-item, .feature-card-item-mobile`, {
                    opacity: 0,
                    scale: .5
                });
                let e = qh.timeline({
                    scrollTrigger: {
                        trigger: this.$el,
                        start: `top 50%`,
                        toggleActions: `play none none reverse`
                    }
                });
                e.to(`.center, .center-mobile`, {
                    opacity: 1,
                    y: 0,
                    duration: .8,
                    ease: `power2.out`
                });
                let t = Array.from(document.querySelectorAll(`.feature-card-item, .feature-card-item-mobile`));
                t.sort( (e, t) => parseInt(e.querySelector(`.feature-number`).textContent.trim(), 10) - parseInt(t.querySelector(`.feature-number`).textContent.trim(), 10));
                let n = this.animationMode === `simultaneous` ? 0 : .5;
                e.to(t, {
                    opacity: 1,
                    scale: 1,
                    duration: .8,
                    stagger: n,
                    ease: `back.out(1.7)`
                }, `-=0.2`)
            }
            , this.$el)
        }
    }
}
  , Ax = {
    class: `why-choose`
}
  , jx = {
    class: `grid`
}
  , Mx = {
    class: `column left`
}
  , Nx = {
    class: `center`
}
  , Px = {
    class: `column right`
}
  , Fx = {
    class: `mobile-display`
}
  , Ix = {
    class: `center-mobile`
}
  , Lx = {
    class: `column-mobile left`
}
  , Rx = {
    class: `column-mobile right`
};
function zx(e, t, n, r, i, a) {
    let o = V(`FeatureCard`)
      , s = V(`Statement`);
    return W(),
    G(`section`, Ax, [K(`div`, jx, [K(`div`, Mx, [(W(!0),
    G(U, null, H(i.leftFeatures, e => (W(),
    ya(o, Na({
        key: e.number
    }, {
        ref_for: !0
    }, e, {
        class: `feature-card-item`
    }), null, 16))), 128))]), K(`div`, Nx, [q(s, {
        brand: `WHY CHOOSE US`,
        statement: `Expertise, Speed, and Targeted Solutions`
    })]), K(`div`, Px, [(W(!0),
    G(U, null, H(i.rightFeatures, e => (W(),
    ya(o, Na({
        key: e.number
    }, {
        ref_for: !0
    }, e, {
        class: `feature-card-item`
    }), null, 16))), 128))])]), K(`div`, Fx, [K(`div`, Ix, [q(s, {
        brand: `WHY CHOOSE US`,
        statement: `Expertise, Speed, and Targeted Solutions`
    })]), K(`div`, null, [K(`div`, Lx, [(W(!0),
    G(U, null, H(i.leftFeaturesMobile, e => (W(),
    ya(o, Na({
        key: e.number
    }, {
        ref_for: !0
    }, e, {
        class: `feature-card-item-mobile`,
        style: {
            transform: `translateY(${a.mobileOffset(e.number)}px)`
        }
    }), null, 16, [`style`]))), 128))]), K(`div`, Rx, [(W(!0),
    G(U, null, H(i.rightFeaturesMobile, e => (W(),
    ya(o, Na({
        key: e.number
    }, {
        ref_for: !0
    }, e, {
        class: `feature-card-item-mobile`,
        style: {
            transform: `translateY(${a.mobileOffset(e.number)}px)`
        }
    }), null, 16, [`style`]))), 128))])])])])
}
var Bx = {
    name: `ParentOthers`,
    components: {
        MainStatement: bx,
        StatementHead: Ox,
        ChooseUs: J(kx, [[`render`, zx], [`__scopeId`, `data-v-7e0f7104`]])
    }
}
  , Vx = {
    key: 0,
    style: {
        "text-align": `center`
    },
    class: `panel`
}
  , Hx = {
    key: 1,
    class: `panel`
};
function Ux(e, t, n, r, i, a) {
    let o = V(`StatementHead`)
      , s = V(`ChooseUs`)
      , c = V(`MainStatement`);
    return W(),
    ya(c, null, {
        default: Mn( ({index: e}) => [e === 0 ? (W(),
        G(`div`, Vx, [q(o)])) : ka(``, !0), e === 1 ? (W(),
        G(`div`, Hx, [q(s, {
            execution: e === 1
        }, null, 8, [`execution`])])) : ka(``, !0)]),
        _: 1
    })
}
var Wx = J(Bx, [[`render`, Ux], [`__scopeId`, `data-v-c7d507af`]]);
qh.registerPlugin($);
var Gx = {
    name: `ITServices`,
    props: {
        infrastructureImage: {
            type: String,
            default: `/infra_solution.webm`
        },
        digitalImage: {
            type: String,
            default: `/digital_solution.webm`
        },
        itOperationImage: {
            type: String,
            default: `/it_operation.webm`
        },
        crossIndustryImage: {
            type: String,
            default: `/cross_industry.webm`
        }
    },
    components: {
        Statement: zy
    },
    data() {
        return {
            scrollTriggerInstance: null
        }
    },
    mounted() {
        this.initScrollAnimation()
    },
    beforeUnmount() {
        this.scrollTriggerInstance && this.scrollTriggerInstance.kill(),
        $.getAll().forEach(e => e.kill())
    },
    methods: {
        initScrollAnimation() {
            let e = this.$refs.servicesSection
              , t = this.$el.querySelectorAll(`.service-card`);
            qh.set(t, {
                opacity: 0,
                y: -50,
                pointerEvents: `none`
            }),
            qh.set(t[0], {
                opacity: 1,
                y: 0,
                pointerEvents: `auto`
            }),
            this.scrollTriggerInstance = qh.timeline({
                scrollTrigger: {
                    trigger: e,
                    start: `top top`,
                    end: `+=${t.length * 50}%`,
                    scrub: 1,
                    pin: !0,
                    anticipatePin: 1,
                    onUpdate: e => {
                        let n = e.progress
                          , r = t.length
                          , i = Math.min(Math.floor(n * r), r - 1);
                        t.forEach( (e, t) => {
                            t === i ? qh.to(e, {
                                opacity: 1,
                                y: 0,
                                pointerEvents: `auto`,
                                duration: .6,
                                ease: `power2.out`
                            }) : t < i ? qh.to(e, {
                                opacity: 0,
                                y: -50,
                                pointerEvents: `none`,
                                duration: .4,
                                ease: `power2.in`
                            }) : qh.to(e, {
                                opacity: 0,
                                y: -50,
                                pointerEvents: `none`,
                                duration: .4,
                                ease: `power2.inOut`
                            })
                        }
                        )
                    }
                }
            }).scrollTrigger
        }
    }
}
  , Kx = {
    class: `services-section`,
    ref: `servicesSection`
}
  , qx = {
    class: `container`
}
  , Jx = {
    class: `header`
}
  , Yx = {
    class: `delay-700 container-card`
}
  , Xx = {
    class: `cards-wrapper`,
    ref: `cardsWrapper`
}
  , Zx = {
    class: `service-card`,
    "data-card": `0`
}
  , Qx = {
    class: `image`
}
  , $x = [`src`]
  , eS = {
    class: `service-card`,
    "data-card": `1`
}
  , tS = {
    class: `image`
}
  , nS = [`src`]
  , rS = {
    class: `service-card`,
    "data-card": `2`
}
  , iS = {
    class: `image`
}
  , aS = [`src`]
  , oS = {
    class: `service-card`,
    "data-card": `3`
}
  , sS = {
    class: `image`
}
  , cS = [`src`];
function lS(e, t, n, r, i, a) {
    let o = V(`Statement`)
      , s = Kr(`fade-viewport`);
    return W(),
    G(`section`, Kx, [K(`div`, qx, [K(`div`, Jx, [q(o, {
        align: `left`,
        brand: `OUR SERVICES`,
        statement: `Comprehensive IT Solutions for Your Business`
    })]), B((W(),
    G(`div`, Yx, [K(`div`, Xx, [K(`div`, Zx, [t[0] ||= K(`div`, {
        class: `content`
    }, [K(`h2`, null, `Infrastructure Solution`), K(`p`, null, ` Optimize your IT foundation with our cutting-edge infrastructure solutions. From cloud computing and data centers to network security and system integration, we ensure a scalable, secure, and high-performance IT environment tailored to your business needs. `)], -1), K(`div`, Qx, [K(`video`, {
        src: n.infrastructureImage,
        autoplay: ``,
        loop: ``,
        muted: ``,
        playsinline: ``
    }, null, 8, $x)])]), K(`div`, eS, [K(`div`, tS, [K(`video`, {
        src: n.digitalImage,
        autoplay: ``,
        loop: ``,
        muted: ``,
        playsinline: ``
    }, null, 8, nS)]), t[1] ||= K(`div`, {
        class: `content`
    }, [K(`h2`, null, `Digital Solution`), K(`p`, null, ` Drive innovation and efficiency with our digital transformation services. We provide custom software development, enterprise applications, automation, and AI-driven solutions to enhance productivity and customer experience in the digital era. `)], -1)]), K(`div`, rS, [t[2] ||= K(`div`, {
        class: `content`
    }, [K(`h2`, null, `Cross-Industry Solution`), K(`p`, null, ` We deliver tailored technology solutions across industries, including finance, healthcare, retail, and manufacturing. Our expertise in industry-specific challenges allows us to create scalable, future-ready digital ecosystems that drive business growth. `)], -1), K(`div`, iS, [K(`video`, {
        src: n.crossIndustryImage,
        autoplay: ``,
        loop: ``,
        muted: ``,
        playsinline: ``
    }, null, 8, aS)])]), K(`div`, oS, [K(`div`, sS, [K(`video`, {
        src: n.itOperationImage,
        autoplay: ``,
        loop: ``,
        muted: ``,
        playsinline: ``
    }, null, 8, cS)]), t[3] ||= K(`div`, {
        class: `content`
    }, [K(`h2`, null, `IT Operation Services`), K(`p`, null, ` Ensure seamless IT operations with our end-to-end managed services. From IT support, cloud management, and cybersecurity to proactive monitoring and disaster recovery, we help you maintain high availability, security, and operational efficiency—without the hassle. `)], -1)])], 512)])), [[s]])])], 512)
}
var uS = J(Gx, [[`render`, lS], [`__scopeId`, `data-v-03d734da`]])
  , dS = {
    name: `Homeview`,
    components: {
        MainStatement: ix,
        ParentSlide: ex,
        AppFooter: Xl,
        HeroCenterSection: nu,
        Button: cu,
        ChooseUs: hx,
        FeatureCard: gu,
        Hero: ju,
        HeroCtaSection: Ru,
        HeroStatement: by,
        ProductCard: jy,
        ProductSection: Ab,
        SectionHeading: zb,
        ServiceCard: uS,
        ServiceText: Gb,
        Statement: zy,
        ParentOthers: Wx
    },
    created() {
        this.productState = bb()
    },
    computed: {
        products() {
            return this.productState.products
        }
    },
    mounted() {
        this.productState.getTwoData(!this.productState.showAll)
    },
    data() {
        return {
            slides: [Bt(ix), Bt(hx), Bt(uS)]
        }
    }
}
  , fS = {
    class: `show-mobile`
}
  , pS = {
    class: `show-desktop`
};
function mS(e, t, n, r, i, a) {
    let o = V(`Hero`)
      , s = V(`Statement`)
      , c = V(`HeroStatement`)
      , l = V(`ChooseUs`)
      , u = V(`ParentOthers`)
      , d = V(`ServiceCard`)
      , f = V(`ProductSection`)
      , p = V(`HeroCtaSection`)
      , m = V(`AppFooter`);
    return W(),
    G(`div`, null, [q(o), K(`div`, fS, [q(c, null, {
        default: Mn( () => [q(s)]),
        _: 1
    }), q(l)]), K(`div`, pS, [q(u)]), q(d), q(f, {
        subtitle: `OUR SOLUTIONS`,
        heading: `Products & Services`,
        description: `We deliver enterprise-grade solutions designed to support your digital transformation journey.`,
        products: a.products,
        showMore: !0
    }, null, 8, [`products`]), q(p), q(m)])
}
var hS = J(dS, [[`render`, mS]])
  , gS = {
    name: `WhyChooseUs`,
    components: {
        FeatureCard: gu,
        Statement: zy
    },
    computed: {
        mobileOffset() {
            return e => {
                let t = parseInt(e, 10);
                return t === 1 ? 0 : t === 2 ? -110 : t === 3 ? -140 : t === 4 ? -250 : 0
            }
        }
    },
    data() {
        return {
            leftFeatures: [{
                number: `01`,
                title: `Experienced & Proven Team`,
                description: `Our team brings deep expertise in delivering complex digital solutions for diverse industries.`
            }, {
                number: `03`,
                title: `Reliable & Scalable Technology`,
                description: `We utilize technology architectures that support long-term growth and modernization.`
            }],
            rightFeatures: [{
                number: `02`,
                title: `Tailored to Your Business`,
                description: `We design solutions based on your operational challenges and industry context.`
            }, {
                number: `04`,
                title: `Integrated End to End Support`,
                description: `Supporting clients from consultation and implementation to maintenance.`
            }],
            leftFeaturesMobile: [{
                number: `01`,
                title: `Experienced & Proven Team`,
                description: `Our team brings deep expertise in delivering complex digital solutions for diverse industries.`
            }, {
                number: `02`,
                title: `Tailored to Your Business`,
                description: `We design solutions based on your operational challenges and industry context.`
            }],
            rightFeaturesMobile: [{
                number: `03`,
                title: `Reliable & Scalable Technology`,
                description: `We utilize technology architectures that support long-term growth and modernization.`
            }, {
                number: `04`,
                title: `Integrated End to End Support`,
                description: `Supporting clients from consultation and implementation to maintenance.`
            }],
            cardVisible: !1,
            startTimer: null,
            hasEnteredViewport: !1,
            timerDone: !1
        }
    },
    methods: {
        checkCanShowCards() {
            this.hasEnteredViewport && this.timerDone && (this.cardVisible = !0)
        },
        getDelay(e) {
            return parseInt(e, 10) * 1e3
        }
    }
}
  , _S = {
    class: `why-choose`
}
  , vS = {
    class: `grid`
}
  , yS = {
    class: `column left`
}
  , bS = {
    class: `center`
}
  , xS = {
    class: `column right`
}
  , SS = {
    class: `mobile-display`
}
  , CS = {
    class: `center-mobile`
}
  , wS = {
    class: `column-mobile left`
}
  , TS = {
    class: `column-mobile right`
};
function ES(e, t, n, r, i, a) {
    let o = V(`FeatureCard`)
      , s = V(`Statement`);
    return W(),
    G(`section`, _S, [K(`div`, vS, [K(`div`, yS, [(W(!0),
    G(U, null, H(i.leftFeatures, e => (W(),
    ya(o, Na({
        key: e.number
    }, {
        ref_for: !0
    }, e, {
        animate: i.cardVisible,
        delay: a.getDelay(e.number)
    }), null, 16, [`animate`, `delay`]))), 128))]), K(`div`, bS, [q(s, {
        brand: `WHY CHOOSE US`,
        statement: `Expertise, Speed, and Targeted Solutions`
    })]), K(`div`, xS, [(W(!0),
    G(U, null, H(i.rightFeatures, e => (W(),
    ya(o, Na({
        key: e.number
    }, {
        ref_for: !0
    }, e, {
        animate: i.cardVisible,
        delay: a.getDelay(e.number)
    }), null, 16, [`animate`, `delay`]))), 128))])]), K(`div`, SS, [K(`div`, CS, [q(s, {
        brand: `WHY CHOOSE US`,
        statement: `Expertise, Speed, and Targeted Solutions`
    })]), K(`div`, null, [K(`div`, wS, [(W(!0),
    G(U, null, H(i.leftFeaturesMobile, e => (W(),
    ya(o, Na({
        key: e.number
    }, {
        ref_for: !0
    }, e, {
        animate: i.cardVisible,
        delay: a.getDelay(e.number),
        style: {
            transform: `translateY(${a.mobileOffset(e.number)}px)`
        }
    }), null, 16, [`animate`, `delay`, `style`]))), 128))]), K(`div`, TS, [(W(!0),
    G(U, null, H(i.rightFeaturesMobile, e => (W(),
    ya(o, Na({
        key: e.number
    }, {
        ref_for: !0
    }, e, {
        animate: i.cardVisible,
        delay: a.getDelay(e.number),
        style: {
            transform: `translateY(${a.mobileOffset(e.number)}px)`
        }
    }), null, 16, [`animate`, `delay`, `style`]))), 128))])])])])
}
var DS = J(gS, [[`render`, ES], [`__scopeId`, `data-v-d3c9e781`]])
  , OS = {
    name: `HeroCtaSection`,
    components: {
        ContactButton: cu
    },
    props: {
        title: {
            type: String,
            default: `Ready to Collaborate With Us?`
        },
        subtitle: {
            type: String,
            default: `Discuss your business technology needs with the SimpleJourney team.`
        },
        backgroundImage: {
            type: String,
            default: `/collaborate.jpg`
        },
        buttonText: {
            type: String,
            default: `Let's Get Started`
        }
    },
    computed: {
        backgroundStyle() {
            return {
                backgroundImage: `url(${this.backgroundImage})`
            }
        }
    },
    methods: {
        onClick() {
            this.$emit(`cta-click`)
        }
    }
}
  , kS = {
    class: `content`
}
  , AS = {
    class: `text`
}
  , jS = {
    class: `delay-300`
}
  , MS = {
    class: `delay-700`
}
  , NS = {
    class: `delay-1000`,
    style: {
        "max-width": `200px`
    }
};
function PS(e, t, n, r, i, a) {
    let o = V(`ContactButton`)
      , s = Kr(`fade-viewport`);
    return W(),
    G(`div`, null, [K(`section`, {
        class: `hero`,
        style: F(a.backgroundStyle)
    }, [t[0] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, kS, [K(`div`, AS, [B((W(),
    G(`h1`, jS, [Da(R(n.title), 1)])), [[s]]), B((W(),
    G(`p`, MS, [Da(R(n.subtitle), 1)])), [[s]]), B((W(),
    G(`div`, NS, [q(o, {
        onClick: a.onClick
    }, {
        default: Mn( () => [Da(R(n.buttonText), 1)]),
        _: 1
    }, 8, [`onClick`])])), [[s]])])])], 4)])
}
var FS = J(OS, [[`render`, PS], [`__scopeId`, `data-v-dc66a76c`]])
  , IS = `/rectangle.png`
  , LS = {
    name: `BreadCumb`,
    computed: {
        breadcrumb() {
            let e = this.$route.params.slug;
            return e ? e.split(`-`).map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(` `) : this.$route.name || ``
        },
        routeParent() {
            return `/` + this.$route?.name.toLowerCase()
        },
        routeSlug() {
            return this.$route?.params?.slug?.toLowerCase()
        },
        cekRoute() {
            return this.$route?.name.split(`-`).map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(` `)
        },
        cekSlug() {
            return this.$route?.params?.slug
        }
    }
}
  , RS = {
    class: `bread-cumb`
}
  , zS = [`href`]
  , BS = {
    key: 0,
    src: IS,
    alt: `SJI Logo`,
    height: `10`
}
  , VS = [`href`]
  , HS = {
    key: 0,
    class: `secondary`
};
function US(e, t, n, r, i, a) {
    return W(),
    G(`div`, RS, [t[0] ||= K(`a`, {
        style: {
            color: `inherit`,
            "text-underline-offset": `3px`
        },
        href: `/`
    }, [K(`p`, {
        class: `primary`
    }, `Home`)], -1), t[1] ||= K(`img`, {
        src: `/rectangle.png`,
        alt: `SJI Logo`,
        height: `10`
    }, null, -1), K(`a`, {
        style: F({
            color: a.cekSlug ? `inherit` : `#1e88ff`,
            textUnderlineOffset: `3px`
        }),
        href: a.routeParent
    }, [K(`p`, {
        class: I(a.cekSlug ? `primary` : `secondary`)
    }, R(a.cekRoute), 3)], 12, zS), a.cekSlug ? (W(),
    G(`img`, BS)) : ka(``, !0), K(`a`, {
        style: {
            color: `#1e88ff`,
            "text-underline-offset": `3px`
        },
        href: `${a.routeSlug}`
    }, [a.cekSlug ? (W(),
    G(`p`, HS, R(a.breadcrumb), 1)) : ka(``, !0)], 8, VS)])
}
var WS = J(LS, [[`render`, US], [`__scopeId`, `data-v-13818925`]])
  , GS = {
    name: `SolutionTabs`,
    data() {
        return {
            activeTab: `infrastructure`,
            isAnimating: !1,
            tabs: [{
                key: `infrastructure`,
                label: `Infrastructure Solution`,
                title: `Infrastructure Solution`,
                image: `/infra_solution.webm`,
                description: `Optimize your IT foundation with our cutting-edge infrastructure solutions. From cloud computing and data centers to network security and system integration, we ensure a scalable, secure, and high-performance IT environment tailored to your business needs.`
            }, {
                key: `digital`,
                label: `Digital Solution`,
                title: `Digital Solution`,
                image: `/digital_solution.webm`,
                description: `Accelerate your digital transformation through modern applications, automation, and data-driven platforms that enhance efficiency and innovation.`
            }, {
                key: `cross`,
                label: `Cross Industry Solution`,
                title: `Cross Industry Solution`,
                image: `/cross_industry.webm`,
                description: `Delivering adaptable solutions across industries by combining best practices, technology expertise, and scalable architectures.`
            }, {
                key: `operation`,
                label: `IT Operation Service`,
                title: `IT Operation Service`,
                image: `/it_operation.webm`,
                description: `Ensure business continuity with proactive monitoring, maintenance, and optimization of your IT operations.`
            }]
        }
    },
    computed: {
        currentTab() {
            return this.tabs.find(e => e.key === this.activeTab)
        },
        currentTabIndex() {
            return this.tabs.findIndex(e => e.key === this.activeTab)
        }
    },
    methods: {
        animateTransition(e=`next`) {
            if (this.isAnimating)
                return;
            this.isAnimating = !0;
            let t = this.$el.querySelector(`.text`)
              , n = this.$el.querySelector(`.image`)
              , r = this.$el.querySelector(`.content-service`)
              , i = this.$el.querySelector(`.image-service`)
              , a = qh.timeline({
                onComplete: () => {
                    this.isAnimating = !1
                }
            })
              , o = e === `next` ? -50 : 50;
            t && n && a.to([t, n], {
                opacity: 0,
                x: o,
                duration: .3,
                ease: `power2.in`
            }).set([t, n], {
                x: -o
            }).to([t, n], {
                opacity: 1,
                x: 0,
                duration: .4,
                ease: `power2.out`,
                stagger: .1
            }),
            r && i && a.to([r, i], {
                opacity: 0,
                y: 30,
                duration: .3,
                ease: `power2.in`
            }, 0).set([r, i], {
                y: -30
            }).to([r, i], {
                opacity: 1,
                y: 0,
                duration: .4,
                ease: `power2.out`,
                stagger: .08
            })
        },
        nextTab() {
            let e = (this.currentTabIndex + 1) % this.tabs.length;
            this.animateTransition(`next`),
            setTimeout( () => {
                this.activeTab = this.tabs[e].key
            }
            , 300)
        },
        prevTab() {
            let e = (this.currentTabIndex - 1 + this.tabs.length) % this.tabs.length;
            this.animateTransition(`prev`),
            setTimeout( () => {
                this.activeTab = this.tabs[e].key
            }
            , 300)
        }
    }
}
  , KS = {
    class: `solution-section`
}
  , qS = {
    class: `delay-1000 tabs`
}
  , JS = [`onClick`]
  , YS = {
    class: `content delay-1500`
}
  , XS = {
    class: `image`
}
  , ZS = {
    class: `image`
}
  , QS = [`src`]
  , $S = {
    class: `text`
}
  , eC = {
    class: `delay-1500 service-card content-mobile`
}
  , tC = {
    class: `content-service`
}
  , nC = {
    class: `image-service`
}
  , rC = {
    class: `image`
}
  , iC = [`src`];
function aC(e, t, n, r, i, a) {
    let o = Kr(`fade-viewport`);
    return W(),
    G(`div`, null, [K(`section`, KS, [B((W(),
    G(`div`, qS, [(W(!0),
    G(U, null, H(i.tabs, e => (W(),
    G(`button`, {
        key: e.key,
        class: I([`tab`, {
            active: i.activeTab === e.key
        }]),
        onClick: t => i.activeTab = e.key
    }, R(e.label), 11, JS))), 128))])), [[o]]), B((W(),
    G(`div`, YS, [K(`button`, {
        class: `carousel-arrow prev`,
        onClick: t[0] ||= (...e) => a.prevTab && a.prevTab(...e),
        "aria-label": `Previous`
    }, ` ‹ `), K(`div`, XS, [K(`div`, ZS, [(W(!0),
    G(U, null, H(i.tabs, e => (W(),
    G(`video`, {
        key: e.key,
        src: e.image,
        autoplay: ``,
        loop: ``,
        muted: ``,
        playsinline: ``,
        style: F({
            display: i.activeTab === e.key ? `block` : `none`,
            width: `100%`,
            objectFit: `contain`,
            borderRadius: `12px`
        })
    }, null, 12, QS))), 128))])]), K(`div`, $S, [K(`h2`, null, R(a.currentTab.title), 1), K(`p`, null, R(a.currentTab.description), 1)]), K(`button`, {
        class: `carousel-arrow next`,
        onClick: t[1] ||= (...e) => a.nextTab && a.nextTab(...e),
        "aria-label": `Next`
    }, ` › `)])), [[o]])]), B((W(),
    G(`div`, eC, [K(`div`, tC, [K(`h2`, null, R(a.currentTab.title), 1), K(`p`, null, R(a.currentTab.description), 1)]), K(`div`, nC, [K(`div`, rC, [(W(!0),
    G(U, null, H(i.tabs, e => (W(),
    G(`video`, {
        key: e.key,
        src: e.image,
        autoplay: ``,
        loop: ``,
        muted: ``,
        playsinline: ``,
        style: F({
            display: i.activeTab === e.key ? `block` : `none`,
            width: `100%`,
            objectFit: `contain`,
            borderRadius: `12px`
        })
    }, null, 12, iC))), 128))])]), K(`button`, {
        class: `carousel-arrow prev`,
        onClick: t[2] ||= (...e) => a.prevTab && a.prevTab(...e),
        "aria-label": `Previous`
    }, ` ‹ `), K(`button`, {
        class: `carousel-arrow next`,
        onClick: t[3] ||= (...e) => a.nextTab && a.nextTab(...e),
        "aria-label": `Next`
    }, ` › `)])), [[o]])])
}
var oC = {
    name: `HeroSection`,
    components: {
        Navbar: Eu,
        BreadCumb: WS,
        SolutionsTab: J(GS, [[`render`, aC], [`__scopeId`, `data-v-5267d591`]])
    }
}
  , sC = {
    class: `hero`
}
  , cC = {
    class: `absolute-bread-cumb`
}
  , lC = {
    class: `hero-content`
}
  , uC = {
    class: `left delay-300`
};
function dC(e, t, n, r, i, a) {
    let o = V(`navbar`)
      , s = V(`bread-cumb`)
      , c = V(`SolutionsTab`)
      , l = Kr(`fade-viewport`);
    return W(),
    G(`section`, sC, [q(o), t[1] ||= K(`div`, {
        class: `top-gradient`
    }, null, -1), t[2] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, cC, [q(s)]), K(`div`, lC, [B((W(),
    G(`div`, uC, [...t[0] ||= [K(`h1`, null, `Integrated IT Solutions for Business Growth`, -1)]])), [[l]]), q(c)])])
}
var fC = J(oC, [[`render`, dC], [`__scopeId`, `data-v-8f5e8dc2`]])
  , pC = {
    name: `Statement`,
    props: {
        brand: {
            type: String,
            default: `SIMPLE JOURNEY`
        },
        brandIcon: {
            type: String,
            default: `/icon_diamond.png`
        },
        statement: {
            type: String,
            default: `PT Simple Journey is an IT consulting company and a provider of Infrastructure Solutions, Digital Solutions, Cross-Industry Solutions, and IT Operation Services.`
        },
        align: {
            type: String,
            default: `center`,
            validator: e => [`center`, `left`].includes(e)
        }
    },
    computed: {
        alignmentClass() {
            return {
                "align-center": this.align === `center`,
                "align-left": this.align === `left`
            }
        }
    }
}
  , mC = {
    class: `content`
}
  , hC = {
    class: `brand`
}
  , gC = [`src`]
  , _C = {
    class: `brand-text`
};
function vC(e, t, n, r, i, a) {
    return W(),
    G(`section`, {
        class: I(a.alignmentClass)
    }, [K(`div`, mC, [K(`div`, hC, [n.brandIcon ? (W(),
    G(`img`, {
        key: 0,
        src: n.brandIcon,
        alt: `brand icon`,
        class: `brand-icon`
    }, null, 8, gC)) : ka(``, !0), K(`span`, _C, R(n.brand), 1)]), Yr(e.$slots, `default`, {}, void 0, !0)])], 2)
}
var yC = J(pC, [[`render`, vC], [`__scopeId`, `data-v-99055ff4`]])
  , bC = {
    name: `FeatureCard`,
    props: {
        image: {
            type: [String],
            required: !0
        },
        title: {
            type: String,
            required: !0
        },
        description: {
            type: String,
            required: !0
        }
    }
}
  , xC = {
    class: `feature-card`
}
  , SC = {
    class: `feature-header`
}
  , CC = {
    class: `feature-number`
}
  , wC = [`src`]
  , TC = {
    style: {
        display: `flex`,
        "flex-direction": `column`,
        gap: `1rem`
    }
}
  , EC = {
    class: `feature-title`
}
  , DC = {
    class: `feature-description`
};
function OC(e, t, n, r, i, a) {
    return W(),
    G(`div`, xC, [K(`div`, SC, [K(`div`, CC, [K(`img`, {
        src: n.image
    }, null, 8, wC)])]), K(`div`, TC, [K(`h3`, EC, R(n.title), 1), K(`p`, DC, R(n.description), 1)])])
}
var kC = J(bC, [[`render`, OC], [`__scopeId`, `data-v-a2d8efe2`]]);
qh.registerPlugin($);
var AC = {
    name: `VisionMissionSection`,
    components: {
        Statement: zy,
        BrandTitle: yC,
        FeatureCard: kC
    },
    data() {
        return {
            rightFeatures: [{
                image: `/icons/business.png`,
                title: `Tailored to Your Business`,
                description: `We design solutions based on your operational challenges and industry context.`
            }, {
                image: `/icons/efisiensi.png`,
                title: `Integrated End to End Support`,
                description: `Supporting clients from consultation and implementation to maintenance.`
            }, {
                image: `/icons/scalability.png`,
                title: `Reliable & Scalable Technology`,
                description: `We utilize technology architectures that support long-term growth and modernization.`
            }, {
                image: `/icons/security.png`,
                title: `Experienced & Proven Team`,
                description: `Our team brings deep expertise in delivering complex digital solutions for diverse industries.`
            }, {
                image: `/icons/briefcase.png`,
                title: `Driving Measurable Business Outcomes`,
                description: `Focusing on solutions that enhance efficiency, reduce costs, and boost revenue.`
            }]
        }
    },
    mounted() {
        this.animateFeatureCards()
    },
    beforeUnmount() {
        $.getAll().forEach(e => e.kill())
    },
    methods: {
        animateFeatureCards() {
            this.$nextTick( () => {
                let e = this.$el.querySelectorAll(`.feature-card-item`);
                qh.set(e, {
                    opacity: 0,
                    y: 60,
                    scale: .95
                }),
                qh.to(e, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: .6,
                    ease: `power3.out`,
                    stagger: {
                        amount: .8,
                        from: `start`
                    },
                    scrollTrigger: {
                        trigger: `.mission-container`,
                        start: `top 80%`,
                        end: `bottom 20%`,
                        toggleActions: `play none none reverse`
                    }
                }),
                e.forEach(e => {
                    e.addEventListener(`mouseenter`, () => {
                        qh.to(e, {
                            scale: 1.03,
                            duration: .3,
                            ease: `power2.out`
                        })
                    }
                    ),
                    e.addEventListener(`mouseleave`, () => {
                        qh.to(e, {
                            scale: 1,
                            duration: .3,
                            ease: `power2.out`
                        })
                    }
                    )
                }
                )
            }
            )
        }
    }
}
  , jC = {
    class: `vision-mission`
}
  , MC = {
    class: `container`
}
  , NC = {
    class: `vision`
}
  , PC = {
    class: `mission-container`
};
function FC(e, t, n, r, i, a) {
    let o = V(`Statement`)
      , s = V(`FeatureCard`);
    return W(),
    G(`section`, jC, [t[0] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, MC, [K(`div`, NC, [q(o, {
        brand: `WHY THIS IS MATTERS`,
        statement: `The Business Impact Behind Every Technology Decision`,
        align: `left`
    })]), K(`div`, PC, [(W(!0),
    G(U, null, H(i.rightFeatures, (e, t) => (W(),
    ya(s, Na({
        key: e.number,
        ref_for: !0,
        ref: `featureCard${t}`
    }, {
        ref_for: !0
    }, e, {
        class: `feature-card-item`
    }), null, 16))), 128))])])])
}
var IC = {
    name: `Homeview`,
    components: {
        AppFooter: Xl,
        HeroCenterSection: nu,
        Button: cu,
        ChooseUs: DS,
        FeatureCard: gu,
        Hero: fC,
        HeroCtaSection: FS,
        HeroStatement: by,
        ProductCard: jy,
        ProductSection: Ab,
        SectionHeading: zb,
        ServiceText: Gb,
        Statement: zy,
        Impact: J(AC, [[`render`, FC], [`__scopeId`, `data-v-2a3485d1`]])
    },
    data() {
        return {}
    }
};
function LC(e, t, n, r, i, a) {
    let o = V(`Hero`)
      , s = V(`Impact`)
      , c = V(`HeroCtaSection`)
      , l = V(`AppFooter`);
    return W(),
    G(`div`, null, [q(o), q(s), q(c), q(l)])
}
var RC = J(IC, [[`render`, LC]])
  , zC = {
    name: `HeroSection`,
    components: {
        Navbar: Eu,
        BreadCumb: WS,
        ContactButton: cu
    }
}
  , BC = {
    class: `hero`
}
  , VC = {
    style: {
        position: `absolute`,
        "z-index": `999`,
        left: `7%`,
        top: `15%`
    }
}
  , HC = {
    class: `hero-content`
}
  , UC = {
    class: `left delay-300`
}
  , WC = {
    class: `right delay-700`
}
  , GC = {
    class: `style-contact delay-1000`
};
function KC(e, t, n, r, i, a) {
    let o = V(`navbar`)
      , s = V(`bread-cumb`)
      , c = V(`ContactButton`)
      , l = Kr(`fade-viewport`);
    return W(),
    G(`section`, BC, [q(o), t[3] ||= K(`div`, {
        class: `top-gradient`
    }, null, -1), t[4] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, VC, [q(s)]), K(`div`, HC, [B((W(),
    G(`div`, UC, [...t[0] ||= [K(`h1`, null, ` Your trusted partner in digital transformation and technology solutions. `, -1)]])), [[l]]), B((W(),
    G(`div`, WC, [...t[1] ||= [K(`p`, null, ` PT Simple Journey is an IT consulting company and a provider of Infrastructure Solutions, Digital Solutions, Cross-Industry Solutions, and IT Operation Services. We deliver IT solutions to businesses on a global scale by providing IT experts with flexible arrangements to help our clients adapt to the digital world. `, -1)]])), [[l]]), B((W(),
    G(`div`, GC, [q(c, null, {
        default: Mn( () => [...t[2] ||= [Da(`Let's Get Started `, -1)]]),
        _: 1
    })])), [[l]])])])
}
var qC = J(zC, [[`render`, KC], [`__scopeId`, `data-v-0f97a00f`]])
  , JC = {
    name: `VisionMissionSection`,
    components: {
        Statement: zy,
        BrandTitle: yC
    }
}
  , YC = {
    class: `vision-mission`
}
  , XC = {
    class: `container`
}
  , ZC = {
    class: `vision delay-300`
}
  , QC = {
    class: `mission delay-700`
};
function $C(e, t, n, r, i, a) {
    let o = V(`Statement`)
      , s = V(`BrandTitle`)
      , c = Kr(`fade-viewport`);
    return W(),
    G(`section`, YC, [K(`div`, XC, [B((W(),
    G(`div`, ZC, [q(o, {
        brand: `OUR VISION`,
        statement: `To be a trusted technology partner delivering innovative and globally competitive solutions for business advancement in Indonesia.`,
        align: `left`
    })])), [[c]]), B((W(),
    G(`div`, QC, [q(s, {
        brand: `OUR MISSION`
    }), t[0] ||= K(`ul`, {
        style: {
            "margin-top": `2rem`
        }
    }, [K(`li`, null, ` Providing the best digital and technology services that support business transformation `), K(`li`, null, ` Developing an integrated ecosystem that drives efficiency and sustainable growth `), K(`li`, null, ` Leveraging local expertise and industry insights to create relevant solutions for the Indonesian market also `), K(`li`, null, ` Enhancing customer competitiveness through innovation and strategic collaboration. `)], -1)])), [[c]])])])
}
var ew = J(JC, [[`render`, $C], [`__scopeId`, `data-v-71b338d5`]])
  , tw = {
    name: `Statement`,
    props: {
        brand: {
            type: String,
            default: `SIMPLE JOURNEY`
        },
        brandIcon: {
            type: String,
            default: `/icon_diamond.png`
        },
        statement: {
            type: String,
            default: `PT Simple Journey is an IT consulting company and a provider of Infrastructure Solutions, Digital Solutions, Cross-Industry Solutions, and IT Operation Services.`
        },
        align: {
            type: String,
            default: `center`,
            validator: e => [`center`, `left`].includes(e)
        }
    },
    computed: {
        alignmentClass() {
            return {
                "align-center": this.align === `center`,
                "align-left": this.align === `left`
            }
        }
    }
}
  , nw = {
    class: `content`
}
  , rw = {
    class: `brand`
}
  , iw = [`src`]
  , aw = {
    class: `brand-text`
};
function ow(e, t, n, r, i, a) {
    return W(),
    G(`section`, {
        class: I(a.alignmentClass)
    }, [K(`div`, nw, [K(`div`, rw, [n.brandIcon ? (W(),
    G(`img`, {
        key: 0,
        src: n.brandIcon,
        alt: `brand icon`,
        class: `brand-icon`
    }, null, 8, iw)) : ka(``, !0), K(`span`, aw, R(n.brand), 1)]), K(`p`, null, R(n.statement), 1), Yr(e.$slots, `default`, {}, void 0, !0)])], 2)
}
var sw = J(tw, [[`render`, ow], [`__scopeId`, `data-v-f1d331cc`]])
  , cw = {
    name: `WhyUsSection`,
    data() {
        return {
            items: [{
                id: `01`,
                title: `Experienced & Proven Team`,
                description: `Our team brings deep expertise in delivering complex digital solutions for diverse industries.`
            }, {
                id: `02`,
                title: `Tailored to Your Business`,
                description: `We design solutions based on your operational challenges and industry context.`
            }, {
                id: `03`,
                title: `Reliable & Scalable Technology`,
                description: `We utilize technology architectures that support long-term growth and modernization.`
            }, {
                id: `04`,
                title: `Integrated End to End Support`,
                description: `Supporting clients from consultation and implementation to maintenance.`
            }]
        }
    }
}
  , lw = {
    class: `why-us`
}
  , uw = {
    class: `container`
}
  , dw = {
    class: `delay-700 image-wrapper`
}
  , fw = {
    class: `content-wrapper delay-300`
}
  , pw = {
    class: `number`
};
function mw(e, t, n, r, i, a) {
    let o = Kr(`fade-viewport`);
    return W(),
    G(`section`, lw, [K(`div`, uw, [B((W(),
    G(`div`, dw, [...t[0] ||= [K(`video`, {
        autoplay: ``,
        loop: ``,
        muted: ``,
        playsinline: ``,
        class: `why-video`
    }, [K(`source`, {
        src: `/choose_us.webm`,
        type: `video/webm`
    }), Da(` Your browser does not support the video tag. `)], -1)]])), [[o]]), B((W(),
    G(`div`, fw, [(W(!0),
    G(U, null, H(i.items, e => (W(),
    G(`div`, {
        class: `item`,
        key: e.id
    }, [K(`span`, pw, R(e.id), 1), K(`h3`, null, R(e.title), 1), K(`p`, null, R(e.description), 1)]))), 128))])), [[o]])])])
}
var hw = J(cw, [[`render`, mw], [`__scopeId`, `data-v-7c8fc701`]])
  , gw = {
    name: `ITServices`,
    props: {
        infrastructureImage: {
            type: String,
            default: `/infra_solution.png`
        },
        digitalImage: {
            type: String,
            default: `/digital_solution.png`
        },
        itOperationImage: {
            type: String,
            default: `/it_operation.png`
        },
        crossIndustryImage: {
            type: String,
            default: `/cross_industry.png`
        }
    },
    components: {
        BigStatement: sw,
        AboutCard: hw
    }
}
  , _w = {
    class: `services-section`
}
  , vw = {
    class: `container`
}
  , yw = {
    class: `header delay-300`
};
function bw(e, t, n, r, i, a) {
    let o = V(`BigStatement`)
      , s = V(`AboutCard`)
      , c = Kr(`fade-viewport`);
    return W(),
    G(`section`, _w, [K(`div`, vw, [B((W(),
    G(`div`, yw, [q(o, {
        align: `left`,
        brand: `WHY CHOOSE US`,
        statement: `We help organizations navigate technology challenges and optimize their digital operations.`
    })])), [[c]])]), q(s)])
}
var xw = J(gw, [[`render`, bw], [`__scopeId`, `data-v-eb01bea9`]])
  , Sw = {
    name: `Homeview`,
    components: {
        Vision: ew,
        AppFooter: Xl,
        HeroCenterSection: nu,
        Button: cu,
        ChooseUs: DS,
        FeatureCard: gu,
        Hero: qC,
        HeroCtaSection: FS,
        HeroStatement: by,
        ProductCard: jy,
        ProductSection: Ab,
        SectionHeading: zb,
        ServiceText: Gb,
        Statement: zy,
        WhyChoose: xw
    },
    data() {
        return {}
    }
};
function Cw(e, t, n, r, i, a) {
    let o = V(`Hero`)
      , s = V(`Vision`)
      , c = V(`WhyChoose`)
      , l = V(`HeroCtaSection`)
      , u = V(`AppFooter`);
    return W(),
    G(`div`, null, [q(o), q(s), q(c), q(l), q(u)])
}
var ww = J(Sw, [[`render`, Cw]])
  , Tw = {
    name: `HeroSection`,
    components: {
        Navbar: Eu,
        BreadCumb: WS
    }
}
  , Ew = {
    class: `hero`
}
  , Dw = {
    style: {
        position: `absolute`,
        "z-index": `999`,
        left: `7%`,
        top: `15%`
    }
}
  , Ow = {
    class: `hero-content`
}
  , kw = {
    class: `left delay-300`
}
  , Aw = {
    class: `right delay-700`
};
function jw(e, t, n, r, i, a) {
    let o = V(`navbar`)
      , s = V(`bread-cumb`)
      , c = Kr(`fade-viewport`);
    return W(),
    G(`section`, Ew, [q(o), t[2] ||= K(`div`, {
        class: `top-gradient`
    }, null, -1), t[3] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, Dw, [q(s)]), K(`div`, Ow, [B((W(),
    G(`div`, kw, [...t[0] ||= [K(`h1`, null, `Technology Products Built for Enterprise Needs`, -1)]])), [[c]]), B((W(),
    G(`div`, Aw, [...t[1] ||= [K(`p`, null, ` Our products are designed to address real operational challenges across industries, ensuring reliability, scalability, and seamless integration with existing systems. `, -1)]])), [[c]])])])
}
var Mw = J(Tw, [[`render`, jw], [`__scopeId`, `data-v-2c71e6e1`]])
  , Nw = {
    name: `NoDataFound`
}
  , Pw = {
    class: `no-data`
};
function Fw(e, t, n, r, i, a) {
    return W(),
    G(`div`, Pw, [...t[0] ||= [K(`div`, {
        class: `show`
    }, [K(`div`, {
        class: `icon`
    }, `🔍`), K(`h3`, {
        class: `title`
    }, `No products found`), K(`p`, {
        class: `description`
    }, [Da(` We couldn’t find any products matching your search. `), K(`br`), Da(` Try using different keywords. `)])], -1)]])
}
var Iw = J(Nw, [[`render`, Fw], [`__scopeId`, `data-v-e24097d8`]])
  , Lw = {
    name: `Spinner`
};
function Rw(e, t, n, r, i, a) {
    return W(),
    ya(er, {
        to: `body`
    }, [t[0] ||= K(`div`, {
        class: `spinner-overlay`
    }, [K(`div`, {
        class: `spinner`
    })], -1)])
}
var zw = {
    name: `ProductsSection`,
    components: {
        ProductCard: jy,
        Statement: zy,
        Empty: Iw,
        Spinner: J(Lw, [[`render`, Rw], [`__scopeId`, `data-v-121cab47`]])
    },
    props: {
        subtitle: String,
        heading: String,
        description: String,
        products: {
            type: Array,
            required: !0
        },
        showMore: {
            type: Boolean,
            default: !0
        },
        modelValue: {
            type: [String, Number],
            default: ``
        },
        options: {
            type: Array,
            default: () => [{
                label: `All Categories`,
                value: ``
            }, {
                label: `Software`,
                value: `Software`
            }, {
                label: `Hardware`,
                value: `Hardware`
            }]
        },
        placeholder: {
            type: String,
            default: `Category`
        }
    },
    created() {
        this.productStore = bb()
    },
    data() {
        return {
            isOpen: !1,
            selectedLabel: `All Categories`,
            selectedValue: ``,
            windowWidth: window.innerWidth,
            isShow: !1,
            isLoading: !1,
            searchTimeout: null
        }
    },
    computed: {
        sectionMinHeight() {
            if (this.isLoading)
                return `50vh`;
            if (!this.products || this.products.length === 0)
                return `0vh`;
            let e = this.windowWidth;
            return e <= 360 ? `${this.products.length * 47}vh` : e <= 375 ? `${this.products.length * 45.5}vh` : e <= 390 || e <= 428 ? `${this.products.length * 45}vh` : e < 479 ? `${this.products.length * 44}vh` : e <= 768 ? `${this.products.length * 41}vh` : `${Math.ceil(this.products.length / 2) * 45}vh`
        }
    },
    beforeUnmount() {
        document.removeEventListener(`click`, this.handleClickOutside),
        window.removeEventListener(`resize`, this.onResize)
    },
    methods: {
        onResize() {
            this.$forceUpdate()
        },
        selectCategory(e) {
            this.selectedLabel = e.label,
            this.selectedValue = e.value,
            this.isOpen = !1,
            this.isLoading = !0,
            setTimeout( () => {
                this.productStore.getCategory(e.value),
                this.isLoading = !1
            }
            , 500)
        },
        onSearch(e) {
            let t = e.target.value;
            this.searchTimeout && clearTimeout(this.searchTimeout),
            this.loadingTimeout && clearTimeout(this.loadingTimeout),
            this.loadingTimeout = setTimeout( () => {
                this.isLoading = !0
            }
            , 500),
            this.searchTimeout = setTimeout( () => {
                this.productStore.getSearch(t),
                this.isLoading = !1
            }
            , 800)
        },
        toggle() {
            this.isOpen = !this.isOpen
        },
        handleClickOutside(e) {
            this.$refs.wrapper.contains(e.target) || (this.isOpen = !1)
        }
    },
    mounted() {
        window.addEventListener(`resize`, this.onResize),
        document.addEventListener(`click`, this.handleClickOutside),
        setTimeout( () => {
            this.isShow = !0
        }
        , 1200)
    },
    beforeUnmount() {
        document.removeEventListener(`click`, this.handleClickOutside)
    }
}
  , Bw = {
    class: `container-search`
}
  , Vw = {
    class: `search-wrapper`
}
  , Hw = {
    class: `select-wrapper`,
    ref: `wrapper`
}
  , Uw = {
    class: `label`
}
  , Ww = {
    key: 0,
    class: `dropdown`
}
  , Gw = [`onClick`]
  , Kw = {
    key: 1,
    class: `cards`
}
  , qw = [`href`]
  , Jw = {
    key: 2,
    style: {
        display: `flex`,
        "justify-content": `center`,
        "align-items": `center`,
        width: `100%`,
        "margin-top": `5rem`
    }
};
function Yw(e, t, n, r, i, a) {
    let o = V(`Spinner`)
      , s = V(`ProductCard`)
      , c = V(`Empty`);
    return W(),
    G(`section`, {
        class: `section`,
        style: F({
            minHeight: a.sectionMinHeight
        })
    }, [K(`div`, {
        class: I([{
            show: i.isShow
        }, `product-style`])
    }, [K(`div`, Bw, [K(`div`, Vw, [K(`input`, {
        type: `text`,
        class: `search-input`,
        placeholder: `Search products...`,
        onInput: t[0] ||= (...e) => a.onSearch && a.onSearch(...e)
    }, null, 32)]), K(`div`, Hw, [K(`button`, {
        class: `select-trigger`,
        onClick: t[1] ||= (...e) => a.toggle && a.toggle(...e)
    }, [K(`span`, Uw, R(i.selectedLabel), 1), (W(),
    G(`svg`, {
        class: I([`icon`, {
            open: i.isOpen
        }]),
        xmlns: `http://www.w3.org/2000/svg`,
        width: `18`,
        height: `18`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        "stroke-width": `2`
    }, [...t[2] ||= [K(`polyline`, {
        points: `6 9 12 15 18 9`
    }, null, -1)]], 2))]), q(bo, {
        name: `fade-slide`
    }, {
        default: Mn( () => [i.isOpen ? (W(),
        G(`ul`, Ww, [(W(!0),
        G(U, null, H(n.options, e => (W(),
        G(`li`, {
            key: e.value,
            onClick: t => a.selectCategory(e),
            class: I({
                active: e.label === i.selectedLabel
            })
        }, R(e.label), 11, Gw))), 128))])) : ka(``, !0)]),
        _: 1
    })], 512)]), i.isLoading ? (W(),
    ya(o, {
        key: 0
    })) : ka(``, !0), n.products.length ? (W(),
    G(`div`, Kw, [(W(!0),
    G(U, null, H(n.products, (e, t) => (W(),
    G(`a`, {
        key: t,
        href: `/products/${e.name}`,
        class: `card-link`
    }, [q(s, {
        badge: e.badge,
        image: e.image,
        title: e.title
    }, null, 8, [`badge`, `image`, `title`])], 8, qw))), 128))])) : (W(),
    G(`div`, Jw, [q(c)]))], 2)], 4)
}
var Xw = {
    name: `Homeview`,
    components: {
        ProductList: J(zw, [[`render`, Yw], [`__scopeId`, `data-v-e2b51a45`]]),
        AppFooter: Xl,
        HeroCenterSection: nu,
        Button: cu,
        ChooseUs: DS,
        FeatureCard: gu,
        Hero: Mw,
        HeroCtaSection: FS,
        HeroStatement: by,
        ProductCard: jy,
        ProductSection: Ab,
        SectionHeading: zb,
        ServiceText: Gb,
        Statement: zy,
        WhyChoose: xw
    },
    created() {
        this.productState = bb()
    },
    computed: {
        products() {
            return this.productState.products
        }
    },
    mounted() {
        this.productState.loadProducts()
    }
};
function Zw(e, t, n, r, i, a) {
    let o = V(`Hero`)
      , s = V(`ProductList`)
      , c = V(`HeroCtaSection`)
      , l = V(`AppFooter`);
    return W(),
    G(`div`, null, [q(o), q(s, {
        products: a.products
    }, null, 8, [`products`]), q(c), q(l)])
}
var Qw = J(Xw, [[`render`, Zw]])
  , $w = {
    name: `FeatureCard`,
    props: {
        image: {
            type: [String],
            required: !0
        },
        title: {
            type: String,
            required: !0
        },
        description: {
            type: String,
            required: !0
        }
    }
}
  , eT = {
    class: `feature-card`
}
  , tT = {
    class: `feature-header`
}
  , nT = {
    class: `feature-number`
}
  , rT = [`src`]
  , iT = {
    style: {
        display: `flex`,
        "flex-direction": `column`,
        gap: `0.1rem`
    }
}
  , aT = {
    class: `feature-description`
}
  , oT = {
    class: `feature-title`
};
function sT(e, t, n, r, i, a) {
    return W(),
    G(`div`, eT, [K(`div`, tT, [K(`div`, nT, [K(`img`, {
        src: n.image
    }, null, 8, rT)])]), K(`div`, iT, [K(`p`, aT, R(n.title), 1), K(`h3`, oT, R(n.description), 1)])])
}
var cT = J($w, [[`render`, sT], [`__scopeId`, `data-v-92dc3e80`]])
  , lT = {
    name: `ContactForm`,
    data() {
        return {
            form: {
                name: ``,
                email: ``,
                phone: ``,
                message: ``
            },
            showModal: !1
        }
    },
    methods: {
        handleSubmit() {
            this.showModal = !0
        },
        closeModal() {
            this.showModal = !1
        }
    }
}
  , uT = {
    class: `contact-section`
}
  , dT = {
    class: `form-group full`
}
  , fT = {
    class: `row`
}
  , pT = {
    class: `form-group`
}
  , mT = {
    class: `form-group`
}
  , hT = {
    class: `form-group full`
};
function gT(e, t, n, r, i, a) {
    return W(),
    G(`section`, uT, [K(`form`, {
        class: `contact-form`,
        onSubmit: t[4] ||= Ss( (...e) => a.handleSubmit && a.handleSubmit(...e), [`prevent`])
    }, [K(`div`, dT, [B(K(`input`, {
        type: `text`,
        "onUpdate:modelValue": t[0] ||= e => i.form.name = e,
        placeholder: `Name`,
        required: ``
    }, null, 512), [[ys, i.form.name]])]), K(`div`, fT, [K(`div`, pT, [B(K(`input`, {
        type: `email`,
        "onUpdate:modelValue": t[1] ||= e => i.form.email = e,
        placeholder: `Email`,
        required: ``
    }, null, 512), [[ys, i.form.email]])]), K(`div`, mT, [B(K(`input`, {
        type: `tel`,
        "onUpdate:modelValue": t[2] ||= e => i.form.phone = e,
        placeholder: `Phone`,
        minlength: `8`,
        maxlength: `15`,
        required: ``,
        pattern: `[0-9]+`
    }, null, 512), [[ys, i.form.phone]])])]), K(`div`, hT, [B(K(`textarea`, {
        style: {
            "font-style": `normal`,
            "font-family": `'Noto Sans', Tahoma, Geneva, Verdana, sans-serif`
        },
        "onUpdate:modelValue": t[3] ||= e => i.form.message = e,
        placeholder: `Message`,
        rows: `3`,
        required: ``
    }, null, 512), [[ys, i.form.message]])]), t[9] ||= K(`button`, {
        type: `submit`,
        class: `submit-btn`
    }, `Submit`, -1)], 32), q(bo, {
        name: `modal`
    }, {
        default: Mn( () => [i.showModal ? (W(),
        G(`div`, {
            key: 0,
            class: `modal-overlay`,
            onClick: t[8] ||= (...e) => a.closeModal && a.closeModal(...e)
        }, [K(`div`, {
            class: `modal-content`,
            onClick: t[7] ||= Ss( () => {}
            , [`stop`])
        }, [K(`button`, {
            class: `close-btn`,
            onClick: t[5] ||= (...e) => a.closeModal && a.closeModal(...e)
        }, `✕`), t[10] ||= K(`div`, {
            class: `modal-icon`
        }, `🚀`, -1), t[11] ||= K(`h2`, null, `Under Development`, -1), t[12] ||= K(`p`, null, ` This feature is currently under development. We'll be back soon! `, -1), K(`button`, {
            class: `modal-btn`,
            onClick: t[6] ||= (...e) => a.closeModal && a.closeModal(...e)
        }, `Got It`)])])) : ka(``, !0)]),
        _: 1
    })])
}
var _T = {
    name: `HeroSection`,
    components: {
        Navbar: Eu,
        BreadCumb: WS,
        BrandTitle: yC,
        ContactCard: cT,
        ContactForm: J(lT, [[`render`, gT], [`__scopeId`, `data-v-48d292d6`]])
    },
    mounted() {
        window.addEventListener(`resize`, this.onResize)
    },
    computed: {
        sectionMinHeight() {
            if (!this.rightFeatures || this.rightFeatures.length === 0)
                return `0vh`;
            let e = this.windowWidth;
            return e <= 360 ? `${this.rightFeatures.length * 52}vh` : e <= 375 || e <= 390 ? `${this.rightFeatures.length * 50}vh` : e < 479 ? `${this.rightFeatures.length * 47}vh` : e <= 768 ? `${this.rightFeatures.length * 41}vh` : `${Math.ceil(this.rightFeatures.length / 2) * 47}vh`
        }
    },
    data() {
        return {
            windowWidth: window.innerWidth,
            rightFeatures: [{
                image: `/icons/mail.png`,
                title: `Email`,
                description: `info@simplejourney.co.id`
            }, {
                image: `/icons/phone.png`,
                title: `Phone`,
                description: `081318982939`
            }, {
                image: `/icons/location.png`,
                title: `Address`,
                description: `Ruko Cendana, Jl. Benteng Betawi No.37, RT.004/RW.015, Tanah Tinggi, Kec. Tangerang, Kota Tangerang, Banten 15119`
            }]
        }
    },
    methods: {
        onResize() {
            this.$forceUpdate()
        }
    }
}
  , vT = {
    class: `breadcumb-style`
}
  , yT = {
    class: `hero-content`
}
  , bT = {
    class: `left delay-300`
}
  , xT = {
    class: `right delay-700`
}
  , ST = {
    class: `delay-1000`
}
  , CT = {
    class: `set-flex`
}
  , wT = {
    style: {
        display: `flex`,
        flex: `1`,
        "flex-direction": `column`,
        gap: `1rem`
    }
}
  , TT = {
    style: {
        flex: `1`
    }
};
function ET(e, t, n, r, i, a) {
    let o = V(`navbar`)
      , s = V(`bread-cumb`)
      , c = V(`BrandTitle`)
      , l = V(`ContactCard`)
      , u = V(`ContactForm`)
      , d = Kr(`fade-viewport`);
    return W(),
    G(`section`, {
        class: `hero`,
        style: F({
            minHeight: a.sectionMinHeight
        })
    }, [t[2] ||= K(`video`, {
        class: `hero-video`,
        autoplay: ``,
        loop: ``,
        muted: ``,
        playsinline: ``
    }, [K(`source`, {
        src: `/contact_hero.webm`,
        type: `video/webm`
    }), Da(` Your browser does not support the video tag. `)], -1), q(o), t[3] ||= K(`div`, {
        class: `top-gradient`
    }, null, -1), t[4] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, vT, [q(s)]), K(`div`, yT, [B((W(),
    G(`div`, bT, [...t[0] ||= [K(`h1`, null, `Let’s Discuss Your Digital Transformation Needs`, -1)]])), [[d]]), B((W(),
    G(`div`, xT, [...t[1] ||= [K(`p`, null, ` Connect with our team to explore tailored technology solutions that align with your business objectives. `, -1)]])), [[d]]), B((W(),
    G(`div`, ST, [q(c, {
        style: {
            "margin-top": `3rem`,
            "margin-left": `14px`
        },
        align: `left`,
        brand: `OUR OFFICE`
    }), K(`div`, CT, [K(`div`, wT, [(W(!0),
    G(U, null, H(i.rightFeatures, e => (W(),
    ya(l, Na({
        key: e.number
    }, {
        ref_for: !0
    }, e), null, 16))), 128))]), K(`div`, TT, [q(u)])])])), [[d]])])], 4)
}
var DT = {
    name: `Homeview`,
    components: {
        Vision: ew,
        AppFooter: Xl,
        HeroCenterSection: nu,
        Button: cu,
        ChooseUs: DS,
        FeatureCard: gu,
        Hero: J(_T, [[`render`, ET], [`__scopeId`, `data-v-378d72e8`]]),
        HeroCtaSection: FS,
        HeroStatement: by,
        ProductCard: jy,
        ProductSection: Ab,
        SectionHeading: zb,
        ServiceText: Gb,
        Statement: zy,
        WhyChoose: xw
    },
    data() {
        return {}
    }
};
function OT(e, t, n, r, i, a) {
    let o = V(`Hero`)
      , s = V(`AppFooter`);
    return W(),
    G(`div`, null, [q(o), q(s)])
}
var kT = J(DT, [[`render`, OT]])
  , AT = {
    name: `NotFound`,
    methods: {
        goHome() {
            this.$router.push(`/`)
        }
    }
}
  , jT = {
    class: `not-found`
}
  , MT = {
    class: `content`
};
function NT(e, t, n, r, i, a) {
    return W(),
    G(`div`, jT, [t[5] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, MT, [t[2] ||= K(`span`, {
        class: `code`
    }, `404`, -1), t[3] ||= K(`h2`, {
        class: `title`
    }, `Page Not Found`, -1), t[4] ||= K(`p`, {
        class: `desc`
    }, ` Oops! The page you are looking for doesn’t exist or has been moved. `, -1), K(`button`, {
        class: `home-btn`,
        onClick: t[0] ||= (...e) => a.goHome && a.goHome(...e)
    }, [...t[1] ||= [Da(` Back to Home `, -1), K(`span`, {
        class: `arrow`
    }, `→`, -1)]])])])
}
var PT = J(AT, [[`render`, NT], [`__scopeId`, `data-v-ead6eae0`]])
  , FT = {
    name: `HeroSection`,
    components: {
        Navbar: Eu,
        BreadCumb: WS,
        Badge: wy
    },
    props: {
        data: {
            type: Object
        }
    },
    computed: {
        getTitle() {
            let e = this.$route.params.slug;
            return e ? e.split(`-`).map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(` `) : this.$route.name || ``
        }
    }
}
  , IT = {
    class: `hero`
}
  , LT = {
    style: {
        position: `absolute`,
        "z-index": `999`,
        left: `7%`,
        top: `15%`
    }
}
  , RT = {
    class: `hero-content`
}
  , zT = {
    class: `left`
};
function BT(e, t, n, r, i, a) {
    let o = V(`navbar`)
      , s = V(`bread-cumb`)
      , c = V(`Badge`);
    return W(),
    G(`section`, IT, [q(o), t[0] ||= K(`div`, {
        class: `top-gradient`
    }, null, -1), t[1] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, LT, [q(s)]), K(`div`, RT, [K(`div`, zT, [K(`h1`, null, R(a.getTitle), 1), q(c, {
        badge: n.data[0]?.badge
    }, null, 8, [`badge`])])])])
}
var VT = J(FT, [[`render`, BT], [`__scopeId`, `data-v-11d9394e`]])
  , HT = {
    name: `ProductCard`,
    props: {
        badge: {
            type: String,
            default: `Software`
        },
        image: {
            type: String,
            default: `/seamless_passenger.png`
        },
        effect: {
            type: Boolean,
            default: !1
        }
    },
    components: {
        Badge: wy
    }
}
  , UT = {
    class: `image-wrapper`
}
  , WT = [`src`];
function GT(e, t, n, r, i, a) {
    return W(),
    G(`div`, {
        class: I([n.effect ? `product-scale` : `main-product-scale`, `product-card`])
    }, [K(`div`, UT, [K(`img`, {
        style: {
            "border-radius": `12px`
        },
        src: n.image
    }, null, 8, WT)])], 2)
}
var KT = J(HT, [[`render`, GT], [`__scopeId`, `data-v-8ac83b47`]])
  , qT = {
    name: `HeroCtaSection`,
    components: {
        ContactButton: cu
    },
    props: {
        title: {
            type: String,
            default: `Ready to Discuss This Solution?`
        },
        subtitle: {
            type: String,
            default: `Discuss your business technology needs with the SimpleJourney team.`
        },
        backgroundImage: {
            type: String,
            default: ``
        },
        buttonText: {
            type: String,
            default: `Let's Get Started`
        }
    },
    computed: {
        backgroundStyle() {
            return {
                backgroundImage: `url(${this.backgroundImage})`
            }
        }
    },
    methods: {
        onClick() {
            this.$emit(`cta-click`)
        }
    }
}
  , JT = {
    class: `content`
}
  , YT = {
    class: `text`
};
function XT(e, t, n, r, i, a) {
    let o = V(`ContactButton`);
    return W(),
    G(`div`, null, [K(`section`, {
        class: `hero`,
        style: F(a.backgroundStyle)
    }, [t[0] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, JT, [K(`div`, YT, [K(`h1`, null, R(n.title), 1), K(`p`, null, R(n.subtitle), 1), q(o, {
        onClick: a.onClick
    }, {
        default: Mn( () => [Da(R(n.buttonText), 1)]),
        _: 1
    }, 8, [`onClick`])])])], 4)])
}
var ZT = J(qT, [[`render`, XT], [`__scopeId`, `data-v-a68b62cd`]])
  , QT = {
    name: `SeamlessPassenger`,
    props: {
        product: {
            type: Array
        }
    },
    data() {
        return {}
    },
    methods: {
        toggle(e) {
            this.product[0].sections[e].open = !this.product[0].sections[e].open
        }
    }
}
  , $T = {
    class: `container`
}
  , eE = [`onClick`]
  , tE = {
    class: `icon`
}
  , nE = {
    class: `section-body`
}
  , rE = {
    key: 0
}
  , iE = {
    key: 1,
    class: `show`
}
  , aE = {
    class: `label`
}
  , oE = {
    class: `value`
}
  , sE = {
    key: 2
};
function cE(e, t, n, r, i, a) {
    return W(),
    G(`div`, $T, [(W(!0),
    G(U, null, H(n.product[0]?.sections, (e, t) => (W(),
    G(`div`, {
        key: t,
        class: `section`
    }, [K(`div`, {
        class: `section-header`,
        onClick: e => a.toggle(t)
    }, [K(`h3`, null, R(e.title), 1), K(`span`, tE, R(e.open ? `−` : `+`), 1)], 8, eE), q(bo, {
        name: `collapse`
    }, {
        default: Mn( () => [B(K(`div`, nE, [e.type === `text` ? (W(),
        G(`div`, rE, [K(`p`, null, R(e.content), 1)])) : e.type === `spec` ? (W(),
        G(`div`, iE, [(W(!0),
        G(U, null, H(e.content, (e, t) => (W(),
        G(`div`, {
            key: t,
            class: `spec-row`
        }, [K(`span`, aE, R(e.label), 1), K(`span`, oE, R(e.value), 1)]))), 128))])) : e.type === `list` ? (W(),
        G(`ul`, sE, [(W(!0),
        G(U, null, H(e.content, (e, t) => (W(),
        G(`li`, {
            key: t
        }, R(e), 1))), 128))])) : ka(``, !0)], 512), [[Ro, e.open]])]),
        _: 2
    }, 1024)]))), 128))])
}
var lE = {
    name: `ProductsSection`,
    components: {
        Collapsed: J(QT, [[`render`, cE], [`__scopeId`, `data-v-864d961a`]]),
        ImageView: KT,
        Statement: zy,
        CardContact: ZT,
        PageNavigation: Yb
    },
    props: {
        subtitle: String,
        heading: String,
        description: String,
        products: {
            type: Array,
            required: !0
        },
        showMore: {
            type: Boolean,
            default: !0
        },
        modelValue: {
            type: [String, Number],
            default: ``
        },
        options: {
            type: Array,
            default: () => [{
                label: `Category`,
                value: ``
            }, {
                label: `UI Design`,
                value: `ui`
            }, {
                label: `Development`,
                value: `dev`
            }, {
                label: `Marketing`,
                value: `marketing`
            }]
        },
        placeholder: {
            type: String,
            default: `Category`
        }
    },
    created() {
        this.productState = bb()
    },
    data() {
        return {
            isOpen: !1,
            windowWidth: window.innerWidth,
            currentIndex: 0
        }
    },
    computed: {
        sectionMinHeight() {
            if (!this.products || this.products.length === 0)
                return `0vh`;
            let e = this.windowWidth;
            return e <= 360 || e <= 375 ? `${this.products.length * 160}vh` : e <= 390 ? `${this.products.length * 150}vh` : e <= 428 ? `${this.products.length * 130}vh` : e <= 479 ? `${this.products.length * 120}vh` : e <= 768 ? `${this.products.length * 100}vh` : `${Math.ceil(this.products.length / 2) * 100}vh`
        },
        selectedLabel() {
            let e = this.options.find(e => e.value === this.modelValue);
            return e ? e.label : this.placeholder
        }
    },
    methods: {
        animateImageChange() {
            let e = this.$refs.cardLinks?.[0];
            e && qh.to(e, {
                x: -100,
                opacity: 0,
                duration: .3,
                ease: `power2.in`,
                onComplete: () => {
                    qh.set(e, {
                        x: 100
                    }),
                    qh.to(e, {
                        x: 0,
                        opacity: 1,
                        duration: .4,
                        ease: `power2.out`
                    })
                }
            })
        },
        next() {
            let e = this.products[0]?.list_images;
            !e || e.length === 0 || (this.currentIndex = (this.currentIndex + 1) % e.length,
            this.productState.productDetail[0].image = e[this.currentIndex].picture,
            this.animateImageChange())
        },
        prev() {
            let e = this.products[0]?.list_images;
            !e || e.length === 0 || (this.currentIndex = (this.currentIndex - 1 + e.length) % e.length,
            this.productState.productDetail[0].image = e[this.currentIndex].picture,
            this.animateImageChange())
        },
        handleSelectImage(e) {
            let t = this.products[0]?.list_images;
            !t || !t[e] || (this.currentIndex = e,
            this.productState.productDetail[0].image = t[e].picture,
            this.animateImageChange())
        },
        toggle() {
            this.isOpen = !this.isOpen
        },
        onResize() {
            this.$forceUpdate()
        },
        select(e) {
            this.$emit(`update:modelValue`, e.value),
            this.isOpen = !1
        }
    },
    mounted() {
        window.addEventListener(`resize`, this.onResize),
        document.addEventListener(`click`, this.handleClickOutside);
        let e = this.productState.productDetail[0]?.image
          , t = this.products[0]?.list_images;
        if (e && t) {
            let n = t.findIndex(t => t.picture === e);
            n !== -1 && (this.currentIndex = n)
        }
        this.$refs.cardLinks?.[0] && qh.from(this.$refs.cardLinks[0], {
            opacity: 0,
            y: 20,
            duration: .6,
            ease: `power2.out`
        })
    },
    beforeUnmount() {
        document.removeEventListener(`click`, this.handleClickOutside)
    }
}
  , uE = {
    class: `product-style`
}
  , dE = {
    class: `cards`
}
  , fE = {
    class: `card-left`
}
  , pE = {
    class: `mobile-off grid-container`
}
  , mE = {
    class: `mobile-on`
}
  , hE = {
    style: {
        color: `gray`,
        "border-radius": `10px`
    }
}
  , gE = {
    class: `card-right`
};
function _E(e, t, n, r, i, a) {
    let o = V(`ImageView`)
      , s = V(`PageNavigation`)
      , c = V(`Collapsed`)
      , l = V(`CardContact`);
    return W(),
    G(`section`, {
        class: `section`,
        style: F({
            minHeight: a.sectionMinHeight
        })
    }, [K(`div`, uE, [K(`div`, dE, [K(`div`, fE, [(W(!0),
    G(U, null, H(n.products, (e, t) => (W(),
    G(`div`, {
        key: t,
        class: `card-link`,
        ref_for: !0,
        ref: `cardLinks`
    }, [q(o, {
        badge: e.badge,
        image: e.image,
        title: e.title
    }, null, 8, [`badge`, `image`, `title`])]))), 128)), K(`div`, pE, [(W(!0),
    G(U, null, H(n.products[0]?.list_images, (e, t) => (W(),
    ya(o, {
        effect: !0,
        key: t,
        image: e.picture,
        onClick: e => a.handleSelectImage(t),
        style: {
            cursor: `pointer`
        }
    }, null, 8, [`image`, `onClick`]))), 128))]), K(`div`, mE, [q(s, {
        onPrev: a.prev,
        onNext: a.next
    }, null, 8, [`onPrev`, `onNext`]), K(`div`, hE, R(i.currentIndex + 1) + ` / ` + R(n.products[0]?.list_images.length), 1)]), q(c, {
        product: n.products
    }, null, 8, [`product`])]), K(`div`, gE, [q(l)])])])], 4)
}
var vE = J(lE, [[`render`, _E], [`__scopeId`, `data-v-58d8d53e`]])
  , yE = {
    name: `ProductsSection`,
    components: {
        ProductCard: jy,
        Statement: zy
    },
    props: {
        subtitle: String,
        heading: String,
        description: String,
        products: {
            type: Array
        },
        showMore: {
            type: Boolean,
            default: !0
        }
    },
    created() {
        this.productState = bb()
    },
    methods: {
        handleViewMore() {
            this.productState.getTwoData(!this.productState.showAll)
        }
    }
}
  , bE = {
    class: `products-section`
}
  , xE = {
    class: `header`
}
  , SE = {
    class: `right`
}
  , CE = {
    class: `cards`
}
  , wE = [`href`];
function TE(e, t, n, r, i, a) {
    let o = V(`ProductCard`);
    return W(),
    G(`section`, bE, [K(`div`, xE, [t[1] ||= K(`div`, {
        class: `left`
    }, [K(`h1`, null, `Other Products`)], -1), K(`div`, SE, [n.showMore ? (W(),
    G(`p`, {
        key: 0,
        onClick: t[0] ||= (...e) => a.handleViewMore && a.handleViewMore(...e),
        class: `view-more`
    }, ` View ` + R(n.products.length <= 2 ? `More` : `Less`) + ` → `, 1)) : ka(``, !0)])]), K(`div`, CE, [(W(!0),
    G(U, null, H(n.products, (e, t) => (W(),
    G(`a`, {
        key: t,
        href: `/products/${e.name}`,
        class: `card-link`
    }, [q(o, {
        badge: e.badge,
        image: e.image,
        title: e.title
    }, null, 8, [`badge`, `image`, `title`])], 8, wE))), 128))])])
}
var EE = {
    name: `Homeview`,
    components: {
        ProductDetail: vE,
        AppFooter: Xl,
        HeroCenterSection: nu,
        Button: cu,
        ChooseUs: DS,
        FeatureCard: gu,
        Hero: VT,
        HeroStatement: by,
        ProductCard: jy,
        ProductSection: J(yE, [[`render`, TE], [`__scopeId`, `data-v-a5a6ba22`]]),
        SectionHeading: zb,
        ServiceText: Gb,
        Statement: zy,
        WhyChoose: xw
    },
    created() {
        this.productState = bb()
    },
    computed: {
        othersProducts() {
            return this.productState.products
        },
        products() {
            return this.productState.productDetail
        }
    },
    mounted() {
        let e = this.$route.params.slug;
        this.productState.getByName(e),
        this.productState.getTwoData(!this.productState.showAll)
    },
    data() {
        return {}
    }
};
function DE(e, t, n, r, i, a) {
    let o = V(`Hero`)
      , s = V(`ProductDetail`)
      , c = V(`ProductSection`)
      , l = V(`AppFooter`);
    return W(),
    G(`div`, null, [q(o, {
        data: a.products
    }, null, 8, [`data`]), q(s, {
        products: a.products
    }, null, 8, [`products`]), q(c, {
        description: `We deliver enterprise-grade solutions designed to support your digital transformation journey.`,
        products: a.othersProducts,
        showMore: !0
    }, null, 8, [`products`]), q(l)])
}
var OE = J(EE, [[`render`, DE]])
  , kE = {
    name: `NotFound`,
    methods: {
        handleClose() {
            window.location.href = `/`
        }
    }
}
  , AE = {
    class: `not-found`
}
  , jE = {
    class: `content`
};
function ME(e, t, n, r, i, a) {
    return W(),
    G(`div`, AE, [t[5] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, jE, [t[2] ||= K(`span`, {
        class: `code`
    }, `Oops!`, -1), t[3] ||= K(`h2`, {
        class: `title`
    }, `Under Development`, -1), t[4] ||= K(`p`, {
        class: `desc`
    }, `We're Sorry, The Form Under Development`, -1), K(`button`, {
        class: `home-btn`,
        onClick: t[0] ||= (...e) => a.handleClose && a.handleClose(...e)
    }, [...t[1] ||= [Da(` Back to Home `, -1), K(`span`, {
        class: `arrow`
    }, `→`, -1)]])])])
}
var NE = J(kE, [[`render`, ME], [`__scopeId`, `data-v-87c8cdf0`]])
  , PE = {
    name: `PrivacyPolicyView`,
    components: {
        Navbar: Eu,
        BreadCumb: WS,
        AppFooter: Xl
    },
    data() {
        return {
            currentLang: `en`
        }
    },
    computed: {
        currentSections() {
            return this.currentLang === `en` ? [{
                id: `introduction`,
                title: `1. Introduction`
            }, {
                id: `information-collection`,
                title: `2. Information We Collect`
            }, {
                id: `how-we-use`,
                title: `3. How We Use`
            }, {
                id: `data-security`,
                title: `4. Data Security`
            }, {
                id: `device-permissions`,
                title: `5. Device Permissions`
            }, {
                id: `third-party`,
                title: `6. Third-Party Services`
            }, {
                id: `contact-us`,
                title: `7. Contact Us`
            }] : [{
                id: `introduction`,
                title: `1. Pendahuluan`
            }, {
                id: `information-collection`,
                title: `2. Informasi Kumpul`
            }, {
                id: `how-we-use`,
                title: `3. Cara Penggunaan`
            }, {
                id: `data-security`,
                title: `4. Keamanan Data`
            }, {
                id: `device-permissions`,
                title: `5. Izin Perangkat`
            }, {
                id: `third-party`,
                title: `6. Pihak Ketiga`
            }, {
                id: `contact-us`,
                title: `7. Hubungi Kami`
            }]
        }
    },
    methods: {
        scrollToSection(e) {
            let t = document.getElementById(e);
            if (t) {
                let e = document.body.getBoundingClientRect().top
                  , n = t.getBoundingClientRect().top - e - 120;
                window.scrollTo({
                    top: n,
                    behavior: `smooth`
                })
            }
        }
    }
}
  , FE = {
    class: `privacy-page`
}
  , IE = {
    class: `container-wrapper content-container`
}
  , LE = {
    class: `breadcumb-wrapper`
}
  , RE = {
    class: `privacy-header`
}
  , zE = {
    class: `animate-title`
}
  , BE = {
    class: `last-updated`
}
  , VE = {
    class: `lang-toggle-container`
}
  , HE = {
    class: `lang-toggle`
}
  , UE = {
    class: `layout-grid`
}
  , WE = {
    class: `sidebar-nav`
}
  , GE = {
    class: `sidebar-card`
}
  , KE = [`href`, `onClick`]
  , qE = {
    class: `content-body`
}
  , JE = {
    class: `glass-content-card`
}
  , YE = {
    key: 0,
    class: `fade-in`
}
  , XE = {
    key: 1,
    class: `fade-in`
};
function ZE(e, t, n, r, i, a) {
    let o = V(`Navbar`)
      , s = V(`BreadCumb`)
      , c = V(`AppFooter`);
    return W(),
    G(`div`, FE, [t[4] ||= K(`video`, {
        class: `bg-video`,
        autoplay: ``,
        loop: ``,
        muted: ``,
        playsinline: ``
    }, [K(`source`, {
        src: `/contact_hero.webm`,
        type: `video/webm`
    }), Da(` Your browser does not support the video tag. `)], -1), t[5] ||= K(`div`, {
        class: `video-overlay`
    }, null, -1), q(o), t[6] ||= K(`div`, {
        class: `top-gradient`
    }, null, -1), K(`div`, IE, [K(`div`, LE, [q(s)]), K(`header`, RE, [K(`h1`, zE, R(i.currentLang === `en` ? `Privacy Policy` : `Kebijakan Privasi`), 1), K(`p`, BE, R(i.currentLang === `en` ? `Last Updated: July 7, 2026` : `Terakhir Diperbarui: 7 Juli 2026`), 1), K(`div`, VE, [K(`div`, HE, [K(`button`, {
        class: I({
            active: i.currentLang === `en`
        }),
        onClick: t[0] ||= e => i.currentLang = `en`
    }, ` English `, 2), K(`button`, {
        class: I({
            active: i.currentLang === `id`
        }),
        onClick: t[1] ||= e => i.currentLang = `id`
    }, ` Bahasa Indonesia `, 2)])])]), K(`div`, UE, [K(`aside`, WE, [K(`div`, GE, [K(`h3`, null, R(i.currentLang === `en` ? `Sections` : `Bagian`), 1), K(`ul`, null, [(W(!0),
    G(U, null, H(a.currentSections, e => (W(),
    G(`li`, {
        key: e.id
    }, [K(`a`, {
        href: `#` + e.id,
        onClick: Ss(t => a.scrollToSection(e.id), [`prevent`])
    }, R(e.title), 9, KE)]))), 128))])])]), K(`main`, qE, [K(`article`, JE, [i.currentLang === `en` ? (W(),
    G(`div`, YE, [...t[2] ||= [Oa(`<section id="introduction" class="content-section" data-v-b2c1ae34><h2 data-v-b2c1ae34>1. Introduction</h2><p data-v-b2c1ae34> Welcome to <strong data-v-b2c1ae34>PT Simple Journey</strong> We are committed to protecting your personal data and your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications and our web portal at <a href="https://simplejourney.co.id" target="_blank" rel="noopener" data-v-b2c1ae34>https://simplejourney.co.id</a>. </p><p data-v-b2c1ae34> By accessing or using our services, you consent to the collection, transfer, storage, disclosure, and other uses of your information as described in this Privacy Policy. </p></section><section id="information-collection" class="content-section" data-v-b2c1ae34><h2 data-v-b2c1ae34>2. Information We Collect</h2><p data-v-b2c1ae34>We may collect several types of information to provide and improve our services to you:</p><ul data-v-b2c1ae34><li data-v-b2c1ae34><strong data-v-b2c1ae34>Personal Information:</strong> When you register an account, log in, or contact support, we may collect your name, email address, phone number, company affiliation, and account credentials. </li><li data-v-b2c1ae34><strong data-v-b2c1ae34>Location Data:</strong> To facilitate transport tracking, driver navigation, and passenger dashboard features, our mobile applications may request permission to collect precise or approximate real-time location data from your device. </li><li data-v-b2c1ae34><strong data-v-b2c1ae34>Device Information:</strong> We collect device-specific details such as your device model, operating system version, unique device identifiers, IP address, and browser characteristics. </li><li data-v-b2c1ae34><strong data-v-b2c1ae34>Usage and Log Data:</strong> We log information about your interactions with our services, including active sessions, access times, pages viewed, and application performance crash reports. </li></ul></section><section id="how-we-use" class="content-section" data-v-b2c1ae34><h2 data-v-b2c1ae34>3. How We Use Your Information</h2><p data-v-b2c1ae34>We process your data for purposes based on legitimate business interests and to fulfill our services:</p><ul data-v-b2c1ae34><li data-v-b2c1ae34>To set up, manage, and secure your user account.</li><li data-v-b2c1ae34>To provide real-time updates, dashboard visualisations, and notifications relevant to your transport status.</li><li data-v-b2c1ae34>To facilitate support requests, resolve technical issues, and respond to user inquiries.</li><li data-v-b2c1ae34>To improve our applications&#39; responsiveness, performance, and overall security.</li><li data-v-b2c1ae34>To comply with legal obligations or enforce our terms of service.</li></ul></section><section id="data-security" class="content-section" data-v-b2c1ae34><h2 data-v-b2c1ae34>4. Data Security and Storage</h2><p data-v-b2c1ae34> The security of your personal information is extremely important to us. We implement industry-standard technical, administrative, and physical safeguards (including database encryption and secure TLS communication channels) designed to protect your data from unauthorized access, disclosure, alteration, or loss. </p><p data-v-b2c1ae34> We store your data on secure database systems and retain it only for as long as necessary to fulfill the services outlined in this policy, or to meet legal and regulatory requirements. </p></section><section id="device-permissions" class="content-section" data-v-b2c1ae34><h2 data-v-b2c1ae34>5. Device Permissions</h2><p data-v-b2c1ae34> Depending on the specific features used in our mobile applications, the app may request access to: </p><ul data-v-b2c1ae34><li data-v-b2c1ae34><strong data-v-b2c1ae34>Location Services:</strong> Essential for mapping, tracking, and locating transport routes.</li><li data-v-b2c1ae34><strong data-v-b2c1ae34>Push Notifications:</strong> Used to send alerts about trip status, schedule updates, or account safety notifications.</li><li data-v-b2c1ae34><strong data-v-b2c1ae34>Network Connection:</strong> Required to establish data synchronization with our central servers.</li></ul><p data-v-b2c1ae34> You can disable these permissions at any time through your mobile device&#39;s settings menu, although doing so may limit your access to key application features. </p></section><section id="third-party" class="content-section" data-v-b2c1ae34><h2 data-v-b2c1ae34>6. Third-Party Services</h2><p data-v-b2c1ae34> We may integrate third-party APIs or software development kits (SDKs) such as Google Play Services or Firebase SDKs for system performance monitoring and crash analytics. These third-party services operate independently and have their own respective privacy policies. </p></section><section id="contact-us" class="content-section" data-v-b2c1ae34><h2 data-v-b2c1ae34>7. Contact Us</h2><p data-v-b2c1ae34> If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please feel free to reach out to us: </p><div class="contact-box" data-v-b2c1ae34><p data-v-b2c1ae34><strong data-v-b2c1ae34>PT Simple Journey</strong></p><p data-v-b2c1ae34>Email: <a href="mailto:info@simplejourney.co.id" data-v-b2c1ae34>info@simplejourney.co.id</a></p><p data-v-b2c1ae34>Phone: 0813-1898-2939</p><p data-v-b2c1ae34>Address: Ruko Cendana, Jl. Benteng Betawi No.37, RT.004/RW.015, Tanah Tinggi, Kec. Tangerang, Kota Tangerang, Banten 15119</p></div></section>`, 7)]])) : (W(),
    G(`div`, XE, [...t[3] ||= [Oa(`<section id="introduction" class="content-section" data-v-b2c1ae34><h2 data-v-b2c1ae34>1. Pendahuluan</h2><p data-v-b2c1ae34> Selamat datang di <strong data-v-b2c1ae34>PT Simple Journey</strong> (&quot;kami&quot;, &quot;milik kami&quot;, atau &quot;kita&quot;). Kami berkomitmen untuk melindungi data pribadi dan privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi Anda saat Anda menggunakan aplikasi seluler kami (termasuk Aplikasi Satellite dan aplikasi penumpang/klien) serta portal web kami di <a href="https://simplejourney.co.id" target="_blank" rel="noopener" data-v-b2c1ae34>https://simplejourney.co.id</a>. </p><p data-v-b2c1ae34> Dengan mengakses atau menggunakan layanan kami, Anda menyetujui pengumpulan, transfer, penyimpanan, pengungkapan, dan penggunaan informasi Anda lainnya sebagaimana dijelaskan dalam Kebijakan Privasi ini. </p></section><section id="information-collection" class="content-section" data-v-b2c1ae34><h2 data-v-b2c1ae34>2. Informasi yang Kami Kumpulkan</h2><p data-v-b2c1ae34>Kami dapat mengumpulkan beberapa jenis informasi untuk menyediakan dan meningkatkan layanan kami kepada Anda:</p><ul data-v-b2c1ae34><li data-v-b2c1ae34><strong data-v-b2c1ae34>Informasi Pribadi:</strong> Saat Anda mendaftarkan akun, masuk, atau menghubungi dukungan teknis, kami dapat mengumpulkan nama, alamat email, nomor telepon, afiliasi perusahaan, dan kredensial akun Anda. </li><li data-v-b2c1ae34><strong data-v-b2c1ae34>Data Lokasi:</strong> Untuk memfasilitasi pelacakan transportasi, navigasi pengemudi, dan fitur dashboard penumpang, aplikasi seluler kami dapat meminta izin untuk mengumpulkan data lokasi real-time yang tepat atau perkiraan lokasi dari perangkat Anda. </li><li data-v-b2c1ae34><strong data-v-b2c1ae34>Informasi Perangkat:</strong> Kami mengumpulkan detail spesifik perangkat seperti model perangkat, versi sistem operasi, pengidentifikasi perangkat unik, alamat IP, dan karakteristik browser. </li><li data-v-b2c1ae34><strong data-v-b2c1ae34>Data Penggunaan dan Log:</strong> Kami mencatat informasi tentang interaksi Anda dengan layanan kami, termasuk sesi aktif, waktu akses, halaman yang dilihat, dan laporan kegagalan kinerja aplikasi. </li></ul></section><section id="how-we-use" class="content-section" data-v-b2c1ae34><h2 data-v-b2c1ae34>3. Bagaimana Kami Menggunakan Informasi Anda</h2><p data-v-b2c1ae34>Kami memproses data Anda untuk tujuan berdasarkan kepentingan bisnis yang sah dan untuk memenuhi layanan kami:</p><ul data-v-b2c1ae34><li data-v-b2c1ae34>Untuk menyiapkan, mengelola, dan mengamankan akun pengguna Anda.</li><li data-v-b2c1ae34>Untuk menyediakan pembaruan real-time, visualisasi dashboard, dan notifikasi yang relevan dengan status transportasi Anda.</li><li data-v-b2c1ae34>Untuk memfasilitasi permintaan dukungan, menyelesaikan masalah teknis, dan menanggapi pertanyaan pengguna.</li><li data-v-b2c1ae34>Untuk meningkatkan responsivitas, kinerja, dan keamanan keseluruhan aplikasi kami.</li><li data-v-b2c1ae34>Untuk mematuhi kewajiban hukum atau menegakkan ketentuan layanan kami.</li></ul></section><section id="data-security" class="content-section" data-v-b2c1ae34><h2 data-v-b2c1ae34>4. Keamanan dan Penyimpanan Data</h2><p data-v-b2c1ae34> Keamanan informasi pribadi Anda sangat penting bagi kami. Kami menerapkan langkah-langkah keamanan teknis, administratif, dan fisik standar industri (termasuk enkripsi database dan saluran komunikasi TLS yang aman) yang dirancang untuk melindungi data Anda dari akses, pengungkapan, pengubahan, atau kehilangan yang tidak sah. </p><p data-v-b2c1ae34> Kami menyimpan data Anda pada sistem database yang aman dan menyimpannya hanya selama diperlukan untuk memenuhi layanan yang diuraikan dalam kebijakan ini, atau untuk memenuhi persyaratan hukum dan peraturan. </p></section><section id="device-permissions" class="content-section" data-v-b2c1ae34><h2 data-v-b2c1ae34>5. Izin Perangkat</h2><p data-v-b2c1ae34> Tergantung pada fitur khusus yang digunakan dalam aplikasi seluler kami, aplikasi dapat meminta akses ke: </p><ul data-v-b2c1ae34><li data-v-b2c1ae34><strong data-v-b2c1ae34>Layanan Lokasi:</strong> Sangat penting untuk pemetaan, pelacakan, dan pencarian rute transportasi.</li><li data-v-b2c1ae34><strong data-v-b2c1ae34>Notifikasi Push:</strong> Digunakan untuk mengirimkan peringatan tentang status perjalanan, pembaruan jadwal, atau notifikasi keselamatan akun.</li><li data-v-b2c1ae34><strong data-v-b2c1ae34>Koneksi Jaringan:</strong> Diperlukan untuk melakukan sinkronisasi data dengan server pusat kami.</li></ul><p data-v-b2c1ae34> Anda dapat menonaktifkan izin ini kapan saja melalui menu pengaturan perangkat seluler Anda, meskipun hal tersebut dapat membatasi akses Anda ke fitur-fitur utama aplikasi. </p></section><section id="third-party" class="content-section" data-v-b2c1ae34><h2 data-v-b2c1ae34>6. Layanan Pihak Ketiga</h2><p data-v-b2c1ae34> Kami dapat mengintegrasikan API pihak ketiga atau software development kit (SDK) seperti Layanan Google Play atau SDK Firebase untuk memantau kinerja sistem dan analisis kegagalan. Layanan pihak ketiga ini beroperasi secara independen dan memiliki kebijakan privasi masing-masing. </p></section><section id="contact-us" class="content-section" data-v-b2c1ae34><h2 data-v-b2c1ae34>7. Hubungi Kami</h2><p data-v-b2c1ae34> Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan mengenai Kebijajan Privasi ini atau praktik data kami, jangan ragu untuk menghubungi kami: </p><div class="contact-box" data-v-b2c1ae34><p data-v-b2c1ae34><strong data-v-b2c1ae34>PT Simple Journey</strong></p><p data-v-b2c1ae34>Email: <a href="mailto:info@simplejourney.co.id" data-v-b2c1ae34>info@simplejourney.co.id</a></p><p data-v-b2c1ae34>Phone: 0813-1898-2939</p><p data-v-b2c1ae34>Alamat: Ruko Cendana, Jl. Benteng Betawi No.37, RT.004/RW.015, Tanah Tinggi, Kec. Tangerang, Kota Tangerang, Banten 15119</p></div></section>`, 7)]]))])])])]), q(c, {
        class: `privacy-footer`
    })])
}
var QE = J(PE, [[`render`, ZE], [`__scopeId`, `data-v-b2c1ae34`]])
  , $E = {
    name: `Button`,
    props: {
        href: {
            type: String,
            default: `#available-positions`
        }
    },
    methods: {
        handleClick(e) {
            if (this.href && this.href.startsWith(`#`)) {
                e.preventDefault();
                let t = document.querySelector(this.href);
                t && t.scrollIntoView({
                    behavior: `smooth`
                })
            }
        }
    }
}
  , eD = [`href`]
  , tD = {
    class: `btn`
}
  , nD = {
    class: `content`
};
function rD(e, t, n, r, i, a) {
    return W(),
    G(`a`, {
        href: n.href,
        class: `link-wrapper`,
        onClick: t[0] ||= (...e) => a.handleClick && a.handleClick(...e)
    }, [K(`button`, tD, [K(`span`, nD, [Yr(e.$slots, `default`, {}, () => [t[1] ||= Da(`See Career`, -1)], !0)])])], 8, eD)
}
var iD = {
    name: `HeroSection`,
    components: {
        Navbar: Eu,
        BreadCumb: WS,
        Button: J($E, [[`render`, rD], [`__scopeId`, `data-v-30f6555d`]])
    }
}
  , aD = {
    class: `hero`
}
  , oD = {
    class: `absolute-bread-cumb`
}
  , sD = {
    class: `hero-content`
}
  , cD = {
    class: `left delay-300`
}
  , lD = {
    class: `btn-container`
};
function uD(e, t, n, r, i, a) {
    let o = V(`navbar`)
      , s = V(`bread-cumb`)
      , c = V(`Button`)
      , l = Kr(`fade-viewport`);
    return W(),
    G(`section`, aD, [q(o), t[1] ||= K(`div`, {
        class: `top-gradient`
    }, null, -1), t[2] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, oD, [q(s)]), K(`div`, sD, [B((W(),
    G(`div`, cD, [t[0] ||= K(`div`, null, [K(`h1`, null, `Build Your Future with Simple Journey`), K(`span`, null, `Join our team and grow your career while contributing to meaningful technology solutions.`)], -1), K(`div`, lD, [q(c)])])), [[l]])])])
}
var dD = J(iD, [[`render`, uD], [`__scopeId`, `data-v-119aa3bd`]])
  , fD = {
    name: `SlideImageCard`,
    components: {
        Statement: zy
    },
    props: {
        title: {
            type: String,
            default: `WHY JOIN US?`
        },
        heading: {
            type: String,
            default: `Build Your Career. Make an Impact`
        },
        description: {
            type: String,
            default: ``
        },
        imageLeft: {
            type: String,
            default: `/left.webp`
        },
        imageRight: {
            type: String,
            default: `/right.webp`
        }
    }
}
  , pD = {
    class: `products-section`
}
  , mD = {
    class: `header`
}
  , hD = {
    class: `title-width`
}
  , gD = {
    class: `info-width`
}
  , _D = {
    class: `delay-1000`
}
  , vD = {
    class: `image-gallery`
}
  , yD = {
    class: `gallery-item item-left`
}
  , bD = [`src`]
  , xD = {
    class: `gallery-item item-right`
}
  , SD = [`src`];
function CD(e, t, n, r, i, a) {
    let o = V(`Statement`)
      , s = Kr(`fade-viewport`);
    return W(),
    G(`section`, pD, [K(`div`, mD, [t[0] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, hD, [q(o, {
        brand: n.title,
        statement: n.heading,
        align: `left`,
        "disable-min-height": !0
    }, null, 8, [`brand`, `statement`])]), K(`div`, gD, [B((W(),
    G(`p`, _D, [Da(R(n.description), 1)])), [[s]])])]), K(`div`, vD, [B((W(),
    G(`div`, yD, [K(`img`, {
        src: n.imageLeft,
        alt: `Team Collaboration`,
        class: `gallery-img`
    }, null, 8, bD)])), [[s, {
        x: -40,
        y: 0,
        duration: .8,
        ease: `power3.out`
    }, void 0, {
        "delay-500": !0
    }]]), B((W(),
    G(`div`, xD, [K(`img`, {
        src: n.imageRight,
        alt: `Career Focus`,
        class: `gallery-img`
    }, null, 8, SD)])), [[s, {
        x: 40,
        y: 0,
        duration: .8,
        ease: `power3.out`
    }, void 0, {
        "delay-1200": !0
    }]])])])
}
var wD = J(fD, [[`render`, CD], [`__scopeId`, `data-v-604ec286`]])
  , TD = {
    name: `CareerPositions`,
    props: {
        positions: {
            type: Array,
            default: () => [{
                id: 1,
                jobdesk: `QA`,
                title: `Shift Engineer`,
                type: `Full Time`,
                location: `Onsite - Tangerang`,
                slug: `QA`
            }, {
                id: 2,
                jobdesk: `Designer`,
                title: `Shift Engineer`,
                type: `Full Time`,
                location: `Onsite - Tangerang`,
                slug: `Designer`
            }, {
                id: 3,
                jobdesk: `Devops`,
                title: `Shift Engineer`,
                type: `Full Time`,
                location: `Onsite - Tangerang`,
                slug: `Devops`
            }, {
                id: 4,
                jobdesk: `FE`,
                title: `Shift Engineer`,
                type: `Full Time`,
                location: `Onsite - Tangerang`,
                slug: `FE`
            }, {
                id: 5,
                jobdesk: `Security Engineer`,
                title: `Shift Engineer`,
                type: `Full Time`,
                location: `Onsite - Tangerang`,
                slug: `Security Engineer`
            }]
        }
    }
}
  , ED = {
    id: `available-positions`,
    class: `positions-section`
}
  , DD = {
    class: `header`
}
  , OD = {
    class: `brand`
}
  , kD = {
    class: `title`
}
  , AD = {
    class: `subtitle`
}
  , jD = {
    class: `positions-list`
}
  , MD = {
    class: `job-info`
}
  , ND = {
    class: `job-title`
}
  , PD = {
    class: `job-meta`
}
  , FD = {
    class: `meta-item`
}
  , ID = {
    class: `meta-item`
};
function LD(e, t, n, r, i, a) {
    let o = V(`router-link`)
      , s = Kr(`fade-viewport`);
    return W(),
    G(`section`, ED, [K(`div`, DD, [B((W(),
    G(`div`, OD, [...t[0] ||= [K(`img`, {
        src: `/icon_diamond.png`,
        alt: `brand icon`,
        class: `brand-icon`
    }, null, -1), K(`span`, {
        class: `brand-text`
    }, `AVAILABLE POSITIONS`, -1)]])), [[s, {
        y: 20,
        duration: .5,
        delay: .1
    }]]), B((W(),
    G(`h1`, kD, [...t[1] ||= [Da(` Find Your Opportunity `, -1)]])), [[s, {
        y: 20,
        duration: .5,
        delay: .25
    }]]), B((W(),
    G(`p`, AD, [...t[2] ||= [Da(` Explore our current openings and find a role that matches your skills and aspirations. `, -1)]])), [[s, {
        y: 20,
        duration: .5,
        delay: .4
    }]])]), K(`div`, jD, [(W(!0),
    G(U, null, H(n.positions, (e, n) => B((W(),
    ya(o, {
        key: e.id || n,
        to: `/career/${e.slug}`,
        class: `position-card`
    }, {
        default: Mn( () => [K(`div`, MD, [K(`h3`, ND, R(e.title) + ` - ` + R(e.jobdesk), 1), K(`div`, PD, [K(`span`, FD, [t[3] ||= K(`svg`, {
            class: `meta-icon`,
            viewBox: `0 0 24 24`,
            fill: `none`,
            stroke: `currentColor`,
            "stroke-width": `2`
        }, [K(`circle`, {
            cx: `12`,
            cy: `12`,
            r: `10`
        }), K(`polyline`, {
            points: `12 6 12 12 16 14`
        })], -1), Da(` ` + R(e.type), 1)]), K(`span`, ID, [t[4] ||= K(`svg`, {
            class: `meta-icon`,
            viewBox: `0 0 24 24`,
            fill: `none`,
            stroke: `currentColor`,
            "stroke-width": `2`
        }, [K(`path`, {
            d: `M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`
        }), K(`circle`, {
            cx: `12`,
            cy: `10`,
            r: `3`
        })], -1), Da(` ` + R(e.location), 1)])])]), t[5] ||= K(`div`, {
            class: `action-btn`
        }, [K(`img`, {
            class: `icon`,
            src: `/arrow.png`,
            alt: `arrow icon`
        })], -1)]),
        _: 2
    }, 1032, [`to`])), [[s, {
        y: 30,
        duration: .6,
        delay: .6 + n * .1,
        ease: `power3.out`
    }]])), 128))])])
}
var RD = {
    name: `CareerView`,
    components: {
        Hero: dD,
        SlideImageCard: wD,
        CareerPositions: J(TD, [[`render`, LD], [`__scopeId`, `data-v-2c97e4d0`]]),
        HeroCtaSection: FS,
        AppFooter: Xl
    }
};
function zD(e, t, n, r, i, a) {
    let o = V(`Hero`)
      , s = V(`SlideImageCard`)
      , c = V(`CareerPositions`)
      , l = V(`HeroCtaSection`)
      , u = V(`AppFooter`);
    return W(),
    G(`div`, null, [q(o), q(s, {
        title: `WHY JOIN US`,
        heading: `Build Your Career. Make an Impact`,
        description: `At SimpleJourney, we believe that great work starts with people who are given the opportunity to learn, grow, and take on meaningful challenges. We foster a collaborative environment where every individual can develop their skills while contributing to real-world technology solutions.`
    }), q(c), q(l), q(u)])
}
var BD = J(RD, [[`render`, zD]])
  , VD = {
    name: `CareerDetailHero`,
    components: {
        Navbar: Eu,
        BreadCumb: WS
    },
    props: {
        job: {
            type: Object,
            default: () => ({})
        },
        slug: {
            type: String
        }
    }
}
  , HD = {
    class: `hero`
}
  , UD = {
    class: `breadcrumb-wrapper`
}
  , WD = {
    class: `hero-content`
}
  , GD = {
    class: `job-title`
}
  , KD = {
    key: 0,
    class: `position-badge`
};
function qD(e, t, n, r, i, a) {
    let o = V(`Navbar`)
      , s = V(`BreadCumb`)
      , c = Kr(`fade-viewport`);
    return W(),
    G(`section`, HD, [q(o), t[0] ||= K(`div`, {
        class: `top-gradient`
    }, null, -1), t[1] ||= K(`div`, {
        class: `overlay`
    }, null, -1), K(`div`, UD, [q(s)]), B((W(),
    G(`div`, WD, [K(`h1`, GD, R(n.job.title) + ` - ` + R(n.slug), 1), n.job.positionsCount ? (W(),
    G(`span`, KD, R(n.job.positionsCount), 1)) : ka(``, !0)])), [[c, {
        y: 20,
        duration: .6
    }]])])
}
var JD = J(VD, [[`render`, qD], [`__scopeId`, `data-v-f33d7a53`]]);
const YD = vb(`career`, {
    state: () => ({
        positions: [{
            id: 1,
            slug: `shift-engineer`,
            title: `Shift Engineer`,
            positionsCount: `1 Position`,
            type: `Full Time`,
            location: `Onsite - Tangerang`,
            description: `PT Simple Journey Indonesia is seeking a Shift Engineer responsible for maintaining operational stability during shift hours.`,
            responsibilities: [`Monitor and maintain system/production operations during shifts`, `Handle troubleshooting and escalate technical issues quickly and accurately`, `Prepare shift handover reports on a regular basis`, `Coordinate with other teams to ensure smooth 24/7 operations`, `Prepare technical documentation (SOPs, test cases/checklists, shift logs, bug reports) in a clear and structured manner`],
            qualifications: [`Willing to work shifts (morning/afternoon/night)`, `Understands the basics of system, network, and application troubleshooting`, `Able to write technical documentation clearly and systematically`],
            preferred: [{
                slug: `QA`,
                items: [`Familiar with the concepts of manual testing and regression testing`, `Experience using bug-tracking tools (Jira, Trello, etc.)`, `Basic understanding of QA and testing processes`, `Able to perform quality checks (basic/manual testing) on system changes or releases during a shift`]
            }, {
                slug: `Designer`,
                items: [`Familiar with Figma, Adobe Creative Suite, or other design tools`, `Basic understanding of UX principles (user flow, wireframing, prototyping)`, `Has a UI/UX design portfolio (Figma/Adobe XD/Sketch)`, `Able to support the creation of designs for monitoring dashboards, PowerPoint presentations, brochures, simple animations, internal tools, or visual documentation.`]
            }, {
                slug: `Devops`,
                items: [`Familiar with Docker, Kubernetes, or CI/CD tools (Jenkins, GitLab CI, etc.)`, `Experience with cloud platforms (AWS/GCP/Azure) and monitoring tools (Grafana, Prometheus, etc.)`, `Basic understanding of CI/CD, cloud computing, or containerization`, `Able to assist with deployment processes, monitor infrastructure, and maintain system uptime during shifts`]
            }, {
                slug: `FE`,
                items: [`Familiar with React, Vue, or Angular`, `Understands the basics of responsive design and cross-browser compatibility`, `Has experience with or a basic understanding of front-end development (HTML, CSS, JavaScript, and modern frameworks)`, `Able to troubleshoot bugs or make improvements to web pages or application interfaces as needed`]
            }, {
                slug: `Security Engineer`,
                items: [`Familiar with security monitoring tools (SIEM, firewalls, IDS/IPS)`, `Basic understanding of vulnerability assessments or penetration testing`, `Basic understanding of system/network security concepts`, `Able to monitor potential system security threats and perform initial escalation (basic incident response) during shifts`]
            }]
        }]
    }),
    actions: {
        getJobBySlug(e) {
            let t = this.positions[0];
            if (!t)
                return null;
            let n = t.preferred.find(t => t.slug.toLowerCase() === e?.toLowerCase());
            return {
                ...t,
                preferred: n ? [n] : t.preferred
            }
        }
    }
});
var XD = {
    name: `CareerDetailView`,
    components: {
        CareerDetailHero: JD,
        AppFooter: Xl
    },
    data() {
        return {
            job: {},
            slug: ``
        }
    },
    created() {
        let e = YD();
        this.slug = this.$route.params.slug,
        this.job = e.getJobBySlug(this.slug)
    }
}
  , ZD = {
    class: `career-detail-page`
}
  , QD = {
    class: `content-container`
}
  , $D = {
    class: `main-content`
}
  , eO = {
    class: `section-block`
}
  , tO = {
    class: `section-desc`
}
  , nO = {
    class: `section-block`
}
  , rO = {
    class: `ordered-list`
}
  , iO = {
    class: `section-block`
}
  , aO = {
    class: `ordered-list`
}
  , oO = {
    class: `section-block`
}
  , sO = {
    class: `category-name`
}
  , cO = {
    class: `ordered-list`
}
  , lO = {
    class: `sidebar-wrapper`
}
  , uO = {
    class: `glass-sidebar-card`
}
  , dO = {
    class: `sidebar-meta-item`
}
  , fO = {
    class: `sidebar-meta-item`
};
function pO(e, t, n, r, i, a) {
    let o = V(`CareerDetailHero`)
      , s = V(`AppFooter`)
      , c = Kr(`fade-viewport`);
    return W(),
    G(`div`, ZD, [q(o, {
        job: i.job,
        slug: i.slug
    }, null, 8, [`job`, `slug`]), K(`main`, QD, [B((W(),
    G(`section`, $D, [K(`div`, eO, [t[0] ||= K(`h2`, {
        class: `section-title`
    }, `Description`, -1), K(`p`, tO, R(i.job.description), 1)]), K(`div`, nO, [t[1] ||= K(`h2`, {
        class: `section-title`
    }, `Responsibilities`, -1), K(`ol`, rO, [(W(!0),
    G(U, null, H(i.job.responsibilities, (e, t) => (W(),
    G(`li`, {
        key: t
    }, R(e), 1))), 128))])]), K(`div`, iO, [t[2] ||= K(`h2`, {
        class: `section-title`
    }, `Qualifications`, -1), K(`ol`, aO, [(W(!0),
    G(U, null, H(i.job.qualifications, (e, t) => (W(),
    G(`li`, {
        key: t
    }, R(e), 1))), 128))])]), K(`div`, oO, [t[3] ||= K(`h2`, {
        class: `section-title`
    }, `Preferred`, -1), (W(!0),
    G(U, null, H(i.job.preferred, (e, t) => (W(),
    G(`div`, {
        key: t,
        class: `preferred-category`
    }, [K(`h3`, sO, R(e.category), 1), K(`ol`, cO, [(W(!0),
    G(U, null, H(e.items, (e, t) => (W(),
    G(`li`, {
        key: t
    }, R(e), 1))), 128))])]))), 128))])])), [[c, {
        y: 25,
        duration: .6
    }]]), B((W(),
    G(`aside`, lO, [K(`div`, uO, [K(`div`, dO, [t[4] ||= K(`svg`, {
        class: `meta-icon`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        "stroke-width": `2`
    }, [K(`circle`, {
        cx: `12`,
        cy: `12`,
        r: `10`
    }), K(`polyline`, {
        points: `12 6 12 12 16 14`
    })], -1), K(`span`, null, R(i.job.type), 1)]), K(`div`, fO, [t[5] ||= K(`svg`, {
        class: `meta-icon`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        "stroke-width": `2`
    }, [K(`path`, {
        d: `M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`
    }), K(`circle`, {
        cx: `12`,
        cy: `10`,
        r: `3`
    })], -1), K(`span`, null, R(i.job.location), 1)]), t[6] ||= K(`a`, {
        href: `https://forms.gle/GgyGfahbgpE2rkn5A`,
        target: `blank`,
        class: `apply-btn`
    }, [K(`span`, null, `Apply Now`), K(`img`, {
        class: `btn-arrow`,
        src: `/arrow.png`,
        alt: `arrow`
    })], -1)])])), [[c, {
        y: 25,
        duration: .6,
        delay: .2
    }]])]), q(s)])
}
var mO = J(XD, [[`render`, pO], [`__scopeId`, `data-v-da5e90a7`]])
  , hO = Ml({
    history: Zc(),
    routes: [{
        path: `/:pathMatch(.*)*`,
        component: PT
    }, {
        path: `/privacy-policy`,
        name: `privacy-policy`,
        component: QE,
        meta: {
            title: `Privacy Policy`,
            description: `Privacy Policy of PT Simple Journey`,
            show_header: !0
        }
    }, {
        path: `/products/:slug`,
        name: `products`,
        component: OE,
        meta: {
            title: `Detail`,
            description: `Product Detail Page`,
            show_header: !0
        }
    }, {
        path: `/`,
        name: `Home`,
        component: hS,
        meta: {
            title: `Home`,
            description: `Welcome to the Home Page`,
            show_header: !0
        }
    }, {
        path: `/development`,
        name: `Development`,
        component: NE,
        meta: {
            title: `Development`,
            description: `Development Page`,
            show_header: !0
        }
    }, {
        path: `/about`,
        name: `About`,
        component: ww,
        meta: {
            title: `About`,
            description: `Learn more About Us`,
            show_header: !0
        }
    }, {
        path: `/contact`,
        name: `Contact`,
        component: kT,
        meta: {
            title: `Contact`,
            description: `Get in touch with us`,
            show_header: !0
        }
    }, {
        path: `/products`,
        name: `Products`,
        component: Qw,
        meta: {
            title: `Products`,
            description: `Explore our Products`,
            show_header: !0
        }
    }, {
        path: `/services`,
        name: `Services`,
        component: RC,
        meta: {
            title: `Services`,
            description: `Discover our Services`,
            show_header: !0
        }
    }, {
        path: `/career`,
        name: `Career`,
        component: BD,
        meta: {
            title: `Career`,
            description: `Carrer Page`,
            show_header: !0
        }
    }, {
        path: `/career/:slug`,
        name: `career`,
        component: mO,
        meta: {
            title: `Career Detail`,
            description: `Career Detail Page`,
            show_header: !0
        }
    }],
    scrollBehavior(e, t, n) {
        return n || (e.hash ? {
            el: e.hash,
            behavior: `smooth`
        } : new Promise(e => {
            setTimeout( () => {
                e({
                    top: 0,
                    left: 0
                })
            }
            , 0)
        }
        ))
    }
});
hO.afterEach(e => {
    e.hash || window.scrollTo(0, 0)
}
);
var gO = hO
  , _O = {
    mounted(e) {
        e.classList.add(`animate__animated`),
        e.style.opacity = 0;
        let t = new IntersectionObserver( ([t]) => {
            t.isIntersecting && (e.classList.remove(`pre-hidden`),
            e.style.visibility = `visible`,
            e.classList.add(`animate__fadeIn`))
        }
        ,{
            threshold: .2
        });
        t.observe(e),
        e._observer = t
    },
    unmounted(e) {
        e && e._observer && e._observer.disconnect()
    }
}
  , vO = {
    mounted(e) {
        e.classList.add(`animate__animated`),
        e.style.opacity = 0;
        let t = new IntersectionObserver( ([t]) => {
            t.isIntersecting ? (e.classList.remove(`pre-hidden`),
            e.style.visibility = `visible`,
            e.classList.remove(`animate__fadeOut`),
            e.classList.add(`animate__fadeIn`)) : (e.classList.remove(`animate__fadeIn`),
            e.classList.add(`animate__fadeOut`))
        }
        ,{
            threshold: .2
        });
        t.observe(e),
        e._observer = t
    },
    unmounted(e) {
        e && e._observer && e._observer.disconnect()
    }
}
  , yO = Es(Fl);
yO.use(gO),
yO.use(ib()),
yO.directive(`fade-viewport`, _O),
yO.directive(`fade-down-viewport`, vO),
yO.mount(`#app`);
