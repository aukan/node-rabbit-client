/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['correlation.js']) {
  _$jscoverage['correlation.js'] = [];
  _$jscoverage['correlation.js'][11] = 0;
  _$jscoverage['correlation.js'][12] = 0;
  _$jscoverage['correlation.js'][15] = 0;
  _$jscoverage['correlation.js'][16] = 0;
  _$jscoverage['correlation.js'][19] = 0;
  _$jscoverage['correlation.js'][27] = 0;
  _$jscoverage['correlation.js'][34] = 0;
  _$jscoverage['correlation.js'][35] = 0;
  _$jscoverage['correlation.js'][38] = 0;
  _$jscoverage['correlation.js'][43] = 0;
  _$jscoverage['correlation.js'][53] = 0;
  _$jscoverage['correlation.js'][63] = 0;
  _$jscoverage['correlation.js'][71] = 0;
}
_$jscoverage['correlation.js'][11]++;
function Correlation() {
  _$jscoverage['correlation.js'][12]++;
  Correlation.debug("Created new correlation.");
  _$jscoverage['correlation.js'][15]++;
  if (! (this instanceof Correlation)) {
    _$jscoverage['correlation.js'][16]++;
    return new Correlation();
  }
  _$jscoverage['correlation.js'][19]++;
  Object.defineProperties(this, {id: {value: Math.random().toString(36).substring(2), enumerable: true, configurable: true, writable: false}, key: {get: (function () {
  _$jscoverage['correlation.js'][27]++;
  return ["correlation", this.id].join(".");
}), enumerable: true, configurable: true}});
  _$jscoverage['correlation.js'][34]++;
  require("object-settings").mixin(this);
  _$jscoverage['correlation.js'][35]++;
  require("object-emitter").mixin(this);
  _$jscoverage['correlation.js'][38]++;
  return this;
}
_$jscoverage['correlation.js'][43]++;
Object.defineProperties(Correlation.prototype, {timeout: {value: (function timeout() {
  _$jscoverage['correlation.js'][53]++;
  return this;
}), enumerable: true, configurable: true, writable: true}});
_$jscoverage['correlation.js'][63]++;
Object.defineProperties(module.exports = Correlation, {create: {value: (function create() {
  _$jscoverage['correlation.js'][71]++;
  return new Correlation();
}), enumerable: true, configurable: true, writable: true}, debug: {value: require("debug")("rabbit:correlation"), enumerable: false, writable: true, configurable: true}});
_$jscoverage['correlation.js'].source = ["/**"," * Correlation Response Stream"," *"," * -"," *"," * @constructor"," * @chainable"," * @author potanin"," * @date 8/10/13"," */","function Correlation() {","  Correlation.debug( 'Created new correlation.' );","","  // Make sure context is correct otherwise we could screw up the global scope.","  if( !( this instanceof Correlation ) ) {","    return new Correlation();","  }","","  Object.defineProperties( this, {","    id: {","      value: Math.random().toString( 36 ).substring( 2 ),","      enumerable: true,","      configurable: true,","      writable: false","    },","    key: {","      get: function() { return [ 'correlation', this.id ].join( '.' ) },","      enumerable: true,","      configurable: true","    }","  })","","  // Mixin Settings and EventEmitter","  require( 'object-settings' ).mixin( this );","  require( 'object-emitter' ).mixin( this );","","  // @chainable","  return this;","","}","","// Rabbit Correlation prototype properties.","Object.defineProperties( Correlation.prototype, {","  timeout: {","    /**","     * Job Timeout.","     *","     * @returns {*}","     */","    value: function timeout() {","","      // @chainable","      return this;","","    },","    enumerable: true,","    configurable: true,","    writable: true","  }","})","","// Rabit Correlation constructor properties.","Object.defineProperties( module.exports = Correlation, {","  create: {","    /**","     *","     * @param data","     * @returns {Correlation}","     */","    value: function create() {","      return new Correlation();","    },","    enumerable: true,","    configurable: true,","    writable: true","  },","  debug: {","    value: require( 'debug' )( 'rabbit:correlation' ),","    enumerable: false,","    writable: true,","    configurable: true","  }","});",""];
