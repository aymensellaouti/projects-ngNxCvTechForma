import { NgIf, AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet, Router, ActivatedRoute } from "@angular/router";
import { Cv, CvService } from "@ng-nx-cv-tech-forma/cvs-domain";
import { ListComponent } from "@ng-nx-cv-tech-forma/cvs-ui";
import { Observable } from "rxjs";

@Component({
    selector: 'lib-master-detail-cv',
    templateUrl: './master-detail-cv.component.html',
    styleUrls: ['./master-detail-cv.component.css'],
    standalone: true,
    imports: [
        NgIf,
        ListComponent,
        RouterOutlet,
        AsyncPipe,
    ],
})
export class MasterDetailCvComponent {
  cvService =  inject(CvService);
  router =  inject(Router);
  activatedRoute =  inject(ActivatedRoute);
  cvs$: Observable<Cv[]> = this.cvService.getCvs();
  constructor() {
    this.cvService.selectCv$
    .pipe(takeUntilDestroyed())
    .subscribe(
      cv => this.router.navigate([cv.id], {
        relativeTo: this.activatedRoute
      })
    );
  }
}
