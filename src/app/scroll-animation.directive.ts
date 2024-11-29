import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Configuración inicial del elemento
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(20px)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 1s ease-in-out');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const elementPosition = this.el.nativeElement.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (elementPosition < viewportHeight * 0.8) {
      // Aplica animación cuando el elemento está visible
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
    }
  }
}
