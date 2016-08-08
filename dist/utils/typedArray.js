'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _tweetnacl = require('tweetnacl');

var _tweetnacl2 = _interopRequireDefault(_tweetnacl);

exports['default'] = new ((function () {
    function _class() {
        _classCallCheck(this, _class);
    }

    _createClass(_class, [{
        key: 'toBuffer',

        /**
        * Take a Uint8Array and convert it to a buffer. Thanks to Martin Thomson:
        * http://stackoverflow.com/a/12101012
        *
        * @param {Uint8Array} ab - The Uint8Array to be converted.
        * @return {Buffer} buffer - The new Buffer.
        */
        value: function toBuffer(ab) {
            var buffer = new Buffer(ab.byteLength);
            var view = new Uint8Array(ab);

            for (var i = 0; i < buffer.length; ++i) {
                buffer[i] = view[i];
            }

            return buffer;
        }

        /**
        * Take a typed array and convert it to a base 64 representation.
        *
        * @param {Uint8Array} ab - The Uint8Array to be converted.
        * @return {String} - Base64 representation of the array.
        */
    }, {
        key: 'toBase64',
        value: function toBase64(ab) {
            return _tweetnacl2['default'].util.encodeBase64(ab);
        }
    }]);

    return _class;
})())();
module.exports = exports['default'];