import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Phone'},

  ]

  contactMethods1 = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Phone'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

  log(x:any){
    console.log(x);
  }

  logContact(l:any){
    console.log(l);
  }
  

  submit(f:any){
    console.log(f);
  }
}
