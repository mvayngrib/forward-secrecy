'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _pbkdf2Sha256 = require('pbkdf2-sha256');

var _pbkdf2Sha2562 = _interopRequireDefault(_pbkdf2Sha256);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _tweetnacl = require('tweetnacl');

var _tweetnacl2 = _interopRequireDefault(_tweetnacl);

exports['default'] = new ((function () {
    function _class() {
        _classCallCheck(this, _class);
    }

    _createClass(_class, [{
        key: 'hmac',

        /**
        * Create an SHA256-HMAC from the specified key and data. Note that according
        * to this (http://stackoverflow.com/a/9591184) we can use buffers as key
        * material (as well as for data).
        *
        * @param {Buffer|String} key
        * @param {Buffer|String} data
        * @return {Buffer} digest
        */
        value: function hmac(key, data) {
            return _crypto2['default'].createHmac('sha256', key).update(data).digest();
        }

        /**
        * Key-derivation using PBKDF2.
        *
        * @param {Buffer|String} key
        * @param {Buffer|String} salt
        * @param {Number} iter - Number of iterations.
        * @param {Number} length - The length of the key material we require.
        * @return {Buffer}
        */
    }, {
        key: 'kdf',
        value: function kdf(key, salt, iter, length) {
            return (0, _pbkdf2Sha2562['default'])(key, salt, iter, length);
        }

        /**
        * ECDH using Curve25519 (from NaCl).
        *
        * @param {Uint8Array} publicKey
        * @param {Uint8Array} secretKey
        * @return {Uint8Array} - The shared key.
        */
    }, {
        key: 'dh',
        value: function dh(publicKey, secretKey) {
            return _tweetnacl2['default'].box.before(publicKey, secretKey);
        }
    }]);

    return _class;
})())();
module.exports = exports['default'];