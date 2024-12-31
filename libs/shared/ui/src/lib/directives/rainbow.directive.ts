import { Directive, HostBinding, HostListener } from '@angular/core';
import { getRandomColor } from '@ng-nx-cv-tech-forma/shared-utils';

@Directive({
  selector: 'input[libRainbow]',
})
export class RainbowDirective {
  @HostBinding('style.color') color = 'red';
  @HostBinding('style.borderColor') bc = 'red';
  @HostListener('keyup') onKeyUp() {
    this.bc = this.color = getRandomColor();
  }

}
