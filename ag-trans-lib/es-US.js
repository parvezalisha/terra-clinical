'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _es = require('react-intl/locale-data/es');

var _es2 = _interopRequireDefault(_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_es2.default);

var messages = {
  "Terra.actionHeader.back": "Atrás",
  "Terra.actionHeader.close": "Cerrar",
  "Terra.actionHeader.maximize": "Maximizar",
  "Terra.actionHeader.minimize": "Minimimzar",
  "Terra.actionHeader.next": "Siguiente",
  "Terra.actionHeader.previous": "Anterior",
  "Terra.ajax.error": "Error al cargar el contenido.",
  "Terra.application.tabs.more": "Más",
  "Terra.application.utility.back": "Atrás",
  "Terra.application.utility.button": "Botón de utilidades",
  "Terra.application.utility.close": "Cerrar",
  "Terra.application.utility.menu": "Menú de utilidades",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Saltar al contenido",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Menú de alternancia",
  "Terra.applicationLayout.utilityDefaults.about": "Acerca de",
  "Terra.applicationLayout.utilityDefaults.appearance": "Apariencia",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Cambiar foto",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Introducción",
  "Terra.applicationLayout.utilityDefaults.help": "Ayuda",
  "Terra.applicationLayout.utilityDefaults.logOut": "Cerrar sesión",
  "Terra.applicationLayout.utilityDefaults.menu": "Menú",
  "Terra.applicationLayout.utilityDefaults.security": "Seguridad",
  "Terra.applicationLayout.utilityDefaults.settings": "Configuración",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Condiciones de uso",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Información de usuario",
  "Terra.collapsibleMenuView.more": "Más",
  "Terra.data-grid.row-selection-template": "Seleccionar: {row-description}",
  "Terra.datePicker.dateFormat": "DD/MM/AAAA",
  "Terra.datePicker.openCalendar": "Abrir calendario",
  "Terra.datePicker.today": "Hoy",
  "Terra.form.field.optional": "(opcional)",
  "Terra.menu.back": "Atrás",
  "Terra.menu.close": "Cerrar",
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
  "Terra.Overlay.loading": "Cargando..."
};
var areTranslationsLoaded = true;
var locale = 'es-US';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;