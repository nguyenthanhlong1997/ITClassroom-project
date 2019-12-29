define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const Tree = Object.create(dart.library);
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $toUpperCase = dartx.toUpperCase;
  const $_set = dartx._set;
  const $add = dartx.add;
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let LinkedMapOfString$dynamic = () => (LinkedMapOfString$dynamic = dart.constFn(_js_helper.LinkedMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  const _isFlower$ = dart.privateName(Tree, "_isFlower");
  const _isFruit$ = dart.privateName(Tree, "_isFruit");
  const _isWood$ = dart.privateName(Tree, "_isWood");
  const _isGrass$ = dart.privateName(Tree, "_isGrass");
  const _comment$ = dart.privateName(Tree, "_comment");
  const _record$ = dart.privateName(Tree, "_record");
  const _idUser$ = dart.privateName(Tree, "_idUser");
  const _todo$ = dart.privateName(Tree, "_todo");
  const _area$ = dart.privateName(Tree, "_area");
  const _age$ = dart.privateName(Tree, "_age");
  const _name$ = dart.privateName(Tree, "_name");
  const _status$ = dart.privateName(Tree, "_status");
  const _image$ = dart.privateName(Tree, "_image");
  const _id$ = dart.privateName(Tree, "_id");
  Tree.Tree = class Tree extends core.Object {
    get area() {
      return this[_area$];
    }
    get record() {
      return this[_record$];
    }
    updateRecord(field, mail) {
      this.record = dart.notNull(this.record) + ("/" + dart.toString(field)[$toUpperCase]() + " is done " + "in " + dart.notNull(new core.DateTime.now().toString()) + " by " + dart.notNull(dart.toString(mail)) + "./");
    }
    set record(value) {
      this[_record$] = value;
    }
    get age() {
      return this[_age$];
    }
    get name() {
      return this[_name$];
    }
    get isGrass() {
      return this[_isGrass$];
    }
    get isWood() {
      return this[_isWood$];
    }
    get isFruit() {
      return this[_isFruit$];
    }
    get isFlower() {
      return this[_isFlower$];
    }
    get status() {
      return this[_status$];
    }
    get image() {
      return this[_image$];
    }
    get id() {
      return this[_id$];
    }
    get todo() {
      return this[_todo$];
    }
    set todo(value) {
      this[_todo$] = value;
    }
    toMap() {
      let map = new (LinkedMapOfString$dynamic()).new();
      map[$_set]("id", this[_id$]);
      map[$_set]("image", this[_image$]);
      map[$_set]("status", this[_status$]);
      map[$_set]("isFlower", this[_isFlower$]);
      map[$_set]("isFruit", this[_isFruit$]);
      map[$_set]("isWood", this[_isWood$]);
      map[$_set]("isGrass", this[_isGrass$]);
      map[$_set]("name", this[_name$]);
      map[$_set]("age", this[_age$]);
      map[$_set]("area", this[_area$]);
      map[$_set]("todo", this[_todo$]);
      map[$_set]("idUser", this[_idUser$]);
      map[$_set]("record", this[_record$]);
      map[$_set]("comment", this[_comment$]);
      return map;
    }
    toString() {
      return "Tree{_id: " + dart.str(this[_id$]) + ", _image: " + dart.str(this[_image$]) + ", _status: " + dart.str(this[_status$]) + ", _isFlower: " + dart.str(this[_isFlower$]) + ", _isFruit: " + dart.str(this[_isFruit$]) + ", _isWood: " + dart.str(this[_isWood$]) + ", _isGrass: " + dart.str(this[_isGrass$]) + ", _name: " + dart.str(this[_name$]) + ", _age: " + dart.str(this[_age$]) + ", _area: " + dart.str(this[_area$]) + ", _todo: " + dart.str(this[_todo$]) + ", _idUser: " + dart.str(this[_idUser$]) + ", _record: " + dart.str(this[_record$]) + ", _comment: " + dart.str(this[_comment$]) + "}";
    }
    get idUser() {
      return this[_idUser$];
    }
    set idUser(value) {
      this[_idUser$] = value;
    }
    get comment() {
      return this[_comment$];
    }
    set comment(value) {
      this[_comment$] = value;
    }
    addComment(email, com) {
      this.comment[$add](dart.notNull(dart.toString(email)) + "/" + dart.notNull(dart.toString(com)));
    }
  };
  (Tree.Tree.map = function(obj) {
    this[_isFlower$] = false;
    this[_isFruit$] = false;
    this[_isWood$] = false;
    this[_isGrass$] = false;
    this[_comment$] = null;
    this[_record$] = null;
    this[_idUser$] = null;
    this[_todo$] = null;
    this[_area$] = null;
    this[_age$] = null;
    this[_name$] = null;
    this[_status$] = null;
    this[_image$] = null;
    this[_id$] = null;
    this[_id$] = core.String._check(dart.dsend(obj, '_get', ["id"]));
    this[_image$] = core.String._check(dart.dsend(obj, '_get', ["image"]));
    this[_status$] = core.String._check(dart.dsend(obj, '_get', ["status"]));
    this[_isFlower$] = core.bool._check(dart.dsend(obj, '_get', ["isFlower"]));
    this[_isFruit$] = core.bool._check(dart.dsend(obj, '_get', ["isFruit"]));
    this[_isWood$] = core.bool._check(dart.dsend(obj, '_get', ["isWood"]));
    this[_isGrass$] = core.bool._check(dart.dsend(obj, '_get', ["isGrass"]));
    this[_name$] = core.String._check(dart.dsend(obj, '_get', ["name"]));
    this[_age$] = core.int._check(dart.dsend(obj, '_get', ["age"]));
    this[_area$] = core.String._check(dart.dsend(obj, '_get', ["area"]));
    this[_todo$] = ListOfString()._check(dart.dsend(obj, '_get', ["todo"]));
    this[_idUser$] = core.String._check(dart.dsend(obj, '_get', ["idUser"]));
    this[_record$] = core.String._check(dart.dsend(obj, '_get', ["record"]));
    this[_comment$] = ListOfString()._check(dart.dsend(obj, '_get', ["comment"]));
  }).prototype = Tree.Tree.prototype;
  (Tree.Tree.new = function(_id, _image, _status, _isFlower, _isFruit, _isWood, _isGrass, _name, _age, _area, _todo, _idUser, _record, _comment) {
    this[_isFlower$] = false;
    this[_isFruit$] = false;
    this[_isWood$] = false;
    this[_isGrass$] = false;
    this[_id$] = _id;
    this[_image$] = _image;
    this[_status$] = _status;
    this[_isFlower$] = _isFlower;
    this[_isFruit$] = _isFruit;
    this[_isWood$] = _isWood;
    this[_isGrass$] = _isGrass;
    this[_name$] = _name;
    this[_age$] = _age;
    this[_area$] = _area;
    this[_todo$] = _todo;
    this[_idUser$] = _idUser;
    this[_record$] = _record;
    this[_comment$] = _comment;
    ;
  }).prototype = Tree.Tree.prototype;
  (Tree.Tree.fromMap = function(map) {
    this[_isFlower$] = false;
    this[_isFruit$] = false;
    this[_isWood$] = false;
    this[_isGrass$] = false;
    this[_comment$] = null;
    this[_record$] = null;
    this[_idUser$] = null;
    this[_todo$] = null;
    this[_area$] = null;
    this[_age$] = null;
    this[_name$] = null;
    this[_status$] = null;
    this[_image$] = null;
    this[_id$] = null;
    this[_id$] = core.String._check(map[$_get]("id"));
    this[_image$] = core.String._check(map[$_get]("image"));
    this[_status$] = core.String._check(map[$_get]("status"));
    this[_isFlower$] = core.bool._check(map[$_get]("isFlower"));
    this[_isFruit$] = core.bool._check(map[$_get]("isFruit"));
    this[_isWood$] = core.bool._check(map[$_get]("isWood"));
    this[_isGrass$] = core.bool._check(map[$_get]("isGrass"));
    this[_name$] = core.String._check(map[$_get]("name"));
    this[_age$] = core.int._check(map[$_get]("age"));
    this[_area$] = core.String._check(map[$_get]("area"));
    this[_todo$] = ListOfString()._check(dart.dgsend(map[$_get]("todo"), [core.String], 'cast', []));
    this[_idUser$] = core.String._check(map[$_get]("idUser"));
    this[_record$] = core.String._check(map[$_get]("record"));
    this[_comment$] = ListOfString()._check(dart.dgsend(map[$_get]("comment"), [core.String], 'cast', []));
  }).prototype = Tree.Tree.prototype;
  dart.addTypeTests(Tree.Tree);
  dart.setMethodSignature(Tree.Tree, () => ({
    __proto__: dart.getMethods(Tree.Tree.__proto__),
    updateRecord: dart.fnType(dart.void, [dart.dynamic, dart.dynamic]),
    toMap: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    addComment: dart.fnType(dart.void, [dart.dynamic, dart.dynamic])
  }));
  dart.setGetterSignature(Tree.Tree, () => ({
    __proto__: dart.getGetters(Tree.Tree.__proto__),
    area: core.String,
    record: core.String,
    age: core.int,
    name: core.String,
    isGrass: core.bool,
    isWood: core.bool,
    isFruit: core.bool,
    isFlower: core.bool,
    status: core.String,
    image: core.String,
    id: core.String,
    todo: core.List$(core.String),
    idUser: core.String,
    comment: core.List$(core.String)
  }));
  dart.setSetterSignature(Tree.Tree, () => ({
    __proto__: dart.getSetters(Tree.Tree.__proto__),
    record: core.String,
    todo: core.List$(core.String),
    idUser: core.String,
    comment: core.List$(core.String)
  }));
  dart.setLibraryUri(Tree.Tree, "package:demo/models/Tree.dart");
  dart.setFieldSignature(Tree.Tree, () => ({
    __proto__: dart.getFields(Tree.Tree.__proto__),
    [_id$]: dart.fieldType(core.String),
    [_image$]: dart.fieldType(core.String),
    [_status$]: dart.fieldType(core.String),
    [_isFlower$]: dart.fieldType(core.bool),
    [_isFruit$]: dart.fieldType(core.bool),
    [_isWood$]: dart.fieldType(core.bool),
    [_isGrass$]: dart.fieldType(core.bool),
    [_name$]: dart.fieldType(core.String),
    [_age$]: dart.fieldType(core.int),
    [_area$]: dart.fieldType(core.String),
    [_todo$]: dart.fieldType(core.List$(core.String)),
    [_idUser$]: dart.fieldType(core.String),
    [_record$]: dart.fieldType(core.String),
    [_comment$]: dart.fieldType(core.List$(core.String))
  }));
  dart.defineExtensionMethods(Tree.Tree, ['toString']);
  dart.trackLibraries("packages/demo/models/Tree", {
    "package:demo/models/Tree.dart": Tree
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Tree.dart"],"names":[],"mappings":"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","file":"Tree.ddc.js"}');
  // Exports:
  return {
    models__Tree: Tree
  };
});

//# sourceMappingURL=Tree.ddc.js.map
