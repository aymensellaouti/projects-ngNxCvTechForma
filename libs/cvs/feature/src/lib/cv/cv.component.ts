import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent, CardComponent } from '@ng-nx-cv-tech-forma/cvs-ui';
import { Cv, CvService } from '@ng-nx-cv-tech-forma/cvs-domain';
import { catchError, Observable, of } from 'rxjs';
@Component({
  selector: 'lib-cv',
  standalone: true,
  imports: [CommonModule, ListComponent, CardComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  cvService = inject(CvService);
  cvs$: Observable<Cv[]> = this.cvService.getCvs()
    .pipe(
      catchError((e) => {
        console.log({e});
        return of(this.cvService.getFakeCvs());
      })
    );
  selectedCv: Cv | null = null;
  /*   selectedCv: Cv | null = null; */
  date = new Date();
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
