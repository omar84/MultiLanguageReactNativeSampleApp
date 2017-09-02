import I18n from 'react-native-i18n';

import en from './en';
import ar from './ar';

I18n.fallbacks = true;

I18n.translations = {
  en: en,
  ar: ar
};

export default I18n; 