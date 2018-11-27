'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _es = require('react-intl/locale-data/es');

var _es2 = _interopRequireDefault(_es);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
  "Terra.onsetPicker.agePrecisionMonth": "Meses",
  "Terra.onsetPicker.agePrecisionWeek": "Semanas",
  "Terra.onsetPicker.agePrecisionYear": "Años",
  "Terra.onsetPicker.april": "Abril",
  "Terra.onsetPicker.august": "Agosto",
  "Terra.onsetPicker.december": "Diciembre",
  "Terra.onsetPicker.february": "Febrero",
  "Terra.onsetPicker.granularityAge": "Edad",
  "Terra.onsetPicker.granularityDate": "Fecha",
  "Terra.onsetPicker.granularityMonth": "Mes",
  "Terra.onsetPicker.granularityYear": "Año",
  "Terra.onsetPicker.january": "Enero",
  "Terra.onsetPicker.july": "Julio",
  "Terra.onsetPicker.june": "Junio",
  "Terra.onsetPicker.march": "Marzo",
  "Terra.onsetPicker.may": "Mayo",
  "Terra.onsetPicker.november": "Noviembre",
  "Terra.onsetPicker.october": "Octubre",
  "Terra.onsetPicker.precisionAbout": "Acerca de",
  "Terra.onsetPicker.precisionAfter": "Después",
  "Terra.onsetPicker.precisionBefore": "Antes",
  "Terra.onsetPicker.precisionOnAt": "el/a las",
  "Terra.onsetPicker.precisionUnknown": "Desconocido",
  "Terra.onsetPicker.september": "Septiembre",
  "Terra.Overlay.loading": "Cargando..."
};
var areTranslationsLoaded = true;
var locale = 'es-ES';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;