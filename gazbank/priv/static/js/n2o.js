
// N2O CORE

let active = false,
    debug = false,
    session = "site-sid",
    protocol = window.location.protocol == 'https:' ? "wss://" : "ws://",
    querystring = window.location.pathname + window.location.search,
    host = window.location.hostname;

function client() { return ''; }
function token()  { return sessionStorage.getItem("token")  || ''; };
function qi(name) { return document.getElementById(name); }
function qs(name) { return document.querySelector(name); }
function qa(name) { return document.querySelectorAll(name); }
function qn(name) { return document.createElement(name); }
function is(x, num, name) { return x == undefined ? false : (x.t == 106 ? false : (x.v.length === num && x.v[0].v === name)); }
function co(name) { match = document.cookie.match(new RegExp(name + '=([^;]+)')); return match ? match[1] : undefined; }

function N2O_start() {
    document.cookie = 'X-Authorization=' + token() + '; path=/';
    ws = new bullet(protocol + host + (port==""?"":":"+port) + "/ws" + querystring);
    ws.onmessage = function (evt) { // formatters loop
    for (let i=0;i<protos.length;i++) { p = protos[i]; if (p.on(evt, p.do).status == "ok") return; } };
    ws.onopen = function() { if (!active) { ws.send('N2O,'+token()); console.log('WS Connect'); active=true; } };
    ws.onclose = function() { active = false; console.log('WS Disconnect'); }; next(); }

/// N2O Protocols

let $io = {}; $io.on = function onio(r, cb) {
    if (is(r, 3, 'io')) {
        if (r.v[2].v != undefined && r.v[2].v[1] != undefined && r.v[2].v.length == 2 &&
           (r.v[2].v[0].v == "Token" || r.v[2].v[0].v == "Auth"))
         { sessionStorage.setItem("token",utf8_arr(r.v[2].v[1].v)); }
        if (typeof cb == 'function') cb(r.v[2]);
        let evalex = utf8_arr(r.v[1].v);
        if (debug) console.log(evalex);
        try { eval(evalex); return { status: "ok" }; }
        catch (e) { console.log(evalex);
                    console.error("Eval failed:",e); 
                    return { status: '' }; }
    } else return { status: '' };
}

let $file = {}; $file.on = function onfile(r, cb) {
    if (is(r, 10, 'ftpack')) {
        if (typeof cb == 'function') cb(r); return { status: "ok" };
    } else return { status: '' };
}

// BERT Formatter

let $bert = {}; $bert.protos = [$io, $file]; $bert.on = function onbert(evt, cb) {
    if (ArrayBuffer.prototype.isPrototypeOf(evt.data) &&
       (evt.data.byteLength > 0)) {
        try {
            let erlang = dec(evt.data);
            if (typeof cb == 'function') cb(erlang);
            for (let i = 0; i < $bert.protos.length; i++) {
                let p = $bert.protos[i];
                let ret = p.on(erlang, p.do);
                if (ret != undefined && ret.status == "ok") return ret;
            }
        } catch (e) { console.error(e); }
        return { status: "ok" };
    } else return { status: "error", desc: "data" };
}

let protos = [$bert];
