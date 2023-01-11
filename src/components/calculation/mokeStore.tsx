import { TItemsCalculation } from "./types";
import imgTypeOfWork1 from "../../img/calculation/typesofwork_1.jpg";
import imgTypeOfWork2 from "../../img/calculation/typesofwork_2.jpg";
import imgTypeOfWork3 from "../../img/calculation/typesofwork_3.jpg";
import imgTypeOfWork4 from "../../img/calculation/typesofwork_4.jpg";
import imgTypeOfWork5 from "../../img/calculation/typesofwork_5.jpg";
import imgTypeOfRoom1 from "../../img/calculation/typeofroom_1.jpg";
import imgTypeOfRoom2 from "../../img/calculation/typeofroom_2.jpg";
import imgTypeOfRoom3 from "../../img/calculation/typeofroom_3.jpg";
import imgTypeOfRoom4 from "../../img/calculation/typeofroom_4.jpg";
import imgTypeOfRoom5 from "../../img/calculation/typeofroom_5.jpg";
const itemsCalculation: TItemsCalculation = [
  {
    items: [
      {
        img: imgTypeOfWork1,
        title: "Гипсовая штукатурка",
        selected: false,
      },
      {
        img: imgTypeOfWork2,
        title: "Песчано-цементная штукатурка",
        selected: false,
      },
      {
        img: imgTypeOfWork3,
        title: "Стяжка пола",
        selected: false,
      },
      {
        img: imgTypeOfWork4,
        title: "Шпаклевка",
        selected: false,
      },
      {
        img: imgTypeOfWork5,
        title: "Перегородки",
        selected: false,
      },
    ],
    activeTab: true,
    activeContent: true,
    title: "Выберите вид работы,который вас интересует",
    imgPresent: true,

    wrapperOrInnerOrItems: "items",
  },
  {
    items: [
      {
        img: imgTypeOfRoom1,
        title: "Вторичное жилье",
        selected: false,
      },
      {
        img: imgTypeOfRoom2,
        title: "Коттедж",
        selected: false,
      },
      {
        img: imgTypeOfRoom3,
        title: "Частный дом",
        selected: false,
      },
      {
        img: imgTypeOfRoom4,
        title: "Промышленный объект",
        selected: false,
      },
      {
        img: imgTypeOfRoom5,
        title: "Нежилой объект",
        selected: false,
      },
      {
        img: imgTypeOfRoom5,
        title: "Другое",
        selected: false,
      },
    ],
    activeTab: false,
    activeContent: false,
    title: "Вид помещения",
    imgPresent: true,

    wrapperOrInnerOrItems: "items",
  },
  {
    items: [
      {
        img: null,
        title: "20 см",
        selected: true,
      },
      {
        img: null,
        title: "30 см",
        selected: false,
      },
      {
        img: null,
        title: "40 см",
        selected: false,
      },
      {
        img: null,
        title: "50 см",
        selected: false,
      },
    ],
    activeTab: false,
    activeContent: false,
    title: "Ширина штукатурного слоя",
    imgPresent: false,

    wrapperOrInnerOrItems: "wrapper",
  },
  {
    activeTab: false,
    activeContent: false,
    title: "Укажите площадь помещения (м²)",
    imgPresent: false,

    wrapperOrInnerOrItems: null,
  },
  {
    items: [
      {
        title: "Москва",
        selected: false,
      },
      {
        title: "100 км от Москвы",
        selected: false,
      },
      {
        title: "Более 100 км от Москвы",
        selected: false,
      },
    ],
    activeTab: false,
    activeContent: false,
    title: "Выберите область доставки материалов",
    imgPresent: false,

    wrapperOrInnerOrItems: "inner",
  },
  {
    items: [
      {
        title: "Телеграм",
        selected: false,
      },
      {
        title: "Ватсап",
        selected: false,
      },
      {
        title: "По звонку",
        selected: false,
      },
    ],
    activeTab: false,
    activeContent: false,
    title: "Куда отправить вам смету?",
    imgPresent: false,

    wrapperOrInnerOrItems: "inner",
  },
  {
    activeTab: false,
    activeContent: false,
    title: "Укажите ваши контакты для получения сметы",
    imgPresent: false,

    wrapperOrInnerOrItems: null,
  },
];
const resetItemsCalculation: TItemsCalculation = [
  {
    items: [
      {
        img: imgTypeOfWork1,
        title: "Гипсовая штукатурка",
        selected: false,
      },
      {
        img: imgTypeOfWork2,
        title: "Песчано-цементная штукатурка",
        selected: false,
      },
      {
        img: imgTypeOfWork3,
        title: "Стяжка пола",
        selected: false,
      },
      {
        img: imgTypeOfWork4,
        title: "Шпаклевка",
        selected: false,
      },
      {
        img: imgTypeOfWork5,
        title: "Перегородки",
        selected: false,
      },
    ],
    activeTab: true,
    activeContent: true,
    title: "Выберите вид работы,который вас интересует",
    imgPresent: true,

    wrapperOrInnerOrItems: "items",
  },
  {
    items: [
      {
        img: imgTypeOfRoom1,
        title: "Вторичное жилье",
        selected: false,
      },
      {
        img: imgTypeOfRoom2,
        title: "Коттедж",
        selected: false,
      },
      {
        img: imgTypeOfRoom3,
        title: "Частный дом",
        selected: false,
      },
      {
        img: imgTypeOfRoom4,
        title: "Промышленный объект",
        selected: false,
      },
      {
        img: imgTypeOfRoom5,
        title: "Нежилой объект",
        selected: false,
      },
      {
        img: imgTypeOfRoom5,
        title: "Другое",
        selected: false,
      },
    ],
    activeTab: false,
    activeContent: false,
    title: "Вид помещения",
    imgPresent: true,

    wrapperOrInnerOrItems: "items",
  },
  {
    items: [
      {
        img: null,
        title: "20 см",
        selected: true,
      },
      {
        img: null,
        title: "30 см",
        selected: false,
      },
      {
        img: null,
        title: "40 см",
        selected: false,
      },
      {
        img: null,
        title: "50 см",
        selected: false,
      },
    ],
    activeTab: false,
    activeContent: false,
    title: "Ширина штукатурного слоя",
    imgPresent: false,

    wrapperOrInnerOrItems: "wrapper",
  },
  {
    activeTab: false,
    activeContent: false,
    title: "Укажите площадь помещения (м²)",
    imgPresent: false,

    wrapperOrInnerOrItems: null,
  },
  {
    items: [
      {
        title: "Москва",
        selected: false,
      },
      {
        title: "100 км от Москвы",
        selected: false,
      },
      {
        title: "Более 100 км от Москвы",
        selected: false,
      },
    ],
    activeTab: false,
    activeContent: false,
    title: "Выберите область доставки материалов",
    imgPresent: false,

    wrapperOrInnerOrItems: "inner",
  },
  {
    items: [
      {
        title: "Телеграм",
        selected: false,
      },
      {
        title: "Ватсап",
        selected: false,
      },
      {
        title: "По звонку",
        selected: false,
      },
    ],
    activeTab: false,
    activeContent: false,
    title: "Куда отправить вам смету?",
    imgPresent: false,

    wrapperOrInnerOrItems: "inner",
  },
  {
    activeTab: false,
    activeContent: false,
    title: "Укажите ваши контакты для получения сметы",
    imgPresent: false,

    wrapperOrInnerOrItems: null,
  },
];
export { itemsCalculation, resetItemsCalculation };
