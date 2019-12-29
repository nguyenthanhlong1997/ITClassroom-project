import 'package:demo/models/School.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class LiveSchool extends StatefulWidget {
  GoogleMapController mapController;
  final LatLng _center = const LatLng(45.521563, -122.677433);

  void _onMapCreated(GoogleMapController controller) {
    mapController = controller;
  }

  final School school;
  LiveSchool({Key key, @required this.school}) : super(key: key);

  @override
  _LiveSchool createState() => new _LiveSchool(school);
}

class _LiveSchool extends State<LiveSchool> {
  School school;
  _LiveSchool(this.school);

  // static const TextStyle optionStyle =
  //     TextStyle(fontSize: 30, fontWeight: FontWeight.bold);
  // static const List<Widget> _widgetOptions = <Widget>[
  //   // MapViewWidget(),
  //   Image(
  //     image: NetworkImage(
  //         'https://www.google.com/maps/d/thumbnail?mid=1qtboVzEjhLW3ezBB7aK-EKdODS4'),
  //   ),
  //   Text(
  //     'Live (Up Coming)',
  //     style: optionStyle,
  //   ),
  // ];

  // void _onItemTapped(int index) {
  //   setState(() {
  //     _selectedIndex = index;
  //   });
  // }

  void _showcontent() {
    showDialog<Null>(
      context: context,
      barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return new AlertDialog(
          title: new Text('${widget.school.name}'),
          content: new SingleChildScrollView(
            child: new ListBody(
              children: <Widget>[
                Container(
                    width: 190.0,
                    height: 190.0,
                    decoration: new BoxDecoration(
                        shape: BoxShape.rectangle,
                        image: new DecorationImage(
                            fit: BoxFit.fill,
                            image: new NetworkImage(widget.school.avatar)))),
                Text('Name: ${widget.school.name}'),
                Text('Description: ${widget.school.surname}'),
                Text('Points: ${widget.school.age}'),
              ],
            ),
          ),
          actions: <Widget>[
            new FlatButton(
              child: new Text('Ok'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('${widget.school.name}'),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.info),
            color: Colors.white,
            onPressed: () {
              _showcontent();
            },
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: new ListBody(
          children: <Widget>[
            Container(
                width: 190.0,
                height: 190.0,
                decoration: new BoxDecoration(
                    shape: BoxShape.rectangle,
                    image: new DecorationImage(
                        fit: BoxFit.fill,
                        image: new NetworkImage(widget.school.avatar)))),
            Text.rich(
              TextSpan(
                text: 'Name:',
                style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 20,
                    color: Colors.blueGrey),
                children: <TextSpan>[
                  TextSpan(
                      text: ' ${widget.school.name} ',
                      style: TextStyle(
                          fontStyle: FontStyle.italic,
                          fontWeight: FontWeight.normal,
                          color: Colors.black)),
                ],
              ),
            ),
            Text.rich(
              TextSpan(
                text: 'Description:',
                style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 20,
                    color: Colors.blueGrey),
                children: <TextSpan>[
                  TextSpan(
                      text: ' ${widget.school.surname} ',
                      style: TextStyle(
                          fontStyle: FontStyle.italic,
                          fontWeight: FontWeight.normal,
                          color: Colors.black)),
                ],
              ),
            ),
            Text.rich(
              TextSpan(
                text: 'Points:',
                style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 20,
                    color: Colors.blueGrey),
                children: <TextSpan>[
                  TextSpan(
                      text: ' ${widget.school.age} ',
                      style: TextStyle(
                          fontStyle: FontStyle.italic,
                          fontWeight: FontWeight.normal,
                          color: Colors.black)),
                ],
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () {
          return showDialog(
            context: context,
            builder: (context) {
              return AlertDialog(
                title: new Text("Upload a file",
                    style: TextStyle(fontWeight: FontWeight.bold)),
                content: Text("File Upload Feature (Working on)"),
                actions: <Widget>[
                  new FlatButton(
                    child: new Text('Ok'),
                    onPressed: () {
                      Navigator.of(context).pop();
                    },
                  ),
                ],
              );
            },
          );
        },
        label: Text('Upload'),
        icon: Icon(Icons.cloud_upload),
        backgroundColor: Colors.pink,
      ),
    );
  }
}
