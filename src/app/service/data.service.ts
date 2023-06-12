import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get('http://localhost:8000/api/clients');
  }
  insertData(data: any){
    return this.httpClient.post('http://localhost:8000/api/addClient', data);
  }
  deleteData(data: any){
    return this.httpClient.delete('http://localhost:8000/api/deleteClient/'+ data);
  }
  getClientById(id: any){
    return this.httpClient.get('http://localhost:8000/api/client/'+ id);
  }
  updateData(id:any, data: any){
    return this.httpClient.put('http://localhost:8000/api/updateClient/'+id, data);
  }
}
