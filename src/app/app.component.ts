import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ServiceComponent } from './service/service.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent,HeroComponent, ServiceComponent, SkillsComponent, PortfolioComponent, ContactsComponent,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true, 
})
export class AppComponent {

} 
