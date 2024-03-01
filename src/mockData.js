import a from "./assets/img_183_138_838f65.svg"
import b from "./assets/img_183_138_838f65.svg"
import c from "./assets/img_183_138_838f65.svg"
import d from "./assets/img_183_138_838f65.svg"

const mockData = {
  styledContentDataList: [
    {
      htmlContentWithStyledSpans:
        '<span    class="smart-control-device-description">Устройства управления (хабы</span><span    class="blue-text-highlight">)</span><span    class="smart-control-description"> — устройства управления получают сигнал с датчиков и управляют работой устройств-исполнителей, подключенных в систему Умный дом. Хабами являются: wi-fi розетка, панель и модуль управления, блок управления.</span>',
    },
    {
      htmlContentWithStyledSpans:
        '<span    class="smart-home-device-description">Устройства исполнители</span><span    class="smart-control-description"> — любые электроприборы, подключенные к умному дому: кондиционеры, освещение, роллеты для открывания штор и т.д.</span>',
    },
    {
      htmlContentWithStyledSpans:
        '<span    class="sensor-description-text-style">Датчики</span><span    class="smart-control-description"> — компактные устройства, которые умеют фиксировать различные события, например утечку воды или открытие двери.</span>',
    },
  ],
  smartHomeDisplayOptions: [
    {
      smartHomeComponentSelectionText: "Выбрать совместимые компоненты",
      imgContent:
       a,
    },
    {
      smartHomeComponentSelectionText: "Получить примерный расчет стоимости",
      imgContent:
        b,
    },
    {
      smartHomeComponentSelectionText: "Определиться с выбором",
      imgContent:
        c,
    },
    {
      smartHomeComponentSelectionText: "Получить инструкцию по установке компонентов",
      imgContent:
        d,
    },
  ],
};

export { mockData };
