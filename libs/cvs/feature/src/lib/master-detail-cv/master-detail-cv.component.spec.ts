import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDetailCvComponent } from './master-detail-cv.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('MasterDetailCvComponent', () => {
  let component: MasterDetailCvComponent;
  let fixture: ComponentFixture<MasterDetailCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MasterDetailCvComponent],
    providers: [provideHttpClient(), provideRouter([])]
})
    .compileComponents();

    fixture = TestBed.createComponent(MasterDetailCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
