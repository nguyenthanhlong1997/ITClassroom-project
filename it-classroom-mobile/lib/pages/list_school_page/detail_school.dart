import 'package:demo/models/School.dart';
import 'package:demo/pages/comment_page/comment.dart';
import 'package:flutter/material.dart';

class DetailSchool extends StatelessWidget {
  final School school;

  DetailSchool({Key key, @required this.school}) : super(key: key);

  Widget titleSection() {
    return Container(
      child: Center(
        child: Text(school.name,
            style: new TextStyle(
              fontSize: 20.0,
              color: Colors.blueGrey[400],
            )),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    print(this.school);
    return Scaffold(
      appBar: AppBar(
        title: Text(school.name.toString()),
        // actions: <Widget>[
        //   new FlatButton(
        //       child: new Text('Edit',
        //           style: new TextStyle(fontSize: 17.0, color: Colors.white)),
        //       onPressed: () {
        //         Navigator.push(
        //           context,
        //           MaterialPageRoute(builder: (context) => EditTree(tree)),
        //         );
        //       })
        // ],
      ),
      body: Column(
        children: [
          new Container(
              width: 190.0,
              height: 190.0,
              decoration: new BoxDecoration(
                  shape: BoxShape.circle,
                  image: new DecorationImage(
                      fit: BoxFit.fill,
                      image: new NetworkImage(school.avatar)))),
          titleSection(),
          detailSection(context),
        ],
      ),
    );
  }

  Widget detailSection(BuildContext context) {
    return Container(
      alignment: Alignment.bottomLeft,
      padding: const EdgeInsets.all(20.0),
      child: new SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.max,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text("Name:   " + school.name.toUpperCase(),
                style: new TextStyle(
                  fontSize: 10.0,
                  color: Colors.black,
                )),
            Text("Age:   " + school.age.toString(),
                style: new TextStyle(
                  fontSize: 10.0,
                  color: Colors.black,
                )),
            Text("Surname:   " + school.surname.toString(),
                style: new TextStyle(
                  fontSize: 10.0,
                  color: Colors.black,
                )),
            // new Container(
            //   height: 150,
            //   width: 250,
            //   margin: const EdgeInsets.all(15.0),
            //   padding: const EdgeInsets.all(3.0),
            //   decoration:
            //       BoxDecoration(border: Border.all(color: Colors.blueAccent)),
            //   child: ListView.builder(
            //       itemCount: tree.record.split("/").length,
            //       itemBuilder: (context, index) {
            //         return ListTile(
            //           title: Text('${tree.record.split("/")[index]}'),
            //         );
            //       }),
            // ),
          ],
        ),
      ),
    );
  }
}
