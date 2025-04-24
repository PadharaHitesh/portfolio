import { Component, ChangeDetectorRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faTools, faCode, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuItems = [
    { id: 'started-section', icon: faHome },
    { id: 'services-section', icon: faTools },
    { id: 'skills-section', icon: faCode },
    { id: 'works-section', icon: faBriefcase },
    { id: 'contact-section', icon: faEnvelope }
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  faHome = faHome;
  faTools = faTools;
  faCode = faCode;
  faBriefcase = faBriefcase;
  faEnvelope = faEnvelope;
  
  activeSection: string = 'started-section';
  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    this.cdr.detectChanges();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

}
