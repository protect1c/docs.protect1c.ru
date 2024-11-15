---
label: Получение списка новых триалов
icon: 
order: -2
---
# Получение списка новых триалов

!!!
В системе лицензирования и защиты кода представлены методы API для работы с релизами и сервером лицензирования. Эти методы можно просмотреть и протестировать. Методы постоянно расширяются, а актуальное описание всегда доступно внутри системы.
!!!

<img class="miko-shadow img-zoomable"  
src="/assets/licensing-system/getting-new-trials/getting-new-trials_1.png"
data-original="/assets/licensing-system/getting-new-trials/getting-new-trials_1.png"
srcset="/assets/licensing-system/getting-new-trials/getting-new-trials_1_prev.png 1x, /assets/licensing-system/getting-new-trials/getting-new-trials_1.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: API системы лицензирования"
/>

### API для получения списка новых триалов

В системе представлено поле с параметром, где указано его назначение.

{.compact}
Поле | Описание поля
--- | ---
<b>lastresultid</b> | integer<br>ID последнего результата для пагинации

Помимо этого, доступны примеры ответов для каждого варианта.

{.compact}
Код | Описание
--- | ---
200 | Успешный ответ с историей активаций<br>`[`<br>`{"result_id": 8001,`<br>`"licensekey": "DEMO-XXXXX-XXXXX-XXXXX-12345",`<br>`"product": "MikoPBX",`<br>`"dateactivated": "2024-06-13",`<br>`"email": "mow@demo-two.pro",`<br>`"contact": "Иван Иванов",`<br>`"shortname": "Сити Софт",`<br>`"phone": "+79261234324",`<br>`"description": "Get trial from MikoPBX2024.1.114",`<br>`"inn": "1231231231"},`<br>`...`<br>`]`
400 | Ошибка в запросе<br>`"Ошибка в запросе"`

Нажав на кнопку **Try it out** можно протестировать работу системы, указав значение параметра.

<img class="miko-shadow img-zoomable"  
src="/assets/licensing-system/getting-new-trials/getting-new-trials_2.png"
data-original="/assets/licensing-system/getting-new-trials/getting-new-trials_2.png"
srcset="/assets/licensing-system/getting-new-trials/getting-new-trials_2_prev.png 1x, /assets/licensing-system/getting-new-trials/getting-new-trials_2.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: API для получения списка новых триалов"
/>