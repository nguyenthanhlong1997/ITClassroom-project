define(['dart_sdk', 'packages/firebase_auth/firebase_auth', 'packages/shared_preferences/shared_preferences'], function(dart_sdk, packages__firebase_auth__firebase_auth, packages__shared_preferences__shared_preferences) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firebase_auth = packages__firebase_auth__firebase_auth.firebase_auth;
  const shared_preferences = packages__shared_preferences__shared_preferences.shared_preferences;
  const authentication = Object.create(dart.library);
  const CT = Object.create(null);
  authentication.BaseAuth = class BaseAuth extends core.Object {};
  (authentication.BaseAuth.new = function() {
    ;
  }).prototype = authentication.BaseAuth.prototype;
  dart.addTypeTests(authentication.BaseAuth);
  dart.setLibraryUri(authentication.BaseAuth, "package:demo/services/authentication.dart");
  const _firebaseAuth = dart.privateName(authentication, "_firebaseAuth");
  authentication.Auth = class Auth extends core.Object {
    signIn(email, password) {
      return async.async(core.String, function* signIn() {
        let result = (yield firebase_auth.FirebaseAuth.instance.signInWithEmailAndPassword({email: email, password: password}));
        let prefs = (yield shared_preferences.SharedPreferences.getInstance());
        prefs.setString("uid", result.user.uid);
        prefs.setString("email", result.user.email);
        return result.user.uid;
      });
    }
    signUp(email, password) {
      return async.async(core.String, function* signUp() {
        let result = (yield firebase_auth.FirebaseAuth.instance.createUserWithEmailAndPassword({email: email, password: password}));
        return result.user.uid;
      });
    }
    getCurrentUser() {
      return async.async(firebase_auth.FirebaseUser, (function* getCurrentUser() {
        let user = (yield this[_firebaseAuth].currentUser());
        return user;
      }).bind(this));
    }
    signOut() {
      return async.async(dart.void, (function* signOut() {
        return this[_firebaseAuth].signOut();
      }).bind(this));
    }
  };
  (authentication.Auth.new = function() {
    this[_firebaseAuth] = firebase_auth.FirebaseAuth.instance;
    ;
  }).prototype = authentication.Auth.prototype;
  dart.addTypeTests(authentication.Auth);
  authentication.Auth[dart.implements] = () => [authentication.BaseAuth];
  dart.setMethodSignature(authentication.Auth, () => ({
    __proto__: dart.getMethods(authentication.Auth.__proto__),
    signIn: dart.fnType(async.Future$(core.String), [core.String, core.String]),
    signUp: dart.fnType(async.Future$(core.String), [core.String, core.String]),
    getCurrentUser: dart.fnType(async.Future$(firebase_auth.FirebaseUser), []),
    signOut: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setLibraryUri(authentication.Auth, "package:demo/services/authentication.dart");
  dart.setFieldSignature(authentication.Auth, () => ({
    __proto__: dart.getFields(authentication.Auth.__proto__),
    [_firebaseAuth]: dart.finalFieldType(firebase_auth.FirebaseAuth)
  }));
  dart.trackLibraries("packages/demo/services/authentication", {
    "package:demo/services/authentication.dart": authentication
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["authentication.dart"],"names":[],"mappings":";;;;;;;;;;;;;EASA;;;;;WAK+B,OAAc;AAAtB;AACf,sBAAS,MAAmB,AAC3B,uEAAkC,KAAK,YAAY,QAAQ;AAC1D,qBAAQ,MAAwB;AACC,QAAvC,AAAM,KAAD,WAAW,OAAO,AAAO,AAAK,MAAN;AACc,QAA3C,AAAM,KAAD,WAAW,SAAS,AAAO,AAAK,MAAN;AAC/B,cAAO,AAAO,AAAK,OAAN;MACf;;WAE6B,OAAc;AAAtB;AACf,sBAAS,MAAmB,AAC3B,2EAAsC,KAAK,YAAY,QAAQ;AACpE,cAAO,AAAO,AAAK,OAAN;MACf;;;AAEmC;AACpB,oBAAO,MAAM,AAAc;AACxC,cAAO,KAAI;MACb;;;AAEoB;AAClB,cAAO,AAAc;MACvB;;;;IAxBmB,sBAA6B;;EAyBlD","file":"authentication.ddc.js"}');
  // Exports:
  return {
    services__authentication: authentication
  };
});

//# sourceMappingURL=authentication.ddc.js.map
