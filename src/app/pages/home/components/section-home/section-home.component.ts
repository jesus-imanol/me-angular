import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollAnimationDirective } from '../../../../scroll-animation.directive';
import { CardFrameworksComponent } from '../card-frameworks/card-frameworks.component';
@Component({
  selector: 'app-section-home',
  standalone: true,
  imports: [ScrollAnimationDirective,CommonModule,CardFrameworksComponent],
  templateUrl: './section-home.component.html',
  styleUrl: './section-home.component.css'
})
export class SectionHomeComponent {
  constructor(private router: Router) {}

  listFrameworks = [
    {img: 'assets/angular.svg', title: 'Angular', description: 'Experiencia con Angular: landing pages dinámicas y gestión de datos.'},
    {img: 'assets/react.svg', title: 'React', description: 'Experiencia con React: desarrollo de aplicaciones web interactivas y componentes reutilizables.'},
  ]
}
