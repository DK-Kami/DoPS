export function data(error, data) {
  return { error, data };
}

export default function(services, WebClient) {
  Object.keys(services).map(key => {
    const service = services[key];
    service.apiClient = WebClient;
    service.data = data;
    return service;
  });
  return services;
}