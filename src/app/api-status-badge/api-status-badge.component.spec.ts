import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { ApiStatusBadgeComponent } from './api-status-badge.component';

describe('ApiStatusBadgeComponent', () => {
  let component: ApiStatusBadgeComponent;
  let fixture: ComponentFixture<ApiStatusBadgeComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiStatusBadgeComponent],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiStatusBadgeComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    fixture.detectChanges();
    // Handle the health check request
    const req = httpMock.expectOne((request) => request.url.includes('/health'));
    req.flush({ version: '1.0.0' });

    expect(component).toBeTruthy();
  });

  it('should display API URL', () => {
    fixture.detectChanges();
    const req = httpMock.expectOne((request) => request.url.includes('/health'));
    req.flush({ version: '1.0.0' });

    expect(component.apiUrl).toBeTruthy();
  });

  it('should show healthy status when API responds', () => {
    fixture.detectChanges();
    const req = httpMock.expectOne((request) => request.url.includes('/health'));
    req.flush({ version: '1.2.3', status: 'healthy' });

    expect(component.isApiHealthy).toBe(true);
    expect(component.apiVersion).toBe('1.2.3');
  });

  it('should show unhealthy status when API fails', () => {
    fixture.detectChanges();
    const req = httpMock.expectOne((request) => request.url.includes('/health'));
    req.error(new ProgressEvent('error'));

    expect(component.isApiHealthy).toBe(false);
  });

  it('should toggle expanded state', () => {
    fixture.detectChanges();
    const req = httpMock.expectOne((request) => request.url.includes('/health'));
    req.flush({ version: '1.0.0' });

    expect(component.isExpanded).toBe(false);
    component.toggleExpanded();
    expect(component.isExpanded).toBe(true);
    component.toggleExpanded();
    expect(component.isExpanded).toBe(false);
  });

  it('should return correct status icon', () => {
    fixture.detectChanges();
    const req = httpMock.expectOne((request) => request.url.includes('/health'));

    // Before response (checking state)
    expect(component.getStatusIcon()).toBe('🔄');

    req.flush({ version: '1.0.0' });
    expect(component.getStatusIcon()).toBe('🟢');
  });

  it('should return correct status text', () => {
    fixture.detectChanges();
    const req = httpMock.expectOne((request) => request.url.includes('/health'));

    expect(component.getStatusText()).toBe('Checking...');

    req.flush({ version: '1.0.0' });
    expect(component.getStatusText()).toBe('Connected');
  });

  it('should extract display URL correctly', () => {
    component.apiUrl = 'http://localhost:5010/api/hero';
    expect(component.getDisplayUrl()).toBe('localhost:5010');
  });

  it('should refresh health check on button click', () => {
    fixture.detectChanges();
    const req1 = httpMock.expectOne((request) => request.url.includes('/health'));
    req1.flush({ version: '1.0.0' });

    component.checkApiHealth();

    const req2 = httpMock.expectOne((request) => request.url.includes('/health'));
    req2.flush({ version: '1.0.1' });

    expect(component.apiVersion).toBe('1.0.1');
  });
});
