import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from 'src/app/models/contact';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService , private router: Router) { }

  ngOnInit(): void {
    this.getContact();
  }

  addContact(form: NgForm){
    if(form.value._id){
      this.contactService.putContact(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'empleado actualizado'});
        this.getContact();
      })
    }else{
      this.contactService.postContact(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'empleado guardado satisfactoriamente'});
        this.getContact();
      });
    }
  }


  getContact(){
    this.contactService.getContacts()
    .subscribe(res => {
      this.contactService.contacts = res as Contact[];
      console.log(res);
    })
  }

  editContact(contact: Contact) {
    this.contactService.selectedContact = contact;
  }

  deleteContact(_id: string){
    if(confirm('Estas seguro que quieres eliminarlo')){
      this.contactService.deleteContact(_id)
      .subscribe(res => {
        this.getContact();
      });
    }
  }


  resetForm(form?: NgForm) {
    if(form){
      form.reset();
      this.contactService.selectedContact = new Contact();
    }

  }

  logueo(){
    this.router.navigate(['/login']);
  }
}
