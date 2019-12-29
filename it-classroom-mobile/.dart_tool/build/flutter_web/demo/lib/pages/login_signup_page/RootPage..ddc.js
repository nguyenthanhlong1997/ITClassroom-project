define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/demo/services/authentication', 'packages/firebase_auth/firebase_auth', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/demo/pages/login_signup_page/login_signup_page', 'packages/demo/pages/login_signup_page/HomePage'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__demo__services__authentication, packages__firebase_auth__firebase_auth, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__demo__pages__login_signup_page__login_signup_page, packages__demo__pages__login_signup_page__HomePage) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const authentication = packages__demo__services__authentication.services__authentication;
  const firebase_auth = packages__firebase_auth__firebase_auth.firebase_auth;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const login_signup_page = packages__demo__pages__login_signup_page__login_signup_page.pages__login_signup_page__login_signup_page;
  const HomePage = packages__demo__pages__login_signup_page__HomePage.pages__login_signup_page__HomePage;
  const RootPage$46 = Object.create(dart.library);
  const $toString = dartx.toString;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FirebaseUserToNull = () => (FirebaseUserToNull = dart.constFn(dart.fnType(core.Null, [firebase_auth.FirebaseUser])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: RootPage$46.AuthStatus.prototype,
        [_name$]: "AuthStatus.NOT_DETERMINED",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: RootPage$46.AuthStatus.prototype,
        [_name$]: "AuthStatus.LOGGED_OUT",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: RootPage$46.AuthStatus.prototype,
        [_name$]: "AuthStatus.LOGGED_IN",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], RootPage$46.AuthStatus);
    },
    get C5() {
      return C5 = dart.constList([], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/RootPage..dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/RootPage..dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/RootPage..dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "auth",
        [_Location_column]: 11,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSignedIn",
        [_Location_column]: 11,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/RootPage..dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "userId",
        [_Location_column]: 13,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "auth",
        [_Location_column]: 13,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSignedOut",
        [_Location_column]: 13,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/RootPage..dart"
      });
    }
  });
  const auth$ = dart.privateName(RootPage$46, "RootPage.auth");
  RootPage$46.RootPage = class RootPage extends framework.StatefulWidget {
    get auth() {
      return this[auth$];
    }
    set auth(value) {
      super.auth = value;
    }
    createState() {
      return new RootPage$46._RootPageState.new();
    }
  };
  (RootPage$46.RootPage.new = function(opts) {
    let auth = opts && 'auth' in opts ? opts.auth : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[auth$] = auth;
    RootPage$46.RootPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = RootPage$46.RootPage.prototype;
  dart.addTypeTests(RootPage$46.RootPage);
  dart.setMethodSignature(RootPage$46.RootPage, () => ({
    __proto__: dart.getMethods(RootPage$46.RootPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(RootPage$46.RootPage, "package:demo/pages/login_signup_page/RootPage..dart");
  dart.setFieldSignature(RootPage$46.RootPage, () => ({
    __proto__: dart.getFields(RootPage$46.RootPage.__proto__),
    auth: dart.finalFieldType(authentication.BaseAuth)
  }));
  const _name$ = dart.privateName(RootPage$46, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  RootPage$46.AuthStatus = class AuthStatus extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (RootPage$46.AuthStatus.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = RootPage$46.AuthStatus.prototype;
  dart.addTypeTests(RootPage$46.AuthStatus);
  dart.setLibraryUri(RootPage$46.AuthStatus, "package:demo/pages/login_signup_page/RootPage..dart");
  dart.setFieldSignature(RootPage$46.AuthStatus, () => ({
    __proto__: dart.getFields(RootPage$46.AuthStatus.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(RootPage$46.AuthStatus, ['toString']);
  RootPage$46.AuthStatus.NOT_DETERMINED = C0 || CT.C0;
  RootPage$46.AuthStatus.LOGGED_OUT = C1 || CT.C1;
  RootPage$46.AuthStatus.LOGGED_IN = C2 || CT.C2;
  RootPage$46.AuthStatus.values = C3 || CT.C3;
  const _userId = dart.privateName(RootPage$46, "_userId");
  const _onLoggedIn = dart.privateName(RootPage$46, "_onLoggedIn");
  const _onSignedOut = dart.privateName(RootPage$46, "_onSignedOut");
  let C5;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C4;
  let C8;
  let C9;
  let C7;
  let C6;
  let C12;
  let C11;
  let C10;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C20;
  let C21;
  let C18;
  let C17;
  RootPage$46._RootPageState = class _RootPageState extends framework.State$(RootPage$46.RootPage) {
    initState() {
      super.initState();
      this.widget.auth.getCurrentUser().then(core.Null, dart.fn(user => {
        this.setState(dart.fn(() => {
          let t0, t0$;
          if (user != null) {
            this[_userId] = (t0 = user, t0 == null ? null : t0.uid);
          }
          this.authStatus = (t0$ = user, t0$ == null ? null : t0$.uid) == null ? RootPage$46.AuthStatus.LOGGED_OUT : RootPage$46.AuthStatus.LOGGED_IN;
        }, VoidToNull()));
      }, FirebaseUserToNull()));
    }
    [_onLoggedIn]() {
      this.widget.auth.getCurrentUser().then(core.Null, dart.fn(user => {
        this.setState(dart.fn(() => {
          this[_userId] = dart.toString(user.uid);
        }, VoidToNull()));
      }, FirebaseUserToNull()));
      this.setState(dart.fn(() => {
        this.authStatus = RootPage$46.AuthStatus.LOGGED_IN;
      }, VoidToNull()));
    }
    [_onSignedOut]() {
      this.setState(dart.fn(() => {
        this.authStatus = RootPage$46.AuthStatus.LOGGED_OUT;
        this[_userId] = "";
      }, VoidToNull()));
    }
    progressScreenWidget() {
      return new scaffold.Scaffold.new({body: new container.Container.new({alignment: alignment.Alignment.center, child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
    }
    build(context) {
      core.print(this.authStatus);
      switch (this.authStatus) {
        case C0 || CT.C0:
        {
          return this.progressScreenWidget();
          break;
        }
        case C1 || CT.C1:
        {
          return new login_signup_page.LoginSignupPage.new({auth: this.widget.auth, onSignedIn: dart.bind(this, _onLoggedIn), $creationLocationd_0dea112b090073317d4: C13 || CT.C13});
          break;
        }
        case C2 || CT.C2:
        {
          if (this[_userId].length > 0 && this[_userId] != null) {
            return new HomePage.HomePage.new({userId: this[_userId], auth: this.widget.auth, onSignedOut: dart.bind(this, _onSignedOut), $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
          } else
            return this.progressScreenWidget();
          break;
        }
        default:
        {
          return this.progressScreenWidget();
        }
      }
    }
  };
  (RootPage$46._RootPageState.new = function() {
    this.authStatus = RootPage$46.AuthStatus.NOT_DETERMINED;
    this[_userId] = "";
    RootPage$46._RootPageState.__proto__.new.call(this);
    ;
  }).prototype = RootPage$46._RootPageState.prototype;
  dart.addTypeTests(RootPage$46._RootPageState);
  dart.setMethodSignature(RootPage$46._RootPageState, () => ({
    __proto__: dart.getMethods(RootPage$46._RootPageState.__proto__),
    [_onLoggedIn]: dart.fnType(dart.void, []),
    [_onSignedOut]: dart.fnType(dart.void, []),
    progressScreenWidget: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(RootPage$46._RootPageState, "package:demo/pages/login_signup_page/RootPage..dart");
  dart.setFieldSignature(RootPage$46._RootPageState, () => ({
    __proto__: dart.getFields(RootPage$46._RootPageState.__proto__),
    authStatus: dart.fieldType(RootPage$46.AuthStatus),
    [_userId]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/demo/pages/login_signup_page/RootPage.", {
    "package:demo/pages/login_signup_page/RootPage..dart": RootPage$46
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["RootPage..dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQiB;;;;;;;AAEwB,YAAI;IAAgB;;;QAH5C;;;AAAf;;EAAqB;;;;;;;;;;;;;;;;;;;IAUvB;;gDAJK;;;;EAIL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAOqB,MAAX;AASJ,MARF,AAAO,AAAK,AAAiB,kDAAK,QAAC;AAO/B,QANF,cAAS;;AACP,cAAI,IAAI,IAAI;AACS,YAAnB,sBAAU,IAAI,eAAJ,OAAM;;AAGkD,UADpE,kBACc,OAAV,IAAI,gBAAJ,OAAM,YAAO,OAAkB,oCAAwB;;;IAGjE;;AAOI,MAJF,AAAO,AAAK,AAAiB,kDAAK,QAAC;AAG/B,QAFF,cAAS;AACsB,UAA7B,gBAAmB,cAAT,AAAK,IAAD;;;AAKhB,MAFF,cAAS;AAC0B,QAAjC,kBAAwB;;IAE5B;;AAMI,MAHF,cAAS;AAC2B,QAAlC,kBAAwB;AACZ,QAAZ,gBAAU;;IAEd;;AAGE,YAAO,kCACC,wCACiB,mCACd;IAGb;UAG0B;AACP,MAAjB,WAAM;AACN,cAAQ;;;AAEJ,gBAAO;AACP;;;;AAEA,gBAAW,kDACH,AAAO,wCACD;AAEd;;;;AAEA,cAAI,AAAQ,AAAO,uBAAE,KAAK,iBAAW;AACnC,kBAAW,oCACD,qBACF,AAAO,yCACA;;AAGf,kBAAO;AACT;;;;AAEA,gBAAO;;;IAEb;;;IArEW,kBAAwB;IAC5B,gBAAU;;;EAqEnB","file":"RootPage..ddc.js"}');
  // Exports:
  return {
    pages__login_signup_page__RootPage$46: RootPage$46
  };
});

//# sourceMappingURL=RootPage..ddc.js.map
