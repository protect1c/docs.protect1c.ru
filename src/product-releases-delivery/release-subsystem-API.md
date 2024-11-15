---
label: API подсистемы релизов
icon: 
order: -3
---
# API подсистемы релизов

!!!
В системе лицензирования и защиты кода представлены методы API для работы с релизами и сервером лицензирования. Эти методы можно просмотреть и протестировать. Методы постоянно расширяются, а актуальное описание всегда доступно внутри системы.
!!!

### API для работы с релизами

В системе защиты и лицензирования кода 1С предусмотрено несколько API, которые позволяют управлять и взаимодействовать с релизами. Одним из них является API для получения списка релизов, рассмотрим его.

<img class="miko-shadow img-zoomable"  
src="/assets/product-releases-delivery/release-subsystem-API/release-subsystem_1.png"
data-original="/assets/product-releases-delivery/release-subsystem-API/release-subsystem_1.png"
srcset="/assets/product-releases-delivery/release-subsystem-API/release-subsystem_1_prev.png 1x, /assets/product-releases-delivery/release-subsystem-API/release-subsystem_1.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: API для работы с релизами"
/>

В системе представлена схема с описанием каждого поля, где указано его назначение.

{.compact}
Поле | Описание поля
--- | ---
<b>INSTALLED_VERSION</b> | string<br>`example: 4.0.4.9`<br>Текущая установленная версия
<b>TYPE</b> | string<br>`example: PT40_UT_CRM3`<br>Идентификатор дистрибутива
<b>CONF</b> | string<br>`example: КомплекснаяАвтоматизация_CRM`<br>Название конфигурации
<b>CONF_VERSION</b> | string<br>`example: 2.5.8.191`<br>Версия конфигурации
<b>KEY</b> | string<br>`example: MIKO-XXXXX-XXXXX-XXXXX-XXXXX`<br>Ключ лицензирования
<b>SHOW_UNTESTED</b> | string<br>`example: Y`<br>Показывать несовместимые версии
<b>COUNT_DOWNLOADS</b> | string<br>`example: Y`<br>Считать статистику скачиваний

А также пример запроса со всеми заполненными полями.

``` Example Value
{
  "INSTALLED_VERSION": "4.0.4.9",
  "TYPE": "PT40_UT_CRM3",
  "CONF": "КомплекснаяАвтоматизация_CRM",
  "CONF_VERSION": "2.5.8.191",
  "KEY": "MIKO-XXXXX-XXXXX-XXXXX-XXXXX",
  "SHOW_UNTESTED": "Y",
  "COUNT_DOWNLOADS": "Y"
}
```

Помимо этого, доступны примеры ответов для каждого варианта.

{.compact}
Код | Описание
--- | ---
200 | Список доступных релизов 1С<br>`{"modules": [`<br>`{"release_id": 1139,`<br>`"uniqid": "4.0.4.11",`<br>`"version": "MIKO",`<br>`"developer": "MIKO",`<br>`"min_1c_version": "2.5.8.191",`<br>`"lic_product_id": 85,`<br>`"lic_feature_id": 43,`<br>`"name": "ПодсистемаТелефонии40_УТиВСК",`<br>`"description": "Расширение для 1С:Управление торговлей и взаимоотношениями с клиентами (CRM), редакция 3, подсистема телефонии 4.0\\n\\nУТиВСК, КА+CRM, ERP+CRM",`<br>`"promo_link": "https://wiki.miko.ru/nightbird", `<br>`"changelog": "- Исправлена проблема с прикреплением заметок к звонкам (PT-743).",`<br>`"size": 17355331,`<br>`"download_link": "https://filescdn.miko.ru/s/lqonXhK4EOML6oB/download", `<br>`"files": [`<br>`{"name": "PT40_UT_KA_ERP_2.4.11.4.ZIP",`<br>`"size": 865976,`<br>`"url": "https://filescdn.miko.ru/s/uUyt6FSmeT8vDAM/download", `<br>`"md5": "027ade8b556dd66ab1c3a60d4a53be90"}`<br>`]`<br>`}`<br>`],`<br>`"result": ""}`
400 | Ошибка валидации запроса<br>`{`<br>`"error": "string"`<br>`}`


Нажав на кнопку **Try it out** можно протестировать работу системы, указав значения полей.

<img class="miko-shadow img-zoomable"  
src="/assets/product-releases-delivery/release-subsystem-API/release-subsystem_2.png"
data-original="/assets/product-releases-delivery/release-subsystem-API/release-subsystem_2.png"
srcset="/assets/product-releases-delivery/release-subsystem-API/release-subsystem_2_prev.png 1x, /assets/product-releases-delivery/release-subsystem-API/release-subsystem_2.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: API для получения списка релизов"
/>
