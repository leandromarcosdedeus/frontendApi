import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/client';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  id: any;
  data: any;
  client= new Client();

  constructor(private route: ActivatedRoute, private dataService: DataService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData(): void {
    this.dataService.getClientById(this.id).subscribe(res => {
      this.data = res;
      this.client = this.data;
    });
  }
  updateClient(){
    this.dataService.updateData(this.id, this.client).subscribe(res=>{
      console.log(this.data)
    })
  }
}
