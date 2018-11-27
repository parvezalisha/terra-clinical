'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _sv = require('react-intl/locale-data/sv');

var _sv2 = _interopRequireDefault(_sv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_sv2.default);

var messages = {
  "Terra.actionHeader.back": "Tillbaka",
  "Terra.actionHeader.close": "Stäng",
  "Terra.actionHeader.maximize": "Maximera",
  "Terra.actionHeader.minimize": "Minimera",
  "Terra.actionHeader.next": "Nästa",
  "Terra.actionHeader.previous": "Föregående",
  "Terra.ajax.error": "Innehållet lästes inte in.",
  "Terra.application.tabs.more": "Mer",
  "Terra.application.utility.back": "Tillbaka",
  "Terra.application.utility.button": "Knappen Hjälpmedel",
  "Terra.application.utility.close": "Stäng",
  "Terra.application.utility.menu": "Menyn Hjälpmedel",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Gå till Innehåll",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Växla meny",
  "Terra.applicationLayout.utilityDefaults.about": "Om",
  "Terra.applicationLayout.utilityDefaults.appearance": "Utseende",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Byt bild",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Kom igång",
  "Terra.applicationLayout.utilityDefaults.help": "Hjälp",
  "Terra.applicationLayout.utilityDefaults.logOut": "Logga ut",
  "Terra.applicationLayout.utilityDefaults.menu": "Meny",
  "Terra.applicationLayout.utilityDefaults.security": "Säkerhet",
  "Terra.applicationLayout.utilityDefaults.settings": "Inställningar",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Användningsvillkor",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Användaruppgifter",
  "Terra.collapsibleMenuView.more": "Mer",
  "Terra.data-grid.row-selection-template": "Välj: {row-description}",
  "Terra.datePicker.dateFormat": "DD/MM/ÅÅÅÅ",
  "Terra.datePicker.openCalendar": "Öppna kalender",
  "Terra.datePicker.today": "I dag",
  "Terra.form.field.optional": "(valfri)",
  "Terra.menu.back": "Tillbaka",
  "Terra.menu.close": "Stäng",
  "Terra.onsetPicker.agePrecisionMonth": "Månader",
  "Terra.onsetPicker.agePrecisionWeek": "Veckor",
  "Terra.onsetPicker.agePrecisionYear": "År",
  "Terra.onsetPicker.april": "april",
  "Terra.onsetPicker.august": "augusti",
  "Terra.onsetPicker.december": "december",
  "Terra.onsetPicker.february": "februari",
  "Terra.onsetPicker.granularityAge": "Ålder",
  "Terra.onsetPicker.granularityDate": "Datum",
  "Terra.onsetPicker.granularityMonth": "Månad",
  "Terra.onsetPicker.granularityYear": "År",
  "Terra.onsetPicker.january": "januari",
  "Terra.onsetPicker.july": "juli",
  "Terra.onsetPicker.june": "juni",
  "Terra.onsetPicker.march": "mars",
  "Terra.onsetPicker.may": "maj",
  "Terra.onsetPicker.november": "november",
  "Terra.onsetPicker.october": "oktober",
  "Terra.onsetPicker.precisionAbout": "Handla om",
  "Terra.onsetPicker.precisionAfter": "Efter",
  "Terra.onsetPicker.precisionBefore": "Innan",
  "Terra.onsetPicker.precisionOnAt": "På/På",
  "Terra.onsetPicker.precisionUnknown": "Okänd",
  "Terra.onsetPicker.september": "september",
  "Terra.Overlay.loading": "Läser in ..."
};
var areTranslationsLoaded = true;
var locale = 'sv-SE';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
