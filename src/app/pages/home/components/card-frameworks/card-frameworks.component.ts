import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-frameworks',
  standalone: true,
  imports: [],
  templateUrl: './card-frameworks.component.html',
  styleUrl: './card-frameworks.component.css'
})
export class CardFrameworksComponent {
  @Input() framework = {
    title: '',
    description: '',
    img: ''
  }
}
