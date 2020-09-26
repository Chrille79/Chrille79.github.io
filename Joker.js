
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
