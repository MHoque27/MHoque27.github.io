(function(window, _) {
  window.finiteArtillery = window.finiteArtillery || {
    numz: {
        calculateDistance(player1, player2) {
            var dx = player2.x - player1.x;
            var dy = player2.y - player1.y;
            var pythag = (dx * dx) + (dy * dy);
            var distance = pythag**(1/2);
            return distance;
        },
        getAngleDegrees(pointA, pointB) {
            const distanceX = pointB.x - pointA.x;
            const distanceY = pointB.y - pointA.y;
            const radians = Math.atan2(distanceY, distanceX);
            const degrees = radians * 180 / Math.PI;
            return degrees;
        },
        degreesToRadians(degrees) {
          return degrees * Math.PI / 180;
        },
        radiansToDegrees(radians) {
          return radians * 180 / Math.PI;
        }
    },
    phyz: {},
  };
}(window, window._));
finiteArtillery.numz.calculateDistance() 