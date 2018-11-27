'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _de = require('react-intl/locale-data/de');

var _de2 = _interopRequireDefault(_de);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _reactIntl.addLocaleData)(_de2.default);

var messages = {
  "Terra.actionHeader.back": "Zurück",
  "Terra.actionHeader.close": "Schließen",
  "Terra.actionHeader.maximize": "Maximieren",
  "Terra.actionHeader.minimize": "Minimieren",
  "Terra.actionHeader.next": "Nächste",
  "Terra.actionHeader.previous": "Vorherige",
  "Terra.ajax.error": "Inhalt konnte nicht geladen werden.",
  "Terra.application.tabs.more": "Mehr",
  "Terra.application.utility.back": "Zurück",
  "Terra.application.utility.button": "Schaltfläche „Dienstprogramm“",
  "Terra.application.utility.close": "Schließen",
  "Terra.application.utility.menu": "Menü „Dienstprogramm“",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Zum Inhalt",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Menü ein-/ausblenden",
  "Terra.applicationLayout.utilityDefaults.about": "Info über",
  "Terra.applicationLayout.utilityDefaults.appearance": "Erscheinungsbild",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Foto ändern",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Erste Schritte",
  "Terra.applicationLayout.utilityDefaults.help": "Hilfe",
  "Terra.applicationLayout.utilityDefaults.logOut": "Abmelden",
  "Terra.applicationLayout.utilityDefaults.menu": "Menü",
  "Terra.applicationLayout.utilityDefaults.security": "Berechtigung",
  "Terra.applicationLayout.utilityDefaults.settings": "Einstellungen",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Nutzungsbestimmungen",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Benutzerdaten",
  "Terra.collapsibleMenuView.more": "Mehr",
  "Terra.data-grid.row-selection-template": "Wählen: {row-description}",
  "Terra.datePicker.dateFormat": "TT.MM.JJJJ",
  "Terra.datePicker.openCalendar": "Kalender öffnen",
  "Terra.datePicker.today": "Heute",
  "Terra.form.field.optional": "(Optional)",
  "Terra.menu.back": "Zurück",
  "Terra.menu.close": "Schließen",
  "Terra.onsetPicker.agePrecisionMonth": "Monat(e)",
  "Terra.onsetPicker.agePrecisionWeek": "Woche(n)",
  "Terra.onsetPicker.agePrecisionYear": "Jahr(e)",
  "Terra.onsetPicker.april": "April",
  "Terra.onsetPicker.august": "August",
  "Terra.onsetPicker.december": "Dezember",
  "Terra.onsetPicker.february": "Februar",
  "Terra.onsetPicker.granularityAge": "Alter",
  "Terra.onsetPicker.granularityDate": "Datum",
  "Terra.onsetPicker.granularityMonth": "Monat",
  "Terra.onsetPicker.granularityYear": "Jahr",
  "Terra.onsetPicker.january": "Januar",
  "Terra.onsetPicker.july": "Juli",
  "Terra.onsetPicker.june": "Juni",
  "Terra.onsetPicker.march": "März",
  "Terra.onsetPicker.may": "Mai",
  "Terra.onsetPicker.november": "November",
  "Terra.onsetPicker.october": "Oktober",
  "Terra.onsetPicker.precisionAbout": "Ungefähr",
  "Terra.onsetPicker.precisionAfter": "Nach",
  "Terra.onsetPicker.precisionBefore": "Vor",
  "Terra.onsetPicker.precisionOnAt": "Am/Um",
  "Terra.onsetPicker.precisionUnknown": "Unbekannt",
  "Terra.onsetPicker.september": "September",
  "Terra.Overlay.loading": "Ladevorgang..."
};
var areTranslationsLoaded = true;
var locale = 'de';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;