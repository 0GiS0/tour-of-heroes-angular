import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject, timer } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

interface ApiInfoResponse {
  name?: string;
  version?: string;
  status?: string;
  environment?: string;
  timestamp?: string;
  databaseProvider?: string;
  endpoints?: { [key: string]: string };
}

@Component({
  selector: 'app-api-status-badge',
  templateUrl: './api-status-badge.component.html',
  styleUrls: ['./api-status-badge.component.css'],
  standalone: false,
})
export class ApiStatusBadgeComponent implements OnInit, OnDestroy {
  apiUrl: string = '';
  apiBaseUrl: string = '';
  apiName: string = '';
  apiVersion: string = '';
  apiEnvironment: string = '';
  apiStatus: string = '';
  isApiHealthy: boolean | null = null; // null = checking, true = healthy, false = unhealthy
  isExpanded: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.apiUrl = this.getApiUrl();
    this.apiBaseUrl = this.getBaseUrl();
    this.checkApiHealth();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getApiUrl(): string {
    // Get the base URL from environment (remove /hero suffix if present)
    const fullUrl = environment.apiUrl;
    return fullUrl;
  }

  private getBaseUrl(): string {
    // Get the root URL from the API URL
    // If URL is like http://localhost:5010/api/hero, we want http://localhost:5010/
    try {
      const url = new URL(this.apiUrl);
      return `${url.protocol}//${url.host}/`;
    } catch {
      // Fallback: remove /api/hero suffix
      return this.apiUrl.replace(/\/api\/hero\/?$/, '/');
    }
  }

  checkApiHealth(): void {
    this.isApiHealthy = null; // Set to checking state
    this.apiName = '';
    this.apiVersion = '';
    this.apiEnvironment = '';
    this.apiStatus = '';

    this.http
      .get<ApiInfoResponse>(this.apiBaseUrl)
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          console.warn('API info check failed:', error);
          return of(null);
        })
      )
      .subscribe((response) => {
        if (response) {
          this.isApiHealthy = response.status === 'healthy';
          this.apiName = response.name || 'API';
          this.apiVersion = response.version || 'N/A';
          this.apiEnvironment = response.environment || 'N/A';
          this.apiStatus = response.status || 'unknown';
        } else {
          this.isApiHealthy = false;
          this.apiName = 'API';
          this.apiVersion = 'N/A';
          this.apiEnvironment = 'N/A';
          this.apiStatus = 'unreachable';
        }
      });
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  getStatusIcon(): string {
    if (this.isApiHealthy === null) return '🔄';
    return this.isApiHealthy ? '🟢' : '🔴';
  }

  getStatusText(): string {
    if (this.isApiHealthy === null) return 'Checking...';
    return this.isApiHealthy ? 'Connected' : 'Disconnected';
  }

  getDisplayUrl(): string {
    // Extract host and port for compact display
    try {
      const url = new URL(this.apiUrl);
      return `${url.hostname}${url.port ? ':' + url.port : ''}`;
    } catch {
      return this.apiUrl;
    }
  }
}
