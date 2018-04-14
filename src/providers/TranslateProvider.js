import fr from './../i18n/fr.js'

const translate = (key, obj = fr, lg = null) => {  
  let tmpObj = null;
  let tmpPath = key.split('.');
  
  for (const _key of tmpPath) {
    if (tmpObj === null) {
      if (typeof obj[_key] === 'undefined') {
        break;
      } else {
        tmpObj = obj[_key];
      }
    } else {
      if (typeof tmpObj[_key] === 'undefined') {
        tmpObj = null;
        break;
      } else {
        tmpObj = tmpObj[_key];
      }
    }
  }

  if (tmpObj === null) {
    return key;
  } else {
    return tmpObj;
  }
}

export default translate
