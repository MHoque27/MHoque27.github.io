(function(window, opspark, _) {
  const
    Proton = window.Proton;

  // create a namespace for the mine manager //
  _.set(opspark, 'playa.mine',
    /**
     * Creates and returns the mine manager.
     */
    function(assets, fx, messenger) {
      const
        active = [],
        objects = [],
        pool = {
          active,
          objects,

          get: function() {
            if (objects.length > 0) {
              return objects.pop();
            }
            return makeObject();
          },

          recycle: function(object) {
            messenger.dispatch({ type: 'POOL', bodies: [object], source: 'mine' });
            // remove object from the active Array //
            const i = active.indexOf(object);
            if (i > -1) {
              active.splice(i, 1);
            }

            // reset and pool the object off the stage //
            object.x = -(object.width);
            object.alpha = 1;
            object.scaleX = object.scaleY = 1;
            objects.push(object);
          }
        },
        mineManager = {
          getNumberActive() {
            return active.length;
          },
          spawn(number = 1) {
            const spawned = [];
            for (let i = 0; i < number; i++) {
              spawned.push(pool.get());
            }
            active.push(...spawned);
            messenger.dispatch({ type: 'SPAWN', bodies: spawned, source: 'mine' });
            return this;
          },
        };
      
      function makeObject() {
        const mine = assets.makeMine();
        mine.handleCollision = handleCollision;
        return mine;
      }
      
      function handleCollision(impact, body) {
        // don't handle collisions between mines //
        if (body.type === this.type) return;
        if (body.type === "projectile") return;
        if (body.type === "ship") {
          console.log(impact);
          this.integrity -= impact;
            fx
              .makeEmitter(7, 15, "rgba(183, 0, 255, 1)", null, [
                new Proton.RandomDrift(5, 0, .35)
              ])
              .emit({ x: this.x, y: this.y }, 0.5);
            pool.recycle(this);
          messenger.dispatch({ type: 'EXPLOSION', source: 'mine', target: this, incoming: body });
          
            body.mine = true;
            setTimeout(function () { 
              body.mine = false;
            }, 10000)
            setTimeout(function () {
              const powerup = opspark.playa.mine(assets, fx, messenger)
            .spawn(1);
            }, 15000)
          makeMine()
        }
        //activate mine power, destroy orb
        }

        /*
         * Because the explosion is async, the mine may exist
         * but have already exploded, so check first to see 
         * if it has integrity before running check to exlode.
         */
      //   if (this.integrity > 0) {
      //     console.log(impact);
      //     this.integrity -= impact;
      //     if (this.integrity <= 0) {
      //       fx
      //         .makeEmitter(2, 3, "rgba(183, 0, 255, 1)", null, [
      //           new Proton.RandomDrift(5, 0, .35)
      //         ])
      //         .emit({ x: this.x, y: this.y }, 0.5);
      //       pool.recycle(this);
      //       messenger.dispatch({ type: 'EXPLOSION', source: 'mine', target: this, incoming: body });
      //     }
      //   }
      // }

      // return mine manager api //
      return mineManager;
    }
  );

}(window, window.opspark, window._));
