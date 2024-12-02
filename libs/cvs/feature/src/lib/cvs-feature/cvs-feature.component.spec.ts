import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvsFeatureComponent } from './cvs-feature.component';

describe('CvsFeatureComponent', () => {
  let component: CvsFeatureComponent;
  let fixture: ComponentFixture<CvsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvsFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
