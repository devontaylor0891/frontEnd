module.exports = {
  AUTH0_DOMAIN: '[olf.auth0.com]', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: '[http://localhost:8083/api/]', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://[USER]:[PASSWORD]@[DS######].mlab.com:[PORT]/[DB_NAME]',
  NAMESPACE: 'http://myapp.com/roles'
};