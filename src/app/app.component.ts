import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  profileForm = new FormGroup({
    name: new FormControl(''),
    mail: new FormControl(''),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
