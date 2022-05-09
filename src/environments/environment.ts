import authConf from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain: authConf.domain,
    clientId: authConf.clientId,
    redirectUri: window.location.origin,
    audience : authConf.audience
  },
  dev: {
    apiUrl: authConf.apiUrl
  }
};

