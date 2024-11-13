---
label: Генерация купонов на продукты
icon: 
order: -1
---
# Генерация купонов на продукты

!!!
В системе лицензирования и защиты кода представлены методы API для работы с релизами и сервером лицензирования. Эти методы можно просмотреть и протестировать. Методы постоянно расширяются, а актуальное описание всегда доступно внутри системы.
!!!

<img class="miko-shadow img-zoomable"  
src="/assets/licensing-system-API/coupon-generation-API/coupon-generation-API_1.png"
data-original="/assets/licensing-system-API/coupon-generation-API/coupon-generation-API_1.png"
srcset="/assets/licensing-system-API/coupon-generation-API/coupon-generation-API_1_prev.png 1x, /assets/licensing-system-API/coupon-generation-API/coupon-generation-API_1.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: API системы лицензирования"
/>

### API для генерации купонов на продукты

В системе представлена схема с описанием каждого поля, где указано его назначение.

{.compact}
Поле | Описание поля
--- | ---
<b>coupontype</b> | string<br>`example: NewProduct`<br>Тип купона: NewProduct или TrialExtend
<b>couponscount</b> | integer<br>`example: 1`<br>Количество генерируемых купонов
<b>usemanytimes</b> | integer<br>`example: 0`<br>Многоразовый купон (0 или 1)
<b>distributorguid</b> | string<br>`example: bdf28230-0708-11e6-b99b-005056940006`<br>GUID Дистрибутора
<b>crminvoice</b> | string<br>`example: ЛА-012311`<br>Номер счета
<b>crminvoicedate</b> | string($date-time)<br>`example: 2024-09-11`<br>Дата счета
<b>description</b> | string<br>`example: Генерация из 1С`<br>Комментарий к генерируемым купонам
<b>products</b> | `example: [{"guid":"9f3bbc89-e77b-11e4-b82f-0050568158a4", "multiplier": "1", "fixedexpire": "2028-09-11", "extenddays": 0}]`<br>Массив продуктов для генерации купонов<br>{<br><b>guid</b><br>string<br>GUID продукта<br>  <br><b>multiplier</b><br>string<br>Множитель продукта<br>  <br><b>fixedexpire</b><br>string($date)<br>Дата истечения срока действия<br> <br><b>extenddays</b><br>integer<br>Количество дней для расчета срока действия продуктва после активации купона<br>}

А также пример запроса со всеми заполненными полями.

``` Example Value
{
  "coupontype": "NewProduct",
  "couponscount": 1,
  "usemanytimes": 0,
  "distributorguid": "bdf28230-0708-11e6-b99b-005056940006",
  "crminvoice": "ЛА-012311",
  "crminvoicedate": "2024-09-11",
  "description": "Генерация из 1С",
  "products": [
    {
      "guid": "9f3bbc89-e77b-11e4-b82f-0050568158a4",
      "multiplier": "1",
      "fixedexpire": "2028-09-11",
      "extenddays": 0
    }
  ]
}
```

Помимо этого, доступны примеры ответов для каждого варианта.

{.compact}
Код | Описание
--- | ---
200 | Успешный ответ с массивом сгенерированных купонов<br>`["MIKOUPD-GS6B5-XXXXX-AW0AN-XXXXX"]`
400 | Ошибка в запросе, неверные параметры<br>`{"message": "Count must be bigger than 0"}`
404 | Ресурс не найден<br>`{"message": "Unknown distributor GUID"}`
500 | Ошибка сервера<br>`{"message": "Internal server error"}`

Нажав на кнопку **Try it out** можно протестировать работу системы, указав значения полей.

<img class="miko-shadow img-zoomable"  
src="/assets/licensing-system-API/coupon-generation-API/coupon-generation-API_2.png"
data-original="/assets/licensing-system-API/coupon-generation-API/coupon-generation-API_2.png"
srcset="/assets/licensing-system-API/coupon-generation-API/coupon-generation-API_2_prev.png 1x, /assets/licensing-system-API/coupon-generation-API/coupon-generation-API_2.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: API системы лицензирования"
/>