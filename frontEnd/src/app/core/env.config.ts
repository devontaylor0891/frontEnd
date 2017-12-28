// file added in step 2 of Real World Angular Series
// this is to ensure that our dev env doesn't break our prod env and vice versa

const _isDev = window.location.port.indexOf('4200') > -1;
const getHost = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  return `${protocol}//${host}`;
};
// const apiURI = _isDev ? 'http://localhost:8083/api/' : `/api/`; // modify the first option to return http://localhost:3000/searchResults
const apiURI = _isDev ? 'http://localhost:3000/' : `/api/`;

export const ENV = {
  BASE_URI: getHost(),
  BASE_API: apiURI
};