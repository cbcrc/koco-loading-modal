// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import modaler from 'koco-modaler';
import ko from 'knockout';
import $ from 'jquery';


var LoadingManager = function() {
  var self = this;
  modaler.registerModal('loading', {
    isNpm: true,
    backdrop: 'static',
    keyboard: false
  });

  self.message = ko.observable('');
};

LoadingManager.prototype.show = function(message) {
  var self = this;

  return new Promise((resolve) => {
    if (self.message()) {
      self.message(message);
    } else {
      self.message(message);

      modaler.show('loading', {
        message: self.message,
        disabelKeyEvents: true
      }, resolve);
    }
  });
};

LoadingManager.prototype.hide = function() {
  var self = this;

  return new Promise((resolve) => {
    modaler.hideCurrentModal().then(function() {
      self.message('');
      resolve();
    });
  });
};

export default new LoadingManager();
