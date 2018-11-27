'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _fr = require('react-intl/locale-data/fr');

var _fr2 = _interopRequireDefault(_fr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_fr2.default);

var messages = {
  "Terra.actionHeader.back": "Précédent",
  "Terra.actionHeader.close": "Fermer",
  "Terra.actionHeader.maximize": "Agrandir",
  "Terra.actionHeader.minimize": "Réduire",
  "Terra.actionHeader.next": "Suivant",
  "Terra.actionHeader.previous": "Précédent",
  "Terra.ajax.error": "Échec du chargement du contenu.",
  "Terra.application.tabs.more": "Plus",
  "Terra.application.utility.back": "Retour",
  "Terra.application.utility.button": "Bouton Utilitaire",
  "Terra.application.utility.close": "Fermer",
  "Terra.application.utility.menu": "Menu Utilitaire",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Accéder au contenu",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Menu",
  "Terra.applicationLayout.utilityDefaults.about": "À propos de",
  "Terra.applicationLayout.utilityDefaults.appearance": "Apparence",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Changer de photo",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Premiers pas",
  "Terra.applicationLayout.utilityDefaults.help": "Aide",
  "Terra.applicationLayout.utilityDefaults.logOut": "Déconnexion",
  "Terra.applicationLayout.utilityDefaults.menu": "Menu",
  "Terra.applicationLayout.utilityDefaults.security": "Sécurité",
  "Terra.applicationLayout.utilityDefaults.settings": "Paramètres",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Conditions d'utilisation",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Informations sur l'utilisateur",
  "Terra.collapsibleMenuView.more": "Plus",
  "Terra.data-grid.row-selection-template": "Sélectionner : {row-description}",
  "Terra.datePicker.dateFormat": "JJ/MM/AAAA",
  "Terra.datePicker.openCalendar": "Ouvrir le calendrier",
  "Terra.datePicker.today": "Aujourd'hui",
  "Terra.form.field.optional": "(facultatif)",
  "Terra.menu.back": "Précédent",
  "Terra.menu.close": "Fermer",
  "Terra.onsetPicker.agePrecisionMonth": "Mois",
  "Terra.onsetPicker.agePrecisionWeek": "Semaine(s)",
  "Terra.onsetPicker.agePrecisionYear": "Année(s)",
  "Terra.onsetPicker.april": "Avril",
  "Terra.onsetPicker.august": "Août",
  "Terra.onsetPicker.december": "Décembre",
  "Terra.onsetPicker.february": "Février",
  "Terra.onsetPicker.granularityAge": "Âge",
  "Terra.onsetPicker.granularityDate": "Date",
  "Terra.onsetPicker.granularityMonth": "Mois",
  "Terra.onsetPicker.granularityYear": "Année",
  "Terra.onsetPicker.january": "Janvier",
  "Terra.onsetPicker.july": "Juillet",
  "Terra.onsetPicker.june": "Juin",
  "Terra.onsetPicker.march": "Mars",
  "Terra.onsetPicker.may": "Mai",
  "Terra.onsetPicker.november": "Novembre",
  "Terra.onsetPicker.october": "Octobre",
  "Terra.onsetPicker.precisionAbout": "À propos de",
  "Terra.onsetPicker.precisionAfter": "Après",
  "Terra.onsetPicker.precisionBefore": "Avant",
  "Terra.onsetPicker.precisionOnAt": "Le/À",
  "Terra.onsetPicker.precisionUnknown": "Inconnu",
  "Terra.onsetPicker.september": "Septembre",
  "Terra.Overlay.loading": "Chargement..."
};
var areTranslationsLoaded = true;
var locale = 'fr';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
