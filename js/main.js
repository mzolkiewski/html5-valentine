(function(iHeartIt){
    'use strict';

    window.onload = function() {
        var config = {
            canvasId: 'canvas',
            numberOfObjects: 200,
            explosionRadius: 200,
            explosionForce: 50
        };

        iHeartIt.setup(config);

        iHeartIt.start();
    };
    
})(window.iHeartIt);