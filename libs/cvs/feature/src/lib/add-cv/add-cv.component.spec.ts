import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCvComponent } from './add-cv.component';
import { provideHttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
const MockToastConfig = {
  success(message?: string) {
    console.log({message});
  },
  /** show error toast */
  error(message?: string) {
    console.log({message});
  },
};

describe('AddCvComponent', () => {
  let component: AddCvComponent;
  let fixture: ComponentFixture<AddCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCvComponent],
      providers: [
        provideHttpClient(),
        { provide: ToastrService, useValue: MockToastConfig },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AddCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
