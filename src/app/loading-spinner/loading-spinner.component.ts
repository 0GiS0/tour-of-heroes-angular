import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: false,
  template: `
    <div class="spinner-container" *ngIf="loading">
      <div class="spinner"></div>
      <p class="loading-text">{{ message }}</p>
    </div>
  `,
  styles: [
    `
      .spinner-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
      }

      .spinner {
        border: 4px solid var(--border-color, #e0e0e0);
        border-top: 4px solid var(--primary-color, #1976d2);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .loading-text {
        margin-top: 1rem;
        color: var(--text-secondary, #666);
        font-size: 0.9rem;
      }
    `,
  ],
})
export class LoadingSpinnerComponent {
  @Input() loading = false;
  @Input() message = '⏳ Cargando...';
}
