import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingSpinnerComponent } from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingSpinnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show spinner when loading is true', () => {
    component.loading = true;
    fixture.detectChanges();
    const spinner = fixture.nativeElement.querySelector('.spinner-container');
    expect(spinner).toBeTruthy();
  });

  it('should hide spinner when loading is false', () => {
    component.loading = false;
    fixture.detectChanges();
    const spinner = fixture.nativeElement.querySelector('.spinner-container');
    expect(spinner).toBeFalsy();
  });

  it('should display custom message', () => {
    component.loading = true;
    component.message = 'Custom loading message';
    fixture.detectChanges();
    const text = fixture.nativeElement.querySelector('.loading-text');
    expect(text.textContent).toContain('Custom loading message');
  });
});
