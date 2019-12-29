import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  constructor(public db: AngularFirestore) {}

  getAvatars() {
    return this.db.collection("/avatar").valueChanges();
  }

  getUser(userKey) {
    return this.db
      .collection("users")
      .doc(userKey)
      .snapshotChanges();
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db
      .collection("users")
      .doc(userKey)
      .set(value);
  }

  deleteUser(userKey) {
    return this.db
      .collection("users")
      .doc(userKey)
      .delete();
  }

  getUsers() {
    return this.db.collection("users").snapshotChanges();
  }

  searchUsers(searchValue) {
    return this.db
      .collection("users", ref =>
        ref
          .where("nameToSearch", ">=", searchValue)
          .where("nameToSearch", "<=", searchValue + "\uf8ff")
      )
      .snapshotChanges();
  }

  searchUsersByAge(value) {
    return this.db
      .collection("users", ref => ref.orderBy("age").startAt(value))
      .snapshotChanges();
  }

  createUser(value, avatar) {
    return this.db.collection("users").add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname,
      age: parseInt(value.age),
      avatar: avatar
    });
  }

  //=============================================NEW ASSIGNMENT==========================//

  getAssignment(assigmentKey) {
    return this.db
      .collection("assignments")
      .doc(assigmentKey)
      .snapshotChanges();
  }

  updateAssignment(assigmentKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db
      .collection("assignments")
      .doc(assigmentKey)
      .set(value);
  }

  deleteAssignment(assigmentKey) {
    return this.db
      .collection("assignments")
      .doc(assigmentKey)
      .delete();
  }

  getAssigments() {
    return this.db.collection("assignments").snapshotChanges();
  }

  searchAssigments(searchValue) {
    return this.db
      .collection("assignments", ref =>
        ref
          .where("nameToSearch", ">=", searchValue)
          .where("nameToSearch", "<=", searchValue + "\uf8ff")
      )
      .snapshotChanges();
  }

  searchAssigmentsByAge(value) {
    return this.db
      .collection("assignments", ref => ref.orderBy("points").startAt(value))
      .snapshotChanges();
  }

  createAssigment(value, avatar) {
    return this.db.collection("assignments").add({
      title: value.title,
      nameToSearch: value.title.toLowerCase(),
      description: value.description,
      points: parseInt(value.points),
      avatar: avatar
    });
  }
}
