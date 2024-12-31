import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvComponent } from './cv.component';
import { provideHttpClient } from '@angular/common/http';

describe('CvComponent', () => {
  let component: CvComponent;
  let fixture: ComponentFixture<CvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvComponent],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
