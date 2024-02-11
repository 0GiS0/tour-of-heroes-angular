export const environment = {
  production: true,
  apiUrl: window['env']['ApiUrl'] || 'https://tour-of-heroes-api.azurewebsites.net/api/hero',
  containerName: "alteregos",
  storageUrl: "https://heroespics.blob.core.windows.net"
};
