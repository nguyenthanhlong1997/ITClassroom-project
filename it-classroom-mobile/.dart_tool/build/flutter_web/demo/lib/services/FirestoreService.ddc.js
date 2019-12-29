define(['dart_sdk', 'packages/demo/models/Tree', 'packages/cloud_firestore/cloud_firestore'], function(dart_sdk, packages__demo__models__Tree, packages__cloud_firestore__cloud_firestore) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const Tree = packages__demo__models__Tree.models__Tree;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore.cloud_firestore;
  const FirestoreService = Object.create(dart.library);
  const $first = dartx.first;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let FutureOfMapOfString$dynamic = () => (FutureOfMapOfString$dynamic = dart.constFn(async.Future$(MapOfString$dynamic())))();
  let TransactionToFutureOfMapOfString$dynamic = () => (TransactionToFutureOfMapOfString$dynamic = dart.constFn(dart.fnType(FutureOfMapOfString$dynamic(), [cloud_firestore.Transaction])))();
  let MapOfString$dynamicToTree = () => (MapOfString$dynamicToTree = dart.constFn(dart.fnType(Tree.Tree, [MapOfString$dynamic()])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let LinkedHashSetOfvoid = () => (LinkedHashSetOfvoid = dart.constFn(collection.LinkedHashSet$(dart.void)))();
  let SetOfvoid = () => (SetOfvoid = dart.constFn(core.Set$(dart.void)))();
  let VoidToSetOfvoid = () => (VoidToSetOfvoid = dart.constFn(dart.fnType(SetOfvoid(), [])))();
  const CT = Object.create(null);
  FirestoreService.FirestoreService = class FirestoreService$ extends core.Object {
    createTree(id, image, status, isFlower, isFruit, isWood, isGrass, name, age, area, todo, idUser, record, comment) {
      return async.async(Tree.Tree, function* createTree() {
        yield FirestoreService.myCollection.add(new (IdentityMapOfString$dynamic()).from(["id", id, "age", age, "image", image, "status", status, "isFlower", isFlower, "isFruit", isFruit, "isWood", isWood, "isGrass", isGrass, "name", name, "area", area, "todo", todo, "idUser", idUser, "record", record, "comment", comment])).whenComplete(dart.fn(() => {
          core.print("da add");
        }, VoidToNull()));
        let createTransaction = dart.fn(tx => async.async(MapOfString$dynamic(), function*() {
          let ds = (yield tx.get(FirestoreService.myCollection.document()));
          let tree = new Tree.Tree.new(core.String._check(id), core.String._check(image), core.String._check(status), core.bool._check(isFlower), core.bool._check(isFruit), core.bool._check(isWood), core.bool._check(isGrass), core.String._check(name), core.int._check(age), core.String._check(area), ListOfString()._check(todo), core.String._check(idUser), core.String._check(record), ListOfString()._check(comment));
          core.print(tree.toString());
          let data = tree.toMap();
          yield tx.set(ds.reference, data);
          core.print("task added");
          return data;
        }), TransactionToFutureOfMapOfString$dynamic());
        return cloud_firestore.Firestore.instance.runTransaction(createTransaction).then(Tree.Tree, dart.fn(mapData => new Tree.Tree.fromMap(mapData), MapOfString$dynamicToTree())).catchError(dart.fn(error => {
          core.print("error: " + dart.str(error));
          return null;
        }, dynamicToNull()));
      });
    }
    updateData(idTreeFireStore, id, image, status, isFlower, isFruit, isWood, isGrass, name, age, area, todo, idUser, record, comment) {
      return async.async(dart.dynamic, function* updateData() {
        let abc = (yield FirestoreService.myCollection.where("id", {isEqualTo: idTreeFireStore}).getDocuments());
        core.print(abc);
        yield FirestoreService.myCollection.document(abc.documents[$first].documentID).updateData(new (IdentityMapOfString$dynamic()).from(["id", id, "image", image, "age", age, "status", status, "isFlower", isFlower, "isFruit", isFruit, "isWood", isWood, "isGrass", isGrass, "name", name, "area", area, "todo", todo, "idUser", idUser, "record", record, "comment", comment])).whenComplete(dart.fn(() => LinkedHashSetOfvoid().from([core.print("da update")]), VoidToSetOfvoid()));
      });
    }
    deleteData(id) {
      return async.async(dart.dynamic, function* deleteData() {
        let abc = (yield FirestoreService.myCollection.where("id", {isEqualTo: id}).getDocuments());
        yield FirestoreService.myCollection.document(abc.documents[$first].documentID).delete().whenComplete(dart.fn(() => {
          core.print("da xoa");
        }, VoidToNull()));
      });
    }
    getTreeList(opts) {
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let limit = opts && 'limit' in opts ? opts.limit : null;
      let snapshots = FirestoreService.myCollection.snapshots();
      if (offset != null) {
        snapshots = snapshots.skip(offset);
      }
      if (limit != null) {
        snapshots = snapshots.take(limit);
      }
      return snapshots;
    }
  };
  (FirestoreService.FirestoreService.new = function() {
    ;
  }).prototype = FirestoreService.FirestoreService.prototype;
  dart.addTypeTests(FirestoreService.FirestoreService);
  dart.setMethodSignature(FirestoreService.FirestoreService, () => ({
    __proto__: dart.getMethods(FirestoreService.FirestoreService.__proto__),
    createTree: dart.fnType(async.Future$(Tree.Tree), [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic]),
    updateData: dart.fnType(dart.dynamic, [core.String, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic]),
    deleteData: dart.fnType(dart.dynamic, [core.String]),
    getTreeList: dart.fnType(async.Stream$(cloud_firestore.QuerySnapshot), [], {limit: core.int, offset: core.int}, {})
  }));
  dart.setLibraryUri(FirestoreService.FirestoreService, "package:demo/services/FirestoreService.dart");
  dart.defineLazy(FirestoreService, {
    /*FirestoreService.myCollection*/get myCollection() {
      return cloud_firestore.Firestore.instance.collection("Tree");
    }
  });
  dart.trackLibraries("packages/demo/services/FirestoreService", {
    "package:demo/services/FirestoreService.dart": FirestoreService
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["FirestoreService.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;eAM0B,IAAI,OAAO,QAAQ,UAAU,SAAS,QAAQ,SAClE,MAAM,KAAK,MAAM,MAAM,QAAQ,QAAQ;AADpB;AAmBnB,QAjBF,MAAM,AAAa,AAehB,kCAfoB,0CACrB,MAAM,EAAE,EACR,OAAO,GAAG,EACV,SAAS,KAAK,EACd,UAAU,MAAM,EAChB,YAAY,QAAQ,EACpB,WAAW,OAAO,EAClB,UAAU,MAAM,EAChB,WAAW,OAAO,EAClB,QAAQ,IAAI,EACZ,QAAQ,IAAI,EACZ,QAAQ,IAAI,EACZ,UAAU,MAAM,EAChB,UAAU,MAAM,EAChB,WAAW,OAAO,iBACJ;AACC,UAAf,WAAM;;AAGiB,gCAAoB,QAAa;AACjC,oBAAK,MAAM,AAAG,EAAD,KAAK,AAAa;AAE3C,qBAAW,qCAAK,EAAE,sBAAE,KAAK,sBAAE,MAAM,oBAAE,QAAQ,oBAAE,OAAO,oBAAE,MAAM,oBACnE,OAAO,sBAAE,IAAI,mBAAE,GAAG,sBAAE,IAAI,yBAAE,IAAI,sBAAE,MAAM,sBAAE,MAAM,yBAAE,OAAO;AACrC,UAAtB,WAAM,AAAK,IAAD;AACiB,qBAAO,AAAK,IAAD;AACN,UAAhC,MAAM,AAAG,EAAD,KAAK,AAAG,EAAD,YAAY,IAAI;AACZ,UAAnB,WAAM;AACN,gBAAO,KAAI;QACZ;AAED,cAAiB,AAAS,AAAkC,AAEzD,mDAFsC,iBAAiB,kBAAO,QAAC,WACpD,sBAAQ,OAAO,4CACf,QAAC;AACS,UAAtB,WAAM,AAAe,qBAAN,KAAK;AACpB,gBAAO;;MAEX;;eAEkB,iBAAiB,IAAI,OAAO,QAAQ,UAAU,SAC5D,QAAQ,SAAS,MAAM,KAAK,MAAM,MAAM,QAAQ,QAAQ;AADlD;AAEF,mBAAM,MAAM,AACb,AACA,oCADM,kBAAiB,eAAe;AAEjC,QAAV,WAAM,GAAG;AAgBkC,QAf3C,MAAM,AAAa,AAAyC,AAezD,uCAfyB,AAAI,AAAU,AAAM,GAAjB,0CAAwC,0CACrE,MAAM,EAAE,EACR,SAAS,KAAK,EACd,OAAO,GAAG,EACV,UAAU,MAAM,EAChB,YAAY,QAAQ,EACpB,WAAW,OAAO,EAClB,UAAU,MAAM,EAChB,WAAW,OAAO,EAClB,QAAQ,IAAI,EACZ,QAAQ,IAAI,EACZ,QAAQ,IAAI,EACZ,UAAU,MAAM,EAChB,UAAU,MAAM,EAChB,WAAW,OAAO,iBACJ,cAAM,4BAAC,WAAM;MAC/B;;eAEkB;AAAR;AACF,mBAAM,MAAM,AAAa,AAA2B,oCAArB,kBAAiB,EAAE;AAMtD,QALF,MAAM,AACD,AACA,AACA,uCAFS,AAAI,AAAU,AAAM,GAAjB,qDAEC;AACD,UAAf,WAAM;;MAEV;;;UAEuC;UAAY;AAC3B,sBAAY,AAAa;AAE/C,UAAI,MAAM,IAAI;AACsB,QAAlC,YAAY,AAAU,SAAD,MAAM,MAAM;;AAEnC,UAAI,KAAK,IAAI;AACsB,QAAjC,YAAY,AAAU,SAAD,MAAM,KAAK;;AAElC,YAAO,UAAS;IAClB;;;;EACF;;;;;;;;;;;MAzF0B,6BAAY;YAAa,AAAS,+CAAW","file":"FirestoreService.ddc.js"}');
  // Exports:
  return {
    services__FirestoreService: FirestoreService
  };
});

//# sourceMappingURL=FirestoreService.ddc.js.map
