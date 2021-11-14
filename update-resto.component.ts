import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoApiService } from '../resto-api.service';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert: boolean = false;
  updateResto = new FormGroup(
    {
      name: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl('')
    }
  )


  constructor(private route: ActivatedRoute, private resto: RestoApiService) { }

  ngOnInit(): void {
    console.warn(this.route.snapshot.params.id);
    this.resto.getRestoDetails(this.route.snapshot.params.id).subscribe((result: any) => {
      this.updateResto = new FormGroup(
        {
          name: new FormControl(result['name']),
          address: new FormControl(result['address']),
          email: new FormControl(result['email'])
        }
      )
    })
  }

  submitData() {
    console.warn(this.updateResto.value);
    return this.resto.updateSubmittedData(this.route.snapshot.params.id, this.updateResto.value).subscribe((result) => {
      this.alert = true;
    })
  }
  closeAlert() {
    return this.alert = false;
  }

}
