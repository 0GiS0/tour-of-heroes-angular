export const environment = {
  production: true,
  // apiUrl: 'http://localhost:30040/api/hero'
  apiUrl: window['env']['backendBaseUrl'] || 'http://localhost:5010/api/hero'
};
