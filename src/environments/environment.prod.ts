export const environment = {
  production: true,
  // apiUrl: 'http://localhost:30040/api/hero'
  apiUrl: (window as any)['env']?.['ApiUrl'] || 'http://localhost:5010/api/hero',
};
