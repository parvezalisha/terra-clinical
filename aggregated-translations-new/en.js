'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_en2.default);

var messages = {
  "Terra.actionHeader.back": "Back",
  "Terra.actionHeader.close": "Close",
  "Terra.actionHeader.maximize": "Maximize",
  "Terra.actionHeader.minimize": "Minimize",
  "Terra.actionHeader.next": "Next",
  "Terra.actionHeader.previous": "Previous",
  "Terra.ajax.error": "This content failed to load.",
  "Terra.application.tabs.more": "More",
  "Terra.application.utility.back": "Back",
  "Terra.application.utility.button": "Utility Button",
  "Terra.application.utility.close": "Close",
  "Terra.application.utility.menu": "Utility Menu",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Skip to Content",
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
  "Terra.data-grid.row-selection-template": "Select: {row-description}",
  "Terra.datePicker.dateFormat": "MM/DD/YYYY",
  "Terra.datePicker.openCalendar": "Open Calendar",
  "Terra.datePicker.today": "Today",
  "Terra.form.field.optional": "(optional)",
  "Terra.menu.back": "Back",
  "Terra.menu.close": "Close",
  "Terra.onsetPicker.agePrecisionMonth": "Month(s)",
  "Terra.onsetPicker.agePrecisionWeek": "Week(s)",
  "Terra.onsetPicker.agePrecisionYear": "Year(s)",
  "Terra.onsetPicker.april": "April",
  "Terra.onsetPicker.august": "August",
  "Terra.onsetPicker.december": "December",
  "Terra.onsetPicker.february": "February",
  "Terra.onsetPicker.granularityAge": "Age",
  "Terra.onsetPicker.granularityDate": "Date",
  "Terra.onsetPicker.granularityMonth": "Month",
  "Terra.onsetPicker.granularityYear": "Year",
  "Terra.onsetPicker.january": "January",
  "Terra.onsetPicker.july": "July",
  "Terra.onsetPicker.june": "June",
  "Terra.onsetPicker.march": "March",
  "Terra.onsetPicker.may": "May",
  "Terra.onsetPicker.november": "November",
  "Terra.onsetPicker.october": "October",
  "Terra.onsetPicker.precisionAbout": "About",
  "Terra.onsetPicker.precisionAfter": "After",
  "Terra.onsetPicker.precisionBefore": "Before",
  "Terra.onsetPicker.precisionOnAt": "On/At",
  "Terra.onsetPicker.precisionUnknown": "Unknown",
  "Terra.onsetPicker.september": "September",
  "Terra.Overlay.loading": "Loading..."
};
var areTranslationsLoaded = true;
var locale = 'en';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
