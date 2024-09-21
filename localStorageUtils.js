// localStorageUtils.js
export const getToken = () => {
    return localStorage.getItem('userToken');
  };
  
  export const getLangCode = () => {
    return localStorage.getItem('i18nextLng');
  };
  
  
  export const getHeader = () => {
    const langCode = getLangCode();
    const token = getToken();
    return {
      Authorization: 'Bearer ' + token,
      'Accept-Language': langCode,
    };
  };