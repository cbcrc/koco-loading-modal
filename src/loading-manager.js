// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

define(['modaler', 'knockout', 'jquery'],
	function (modaler, ko, $) {
		'use strict';

		var LoadingManager = function () {
			var self = this;
            modaler.registerModal('loading', {
                basePath: 'bower_components/koco-loading-modal/src',
                backdrop: 'static',
                keyboard: false
            });

			self.message = ko.observable('');
		};

		LoadingManager.prototype.show = function (message) {
			var self = this;

			return $.Deferred(function (dfd) {
				if (self.message()) {
					self.message(message);
				} else {
					self.message(message);
					
					modaler.show('loading', {
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

			return $.Deferred(function (dfd) {
				modaler.hideCurrentModal().then(function () {
					self.message('');
					dfd.resolve();
				});
			}).promise();
		};

		return new LoadingManager();
	});