---
label: Добавление карты на сайт
icon: 
order: -4
---
# Добавление карты на сайт

!!!
В системе лицензирования и защиты кода представлены методы API для работы с релизами и сервером лицензирования. Эти методы можно просмотреть и протестировать. Методы постоянно расширяются, а актуальное описание всегда доступно внутри системы.
!!!

<img class="miko-shadow img-zoomable"  
src="/assets/licensing-system-API/adding-map/adding-map_1.png"
data-original="/assets/licensing-system-API/adding-map/adding-map_1.png"
srcset="/assets/licensing-system-API/adding-map/adding-map_1_prev.png 1x, /assets/licensing-system-API/adding-map/adding-map_1.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: API системы лицензирования"
/>

### API для добавления карты на сайт

В системе представлена схема с описанием каждого поля, где указано его назначение.

{.compact}
Поле | Описание поля
--- | ---
<b>features</b> | string<br>`example: [1,31,32,46,47,48,49]`<br>Массив фич для отображения на карте

А также пример запроса со всеми заполненными полями.

``` Example Value
{
  "features": "[1,31,32,46,47,48,49]"
}
```

Помимо этого, доступны примеры ответов для каждого варианта.

{.compact}
Код | Описание
--- | ---
200 | Успешный ответ с координатами клиентов<br>`[`<br>`{"latitude": 59.8944,`<br>`"longitude": 30.2642,`<br>`"online": 1},`<br>`{"latitude": 56.8605,`<br>`"longitude": 35.876,`<br>`"online": 1},`<br>`...`<br>`]`
400 | Ошибка в запросе<br>`"Ошибка в запросе"`

Нажав на кнопку **Try it out** можно протестировать работу системы, указав значения полей.

<img class="miko-shadow img-zoomable"  
src="/assets/licensing-system-API/adding-map/adding-map_2.png"
data-original="/assets/licensing-system-API/adding-map/adding-map_2.png"
srcset="/assets/licensing-system-API/adding-map/adding-map_2_prev.png 1x, /assets/licensing-system-API/adding-map/adding-map_2.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: API для добавленя карты на сайт"
/>