import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {path : '', component: NxWelcomeComponent},
  { path: 'cv', loadChildren: () => import ('@ng-nx-cv-tech-forma/cvs-feature').then (
    m => m.cvRoutes
  )}
];
