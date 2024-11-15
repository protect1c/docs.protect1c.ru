---
label: Получение списка истекающих подписок
icon: 
order: -3
---
# Получение списка истекающих подписок

!!!
В системе лицензирования и защиты кода представлены методы API для работы с релизами и сервером лицензирования. Эти методы можно просмотреть и протестировать. Методы постоянно расширяются, а актуальное описание всегда доступно внутри системы.
!!!

<img class="miko-shadow img-zoomable"  
src="/assets/licensing-system/getting-expiring-subscriptions/getting-expiring-subscriptions_1.png"
data-original="/assets/licensing-system/getting-expiring-subscriptions/getting-expiring-subscriptions_1.png"
srcset="/assets/licensing-system/getting-expiring-subscriptions/getting-expiring-subscriptions_1_prev.png 1x, /assets/licensing-system/getting-expiring-subscriptions/getting-expiring-subscriptions_1.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: API системы лицензирования"
/>

### API для получения списка истекающих подписок

В системе представлена схема с описанием каждого поля, где указано его назначение.

{.compact}
Поле | Описание поля
--- | ---
<b>DATE_FROM</b> | string($date-time)<br>`example: 2024-09-01`<br>Период начала отбора
<b>DATE_TO</b> | string($date-time)<br>`example: 2024-09-11`<br>Период окончания отбора
<b>TRIALS</b> | string<br>`example: false`<br>Включать триалы

А также пример запроса со всеми заполненными полями.

``` Example Value
{
  "DATE_FROM": "2024-09-01",
  "DATE_TO": "2024-09-11",
  "TRIALS": "false"
}
```

Помимо этого, доступны примеры ответов для каждого варианта.

{.compact}
Код | Описание
--- | ---
200 | Успешный ответ списком продуктов<br>`[`<br>`{"licensekey": "MIKO-XXXXX-NFWXD-XXXXX-12345",`<br>`"companyname": "OOO МИКО",`<br>`"contact": "Николай Мармышкин",`<br>`"email": "a.nabat@client.ru",`<br>`"crmRef1": "123123123123",`<br>`"crmRef2": "",`<br>`"product": "25 рабочих мест на Панель телефонии для 1С:Предприятие 8",`<br>`"product_en": "25 workstations for Telephony Panel for 1C:Enterprise 8",`<br>`"expired": "2027-07-08",`<br>`"distributor": "МИКО",`<br>`"responsible": "Бекетов Николай"},`<br>`...`<br>`]`
400 | Ошибка в запросе<br>`"Ошибка в запросе"`
404 | Не найдено<br>`"Ресурс не найден"`

Нажав на кнопку **Try it out** можно протестировать работу системы, указав значения полей.

<img class="miko-shadow img-zoomable"  
src="/assets/licensing-system/getting-expiring-subscriptions/getting-expiring-subscriptions_2.png"
data-original="/assets/licensing-system/getting-expiring-subscriptions/getting-expiring-subscriptions_2.png"
srcset="/assets/licensing-system/getting-expiring-subscriptions/getting-expiring-subscriptions_2_prev.png 1x, /assets/licensing-system/getting-expiring-subscriptions/getting-expiring-subscriptions_2.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: API для получения списка истекающих подписок"
/>