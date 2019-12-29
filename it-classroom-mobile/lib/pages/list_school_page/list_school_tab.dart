import 'package:demo/models/School.dart';
// import 'package:demo/pages/list_tree_page/add_tree.dart';
import 'package:demo/pages/list_school_page/live_school.dart';

import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

final CollectionReference myCollection =
    Firestore.instance.collection('School');

class ListSchoolTab extends StatelessWidget {
  List<School> list;
  ListSchoolTab({Key key, this.list}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return new Column(children: <Widget>[
      new Flexible(
          child: StreamBuilder(
              stream: Firestore.instance.collection('School').snapshots(),
              builder: (context, snapshot) {
                if (snapshot.hasData) {
                  print('=== data ===: ${snapshot.data}');
                }
                Container(child: Center(child: Text("No data")));

                return ListView.builder(
                    itemCount: list.length,
                    padding: const EdgeInsets.all(16.0),
                    itemBuilder: (context, index) {
                      return Card(
                        elevation: 8,
                        margin: EdgeInsets.fromLTRB(0, 10, 0, 10),
                        child: InkWell(
                          splashColor: Colors.blue.withAlpha(30),
                          onTap: () {
                            print(list[index].toString());
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) =>
                                      LiveSchool(school: list[index])),
                            );
                          },
                          // child: Container(
                          //   // width: 300,
                          //   // height: 100,
                          //   child: Text('A card that can be tapped'),
                          // ),
                          child: ListTile(
                            leading: Icon(
                              Icons.assignment,
                              size: 50,
                              color: Colors.red,
                            ),
                            trailing: Icon(Icons.keyboard_arrow_right),
                            title: Text('${list[index].name}',
                                style: TextStyle(fontWeight: FontWeight.bold)),
                            subtitle: Text('${list[index].age} points'),
                          ),
                        ),
                      );
                    });
              })),
      new Divider(
        height: 1.0,
      ),
    ]);
  }
}
