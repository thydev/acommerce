interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '4AjEOCihn0J52UmgkvhMy6VH68eGydi2',
  domain: 'acommerce.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
