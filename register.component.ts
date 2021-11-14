import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoApiService } from '../resto-api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert: boolean = false;
  register = new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')

    }
  )
  constructor(private resto: RestoApiService) { }

  ngOnInit(): void {
  }

  regUser() {
    this.resto.registerUser(this.register.value).subscribe((result) => {
      console.warn(result);
      this.alert = true;
      this.register.reset({});
    })

  }

  closeAlert() {
    this.alert = false;
  }
}
