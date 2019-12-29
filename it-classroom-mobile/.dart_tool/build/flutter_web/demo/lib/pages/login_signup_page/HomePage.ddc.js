define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/demo/services/authentication', 'packages/demo/services/FirestoreService', 'packages/demo/models/Tree', 'packages/cloud_firestore/cloud_firestore', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/demo/pages/list_tree_page/list_tree_tab', 'packages/demo/pages/search_tree_page/SearchPage'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__demo__services__authentication, packages__demo__services__FirestoreService, packages__demo__models__Tree, packages__cloud_firestore__cloud_firestore, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__demo__pages__list_tree_page__list_tree_tab, packages__demo__pages__search_tree_page__SearchPage) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const authentication = packages__demo__services__authentication.services__authentication;
  const FirestoreService = packages__demo__services__FirestoreService.services__FirestoreService;
  const Tree = packages__demo__models__Tree.models__Tree;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore.cloud_firestore;
  const tab_controller = packages__flutter__material.src__material__tab_controller;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const colors = packages__flutter__material.src__material__colors;
  const tabs = packages__flutter__material.src__material__tabs;
  const icons = packages__flutter__material.src__material__icons;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const list_tree_tab = packages__demo__pages__list_tree_page__list_tree_tab.pages__list_tree_page__list_tree_tab;
  const SearchPage = packages__demo__pages__search_tree_page__SearchPage.pages__search_tree_page__SearchPage;
  const HomePage = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let DocumentSnapshotToTree = () => (DocumentSnapshotToTree = dart.constFn(dart.fnType(Tree.Tree, [cloud_firestore.DocumentSnapshot])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let QuerySnapshotToNull = () => (QuerySnapshotToNull = dart.constFn(dart.fnType(core.Null, [cloud_firestore.QuerySnapshot])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 13,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "list",
        [_Location_column]: 21,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C23() {
      return C23 = dart.constList([], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 40,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 47,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 40,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 49,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabs",
        [_Location_column]: 13,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelColor",
        [_Location_column]: 13,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "unselectedLabelColor",
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorSize",
        [_Location_column]: 13,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorPadding",
        [_Location_column]: 13,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorColor",
        [_Location_column]: 13,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 11,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 11,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottomNavigationBar",
        [_Location_column]: 11,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "length",
        [_Location_column]: 9,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/login_signup_page/HomePage.dart"
      });
    }
  });
  const auth$ = dart.privateName(HomePage, "HomePage.auth");
  const onSignedOut$ = dart.privateName(HomePage, "HomePage.onSignedOut");
  const userId$ = dart.privateName(HomePage, "HomePage.userId");
  HomePage.HomePage = class HomePage$ extends framework.StatefulWidget {
    get auth() {
      return this[auth$];
    }
    set auth(value) {
      super.auth = value;
    }
    get onSignedOut() {
      return this[onSignedOut$];
    }
    set onSignedOut(value) {
      super.onSignedOut = value;
    }
    get userId() {
      return this[userId$];
    }
    set userId(value) {
      super.userId = value;
    }
    createState() {
      return new HomePage._HomePageState.new();
    }
  };
  (HomePage.HomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let auth = opts && 'auth' in opts ? opts.auth : null;
    let userId = opts && 'userId' in opts ? opts.userId : null;
    let onSignedOut = opts && 'onSignedOut' in opts ? opts.onSignedOut : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[auth$] = auth;
    this[userId$] = userId;
    this[onSignedOut$] = onSignedOut;
    HomePage.HomePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = HomePage.HomePage.prototype;
  dart.addTypeTests(HomePage.HomePage);
  dart.setMethodSignature(HomePage.HomePage, () => ({
    __proto__: dart.getMethods(HomePage.HomePage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(HomePage.HomePage, "package:demo/pages/login_signup_page/HomePage.dart");
  dart.setFieldSignature(HomePage.HomePage, () => ({
    __proto__: dart.getFields(HomePage.HomePage.__proto__),
    auth: dart.finalFieldType(authentication.BaseAuth),
    onSignedOut: dart.finalFieldType(dart.fnType(dart.void, [])),
    userId: dart.finalFieldType(core.String)
  }));
  const _signOut = dart.privateName(HomePage, "_signOut");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C10;
  let C8;
  let C7;
  let C13;
  let C14;
  let C12;
  let C11;
  let C17;
  let C16;
  let C15;
  let C20;
  let C21;
  let C19;
  let C18;
  let C23;
  let C22;
  let C26;
  let C25;
  let C24;
  let C29;
  let C28;
  let C27;
  let C32;
  let C31;
  let C30;
  let C35;
  let C36;
  let C34;
  let C33;
  let C39;
  let C38;
  let C37;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C47;
  let C48;
  let C49;
  let C50;
  let C51;
  let C45;
  let C44;
  let C54;
  let C55;
  let C56;
  let C57;
  let C53;
  let C52;
  let C60;
  let C61;
  let C59;
  let C58;
  let C62;
  const _buildBody = dart.privateName(HomePage, "_buildBody");
  HomePage._HomePageState = class _HomePageState extends framework.State$(HomePage.HomePage) {
    initState() {
      super.initState();
      this.todoTasks = this.fireService.getTreeList().listen(dart.fn(snapshot => {
        let tasks = snapshot.documents[$map](Tree.Tree, dart.fn(documentSnapshot => new Tree.Tree.fromMap(documentSnapshot.data), DocumentSnapshotToTree()))[$toList]();
        this.setState(dart.fn(() => {
          this.trees = tasks;
        }, VoidToNull()));
      }, QuerySnapshotToNull()));
      core.print(this.todoTasks);
    }
    loadState() {
      this.todoTasks = this.fireService.getTreeList().listen(dart.fn(snapshot => {
        let tasks = snapshot.documents[$map](Tree.Tree, dart.fn(documentSnapshot => new Tree.Tree.fromMap(documentSnapshot.data), DocumentSnapshotToTree()))[$toList]();
        core.print(snapshot.documents);
      }, QuerySnapshotToNull()));
    }
    [_signOut]() {
      return async.async(dart.dynamic, (function* _signOut() {
        try {
          yield this.widget.auth.signOut();
          this.widget.onSignedOut();
        } catch (e$) {
          let e = dart.getThrown(e$);
          core.print(e);
        }
      }).bind(this));
    }
    build(context) {
      this.loadState();
      return new tab_controller.DefaultTabController.new({length: 2, child: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("List view", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("Logout", {style: new text_style.TextStyle.new({fontSize: 17.0, color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), onPressed: dart.bind(this, _signOut), $creationLocationd_0dea112b090073317d4: C7 || CT.C7})]), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), body: new tabs.TabBarView.new({children: JSArrayOfWidget().of([new container.Container.new({color: colors.Colors.white, child: new list_tree_tab.ListTreeTab.new({list: this.trees, $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), new container.Container.new({child: new SearchPage.SearchPage.new({$creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24})]), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), bottomNavigationBar: new tabs.TabBar.new({tabs: JSArrayOfWidget().of([new tabs.Tab.new({icon: new icon.Icon.new(icons.Icons.list, {$creationLocationd_0dea112b090073317d4: C30 || CT.C30}), text: "ListTree", $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), new tabs.Tab.new({icon: new icon.Icon.new(icons.Icons.search, {$creationLocationd_0dea112b090073317d4: C37 || CT.C37}), text: "SearchTree", $creationLocationd_0dea112b090073317d4: C40 || CT.C40})]), labelColor: colors.Colors.yellow, unselectedLabelColor: colors.Colors.blue, indicatorSize: tabs.TabBarIndicatorSize.label, indicatorPadding: new edge_insets.EdgeInsets.all(5.0), indicatorColor: colors.Colors.red, $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), backgroundColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58});
    }
    [_buildBody](context) {
      return new scroll_view.ListView.new({$creationLocationd_0dea112b090073317d4: C62 || CT.C62});
    }
  };
  (HomePage._HomePageState.new = function() {
    this.trees = null;
    this.fireService = new FirestoreService.FirestoreService.new();
    this.todoTasks = null;
    this.test = null;
    HomePage._HomePageState.__proto__.new.call(this);
    ;
  }).prototype = HomePage._HomePageState.prototype;
  dart.addTypeTests(HomePage._HomePageState);
  dart.setMethodSignature(HomePage._HomePageState, () => ({
    __proto__: dart.getMethods(HomePage._HomePageState.__proto__),
    loadState: dart.fnType(dart.void, []),
    [_signOut]: dart.fnType(dart.dynamic, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildBody]: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(HomePage._HomePageState, "package:demo/pages/login_signup_page/HomePage.dart");
  dart.setFieldSignature(HomePage._HomePageState, () => ({
    __proto__: dart.getFields(HomePage._HomePageState.__proto__),
    trees: dart.fieldType(core.List$(Tree.Tree)),
    fireService: dart.fieldType(FirestoreService.FirestoreService),
    todoTasks: dart.fieldType(async.StreamSubscription$(cloud_firestore.QuerySnapshot)),
    test: dart.fieldType(dart.dynamic)
  }));
  dart.trackLibraries("packages/demo/pages/login_signup_page/HomePage", {
    "package:demo/pages/login_signup_page/HomePage.dart": HomePage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["HomePage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAaiB;;;;;;IACI;;;;;;IACN;;;;;;;AAE0B,YAAI;IAAgB;;;QAN7C;QAAU;QAAW;QAAa;;IAAxB;IAAW;IAAa;AAC1C,qDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAcF,MAAX;AAQJ,MAPF,iBAAY,AAAY,AAAc,sCAAO,QAAe;AACzC,oBAAQ,AAAS,AAC7B,AACA,QAF4B,4BACxB,QAAC,oBAA0B,sBAAQ,AAAiB,gBAAD;AAI1D,QAFF,cAAS;AACW,UAAb,aAAQ,KAAK;;;AAGN,MAAhB,WAAM;IACR;;AAQI,MALF,iBAAY,AAAY,AAAc,sCAAO,QAAe;AACzC,oBAAQ,AAAS,AAC7B,AACA,QAF4B,4BACxB,QAAC,oBAA0B,sBAAQ,AAAiB,gBAAD;AAEnC,QAAzB,WAAM,AAAS,QAAD;;IAElB;;AAEQ;AACN;AAC6B,UAA3B,MAAM,AAAO,AAAK;AACE,UAApB,AAAO;;cACA;AACC,UAAR,WAAM,CAAC;;MAEX;;UAG0B;AACb,MAAX;AACA,YAAW,sDACC,UACD,mCACO,+BACC,kBAAK,8EACC,sBACX,uCACW,kBAAK,kBAEJ,wCAAoB,aAAoB,mGACzC,yIAGb,mCACc,sBACZ,oCACc,4BACP,yCACC,8HAER,oCACK,iOAIY,2BACT,sBACZ,wBAAc,kBAAW,kFAAa,qEACtC,wBAAc,kBAAW,oFAAe,qFAEvB,4CACU,mCACM,kDACN,+BAAI,sBACV,6FAED;IAEhC;iBAE+B;AAC7B,YAAO;IACT;;;IAhFW;IACM,mBAAkB;IACD;IAC9B;;;EA8EN","file":"HomePage.ddc.js"}');
  // Exports:
  return {
    pages__login_signup_page__HomePage: HomePage
  };
});

//# sourceMappingURL=HomePage.ddc.js.map
