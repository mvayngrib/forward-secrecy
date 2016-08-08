"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports["default"] = new ((function () {
    function _class() {
        _classCallCheck(this, _class);
    }

    _createClass(_class, [{
        key: "toTypedArray",

        /**
        * Take a buffer and convert it to a Uint8Array. Thanks to Martin Thomson:
        * http://stackoverflow.com/a/12101012
        *
        * @param {Buffer} buffer - The buffer to be converted.
        * @return {Uint8Array} view - The new Uint8Array.
        */
        value: function toTypedArray(buffer) {
            var ab = new ArrayBuffer(buffer.length);
            var view = new Uint8Array(ab);

            for (var i = 0; i < buffer.length; ++i) {
                view[i] = buffer[i];
            }

            return view;
        }
    }, {
        key: "equals",
        value: function equals(a, b) {
            if (a.length !== b.length) return false;

            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i] !== b[i]) return false;
            }

            return true;
        }
    }]);

    return _class;
})())();
module.exports = exports["default"];