import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SahredTypesComponent } from './sahred-types.component';

describe('SahredTypesComponent', () => {
  let component: SahredTypesComponent;
  let fixture: ComponentFixture<SahredTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SahredTypesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SahredTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
