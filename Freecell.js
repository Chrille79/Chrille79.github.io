var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


function dblclick(ev) {
    ev.preventDefault();
    if (ev.target.hasChildNodes()) return false;
    var q1 = Joker('q1'), q2 = Joker('q2'), q3 = Joker('q3'), q4 = Joker('q4');
    if (q1.isTopCard()) { q1.addCard(ev.target); afterDrop(); return; }
    if (q2.isTopCard()) { q2.addCard(ev.target); afterDrop(); return; }
    if (q3.isTopCard()) { q3.addCard(ev.target); afterDrop(); return; }
    if (q4.isTopCard()) { q4.addCard(ev.target); afterDrop(); return; }
}

function dragOver(ev) {
    ev.preventDefault();
}

function dragEnter(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    if (ev.dataTransfer)
        ev.dataTransfer.setData("Text", ev.target.id);
}

function touchEnd(ev) {
    ev.preventDefault();
    var e = ev.target;
    var t = document.elementFromPoint(ev.changedTouches[0].pageX, ev.changedTouches[0].pageY);

    if (canDrop(e, t)) {
        t.appendChild(e);
        afterDrop();
    }
    ev.stopPropagation();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    var e = document.getElementById(data);
    var t = ev.target;

    if (canDrop(e, t)) {
        t.appendChild(e);
        afterDrop();
    }
    ev.stopPropagation();
}

function canDrop(e, t) {
    e = Joker(e), t = Joker(t);
    var pt = t.getPlaceHolder();

    switch (pt.suit) {
        case 'o':
            return canDropO(e, t);
        case 'q':
            return canDropQ(e, t);
        case 'd':
        case 's':
        case 'h':
        case 'c':
            return canDropX(e, t);
        default:
            return false;
    }
}

function canDropO(e, t) {
    if (!t.isTopCard()) return false;
    if (!e.isAltSerie()) return false;
    var l = e.countStack() + 1;
    if (l > 1 && l > countFreeCell()) return false;
    if (t.suit == 'o') return true;
    return (e.color != t.color && e.number == t.number - 1);
}

function canDropX(e, t) {
    if (!t.isTopCard()) return false;
    if (!e.isTopCard()) return false;
    return (e.suit == t.suit && e.number == t.number + 1);
}

function canDropQ(e, t) {
    if (!t.isTopCard()) return false;
    if (!e.isTopCard()) return false;
    if (t.suit != 'q') return false;
    return true;
}

function countFreeCell() {
    var i = 0;
    if (Joker('q1').isTopCard()) i++;
    if (Joker('q2').isTopCard()) i++;
    if (Joker('q3').isTopCard()) i++;
    if (Joker('q4').isTopCard()) i++;
    if (Joker('o1').isTopCard()) i++;
    if (Joker('o2').isTopCard()) i++;
    if (Joker('o3').isTopCard()) i++;
    if (Joker('o4').isTopCard()) i++;
    if (Joker('o5').isTopCard()) i++;
    if (Joker('o6').isTopCard()) i++;
    if (Joker('o7').isTopCard()) i++;
    if (Joker('o8').isTopCard()) i++;
    return i;
}

function init() {
    var arr = [];

    serie(arr, 'd');
    serie(arr, 'c');
    serie(arr, 's');
    serie(arr, 'h');
    arr.shuffle();

    addCards(document.getElementById('o1'), arr, 7);
    addCards(document.getElementById('o2'), arr, 7);
    addCards(document.getElementById('o3'), arr, 7);
    addCards(document.getElementById('o4'), arr, 7);
    addCards(document.getElementById('o5'), arr, 6);
    addCards(document.getElementById('o6'), arr, 6);
    addCards(document.getElementById('o7'), arr, 6);
    addCards(document.getElementById('o8'), arr, 6);
}

function serie(arr, c) {
    for (var f = 1; f <= 13; f++) {
        arr.push(c + f);
    }
}

function addCards(el, arr, i) {
    if (i == 0) return;
    var card = createCard(arr.pop());
    el.appendChild(card);
    addCards(card, arr, --i);
}

function createCard(id) {
    var card = document.createElement("article");
    card.id = id;
    Joker(card).suit = id.substr(0, 1);
    Joker(card).number = id.substr(1);
    card.draggable = true;
    card.addEventListener('dragenter', dragEnter, false);
    card.addEventListener('dragstart', dragStart, false);
    card.addEventListener('dragover', dragOver, false);
    card.addEventListener('drop', drop, false);
    card.addEventListener('touchmove', function (e) { e.preventDefault(); }, true);
    card.addEventListener('dblclick', dblclick, true);
    card.addEventListener('touchstart', dragStart, false)
    card.addEventListener('touchenter', dragOver, false)
    card.addEventListener('touchend', touchEnd, false)
    return card;
}

function zoom() {
    var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], x = w.innerWidth || e.clientWidth || g.clientWidth, y = w.innerHeight || e.clientHeight || g.clientHeight;

    if (typeof g.style.zoom !== 'undefined' && !navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi)) {
        var scale = x / 1348;
        g.style.zoom = scale;
    } 
    else {
        // Apply scale transform as a fallback
        transformElement(g, 'translate(-50%, -50%) scale(' + scale + ') translate(50%, 50%)');
    }
}

function transformElement(element, transform) {

    element.style.WebkitTransform = transform;
    element.style.MozTransform = transform;
    element.style.msTransform = transform;
    element.style.OTransform = transform;
    element.style.transform = transform;

}

function afterDrop() {
    var ed = Joker('d0').getTopCard();
    var es = Joker('s0').getTopCard();
    var ec = Joker('c0').getTopCard();
    var eh = Joker('h0').getTopCard();
    var min = Math.min(ed.number, es.number, ec.number, eh.number);
    var newDrop = false;
    if (min == 13) return;
    if (ed.number == min) {
        var e = document.getElementById(ed.suit + (min + 1));
        if (typeof e != 'undefined' && !e.hasChildNodes()) {
            ed.addCard(e);
            newDrop = true;
        }
    }
    if (es.number == min) {
        var e = document.getElementById(es.suit + (min + 1));
        if (typeof e != 'undefined' && !e.hasChildNodes()) {
            es.addCard(e);
            newDrop = true;
        }
    }
    if (ec.number == min) {
        var e = document.getElementById(ec.suit + (min + 1));
        if (typeof e != 'undefined' && !e.hasChildNodes()) {
            ec.addCard(e);
            newDrop = true;
        }
    }
    if (eh.number == min) {
        var e = document.getElementById(eh.suit + (min + 1));
        if (typeof e != 'undefined' && !e.hasChildNodes()) {
            eh.addCard(e);
            newDrop = true;
        }
    }

    if (newDrop) afterDrop();
}

init();

}
/*
     FILE ARCHIVED ON 03:11:25 Dec 11, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:50:50 Sep 25, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.008
  exclusion.robots.policy: 0.136
  exclusion.robots: 0.145
  RedisCDXSource: 23.458
  PetaboxLoader3.datanode: 221.914 (4)
  captures_list: 304.807
  LoadShardBlock: 256.778 (3)
  CDXLines.iter: 21.649 (3)
  PetaboxLoader3.resolve: 258.001 (2)
  load_resource: 283.294
*/