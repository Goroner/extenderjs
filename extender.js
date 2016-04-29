function Base () {}

Base.extend = function ( props ) {
  var sup = this;
  var sub = _resolveConstructor( sup, props );
  _resolvePrototype( sup, sub, props );
  _resolveStatics( sup, sub );
  return sub;
};

/**
 *
 * Resolve constructor function here
 *
 */
function _resolveConstructor ( sup, props ) {
  if ( props && props.hasOwnProperty('constructor') ) {
    return props.constructor;
  } else {
    return function () { return sup.apply( this, arguments ); };
  }
}

/**
 *
 * Resolve instance props here
 *
 */
function _resolvePrototype ( sup, sub, props ) {
  Object.assign( sub.prototype, Object.create( sup.prototype), props, { constructor: sub }) ;
}

/**
 *
 * Resolve static props here
 *
 */
function _resolveStatics ( sup, sub ) {
  sub.extend = sup.extend;
}
