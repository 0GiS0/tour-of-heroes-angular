export const environment = {
  production: true,
  // apiUrl: 'http://localhost:30040/api/hero'
  apiUrl: window['env']['ApiUrl'] || 'https://tour-of-heroes-api.azurewebsites.net/api/hero',
};
