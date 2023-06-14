import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  //rotas tabela clients
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

  //rotas tabela cidade
  getCity(){
    return this.httpClient.get('http://localhost:8000/api/city');
  }
  insertCity(data: any){
    return this.httpClient.post('http://localhost:8000/api/addCity', data);
  }
  getCityById(id: any){
    return this.httpClient.get('http://localhost:8000/api/city/'+ id);
  }
  updateCity(id:any, data: any){
    return this.httpClient.put('http://localhost:8000/api/updateCity/'+id, data);
  }
  deleteCity(data: any){
    return this.httpClient.delete('http://localhost:8000/api/deleteCity/'+ data)
  }

  //homepage dados
  bigCity(){
    return this.httpClient.get('http://localhost:8000/api/bigCity')
  }
  biggestCrown(){
    return this.httpClient.get('http://localhost:8000/api/biggestCrown')
  }
}