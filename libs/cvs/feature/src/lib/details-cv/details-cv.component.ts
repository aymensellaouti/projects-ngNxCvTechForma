import { NgIf, AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Cv, CvService } from "@ng-nx-cv-tech-forma/cvs-domain";
import { APP_ROUTES } from "@ng-nx-cv-tech-forma/shared-config";
import { DefaultImagePipe } from "@ng-nx-cv-tech-forma/shared-ui";
import { switchMap, catchError, EMPTY } from "rxjs";


@Component({
    selector: 'lib-details-cv',
    templateUrl: './details-cv.component.html',
    styleUrls: ['./details-cv.component.css'],
    standalone: true,
    imports: [
        NgIf,
        AsyncPipe,
        DefaultImagePipe,
    ],
})
export class DetailsCvComponent {
  cv: Cv | null = null;
  acr = inject(ActivatedRoute);
  cvService = inject(CvService);
  router = inject(Router);
  cv$ = this.acr.params.pipe(
      switchMap((params) => this.cvService.getCvById(params['id'])),
      catchError((e) => {
        this.router.navigate([APP_ROUTES.cv]);
        return EMPTY;
      })
    );
  deleteCv(cv: Cv) {
    this.cvService.deleteCvById(cv.id).subscribe({
      next: () => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
