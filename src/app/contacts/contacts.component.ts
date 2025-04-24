import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMap, faUser, faEnvelope, faAddressBook } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-contacts',
  imports: [FontAwesomeModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  faMap = faMap;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faAddressBook = faAddressBook;
}
