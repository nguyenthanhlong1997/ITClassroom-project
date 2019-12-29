import 'dart:async';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:demo/models/School.dart';
// import 'package:demo/pages/search_tree_page/SearchPage.dart';
import 'package:demo/services/FirestoreService.dart';
import 'package:demo/services/authentication.dart';
import 'package:flutter/material.dart';
import '../list_school_page/list_school_tab.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key, this.auth, this.userId, this.onSignedOut})
      : super(key: key);
  final BaseAuth auth;
  final VoidCallback onSignedOut;
  final String userId;
  @override
  State<StatefulWidget> createState() => new _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<School> schools;
  FirestoreService fireService = new FirestoreService();
  StreamSubscription<QuerySnapshot> todoTasks;
  var test;
  void initState() {
    super.initState();
    todoTasks = fireService.getSchoolList().listen((QuerySnapshot snapshot) {
      final List<School> tasks = snapshot.documents
          .map((documentSnapshot) => School.fromMap(documentSnapshot.data))
          .toList();
      setState(() {
        this.schools = tasks;
      });
    });
    print(todoTasks);
  }

  void loadState() {
    todoTasks = fireService.getSchoolList().listen((QuerySnapshot snapshot) {
      final List<School> tasks = snapshot.documents
          .map((documentSnapshot) => School.fromMap(documentSnapshot.data))
          .toList();
      print(snapshot.documents);
    });
  }

  _signOut() async {
    try {
      await widget.auth.signOut();
      widget.onSignedOut();
    } catch (e) {
      print(e);
    }
  }

  @override
  Widget build(BuildContext context) {
    loadState();
    return new DefaultTabController(
        length: 1,
        child: Scaffold(
          appBar: new AppBar(
            title: new Text('School List'),
            actions: <Widget>[
              new FlatButton(
                  child: new Text('Log Out',
                      style:
                          new TextStyle(fontSize: 15.0, color: Colors.white)),
                  onPressed: _signOut)
            ],
          ),
          body: TabBarView(
            children: <Widget>[
              new Container(
                  color: Colors.white,
                  child: ListSchoolTab(
                    list: schools,
                  )),
              // new Container(
              //     // child: SearchPage(),
              //     ),
            ],
          ),
          // bottomNavigationBar: new TabBar(
          //   tabs: <Widget>[
          //     Tab(icon: new Icon(Icons.list), text: 'ListSchool'),
          //     // Tab(icon: new Icon(Icons.search), text: 'SearchTree'),
          //   ],
          //   labelColor: Colors.yellow,
          //   unselectedLabelColor: Colors.blue[200],
          //   indicatorSize: TabBarIndicatorSize.label,
          //   indicatorPadding: EdgeInsets.all(5.0),
          //   indicatorColor: Colors.red,
          // ),
          // backgroundColor: Colors.black,
        ));
  }

  Widget _buildBody(BuildContext context) {
    return ListView();
  }
}
