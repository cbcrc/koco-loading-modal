'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kocoModaler = require('koco-modaler');

var _kocoModaler2 = _interopRequireDefault(_kocoModaler);

var _knockout = require('knockout');

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingManager = function LoadingManager() {
    var self = this;
    _kocoModaler2.default.registerModal('loading', {
        basePath: 'bower_components/koco-loading-modal/src',
        backdrop: 'static',
        keyboard: false
    });

    self.message = _knockout2.default.observable('');
}; // Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

LoadingManager.prototype.show = function (message) {
    var self = this;

    return _jquery2.default.Deferred(function (dfd) {
        if (self.message()) {
            self.message(message);
        } else {
            self.message(message);

            _kocoModaler2.default.show('loading', {
                message: self.message,
                disabelKeyEvents: true
            }, function () {
                dfd.resolve();
            });
        }
    }).promise();
};

LoadingManager.prototype.hide = function () {
    var self = this;

    return _jquery2.default.Deferred(function (dfd) {
        _kocoModaler2.default.hideCurrentModal().then(function () {
            self.message('');
            dfd.resolve();
        });
    }).promise();
};

exports.default = new LoadingManager();