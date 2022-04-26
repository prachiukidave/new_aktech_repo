import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor(private http:HttpClient) { }
    onSendService(fromData:FormData):Observable<any>{
       //console.log(this.http.post<any>('http://localhost/PKSites/ak_serverside/ak_serverside/forms/mailQuery.php',fromData));
       //return this.http.post<any>('http://localhost/PKSites/ak_serverside/ak_serverside/ak_serverside/forms/mailQuery.php',fromData)
   
       return this.http.post<any>('http://akts.in/ak_serverside/forms/mailQuery.php',fromData)   
  
  }
  
  }
