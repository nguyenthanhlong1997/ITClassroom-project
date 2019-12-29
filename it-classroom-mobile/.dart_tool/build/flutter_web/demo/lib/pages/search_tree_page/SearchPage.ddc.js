define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/demo/services/FirestoreService', 'packages/flutter/material', 'packages/demo/models/Tree', 'packages/cloud_firestore/cloud_firestore', 'packages/demo/pages/comment_page/comment'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__demo__services__FirestoreService, packages__flutter__material, packages__demo__models__Tree, packages__cloud_firestore__cloud_firestore, packages__demo__pages__comment_page__comment) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const preferred_size = packages__flutter__src__widgets__actions.src__widgets__preferred_size;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const FirestoreService = packages__demo__services__FirestoreService.services__FirestoreService;
  const icons = packages__flutter__material.src__material__icons;
  const dropdown = packages__flutter__material.src__material__dropdown;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const page = packages__flutter__material.src__material__page;
  const Tree = packages__demo__models__Tree.models__Tree;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore.cloud_firestore;
  const detail_tree = packages__demo__pages__comment_page__comment.pages__list_tree_page__detail_tree;
  const SearchPage = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $length = dartx.length;
  const $add = dartx.add;
  const $_set = dartx._set;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let DropdownButtonOfString = () => (DropdownButtonOfString = dart.constFn(dropdown.DropdownButton$(core.String)))();
  let DropdownMenuItemOfString = () => (DropdownMenuItemOfString = dart.constFn(dropdown.DropdownMenuItem$(core.String)))();
  let ListOfDropdownMenuItemOfString = () => (ListOfDropdownMenuItemOfString = dart.constFn(core.List$(DropdownMenuItemOfString())))();
  let DocumentSnapshotToTree = () => (DocumentSnapshotToTree = dart.constFn(dart.fnType(Tree.Tree, [cloud_firestore.DocumentSnapshot])))();
  let QuerySnapshotToNull = () => (QuerySnapshotToNull = dart.constFn(dart.fnType(core.Null, [cloud_firestore.QuerySnapshot])))();
  let BuildContextToDetailTree = () => (BuildContextToDetailTree = dart.constFn(dart.fnType(detail_tree.DetailTree, [framework.BuildContext])))();
  let BuildContextAndintToListTile = () => (BuildContextAndintToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [framework.BuildContext, core.int])))();
  let JSArrayOfDropdownMenuItemOfString = () => (JSArrayOfDropdownMenuItemOfString = dart.constFn(_interceptors.JSArray$(DropdownMenuItemOfString())))();
  let dynamicToDropdownMenuItemOfString = () => (dynamicToDropdownMenuItemOfString = dart.constFn(dart.fnType(DropdownMenuItemOfString(), [dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 37,
        [_Location_line]: 23,
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
        [_Location_column]: 26,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 7,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomPadding",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 7,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 7,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 43,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 11,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 91,
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
        [_Location_column]: 33,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 43,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 11,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 11,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 11,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 55,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tree",
        [_Location_column]: 52,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 134,
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
        [_Location_column]: 16,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 7,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 7,
        [_Location_line]: 131,
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
        [_Location_column]: 21,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 9,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 7,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 7,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 7,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/search_tree_page/SearchPage.dart"
      });
    }
  });
  SearchPage.SearchPage = class SearchPage$ extends framework.StatefulWidget {
    createState() {
      return new SearchPage._SearchPageState.new();
    }
  };
  (SearchPage.SearchPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    SearchPage.SearchPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = SearchPage.SearchPage.prototype;
  dart.addTypeTests(SearchPage.SearchPage);
  dart.setMethodSignature(SearchPage.SearchPage, () => ({
    __proto__: dart.getMethods(SearchPage.SearchPage.__proto__),
    createState: dart.fnType(SearchPage._SearchPageState, [])
  }));
  dart.setLibraryUri(SearchPage.SearchPage, "package:demo/pages/search_tree_page/SearchPage.dart");
  const _filter = dart.privateName(SearchPage, "_filter");
  const _cities = dart.privateName(SearchPage, "_cities");
  const _items = dart.privateName(SearchPage, "_items");
  const _dropDownMenuItems = dart.privateName(SearchPage, "_dropDownMenuItems");
  const _currentCity = dart.privateName(SearchPage, "_currentCity");
  const _searchText = dart.privateName(SearchPage, "_searchText");
  const _searchIcon = dart.privateName(SearchPage, "_searchIcon");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  const _appBarTitle = dart.privateName(SearchPage, "_appBarTitle");
  let C5;
  let C6;
  let C7;
  let C4;
  let C3;
  const _buildBar = dart.privateName(SearchPage, "_buildBar");
  const _buildList = dart.privateName(SearchPage, "_buildList");
  let C10;
  let C9;
  let C8;
  let C13;
  let C14;
  let C15;
  let C12;
  let C11;
  const _searchPressed = dart.privateName(SearchPage, "_searchPressed");
  let C18;
  let C19;
  let C17;
  let C16;
  let C22;
  let C23;
  let C24;
  let C21;
  let C20;
  let C27;
  let C26;
  let C25;
  let C30;
  let C29;
  let C28;
  let C33;
  let C34;
  let C32;
  let C31;
  let C37;
  let C36;
  let C35;
  let C40;
  let C41;
  let C42;
  let C39;
  let C38;
  let C45;
  let C44;
  let C43;
  let C48;
  let C47;
  let C46;
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C56;
  let C54;
  let C53;
  let C59;
  let C58;
  let C57;
  let C62;
  let C63;
  let C61;
  let C60;
  let C66;
  let C67;
  let C68;
  let C65;
  let C64;
  SearchPage._SearchPageState = class _SearchPageState extends framework.State$(SearchPage.SearchPage) {
    initState() {
      super.initState();
      this[_dropDownMenuItems] = this.getDropDownMenuItems();
      this[_currentCity] = this[_dropDownMenuItems][$_get](0).value;
      this[_items] = this[_dropDownMenuItems];
      this[_appBarTitle] = new (DropdownButtonOfString()).new({value: dart.toString(this[_cities][$_get](0)), items: ListOfDropdownMenuItemOfString()._check(this[_items]), onChanged: dart.bind(this, 'changedDropDownItem'), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
      let todolists = this.fireService.getTreeList().listen(dart.fn(snapshot => {
        let tasks = snapshot.documents[$map](Tree.Tree, dart.fn(documentSnapshot => new Tree.Tree.fromMap(documentSnapshot.data), DocumentSnapshotToTree()))[$toList]();
        this.setState(dart.fn(() => {
          this.trees = tasks;
        }, VoidToNull()));
      }, QuerySnapshotToNull()));
      core.print(this.trees);
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: preferred_size.PreferredSizeWidget._check(this[_buildBar](context)), body: new container.Container.new({child: this[_buildList](), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), resizeToAvoidBottomPadding: false, $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
    }
    [_buildBar](context) {
      return new app_bar.AppBar.new({centerTitle: true, title: this[_appBarTitle], leading: new icon_button.IconButton.new({icon: this[_searchIcon], onPressed: dart.bind(this, _searchPressed), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20});
    }
    [_searchPressed]() {
      this.setState(dart.fn(() => {
        if (dart.equals(this[_searchIcon].icon, icons.Icons.search)) {
          this[_searchIcon] = new icon.Icon.new(icons.Icons.close, {$creationLocationd_0dea112b090073317d4: C25 || CT.C25});
          this[_appBarTitle] = new text_field.TextField.new({controller: this[_filter], decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(icons.Icons.search, {$creationLocationd_0dea112b090073317d4: C28 || CT.C28}), hintText: "Search..."}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31});
        } else {
          this[_searchIcon] = new icon.Icon.new(icons.Icons.search, {$creationLocationd_0dea112b090073317d4: C35 || CT.C35});
          this[_appBarTitle] = new (DropdownButtonOfString()).new({value: this[_currentCity], items: this[_dropDownMenuItems], onChanged: dart.bind(this, 'changedDropDownItem'), $creationLocationd_0dea112b090073317d4: C38 || CT.C38});
          this.filteredNames = this.trees;
          this[_filter].clear();
        }
      }, VoidToNull()));
    }
    [_buildList]() {
      if (!this[_searchText][$isEmpty]) {
        let tempList = [];
        if (this[_currentCity] === "name") {
          for (let i = 0; i < dart.notNull(this.filteredNames[$length]); i = i + 1) {
            if (dart.dtest(dart.dsend(dart.dload(this.filteredNames[$_get](i), 'name'), 'contains', [this[_searchText]]))) {
              core.print("da tim");
              tempList[$add](this.filteredNames[$_get](i));
            }
          }
        } else {
          for (let i = 0; i < dart.notNull(this.filteredNames[$length]); i = i + 1) {
            if (dart.dtest(dart.dsend(dart.dload(this.filteredNames[$_get](i), 'area'), 'contains', [this[_searchText]]))) {
              core.print("da tim");
              tempList[$add](this.filteredNames[$_get](i));
            }
          }
        }
        core.print(dart.toString(tempList));
        this.filteredNames = tempList;
      }
      return new scroll_view.ListView.builder({itemCount: this.filteredNames == null ? 0 : this.filteredNames[$length], itemBuilder: dart.fn((context, index) => new list_tile.ListTile.new({title: new text.Text.new(dart.str(dart.dload(this.filteredNames[$_get](index), 'name')), {$creationLocationd_0dea112b090073317d4: C43 || CT.C43}), onTap: dart.fn(() => {
            navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new detail_tree.DetailTree.new({tree: Tree.Tree._check(this.filteredNames[$_get](index)), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), BuildContextToDetailTree())}));
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), BuildContextAndintToListTile()), $creationLocationd_0dea112b090073317d4: C53 || CT.C53});
    }
    getDropDownMenuItems() {
      let items = JSArrayOfDropdownMenuItemOfString().of([]);
      return this[_cities][$map](DropdownMenuItemOfString(), dart.fn(data => new (DropdownMenuItemOfString()).new({child: new text.Text.new(core.String._check(data), {$creationLocationd_0dea112b090073317d4: C57 || CT.C57}), value: core.String._check(data), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), dynamicToDropdownMenuItemOfString()))[$toList]();
    }
    changedDropDownItem(selectedCity) {
      return async.async(dart.void, (function* changedDropDownItem() {
        core.print("Selected city " + dart.str(selectedCity) + ", we are going to refresh the UI");
        yield this.setState(dart.fn(() => {
          this[_cities][$_set](0, selectedCity);
          this[_items] = this[_cities];
          this[_currentCity] = selectedCity;
        }, VoidToNull()));
        core.print(dart.toString(this[_items]));
        this.setState(dart.fn(() => {
        }, VoidToNull()));
        this[_appBarTitle] = new (DropdownButtonOfString()).new({value: this[_currentCity], items: this[_dropDownMenuItems], onChanged: dart.bind(this, 'changedDropDownItem'), $creationLocationd_0dea112b090073317d4: C64 || CT.C64});
      }).bind(this));
    }
  };
  (SearchPage._SearchPageState.new = function() {
    this[_filter] = new editable_text.TextEditingController.new();
    this.fireService = new FirestoreService.FirestoreService.new();
    this[_cities] = ["chosen", "name", "area"];
    this[_items] = null;
    this[_dropDownMenuItems] = null;
    this[_currentCity] = null;
    this[_searchText] = "";
    this.trees = [];
    this.filteredNames = [];
    this[_searchIcon] = new icon.Icon.new(icons.Icons.search, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    this[_appBarTitle] = null;
    SearchPage._SearchPageState.__proto__.new.call(this);
    this[_filter].addListener(dart.fn(() => {
      if (this[_filter].text[$isEmpty]) {
        this.setState(dart.fn(() => {
          this[_searchText] = "";
          this.filteredNames = this.trees;
        }, VoidToNull()));
      } else {
        this.setState(dart.fn(() => {
          this[_searchText] = this[_filter].text;
        }, VoidToNull()));
      }
    }, VoidToNull()));
  }).prototype = SearchPage._SearchPageState.prototype;
  dart.addTypeTests(SearchPage._SearchPageState);
  dart.setMethodSignature(SearchPage._SearchPageState, () => ({
    __proto__: dart.getMethods(SearchPage._SearchPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildBar]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_searchPressed]: dart.fnType(dart.void, []),
    [_buildList]: dart.fnType(framework.Widget, []),
    getDropDownMenuItems: dart.fnType(core.List$(dropdown.DropdownMenuItem$(core.String)), []),
    changedDropDownItem: dart.fnType(dart.void, [core.String])
  }));
  dart.setLibraryUri(SearchPage._SearchPageState, "package:demo/pages/search_tree_page/SearchPage.dart");
  dart.setFieldSignature(SearchPage._SearchPageState, () => ({
    __proto__: dart.getFields(SearchPage._SearchPageState.__proto__),
    [_filter]: dart.finalFieldType(editable_text.TextEditingController),
    fireService: dart.fieldType(FirestoreService.FirestoreService),
    [_cities]: dart.fieldType(core.List),
    [_items]: dart.fieldType(core.List),
    [_dropDownMenuItems]: dart.fieldType(core.List$(dropdown.DropdownMenuItem$(core.String))),
    [_currentCity]: dart.fieldType(core.String),
    [_searchText]: dart.fieldType(core.String),
    trees: dart.fieldType(core.List),
    filteredNames: dart.fieldType(core.List),
    [_searchIcon]: dart.fieldType(icon.Icon),
    [_appBarTitle]: dart.fieldType(framework.Widget)
  }));
  dart.trackLibraries("packages/demo/pages/search_tree_page/SearchPage", {
    "package:demo/pages/search_tree_page/SearchPage.dart": SearchPage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["SearchPage.dart"],"names":[],"mappings":"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","file":"SearchPage.ddc.js"}');
  // Exports:
  return {
    pages__search_tree_page__SearchPage: SearchPage
  };
});

//# sourceMappingURL=SearchPage.ddc.js.map
