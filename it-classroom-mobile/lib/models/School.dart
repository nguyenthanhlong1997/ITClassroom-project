class School {
  int _age;
  String _avatar;
  String _name;
  String _nameToSearch;
  String _surname;

  School.map(dynamic obj) {
    this._age = obj["age"];
    this._avatar = obj["avatar"];
    this._name = obj["name"];
    this._nameToSearch = obj["nameToSearch"];
    this._surname = obj["surname"];
  }

  School(
      this._age, this._avatar, this._name, this._nameToSearch, this._surname);
  int get age => _age;
  String get avatar => _avatar;
  String get name => _name;
  String get nameToSearch => _nameToSearch;
  String get surname => _surname;

  Map<String, dynamic> toMap() {
    var map = new Map<String, dynamic>();
    map["image"] = _age;
    map["name"] = _avatar;
    map["area"] = _name;
    map["address"] = _nameToSearch;
    map["comment"] = _surname;
    return map;
  }

  School.fromMap(Map<String, dynamic> map) {
    this._age = map["age"];
    this._avatar = map["avatar"];
    this._name = map["name"];
    this._nameToSearch = map["nameToSearch"];
    this._surname = map["surname"];
  }

  @override
  String toString() {
    // return 'School{_id: $_id, _image: $_image, _name: $_name, _area: $_area, _address: $_address, _comment: $_comment}';
    return 'School(_age: $_age, _avatar:$_avatar, _name:$_name, _nameToSearch:$_nameToSearch, _surname:$_surname)';
  }
}
