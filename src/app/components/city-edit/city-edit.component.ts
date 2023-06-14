import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cities } from 'src/app/cities';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent {
  id: any;
  data: any;
  city= new Cities();

  constructor(private route: ActivatedRoute, private dataService: DataService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCity();
  }

  getCity(): void {
    this.dataService.getCityById(this.id).subscribe(res => {
      this.data = res;
      this.city = this.data;
    });
  }
  updateCity(){
    this.dataService.updateCity(this.id, this.city).subscribe(res=>{
      console.log(this.data)
    })
  }
}