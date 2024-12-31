
import { AddCvComponent } from './lib/add-cv/add-cv.component';
import { CvComponent } from './lib/cv/cv.component';
import { Routes } from '@angular/router';
import { DetailsCvComponent } from './lib/details-cv/details-cv.component';
import { MasterDetailCvComponent } from './lib/master-detail-cv/master-detail-cv.component';

// export * from './lib/cv/cv.component';

export const cvRoutes: Routes = [
  {path: '', component: CvComponent},
  {path: ':id', component: DetailsCvComponent},
  {
    path: 'list',
    component: MasterDetailCvComponent,
    children: [
      {path: ':id', component: DetailsCvComponent}
    ]
  },
  {path: 'add', component: AddCvComponent},
]

export * from './lib/add-cv/add-cv.component';
export * from './lib/cv/cv.component';
export * from './lib/details-cv/details-cv.component';
export * from './lib/master-detail-cv/master-detail-cv.component';
