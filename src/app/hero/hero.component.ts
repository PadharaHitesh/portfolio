import { Component } from '@angular/core';
import { faHome, faTools, faCode, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 menuItems = [
    { id: 'started-section', icon: faHome },
    { id: 'services-section', icon: faTools },
    { id: 'skills-section', icon: faCode },
    { id: 'works-section', icon: faBriefcase },
    { id: 'contact-section', icon: faEnvelope }
  ];

  scrollToSection(sectionId: string) {
    console.log(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
