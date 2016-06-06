(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'koco-modaler', 'knockout', 'jquery'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('koco-modaler'), require('knockout'), require('jquery'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.kocoModaler, global.knockout, global.jquery);
    global.loadingManager = mod.exports;
  }
})(this, function (exports, _kocoModaler, _knockout, _jquery) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _kocoModaler2 = _interopRequireDefault(_kocoModaler);

  var _knockout2 = _interopRequireDefault(_knockout);

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var LoadingManager = function LoadingManager() {
    var self = this;
    _kocoModaler2.default.registerModal('loading', {
      isNpm: true,
      backdrop: 'static',
      keyboard: false
    });

    self.message = _knockout2.default.observable('');
  }; // Copyright (c) CBC/Radio-Canada. All rights reserved.
  // Licensed under the MIT license. See LICENSE file in the project root for full license information.

  LoadingManager.prototype.show = function (message) {
    var self = this;

    return new Promise(function (resolve) {
      if (self.message()) {
        self.message(message);
      } else {
        self.message(message);

        _kocoModaler2.default.show('loading', {
          message: self.message,
          disabelKeyEvents: true
        }, resolve);
      }
    });
  };

  LoadingManager.prototype.hide = function () {
    var self = this;

    return new Promise(function (resolve) {
      _kocoModaler2.default.hideCurrentModal().then(function () {
        self.message('');
        resolve();
      });
    });
  };

  exports.default = new LoadingManager();
});