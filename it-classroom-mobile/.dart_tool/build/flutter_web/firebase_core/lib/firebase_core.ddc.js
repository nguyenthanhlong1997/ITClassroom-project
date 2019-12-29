define(['dart_sdk', 'packages/firebase_core_platform_interface/firebase_core_platform_interface'], function(dart_sdk, packages__firebase_core_platform_interface__firebase_core_platform_interface) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firebase_core_platform_interface = packages__firebase_core_platform_interface__firebase_core_platform_interface.firebase_core_platform_interface;
  const firebase_options = packages__firebase_core_platform_interface__firebase_core_platform_interface.src__firebase_options;
  const platform_firebase_app = packages__firebase_core_platform_interface__firebase_core_platform_interface.src__platform_firebase_app;
  const firebase_core = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $hashCode = dartx.hashCode;
  let PlatformFirebaseAppToFirebaseApp = () => (PlatformFirebaseAppToFirebaseApp = dart.constFn(dart.fnType(firebase_core.FirebaseApp, [platform_firebase_app.PlatformFirebaseApp])))();
  let ListOfFirebaseApp = () => (ListOfFirebaseApp = dart.constFn(core.List$(firebase_core.FirebaseApp)))();
  const CT = Object.create(null);
  const name$ = dart.privateName(firebase_core, "FirebaseApp.name");
  firebase_core.FirebaseApp = class FirebaseApp extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get options() {
      return async.async(firebase_options.FirebaseOptions, (function* options() {
        let app = (yield firebase_core_platform_interface.FirebaseCorePlatform.instance.appNamed(this.name));
        if (!(app != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_core/src/firebase_app.dart", 24, 12, "app != null");
        return app.options;
      }).bind(this));
    }
    static appNamed(name) {
      return async.async(firebase_core.FirebaseApp, function* appNamed() {
        let app = (yield firebase_core_platform_interface.FirebaseCorePlatform.instance.appNamed(name));
        return app == null ? null : new firebase_core.FirebaseApp.new({name: app.name});
      });
    }
    static configure(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return async.async(firebase_core.FirebaseApp, function* configure() {
        if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_core/src/firebase_app.dart", 50, 12, "name != null");
        if (!(name != firebase_core.FirebaseApp.defaultAppName)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_core/src/firebase_app.dart", 51, 12, "name != defaultAppName");
        if (!(options != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_core/src/firebase_app.dart", 52, 12, "options != null");
        if (!(options.googleAppID != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_core/src/firebase_app.dart", 53, 12, "options.googleAppID != null");
        let existingApp = (yield firebase_core.FirebaseApp.appNamed(name));
        if (existingApp != null) {
          return existingApp;
        }
        yield firebase_core_platform_interface.FirebaseCorePlatform.instance.configure(name, options);
        return new firebase_core.FirebaseApp.new({name: name});
      });
    }
    static allApps() {
      return async.async(ListOfFirebaseApp(), function* allApps() {
        let t0, t0$;
        let result = (yield firebase_core_platform_interface.FirebaseCorePlatform.instance.allApps());
        t0$ = (t0 = result, t0 == null ? null : t0[$map](firebase_core.FirebaseApp, dart.fn(app => new firebase_core.FirebaseApp.new({name: app.name}), PlatformFirebaseAppToFirebaseApp())));
        return t0$ == null ? null : t0$[$toList]();
      });
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!firebase_core.FirebaseApp.is(other)) return false;
      return dart.equals(dart.dload(other, 'name'), this.name);
    }
    get hashCode() {
      return dart.hashCode(this.name);
    }
    toString() {
      return dart.str(dart.wrapType(firebase_core.FirebaseApp)) + "(" + dart.str(this.name) + ")";
    }
  };
  (firebase_core.FirebaseApp.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    this[name$] = name;
    if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_core/src/firebase_app.dart", 9, 47, "name != null");
    ;
  }).prototype = firebase_core.FirebaseApp.prototype;
  dart.addTypeTests(firebase_core.FirebaseApp);
  dart.setGetterSignature(firebase_core.FirebaseApp, () => ({
    __proto__: dart.getGetters(firebase_core.FirebaseApp.__proto__),
    options: async.Future$(firebase_options.FirebaseOptions)
  }));
  dart.setLibraryUri(firebase_core.FirebaseApp, "package:firebase_core/firebase_core.dart");
  dart.setFieldSignature(firebase_core.FirebaseApp, () => ({
    __proto__: dart.getFields(firebase_core.FirebaseApp.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(firebase_core.FirebaseApp, ['_equals', 'toString']);
  dart.defineExtensionAccessors(firebase_core.FirebaseApp, ['hashCode']);
  dart.defineLazy(firebase_core.FirebaseApp, {
    /*firebase_core.FirebaseApp.defaultAppName*/get defaultAppName() {
      return !true && dart.test(io.Platform.isIOS) ? "__FIRAPP_DEFAULT" : "[DEFAULT]";
    },
    /*firebase_core.FirebaseApp.instance*/get instance() {
      return new firebase_core.FirebaseApp.new({name: firebase_core.FirebaseApp.defaultAppName});
    }
  });
  dart.trackLibraries("packages/firebase_core/firebase_core", {
    "package:firebase_core/firebase_core.dart": firebase_core
  }, {
    "package:firebase_core/firebase_core.dart": ["src/firebase_app.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/firebase_app.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAWe;;;;;;;AASuB;AACR,mBACtB,MAA2B,AAAS,wEAAS;AACjD,cAAO,AAAI,GAAD,IAAI;AACd,cAAO,AAAI,IAAD;MACZ;;oBAI2C;AAAR;AACP,mBACtB,MAA2B,AAAS,wEAAS,IAAI;AACrD,cAAO,AAAI,IAAD,IAAI,OAAO,OAAO,yCAAkB,AAAI,GAAD;MACnD;;;UAamB;UACS;AAFQ;AAIlC,cAAO,AAAK,IAAD,IAAI;AACf,cAAO,AAAK,IAAD,IAAI;AACf,cAAO,AAAQ,OAAD,IAAI;AAClB,cAAO,AAAQ,AAAY,OAAb,gBAAgB;AACZ,2BAAc,MAAkB,mCAAS,IAAI;AAC/D,YAAI,WAAW,IAAI;AACjB,gBAAO,YAAW;;AAEwC,QAA5D,MAA2B,AAAS,yEAAU,IAAI,EAAE,OAAO;AAC3D,cAAO,0CAAkB,IAAI;MAC/B;;;AAIwC;;AACN,sBAC5B,MAA2B,AAAS;AACxC,oBAAO,MAAM,eAAN,OACD,oCACA,QAAqB,OAAQ,yCAAkB,AAAI,GAAD;6BAFjD,OAID;MACR;;;UAGyB;AACvB,UAAI,AAAU,SAAM,KAAK,EAAG,MAAO;AACnC,WAAU,6BAAN,KAAK,GAAkB,MAAO;AAClC,YAAkB,aAAL,WAAN,KAAK,WAAS;IACvB;;AAGoB,YAAK,eAAL;IAAa;;AAGZ,YAAqB,UAAnB,4CAAW,eAAE,aAAI;IAAE;;;QA5Ed;;UAAgB,AAAK,IAAD,IAAI;;EAAK;;;;;;;;;;;;;;MAKrC,wCAAc;YACrB,oBAAY,qBAAS,qBAAqB;;MAsB9B,kCAAQ;YAAG,0CAAkB","file":"firebase_core.ddc.js"}');
  // Exports:
  return {
    firebase_core: firebase_core
  };
});

//# sourceMappingURL=firebase_core.ddc.js.map
