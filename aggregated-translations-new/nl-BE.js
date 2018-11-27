'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _nl = require('react-intl/locale-data/nl');

var _nl2 = _interopRequireDefault(_nl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_nl2.default);

var messages = {
  "Terra.actionHeader.back": "Terug",
  "Terra.actionHeader.close": "Sluiten",
  "Terra.actionHeader.maximize": "Maximalisatie",
  "Terra.actionHeader.minimize": "Minimaliseren",
  "Terra.actionHeader.next": "Volgende",
  "Terra.actionHeader.previous": "Vorige",
  "Terra.ajax.error": "Deze inhoud kon niet worden geladen.",
  "Terra.application.tabs.more": "Meer",
  "Terra.application.utility.back": "Terug",
  "Terra.application.utility.button": "Hulpprogrammaknop",
  "Terra.application.utility.close": "Sluiten",
  "Terra.application.utility.menu": "Menu Hulpprogramma's",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Doorgaan naar content",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Menu",
  "Terra.applicationLayout.utilityDefaults.about": "Over",
  "Terra.applicationLayout.utilityDefaults.appearance": "Uiterlijk",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Foto wijzigen",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Aan de slag",
  "Terra.applicationLayout.utilityDefaults.help": "Help",
  "Terra.applicationLayout.utilityDefaults.logOut": "Afmelden",
  "Terra.applicationLayout.utilityDefaults.menu": "Menu",
  "Terra.applicationLayout.utilityDefaults.security": "Beveiliging",
  "Terra.applicationLayout.utilityDefaults.settings": "Instellingen",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Gebruiksvoorwaarden",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Gebruikersinformatie",
  "Terra.collapsibleMenuView.more": "Meer",
  "Terra.data-grid.row-selection-template": "Selecteer: {rij-omschrijving}",
  "Terra.datePicker.dateFormat": "DD/MM/JJJJ",
  "Terra.datePicker.openCalendar": "Agenda openen",
  "Terra.datePicker.today": "Vandaag",
  "Terra.form.field.optional": "(optioneel)",
  "Terra.menu.back": "Terug",
  "Terra.menu.close": "Sluiten",
  "Terra.onsetPicker.agePrecisionMonth": "Maanden",
  "Terra.onsetPicker.agePrecisionWeek": "Weken",
  "Terra.onsetPicker.agePrecisionYear": "jaren",
  "Terra.onsetPicker.april": "april",
  "Terra.onsetPicker.august": "augustus",
  "Terra.onsetPicker.december": "december",
  "Terra.onsetPicker.february": "februari",
  "Terra.onsetPicker.granularityAge": "Leeftijd",
  "Terra.onsetPicker.granularityDate": "Datum",
  "Terra.onsetPicker.granularityMonth": "maand",
  "Terra.onsetPicker.granularityYear": "jaar",
  "Terra.onsetPicker.january": "januari",
  "Terra.onsetPicker.july": "juli",
  "Terra.onsetPicker.june": "juni",
  "Terra.onsetPicker.march": "maart",
  "Terra.onsetPicker.may": "mei",
  "Terra.onsetPicker.november": "november",
  "Terra.onsetPicker.october": "oktober",
  "Terra.onsetPicker.precisionAbout": "Over",
  "Terra.onsetPicker.precisionAfter": "Na",
  "Terra.onsetPicker.precisionBefore": "Voor",
  "Terra.onsetPicker.precisionOnAt": "Op/Bij",
  "Terra.onsetPicker.precisionUnknown": "Onbekend",
  "Terra.onsetPicker.september": "september",
  "Terra.Overlay.loading": "Bezig met laden"
};
var areTranslationsLoaded = true;
var locale = 'nl-BE';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
