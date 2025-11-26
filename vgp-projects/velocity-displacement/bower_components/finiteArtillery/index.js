(function (window, _) {
  window.finiteArtillery = window.finiteArtillery || {
    numz: {
      calculateDistance(player1, player2) {
        var dx = player2.x - player1.x;
        var dy = player2.y - player1.y;
        var pythag = (dx * dx) + (dy * dy);
        var distance = pythag ** (1 / 2);
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
    phyz: {
      makeBody: function (type, {
        velocityX = 0,
        velocityY = 0,
        rotationalVelocity = 0,
        integrity = 1,
        density = 1,
        volatility = 0
      } = {}) {
        if (type === undefined) throw new Error('You must provide a valid String for the type parameter!');
        return {
          type: type,
          velocityX: velocityX,
          velocityY: velocityY,
          rotationalVelocity: rotationalVelocity,
          integrity: integrity,
          density: density,
          volatility: volatility,

          /**
           * @param {Number} A number representing the force of the impact.
           * @param {Object} The other body involved in the collision.
           */
          handleCollision(impact, body) {
            // template method //
          },

          /**
           * Can be overridden in the concrete body to provide a custom update()
           * method.
           */
          update(event) {

          }
        };
      },
      updateVelocity(body, forceOnX, forceOnY) {
        const
          angle = body.rotation * Math.PI / 180,
          accelerationOnX = Math.cos(angle) * forceOnX,
          accelerationOnY = Math.sin(angle) * forceOnY;
        body.velocityX += accelerationOnX;
        body.velocityY += accelerationOnY;
      },
      updatePosition(body) {
        body.x += body.velocityX;
        body.y += body.velocityY;
        body.rotation += body.rotationalVelocity;
      },

    },
  };
}(window, window._));