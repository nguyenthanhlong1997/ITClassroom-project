import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { MatDialog } from "@angular/material";
import { AvatarDialogComponent } from "../avatar-dialog/avatar-dialog.component";
import { Router } from "@angular/router";
import { FirebaseService } from "../services/firebase.service";

@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.scss"]
})
export class NewUserComponent implements OnInit {
  exampleForm: FormGroup;
  avatarLink: string = "http://blackberryvietnam.net/attachments/1-jpg.87034/";

  validation_messages = {
    name: [{ type: "required", message: "Title is required." }],
    surname: [{ type: "required", message: "Description is required." }],
    age: [{ type: "required", message: "Point is required." }]
  };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      age: ["", Validators.required]
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      height: "400px",
      width: "400px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.avatarLink = result.link;
      }
    });
  }

  resetFields() {
    this.avatarLink =
      "http://2.bp.blogspot.com/-v92UBEuKFzU/U0n6o-l1rJI/AAAAAAAABmI/FgMNx6M_Hbc/s1600/anh+dep+avatar+4.jpg";
    this.exampleForm = this.fb.group({
      name: new FormControl("", Validators.required),
      surname: new FormControl("", Validators.required),
      age: new FormControl("", Validators.required)
    });
  }

  onSubmit(value) {
    this.firebaseService.createUser(value, this.avatarLink).then(res => {
      this.resetFields();
      this.router.navigate(["/home"]);
    });
  }
}
