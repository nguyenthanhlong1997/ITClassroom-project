define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/demo/pages/list_tree_page/add_tree', 'packages/flutter/src/painting/_network_image_web', 'packages/demo/pages/comment_page/comment', 'packages/demo/models/Tree'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__demo__pages__list_tree_page__add_tree, packages__flutter__src__painting___network_image_web, packages__demo__pages__comment_page__comment, packages__demo__models__Tree) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const floating_action_button = packages__flutter__material.src__material__floating_action_button;
  const page = packages__flutter__material.src__material__page;
  const icons = packages__flutter__material.src__material__icons;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const add_tree = packages__demo__pages__list_tree_page__add_tree.pages__list_tree_page__add_tree;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const detail_tree = packages__demo__pages__comment_page__comment.pages__list_tree_page__detail_tree;
  const Tree = packages__demo__models__Tree.models__Tree;
  const list_tree_tab = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  let BuildContextToNewTask = () => (BuildContextToNewTask = dart.constFn(dart.fnType(add_tree.NewTask, [framework.BuildContext])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextToDetailTree = () => (BuildContextToDetailTree = dart.constFn(dart.fnType(detail_tree.DetailTree, [framework.BuildContext])))();
  let BuildContextAndintToListTile = () => (BuildContextAndintToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [framework.BuildContext, core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 53,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/list_tree_tab.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/list_tree_tab.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 9,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/list_tree_tab.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/list_tree_tab.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 46,
        [_Location_line]: 33,
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
        [_Location_column]: 20,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/list_tree_tab.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tree",
        [_Location_column]: 52,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/list_tree_tab.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/list_tree_tab.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/demo/pages/list_tree_page/list_tree_tab.dart"
      });
    }
  });
  const _buildList = dart.privateName(list_tree_tab, "_buildList");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C4;
  let C3;
  let C2;
  let C7;
  let C8;
  let C9;
  let C6;
  let C5;
  let C12;
  let C13;
  let C11;
  let C10;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C14;
  let C17;
  let C16;
  let C15;
  let C20;
  let C19;
  let C18;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C28;
  let C29;
  let C26;
  let C25;
  const list$ = dart.privateName(list_tree_tab, "ListTreeTab.list");
  list_tree_tab.ListTreeTab = class ListTreeTab extends framework.StatelessWidget {
    get list() {
      return this[list$];
    }
    set list(value) {
      this[list$] = value;
    }
    build(context) {
      return new scaffold.Scaffold.new({body: this[_buildList](this.list), floatingActionButton: new floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => {
            navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new add_tree.NewTask.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextToNewTask())}));
          }, VoidToNull()), tooltip: "Increment", child: new icon.Icon.new(icons.Icons.add, {$creationLocationd_0dea112b090073317d4: C2 || CT.C2}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
    }
    [_buildList](list) {
      return new scroll_view.ListView.builder({itemCount: list[$length], padding: C14 || CT.C14, itemBuilder: dart.fn((context, index) => new list_tile.ListTile.new({title: new text.Text.new(dart.str(list[$_get](index).name), {$creationLocationd_0dea112b090073317d4: C15 || CT.C15}), onTap: dart.fn(() => {
            core.print(dart.toString(list[$_get](index)));
            navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new detail_tree.DetailTree.new({tree: list[$_get](index), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), BuildContextToDetailTree())}));
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), BuildContextAndintToListTile()), $creationLocationd_0dea112b090073317d4: C25 || CT.C25});
    }
  };
  (list_tree_tab.ListTreeTab.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let list = opts && 'list' in opts ? opts.list : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[list$] = list;
    list_tree_tab.ListTreeTab.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = list_tree_tab.ListTreeTab.prototype;
  dart.addTypeTests(list_tree_tab.ListTreeTab);
  dart.setMethodSignature(list_tree_tab.ListTreeTab, () => ({
    __proto__: dart.getMethods(list_tree_tab.ListTreeTab.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildList]: dart.fnType(framework.Widget, [core.List$(Tree.Tree)])
  }));
  dart.setLibraryUri(list_tree_tab.ListTreeTab, "package:demo/pages/list_tree_page/list_tree_tab.dart");
  dart.setFieldSignature(list_tree_tab.ListTreeTab, () => ({
    __proto__: dart.getFields(list_tree_tab.ListTreeTab.__proto__),
    list: dart.fieldType(core.List$(Tree.Tree))
  }));
  dart.trackLibraries("packages/demo/pages/list_tree_page/list_tree_tab", {
    "package:demo/pages/list_tree_page/list_tree_tab.dart": list_tree_tab
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["list_tree_tab.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMa;;;;;;UAIe;AACxB,YAAO,kCACC,iBAAW,kCACK,gEACT;AAIR,YAHS,uCACR,OAAO,EACP,yCAA2B,QAAC,WAAY;qCAGnC,oBACF,kBAAW;IAGxB;iBAE6B;AAC3B,YAAgB,8CACD,AAAK,IAAD,gDAEF,SAAC,SAAS,UACd,mCACE,kBAA0B,SAAlB,AAAI,AAAQ,IAAR,QAAC,KAAK,0EAClB;AACwB,YAA7B,WAAkB,cAAZ,AAAI,IAAA,QAAC,KAAK;AAMf,YALS,uCACR,OAAO,EACP,yCACW,QAAC,WAAY,sCAAiB,AAAI,IAAA,QAAC,KAAK;;IAMjE;;;QArCiB;QAAU;;;AAAS,6DAAW,GAAG;;EAAC","file":"list_tree_tab.ddc.js"}');
  // Exports:
  return {
    pages__list_tree_page__list_tree_tab: list_tree_tab
  };
});

//# sourceMappingURL=list_tree_tab.ddc.js.map
