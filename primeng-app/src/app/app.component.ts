import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  cars;
  constructor(private _service: AppService) {
  }

  ngOnInit() {
    this._service.getData().subscribe((res) => {
      console.log(res);
      this.cars = res.data;
      console.log(this.cars)
    });
  }
}
