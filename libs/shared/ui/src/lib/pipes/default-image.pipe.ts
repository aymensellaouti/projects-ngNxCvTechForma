import { Pipe, PipeTransform } from '@angular/core';
import { CONSTANTES } from '@ng-nx-cv-tech-forma/shared-config';

@Pipe({
    name: 'defaultImage',
    standalone: true,
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    if (!path.trim()) return CONSTANTES.defaultImage;
    return path;
  }
}
