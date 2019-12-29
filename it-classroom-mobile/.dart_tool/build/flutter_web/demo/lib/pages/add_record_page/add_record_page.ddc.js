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
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const Tree = packages__demo__models__Tree.models__Tree;
  const FirestoreService = packages__demo__services__FirestoreService.services__FirestoreService;
  const shared_preferences = packages__shared_preferences__shared_preferences.shared_preferences;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const radio = packages__flutter__material.src__material__radio;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const colors = packages__flutter__material.src__material__colors;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const add_record_page = Object.create(dart.library);
  const $toString = dartx.toString;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let RadioOfint = () => (RadioOfint = dart.constFn(radio.Radio$(core.int)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 27,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "activeColor",
        [_Location_column]: 27,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 164,
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
        [_Location_column]: 25,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 27,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "activeColor",
        [_Location_column]: 27,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 168,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 27,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "activeColor",
        [_Location_column]: 27,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 196,
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
        [_Location_column]: 25,
        [_Location_line]: 194,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 27,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "activeColor",
        [_Location_column]: 27,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52, C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 203,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 209,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294827586.0
      });
    },
    get C68() {
      return C68 = dart.const({
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
        [TextStyle_color]: C69 || CT.C69,
        [TextStyle_inherit]: true
      });
    },
    get C67() {
      return C67 = dart.const({
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
        [Text_style]: C68 || CT.C68,
        [Text_textSpan]: null,
        [Text_data]: "Cancel"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 25,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
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
        [Text_style]: C68 || CT.C68,
        [Text_textSpan]: null,
        [Text_data]: "Submit"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 25,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 230,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91, C92 || CT.C92], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomInset",
        [_Location_column]: 7,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 266,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103, C104 || CT.C104], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 264,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 268,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107, C108 || CT.C108], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C106 || CT.C106,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 263,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 262,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114, C115 || CT.C115], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 260,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118, C119 || CT.C119], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 276,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 276,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C121 || CT.C121,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 275,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 275,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.constList([C125 || CT.C125, C126 || CT.C126], widget_inspector._Location);
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C124 || CT.C124,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 273,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 257,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 256,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.constList([C136 || CT.C136, C137 || CT.C137], widget_inspector._Location);
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C135 || CT.C135,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 254,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140, C141 || CT.C141], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 252,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/add_record_page/add_record_page.dart"
      });
    }
  });
  const tree$ = dart.privateName(add_record_page, "AddRecord.tree");
  add_record_page.AddRecord = class AddRecord extends framework.StatefulWidget {
    get tree() {
      return this[tree$];
    }
    set tree(value) {
      super.tree = value;
    }
    createState() {
      return new add_record_page._AddRecordState.new();
    }
  };
  (add_record_page.AddRecord.new = function(tree, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[tree$] = tree;
    add_record_page.AddRecord.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = add_record_page.AddRecord.prototype;
  dart.addTypeTests(add_record_page.AddRecord);
  dart.setMethodSignature(add_record_page.AddRecord, () => ({
    __proto__: dart.getMethods(add_record_page.AddRecord.__proto__),
    createState: dart.fnType(add_record_page._AddRecordState, [])
  }));
  dart.setLibraryUri(add_record_page.AddRecord, "package:demo/pages/add_record_page/add_record_page.dart");
  dart.setFieldSignature(add_record_page.AddRecord, () => ({
    __proto__: dart.getFields(add_record_page.AddRecord.__proto__),
    tree: dart.finalFieldType(Tree.Tree)
  }));
  const _myTreeType = dart.privateName(add_record_page, "_myTreeType");
  const _handleTaskType = dart.privateName(add_record_page, "_handleTaskType");
  const _myAppBar = dart.privateName(add_record_page, "_myAppBar");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C5;
  let C4;
  let C9;
  let C10;
  let C11;
  let C12;
  let C8;
  let C7;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C24;
  let C25;
  let C26;
  let C22;
  let C21;
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C34;
  let C32;
  let C31;
  let C37;
  let C38;
  let C39;
  let C40;
  let C36;
  let C35;
  let C43;
  let C44;
  let C42;
  let C41;
  let C47;
  let C48;
  let C46;
  let C45;
  let C51;
  let C52;
  let C53;
  let C54;
  let C50;
  let C49;
  let C57;
  let C58;
  let C56;
  let C55;
  let C61;
  let C62;
  let C60;
  let C59;
  let C65;
  let C66;
  let C64;
  let C63;
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
  let C69;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C68;
  const Text_style = dart.privateName(text, "Text.style");
  const Text_textSpan = dart.privateName(text, "Text.textSpan");
  const Text_data = dart.privateName(text, "Text.data");
  let C67;
  let C72;
  let C73;
  let C74;
  let C71;
  let C70;
  let C75;
  let C78;
  let C79;
  let C80;
  let C77;
  let C76;
  let C83;
  let C84;
  let C82;
  let C81;
  let C87;
  let C86;
  let C85;
  let C90;
  let C91;
  let C92;
  let C89;
  let C88;
  let C95;
  let C94;
  let C93;
  let C98;
  let C99;
  let C97;
  let C96;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C100;
  let C103;
  let C104;
  let C102;
  let C101;
  let C107;
  let C108;
  let C106;
  let C105;
  let C111;
  let C110;
  let C109;
  let C114;
  let C115;
  let C113;
  let C112;
  let C118;
  let C119;
  let C117;
  let C116;
  let C122;
  let C121;
  let C120;
  let C125;
  let C126;
  let C124;
  let C123;
  let C129;
  let C130;
  let C128;
  let C127;
  let C133;
  let C132;
  let C131;
  let C136;
  let C137;
  let C135;
  let C134;
  let C140;
  let C141;
  let C139;
  let C138;
  add_record_page._AddRecordState = class _AddRecordState extends framework.State$(add_record_page.AddRecord) {
    initState() {
      this.tree = this.widget.tree;
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
            this.taskVal = "Cut Leaf";
            break;
          }
          case 2:
          {
            this.taskVal = "Fertilize";
            break;
          }
          case 3:
          {
            this.taskVal = "Cut Branch";
            break;
          }
          case 4:
          {
            this.taskVal = "Water";
            break;
          }
        }
      }, VoidToNull()));
    }
    createData() {
      return async.async(dart.dynamic, (function* createData() {
        let t0, t0$;
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
        let comment = this.comment;
        let email = (t0$ = prefs.getString("email"), t0$ == null ? 0 : t0$);
        this.tree.updateRecord(this.taskVal, email);
        core.print(dart.toString(this.tree.record));
        this.fireService.updateData(idTreeFireStore, id, this.image, this.status, isFlower, isFruit, isWood, isGrass, this.name, age, this.area, todo, idUser, this.tree.record, comment);
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
      return new scaffold.Scaffold.new({resizeToAvoidBottomInset: false, body: new basic.Column.new({children: JSArrayOfWidget().of([this[_myAppBar](), new container.Container.new({width: media_query.MediaQuery.of(context).size.width, height: dart.notNull(media_query.MediaQuery.of(context).size.height) - 80, child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new basic.Center.new({child: new text.Text.new("Select Action:", {style: new text_style.TextStyle.new({fontSize: 20.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new (RadioOfint()).new({value: 1, groupValue: this[_myTreeType], onChanged: dart.bind(this, _handleTaskType), activeColor: new ui.Color.new(4282472634), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new text.Text.new("Cut Leaf", {style: new text_style.TextStyle.new({fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13})]), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new (RadioOfint()).new({value: 2, groupValue: this[_myTreeType], onChanged: dart.bind(this, _handleTaskType), activeColor: new ui.Color.new(4294660991), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new text.Text.new("Fertilize", {style: new text_style.TextStyle.new({fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27})]), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new (RadioOfint()).new({value: 3, groupValue: this[_myTreeType], onChanged: dart.bind(this, _handleTaskType), activeColor: new ui.Color.new(4283215696), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), new text.Text.new("Cut branch", {style: new text_style.TextStyle.new({fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41})]), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new (RadioOfint()).new({value: 4, groupValue: this[_myTreeType], onChanged: dart.bind(this, _handleTaskType), activeColor: new ui.Color.new(4288242384), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), new text.Text.new("Water", {style: new text_style.TextStyle.new({fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55})]), $creationLocationd_0dea112b090073317d4: C59 || CT.C59})]), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new raised_button.RaisedButton.new({color: new ui.Color.new(4294603671), onPressed: dart.fn(() => {
                          navigator.Navigator.of(context).pop(core.Object);
                        }, VoidToNull()), child: C67 || CT.C67, $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), new raised_button.RaisedButton.new({color: new ui.Color.new(4294603671), onPressed: dart.fn(() => {
                          this.createData();
                          navigator.Navigator.pop(core.Object, context);
                          navigator.Navigator.pop(core.Object, context);
                        }, VoidToNull()), child: C75 || CT.C75, $creationLocationd_0dea112b090073317d4: C76 || CT.C76})]), $creationLocationd_0dea112b090073317d4: C81 || CT.C81})]), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88})]), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), $creationLocationd_0dea112b090073317d4: C96 || CT.C96});
    }
    [_myAppBar]() {
      return new container.Container.new({width: media_query.MediaQuery.of(this.context).size.width, child: new basic.Padding.new({padding: C100 || CT.C100, child: new basic.Center.new({child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new basic.Expanded.new({flex: 1, child: new container.Container.new({child: new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.list, {color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C101 || CT.C101}), onPressed: dart.fn(() => {
                        navigator.Navigator.pop(core.Object, this.context);
                      }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C105 || CT.C105}), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), $creationLocationd_0dea112b090073317d4: C112 || CT.C112}), new basic.Expanded.new({flex: 5, child: new container.Container.new({child: new text.Text.new("New Tasks", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontWeight: ui.FontWeight.bold, fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C116 || CT.C116}), $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), $creationLocationd_0dea112b090073317d4: C123 || CT.C123})]), $creationLocationd_0dea112b090073317d4: C127 || CT.C127}), $creationLocationd_0dea112b090073317d4: C131 || CT.C131}), $creationLocationd_0dea112b090073317d4: C134 || CT.C134}), $creationLocationd_0dea112b090073317d4: C138 || CT.C138});
    }
  };
  (add_record_page._AddRecordState.new = function() {
    this.fireService = new FirestoreService.FirestoreService.new();
    this.id = null;
    this.name = null;
    this.age = null;
    this.status = null;
    this.image = null;
    this.area = null;
    this.record = null;
    this.comment = null;
    this.tree = null;
    this[_myTreeType] = 0;
    this.taskVal = null;
    add_record_page._AddRecordState.__proto__.new.call(this);
    ;
  }).prototype = add_record_page._AddRecordState.prototype;
  dart.addTypeTests(add_record_page._AddRecordState);
  dart.setMethodSignature(add_record_page._AddRecordState, () => ({
    __proto__: dart.getMethods(add_record_page._AddRecordState.__proto__),
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
  dart.setLibraryUri(add_record_page._AddRecordState, "package:demo/pages/add_record_page/add_record_page.dart");
  dart.setFieldSignature(add_record_page._AddRecordState, () => ({
    __proto__: dart.getFields(add_record_page._AddRecordState.__proto__),
    fireService: dart.fieldType(FirestoreService.FirestoreService),
    id: dart.fieldType(core.String),
    name: dart.fieldType(core.String),
    age: dart.fieldType(core.String),
    status: dart.fieldType(core.String),
    image: dart.fieldType(core.String),
    area: dart.fieldType(core.String),
    record: dart.fieldType(core.String),
    comment: dart.fieldType(core.List$(core.String)),
    tree: dart.fieldType(Tree.Tree),
    [_myTreeType]: dart.fieldType(core.int),
    taskVal: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/demo/pages/add_record_page/add_record_page", {
    "package:demo/pages/add_record_page/add_record_page.dart": add_record_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["add_record_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQa;;;;;;;AAGsB;IAAiB;;4CAFnC;;;AAAf;;EAAoB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYK,MAAlB,YAAO,AAAO;AACK,MAAnB,UAAK,AAAO,AAAK;AACM,MAAvB,YAAO,AAAO,AAAK;AACa,MAAhC,WAAsB,cAAhB,AAAO,AAAK;AACS,MAA3B,cAAS,AAAO,AAAK;AACI,MAAzB,aAAQ,AAAO,AAAK;AACG,MAAvB,YAAO,AAAO,AAAK;AACQ,MAA3B,cAAS,AAAO,AAAK;AACQ,MAA7B,eAAU,AAAO,AAAK;IAC7B;YAEQ;AACU,kBAAX,mBAAO,IAAI;IAClB;WAEO;AACS,iBAAT,mBAAM,GAAG;IAChB;cAEU;AACY,oBAAf,mBAAS,MAAM;IACtB;aAES;AACU,MAAZ,aAAQ;IACf;YAEQ;AACU,kBAAX,mBAAO,IAAI;IAClB;sBAIyB;AAiBrB,MAhBF,cAAS;AACY,QAAnB,oBAAc,KAAK;AACnB,gBAAQ;;;AAEgB,YAApB,eAAU;AACV;;;;AAEqB,YAArB,eAAU;AACV;;;;AAEsB,YAAtB,eAAU;AACV;;;;AAEiB,YAAjB,eAAU;AACV;;;;IAGR;;AAEU;;AACJ,iBAAK,AAAY;AAEjB,uBAAW;AAAO,sBAAU;AAAO,qBAAS;AAAO,sBAAU;AACjE,gBAAQ;;;AAEW,YAAf,WAAW;AACX;;;;AAEc,YAAd,UAAU;AACV;;;;AAEa,YAAb,SAAS;AACT;;;;AAEc,YAAd,UAAU;AACV;;;AAGA,mBAAO;AACL,qBAAQ,MAAwB;AAClC,kBAAU,eAAW;AACrB,sBAAgC,KAAvB,AAAM,KAAD,WAAW,cAAV,OAAoB;AACnC,8BAAuB;AACvB,sBAAe;AACf,qBAAiC,MAAzB,AAAM,KAAD,WAAW,iBAAV,OAAsB;AACP,QAAjC,AAAK,uBAAa,cAAS,KAAK;AACH,QAA7B,WAAkB,cAAZ,AAAK;AAgBC,QAfZ,AAAY,4BACR,eAAe,EACf,EAAE,EACF,YACA,aACA,QAAQ,EACR,OAAO,EACP,MAAM,EACN,OAAO,EACP,WACA,GAAG,EACH,WACA,IAAI,EACJ,MAAM,EACN,AAAK,kBACL,OAAO;MACb;;UAG0B;AACF,4BAAsB;AACZ,MAAhC,AAAgB,eAAD,QAAa;AACN,2BAAqB;AACb,MAA9B,AAAe,cAAD,QAAa;AACL,8BAAwB;AACV,MAApC,AAAkB,iBAAD,QAAa;AACR,6BAAuB;AACX,MAAlC,AAAiB,gBAAD,QAAa;AACP,4BAAsB;AACZ,MAAhC,AAAgB,eAAD,QAAa;AAC5B,YAAO,sDACqB,aACpB,gCACc,sBAChB,mBACA,oCACoB,AAAY,AAAK,0BAAd,OAAO,sBACe,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,WACtC,wCACa,sBAChB,6BACS,kBACL,0BAEI,wCAAoB,kBAA6B,oIAGzD,yCACuC,yCACnB,sBAChB,sCACuC,wCACnB,sBAChB,+BACS,eACK,wCACD,qCACE,iBAAM,oEAErB,kBACE,oBACO,wCAAoB,4HAIjC,sCACuC,wCACnB,sBAChB,+BACS,eACK,wCACD,qCACE,iBAAM,sEAErB,kBACE,qBACO,wCACK,4HAKlB,sCACuC,wCACnB,sBAChB,+BACS,eACK,wCACD,qCACE,iBAAM,sEAErB,kBACE,sBACO,wCAAoB,4HAIjC,sCACuC,wCACnB,sBAChB,+BACS,eACK,wCACD,qCACE,iBAAM,sEAErB,kBACE,iBACO,wCAAoB,uLAMrC,sCACuC,8CACnB,sBAChB,2CACW,iBAAM,wBACF;AACkB,0BAAjB,AAAY,uBAAT,OAAO;yHAO1B,2CACW,iBAAM,wBACF;AACG,0BAAZ;AACsB,0BAAZ,qCAAI,OAAO;AACC,0BAAZ,qCAAI,OAAO;;IAc7C;;AAGE,YAAO,qCACa,AAAY,AAAK,0BAAd,iCACd,wDAEE,6BACI,sCAC4B,8CACnB,sBAChB,8BACQ,UACC,oCACE,sCACG,kBACE,0BACQ,2FAEL;AACa,wBAAZ,qCAAI;yNAIxB,8BACQ,UACC,oCACE,kBACL,qBACO,qCACW,iCACS,8BACb;IAQ9B;;;IAjRiB,mBAAkB;IAE5B;IAAI;IAAM;IAAK;IAAQ;IAAO;IAAM;IAC9B;IACR;IAiCD,oBAAc;IACX;;;EA4OT","file":"add_record_page.ddc.js"}');
  // Exports:
  return {
    pages__add_record_page__add_record_page: add_record_page
  };
});

//# sourceMappingURL=add_record_page.ddc.js.map
