import { Component } from '@angular/core';
import { Client } from 'src/app/client';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clients: any;
  client = new Client();

  constructor(private dataService: DataService){}
  ngOnInit(){
    this.getClientsData();
  }
  getClientsData(){
    this.dataService.getData().subscribe(res =>{
      this.clients = res;
    });
  }
  insertData(){
    this.dataService.insertData(this.client).subscribe(res=>{
      this.getClientsData();
    })
  };
  deleteData(id: any){
    this.dataService.deleteData(id).subscribe(res=>{
      this.getClientsData();
    })
  }
}

