import config from '../config';
import { Dimensions } from 'react-native';

let baseLocale = "en";

exports.renderDigits = function(string, locale = baseLocale) {
  if ((locale == baseLocale) || (!(config.LOCALIZE_NUMBERS))) { return string; }
  let id = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
  return string.replace(/[0-9]/g, function(w) {
    return id[+w]
  });
}

exports.getElementDimentions = function(frameMargin = 10, pixlesPerItem = 240, boxRatio = 0.9, boxesPerRow) {
  let windowWidth = Dimensions.get('window').width - frameMargin;
  boxesPerRow = boxesPerRow || Math.ceil(windowWidth/pixlesPerItem);
  let boxWidth = windowWidth * (1/boxesPerRow);
  let boxMargin = boxWidth * (0.008 * boxesPerRow);
  boxWidth = boxWidth - (2*boxMargin);
  let boxHeight = boxWidth * boxRatio;
  return {
    boxWidth: boxWidth,
    boxHeight: boxHeight,
    boxMargin: boxMargin
  };
}