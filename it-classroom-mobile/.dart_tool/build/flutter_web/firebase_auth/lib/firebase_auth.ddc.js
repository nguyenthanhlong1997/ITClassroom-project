define(['dart_sdk', 'packages/flutter/src/gestures/arena', 'packages/firebase_core/firebase_core'], function(dart_sdk, packages__flutter__src__gestures__arena, packages__firebase_core__firebase_core) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const message_codec = packages__flutter__src__gestures__arena.src__services__message_codec;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const firebase_core = packages__firebase_core__firebase_core.firebase_core;
  const firebase_auth = Object.create(dart.library);
  const $_get = dartx._get;
  const $runtimeType = dartx.runtimeType;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  const $toString = dartx.toString;
  const $cast = dartx.cast;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let StreamControllerOfFirebaseUser = () => (StreamControllerOfFirebaseUser = dart.constFn(async.StreamController$(firebase_auth.FirebaseUser)))();
  let IdentityMapOfint$StreamControllerOfFirebaseUser = () => (IdentityMapOfint$StreamControllerOfFirebaseUser = dart.constFn(_js_helper.IdentityMap$(core.int, StreamControllerOfFirebaseUser())))();
  let IdentityMapOfint$MapOfString$dynamic = () => (IdentityMapOfint$MapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.int, MapOfString$dynamic())))();
  let FutureOrOfint = () => (FutureOrOfint = dart.constFn(async.FutureOr$(core.int)))();
  let dynamicToFutureOrOfint = () => (dynamicToFutureOrOfint = dart.constFn(dart.fnType(FutureOrOfint(), [dart.dynamic])))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let intToFutureOfNull = () => (intToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [core.int])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let AuthCredentialTovoid = () => (AuthCredentialTovoid = dart.constFn(dart.fnType(dart.void, [firebase_auth.AuthCredential])))();
  let AuthExceptionTovoid = () => (AuthExceptionTovoid = dart.constFn(dart.fnType(dart.void, [firebase_auth.AuthException])))();
  let StringAndintTovoid = () => (StringAndintTovoid = dart.constFn(dart.fnType(dart.void, [core.String], [core.int])))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let dynamicToUserInfo = () => (dynamicToUserInfo = dart.constFn(dart.fnType(firebase_auth.UserInfo, [dart.dynamic])))();
  let ListOfUserInfo = () => (ListOfUserInfo = dart.constFn(core.List$(firebase_auth.UserInfo)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C2 || CT.C2
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "plugins.flutter.io/firebase_auth"
      });
    }
  });
  firebase_auth.EmailAuthProvider = class EmailAuthProvider extends core.Object {
    static getCredential(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let password = opts && 'password' in opts ? opts.password : null;
      return new firebase_auth.AuthCredential.__("password", new (IdentityMapOfString$String()).from(["email", email, "password", password]));
    }
    static getCredentialWithLink(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let link = opts && 'link' in opts ? opts.link : null;
      return new firebase_auth.AuthCredential.__("password", new (IdentityMapOfString$String()).from(["email", email, "link", link]));
    }
  };
  (firebase_auth.EmailAuthProvider.new = function() {
    ;
  }).prototype = firebase_auth.EmailAuthProvider.prototype;
  dart.addTypeTests(firebase_auth.EmailAuthProvider);
  dart.setLibraryUri(firebase_auth.EmailAuthProvider, "package:firebase_auth/firebase_auth.dart");
  dart.defineLazy(firebase_auth.EmailAuthProvider, {
    /*firebase_auth.EmailAuthProvider.providerId*/get providerId() {
      return "password";
    }
  });
  firebase_auth.FacebookAuthProvider = class FacebookAuthProvider extends core.Object {
    static getCredential(opts) {
      let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
      return new firebase_auth.AuthCredential.__("facebook.com", new (IdentityMapOfString$String()).from(["accessToken", accessToken]));
    }
  };
  (firebase_auth.FacebookAuthProvider.new = function() {
    ;
  }).prototype = firebase_auth.FacebookAuthProvider.prototype;
  dart.addTypeTests(firebase_auth.FacebookAuthProvider);
  dart.setLibraryUri(firebase_auth.FacebookAuthProvider, "package:firebase_auth/firebase_auth.dart");
  dart.defineLazy(firebase_auth.FacebookAuthProvider, {
    /*firebase_auth.FacebookAuthProvider.providerId*/get providerId() {
      return "facebook.com";
    }
  });
  firebase_auth.GithubAuthProvider = class GithubAuthProvider extends core.Object {
    static getCredential(opts) {
      let token = opts && 'token' in opts ? opts.token : null;
      return new firebase_auth.AuthCredential.__("github.com", new (IdentityMapOfString$String()).from(["token", token]));
    }
  };
  (firebase_auth.GithubAuthProvider.new = function() {
    ;
  }).prototype = firebase_auth.GithubAuthProvider.prototype;
  dart.addTypeTests(firebase_auth.GithubAuthProvider);
  dart.setLibraryUri(firebase_auth.GithubAuthProvider, "package:firebase_auth/firebase_auth.dart");
  dart.defineLazy(firebase_auth.GithubAuthProvider, {
    /*firebase_auth.GithubAuthProvider.providerId*/get providerId() {
      return "github.com";
    }
  });
  firebase_auth.GoogleAuthProvider = class GoogleAuthProvider extends core.Object {
    static getCredential(opts) {
      let idToken = opts && 'idToken' in opts ? opts.idToken : null;
      let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
      return new firebase_auth.AuthCredential.__("google.com", new (IdentityMapOfString$String()).from(["idToken", idToken, "accessToken", accessToken]));
    }
  };
  (firebase_auth.GoogleAuthProvider.new = function() {
    ;
  }).prototype = firebase_auth.GoogleAuthProvider.prototype;
  dart.addTypeTests(firebase_auth.GoogleAuthProvider);
  dart.setLibraryUri(firebase_auth.GoogleAuthProvider, "package:firebase_auth/firebase_auth.dart");
  dart.defineLazy(firebase_auth.GoogleAuthProvider, {
    /*firebase_auth.GoogleAuthProvider.providerId*/get providerId() {
      return "google.com";
    }
  });
  firebase_auth.PhoneAuthProvider = class PhoneAuthProvider extends core.Object {
    static getCredential(opts) {
      let verificationId = opts && 'verificationId' in opts ? opts.verificationId : null;
      let smsCode = opts && 'smsCode' in opts ? opts.smsCode : null;
      return new firebase_auth.AuthCredential.__("phone", new (IdentityMapOfString$String()).from(["verificationId", verificationId, "smsCode", smsCode]));
    }
    static _getCredentialFromObject(opts) {
      let jsonObject = opts && 'jsonObject' in opts ? opts.jsonObject : null;
      return new firebase_auth.AuthCredential.__("phone", new (IdentityMapOfString$String()).from(["jsonObject", jsonObject]));
    }
  };
  (firebase_auth.PhoneAuthProvider.new = function() {
    ;
  }).prototype = firebase_auth.PhoneAuthProvider.prototype;
  dart.addTypeTests(firebase_auth.PhoneAuthProvider);
  dart.setLibraryUri(firebase_auth.PhoneAuthProvider, "package:firebase_auth/firebase_auth.dart");
  dart.defineLazy(firebase_auth.PhoneAuthProvider, {
    /*firebase_auth.PhoneAuthProvider.providerId*/get providerId() {
      return "phone";
    }
  });
  firebase_auth.TwitterAuthProvider = class TwitterAuthProvider extends core.Object {
    static getCredential(opts) {
      let authToken = opts && 'authToken' in opts ? opts.authToken : null;
      let authTokenSecret = opts && 'authTokenSecret' in opts ? opts.authTokenSecret : null;
      return new firebase_auth.AuthCredential.__("twitter.com", new (IdentityMapOfString$String()).from(["authToken", authToken, "authTokenSecret", authTokenSecret]));
    }
  };
  (firebase_auth.TwitterAuthProvider.new = function() {
    ;
  }).prototype = firebase_auth.TwitterAuthProvider.prototype;
  dart.addTypeTests(firebase_auth.TwitterAuthProvider);
  dart.setLibraryUri(firebase_auth.TwitterAuthProvider, "package:firebase_auth/firebase_auth.dart");
  dart.defineLazy(firebase_auth.TwitterAuthProvider, {
    /*firebase_auth.TwitterAuthProvider.providerId*/get providerId() {
      return "twitter.com";
    }
  });
  const _data$ = dart.privateName(firebase_auth, "_data");
  firebase_auth.AdditionalUserInfo = class AdditionalUserInfo extends core.Object {
    get isNewUser() {
      return core.bool._check(this[_data$][$_get]("isNewUser"));
    }
    get username() {
      return core.String._check(this[_data$][$_get]("username"));
    }
    get providerId() {
      return core.String._check(this[_data$][$_get]("providerId"));
    }
    get profile() {
      let t0;
      return MapOfString$dynamic()._check((t0 = this[_data$][$_get]("profile"), t0 == null ? null : dart.dgsend(t0, [core.String, dart.dynamic], 'cast', [])));
    }
  };
  (firebase_auth.AdditionalUserInfo.__ = function(_data) {
    this[_data$] = _data;
    ;
  }).prototype = firebase_auth.AdditionalUserInfo.prototype;
  dart.addTypeTests(firebase_auth.AdditionalUserInfo);
  dart.setGetterSignature(firebase_auth.AdditionalUserInfo, () => ({
    __proto__: dart.getGetters(firebase_auth.AdditionalUserInfo.__proto__),
    isNewUser: core.bool,
    username: core.String,
    providerId: core.String,
    profile: core.Map$(core.String, dart.dynamic)
  }));
  dart.setLibraryUri(firebase_auth.AdditionalUserInfo, "package:firebase_auth/firebase_auth.dart");
  dart.setFieldSignature(firebase_auth.AdditionalUserInfo, () => ({
    __proto__: dart.getFields(firebase_auth.AdditionalUserInfo.__proto__),
    [_data$]: dart.finalFieldType(core.Map)
  }));
  const _provider$ = dart.privateName(firebase_auth, "_provider");
  firebase_auth.AuthCredential = class AuthCredential extends core.Object {};
  (firebase_auth.AuthCredential.__ = function(_provider, _data) {
    this[_provider$] = _provider;
    this[_data$] = _data;
    ;
  }).prototype = firebase_auth.AuthCredential.prototype;
  dart.addTypeTests(firebase_auth.AuthCredential);
  dart.setLibraryUri(firebase_auth.AuthCredential, "package:firebase_auth/firebase_auth.dart");
  dart.setFieldSignature(firebase_auth.AuthCredential, () => ({
    __proto__: dart.getFields(firebase_auth.AuthCredential.__proto__),
    [_provider$]: dart.finalFieldType(core.String),
    [_data$]: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  const code$ = dart.privateName(firebase_auth, "AuthException.code");
  const message$ = dart.privateName(firebase_auth, "AuthException.message");
  firebase_auth.AuthException = class AuthException extends core.Object {
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
  };
  (firebase_auth.AuthException.new = function(code, message) {
    this[code$] = code;
    this[message$] = message;
    ;
  }).prototype = firebase_auth.AuthException.prototype;
  dart.addTypeTests(firebase_auth.AuthException);
  firebase_auth.AuthException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(firebase_auth.AuthException, "package:firebase_auth/firebase_auth.dart");
  dart.setFieldSignature(firebase_auth.AuthException, () => ({
    __proto__: dart.getFields(firebase_auth.AuthException.__proto__),
    code: dart.finalFieldType(core.String),
    message: dart.finalFieldType(core.String)
  }));
  const user = dart.privateName(firebase_auth, "AuthResult.user");
  firebase_auth.AuthResult = class AuthResult extends core.Object {
    get user() {
      return this[user];
    }
    set user(value) {
      super.user = value;
    }
    get additionalUserInfo() {
      return this[_data$][$_get]("additionalUserInfo") == null ? null : new firebase_auth.AdditionalUserInfo.__(core.Map._check(this[_data$][$_get]("additionalUserInfo")));
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this[_data$]) + ")";
    }
  };
  (firebase_auth.AuthResult.__ = function(_data, app) {
    this[_data$] = _data;
    this[user] = new firebase_auth.FirebaseUser.__(MapOfString$dynamic()._check(dart.dgsend(_data[$_get]("user"), [core.String, dart.dynamic], 'cast', [])), app);
    ;
  }).prototype = firebase_auth.AuthResult.prototype;
  dart.addTypeTests(firebase_auth.AuthResult);
  dart.setGetterSignature(firebase_auth.AuthResult, () => ({
    __proto__: dart.getGetters(firebase_auth.AuthResult.__proto__),
    additionalUserInfo: firebase_auth.AdditionalUserInfo
  }));
  dart.setLibraryUri(firebase_auth.AuthResult, "package:firebase_auth/firebase_auth.dart");
  dart.setFieldSignature(firebase_auth.AuthResult, () => ({
    __proto__: dart.getFields(firebase_auth.AuthResult.__proto__),
    [_data$]: dart.finalFieldType(core.Map$(core.String, dart.dynamic)),
    user: dart.finalFieldType(firebase_auth.FirebaseUser)
  }));
  dart.defineExtensionMethods(firebase_auth.AuthResult, ['toString']);
  const _authStateChangedControllers = dart.privateName(firebase_auth, "_authStateChangedControllers");
  const _phoneAuthCallbacks = dart.privateName(firebase_auth, "_phoneAuthCallbacks");
  const _callHandler = dart.privateName(firebase_auth, "_callHandler");
  const _onAuthStageChangedHandler = dart.privateName(firebase_auth, "_onAuthStageChangedHandler");
  const app$ = dart.privateName(firebase_auth, "FirebaseAuth.app");
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C2;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C1;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C0;
  firebase_auth.FirebaseAuth = class FirebaseAuth extends core.Object {
    get app() {
      return this[app$];
    }
    set app(value) {
      super.app = value;
    }
    static fromApp(app) {
      if (!(app != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 20, 12, "app != null");
      return new firebase_auth.FirebaseAuth.__(app);
    }
    get onAuthStateChanged() {
      let _handle = null;
      let controller = null;
      controller = StreamControllerOfFirebaseUser().broadcast({onListen: dart.fn(() => {
          _handle = firebase_auth.FirebaseAuth.channel.invokeMethod(core.int, "startListeningAuthState", new (IdentityMapOfString$String()).from(["app", this.app.name])).then(core.int, dart.fn(v => FutureOrOfint()._check(v), dynamicToFutureOrOfint()));
          _handle.then(core.Null, dart.fn(handle => {
            this[_authStateChangedControllers][$_set](handle, controller);
          }, intToNull()));
        }, VoidToNull()), onCancel: dart.fn(() => {
          _handle.then(core.Null, dart.fn(handle => async.async(core.Null, (function*() {
            yield firebase_auth.FirebaseAuth.channel.invokeMethod(dart.void, "stopListeningAuthState", new (IdentityMapOfString$dynamic()).from(["id", handle, "app", this.app.name]));
            this[_authStateChangedControllers][$remove](handle);
          }).bind(this)), intToFutureOfNull()));
        }, VoidToNull())});
      return controller.stream;
    }
    signInAnonymously() {
      return async.async(firebase_auth.AuthResult, (function* signInAnonymously() {
        let data = (yield firebase_auth.FirebaseAuth.channel.invokeMapMethod(core.String, dart.dynamic, "signInAnonymously", new (IdentityMapOfString$String()).from(["app", this.app.name])));
        let authResult = new firebase_auth.AuthResult.__(data, this.app);
        return authResult;
      }).bind(this));
    }
    createUserWithEmailAndPassword(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let password = opts && 'password' in opts ? opts.password : null;
      return async.async(firebase_auth.AuthResult, (function* createUserWithEmailAndPassword() {
        if (!(email != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 95, 12, "email != null");
        if (!(password != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 96, 12, "password != null");
        let data = (yield firebase_auth.FirebaseAuth.channel.invokeMapMethod(core.String, dart.dynamic, "createUserWithEmailAndPassword", new (IdentityMapOfString$String()).from(["email", email, "password", password, "app", this.app.name])));
        let authResult = new firebase_auth.AuthResult.__(data, this.app);
        return authResult;
      }).bind(this));
    }
    fetchSignInMethodsForEmail(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      return async.async(ListOfString(), (function* fetchSignInMethodsForEmail() {
        if (!(email != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 119, 12, "email != null");
        return yield firebase_auth.FirebaseAuth.channel.invokeListMethod(core.String, "fetchSignInMethodsForEmail", new (IdentityMapOfString$String()).from(["email", email, "app", this.app.name]));
      }).bind(this));
    }
    sendPasswordResetEmail(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      return async.async(dart.void, (function* sendPasswordResetEmail() {
        if (!(email != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 136, 12, "email != null");
        return yield firebase_auth.FirebaseAuth.channel.invokeMethod(dart.void, "sendPasswordResetEmail", new (IdentityMapOfString$String()).from(["email", email, "app", this.app.name]));
      }).bind(this));
    }
    sendSignInWithEmailLink(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let url = opts && 'url' in opts ? opts.url : null;
      let handleCodeInApp = opts && 'handleCodeInApp' in opts ? opts.handleCodeInApp : null;
      let iOSBundleID = opts && 'iOSBundleID' in opts ? opts.iOSBundleID : null;
      let androidPackageName = opts && 'androidPackageName' in opts ? opts.androidPackageName : null;
      let androidInstallIfNotAvailable = opts && 'androidInstallIfNotAvailable' in opts ? opts.androidInstallIfNotAvailable : null;
      let androidMinimumVersion = opts && 'androidMinimumVersion' in opts ? opts.androidMinimumVersion : null;
      return async.async(dart.void, (function* sendSignInWithEmailLink() {
        if (!(email != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 153, 12, "email != null");
        if (!(url != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 154, 12, "url != null");
        if (!(handleCodeInApp != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 155, 12, "handleCodeInApp != null");
        if (!(iOSBundleID != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 156, 12, "iOSBundleID != null");
        if (!(androidPackageName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 157, 12, "androidPackageName != null");
        if (!(androidInstallIfNotAvailable != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 158, 12, "androidInstallIfNotAvailable != null");
        if (!(androidMinimumVersion != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 159, 12, "androidMinimumVersion != null");
        yield firebase_auth.FirebaseAuth.channel.invokeMethod(dart.void, "sendLinkToEmail", new (IdentityMapOfString$dynamic()).from(["email", email, "url", url, "handleCodeInApp", handleCodeInApp, "iOSBundleID", iOSBundleID, "androidPackageName", androidPackageName, "androidInstallIfNotAvailable", androidInstallIfNotAvailable, "androidMinimumVersion", androidMinimumVersion, "app", this.app.name]));
      }).bind(this));
    }
    isSignInWithEmailLink(link) {
      return async.async(core.bool, (function* isSignInWithEmailLink() {
        return yield firebase_auth.FirebaseAuth.channel.invokeMethod(core.bool, "isSignInWithEmailLink", new (IdentityMapOfString$String()).from(["link", link, "app", this.app.name]));
      }).bind(this));
    }
    signInWithEmailAndLink(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let link = opts && 'link' in opts ? opts.link : null;
      return async.async(firebase_auth.AuthResult, (function* signInWithEmailAndLink() {
        let data = (yield firebase_auth.FirebaseAuth.channel.invokeMapMethod(core.String, dart.dynamic, "signInWithEmailAndLink", new (IdentityMapOfString$dynamic()).from(["app", this.app.name, "email", email, "link", link])));
        let authResult = new firebase_auth.AuthResult.__(data, this.app);
        return authResult;
      }).bind(this));
    }
    signInWithEmailAndPassword(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let password = opts && 'password' in opts ? opts.password : null;
      if (!(email != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 224, 12, "email != null");
      if (!(password != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 225, 12, "password != null");
      let credential = firebase_auth.EmailAuthProvider.getCredential({email: email, password: password});
      return this.signInWithCredential(credential);
    }
    signInWithCredential(credential) {
      return async.async(firebase_auth.AuthResult, (function* signInWithCredential() {
        if (!(credential != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 255, 12, "credential != null");
        let data = (yield firebase_auth.FirebaseAuth.channel.invokeMapMethod(core.String, dart.dynamic, "signInWithCredential", new (IdentityMapOfString$dynamic()).from(["app", this.app.name, "provider", credential[_provider$], "data", credential[_data$]])));
        let authResult = new firebase_auth.AuthResult.__(data, this.app);
        return authResult;
      }).bind(this));
    }
    verifyPhoneNumber(opts) {
      let phoneNumber = opts && 'phoneNumber' in opts ? opts.phoneNumber : null;
      let timeout = opts && 'timeout' in opts ? opts.timeout : null;
      let forceResendingToken = opts && 'forceResendingToken' in opts ? opts.forceResendingToken : null;
      let verificationCompleted = opts && 'verificationCompleted' in opts ? opts.verificationCompleted : null;
      let verificationFailed = opts && 'verificationFailed' in opts ? opts.verificationFailed : null;
      let codeSent = opts && 'codeSent' in opts ? opts.codeSent : null;
      let codeAutoRetrievalTimeout = opts && 'codeAutoRetrievalTimeout' in opts ? opts.codeAutoRetrievalTimeout : null;
      return async.async(dart.void, (function* verifyPhoneNumber() {
        let callbacks = new (IdentityMapOfString$dynamic()).from(["PhoneVerificationCompleted", verificationCompleted, "PhoneVerificationFailed", verificationFailed, "PhoneCodeSent", codeSent, "PhoneCodeAuthRetrievalTimeout", codeAutoRetrievalTimeout]);
        firebase_auth.FirebaseAuth._nextHandle = dart.notNull(firebase_auth.FirebaseAuth._nextHandle) + 1;
        this[_phoneAuthCallbacks][$_set](firebase_auth.FirebaseAuth._nextHandle, callbacks);
        let params = new (IdentityMapOfString$dynamic()).from(["handle", firebase_auth.FirebaseAuth._nextHandle, "phoneNumber", phoneNumber, "timeout", timeout.inMilliseconds, "forceResendingToken", forceResendingToken, "app", this.app.name]);
        yield firebase_auth.FirebaseAuth.channel.invokeMethod(dart.void, "verifyPhoneNumber", params);
      }).bind(this));
    }
    signInWithCustomToken(opts) {
      let token = opts && 'token' in opts ? opts.token : null;
      return async.async(firebase_auth.AuthResult, (function* signInWithCustomToken() {
        if (!(token != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 360, 12, "token != null");
        let data = (yield firebase_auth.FirebaseAuth.channel.invokeMapMethod(core.String, dart.dynamic, "signInWithCustomToken", new (IdentityMapOfString$String()).from(["token", token, "app", this.app.name])));
        let authResult = new firebase_auth.AuthResult.__(data, this.app);
        return authResult;
      }).bind(this));
    }
    signOut() {
      return async.async(dart.void, (function* signOut() {
        return yield firebase_auth.FirebaseAuth.channel.invokeMethod(dart.void, "signOut", new (IdentityMapOfString$String()).from(["app", this.app.name]));
      }).bind(this));
    }
    currentUser() {
      return async.async(firebase_auth.FirebaseUser, (function* currentUser() {
        let data = (yield firebase_auth.FirebaseAuth.channel.invokeMapMethod(core.String, dart.dynamic, "currentUser", new (IdentityMapOfString$String()).from(["app", this.app.name])));
        let currentUser = data == null ? null : new firebase_auth.FirebaseUser.__(data, this.app);
        return currentUser;
      }).bind(this));
    }
    setLanguageCode(language) {
      return async.async(dart.void, (function* setLanguageCode() {
        if (!(language != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_auth.dart", 393, 12, "language != null");
        yield firebase_auth.FirebaseAuth.channel.invokeMethod(dart.void, "setLanguageCode", new (IdentityMapOfString$String()).from(["language", language, "app", this.app.name]));
      }).bind(this));
    }
    [_callHandler](call) {
      return async.async(dart.void, (function* _callHandler() {
        switch (call.method) {
          case "onAuthStateChanged":
          {
            this[_onAuthStageChangedHandler](call);
            break;
          }
          case "phoneVerificationCompleted":
          {
            let handle = core.int._check(dart.dsend(call.arguments, '_get', ["handle"]));
            let verificationCompleted = AuthCredentialTovoid()._check(this[_phoneAuthCallbacks][$_get](handle)[$_get]("PhoneVerificationCompleted"));
            verificationCompleted(firebase_auth.PhoneAuthProvider._getCredentialFromObject({jsonObject: dart.toString(dart.dsend(call.arguments, '_get', ["phoneAuthCredential"]))}));
            break;
          }
          case "phoneVerificationFailed":
          {
            let handle = core.int._check(dart.dsend(call.arguments, '_get', ["handle"]));
            let verificationFailed = AuthExceptionTovoid()._check(this[_phoneAuthCallbacks][$_get](handle)[$_get]("PhoneVerificationFailed"));
            let exception = core.Map._check(dart.dsend(call.arguments, '_get', ["exception"]));
            verificationFailed(new firebase_auth.AuthException.new(core.String._check(exception[$_get]("code")), core.String._check(exception[$_get]("message"))));
            break;
          }
          case "phoneCodeSent":
          {
            let handle = core.int._check(dart.dsend(call.arguments, '_get', ["handle"]));
            let verificationId = core.String._check(dart.dsend(call.arguments, '_get', ["verificationId"]));
            let forceResendingToken = core.int._check(dart.dsend(call.arguments, '_get', ["forceResendingToken"]));
            let codeSent = StringAndintTovoid()._check(this[_phoneAuthCallbacks][$_get](handle)[$_get]("PhoneCodeSent"));
            if (forceResendingToken == null) {
              codeSent(verificationId);
            } else {
              codeSent(verificationId, forceResendingToken);
            }
            break;
          }
          case "phoneCodeAutoRetrievalTimeout":
          {
            let handle = core.int._check(dart.dsend(call.arguments, '_get', ["handle"]));
            let codeAutoRetrievalTimeout = StringTovoid()._check(this[_phoneAuthCallbacks][$_get](handle)[$_get]("PhoneCodeAuthRetrievalTimeout"));
            let verificationId = core.String._check(dart.dsend(call.arguments, '_get', ["verificationId"]));
            codeAutoRetrievalTimeout(verificationId);
            break;
          }
        }
      }).bind(this));
    }
    [_onAuthStageChangedHandler](call) {
      let data = core.Map._check(dart.dsend(call.arguments, '_get', ["user"]));
      let id = core.int._check(dart.dsend(call.arguments, '_get', ["id"]));
      let currentUser = data != null ? new firebase_auth.FirebaseUser.__(data[$cast](core.String, dart.dynamic), this.app) : null;
      this[_authStateChangedControllers][$_get](id).add(currentUser);
    }
  };
  (firebase_auth.FirebaseAuth.__ = function(app) {
    this[_authStateChangedControllers] = new (IdentityMapOfint$StreamControllerOfFirebaseUser()).new();
    this[_phoneAuthCallbacks] = new (IdentityMapOfint$MapOfString$dynamic()).new();
    this[app$] = app;
    firebase_auth.FirebaseAuth.channel.setMethodCallHandler(dart.bind(this, _callHandler));
  }).prototype = firebase_auth.FirebaseAuth.prototype;
  dart.addTypeTests(firebase_auth.FirebaseAuth);
  dart.setMethodSignature(firebase_auth.FirebaseAuth, () => ({
    __proto__: dart.getMethods(firebase_auth.FirebaseAuth.__proto__),
    signInAnonymously: dart.fnType(async.Future$(firebase_auth.AuthResult), []),
    createUserWithEmailAndPassword: dart.fnType(async.Future$(firebase_auth.AuthResult), [], {email: core.String, password: core.String}, {}),
    fetchSignInMethodsForEmail: dart.fnType(async.Future$(core.List$(core.String)), [], {email: core.String}, {}),
    sendPasswordResetEmail: dart.fnType(async.Future$(dart.void), [], {email: core.String}, {}),
    sendSignInWithEmailLink: dart.fnType(async.Future$(dart.void), [], {androidInstallIfNotAvailable: core.bool, androidMinimumVersion: core.String, androidPackageName: core.String, email: core.String, handleCodeInApp: core.bool, iOSBundleID: core.String, url: core.String}, {}),
    isSignInWithEmailLink: dart.fnType(async.Future$(core.bool), [core.String]),
    signInWithEmailAndLink: dart.fnType(async.Future$(firebase_auth.AuthResult), [], {email: core.String, link: core.String}, {}),
    signInWithEmailAndPassword: dart.fnType(async.Future$(firebase_auth.AuthResult), [], {email: core.String, password: core.String}, {}),
    signInWithCredential: dart.fnType(async.Future$(firebase_auth.AuthResult), [firebase_auth.AuthCredential]),
    verifyPhoneNumber: dart.fnType(async.Future$(dart.void), [], {codeAutoRetrievalTimeout: dart.fnType(dart.void, [core.String]), codeSent: dart.fnType(dart.void, [core.String], [core.int]), forceResendingToken: core.int, phoneNumber: core.String, timeout: core.Duration, verificationCompleted: dart.fnType(dart.void, [firebase_auth.AuthCredential]), verificationFailed: dart.fnType(dart.void, [firebase_auth.AuthException])}, {}),
    signInWithCustomToken: dart.fnType(async.Future$(firebase_auth.AuthResult), [], {token: core.String}, {}),
    signOut: dart.fnType(async.Future$(dart.void), []),
    currentUser: dart.fnType(async.Future$(firebase_auth.FirebaseUser), []),
    setLanguageCode: dart.fnType(async.Future$(dart.void), [core.String]),
    [_callHandler]: dart.fnType(async.Future$(dart.void), [message_codec.MethodCall]),
    [_onAuthStageChangedHandler]: dart.fnType(dart.void, [message_codec.MethodCall])
  }));
  dart.setGetterSignature(firebase_auth.FirebaseAuth, () => ({
    __proto__: dart.getGetters(firebase_auth.FirebaseAuth.__proto__),
    onAuthStateChanged: async.Stream$(firebase_auth.FirebaseUser)
  }));
  dart.setLibraryUri(firebase_auth.FirebaseAuth, "package:firebase_auth/firebase_auth.dart");
  dart.setFieldSignature(firebase_auth.FirebaseAuth, () => ({
    __proto__: dart.getFields(firebase_auth.FirebaseAuth.__proto__),
    [_authStateChangedControllers]: dart.finalFieldType(core.Map$(core.int, async.StreamController$(firebase_auth.FirebaseUser))),
    [_phoneAuthCallbacks]: dart.finalFieldType(core.Map$(core.int, core.Map$(core.String, dart.dynamic))),
    app: dart.finalFieldType(firebase_core.FirebaseApp)
  }));
  dart.defineLazy(firebase_auth.FirebaseAuth, {
    /*firebase_auth.FirebaseAuth.instance*/get instance() {
      return new firebase_auth.FirebaseAuth.__(firebase_core.FirebaseApp.instance);
    },
    /*firebase_auth.FirebaseAuth.channel*/get channel() {
      return C0 || CT.C0;
    },
    /*firebase_auth.FirebaseAuth._nextHandle*/get _nextHandle() {
      return 0;
    },
    set _nextHandle(_) {}
  });
  const _metadata = dart.privateName(firebase_auth, "_metadata");
  const _app$ = dart.privateName(firebase_auth, "_app");
  const _updateData = dart.privateName(firebase_auth, "_updateData");
  firebase_auth.UserInfo = class UserInfo extends core.Object {
    get providerId() {
      return core.String._check(this[_data$][$_get]("providerId"));
    }
    get uid() {
      return core.String._check(this[_data$][$_get]("uid"));
    }
    get displayName() {
      return core.String._check(this[_data$][$_get]("displayName"));
    }
    get photoUrl() {
      return core.String._check(this[_data$][$_get]("photoUrl"));
    }
    get email() {
      return core.String._check(this[_data$][$_get]("email"));
    }
    get phoneNumber() {
      return core.String._check(this[_data$][$_get]("phoneNumber"));
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this[_data$]) + ")";
    }
  };
  (firebase_auth.UserInfo.__ = function(_data, _app) {
    this[_data$] = _data;
    this[_app$] = _app;
    ;
  }).prototype = firebase_auth.UserInfo.prototype;
  dart.addTypeTests(firebase_auth.UserInfo);
  dart.setGetterSignature(firebase_auth.UserInfo, () => ({
    __proto__: dart.getGetters(firebase_auth.UserInfo.__proto__),
    providerId: core.String,
    uid: core.String,
    displayName: core.String,
    photoUrl: core.String,
    email: core.String,
    phoneNumber: core.String
  }));
  dart.setLibraryUri(firebase_auth.UserInfo, "package:firebase_auth/firebase_auth.dart");
  dart.setFieldSignature(firebase_auth.UserInfo, () => ({
    __proto__: dart.getFields(firebase_auth.UserInfo.__proto__),
    [_app$]: dart.finalFieldType(firebase_core.FirebaseApp),
    [_data$]: dart.finalFieldType(core.Map)
  }));
  dart.defineExtensionMethods(firebase_auth.UserInfo, ['toString']);
  const providerData = dart.privateName(firebase_auth, "FirebaseUser.providerData");
  firebase_auth.FirebaseUser = class FirebaseUser extends firebase_auth.UserInfo {
    get providerData() {
      return this[providerData];
    }
    set providerData(value) {
      super.providerData = value;
    }
    get metadata() {
      return this[_metadata];
    }
    get isAnonymous() {
      return core.bool._check(this[_data$][$_get]("isAnonymous"));
    }
    get isEmailVerified() {
      return core.bool._check(this[_data$][$_get]("isEmailVerified"));
    }
    getIdToken(opts) {
      let refresh = opts && 'refresh' in opts ? opts.refresh : false;
      return async.async(firebase_auth.IdTokenResult, (function* getIdToken() {
        let data = (yield firebase_auth.FirebaseAuth.channel.invokeMapMethod(core.String, dart.dynamic, "getIdToken", new (IdentityMapOfString$dynamic()).from(["refresh", refresh, "app", this[_app$].name])));
        return new firebase_auth.IdTokenResult.new(data, this[_app$]);
      }).bind(this));
    }
    linkWithCredential(credential) {
      return async.async(firebase_auth.AuthResult, (function* linkWithCredential() {
        if (!(credential != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_user.dart", 64, 12, "credential != null");
        let data = (yield firebase_auth.FirebaseAuth.channel.invokeMapMethod(core.String, dart.dynamic, "linkWithCredential", new (IdentityMapOfString$dynamic()).from(["app", this[_app$].name, "provider", credential[_provider$], "data", credential[_data$]])));
        let result = new firebase_auth.AuthResult.__(data, this[_app$]);
        return result;
      }).bind(this));
    }
    sendEmailVerification() {
      return async.async(dart.void, (function* sendEmailVerification() {
        yield firebase_auth.FirebaseAuth.channel.invokeMethod(dart.void, "sendEmailVerification", new (IdentityMapOfString$String()).from(["app", this[_app$].name]));
      }).bind(this));
    }
    reload() {
      return async.async(dart.void, (function* reload() {
        yield firebase_auth.FirebaseAuth.channel.invokeMethod(dart.void, "reload", new (IdentityMapOfString$String()).from(["app", this[_app$].name]));
      }).bind(this));
    }
    delete() {
      return async.async(dart.void, (function* $delete() {
        yield firebase_auth.FirebaseAuth.channel.invokeMethod(dart.void, "delete", new (IdentityMapOfString$String()).from(["app", this[_app$].name]));
      }).bind(this));
    }
    updateEmail(email) {
      return async.async(dart.void, (function* updateEmail() {
        if (!(email != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_user.dart", 120, 12, "email != null");
        return yield firebase_auth.FirebaseAuth.channel.invokeMethod(dart.void, "updateEmail", new (IdentityMapOfString$String()).from(["email", email, "app", this[_app$].name]));
      }).bind(this));
    }
    updatePhoneNumberCredential(credential) {
      return async.async(dart.void, (function* updatePhoneNumberCredential() {
        if (!(credential != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_user.dart", 137, 12, "credential != null");
        yield firebase_auth.FirebaseAuth.channel.invokeMethod(dart.void, "updatePhoneNumberCredential", new (IdentityMapOfString$dynamic()).from(["app", this[_app$].name, "provider", credential[_provider$], "data", credential[_data$]]));
      }).bind(this));
    }
    updatePassword(password) {
      return async.async(dart.void, (function* updatePassword() {
        if (!(password != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_user.dart", 163, 12, "password != null");
        return yield firebase_auth.FirebaseAuth.channel.invokeMethod(dart.void, "updatePassword", new (IdentityMapOfString$String()).from(["password", password, "app", this[_app$].name]));
      }).bind(this));
    }
    updateProfile(userUpdateInfo) {
      return async.async(dart.void, (function* updateProfile() {
        if (!(userUpdateInfo != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_user.dart", 176, 12, "userUpdateInfo != null");
        let data = userUpdateInfo[_updateData];
        data[$_set]("app", this[_app$].name);
        return yield firebase_auth.FirebaseAuth.channel.invokeMethod(dart.void, "updateProfile", data);
      }).bind(this));
    }
    reauthenticateWithCredential(credential) {
      return async.async(firebase_auth.AuthResult, (function* reauthenticateWithCredential() {
        if (!(credential != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_user.dart", 203, 12, "credential != null");
        let data = (yield firebase_auth.FirebaseAuth.channel.invokeMapMethod(core.String, dart.dynamic, "reauthenticateWithCredential", new (IdentityMapOfString$dynamic()).from(["app", this[_app$].name, "provider", credential[_provider$], "data", credential[_data$]])));
        return new firebase_auth.AuthResult.__(data, this[_app$]);
      }).bind(this));
    }
    unlinkFromProvider(provider) {
      return async.async(dart.void, (function* unlinkFromProvider() {
        if (!(provider != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_auth/src/firebase_user.dart", 230, 12, "provider != null");
        return yield firebase_auth.FirebaseAuth.channel.invokeMethod(dart.void, "unlinkFromProvider", new (IdentityMapOfString$String()).from(["provider", provider, "app", this[_app$].name]));
      }).bind(this));
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this[_data$]) + ")";
    }
  };
  (firebase_auth.FirebaseUser.__ = function(data, app) {
    this[providerData] = ListOfUserInfo()._check(dart.dsend(dart.dgsend(data[$_get]("providerData"), [firebase_auth.UserInfo], 'map', [dart.fn(item => new firebase_auth.UserInfo.__(core.Map._check(item), app), dynamicToUserInfo())]), 'toList', []));
    this[_metadata] = new firebase_auth.FirebaseUserMetadata.__(data);
    firebase_auth.FirebaseUser.__proto__.__.call(this, data, app);
    ;
  }).prototype = firebase_auth.FirebaseUser.prototype;
  dart.addTypeTests(firebase_auth.FirebaseUser);
  dart.setMethodSignature(firebase_auth.FirebaseUser, () => ({
    __proto__: dart.getMethods(firebase_auth.FirebaseUser.__proto__),
    getIdToken: dart.fnType(async.Future$(firebase_auth.IdTokenResult), [], {refresh: core.bool}, {}),
    linkWithCredential: dart.fnType(async.Future$(firebase_auth.AuthResult), [firebase_auth.AuthCredential]),
    sendEmailVerification: dart.fnType(async.Future$(dart.void), []),
    reload: dart.fnType(async.Future$(dart.void), []),
    delete: dart.fnType(async.Future$(dart.void), []),
    updateEmail: dart.fnType(async.Future$(dart.void), [core.String]),
    updatePhoneNumberCredential: dart.fnType(async.Future$(dart.void), [firebase_auth.AuthCredential]),
    updatePassword: dart.fnType(async.Future$(dart.void), [core.String]),
    updateProfile: dart.fnType(async.Future$(dart.void), [firebase_auth.UserUpdateInfo]),
    reauthenticateWithCredential: dart.fnType(async.Future$(firebase_auth.AuthResult), [firebase_auth.AuthCredential]),
    unlinkFromProvider: dart.fnType(async.Future$(dart.void), [core.String])
  }));
  dart.setGetterSignature(firebase_auth.FirebaseUser, () => ({
    __proto__: dart.getGetters(firebase_auth.FirebaseUser.__proto__),
    metadata: firebase_auth.FirebaseUserMetadata,
    isAnonymous: core.bool,
    isEmailVerified: core.bool
  }));
  dart.setLibraryUri(firebase_auth.FirebaseUser, "package:firebase_auth/firebase_auth.dart");
  dart.setFieldSignature(firebase_auth.FirebaseUser, () => ({
    __proto__: dart.getFields(firebase_auth.FirebaseUser.__proto__),
    providerData: dart.finalFieldType(core.List$(firebase_auth.UserInfo)),
    [_metadata]: dart.finalFieldType(firebase_auth.FirebaseUserMetadata)
  }));
  dart.defineExtensionMethods(firebase_auth.FirebaseUser, ['toString']);
  firebase_auth.IdTokenResult = class IdTokenResult extends core.Object {
    get token() {
      return core.String._check(this[_data$][$_get]("token"));
    }
    get expirationTime() {
      return new core.DateTime.fromMillisecondsSinceEpoch(core.int._check(dart.dsend(this[_data$][$_get]("expirationTimestamp"), '*', [1000])));
    }
    get authTime() {
      return new core.DateTime.fromMillisecondsSinceEpoch(core.int._check(dart.dsend(this[_data$][$_get]("authTimestamp"), '*', [1000])));
    }
    get issuedAtTime() {
      return new core.DateTime.fromMillisecondsSinceEpoch(core.int._check(dart.dsend(this[_data$][$_get]("issuedAtTimestamp"), '*', [1000])));
    }
    get signInProvider() {
      return core.String._check(this[_data$][$_get]("signInProvider"));
    }
    get claims() {
      return core.Map._check(this[_data$][$_get]("claims"));
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this[_data$]) + ")";
    }
  };
  (firebase_auth.IdTokenResult.new = function(_data, _app) {
    this[_data$] = _data;
    this[_app$] = _app;
    ;
  }).prototype = firebase_auth.IdTokenResult.prototype;
  dart.addTypeTests(firebase_auth.IdTokenResult);
  dart.setGetterSignature(firebase_auth.IdTokenResult, () => ({
    __proto__: dart.getGetters(firebase_auth.IdTokenResult.__proto__),
    token: core.String,
    expirationTime: core.DateTime,
    authTime: core.DateTime,
    issuedAtTime: core.DateTime,
    signInProvider: core.String,
    claims: core.Map
  }));
  dart.setLibraryUri(firebase_auth.IdTokenResult, "package:firebase_auth/firebase_auth.dart");
  dart.setFieldSignature(firebase_auth.IdTokenResult, () => ({
    __proto__: dart.getFields(firebase_auth.IdTokenResult.__proto__),
    [_app$]: dart.finalFieldType(firebase_core.FirebaseApp),
    [_data$]: dart.finalFieldType(core.Map)
  }));
  dart.defineExtensionMethods(firebase_auth.IdTokenResult, ['toString']);
  firebase_auth.FirebaseUserMetadata = class FirebaseUserMetadata extends core.Object {
    get creationTime() {
      return new core.DateTime.fromMillisecondsSinceEpoch(core.int._check(this[_data$][$_get]("creationTimestamp")));
    }
    get lastSignInTime() {
      return new core.DateTime.fromMillisecondsSinceEpoch(core.int._check(this[_data$][$_get]("lastSignInTimestamp")));
    }
  };
  (firebase_auth.FirebaseUserMetadata.__ = function(_data) {
    this[_data$] = _data;
    ;
  }).prototype = firebase_auth.FirebaseUserMetadata.prototype;
  dart.addTypeTests(firebase_auth.FirebaseUserMetadata);
  dart.setGetterSignature(firebase_auth.FirebaseUserMetadata, () => ({
    __proto__: dart.getGetters(firebase_auth.FirebaseUserMetadata.__proto__),
    creationTime: core.DateTime,
    lastSignInTime: core.DateTime
  }));
  dart.setLibraryUri(firebase_auth.FirebaseUserMetadata, "package:firebase_auth/firebase_auth.dart");
  dart.setFieldSignature(firebase_auth.FirebaseUserMetadata, () => ({
    __proto__: dart.getFields(firebase_auth.FirebaseUserMetadata.__proto__),
    [_data$]: dart.finalFieldType(core.Map$(core.String, dart.dynamic))
  }));
  firebase_auth.UserUpdateInfo = class UserUpdateInfo extends core.Object {
    set displayName(displayName) {
      let t2, t1, t0;
      t0 = this[_updateData];
      t1 = "displayName";
      t2 = displayName;
      t0[$_set](t1, t2);
      return t2;
    }
    get displayName() {
      return this[_updateData][$_get]("displayName");
    }
    set photoUrl(photoUri) {
      let t2, t1, t0;
      t0 = this[_updateData];
      t1 = "photoUrl";
      t2 = photoUri;
      t0[$_set](t1, t2);
      return t2;
    }
    get photoUrl() {
      return this[_updateData][$_get]("photoUrl");
    }
  };
  (firebase_auth.UserUpdateInfo.new = function() {
    this[_updateData] = new (IdentityMapOfString$String()).new();
    ;
  }).prototype = firebase_auth.UserUpdateInfo.prototype;
  dart.addTypeTests(firebase_auth.UserUpdateInfo);
  dart.setGetterSignature(firebase_auth.UserUpdateInfo, () => ({
    __proto__: dart.getGetters(firebase_auth.UserUpdateInfo.__proto__),
    displayName: core.String,
    photoUrl: core.String
  }));
  dart.setSetterSignature(firebase_auth.UserUpdateInfo, () => ({
    __proto__: dart.getSetters(firebase_auth.UserUpdateInfo.__proto__),
    displayName: core.String,
    photoUrl: core.String
  }));
  dart.setLibraryUri(firebase_auth.UserUpdateInfo, "package:firebase_auth/firebase_auth.dart");
  dart.setFieldSignature(firebase_auth.UserUpdateInfo, () => ({
    __proto__: dart.getFields(firebase_auth.UserUpdateInfo.__proto__),
    [_updateData]: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  dart.trackLibraries("packages/firebase_auth/firebase_auth", {
    "package:firebase_auth/firebase_auth.dart": firebase_auth
  }, {
    "package:firebase_auth/firebase_auth.dart": ["src/auth_provider/email_auth_provider.dart", "src/auth_provider/facebook_auth_provider.dart", "src/auth_provider/github_auth_provider.dart", "src/auth_provider/google_auth_provider.dart", "src/auth_provider/phone_auth_provider.dart", "src/auth_provider/twitter_auth_provider.dart", "src/additional_user_info.dart", "src/auth_credential.dart", "src/auth_exception.dart", "src/auth_result.dart", "src/firebase_auth.dart", "src/firebase_user.dart", "src/id_token_result.dart", "src/user_info.dart", "src/user_metadata.dart", "src/user_update_info.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/auth_provider/email_auth_provider.dart","src/auth_provider/facebook_auth_provider.dart","src/auth_provider/github_auth_provider.dart","src/auth_provider/google_auth_provider.dart","src/auth_provider/phone_auth_provider.dart","src/auth_provider/twitter_auth_provider.dart","src/additional_user_info.dart","src/auth_credential.dart","src/auth_exception.dart","src/auth_result.dart","src/firebase_auth.dart","src/user_info.dart","src/firebase_user.dart","src/id_token_result.dart","src/user_metadata.dart","src/user_update_info.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAUW;UACA;AAEP,YAAsB,iDAA8B,yCAClD,SAAS,KAAK,EACd,YAAY,QAAQ;IAExB;;UAGS;UACA;AAEP,YAAsB,iDAA8B,yCAClD,SAAS,KAAK,EACd,QAAQ,IAAI;IAEhB;;;;EACF;;;;MArBsB,0CAAU;;;;;;UCEc;AAC1C,YAAsB,qDAEJ,yCAAC,eAAe,WAAW;IAE/C;;;;EACF;;;;MARsB,6CAAU;;;;;;UCEwB;AACpD,YAAsB,mDAA8B,yCAAC,SAAS,KAAK;IACrE;;;;EACF;;;;MALsB,2CAAU;;;;;;UCGX;UACA;AAEjB,YAAsB,mDAA8B,yCAClD,WAAW,OAAO,EAClB,eAAe,WAAW;IAE9B;;;;EACF;;;;MAXsB,2CAAU;;;;;;UCGX;UACA;AAEjB,YAAsB,8CAA8B,yCAClD,kBAAkB,cAAc,EAChC,WAAW,OAAO;IAEtB;;UAKmB;AAEjB,YAAsB,8CAA8B,yCAClD,cAAc,UAAU;IAE5B;;;;EACF;;;;MArBsB,0CAAU;;;;;;UCGX;UACA;AAEjB,YAAsB,oDAA8B,yCAClD,aAAa,SAAS,EACtB,mBAAmB,eAAe;IAEtC;;;;EACF;;;;MAXsB,4CAAU;;;;;;;ACMR,8BAAA,AAAK,oBAAC;IAAY;;AAGjB,gCAAA,AAAK,oBAAC;IAAW;;AAIf,gCAAA,AAAK,oBAAC;IAAa;;;AAIR,gDAAA,AAAK,oBAAC,yBAAD,OAAa;IAAuB;;;IAhBnD;;EAAM;;;;;;;;;;;;;;;;8CCCV,WAAgB;IAAhB;IAAgB;;EAAM;;;;;;;;;;;ICE/B;;;;;;IACA;;;;;;;8CAHY,MAAW;IAAX;IAAW;;EAAQ;;;;;;;;;;;ICQzB;;;;;;;AAKf,YAAA,AAAK,AAAuB,qBAAtB,yBAAyB,OACzB,OACmB,wDAAE,AAAK,oBAAC;IAAsB;;AAIzD,YAA6B,UAApB,sBAAW,eAAE,gBAAK;IAC7B;;0CAnBkB,OAAmB;IAAnB;IACP,aAAe,+DAAgB,YAAd,AAAK,KAAA,QAAC,oDAAiC,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;IC2BrD;;;;;;mBApBuB;AACvC,YAAO,AAAI,GAAD,IAAI;AACd,YAAoB,mCAAE,GAAG;IAC3B;;AAqBc;AAEmB;AAa7B,MAZF,aAAW,sDAAqD;AAEI,UADlE,UAAU,AAAQ,AACqB,0DADH,2BAChB,yCAAC,OAAO,AAAI,gCAAiB,QAAS,4BAAM,CAAC;AAG/D,UAFF,AAAQ,OAAD,iBAAM,QAAK;AACiC,YAAjD,AAA4B,0CAAC,MAAM,EAAI,UAAU;;oCAExC;AAKT,UAJF,AAAQ,OAAD,iBAAM,QAAK;AAEqC,YADrD,MAAM,AAAQ,2DAAmB,0BACZ,0CAAC,MAAM,MAAM,EAAE,OAAO,AAAI;AACJ,YAA3C,AAA6B,4CAAO,MAAM;UAC3C;;AAGH,YAAO,AAAW,WAAD;IACnB;;AAaoC;AACP,oBAAO,MAAM,AACnC,8EACG,qBAAqC,yCAAC,OAAO,AAAI;AACxC,yBAAwB,gCAAE,IAAI,EAAE;AACjD,cAAO,WAAU;MACnB;;;UAYmB;UACA;AAF8B;AAI/C,cAAO,AAAM,KAAD,IAAI;AAChB,cAAO,AAAS,QAAD,IAAI;AACQ,oBACvB,MAAM,AAAQ,8EAChB,kCACgB,yCAAC,SAAS,KAAK,EAAE,YAAY,QAAQ,EAAE,OAAO,AAAI;AAEnD,yBAAwB,gCAAE,IAAI,EAAE;AACjD,cAAO,WAAU;MACnB;;;UAamB;AAD4B;AAG7C,cAAO,AAAM,KAAD,IAAI;AAChB,cAAO,OAAM,AAAQ,iEACnB,8BACgB,yCAAC,SAAS,KAAK,EAAE,OAAO,AAAI;MAEhD;;;UAUmB;AADgB;AAGjC,cAAO,AAAM,KAAD,IAAI;AAChB,cAAO,OAAM,AAAQ,2DACnB,0BACgB,yCAAC,SAAS,KAAK,EAAE,OAAO,AAAI;MAEhD;;;UAImB;UACA;UACF;UACE;UACA;UACF;UACE;AAPiB;AASlC,cAAO,AAAM,KAAD,IAAI;AAChB,cAAO,AAAI,GAAD,IAAI;AACd,cAAO,AAAgB,eAAD,IAAI;AAC1B,cAAO,AAAY,WAAD,IAAI;AACtB,cAAO,AAAmB,kBAAD,IAAI;AAC7B,cAAO,AAA6B,4BAAD,IAAI;AACvC,cAAO,AAAsB,qBAAD,IAAI;AAa/B,QAZD,MAAM,AAAQ,2DACZ,mBACiB,0CACf,SAAS,KAAK,EACd,OAAO,GAAG,EACV,mBAAmB,eAAe,EAClC,eAAe,WAAW,EAC1B,sBAAsB,kBAAkB,EACxC,gCAAgC,4BAA4B,EAC5D,yBAAyB,qBAAqB,EAC9C,OAAO,AAAI;MAGjB;;0BAG0C;AAAR;AAChC,cAAO,OAAM,AAAQ,2DACnB,yBACgB,yCAAC,QAAQ,IAAI,EAAE,OAAO,AAAI;MAE9C;;;UAUkD;UAAc;AAAvB;AACZ,oBACvB,MAAM,AAAQ,8EAChB,0BACiB,0CACf,OAAO,AAAI,eACX,SAAS,KAAK,EACd,QAAQ,IAAI;AAGC,yBAAwB,gCAAE,IAAI,EAAE;AACjD,cAAO,WAAU;MACnB;;;UAkBmB;UACA;AAEjB,YAAO,AAAM,KAAD,IAAI;AAChB,YAAO,AAAS,QAAD,IAAI;AACE,uBAA+B,sDAC3C,KAAK,YACF,QAAQ;AAEpB,YAAO,2BAAqB,UAAU;IACxC;yBAuBuD;AAAhB;AACrC,cAAO,AAAW,UAAD,IAAI;AACM,oBACvB,MAAM,AAAQ,8EAChB,wBACiB,0CACf,OAAO,AAAI,eACX,YAAY,AAAW,UAAD,cACtB,QAAQ,AAAW,UAAD;AAGL,yBAAwB,gCAAE,IAAI,EAAE;AACjD,cAAO,WAAU;MACnB;;;UA8CmB;UACE;UACf;UACiC;UACH;UACV;UACgB;AAPZ;AASD,wBAA6B,0CACtD,8BAA8B,qBAAqB,EACnD,2BAA2B,kBAAkB,EAC7C,iBAAiB,QAAQ,EACzB,iCAAiC,wBAAwB;AAE3C,QAAhB,yCAAY,aAAZ,0CAAe;AAC6B,QAA5C,AAAmB,iCAAC,wCAAe,SAAS;AAEjB,qBAA0B,0CACnD,UAAU,wCACV,eAAe,WAAW,EAC1B,WAAW,AAAQ,OAAD,iBAClB,uBAAuB,mBAAmB,EAC1C,OAAO,AAAI;AAGgD,QAA7D,MAAM,AAAQ,2DAAmB,qBAAqB,MAAM;MAC9D;;;UAoB2D;AAAnB;AACtC,cAAO,AAAM,KAAD,IAAI;AACW,oBACvB,MAAM,AAAQ,8EAChB,yBACgB,yCAAC,SAAS,KAAK,EAAE,OAAO,AAAI;AAE7B,yBAAwB,gCAAE,IAAI,EAAE;AACjD,cAAO,WAAU;MACnB;;;AAMoB;AAClB,cAAO,OAAM,AACR,2DAAmB,WAA2B,yCAAC,OAAO,AAAI;MACjE;;;AAGgC;AACH,oBAAO,MAAM,AACnC,8EACG,eAA+B,yCAAC,OAAO,AAAI;AAChC,0BACf,AAAK,IAAD,IAAI,OAAO,OAAoB,kCAAE,IAAI,EAAE;AAC/C,cAAO,YAAW;MACpB;;oBAKoC;AAAR;AAC1B,cAAO,AAAS,QAAD,IAAI;AAKjB,QAJF,MAAmB,AACd,2DAAmB,mBAAmC,yCACzD,YAAY,QAAQ,EACpB,OAAO,AAAI;MAEf;;mBAEqC;AAAZ;AACvB,gBAAQ,AAAK,IAAD;;;AAEwB,YAAhC,iCAA2B,IAAI;AAC/B;;;;AAEU,yCAAuB,WAAd,AAAK,IAAD,qBAAW;AACD,sEAC7B,AAAmB,AAAQ,iCAAP,MAAM,SAAE;AAEkC,YADlE,AAAqB,qBAAA,CAAmB,sEACc,cAAxB,WAAd,AAAK,IAAD,qBAAW;AAC/B;;;;AAEU,yCAAuB,WAAd,AAAK,IAAD,qBAAW;AACJ,kEAC1B,AAAmB,AAAQ,iCAAP,MAAM,SAAE;AACJ,4CAA0B,WAAd,AAAK,IAAD,qBAAW;AAEI,YAD3D,AAAkB,kBAAA,CACd,uDAAc,AAAS,SAAA,QAAC,6BAAS,AAAS,SAAA,QAAC;AAC/C;;;;AAEU,yCAAuB,WAAd,AAAK,IAAD,qBAAW;AACrB,oDAA+B,WAAd,AAAK,IAAD,qBAAW;AACnC,sDAAoC,WAAd,AAAK,IAAD,qBAAW;AAE3B,uDAChB,AAAmB,AAAQ,iCAAP,MAAM,SAAE;AAChC,gBAAI,AAAoB,mBAAD,IAAI;AACD,cAAxB,AAAQ,QAAA,CAAC,cAAc;;AAEsB,cAA7C,AAAQ,QAAA,CAAC,cAAc,EAAE,mBAAmB;;AAE9C;;;;AAEU,yCAAuB,WAAd,AAAK,IAAD,qBAAW;AACE,iEAChC,AAAmB,AAAQ,iCAAP,MAAM,SAAE;AACnB,oDAA+B,WAAd,AAAK,IAAD,qBAAW;AACL,YAAxC,AAAwB,wBAAA,CAAC,cAAc;AACvC;;;MAEN;;iCAE2C;AACb,iCAAqB,WAAd,AAAK,IAAD,qBAAW;AACxC,+BAAmB,WAAd,AAAK,IAAD,qBAAW;AAEX,wBACf,AAAK,IAAD,IAAI,OAAoB,kCAAE,AAAK,IAAD,oCAA0B,YAAO;AACtB,MAAjD,AAA4B,AAAK,0CAAJ,EAAE,MAAM,WAAW;IAClD;;4CArboB;IAkB2B,qCACN;IAGJ,4BACN;IAvBX;AACwB,IAA1C,AAAQ,kEAAqB;EAC/B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAS0B,mCAAQ;YAAgB,mCAAc;;MAGrC,kCAAO;;;MAOvB,sCAAW;YAAG;;;;;;;;;ACnBA,gCAAA,AAAK,oBAAC;IAAa;;AAG1B,gCAAA,AAAK,oBAAC;IAAM;;AAGJ,gCAAA,AAAK,oBAAC;IAAc;;AAGvB,gCAAA,AAAK,oBAAC;IAAW;;AAGpB,gCAAA,AAAK,oBAAC;IAAQ;;AAGR,gCAAA,AAAK,oBAAC;IAAc;;AAI5C,YAA6B,UAApB,sBAAW,eAAE,gBAAK;IAC7B;;wCA3BgB,OAAY;IAAZ;IAAY;;EAAK;;;;;;;;;;;;;;;;;;;;ICOZ;;;;;;;AAMgB;IAAS;;AAEtB,8BAAA,AAAK,oBAAC;IAAc;;AAGhB,8BAAA,AAAK,oBAAC;IAAkB;;UASb;AAAP;AACH,oBAAO,MAAmB,AAChD,8EAAiC,cAA+B,0CACnE,WAAW,OAAO,EAClB,OAAO,AAAK;AAGd,cAAO,qCAAc,IAAI,EAAE;MAC7B;;uBAmBqD;AAAhB;AACnC,cAAO,AAAW,UAAD,IAAI;AACM,oBACvB,MAAmB,AAAQ,8EAC7B,sBACiB,0CACf,OAAO,AAAK,kBACZ,YAAY,AAAW,UAAD,cACtB,QAAQ,AAAW,UAAD;AAGL,qBAAoB,gCAAE,IAAI,EAAE;AAC7C,cAAO,OAAM;MACf;;;AAGkC;AAEgC,QADhE,MAAmB,AAAQ,2DACvB,yBAAyC,yCAAC,OAAO,AAAK;MAC5D;;;AAImB;AAEoD,QADrE,MAAmB,AACd,2DAAmB,UAA0B,yCAAC,OAAO,AAAK;MACjE;;;AASmB;AAEoD,QADrE,MAAmB,AACd,2DAAmB,UAA0B,yCAAC,OAAO,AAAK;MACjE;;gBAkBgC;AAAR;AACtB,cAAO,AAAM,KAAD,IAAI;AAChB,cAAO,OAAmB,AAAQ,2DAChC,eACgB,yCAAC,SAAS,KAAK,EAAE,OAAO,AAAK;MAEjD;;gCAWwD;AAAhB;AACtC,cAAO,AAAW,UAAD,IAAI;AAQpB,QAPD,MAAmB,AAAQ,2DACzB,+BACiB,0CACf,OAAO,AAAK,kBACZ,YAAY,AAAW,UAAD,cACtB,QAAQ,AAAW,UAAD;MAGxB;;mBAgBmC;AAAR;AACzB,cAAO,AAAS,QAAD,IAAI;AACnB,cAAO,OAAmB,AAAQ,2DAChC,kBACgB,yCAAC,YAAY,QAAQ,EAAE,OAAO,AAAK;MAEvD;;kBAO0C;AAAhB;AACxB,cAAO,AAAe,cAAD,IAAI;AACC,mBAAO,AAAe,cAAD;AACxB,QAAvB,AAAI,IAAA,QAAC,OAAS,AAAK;AACnB,cAAO,OAAmB,AAAQ,2DAChC,iBACA,IAAI;MAER;;iCAmBmB;AAD4B;AAE7C,cAAO,AAAW,UAAD,IAAI;AACM,oBACvB,MAAmB,AAAQ,8EAC7B,gCACiB,0CACf,OAAO,AAAK,kBACZ,YAAY,AAAW,UAAD,cACtB,QAAQ,AAAW,UAAD;AAGtB,cAAkB,iCAAE,IAAI,EAAE;MAC5B;;uBAeuC;AAAR;AAC7B,cAAO,AAAS,QAAD,IAAI;AACnB,cAAO,OAAmB,AAAQ,2DAChC,sBACgB,yCAAC,YAAY,QAAQ,EAAE,OAAO,AAAK;MAEvD;;;AAIE,YAA6B,UAApB,sBAAW,eAAE,gBAAK;IAC7B;;4CAvOoC,MAAkB;yBACnC,wBAER,WADA,YADU,AAAI,IAAA,QAAC,mDACD,QAAS,QAAkB,8CAAE,IAAI,GAAE,GAAG;IAE/C,kBAAuB,0CAAE,IAAI;AACjC,uDAAE,IAAI,EAAE,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ACSJ,gCAAA,AAAK,oBAAC;IAAQ;;AAI9B,YAAS,8DAAwD,WAA7B,AAAK,oBAAC,8BAAyB;IAAK;;AAMxE,YAAS,8DAAkD,WAAvB,AAAK,oBAAC,wBAAmB;IAAK;;AAIlE,YAAS,8DAAsD,WAA3B,AAAK,oBAAC,4BAAuB;IAAK;;AAI7C,gCAAA,AAAK,oBAAC;IAAiB;;AAIhB,6BAAA,AAAK,oBAAC;IAAS;;AAIjD,YAA6B,UAApB,sBAAW,eAAE,gBAAK;IAC7B;;8CAlCmB,OAAY;IAAZ;IAAY;;EAAK;;;;;;;;;;;;;;;;;;;;ACDhC,YAAS,8DAA2B,AAAK,oBAAC;IAAqB;;AAM/D,YAAS,8DAA2B,AAAK,oBAAC;IAAuB;;;IAZzC;;EAAM;;;;;;;;;;;;;oBCMX;;AACnB;WAAY;WAAiB,WAAW;MAA7B;;IAA6B;;AAElB,YAAA,AAAW,0BAAC;IAAc;iBAEhC;;AAAa;WAAY;WAAc,QAAQ;MAAvB;;IAAuB;;AAE5C,YAAA,AAAW,0BAAC;IAAW;;;IATpB,oBAA8B;;EAU1D","file":"firebase_auth.ddc.js"}');
  // Exports:
  return {
    firebase_auth: firebase_auth
  };
});

//# sourceMappingURL=firebase_auth.ddc.js.map
