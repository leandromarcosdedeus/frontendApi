import { Component } from '@angular/core';
import { Cities } from 'src/app/cities';
import { Client } from 'src/app/client';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cities: any[] = [];
  clients: any;
  client = new Client();
  city = new Cities();

  constructor(private dataService: DataService){}
  ngOnInit(){
    this.bigCity();
    this.biggestCrown();
  }
  bigCity(){
    this.dataService.bigCity().subscribe(res =>{
      this.cities = Object.values(res);
    });
  }
  biggestCrown(){
    this.dataService.biggestCrown().subscribe(res =>{
      this.clients = res;
    });
  }
}

