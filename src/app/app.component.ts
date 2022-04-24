import { Component } from '@angular/core';
import { NameService } from './name.service';
import { ContactFormComponent} from './MyComponents/contact-form/contact-form.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aktechnew';
  constructor(private nameService:NameService){
    
  }
  onSend(name:string,mobile_number:string,email:string,subject:string){
    const formData:FormData = new FormData()
    formData.append("name",name)
    formData.append("mobile_number",mobile_number)
    formData.append("email",email)
    formData.append("subject",subject)
    this.nameService.onSendService(formData).subscribe(
      res=>{console.log('res');},
      err=>{
        console.log(err);
      }
    )
  }
}

