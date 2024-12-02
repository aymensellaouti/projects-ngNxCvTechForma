import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cv } from '@ng-nx-cv-tech-forma/cvs-domain';
import { DefaultImagePipe } from '@ng-nx-cv-tech-forma/shared-ui';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() cv: Cv | null = null;
}
