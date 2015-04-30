// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

define(['text!./loading-modal.html', 'knockout'],
	function(template, ko) {
		'use strict';

		var ViewModel = function(context/*, componentInfo*/) {
			this.text = context.params.message;
		};

        return {
            viewModel: {
                createViewModel: function(context, componentInfo) {
                    return new ViewModel(context, componentInfo);
                }
            },
            template: template
        };
	});
