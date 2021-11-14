import { Component, OnInit } from '@angular/core';
import { RestoApiService } from '../resto-api.service';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  collection: any = [];
  item: any = [];

  constructor(private resto: RestoApiService) { }

  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;

    })
  }
  delResto(item: number) {
    console.warn(this.collection);
    this.collection.splice(item - 1, 1)
    this.resto.deleteResto(item).subscribe((result) => {
      console.warn(result);

    })


  }
}
