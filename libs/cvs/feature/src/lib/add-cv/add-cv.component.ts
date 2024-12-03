import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService, Cv } from '@ng-nx-cv-tech-forma/cvs-domain';
import { APP_ROUTES } from '@ng-nx-cv-tech-forma/shared-config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'lib-add-cv',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-cv.component.html',
  styleUrl: './add-cv.component.css',
})
export class AddCvComponent {
  private cvService = inject(CvService);
  private router = inject(Router);
  private toaster = inject(ToastrService);

  addCv(cv: Cv) {
    this.cvService.addCv(cv).subscribe({
      next: () => {
        this.toaster.success(`Le cv a été ajouté avec succès`);
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (erreur) => {
        console.log(erreur);
        this.toaster.error(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      },
    });
  }
}
