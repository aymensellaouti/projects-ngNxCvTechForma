import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cv } from '@ng-nx-cv-tech-forma/cvs-domain';
import { ItemComponent } from "../item/item.component";

@Component({
  selector: 'lib-list',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() cvs: Cv[] | null = [];
  @Output() forwardCv = new EventEmitter<Cv>();
}
