import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CvsComponent } from '@ng-nx-cv-tech-forma/cvs';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CvsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngNxCvTechForma';
}
