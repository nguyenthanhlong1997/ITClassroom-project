define([
  "dart_sdk",
  "packages/flutter/src/widgets/actions",
  "packages/demo/services/authentication",
  "packages/flutter/material",
  "packages/flutter/src/painting/_network_image_web",
  "packages/flutter/src/gestures/arena"
], function(
  dart_sdk,
  packages__flutter__src__widgets__actions,
  packages__demo__services__authentication,
  packages__flutter__material,
  packages__flutter__src__painting___network_image_web,
  packages__flutter__src__gestures__arena
) {
  "use strict";
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework =
    packages__flutter__src__widgets__actions.src__widgets__framework;
  const form = packages__flutter__src__widgets__actions.src__widgets__form;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container =
    packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector =
    packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const authentication =
    packages__demo__services__authentication.services__authentication;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const progress_indicator =
    packages__flutter__material.src__material__progress_indicator;
  const text_form_field =
    packages__flutter__material.src__material__text_form_field;
  const input_decorator =
    packages__flutter__material.src__material__input_decorator;
  const icons = packages__flutter__material.src__material__icons;
  const material_button =
    packages__flutter__material.src__material__material_button;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const edge_insets =
    packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration =
    packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border =
    packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const decoration_image =
    packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const box_fit =
    packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const _network_image_web =
    packages__flutter__src__painting___network_image_web.src__painting___network_image_web;
  const text_style =
    packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const text_input =
    packages__flutter__src__gestures__arena.src__services__text_input;
  const login_signup_page = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $trim = dartx.trim;
  let GlobalKeyOfFormState = () =>
    (GlobalKeyOfFormState = dart.constFn(
      framework.GlobalKey$(form.FormState)
    ))();
  let JSArrayOfWidget = () =>
    (JSArrayOfWidget = dart.constFn(
      _interceptors.JSArray$(framework.Widget)
    ))();
  let StringToString = () =>
    (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let VoidToNull = () =>
    (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return (C0 = dart.const({
        __proto__: login_signup_page.FormMode.prototype,
        [_name$]: "FormMode.LOGIN",
        index: 0
      }));
    },
    get C1() {
      return (C1 = dart.const({
        __proto__: login_signup_page.FormMode.prototype,
        [_name$]: "FormMode.SIGNUP",
        index: 1
      }));
    },
    get C2() {
      return (C2 = dart.constList(
        [C0 || CT.C0, C1 || CT.C1],
        login_signup_page.FormMode
      ));
    },
    get C3() {
      return (C3 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 20
      }));
    },
    get C4() {
      return (C4 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 40,
        [EdgeInsets_left]: 0
      }));
    },
    get C7() {
      return (C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 17,
        [_Location_line]: 33,
        [_Location_file]: null
      }));
    },
    get C8() {
      return (C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 34,
        [_Location_file]: null
      }));
    },
    get C9() {
      return (C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 35,
        [_Location_file]: null
      }));
    },
    get C10() {
      return (C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 36,
        [_Location_file]: null
      }));
    },
    get C6() {
      return (C6 = dart.constList(
        [C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10],
        widget_inspector._Location
      ));
    },
    get C5() {
      return (C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 32,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C13() {
      return (C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 31,
        [_Location_file]: null
      }));
    },
    get C14() {
      return (C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 32,
        [_Location_file]: null
      }));
    },
    get C12() {
      return (C12 = dart.constList(
        [C13 || CT.C13, C14 || CT.C14],
        widget_inspector._Location
      ));
    },
    get C11() {
      return (C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 30,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C17() {
      return (C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      }));
    },
    get C16() {
      return (C16 = dart.constList(
        [C17 || CT.C17],
        widget_inspector._Location
      ));
    },
    get C15() {
      return (C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 28,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C20() {
      return (C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomPadding",
        [_Location_column]: 7,
        [_Location_line]: 27,
        [_Location_file]: null
      }));
    },
    get C21() {
      return (C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      }));
    },
    get C19() {
      return (C19 = dart.constList(
        [C20 || CT.C20, C21 || CT.C21],
        widget_inspector._Location
      ));
    },
    get C18() {
      return (C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 26,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C23() {
      return (C23 = dart.constList([], widget_inspector._Location));
    },
    get C22() {
      return (C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 56,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C26() {
      return (C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 56,
        [_Location_file]: null
      }));
    },
    get C25() {
      return (C25 = dart.constList(
        [C26 || CT.C26],
        widget_inspector._Location
      ));
    },
    get C24() {
      return (C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 56,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C29() {
      return (C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 59,
        [_Location_file]: null
      }));
    },
    get C30() {
      return (C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 60,
        [_Location_file]: null
      }));
    },
    get C28() {
      return (C28 = dart.constList(
        [C29 || CT.C29, C30 || CT.C30],
        widget_inspector._Location
      ));
    },
    get C27() {
      return (C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 58,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C33() {
      return (C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 68,
        [_Location_file]: null
      }));
    },
    get C32() {
      return (C32 = dart.constList(
        [C33 || CT.C33],
        widget_inspector._Location
      ));
    },
    get C31() {
      return (C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 67,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C36() {
      return (C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 66,
        [_Location_file]: null
      }));
    },
    get C37() {
      return (C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 67,
        [_Location_file]: null
      }));
    },
    get C35() {
      return (C35 = dart.constList(
        [C36 || CT.C36, C37 || CT.C37],
        widget_inspector._Location
      ));
    },
    get C34() {
      return (C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 65,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C38() {
      return (C38 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 100,
        [EdgeInsets_left]: 0
      }));
    },
    get C41() {
      return (C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
        [_Location_line]: 86,
        [_Location_file]: null
      }));
    },
    get C42() {
      return (C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: null
      }));
    },
    get C40() {
      return (C40 = dart.constList(
        [C41 || CT.C41, C42 || CT.C42],
        widget_inspector._Location
      ));
    },
    get C39() {
      return (C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 85,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C45() {
      return (C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 9,
        [_Location_line]: 80,
        [_Location_file]: null
      }));
    },
    get C46() {
      return (C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 9,
        [_Location_line]: 81,
        [_Location_file]: null
      }));
    },
    get C47() {
      return (C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 9,
        [_Location_line]: 82,
        [_Location_file]: null
      }));
    },
    get C48() {
      return (C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 83,
        [_Location_file]: null
      }));
    },
    get C49() {
      return (C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 9,
        [_Location_line]: 89,
        [_Location_file]: null
      }));
    },
    get C50() {
      return (C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 9,
        [_Location_line]: 90,
        [_Location_file]: null
      }));
    },
    get C44() {
      return (C44 = dart.constList(
        [
          C45 || CT.C45,
          C46 || CT.C46,
          C47 || CT.C47,
          C48 || CT.C48,
          C49 || CT.C49,
          C50 || CT.C50
        ],
        widget_inspector._Location
      ));
    },
    get C43() {
      return (C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 79,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C53() {
      return (C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 78,
        [_Location_file]: null
      }));
    },
    get C54() {
      return (C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 79,
        [_Location_file]: null
      }));
    },
    get C52() {
      return (C52 = dart.constList(
        [C53 || CT.C53, C54 || CT.C54],
        widget_inspector._Location
      ));
    },
    get C51() {
      return (C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 77,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C55() {
      return (C55 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 15,
        [EdgeInsets_left]: 0
      }));
    },
    get C58() {
      return (C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
        [_Location_line]: 105,
        [_Location_file]: null
      }));
    },
    get C59() {
      return (C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 106,
        [_Location_file]: null
      }));
    },
    get C57() {
      return (C57 = dart.constList(
        [C58 || CT.C58, C59 || CT.C59],
        widget_inspector._Location
      ));
    },
    get C56() {
      return (C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 104,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C62() {
      return (C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 9,
        [_Location_line]: 99,
        [_Location_file]: null
      }));
    },
    get C63() {
      return (C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 9,
        [_Location_line]: 100,
        [_Location_file]: null
      }));
    },
    get C64() {
      return (C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 9,
        [_Location_line]: 101,
        [_Location_file]: null
      }));
    },
    get C65() {
      return (C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 102,
        [_Location_file]: null
      }));
    },
    get C66() {
      return (C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 9,
        [_Location_line]: 108,
        [_Location_file]: null
      }));
    },
    get C67() {
      return (C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 9,
        [_Location_line]: 109,
        [_Location_file]: null
      }));
    },
    get C61() {
      return (C61 = dart.constList(
        [
          C62 || CT.C62,
          C63 || CT.C63,
          C64 || CT.C64,
          C65 || CT.C65,
          C66 || CT.C66,
          C67 || CT.C67
        ],
        widget_inspector._Location
      ));
    },
    get C60() {
      return (C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 98,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C70() {
      return (C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 97,
        [_Location_file]: null
      }));
    },
    get C71() {
      return (C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 98,
        [_Location_file]: null
      }));
    },
    get C69() {
      return (C69 = dart.constList(
        [C70 || CT.C70, C71 || CT.C71],
        widget_inspector._Location
      ));
    },
    get C68() {
      return (C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 96,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C74() {
      return (C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 123,
        [_Location_file]: null
      }));
    },
    get C75() {
      return (C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 124,
        [_Location_file]: null
      }));
    },
    get C73() {
      return (C73 = dart.constList(
        [C74 || CT.C74, C75 || CT.C75],
        widget_inspector._Location
      ));
    },
    get C72() {
      return (C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 123,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C78() {
      return (C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 125,
        [_Location_file]: null
      }));
    },
    get C79() {
      return (C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 126,
        [_Location_file]: null
      }));
    },
    get C77() {
      return (C77 = dart.constList(
        [C78 || CT.C78, C79 || CT.C79],
        widget_inspector._Location
      ));
    },
    get C76() {
      return (C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 125,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C82() {
      return (C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 118,
        [_Location_file]: null
      }));
    },
    get C83() {
      return (C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "minWidth",
        [_Location_column]: 11,
        [_Location_line]: 119,
        [_Location_file]: null
      }));
    },
    get C84() {
      return (C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 120,
        [_Location_file]: null
      }));
    },
    get C85() {
      return (C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 121,
        [_Location_file]: null
      }));
    },
    get C86() {
      return (C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 122,
        [_Location_file]: null
      }));
    },
    get C87() {
      return (C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 127,
        [_Location_file]: null
      }));
    },
    get C81() {
      return (C81 = dart.constList(
        [
          C82 || CT.C82,
          C83 || CT.C83,
          C84 || CT.C84,
          C85 || CT.C85,
          C86 || CT.C86,
          C87 || CT.C87
        ],
        widget_inspector._Location
      ));
    },
    get C80() {
      return (C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 117,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C90() {
      return (C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 116,
        [_Location_file]: null
      }));
    },
    get C91() {
      return (C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 117,
        [_Location_file]: null
      }));
    },
    get C89() {
      return (C89 = dart.constList(
        [C90 || CT.C90, C91 || CT.C91],
        widget_inspector._Location
      ));
    },
    get C88() {
      return (C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 115,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C94() {
      return (C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 134,
        [_Location_file]: null
      }));
    },
    get C95() {
      return (C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 135,
        [_Location_file]: null
      }));
    },
    get C93() {
      return (C93 = dart.constList(
        [C94 || CT.C94, C95 || CT.C95],
        widget_inspector._Location
      ));
    },
    get C92() {
      return (C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 134,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C98() {
      return (C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 136,
        [_Location_file]: null
      }));
    },
    get C99() {
      return (C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 137,
        [_Location_file]: null
      }));
    },
    get C97() {
      return (C97 = dart.constList(
        [C98 || CT.C98, C99 || CT.C99],
        widget_inspector._Location
      ));
    },
    get C96() {
      return (C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 136,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C102() {
      return (C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 133,
        [_Location_file]: null
      }));
    },
    get C103() {
      return (C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 139,
        [_Location_file]: null
      }));
    },
    get C101() {
      return (C101 = dart.constList(
        [C102 || CT.C102, C103 || CT.C103],
        widget_inspector._Location
      ));
    },
    get C100() {
      return (C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 132,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C106() {
      return (C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 162,
        [_Location_file]: null
      }));
    },
    get C107() {
      return (C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 163,
        [_Location_file]: null
      }));
    },
    get C105() {
      return (C105 = dart.constList(
        [C106 || CT.C106, C107 || CT.C107],
        widget_inspector._Location
      ));
    },
    get C104() {
      return (C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C105 || CT.C105,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 161,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    },
    get C110() {
      return (C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 171,
        [_Location_file]: null
      }));
    },
    get C109() {
      return (C109 = dart.constList(
        [C110 || CT.C110],
        widget_inspector._Location
      ));
    },
    get C108() {
      return (C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 170,
        [_Location_file]:
          "org-dartlang-app:///packages/demo/pages/login_signup_page/login_signup_page.dart"
      }));
    }
  });
  const auth$ = dart.privateName(login_signup_page, "LoginSignupPage.auth");
  const onSignedIn$ = dart.privateName(
    login_signup_page,
    "LoginSignupPage.onSignedIn"
  );
  login_signup_page.LoginSignupPage = class LoginSignupPage extends framework.StatefulWidget {
    get auth() {
      return this[auth$];
    }
    set auth(value) {
      super.auth = value;
    }
    get onSignedIn() {
      return this[onSignedIn$];
    }
    set onSignedIn(value) {
      super.onSignedIn = value;
    }
    createState() {
      return new login_signup_page._LoginSignupPageState.new();
    }
  };
  (login_signup_page.LoginSignupPage.new = function(opts) {
    let auth = opts && "auth" in opts ? opts.auth : null;
    let onSignedIn = opts && "onSignedIn" in opts ? opts.onSignedIn : null;
    let $36creationLocationd_0dea112b090073317d4 =
      opts && "$creationLocationd_0dea112b090073317d4" in opts
        ? opts.$creationLocationd_0dea112b090073317d4
        : null;
    this[auth$] = auth;
    this[onSignedIn$] = onSignedIn;
    login_signup_page.LoginSignupPage.__proto__.new.call(this, {
      $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4
    });
  }).prototype = login_signup_page.LoginSignupPage.prototype;
  dart.addTypeTests(login_signup_page.LoginSignupPage);
  dart.setMethodSignature(login_signup_page.LoginSignupPage, () => ({
    __proto__: dart.getMethods(login_signup_page.LoginSignupPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(
    login_signup_page.LoginSignupPage,
    "package:demo/pages/login_signup_page/login_signup_page.dart"
  );
  dart.setFieldSignature(login_signup_page.LoginSignupPage, () => ({
    __proto__: dart.getFields(login_signup_page.LoginSignupPage.__proto__),
    auth: dart.finalFieldType(authentication.BaseAuth),
    onSignedIn: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  const _name$ = dart.privateName(login_signup_page, "_name");
  let C0;
  let C1;
  let C2;
  login_signup_page.FormMode = class FormMode extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (login_signup_page.FormMode.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
  }).prototype = login_signup_page.FormMode.prototype;
  dart.addTypeTests(login_signup_page.FormMode);
  dart.setLibraryUri(
    login_signup_page.FormMode,
    "package:demo/pages/login_signup_page/login_signup_page.dart"
  );
  dart.setFieldSignature(login_signup_page.FormMode, () => ({
    __proto__: dart.getFields(login_signup_page.FormMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(login_signup_page.FormMode, ["toString"]);
  login_signup_page.FormMode.LOGIN = C0 || CT.C0;
  login_signup_page.FormMode.SIGNUP = C1 || CT.C1;
  login_signup_page.FormMode.values = C2 || CT.C2;
  const _formKey = dart.privateName(login_signup_page, "_formKey");
  const _email = dart.privateName(login_signup_page, "_email");
  const _password = dart.privateName(login_signup_page, "_password");
  const _errorMessage = dart.privateName(login_signup_page, "_errorMessage");
  const _formMode = dart.privateName(login_signup_page, "_formMode");
  const _isIos = dart.privateName(login_signup_page, "_isIos");
  const _isLoading = dart.privateName(login_signup_page, "_isLoading");
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C3;
  let C4;
  const _Location_parameterLocations = dart.privateName(
    widget_inspector,
    "_Location.parameterLocations"
  );
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(
    widget_inspector,
    "_Location.column"
  );
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C7;
  let C8;
  let C9;
  let C10;
  let C6;
  let C5;
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
  let C30;
  let C28;
  let C27;
  const _emailWidget = dart.privateName(login_signup_page, "_emailWidget");
  const _passwordWidget = dart.privateName(
    login_signup_page,
    "_passwordWidget"
  );
  let C33;
  let C32;
  let C31;
  let C36;
  let C37;
  let C35;
  let C34;
  let C38;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C46;
  let C47;
  let C48;
  let C49;
  let C50;
  let C44;
  let C43;
  let C53;
  let C54;
  let C52;
  let C51;
  let C55;
  let C58;
  let C59;
  let C57;
  let C56;
  let C62;
  let C63;
  let C64;
  let C65;
  let C66;
  let C67;
  let C61;
  let C60;
  let C70;
  let C71;
  let C69;
  let C68;
  let C74;
  let C75;
  let C73;
  let C72;
  let C78;
  let C79;
  let C77;
  let C76;
  const _validateAndSubmit = dart.privateName(
    login_signup_page,
    "_validateAndSubmit"
  );
  let C82;
  let C83;
  let C84;
  let C85;
  let C86;
  let C87;
  let C81;
  let C80;
  let C90;
  let C91;
  let C89;
  let C88;
  let C94;
  let C95;
  let C93;
  let C92;
  let C98;
  let C99;
  let C97;
  let C96;
  let C102;
  let C103;
  let C101;
  let C100;
  let C106;
  let C107;
  let C105;
  let C104;
  let C110;
  let C109;
  let C108;
  const _validateAndSave = dart.privateName(
    login_signup_page,
    "_validateAndSave"
  );
  login_signup_page._LoginSignupPageState = class _LoginSignupPageState extends framework.State$(
    login_signup_page.LoginSignupPage
  ) {
    build(context) {
      return new scaffold.Scaffold.new({
        resizeToAvoidBottomPadding: false,
        body: new basic.Column.new({
          children: JSArrayOfWidget().of([
            new basic.Padding.new({
              padding: C3 || CT.C3,
              child: new container.Container.new({
                margin: C4 || CT.C4,
                width: 190.0,
                height: 190.0,
                decoration: new box_decoration.BoxDecoration.new({
                  border: box_border.Border.all({
                    color: colors.Colors.blueAccent
                  }),
                  shape: box_border.BoxShape.circle,
                  image: new decoration_image.DecorationImage.new({
                    fit: box_fit.BoxFit.fill,
                    image: new _network_image_web.NetworkImage.new(
                      "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/79167159_814394612319348_9093345385186852864_n.png?_nc_cat=102&_nc_ohc=K_t-Ug4v5hMAQkhbP1DWxuKztcSU0049yV61yazsOBOasAnQ7pTOyN3gA&_nc_ht=scontent.fdad1-1.fna&oh=12397862489ba80185eecf8faf47dd7d&oe=5E874B5B"
                    )
                  })
                }),
                $creationLocationd_0dea112b090073317d4: C5 || CT.C5
              }),
              $creationLocationd_0dea112b090073317d4: C11 || CT.C11
            }),
            this.formWidget(),
            this.loginButtonWidget(),
            this.secondaryButton(),
            this.errorWidget(),
            this.progressWidget()
          ]),
          $creationLocationd_0dea112b090073317d4: C15 || CT.C15
        }),
        $creationLocationd_0dea112b090073317d4: C18 || CT.C18
      });
    }
    progressWidget() {
      if (dart.test(this[_isLoading])) {
        return new basic.Center.new({
          child: new progress_indicator.CircularProgressIndicator.new({
            $creationLocationd_0dea112b090073317d4: C22 || CT.C22
          }),
          $creationLocationd_0dea112b090073317d4: C24 || CT.C24
        });
      }
      return new container.Container.new({
        height: 0.0,
        width: 0.0,
        $creationLocationd_0dea112b090073317d4: C27 || CT.C27
      });
    }
    formWidget() {
      return new form.Form.new({
        key: this[_formKey],
        child: new basic.Column.new({
          children: JSArrayOfWidget().of([
            this[_emailWidget](),
            this[_passwordWidget]()
          ]),
          $creationLocationd_0dea112b090073317d4: C31 || CT.C31
        }),
        $creationLocationd_0dea112b090073317d4: C34 || CT.C34
      });
    }
    [_emailWidget]() {
      return new basic.Padding.new({
        padding: C38 || CT.C38,
        child: new text_form_field.TextFormField.new({
          maxLines: 1,
          keyboardType: text_input.TextInputType.emailAddress,
          autofocus: false,
          decoration: new input_decorator.InputDecoration.new({
            hintText: "Enter Email",
            icon: new icon.Icon.new(icons.Icons.mail, {
              color: colors.Colors.grey,
              $creationLocationd_0dea112b090073317d4: C39 || CT.C39
            })
          }),
          validator: dart.fn(
            value => (value[$isEmpty] ? "Email cannot be empty" : null),
            StringToString()
          ),
          onSaved: dart.fn(
            value => (this[_email] = value[$trim]()),
            StringToString()
          ),
          $creationLocationd_0dea112b090073317d4: C43 || CT.C43
        }),
        $creationLocationd_0dea112b090073317d4: C51 || CT.C51
      });
    }
    [_passwordWidget]() {
      return new basic.Padding.new({
        padding: C55 || CT.C55,
        child: new text_form_field.TextFormField.new({
          maxLines: 1,
          obscureText: true,
          autofocus: false,
          decoration: new input_decorator.InputDecoration.new({
            hintText: "Password",
            icon: new icon.Icon.new(icons.Icons.lock, {
              color: colors.Colors.grey,
              $creationLocationd_0dea112b090073317d4: C56 || CT.C56
            })
          }),
          validator: dart.fn(
            value => (value[$isEmpty] ? "Password cannot be empty" : null),
            StringToString()
          ),
          onSaved: dart.fn(
            value => (this[_password] = value[$trim]()),
            StringToString()
          ),
          $creationLocationd_0dea112b090073317d4: C60 || CT.C60
        }),
        $creationLocationd_0dea112b090073317d4: C68 || CT.C68
      });
    }
    loginButtonWidget() {
      return new basic.Padding.new({
        padding: new edge_insets.EdgeInsets.fromLTRB(0.0, 45.0, 0.0, 0.0),
        child: new material_button.MaterialButton.new({
          elevation: 5.0,
          minWidth: 200.0,
          height: 42.0,
          color: colors.Colors.blue,
          child: dart.equals(this[_formMode], login_signup_page.FormMode.LOGIN)
            ? new text.Text.new("Login", {
                style: new text_style.TextStyle.new({
                  fontSize: 20.0,
                  color: colors.Colors.white
                }),
                $creationLocationd_0dea112b090073317d4: C72 || CT.C72
              })
            : new text.Text.new("Create account", {
                style: new text_style.TextStyle.new({
                  fontSize: 20.0,
                  color: colors.Colors.white
                }),
                $creationLocationd_0dea112b090073317d4: C76 || CT.C76
              }),
          onPressed: dart.bind(this, _validateAndSubmit),
          $creationLocationd_0dea112b090073317d4: C80 || CT.C80
        }),
        $creationLocationd_0dea112b090073317d4: C88 || CT.C88
      });
    }
    secondaryButton() {
      return new flat_button.FlatButton.new({
        child: dart.equals(this[_formMode], login_signup_page.FormMode.LOGIN)
          ? new text.Text.new("Or create a new account?", {
              style: new text_style.TextStyle.new({
                fontSize: 18.0,
                fontWeight: ui.FontWeight.w300
              }),
              $creationLocationd_0dea112b090073317d4: C92 || CT.C92
            })
          : new text.Text.new("Have an account? Sign in", {
              style: new text_style.TextStyle.new({
                fontSize: 18.0,
                fontWeight: ui.FontWeight.w300
              }),
              $creationLocationd_0dea112b090073317d4: C96 || CT.C96
            }),
        onPressed: dart.equals(
          this[_formMode],
          login_signup_page.FormMode.LOGIN
        )
          ? dart.bind(this, "showSignupForm")
          : dart.bind(this, "showLoginForm"),
        $creationLocationd_0dea112b090073317d4: C100 || CT.C100
      });
    }
    showSignupForm() {
      this[_formKey].currentState.reset();
      this[_errorMessage] = "";
      this.setState(
        dart.fn(() => {
          this[_formMode] = login_signup_page.FormMode.SIGNUP;
        }, VoidToNull())
      );
    }
    showLoginForm() {
      this[_formKey].currentState.reset();
      this[_errorMessage] = "";
      this.setState(
        dart.fn(() => {
          this[_formMode] = login_signup_page.FormMode.LOGIN;
        }, VoidToNull())
      );
    }
    errorWidget() {
      if (this[_errorMessage].length > 0 && this[_errorMessage] != null) {
        return new text.Text.new(this[_errorMessage], {
          style: new text_style.TextStyle.new({
            fontSize: 13.0,
            color: colors.Colors.red,
            height: 1.0,
            fontWeight: ui.FontWeight.w300
          }),
          $creationLocationd_0dea112b090073317d4: C104 || CT.C104
        });
      } else {
        return new container.Container.new({
          height: 0.0,
          $creationLocationd_0dea112b090073317d4: C108 || CT.C108
        });
      }
    }
    [_validateAndSave]() {
      let form = this[_formKey].currentState;
      if (dart.test(form.validate())) {
        form.save();
        return true;
      }
      return false;
    }
    [_validateAndSubmit]() {
      return async.async(
        dart.dynamic,
        function* _validateAndSubmit() {
          this.setState(
            dart.fn(() => {
              this[_errorMessage] = "";
              this[_isLoading] = true;
            }, VoidToNull())
          );
          if (dart.test(this[_validateAndSave]())) {
            let userId = "";
            try {
              if (
                dart.equals(this[_formMode], login_signup_page.FormMode.LOGIN)
              ) {
                core.print("test");
                userId = yield this.widget.auth.signIn(
                  this[_email],
                  this[_password]
                );
                core.print(userId);
              } else {
                userId = yield this.widget.auth.signUp(
                  this[_email],
                  this[_password]
                );
              }
              this.setState(
                dart.fn(() => {
                  this[_isLoading] = false;
                }, VoidToNull())
              );
              if (userId.length > 0 && userId != null) {
                this.widget.onSignedIn();
              }
            } catch (e$) {
              let e = dart.getThrown(e$);
              this.setState(
                dart.fn(() => {
                  this[_isLoading] = false;
                  if (dart.test(this[_isIos])) {
                    this[_errorMessage] = core.String._check(
                      dart.dload(e, "details")
                    );
                  } else
                    this[_errorMessage] = core.String._check(
                      dart.dload(e, "message")
                    );
                }, VoidToNull())
              );
            }
          } else {
            this.setState(
              dart.fn(() => {
                this[_isLoading] = false;
              }, VoidToNull())
            );
          }
        }.bind(this)
      );
    }
  };
  (login_signup_page._LoginSignupPageState.new = function() {
    this[_formKey] = GlobalKeyOfFormState().new();
    this[_email] = null;
    this[_password] = null;
    this[_errorMessage] = "";
    this[_formMode] = login_signup_page.FormMode.LOGIN;
    this[_isIos] = false;
    this[_isLoading] = false;
    login_signup_page._LoginSignupPageState.__proto__.new.call(this);
  }).prototype = login_signup_page._LoginSignupPageState.prototype;
  dart.addTypeTests(login_signup_page._LoginSignupPageState);
  dart.setMethodSignature(login_signup_page._LoginSignupPageState, () => ({
    __proto__: dart.getMethods(
      login_signup_page._LoginSignupPageState.__proto__
    ),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    progressWidget: dart.fnType(framework.Widget, []),
    formWidget: dart.fnType(framework.Widget, []),
    [_emailWidget]: dart.fnType(framework.Widget, []),
    [_passwordWidget]: dart.fnType(framework.Widget, []),
    loginButtonWidget: dart.fnType(framework.Widget, []),
    secondaryButton: dart.fnType(framework.Widget, []),
    showSignupForm: dart.fnType(dart.void, []),
    showLoginForm: dart.fnType(dart.void, []),
    errorWidget: dart.fnType(framework.Widget, []),
    [_validateAndSave]: dart.fnType(core.bool, []),
    [_validateAndSubmit]: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(
    login_signup_page._LoginSignupPageState,
    "package:demo/pages/login_signup_page/login_signup_page.dart"
  );
  dart.setFieldSignature(login_signup_page._LoginSignupPageState, () => ({
    __proto__: dart.getFields(
      login_signup_page._LoginSignupPageState.__proto__
    ),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [_email]: dart.fieldType(core.String),
    [_password]: dart.fieldType(core.String),
    [_errorMessage]: dart.fieldType(core.String),
    [_formMode]: dart.fieldType(login_signup_page.FormMode),
    [_isIos]: dart.fieldType(core.bool),
    [_isLoading]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries(
    "packages/demo/pages/login_signup_page/login_signup_page",
    {
      "package:demo/pages/login_signup_page/login_signup_page.dart": login_signup_page
    },
    {},
    '{"version":3,"sourceRoot":"","sources":["login_signup_page.dart"],"names":[],"mappings":"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","file":"login_signup_page.ddc.js"}'
  );
  // Exports:
  return {
    pages__login_signup_page__login_signup_page: login_signup_page
  };
});

//# sourceMappingURL=login_signup_page.ddc.js.map
