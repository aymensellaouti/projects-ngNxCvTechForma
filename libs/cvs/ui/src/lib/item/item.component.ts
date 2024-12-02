import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cv } from '@ng-nx-cv-tech-forma/cvs-domain';
import { DefaultImagePipe } from '@ng-nx-cv-tech-forma/shared-ui';

@Component({
  selector: 'lib-item',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() cv: Cv | null = null;
  @Input() size = 50;
  @Output() selectCv = new EventEmitter<Cv>();

  onSelectCv() {
    if (this.cv) this.selectCv.emit(this.cv);
  }
}
