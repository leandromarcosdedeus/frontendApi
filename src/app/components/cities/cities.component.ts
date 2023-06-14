import { Component } from '@angular/core';
import { Cities } from 'src/app/cities';
import { Client } from 'src/app/client';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  cities: any;
  city = new Cities();

  constructor(private dataService: DataService){}
  ngOnInit(){
    this.getCitiesData();
  }
  getCitiesData(){
    this.dataService.getCity().subscribe(res =>{
      this.cities = res;
    });
  }
  insertCity(){
    this.dataService.insertCity(this.city).subscribe(res=>{
      this.getCitiesData();
    })
  };
  deleteData(id: any){
    this.dataService.deleteCity(id).subscribe(res=>{
      this.getCitiesData();
    })
  }
}

