/**
 * @class
 * @license
 * a terrible, bloated vector library written in ES5
 * 
 * vec2.js 
 * Copyright 2023 TheBlueWyvern
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var vec2 = (function() {
  /**
   * @param {Number} x
   * @param {Number} y
   * @returns {vec2}
   * construct new 2-component vector
   */
  vec2 = function(x, y) {
    return Object.create(vec2.prototype, {
      x: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: x || 0
      },
      y: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: y || 0
      }
    });
  };
  return (vec2 = Object.assign(vec2, {
    // static methods
    /**
     * @static
     * @param {Number} r magnitude of vector
     * @param {Number} t direction of vector, angle in radians
     * @returns {vec2}
     * construct new vector from polar coordinates
     */
    fromPolar: function(r, t) {
      return vec2(Math.cos(t) * r, Math.sin(t) * r);
    },

    /**
     * @static
     * @param {vec2} v1
     * @param {vec2} v2
     * @returns {vec2}
     * return sum of two vectors as new vector
     */
    add: function(v1, v2) {
      return vec2(v1.x + v2.x, v1.y + v2.y);
    },
    /**
     * @static
     * @param {vec2} v1
     * @param {vec2} v2
     * @returns {vec2}
     * return difference of two vectors as new vector
     */
    sub: function(v1, v2) {
      return vec2(v1.x - v2.x, v1.y - v2.y);
    },

    /**
     * @static
     * @param {vec2} v vector
     * @param {Number} s scalar to multiply by
     * @returns {vec2}
     * return new vector multiplied by a scalar
     */
    smul: function(v, s) {
      return vec2(v.x * s, v.y * s);
    },
    /**
     * @static
     * @param {vec2} v vector
     * @param {Number} s scalar to divide by
     * @returns {vec2}
     * return new vector divided by a scalar
     */
    sdiv: function(v, s) {
      return vec2(v.x / s, v.y / s);
    },

    /**
     * @static
     * @param {vec2} v1
     * @param {vec2} v2
     * @returns {Number}
     * take dot product of two vectors
     */
    dot: function(v1, v2) {
      return v1.x * v2.x + v1.y * v2.y;
    },

    /**
     * @static
     * @param {vec2} v1
     * @param {vec2} v2
     * @param {Number} t interpolation amount
     * @returns {vec2}
     * linearly interpolate two vectors and return result as new vector
     */
    lerp: function(v1, v2, t) {
      return vec2(v1.x + t * (v2.x - v1.x), v1.y + t * (v2.y - v1.y));
    },

    // instance methods
    prototype: {
      toString: function() {
        return "vec2 { " + this.x + ", " + this.y + " }";
      },
      /**
       * @returns {vec2}
       * copy vector into new vector
       */
      copy: function() {
        return vec2(this.x, this.y);
      },
      /**
       * @typedef {Object} PolarCoords
       * @property {Number} r magnitude of vector
       * @property {Number} t direction of vector, angle in radians
       * 
       * @returns {PolarCoords}
       * return tuple representing vector in polar coordinates
       */
      toPolar: function() {
        return {
          r: Math.sqrt(this.x * this.x + this.y * this.y),
          t: Math.atan2(this.y, this.x)
        };
      },
      
      /**
       * @returns {Number}
       * calculate magnitude of vector
       */
      mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      },
      /**
       * @returns {Number}
       * calculate squared magnitude of vector
       */
      mag2: function() {
        return this.x * this.x + this.y * this.y;
      },
      /**
       * @returns {vec2}
       * create new unit vector with same direction
       */
      norm: function() {
        var m = Math.sqrt(this.x * this.x + this.y * this.y) || 1;
        return vec2(this.x / m, this.y / m);
      },
      /**
       * @returns {vec2}
       * convert to unit vector with same direction
       */
      normalize: function() {
        var m = Math.sqrt(this.x * this.x + this.y * this.y) || 1;
        this.x /= m;
        this.y /= m;
        return this;
      },
  
      /**
       * @param {vec2} v
       * @returns {vec2}
       * sum two vectors and assign result to first
       */
      add: function(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
      },
      /**
       * @param {vec2} v
       * @returns {vec2}
       * subtract two vectors and assign result to first
       */
      sub: function(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
      },
  
      /**
       * @param {Number} s scalar to multiply by
       * @returns {vec2}
       * multiply by scalar and assign to vector
       */
      smul: function(s) {
        this.x *= s;
        this.y *= s;
        return this;
      },
      /**
       * @param {Number} s scalar to divide by
       * @returns {vec2}
       * divide by scalar and assign to vector
       */
      sdiv: function(s) {
        this.x /= s;
        this.y /= s;
        return this;
      },
  
      /**
       * @param {vec2} v
       * @param {Number} t interpolation amount
       * @returns {vec2}
       * linearly interpolate with second vector and assign to first vector
       */
      lerp: function(v, t) {
        this.x += t * (v.x - this.x);
        this.y += t * (v.y - this.y);
        return this;
      }
    }
  }));
})();
