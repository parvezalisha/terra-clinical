'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _ar = require('react-intl/locale-data/ar');

var _ar2 = _interopRequireDefault(_ar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_ar2.default);

var messages = {
  "Terra.actionHeader.back": "العودة",
  "Terra.actionHeader.close": "إغلاق",
  "Terra.actionHeader.maximize": "تكبير",
  "Terra.actionHeader.minimize": "تصغير",
  "Terra.actionHeader.next": "التّالي",
  "Terra.actionHeader.previous": "السابق",
  "Terra.ajax.error": "This content failed to load.",
  "Terra.application.tabs.more": "المزيد",
  "Terra.application.utility.back": "العودة",
  "Terra.application.utility.button": "زر الأداة المساعدة",
  "Terra.application.utility.close": "إغلاق",
  "Terra.application.utility.menu": "قائمة الأداة المساعدة",
  "Terra.ApplicationHeaderLayout.SkipToContent": "تخطى الى المحتوى",
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
  "Terra.collapsibleMenuView.more": "المزيد",
  "Terra.data-grid.row-selection-template": "تحديد: {row-description}",
  "Terra.datePicker.dateFormat": "D/M/YYYY",
  "Terra.datePicker.openCalendar": "Open Calendar",
  "Terra.datePicker.today": "Today",
  "Terra.form.field.optional": "(اختياري)",
  "Terra.menu.back": "العودة",
  "Terra.menu.close": "إغلاق",
  "Terra.onsetPicker.agePrecisionMonth": "شهر (أشهر)",
  "Terra.onsetPicker.agePrecisionWeek": "أسبوع (أسابيع)",
  "Terra.onsetPicker.agePrecisionYear": "سنة (سنوات)",
  "Terra.onsetPicker.april": "أبريل",
  "Terra.onsetPicker.august": "أغسطس",
  "Terra.onsetPicker.december": "ديسمبر",
  "Terra.onsetPicker.february": "فبراير",
  "Terra.onsetPicker.granularityAge": "العمر",
  "Terra.onsetPicker.granularityDate": "التاريخ",
  "Terra.onsetPicker.granularityMonth": "شهر",
  "Terra.onsetPicker.granularityYear": "عام",
  "Terra.onsetPicker.january": "يناير",
  "Terra.onsetPicker.july": "يوليو",
  "Terra.onsetPicker.june": "يونيو",
  "Terra.onsetPicker.march": "مارس",
  "Terra.onsetPicker.may": "مايو",
  "Terra.onsetPicker.november": "نوفمبر",
  "Terra.onsetPicker.october": "أكتوبر",
  "Terra.onsetPicker.precisionAbout": "تقريبي",
  "Terra.onsetPicker.precisionAfter": "بعد",
  "Terra.onsetPicker.precisionBefore": "قبل",
  "Terra.onsetPicker.precisionOnAt": "بتاريخ/في",
  "Terra.onsetPicker.precisionUnknown": "غير معروف",
  "Terra.onsetPicker.september": "سبتمبر",
  "Terra.Overlay.loading": "Loading..."
};
var areTranslationsLoaded = true;
var locale = 'ar';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
