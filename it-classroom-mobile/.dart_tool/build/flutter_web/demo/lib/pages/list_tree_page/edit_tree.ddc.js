define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/demo/models/Tree', 'packages/demo/services/FirestoreService', 'packages/shared_preferences/shared_preferences', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__demo__models__Tree, packages__demo__services__FirestoreService, packages__shared_preferences__shared_preferences, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const Tree = packages__demo__models__Tree.models__Tree;
  const FirestoreService = packages__demo__services__FirestoreService.services__FirestoreService;
  const shared_preferences = packages__shared_preferences__shared_preferences.shared_preferences;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const radio = packages__flutter__material.src__material__radio;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const colors = packages__flutter__material.src__material__colors;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const edit_tree = Object.create(dart.library);
  const $toString = dartx.toString;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let RadioOfint = () => (RadioOfint = dart.constFn(radio.Radio$(core.int)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 21,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 21,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 21,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 21,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 21,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 204,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 203,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 27,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "activeColor",
        [_Location_column]: 27,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 216,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 222,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 213,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 27,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "activeColor",
        [_Location_column]: 27,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72, C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 231,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 237,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 228,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 27,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "activeColor",
        [_Location_column]: 27,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86, C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 248,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 254,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 245,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 27,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 266,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "activeColor",
        [_Location_column]: 27,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100, C101 || CT.C101, C102 || CT.C102], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 263,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 271,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 269,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 260,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 210,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294827586.0
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C117 || CT.C117,
        [TextStyle_inherit]: true
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C116 || CT.C116,
        [Text_textSpan]: null,
        [Text_data]: "Cancel"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 25,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 282,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120, C121 || CT.C121, C122 || CT.C122], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 280,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C116 || CT.C116,
        [Text_textSpan]: null,
        [Text_data]: "Submit"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 25,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126, C127 || CT.C127, C128 || CT.C128], widget_inspector._Location);
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C125 || CT.C125,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 290,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 277,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C134 || CT.C134,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139, C140 || CT.C140], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomInset",
        [_Location_column]: 7,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.constList([C146 || CT.C146, C147 || CT.C147], widget_inspector._Location);
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C145 || CT.C145,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 325,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 324,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
        [_Location_line]: 324,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 328,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.constList([C155 || CT.C155, C156 || CT.C156], widget_inspector._Location);
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C154 || CT.C154,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 323,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 323,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C158 || CT.C158,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 322,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 321,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 322,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162, C163 || CT.C163], widget_inspector._Location);
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C161 || CT.C161,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 320,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 337,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 338,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.constList([C166 || CT.C166, C167 || CT.C167], widget_inspector._Location);
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C165 || CT.C165,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 336,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 336,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.constList([C170 || CT.C170], widget_inspector._Location);
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C169 || CT.C169,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 335,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 334,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 335,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.constList([C173 || CT.C173, C174 || CT.C174], widget_inspector._Location);
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C172 || CT.C172,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 333,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 318,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 319,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.constList([C177 || CT.C177, C178 || CT.C178], widget_inspector._Location);
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C176 || CT.C176,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 317,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 317,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.constList([C181 || CT.C181], widget_inspector._Location);
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C180 || CT.C180,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 316,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 315,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 316,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184, C185 || CT.C185], widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C183 || CT.C183,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 314,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 314,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.constList([C188 || CT.C188, C189 || CT.C189], widget_inspector._Location);
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C187 || CT.C187,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 312,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/edit_tree.dart"
      });
    }
  });
  const tree$ = dart.privateName(edit_tree, "EditTree.tree");
  edit_tree.EditTree = class EditTree extends framework.StatefulWidget {
    get tree() {
      return this[tree$];
    }
    set tree(value) {
      super.tree = value;
    }
    createState() {
      return new edit_tree._EditTreeState.new();
    }
  };
  (edit_tree.EditTree.new = function(tree, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[tree$] = tree;
    edit_tree.EditTree.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = edit_tree.EditTree.prototype;
  dart.addTypeTests(edit_tree.EditTree);
  dart.setMethodSignature(edit_tree.EditTree, () => ({
    __proto__: dart.getMethods(edit_tree.EditTree.__proto__),
    createState: dart.fnType(edit_tree._EditTreeState, [])
  }));
  dart.setLibraryUri(edit_tree.EditTree, "package:demo/pages/list_tree_page/edit_tree.dart");
  dart.setFieldSignature(edit_tree.EditTree, () => ({
    __proto__: dart.getFields(edit_tree.EditTree.__proto__),
    tree: dart.finalFieldType(Tree.Tree)
  }));
  const _myTreeType = dart.privateName(edit_tree, "_myTreeType");
  const _handleTaskType = dart.privateName(edit_tree, "_handleTaskType");
  const _myAppBar = dart.privateName(edit_tree, "_myAppBar");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  let C7;
  let C8;
  let C6;
  let C5;
  let C11;
  let C12;
  let C13;
  let C10;
  let C9;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C21;
  let C22;
  let C19;
  let C18;
  let C25;
  let C26;
  let C24;
  let C23;
  let C29;
  let C30;
  let C31;
  let C28;
  let C27;
  let C34;
  let C35;
  let C33;
  let C32;
  let C38;
  let C39;
  let C40;
  let C37;
  let C36;
  let C43;
  let C44;
  let C42;
  let C41;
  let C47;
  let C46;
  let C45;
  let C50;
  let C51;
  let C49;
  let C48;
  let C54;
  let C53;
  let C52;
  let C57;
  let C58;
  let C59;
  let C60;
  let C56;
  let C55;
  let C63;
  let C64;
  let C62;
  let C61;
  let C67;
  let C68;
  let C66;
  let C65;
  let C71;
  let C72;
  let C73;
  let C74;
  let C70;
  let C69;
  let C77;
  let C78;
  let C76;
  let C75;
  let C81;
  let C82;
  let C80;
  let C79;
  let C85;
  let C86;
  let C87;
  let C88;
  let C84;
  let C83;
  let C91;
  let C92;
  let C90;
  let C89;
  let C95;
  let C96;
  let C94;
  let C93;
  let C99;
  let C100;
  let C101;
  let C102;
  let C98;
  let C97;
  let C105;
  let C106;
  let C104;
  let C103;
  let C109;
  let C110;
  let C108;
  let C107;
  let C113;
  let C114;
  let C112;
  let C111;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  const Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  const Text_maxLines = dart.privateName(text, "Text.maxLines");
  const Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  const Text_overflow = dart.privateName(text, "Text.overflow");
  const Text_softWrap = dart.privateName(text, "Text.softWrap");
  const Text_locale = dart.privateName(text, "Text.locale");
  const Text_textDirection = dart.privateName(text, "Text.textDirection");
  const Text_textAlign = dart.privateName(text, "Text.textAlign");
  const Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  const TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  const Color_value = dart.privateName(ui, "Color.value");
  let C117;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C116;
  const Text_style = dart.privateName(text, "Text.style");
  const Text_textSpan = dart.privateName(text, "Text.textSpan");
  const Text_data = dart.privateName(text, "Text.data");
  let C115;
  let C120;
  let C121;
  let C122;
  let C119;
  let C118;
  let C123;
  let C126;
  let C127;
  let C128;
  let C125;
  let C124;
  let C131;
  let C132;
  let C130;
  let C129;
  let C135;
  let C134;
  let C133;
  let C138;
  let C139;
  let C140;
  let C137;
  let C136;
  let C143;
  let C142;
  let C141;
  let C146;
  let C147;
  let C145;
  let C144;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C148;
  let C151;
  let C152;
  let C150;
  let C149;
  let C155;
  let C156;
  let C154;
  let C153;
  let C159;
  let C158;
  let C157;
  let C162;
  let C163;
  let C161;
  let C160;
  let C166;
  let C167;
  let C165;
  let C164;
  let C170;
  let C169;
  let C168;
  let C173;
  let C174;
  let C172;
  let C171;
  let C177;
  let C178;
  let C176;
  let C175;
  let C181;
  let C180;
  let C179;
  let C184;
  let C185;
  let C183;
  let C182;
  let C188;
  let C189;
  let C187;
  let C186;
  edit_tree._EditTreeState = class _EditTreeState extends framework.State$(edit_tree.EditTree) {
    initState() {
      this.id = this.widget.tree.id;
      this.name = this.widget.tree.name;
      this.age = dart.toString(this.widget.tree.age);
      this.status = this.widget.tree.status;
      this.image = this.widget.tree.image;
      this.area = this.widget.tree.area;
      this.record = this.widget.tree.record;
      this.comment = this.widget.tree.comment;
    }
    getName(name) {
      this.name = core.String._check(name);
    }
    getAge(age) {
      this.age = core.String._check(age);
    }
    getStatus(status) {
      this.status = core.String._check(status);
    }
    getImage(image) {
      this.image = this.name;
    }
    getArea(area) {
      this.area = core.String._check(area);
    }
    [_handleTaskType](value) {
      this.setState(dart.fn(() => {
        this[_myTreeType] = value;
        switch (this[_myTreeType]) {
          case 1:
          {
            this.taskVal = "Flower";
            break;
          }
          case 2:
          {
            this.taskVal = "Fruit";
            break;
          }
          case 3:
          {
            this.taskVal = "Wood";
            break;
          }
          case 4:
          {
            this.taskVal = "Grass";
            break;
          }
        }
      }, VoidToNull()));
    }
    createData() {
      return async.async(dart.dynamic, (function* createData() {
        let t0;
        let id = new framework.UniqueKey.new().toString();
        let isFlower = false;
        let isFruit = false;
        let isWood = false;
        let isGrass = false;
        switch (this[_myTreeType]) {
          case 1:
          {
            isFlower = true;
            break;
          }
          case 2:
          {
            isFruit = true;
            break;
          }
          case 3:
          {
            isWood = true;
            break;
          }
          case 4:
          {
            isGrass = true;
            break;
          }
        }
        let todo = JSArrayOfString().of([]);
        let prefs = (yield shared_preferences.SharedPreferences.getInstance());
        let age = core.int.parse(this.age);
        let idUser = (t0 = prefs.getString("uid"), t0 == null ? 0 : t0);
        let idTreeFireStore = this.id;
        let record = this.record;
        let comment = this.comment;
        this.fireService.updateData(idTreeFireStore, id, this.image, this.status, isFlower, isFruit, isWood, isGrass, this.name, age, this.area, todo, idUser, record, comment);
      }).bind(this));
    }
    build(context) {
      let _controllerName = new editable_text.TextEditingController.new();
      _controllerName.text = this.name;
      let _controllerAge = new editable_text.TextEditingController.new();
      _controllerAge.text = this.age;
      let _controllerStatus = new editable_text.TextEditingController.new();
      _controllerStatus.text = this.status;
      let _controllerImage = new editable_text.TextEditingController.new();
      _controllerImage.text = this.image;
      let _controllerArea = new editable_text.TextEditingController.new();
      _controllerArea.text = this.area;
      return new scaffold.Scaffold.new({resizeToAvoidBottomInset: false, body: new basic.Column.new({children: JSArrayOfWidget().of([this[_myAppBar](), new container.Container.new({width: media_query.MediaQuery.of(context).size.width, height: dart.notNull(media_query.MediaQuery.of(context).size.height) - 80, child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0}), child: new text_field.TextField.new({controller: _controllerName, onChanged: dart.fn(name => {
                        this.getName(name);
                      }, StringToNull()), decoration: new input_decorator.InputDecoration.new({labelText: "Name: "}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0}), child: new text_field.TextField.new({controller: _controllerAge, decoration: new input_decorator.InputDecoration.new({labelText: "Age: "}), onChanged: dart.fn(age => {
                        this.getAge(age);
                      }, StringToNull()), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0}), child: new text_field.TextField.new({controller: _controllerStatus, decoration: new input_decorator.InputDecoration.new({labelText: "Status: "}), onChanged: dart.fn(taskdate => {
                        this.getStatus(taskdate);
                      }, StringToNull()), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0}), child: new text_field.TextField.new({controller: _controllerImage, decoration: new input_decorator.InputDecoration.new({labelText: "Image: "}), onChanged: dart.fn(image => {
                        this.getImage(image);
                      }, StringToNull()), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0}), child: new text_field.TextField.new({controller: _controllerArea, decoration: new input_decorator.InputDecoration.new({labelText: "Area: "}), onChanged: dart.fn(area => {
                        this.getArea(area);
                      }, StringToNull()), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), new basic.Center.new({child: new text.Text.new("Select Tree Type:", {style: new text_style.TextStyle.new({fontSize: 20.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new (RadioOfint()).new({value: 1, groupValue: this[_myTreeType], onChanged: dart.bind(this, _handleTaskType), activeColor: new ui.Color.new(4282472634), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), new text.Text.new("Flower", {style: new text_style.TextStyle.new({fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61})]), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new (RadioOfint()).new({value: 2, groupValue: this[_myTreeType], onChanged: dart.bind(this, _handleTaskType), activeColor: new ui.Color.new(4294660991), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), new text.Text.new("Fruit", {style: new text_style.TextStyle.new({fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C75 || CT.C75})]), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new (RadioOfint()).new({value: 3, groupValue: this[_myTreeType], onChanged: dart.bind(this, _handleTaskType), activeColor: new ui.Color.new(4283215696), $creationLocationd_0dea112b090073317d4: C83 || CT.C83}), new text.Text.new("Wood", {style: new text_style.TextStyle.new({fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C89 || CT.C89})]), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new (RadioOfint()).new({value: 4, groupValue: this[_myTreeType], onChanged: dart.bind(this, _handleTaskType), activeColor: new ui.Color.new(4288242384), $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), new text.Text.new("Grass", {style: new text_style.TextStyle.new({fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C103 || CT.C103})]), $creationLocationd_0dea112b090073317d4: C107 || CT.C107})]), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new raised_button.RaisedButton.new({color: new ui.Color.new(4294603671), onPressed: dart.fn(() => {
                          navigator.Navigator.of(context).pop(core.Object);
                        }, VoidToNull()), child: C115 || CT.C115, $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), new raised_button.RaisedButton.new({color: new ui.Color.new(4294603671), onPressed: dart.fn(() => {
                          this.createData();
                          navigator.Navigator.pop(core.Object, context);
                          navigator.Navigator.pop(core.Object, context);
                        }, VoidToNull()), child: C123 || CT.C123, $creationLocationd_0dea112b090073317d4: C124 || CT.C124})]), $creationLocationd_0dea112b090073317d4: C129 || CT.C129})]), $creationLocationd_0dea112b090073317d4: C133 || CT.C133}), $creationLocationd_0dea112b090073317d4: C136 || CT.C136})]), $creationLocationd_0dea112b090073317d4: C141 || CT.C141}), $creationLocationd_0dea112b090073317d4: C144 || CT.C144});
    }
    [_myAppBar]() {
      return new container.Container.new({width: media_query.MediaQuery.of(this.context).size.width, child: new basic.Padding.new({padding: C148 || CT.C148, child: new basic.Center.new({child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new basic.Expanded.new({flex: 1, child: new container.Container.new({child: new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.list, {color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C149 || CT.C149}), onPressed: dart.fn(() => {
                        navigator.Navigator.pop(core.Object, this.context);
                      }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C153 || CT.C153}), $creationLocationd_0dea112b090073317d4: C157 || CT.C157}), $creationLocationd_0dea112b090073317d4: C160 || CT.C160}), new basic.Expanded.new({flex: 5, child: new container.Container.new({child: new text.Text.new("New Tasks", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontWeight: ui.FontWeight.bold, fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C164 || CT.C164}), $creationLocationd_0dea112b090073317d4: C168 || CT.C168}), $creationLocationd_0dea112b090073317d4: C171 || CT.C171})]), $creationLocationd_0dea112b090073317d4: C175 || CT.C175}), $creationLocationd_0dea112b090073317d4: C179 || CT.C179}), $creationLocationd_0dea112b090073317d4: C182 || CT.C182}), $creationLocationd_0dea112b090073317d4: C186 || CT.C186});
    }
  };
  (edit_tree._EditTreeState.new = function() {
    this.fireService = new FirestoreService.FirestoreService.new();
    this.id = null;
    this.name = null;
    this.age = null;
    this.status = null;
    this.image = null;
    this.area = null;
    this.record = null;
    this.comment = null;
    this[_myTreeType] = 0;
    this.taskVal = null;
    edit_tree._EditTreeState.__proto__.new.call(this);
    ;
  }).prototype = edit_tree._EditTreeState.prototype;
  dart.addTypeTests(edit_tree._EditTreeState);
  dart.setMethodSignature(edit_tree._EditTreeState, () => ({
    __proto__: dart.getMethods(edit_tree._EditTreeState.__proto__),
    getName: dart.fnType(dart.dynamic, [dart.dynamic]),
    getAge: dart.fnType(dart.dynamic, [dart.dynamic]),
    getStatus: dart.fnType(dart.dynamic, [dart.dynamic]),
    getImage: dart.fnType(dart.dynamic, [dart.dynamic]),
    getArea: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_handleTaskType]: dart.fnType(dart.void, [core.int]),
    createData: dart.fnType(dart.dynamic, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_myAppBar]: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(edit_tree._EditTreeState, "package:demo/pages/list_tree_page/edit_tree.dart");
  dart.setFieldSignature(edit_tree._EditTreeState, () => ({
    __proto__: dart.getFields(edit_tree._EditTreeState.__proto__),
    fireService: dart.fieldType(FirestoreService.FirestoreService),
    id: dart.fieldType(core.String),
    name: dart.fieldType(core.String),
    age: dart.fieldType(core.String),
    status: dart.fieldType(core.String),
    image: dart.fieldType(core.String),
    area: dart.fieldType(core.String),
    record: dart.fieldType(core.String),
    comment: dart.fieldType(core.List$(core.String)),
    [_myTreeType]: dart.fieldType(core.int),
    taskVal: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/demo/pages/list_tree_page/edit_tree", {
    "package:demo/pages/list_tree_page/edit_tree.dart": edit_tree
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["edit_tree.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"edit_tree.ddc.js"}');
  // Exports:
  return {
    pages__list_tree_page__edit_tree: edit_tree
  };
});

//# sourceMappingURL=edit_tree.ddc.js.map
