define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hashcode = Object.create(dart.library);
  const $hashCode = dartx.hashCode;
  const $fold = dartx.fold;
  const $rightShift = dartx['>>'];
  let intAnddynamicToint = () => (intAnddynamicToint = dart.constFn(dart.fnType(core.int, [core.int, dart.dynamic])))();
  const CT = Object.create(null);
  hashcode.hashObjects = function hashObjects(objects) {
    return hashcode._finish(objects[$fold](core.int, 0, dart.fn((h, i) => hashcode._combine(h, dart.hashCode(i)), intAnddynamicToint())));
  };
  hashcode.hash2 = function hash2(a, b) {
    return hashcode._finish(hashcode._combine(hashcode._combine(0, dart.hashCode(a)), dart.hashCode(b)));
  };
  hashcode.hash3 = function hash3(a, b, c) {
    return hashcode._finish(hashcode._combine(hashcode._combine(hashcode._combine(0, dart.hashCode(a)), dart.hashCode(b)), dart.hashCode(c)));
  };
  hashcode.hash4 = function hash4(a, b, c, d) {
    return hashcode._finish(hashcode._combine(hashcode._combine(hashcode._combine(hashcode._combine(0, dart.hashCode(a)), dart.hashCode(b)), dart.hashCode(c)), dart.hashCode(d)));
  };
  hashcode._combine = function _combine(hash, value) {
    hash = 536870911 & dart.notNull(hash) + dart.notNull(value);
    hash = 536870911 & dart.notNull(hash) + ((524287 & dart.notNull(hash)) << 10);
    return (dart.notNull(hash) ^ hash[$rightShift](6)) >>> 0;
  };
  hashcode._finish = function _finish(hash) {
    hash = 536870911 & dart.notNull(hash) + ((67108863 & dart.notNull(hash)) << 3);
    hash = (dart.notNull(hash) ^ hash[$rightShift](11)) >>> 0;
    return 536870911 & dart.notNull(hash) + ((16383 & dart.notNull(hash)) << 15);
  };
  dart.trackLibraries("packages/quiver_hashcode/hashcode", {
    "package:quiver_hashcode/hashcode.dart": hashcode
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hashcode.dart"],"names":[],"mappings":";;;;;;;;;;;8CAkByB;AACrB,4BAAQ,AAAQ,OAAD,kBAAM,GAAG,SAAC,GAAG,MAAM,kBAAS,CAAC,EAAI,cAAF,CAAC;EAAY;kCAGrD,GAAG;AAAM,4BAAQ,kBAAS,kBAAS,GAAK,cAAF,CAAC,IAAc,cAAF,CAAC;EAAW;kCAG/D,GAAG,GAAG;AAAM,4BAClB,kBAAS,kBAAS,kBAAS,GAAK,cAAF,CAAC,IAAc,cAAF,CAAC,IAAc,cAAF,CAAC;EAAW;kCAG9D,GAAG,GAAG,GAAG;AAAM,4BAAQ,kBAC7B,kBAAS,kBAAS,kBAAS,GAAK,cAAF,CAAC,IAAc,cAAF,CAAC,IAAc,cAAF,CAAC,IACvD,cAAF,CAAC;EAAW;wCAIC,MAAU;AACS,IAAlC,OAAO,AAAW,YAAQ,aAAL,IAAI,iBAAG,KAAK;AACuB,IAAxD,OAAO,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,sBAAE,IAAI,MAAK;AACpD,UAAY,eAAL,IAAI,IAAI,AAAK,IAAD,cAAI;EACzB;sCAEgB;AACyC,IAAvD,OAAO,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,wBAAE,IAAI,MAAK;AAC1B,IAA1B,OAAY,cAAL,IAAI,IAAI,AAAK,IAAD,cAAI;AACvB,UAAO,AAAW,aAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,qBAAE,IAAI,MAAK;EACtD","file":"hashcode.ddc.js"}');
  // Exports:
  return {
    hashcode: hashcode
  };
});

//# sourceMappingURL=hashcode.ddc.js.map
