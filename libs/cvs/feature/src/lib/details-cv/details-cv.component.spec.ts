import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCvComponent } from './details-cv.component';
import { ActivatedRoute, Params, provideRouter, RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
  // const fakeActivatedRoute = {
  //   snapshot: {data: {}},
  //   params: Observable<any>
  // } as ActivatedRoute;

describe('DetailsCvComponent', () => {
  let component: DetailsCvComponent;
  let fixture: ComponentFixture<DetailsCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsCvComponent, RouterModule, RouterTestingModule],
      providers: [
        // { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        provideRouter([]),
        provideHttpClient(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
