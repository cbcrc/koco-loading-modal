# koco-loading-modal
Loading modal for koco project. the main advantages of this component is that you can switch the loading status (message) anytime you want without having to hide and show the modal everytime. This is useful when initializing or doing long operations and keeping your users updated.

## Installation

```bash
bower install koco-loading-modal
```

## Usage with KOCO

```javascript
// require.config.js
paths: {
	...
	'loading-manager': 'bower_components/koco-loading-modal/src/loading-manager'
	...
}
```

## Using the loading manager inside KOCO

The loading modal comes with a loading manager that can be used to easily change the status message wihtout having to hide and show everytime the message changes. Here's an example of this use case when initializing a koco application.

```javascript
// startup.js
define(['loading-manager', 'router', 'my-api'],
	function(loadingManager, router, myApi) {
        router.isActivating.subscribe(function (isActivating) {
            if (isActivating) {
                loadingManager.show('Loading...');
            } else {
                loadingManager.hide();
            }
        });

        router.isNavigating.subscribe(function (isNavigating) {
            if (!isNavigating) {
                loadingManager.hide();
            }
        });
		
        loadingManager.show('Initialization...').then(function () {
            myApi.init().then(function () {
                router.init();
            });
        });	
	});
```
