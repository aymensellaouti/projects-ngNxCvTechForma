import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvsUiComponent } from './cvs-ui.component';

describe('CvsUiComponent', () => {
  let component: CvsUiComponent;
  let fixture: ComponentFixture<CvsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvsUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
