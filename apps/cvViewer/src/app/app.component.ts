import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from '@ng-nx-cv-tech-forma/cvs-ui';
import { Cv, CvService } from '@ng-nx-cv-tech-forma/cvs-domain';

@Component({
  standalone: true,
  imports: [ListComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cvService = inject(CvService);
  cvs: Cv[] = this.cvService.getFakeCvs();
  title = 'cvViewer';
}
