import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {EmailService} from 'src/app/service/email.service';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  data={
    to:"",
    subject:"",
    message:""
  }
  loaded:boolean=false;
  doSubmitForm(){
   
    console.log("try to submit");
    console.log("dataaa",this.data);
    if(this.data.to==""||this.data.subject==""||this.data.message=="")
      {
        this.snak.open("fields should not be empty","ok");
        return;
      }
      this.loaded=true;
    this.email.sendEmail(this.data).subscribe(
      
      response=>{console.log("response from backened resMsg",response);
    this.loaded=false;
    this.snak.open("SEND SUCCESSFULLY..!!","OK")  
    },
      error=>{console.log(error);
        this.loaded=false;
        this.snak.open("ERROR..!!","OK")  
      }
    );
  }
  constructor(private email:EmailService,private snak:MatSnackBar) { }

  ngOnInit(): void {
  }

}
