'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _fi = require('react-intl/locale-data/fi');

var _fi2 = _interopRequireDefault(_fi);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _reactIntl.addLocaleData)(_fi2.default);

var messages = {
  "Terra.actionHeader.back": "Takaisin",
  "Terra.actionHeader.close": "Kiinni",
  "Terra.actionHeader.maximize": "Maksimoida",
  "Terra.actionHeader.minimize": "Minimoida",
  "Terra.actionHeader.next": "Seuraava",
  "Terra.actionHeader.previous": "Edellinen",
  "Terra.ajax.error": "This content failed to load.n9KZ Pi~",
  "Terra.application.tabs.more": "More",
  "Terra.application.utility.back": "Back",
  "Terra.application.utility.button": "Utility Button",
  "Terra.application.utility.close": "Close",
  "Terra.application.utility.menu": "Utility Menu",
  "Terra.ApplicationHeaderLayout.SkipToContent": "skiiippp~~~",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Toggle Menu",
  "Terra.applicationLayout.utilityDefaults.about": "About",
  "Terra.applicationLayout.utilityDefaults.appearance": "Appearance",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Change Photo",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Getting Started",
  "Terra.applicationLayout.utilityDefaults.help": "Help",
  "Terra.applicationLayout.utilityDefaults.logOut": "Log Out",
  "Terra.applicationLayout.utilityDefaults.menu": "Menu",
  "Terra.applicationLayout.utilityDefaults.security": "Security",
  "Terra.applicationLayout.utilityDefaults.settings": "Settings",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Terms of Use",
  "Terra.applicationLayout.utilityDefaults.userInformation": "User Information",
  "Terra.collapsibleMenuView.more": "More",
  "Terra.data-grid.row-selection-template": "Valitse: {row-description}",
  "Terra.datePicker.dateFormat": "MM/��/����~",
  "Terra.datePicker.openCalendar": "Open Calendar ~",
  "Terra.datePicker.today": "Today ~",
  "Terra.form.field.optional": "(optional)2384932**",
  "Terra.menu.back": "Takaisin",
  "Terra.menu.close": "Kiinni",
  "Terra.onsetPicker.agePrecisionMonth": "~ Month(s) -",
  "Terra.onsetPicker.agePrecisionWeek": "~ Week(s) -",
  "Terra.onsetPicker.agePrecisionYear": "~ Year(s) -",
  "Terra.onsetPicker.april": "~ April -",
  "Terra.onsetPicker.august": "~ August -",
  "Terra.onsetPicker.december": "~ December -",
  "Terra.onsetPicker.february": "~ February -",
  "Terra.onsetPicker.granularityAge": "~ Age -",
  "Terra.onsetPicker.granularityDate": "~ Date -",
  "Terra.onsetPicker.granularityMonth": "~ Month -",
  "Terra.onsetPicker.granularityYear": "~ Year -",
  "Terra.onsetPicker.january": "~ January -",
  "Terra.onsetPicker.july": "~ July -",
  "Terra.onsetPicker.june": "~ June -",
  "Terra.onsetPicker.march": "~ March -",
  "Terra.onsetPicker.may": "~ May -",
  "Terra.onsetPicker.november": "~ November -",
  "Terra.onsetPicker.october": "~ October -",
  "Terra.onsetPicker.precisionAbout": "~ About -",
  "Terra.onsetPicker.precisionAfter": "~ After -",
  "Terra.onsetPicker.precisionBefore": "~ Before -",
  "Terra.onsetPicker.precisionOnAt": "~ On/At -",
  "Terra.onsetPicker.precisionUnknown": "~ Unknown -",
  "Terra.onsetPicker.september": "~ September -",
  "Terra.Overlay.loading": "Lataamalla..."
};
var areTranslationsLoaded = true;
var locale = 'fi-FI';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;