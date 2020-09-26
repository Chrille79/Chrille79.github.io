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

Array.prototype.shuffle = function () {
    for (var j, x, i = this.length; i; j = Math.floor(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
}

function Joker(sel) {

    // About object is returned if there is no 'id' parameter
    var about = {
        Version: 0.2,
        Author: "Christian Johansson",
        Created: "2014-03-14",
        Updated: "2014-03-14"
    };

    if (sel) {
        // Avoid clobbering the window scope: 
        // return a new _ object if we're in the wrong scope
        if (window === this) {
            return new Joker(sel);
        }
        // We're in the correct object scop:
        // Init our element object and return the object
        if (Joker.isJoker(sel)) {
            return sel;
        }
        else if (Joker.isElement(sel)) {
            this.e = sel;
        }
        else {
            this.e = document.getElementById(sel);
        }

        return this;
    } else {
        return about;
    }
}

//Returns true if it is a DOM node
Joker.isNode = function (o) {
    return (
      typeof Node === "object" ? o instanceof Node :
      o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string"
    );
}

//Returns true if it is a DOM element  
Joker.isElement = function (o) {
    return (
      typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
  );
};

Joker.isJoker = function (o) {
    return (o instanceof Joker);
};
Joker.getElement = function (o) {
    if (Joker.isJoker(o)) return o.e;
    return o;
};

Joker.prototype = {
    addCard: function (card) {
        if (!this.isTopCard()) return;
        this.e.appendChild(Joker.getElement(card));
    },
    getTopCard: function () {
        if (this.isTopCard()) return this;
        else return this.getChildCard().getTopCard();
    },

    getParentCard: function () {
        return Joker(this.e.parentElement);
    },

    getChildCard: function () {
        return Joker(this.e.firstChild);
    },

    isTopCard: function () {
        return !this.e.hasChildNodes();
    },

    isSerie: function () {
        if (this.isTopCard()) return true;
        var a = this.getChildCard();
        if (this.suit == a.suit && this.number == a.number - 1) return a.isSerie();
        return false;
    },

    flip: function () {
        this.side = this.side == 'back' ? 'face' : 'back';
    },

    isAltSerie: function () {
        if (this.isTopCard()) return true;
        var a = this.getChildCard();
        if (this.color != a.color && this.number == a.number + 1) return a.isAltSerie();
        return false;
    },
    countStack: function () {
        var i = 0, c = this;
        while (!c.isTopCard()) {
            i++;
            c = c.getChildCard();
        }
        return i;
    },
    getPlaceHolder: function () {
        if (this.isPlaceHolder()) return this;
        return this.getParentCard().getPlaceHolder();
    },

    isPlaceHolder: function () {
        if (this.e.tagName == 'SECTION') {
            return true;
        }
        return false;
    },
};

Object.defineProperty(Joker.prototype, "number", {
    get: function () { return parseInt(this.e.getAttribute("data-number")); },
    set: function (val) { this.e.setAttribute("data-number", val); }
});
Object.defineProperty(Joker.prototype, "suit", {
    get: function () { return this.e.getAttribute("data-suit"); },
    set: function (val) { this.e.setAttribute("data-suit", val); }
});
Object.defineProperty(Joker.prototype, "color", {
    get: function () {
        return (this.suit == 'c' || this.suit == 's') ? 'b' : 'r';
    },
});
Object.defineProperty(Joker.prototype, "side", {
    get: function () { return this.e.getAttribute("data-side"); },
    set: function (val) { this.e.setAttribute("data-side", val); }
});
/*
        Object.defineProperty(HTMLElement.prototype, "number", {
            get: function () { return parseInt(this.getAttribute("data-number")); },
            set: function (val) { this.setAttribute("data-number", val); }
        });
        Object.defineProperty(HTMLElement.prototype, "suit", {
            get: function () { return this.getAttribute("data-suit"); },
            set: function (val) { this.setAttribute("data-suit", val); }
        });
        Object.defineProperty(HTMLElement.prototype, "color", {
            get: function () {
                return (this.suit == 'c' || this.suit == 's') ? 'b' : 'r';
            },
        });

        HTMLElement.prototype.getTopCard = function () {
            if (!this.hasChildNodes()) return this;
            else return this.firstChild.getTopCard();
        };
        HTMLElement.prototype.isSerie = function () {
            if (!this.hasChildNodes()) return true;
            var a = this.firstChild;
            if (this.suit == a.suit && this.number == s.number - 1) return s.isSerie();
            return false;
        };
        HTMLElement.prototype.isAltSerie = function () {
            if (!this.hasChildNodes()) return true;
            var a = this.firstChild;
            if (this.color != a.color && this.number == a.number + 1) return a.isAltSerie();
            return false;
        };
        HTMLElement.prototype.countStack = function () {
            var i = 0, e = this;
            while (e.hasChildNodes()) {
                i++;
                e = e.firstChild;
            }
            return i;
        };
        HTMLElement.prototype.getPlaceHolder = function () {
            if (this.tagName == 'SECTION') {
                return this;
            }
            return this.parentElement.getPlaceHolder();
        };

*/


}
/*
     FILE ARCHIVED ON 02:36:51 Dec 11, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:50:52 Sep 25, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 185.319
  LoadShardBlock: 2628.169 (3)
  captures_list: 2663.906
  exclusion.robots: 0.215
  RedisCDXSource: 6.848
  exclusion.robots.policy: 0.2
  PetaboxLoader3.datanode: 2461.284 (4)
  CDXLines.iter: 24.657 (3)
  esindex: 0.014
  PetaboxLoader3.resolve: 317.918 (2)
*/