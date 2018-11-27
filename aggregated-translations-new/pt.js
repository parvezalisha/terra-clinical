'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _pt = require('react-intl/locale-data/pt');

var _pt2 = _interopRequireDefault(_pt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_pt2.default);

var messages = {
  "Terra.actionHeader.back": "Voltar",
  "Terra.actionHeader.close": "Fechar",
  "Terra.actionHeader.maximize": "Maximizar",
  "Terra.actionHeader.minimize": "Minimizar",
  "Terra.actionHeader.next": "Próximo",
  "Terra.actionHeader.previous": "Anterior",
  "Terra.ajax.error": "Falha ao carregar conteúdo.",
  "Terra.application.tabs.more": "Mais",
  "Terra.application.utility.back": "Voltar",
  "Terra.application.utility.button": "Botão utilidade",
  "Terra.application.utility.close": "Fechar",
  "Terra.application.utility.menu": "Menu utilidade",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Pular para conteúdo",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Alternar menu",
  "Terra.applicationLayout.utilityDefaults.about": "Sobre",
  "Terra.applicationLayout.utilityDefaults.appearance": "Aparência",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Alterar foto",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Primeiros passos",
  "Terra.applicationLayout.utilityDefaults.help": "Ajuda",
  "Terra.applicationLayout.utilityDefaults.logOut": "Logoff",
  "Terra.applicationLayout.utilityDefaults.menu": "Menu",
  "Terra.applicationLayout.utilityDefaults.security": "Segurança",
  "Terra.applicationLayout.utilityDefaults.settings": "Configurações",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Termos de uso",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Informações do usuário",
  "Terra.collapsibleMenuView.more": "Mais",
  "Terra.data-grid.row-selection-template": "Selecionar: {row-description}",
  "Terra.datePicker.dateFormat": "DD/MM/AAAA",
  "Terra.datePicker.openCalendar": "Calendário aberto",
  "Terra.datePicker.today": "Hoje",
  "Terra.form.field.optional": "(opcional)",
  "Terra.menu.back": "Voltar",
  "Terra.menu.close": "Fechar",
  "Terra.onsetPicker.agePrecisionMonth": "Mês(ses)",
  "Terra.onsetPicker.agePrecisionWeek": "Semana(s)",
  "Terra.onsetPicker.agePrecisionYear": "Ano(s)",
  "Terra.onsetPicker.april": "Abril",
  "Terra.onsetPicker.august": "Agosto",
  "Terra.onsetPicker.december": "Dezembro",
  "Terra.onsetPicker.february": "Fevereiro",
  "Terra.onsetPicker.granularityAge": "Idade",
  "Terra.onsetPicker.granularityDate": "Date",
  "Terra.onsetPicker.granularityMonth": "Mês",
  "Terra.onsetPicker.granularityYear": "Ano",
  "Terra.onsetPicker.january": "Janeiro",
  "Terra.onsetPicker.july": "Julho",
  "Terra.onsetPicker.june": "Junho",
  "Terra.onsetPicker.march": "Março",
  "Terra.onsetPicker.may": "Maio",
  "Terra.onsetPicker.november": "Novembro",
  "Terra.onsetPicker.october": "Outubro",
  "Terra.onsetPicker.precisionAbout": "Sobre",
  "Terra.onsetPicker.precisionAfter": "Após",
  "Terra.onsetPicker.precisionBefore": "Antes",
  "Terra.onsetPicker.precisionOnAt": "Em",
  "Terra.onsetPicker.precisionUnknown": "Desconhecido",
  "Terra.onsetPicker.september": "Setembro",
  "Terra.Overlay.loading": "Carregando..."
};
var areTranslationsLoaded = true;
var locale = 'pt';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
