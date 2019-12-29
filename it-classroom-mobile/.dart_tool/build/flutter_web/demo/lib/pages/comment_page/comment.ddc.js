define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/demo/pages/list_tree_page/edit_tree', 'packages/flutter/src/rendering/animated_size', 'packages/demo/pages/add_record_page/add_record_page', 'packages/demo/models/Tree', 'packages/flutter/src/animation/animation', 'packages/shared_preferences/shared_preferences', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/cupertino/action_sheet'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__demo__pages__list_tree_page__edit_tree, packages__flutter__src__rendering__animated_size, packages__demo__pages__add_record_page__add_record_page, packages__demo__models__Tree, packages__flutter__src__animation__animation, packages__shared_preferences__shared_preferences, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__cupertino__action_sheet) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const icon_theme = packages__flutter__src__widgets__actions.src__widgets__icon_theme;
  const icon_theme_data = packages__flutter__src__widgets__actions.src__widgets__icon_theme_data;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const _network_image_web = packages__flutter__src__painting___network_image_web.src__painting___network_image_web;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const page = packages__flutter__material.src__material__page;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const icons = packages__flutter__material.src__material__icons;
  const app = packages__flutter__material.src__material__app;
  const circle_avatar = packages__flutter__material.src__material__circle_avatar;
  const theme = packages__flutter__material.src__material__theme;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const divider = packages__flutter__material.src__material__divider;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const edit_tree = packages__demo__pages__list_tree_page__edit_tree.pages__list_tree_page__edit_tree;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const add_record_page = packages__demo__pages__add_record_page__add_record_page.pages__add_record_page__add_record_page;
  const Tree = packages__demo__models__Tree.models__Tree;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const shared_preferences = packages__shared_preferences__shared_preferences.shared_preferences;
  const platform = packages__flutter__src__foundation___bitfield_web.src__foundation__platform;
  const button = packages__flutter__src__cupertino__action_sheet.src__cupertino__button;
  const detail_tree = Object.create(dart.library);
  const comment$ = Object.create(dart.library);
  const $toString = dartx.toString;
  const $toLowerCase = dartx.toLowerCase;
  const $length = dartx.length;
  const $split = dartx.split;
  const $_get = dartx._get;
  const $insert = dartx.insert;
  let BuildContextToEditTree = () => (BuildContextToEditTree = dart.constFn(dart.fnType(edit_tree.EditTree, [framework.BuildContext])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndintToListTile = () => (BuildContextAndintToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [framework.BuildContext, core.int])))();
  let BuildContextToListComment = () => (BuildContextToListComment = dart.constFn(dart.fnType(comment$.ListComment, [framework.BuildContext])))();
  let BuildContextToAddRecord = () => (BuildContextToAddRecord = dart.constFn(dart.fnType(add_record_page.AddRecord, [framework.BuildContext])))();
  let JSArrayOfChatMessage = () => (JSArrayOfChatMessage = dart.constFn(_interceptors.JSArray$(comment$.ChatMessage)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let BuildContextAndintToChatMessage = () => (BuildContextAndintToChatMessage = dart.constFn(dart.fnType(comment$.ChatMessage, [framework.BuildContext, core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 16,
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
        [_Location_column]: 16,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 15,
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
        [_Location_column]: 14,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 50,
        [_Location_line]: 30,
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
        [_Location_column]: 16,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 34,
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
        [_Location_column]: 26,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tree",
        [_Location_column]: 68,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 59,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 20
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 69,
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
        [_Location_column]: 13,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 74,
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
        [_Location_column]: 13,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 102,
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
        [_Location_column]: 13,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 15,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 15,
        [EdgeInsets_left]: 15
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 3,
        [EdgeInsets_right]: 3,
        [EdgeInsets_top]: 3,
        [EdgeInsets_left]: 3
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 69,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 23,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 19,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 19,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80, C81 || CT.C81, C82 || CT.C82, C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 126,
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
        [_Location_column]: 25,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "comment",
        [_Location_column]: 66,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 49,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 19,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97, C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tree",
        [_Location_column]: 73,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 63,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 19,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111, C112 || CT.C112, C113 || CT.C113, C114 || CT.C114], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117, C118 || CT.C118], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 11,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.constList([C121 || CT.C121, C122 || CT.C122, C123 || CT.C123], widget_inspector._Location);
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C120 || CT.C120,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126], widget_inspector._Location);
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C125 || CT.C125,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130, C131 || CT.C131], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/detail_tree.dart"
      });
    },
    get C133() {
      return C133 = dart.constList([], widget_inspector._Location);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C133 || CT.C133,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.constList([C136 || CT.C136], widget_inspector._Location);
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C135 || CT.C135,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 0
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 62,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 52,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 41,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144], widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 17,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147, C148 || CT.C148], widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C146 || CT.C146,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 30,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 60,
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
        [_Location_column]: 25,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 5,
        [EdgeInsets_left]: 0
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C155 || CT.C155,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 23,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159, C160 || CT.C160], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C158 || CT.C158,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C164 || CT.C164], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C162 || CT.C162,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167], widget_inspector._Location);
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C166 || CT.C166,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.constList([C170 || CT.C170, C171 || CT.C171], widget_inspector._Location);
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C169 || CT.C169,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 11,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174, C175 || CT.C175], widget_inspector._Location);
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C173 || CT.C173,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sizeFactor",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178, C179 || CT.C179, C180 || CT.C180], widget_inspector._Location);
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C177 || CT.C177,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 7,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "email",
        [_Location_column]: 7,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animationController",
        [_Location_column]: 7,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.constList([C183 || CT.C183, C184 || CT.C184, C185 || CT.C185], widget_inspector._Location);
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C182 || CT.C182,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 17,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSubmitted",
        [_Location_column]: 17,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.constList([C189 || CT.C189, C190 || CT.C190, C191 || CT.C191, C192 || CT.C192], widget_inspector._Location);
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C188 || CT.C188,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.constList([C195 || CT.C195], widget_inspector._Location);
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C194 || CT.C194,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.constList([C198 || CT.C198], widget_inspector._Location);
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C197 || CT.C197,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.constList([C201 || CT.C201, C202 || CT.C202], widget_inspector._Location);
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C200 || CT.C200,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 46,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C204() {
      return C204 = dart.constList([C205 || CT.C205], widget_inspector._Location);
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C204 || CT.C204,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.constList([C208 || CT.C208, C209 || CT.C209], widget_inspector._Location);
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C207 || CT.C207,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 17,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.constList([C212 || CT.C212, C213 || CT.C213], widget_inspector._Location);
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C211 || CT.C211,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 26,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.constList([C216 || CT.C216], widget_inspector._Location);
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C215 || CT.C215,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 11,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.constList([C219 || CT.C219, C220 || CT.C220, C221 || CT.C221], widget_inspector._Location);
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C218 || CT.C218,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 7,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.constList([C224 || CT.C224, C225 || CT.C225], widget_inspector._Location);
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C223 || CT.C223,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C227() {
      return C227 = dart.constList([C228 || CT.C228], widget_inspector._Location);
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C227 || CT.C227,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 11,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.constList([C231 || CT.C231, C232 || CT.C232, C233 || CT.C233, C234 || CT.C234], widget_inspector._Location);
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C230 || CT.C230,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "reverse",
        [_Location_column]: 15,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 15,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 15,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C236() {
      return C236 = dart.constList([C237 || CT.C237, C238 || CT.C238, C239 || CT.C239, C240 || CT.C240], widget_inspector._Location);
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C236 || CT.C236,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 168,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.constList([C243 || CT.C243], widget_inspector._Location);
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C242 || CT.C242,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C245() {
      return C245 = dart.constList([C246 || CT.C246], widget_inspector._Location);
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C245 || CT.C245,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C248() {
      return C248 = dart.constList([C249 || CT.C249, C250 || CT.C250], widget_inspector._Location);
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C248 || CT.C248,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C252() {
      return C252 = dart.constList([C253 || CT.C253], widget_inspector._Location);
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C252 || CT.C252,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C255() {
      return C255 = dart.constList([C256 || CT.C256, C257 || CT.C257], widget_inspector._Location);
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C255 || CT.C255,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C259() {
      return C259 = dart.constList([C260 || CT.C260, C261 || CT.C261], widget_inspector._Location);
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C259 || CT.C259,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/comment_page/comment.dart"
      });
    }
  });
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
  let C8;
  let C7;
  let C12;
  let C11;
  let C10;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C18;
  let C17;
  let C22;
  let C23;
  let C21;
  let C20;
  let C26;
  let C27;
  let C25;
  let C24;
  let C30;
  let C31;
  let C32;
  let C29;
  let C28;
  let C35;
  let C34;
  let C33;
  let C38;
  let C39;
  let C37;
  let C36;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C40;
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
  let C50;
  let C49;
  let C55;
  let C56;
  let C54;
  let C53;
  let C59;
  let C60;
  let C58;
  let C57;
  let C63;
  let C64;
  let C62;
  let C61;
  let C65;
  let C66;
  let C69;
  let C68;
  let C67;
  let C72;
  let C71;
  let C70;
  let C75;
  let C76;
  let C74;
  let C73;
  let C79;
  let C80;
  let C81;
  let C82;
  let C83;
  let C84;
  let C78;
  let C77;
  let C87;
  let C86;
  let C85;
  let C90;
  let C89;
  let C88;
  let C93;
  let C92;
  let C91;
  let C96;
  let C97;
  let C98;
  let C99;
  let C95;
  let C94;
  let C102;
  let C101;
  let C100;
  let C105;
  let C104;
  let C103;
  let C108;
  let C107;
  let C106;
  let C111;
  let C112;
  let C113;
  let C114;
  let C110;
  let C109;
  let C117;
  let C118;
  let C116;
  let C115;
  let C121;
  let C122;
  let C123;
  let C120;
  let C119;
  let C126;
  let C125;
  let C124;
  let C129;
  let C130;
  let C131;
  let C128;
  let C127;
  const tree$ = dart.privateName(detail_tree, "DetailTree.tree");
  detail_tree.DetailTree = class DetailTree extends framework.StatelessWidget {
    get tree() {
      return this[tree$];
    }
    set tree(value) {
      super.tree = value;
    }
    titleSection() {
      return new container.Container.new({child: new basic.Center.new({child: new text.Text.new(this.tree.name, {style: new text_style.TextStyle.new({fontSize: 60.0, color: colors.Colors.green}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
    build(context) {
      core.print("test");
      core.print(this.tree);
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(dart.toString(this.tree.name) + " / " + dart.toString(this.tree.id), {$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("Edit", {style: new text_style.TextStyle.new({fontSize: 17.0, color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), onPressed: dart.fn(() => {
                navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new edit_tree.EditTree.new(this.tree, {$creationLocationd_0dea112b090073317d4: C17 || CT.C17}), BuildContextToEditTree())}));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C20 || CT.C20})]), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), body: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({width: 190.0, height: 190.0, decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, image: new decoration_image.DecorationImage.new({fit: box_fit.BoxFit.fill, image: new _network_image_web.NetworkImage.new(this.tree.image)})}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), this.titleSection(), this.detailSection(context)]), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36});
    }
    detailSection(context) {
      return new container.Container.new({alignment: alignment.Alignment.bottomLeft, padding: C40 || CT.C40, child: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.max, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new text.Text.new("NAME:   " + this.tree.name[$toLowerCase](), {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), new text.Text.new("Status:   " + this.tree.status[$toLowerCase](), {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), new text.Text.new("Age:   " + dart.toString(this.tree.age), {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), new text.Text.new("Area:   " + dart.toString(this.tree.area), {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), new text.Text.new("Kind:" + (dart.test(this.tree.isWood) ? "Wood" : dart.test(this.tree.isGrass) ? "Grass" : dart.test(this.tree.isFruit) ? "Fruit" : dart.test(this.tree.isFlower) ? "Flower" : "None"), {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), new text.Text.new("Record:" + dart.toString(this.tree.area), {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), new container.Container.new({height: 150.0, width: 250.0, margin: C65 || CT.C65, padding: C66 || CT.C66, decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({color: colors.Colors.blueAccent})}), child: new scroll_view.ListView.builder({itemCount: this.tree.record[$split]("/")[$length], itemBuilder: dart.fn((context, index) => new list_tile.ListTile.new({title: new text.Text.new(dart.str(this.tree.record[$split]("/")[$_get](index)), {$creationLocationd_0dea112b090073317d4: C67 || CT.C67}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), BuildContextAndintToListTile()), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new flat_button._FlatButtonWithIcon.new({color: colors.Colors.red, icon: new icon.Icon.new(icons.Icons.comment, {$creationLocationd_0dea112b090073317d4: C85 || CT.C85}), label: new text.Text.new("Comment", {$creationLocationd_0dea112b090073317d4: C88 || CT.C88}), onPressed: dart.fn(() => {
                      navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new comment$.ListComment.new(this.tree.comment, {$creationLocationd_0dea112b090073317d4: C91 || CT.C91}), BuildContextToListComment())}));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), new flat_button._FlatButtonWithIcon.new({color: colors.Colors.green, icon: new icon.Icon.new(icons.Icons.work, {$creationLocationd_0dea112b090073317d4: C100 || CT.C100}), label: new text.Text.new("Record      ", {$creationLocationd_0dea112b090073317d4: C103 || CT.C103}), onPressed: dart.fn(() => {
                      navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new add_record_page.AddRecord.new(this.tree, {$creationLocationd_0dea112b090073317d4: C106 || CT.C106}), BuildContextToAddRecord())}));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C109 || CT.C109})]), $creationLocationd_0dea112b090073317d4: C115 || CT.C115})]), $creationLocationd_0dea112b090073317d4: C119 || CT.C119}), $creationLocationd_0dea112b090073317d4: C124 || CT.C124}), $creationLocationd_0dea112b090073317d4: C127 || CT.C127});
    }
  };
  (detail_tree.DetailTree.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let tree = opts && 'tree' in opts ? opts.tree : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[tree$] = tree;
    detail_tree.DetailTree.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = detail_tree.DetailTree.prototype;
  dart.addTypeTests(detail_tree.DetailTree);
  dart.setMethodSignature(detail_tree.DetailTree, () => ({
    __proto__: dart.getMethods(detail_tree.DetailTree.__proto__),
    titleSection: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    detailSection: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(detail_tree.DetailTree, "package:demo/pages/list_tree_page/detail_tree.dart");
  dart.setFieldSignature(detail_tree.DetailTree, () => ({
    __proto__: dart.getFields(detail_tree.DetailTree.__proto__),
    tree: dart.finalFieldType(Tree.Tree)
  }));
  let C133;
  let C132;
  let C136;
  let C135;
  let C134;
  const comment$0 = dart.privateName(comment$, "ListComment.comment");
  comment$.ListComment = class ListComment extends framework.StatelessWidget {
    get comment() {
      return this[comment$0];
    }
    set comment(value) {
      this[comment$0] = value;
    }
    build(context) {
      return new app.MaterialApp.new({home: new comment$.ChatScreen.new({$creationLocationd_0dea112b090073317d4: C132 || CT.C132}), $creationLocationd_0dea112b090073317d4: C134 || CT.C134});
    }
  };
  (comment$.ListComment.new = function(comment, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[comment$0] = null;
    comment$.ListComment.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    this.comment = comment;
  }).prototype = comment$.ListComment.prototype;
  dart.addTypeTests(comment$.ListComment);
  dart.setMethodSignature(comment$.ListComment, () => ({
    __proto__: dart.getMethods(comment$.ListComment.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(comment$.ListComment, "package:demo/pages/comment_page/comment.dart");
  dart.setFieldSignature(comment$.ListComment, () => ({
    __proto__: dart.getFields(comment$.ListComment.__proto__),
    comment: dart.fieldType(core.List$(core.String))
  }));
  let C137;
  let C138;
  let C141;
  let C140;
  let C139;
  let C144;
  let C143;
  let C142;
  let C147;
  let C148;
  let C146;
  let C145;
  let C151;
  let C152;
  let C150;
  let C149;
  let C153;
  let C156;
  let C155;
  let C154;
  let C159;
  let C160;
  let C158;
  let C157;
  let C163;
  let C164;
  let C162;
  let C161;
  let C167;
  let C166;
  let C165;
  let C170;
  let C171;
  let C169;
  let C168;
  let C174;
  let C175;
  let C173;
  let C172;
  let C178;
  let C179;
  let C180;
  let C177;
  let C176;
  const text$ = dart.privateName(comment$, "ChatMessage.text");
  const email$ = dart.privateName(comment$, "ChatMessage.email");
  const animationController$ = dart.privateName(comment$, "ChatMessage.animationController");
  comment$.ChatMessage = class ChatMessage extends framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      super.email = value;
    }
    get animationController() {
      return this[animationController$];
    }
    set animationController(value) {
      super.animationController = value;
    }
    build(context) {
      return new transitions.SizeTransition.new({sizeFactor: new animations.CurvedAnimation.new({parent: this.animationController, curve: curves.Curves.easeOut}), axisAlignment: 0.0, child: new container.Container.new({margin: C137 || CT.C137, child: new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new container.Container.new({margin: C138 || CT.C138, child: new circle_avatar.CircleAvatar.new({child: new text.Text.new(this.email[$_get](0), {$creationLocationd_0dea112b090073317d4: C139 || CT.C139}), $creationLocationd_0dea112b090073317d4: C142 || CT.C142}), $creationLocationd_0dea112b090073317d4: C145 || CT.C145}), new basic.Expanded.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new text.Text.new(this.email, {style: theme.Theme.of(context).textTheme.subhead, $creationLocationd_0dea112b090073317d4: C149 || CT.C149}), new container.Container.new({margin: C153 || CT.C153, child: new text.Text.new(this.text, {$creationLocationd_0dea112b090073317d4: C154 || CT.C154}), $creationLocationd_0dea112b090073317d4: C157 || CT.C157})]), $creationLocationd_0dea112b090073317d4: C161 || CT.C161}), $creationLocationd_0dea112b090073317d4: C165 || CT.C165})]), $creationLocationd_0dea112b090073317d4: C168 || CT.C168}), $creationLocationd_0dea112b090073317d4: C172 || CT.C172}), $creationLocationd_0dea112b090073317d4: C176 || CT.C176});
    }
  };
  (comment$.ChatMessage.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    let animationController = opts && 'animationController' in opts ? opts.animationController : null;
    let email = opts && 'email' in opts ? opts.email : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    this[animationController$] = animationController;
    this[email$] = email;
    comment$.ChatMessage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = comment$.ChatMessage.prototype;
  dart.addTypeTests(comment$.ChatMessage);
  dart.setMethodSignature(comment$.ChatMessage, () => ({
    __proto__: dart.getMethods(comment$.ChatMessage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(comment$.ChatMessage, "package:demo/pages/comment_page/comment.dart");
  dart.setFieldSignature(comment$.ChatMessage, () => ({
    __proto__: dart.getFields(comment$.ChatMessage.__proto__),
    text: dart.finalFieldType(core.String),
    email: dart.finalFieldType(core.String),
    animationController: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _messages = dart.privateName(comment$, "_messages");
  comment$.ChatScreen = class ChatScreen extends framework.StatefulWidget {
    createState() {
      return new comment$.ChatScreenState.new();
    }
  };
  (comment$.ChatScreen.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_messages] = JSArrayOfChatMessage().of([]);
    comment$.ChatScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = comment$.ChatScreen.prototype;
  dart.addTypeTests(comment$.ChatScreen);
  dart.setMethodSignature(comment$.ChatScreen, () => ({
    __proto__: dart.getMethods(comment$.ChatScreen.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(comment$.ChatScreen, "package:demo/pages/comment_page/comment.dart");
  dart.setFieldSignature(comment$.ChatScreen, () => ({
    __proto__: dart.getFields(comment$.ChatScreen.__proto__),
    [_messages]: dart.finalFieldType(core.List$(comment$.ChatMessage))
  }));
  const _textController = dart.privateName(comment$, "_textController");
  const _isComposing = dart.privateName(comment$, "_isComposing");
  let C183;
  let C184;
  let C185;
  let C182;
  let C181;
  const _handleSubmitted = dart.privateName(comment$, "_handleSubmitted");
  let C186;
  let C189;
  let C190;
  let C191;
  let C192;
  let C188;
  let C187;
  let C195;
  let C194;
  let C193;
  let C198;
  let C197;
  let C196;
  let C201;
  let C202;
  let C200;
  let C199;
  let C205;
  let C204;
  let C203;
  let C208;
  let C209;
  let C207;
  let C206;
  let C212;
  let C213;
  let C211;
  let C210;
  let C216;
  let C215;
  let C214;
  let C219;
  let C220;
  let C221;
  let C218;
  let C217;
  let C224;
  let C225;
  let C223;
  let C222;
  const _buildTextComposer = dart.privateName(comment$, "_buildTextComposer");
  let C228;
  let C227;
  let C226;
  let C231;
  let C232;
  let C233;
  let C234;
  let C230;
  let C229;
  let C237;
  let C238;
  let C239;
  let C240;
  let C236;
  let C235;
  let C243;
  let C242;
  let C241;
  let C246;
  let C245;
  let C244;
  let C249;
  let C250;
  let C248;
  let C247;
  let C253;
  let C252;
  let C251;
  let C256;
  let C257;
  let C255;
  let C254;
  let C260;
  let C261;
  let C259;
  let C258;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(comment$.ChatScreen) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(comment$.ChatScreen)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(comment$.ChatScreen));
  comment$.ChatScreenState = class ChatScreenState extends State_TickerProviderStateMixin$36 {
    [_handleSubmitted](text) {
      return async.async(dart.void, (function* _handleSubmitted() {
        let t0;
        let prefs = (yield shared_preferences.SharedPreferences.getInstance());
        let email = (t0 = prefs.getString("email"), t0 == null ? "tranxuanhieu@gmail.com" : t0);
        this[_textController].clear();
        this.setState(dart.fn(() => {
          this[_isComposing] = false;
        }, VoidToNull()));
        let message = new comment$.ChatMessage.new({text: text, email: email, animationController: new animation_controller.AnimationController.new({duration: new core.Duration.new({milliseconds: 700}), vsync: this}), $creationLocationd_0dea112b090073317d4: C181 || CT.C181});
        this.setState(dart.fn(() => {
          this[_messages][$insert](0, message);
        }, VoidToNull()));
        message.animationController.forward();
      }).bind(this));
    }
    dispose() {
      for (let message of this[_messages])
        message.animationController.dispose();
      super.dispose();
    }
    [_buildTextComposer]() {
      return new icon_theme.IconTheme.new({data: new icon_theme_data.IconThemeData.new({color: theme.Theme.of(this.context).accentColor}), child: new container.Container.new({margin: C186 || CT.C186, child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Flexible.new({child: new text_field.TextField.new({controller: this[_textController], onChanged: dart.fn(text => {
                    this.setState(dart.fn(() => {
                      this[_isComposing] = text.length > 0;
                    }, VoidToNull()));
                  }, StringToNull()), onSubmitted: dart.bind(this, _handleSubmitted), decoration: new input_decorator.InputDecoration.collapsed({hintText: "Send a message"}), $creationLocationd_0dea112b090073317d4: C187 || CT.C187}), $creationLocationd_0dea112b090073317d4: C193 || CT.C193}), new container.Container.new({margin: new edge_insets.EdgeInsets.symmetric({horizontal: 4.0}), child: dart.equals(theme.Theme.of(this.context).platform, platform.TargetPlatform.iOS) ? new button.CupertinoButton.new({child: new text.Text.new("Send", {$creationLocationd_0dea112b090073317d4: C196 || CT.C196}), onPressed: dart.test(this[_isComposing]) ? dart.fn(() => this[_handleSubmitted](this[_textController].text), VoidTovoid()) : null, $creationLocationd_0dea112b090073317d4: C199 || CT.C199}) : new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.send, {$creationLocationd_0dea112b090073317d4: C203 || CT.C203}), onPressed: dart.test(this[_isComposing]) ? dart.fn(() => this[_handleSubmitted](this[_textController].text), VoidTovoid()) : null, $creationLocationd_0dea112b090073317d4: C206 || CT.C206}), $creationLocationd_0dea112b090073317d4: C210 || CT.C210})]), $creationLocationd_0dea112b090073317d4: C214 || CT.C214}), decoration: dart.equals(theme.Theme.of(this.context).platform, platform.TargetPlatform.iOS) ? new box_decoration.BoxDecoration.new({border: new box_border.Border.new({top: new borders.BorderSide.new({color: colors.Colors.grey._get(200)})})}) : null, $creationLocationd_0dea112b090073317d4: C217 || CT.C217}), $creationLocationd_0dea112b090073317d4: C222 || CT.C222});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({centerTitle: true, title: new text.Text.new("List Comment", {$creationLocationd_0dea112b090073317d4: C226 || CT.C226}), actions: JSArrayOfWidget().of([]), elevation: dart.equals(theme.Theme.of(context).platform, platform.TargetPlatform.iOS) ? 0.0 : 4.0, $creationLocationd_0dea112b090073317d4: C229 || CT.C229}), body: new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Flexible.new({child: new scroll_view.ListView.builder({padding: new edge_insets.EdgeInsets.all(8.0), reverse: true, itemBuilder: dart.fn((_, index) => this[_messages][$_get](index), BuildContextAndintToChatMessage()), itemCount: this[_messages][$length], $creationLocationd_0dea112b090073317d4: C235 || CT.C235}), $creationLocationd_0dea112b090073317d4: C241 || CT.C241}), new divider.Divider.new({height: 1.0, $creationLocationd_0dea112b090073317d4: C244 || CT.C244}), new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: theme.Theme.of(context).cardColor}), child: this[_buildTextComposer](), $creationLocationd_0dea112b090073317d4: C247 || CT.C247})]), $creationLocationd_0dea112b090073317d4: C251 || CT.C251}), decoration: dart.equals(theme.Theme.of(context).platform, platform.TargetPlatform.iOS) ? new box_decoration.BoxDecoration.new({border: new box_border.Border.new({top: new borders.BorderSide.new({color: colors.Colors.grey._get(200)})})}) : null, $creationLocationd_0dea112b090073317d4: C254 || CT.C254}), $creationLocationd_0dea112b090073317d4: C258 || CT.C258});
    }
  };
  (comment$.ChatScreenState.new = function() {
    this[_messages] = JSArrayOfChatMessage().of([]);
    this[_textController] = new editable_text.TextEditingController.new();
    this[_isComposing] = false;
    comment$.ChatScreenState.__proto__.new.call(this);
    ;
  }).prototype = comment$.ChatScreenState.prototype;
  dart.addTypeTests(comment$.ChatScreenState);
  dart.setMethodSignature(comment$.ChatScreenState, () => ({
    __proto__: dart.getMethods(comment$.ChatScreenState.__proto__),
    [_handleSubmitted]: dart.fnType(dart.void, [core.String]),
    [_buildTextComposer]: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(comment$.ChatScreenState, "package:demo/pages/comment_page/comment.dart");
  dart.setFieldSignature(comment$.ChatScreenState, () => ({
    __proto__: dart.getFields(comment$.ChatScreenState.__proto__),
    [_messages]: dart.finalFieldType(core.List$(comment$.ChatMessage)),
    [_textController]: dart.finalFieldType(editable_text.TextEditingController),
    [_isComposing]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(comment$, {
    /*comment$.kIOSTheme*/get kIOSTheme() {
      return theme_data.ThemeData.new({primarySwatch: colors.Colors.orange, primaryColor: colors.Colors.grey._get(100), primaryColorBrightness: ui.Brightness.light});
    },
    /*comment$.kDefaultTheme*/get kDefaultTheme() {
      return theme_data.ThemeData.new({primarySwatch: colors.Colors.purple, accentColor: colors.Colors.orangeAccent._get(400)});
    },
    /*comment$._name*/get _name() {
      return "Your Name";
    }
  });
  dart.trackLibraries("packages/demo/pages/comment_page/comment", {
    "package:demo/pages/list_tree_page/detail_tree.dart": detail_tree,
    "package:demo/pages/comment_page/comment.dart": comment$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../list_tree_page/detail_tree.dart","comment.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOa;;;;;;;AAKT,YAAO,qCACE,6BACE,kBAAK,AAAK,wBACF,wCACC,aACI;IAI1B;UAG0B;AACX,MAAb,WAAM;AACU,MAAhB,WAAW;AACX,YAAO,oCACG,+BACC,kBAAe,AAAW,AAAQ,cAA7B,AAAK,kBAAkB,QAAgB,cAAR,AAAK,kFAC/B,sBACX,uCACW,kBAAK,gBACD,wCAAoB,aAAoB,2FAC5C;AAIR,gBAHS,uCACR,OAAO,EACP,yCAA2B,QAAC,WAAY,2BAAS;0JAKvD,gCACM,sBACJ,oCACO,eACC,mBACQ,6CACI,mCACL,+CACK,4BAAiB,wCAAa,AAAK,+EAC3D,qBACA,mBAAc,OAAO;IAI7B;kBAEkC;AAChC,YAAO,yCACgB,+DAEV,+DACF,oCACsB,2CACY,yCACrB,sBAChB,kBAAK,AAAW,aAAE,AAAK,AAAK,wCACb,wCACC,aACI,gFAEpB,kBAAK,AAAa,eAAE,AAAK,AAAO,0CACjB,wCACC,aACI,gFAEpB,kBAAK,AAAU,YAAW,cAAT,AAAK,wBACP,wCACC,aACI,gFAEpB,kBAAK,AAAW,aAAY,cAAV,AAAK,yBACR,wCACC,aACI,gFAEpB,kBACI,AAAQ,qBACH,AAAK,oBACA,mBACA,AAAK,qBACD,oBACA,AAAK,qBACD,oBACA,AAAK,sBAAW,WAAW,iBAClC,wCACC,aACI,gFAEpB,kBAAK,AAAU,YAAY,cAAV,AAAK,yBACP,wCACC,aACI,gFAEhB,qCACM,cACD,kEAIH,8CAA6B,8BAAkB,qCACnC,6CACD,AAAK,AAAO,AAAW,yBAAL,4BAChB,SAAC,SAAS,UACd,mCACE,kBAAuC,SAA/B,AAAK,AAAO,AAAU,yBAAJ,YAAK,KAAK,0QAIrD,sCACuC,8CACnB,sBACL,gDACK,yBACR,kBAAW,sFACV,kBAAK,gFACD;AAKR,sBAJS,uCACR,OAAO,EACP,yCACa,QAAC,WAAY,6BAAY,AAAK;+FAItC,gDACK,2BACR,kBAAW,qFACV,kBAAK,uFACD;AAIR,sBAHS,uCACR,OAAO,EACP,yCAA2B,QAAC,WAAY,kCAAU;;IAUtE;;;QA/IgB;QAAoB;;;AAAS,0DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;ICa/C;;;;;;UAMa;AACxB,YAAW,gCACC;IAEd;;uCATyB;;IADZ;AACb;AACwB,IAAjB,eAAU,OAAO;EACxB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAYa;;;;;;IACA;;;;;;IACa;;;;;;UAEA;AACxB,YAAW,iDACS,4CACJ,iCAAmC,wCAChC,YACJ,6DAEE,uCAC8B,yCACrB,sBACZ,6DAES,2CAAwB,kBAAK,AAAK,kBAAC,sLAE5C,+BACS,0CAC8B,yCACrB,sBACZ,kBAAK,oBAAoB,AAAY,AAAU,eAAnB,OAAO,gFACnC,6DAES,kBAAK;IAQpC;;;QAlCkB;QAAW;QAA0B;;IAArC;IAAW;IAA0B;AAAvD;;EAA8D;;;;;;;;;;;;;;;;AAyCvC,YAAI;IAAiB;;;;IAHpB,kBAAyB;;;EAInD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;uBAO+B;AAAR;;AACb,qBAAQ,MAAwB;AAClC,qBAAiC,KAAzB,AAAM,KAAD,WAAW,gBAAV,OAAsB;AACjB,QAAvB,AAAgB;AAGd,QAFF,cAAS;AACa,UAApB,qBAAe;;AAEL,sBAAc,oCAClB,IAAI,SACH,KAAK,uBACa,4DACT,qCAAuB,cAC9B;AAKT,QAFF,cAAS;AACqB,UAA5B,AAAU,yBAAO,GAAG,OAAO;;AAEQ,QAArC,AAAQ,AAAoB,OAArB;MACT;;;AAGE,eAAiB,UAAW;AACW,QAArC,AAAQ,AAAoB,OAArB;AACM,MAAT;IACR;;AAGE,YAAW,qCACC,8CAA2B,AAAY,eAAT,oCAC7B,6DAEI,6BAAsB,sBAC3B,+BACS,0CACG,kCACD,QAAQ;AAGf,oBAFF,cAAS;AACuB,sBAA9B,qBAAe,AAAK,AAAO,IAAR,UAAU;;6DAGpB,qCAEL,yDAAoC,0IAG5C,qCACY,kDAAiC,cACX,YAArB,AAAY,eAAT,wBAAoC,+BAC1C,uCACS,kBAAK,yFACL,sBACL,cAAM,uBAAiB,AAAgB,6CACvC,kEAEJ,sCACQ,kBAAW,mGACV,sBACL,cAAM,uBAAiB,AAAgB,6CACvC,qMAGmB,YAArB,AAAY,eAAT,wBAAoC,+BAC/C,8CAEM,gCAAgB,mCAAyB,AAAI,wBAAC,aACxD;IAEd;UAE0B;AACxB,YAAW,oCACG,qCACK,aACF,kBAAK,qFACC,qCAEc,YAArB,AAAY,eAAT,OAAO,YAA6B,+BAAM,MAAM,sEAEvD,oCACK,gCAAyB,sBAC9B,+BACW,2CACA,+BAAe,eACnB,mBACI,SAAC,GAAO,UAAU,AAAS,uBAAC,KAAK,kDACnC,AAAU,gJAEnB,iCAAgB,gEAChB,yCACc,6CAA2B,AAAY,eAAT,OAAO,sBAC9C,gKAG4B,YAArB,AAAY,eAAT,OAAO,YAA6B,+BAC/C,8CAEM,gCAAgB,mCAAyB,AAAI,wBAAC,aACxD;IAEd;;;IAxGwB,kBAAyB;IACrB,wBAAsB;IAC7C,qBAAe;;;EAuGtB;;;;;;;;;;;;;;;;MAlLgB,kBAAS;YAAO,0CACR,oCACD,AAAI,wBAAC,8BACS;;MAGrB,sBAAa;YAAO,0CACZ,mCACF,AAAY,gCAAC;;MAGtB,cAAK","file":"comment.ddc.js"}');
  // Exports:
  return {
    pages__list_tree_page__detail_tree: detail_tree,
    pages__comment_page__comment: comment$
  };
});

//# sourceMappingURL=comment.ddc.js.map
