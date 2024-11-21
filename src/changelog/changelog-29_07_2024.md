---
label: Обновления от 29 июля 2024
icon: 
order: -3
---
# Обновления от 29 июля 2024

### Новое в генераторе купонов

Расширили возможности формы генератора купонов.

#### Добавление продуктов

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_1.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_1.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_1_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_1.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Создание купона для добавления продуктов в лицензионный ключ"
/>

#### Продление триалов продуктов

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_2.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_2.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_2_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_2.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Создание купона для продления триала"
/>

#### Апгрейд продуктов

Добавили возможность выполнять апгрейд продуктов в ключе, при необходимости можно менять количество, деактивировать, менять срок действия существующих продуктов и добавлять новые.

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_3.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_3.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_3_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_3.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Создание купона для обновления состава продуктов в лиензионном ключе 1"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_4.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_4.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_4_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_4.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Создание купона для обновления состава продуктов в лиензионном ключе 2"
/>

Удобно для обновления подписки под клиента, например был продан продукт на 1 год, и через 11 месяцев мы продаем ему апгрейд. В генераторе купонов меняем срок действия продукта на 1 год и 1 месяц и активируем изменение.

### Продукты с произвольным количеством

В форму продукта добавили галочку множитель, а в форме генератора купонов вывели это значение для возможности ввода. В итоге можно создать продукт с гибким количеством фич. Например мы делаем продукт «Панель телефонии для 1С», в котором есть фича на хост сервера 1С и фича на пользователя.

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_5.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_5.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_5_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_5.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: множитель в карточке продукта"
/>

Для такого продукта мы поставили галочку множитель только для фичи на пользователя. В итоге мы легко можем генерировать купоны на наш продукт с абсолютно любым количеством фич, причем фичи будут умножаться в соответствии с заданной настройкой.

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_6.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_6.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_6_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_6.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: использование множителя при генерации купонов"
/>

### Новый тип защиты - подсчет токенов (Alfa)

Ранее у нас были доступны только 3 типа лицензирования: «на хост», «на процесс», «на пользователя». В новом релизе мы добавили новый вариант «токен».

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_7.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_7.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_7_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_7.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Варианты учета использования лицензии на программный продукт"
/>

Пока он не реализован в конечных библиотеках, но у нас есть идеи по вариантам его использования. Например мы делаем лицензию на генерацию 1000 страховых полисов в нашей программе 1С, или нам необходимо продавать пакеты для отправки электронных документов, или мы делаем механизм распознания речи, используем сторонний сервис и хотим продавать количество минут транскрибации. Сейчас становятся популярными интеграции с сервисами Искусственного интеллекта и мы хотим реализовать подсчет этих самых токенов и монетизировать их в своих продуктах.

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_8.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_8.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_8_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_8.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: расход токенов"
/>

Если у вас есть идеи по этому функционалу, напишите нам.

### Управление релизами

В системе реализована подсистема управления выпуска и доставки релизов. Реализован новый справочник - дистрибутивы, в котором описываются основные параметры доставляемых продуктов.

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_9.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_9.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_9_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_9.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: справочник Дистрибутивы"
/>

Мы можем указать уникальный идентификатор дистрибутива, название и краткое описание, добавить пользовательское лицензионное соглашение, скриншоты и логотип.

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_10.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_10.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_10_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_10.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Дистрибутива. Описание на русском / Описание на английском"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_11.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_11.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_11_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_11.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Дистрибутива. Скриншоты"
/>

Так же для дистрибутива мы можем указать список продуктов, наличие которых открывает доступ клиентам к данному дистрибутиву из клиентского кабинета.

Чаще всего скачивание дистрибутива - это первая точка входа и работы с продуктами вашей компании, потому в карточке дистрибутива мы можем указать продукт, триал на который будет активироваться при первом скачивании.

Если мы предоставляем продукты по подписке, то мы можем указать фичу, наличие которой открывает доступ к скачиванию. Причем по окончании срока подписки все старые дистрибутивы останутся доступны, а доступ к новым появится только после покупки продления.

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_12.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_12.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_12_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_12.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Дистрибутива. Связанные продукты и фичи"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_13.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_13.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_13_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_13.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Дистрибутива. Основные настройки"
/>

После создания дистрибутива можно публиковать релизы этого дистрибутива. В релизе можно указать совместимые конфигурации 1С, ссылку на файл дистрибутива на вашем хостинге, параметры файла, такие как хеш и размер, а также необходимые метаданные, например мы сохраняем хеш расширения 1С, для проверки его оригинальности при будущих обновлениях.

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_14.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_14.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_14_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_14.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Релиза. Основаные параметры"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_15.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_15.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_15_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_15.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Релиза. Совместимость"
/>

Из кабинета вендора можно управлять доступностью релизов, клиенты получают доступ к релизам в своем лчичном кабинете или через API.

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_16.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_16.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_16_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_16.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: справочник Релизы"
/>

### Rest API для публикации и доставки релизов

Клиенты могут скачивать и устанавливать релизы из своего личного кабинета, но более удобный метод встроить механизм обновления прямо в ваш дистрибутив.

Реализовано описание API для работы с релизами из внешних систем. На этом API мы реализовали обработку автоматической установки и обновления расширений 1С у наших клиентов. Планируем добавить упрощенную версию обработки как пример в состав комплекта вендора.

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_17.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_17.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_17_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_17.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: API для работы с релизами"
/>

### Rest API для получения сведений о продуктах, купонах, сроках

Начали добавлять необходимые API для работы с системой лицензирования программно, в основном они реализуют методы для чтения информации о последних триалах, активациях, истечении сроков продуктов в лицензиях клиентов.

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_18.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_18.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_18_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_18.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: API для получения списка истекающих подписок"
/>

Описание реализованных методов доступно в демонстрационном сервере https://demoprotect.miko.ru

### Аутентификация по ключу доступа (Passkey)

Реализован механизм современной беспарольной аутентификации в кабинете вендора, без входа пароля и отгадывания капчи.

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_19.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_19.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_19_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_19.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Настройки. Мой профиль"
/>

В отличие от паролей, ключи доступа существуют только локально. Их невозможно записать или случайно передать злоумышленнику. Когда вы используете ключ входа, это доказывает, что вы имеете доступ к своему устройству и можете его разблокировать. В совокупности это означает, что ключи защищают также от фишинга, повторного использования паролей или утечки данных. По мнению разработчиков, это более надёжная защита, чем большинство современных методов 2SV (2FA/MFA).

Более подробно про технологию авторизации можно прочитать в статье на хабре https://habr.com/ru/companies/globalsign/articles/745376/

Добавить ключ доступа можно в пункте меню профиль в настройках после стандартной авторизации паролем.

### Кастомизация письма при активации триала

В продукте можно описать текстовое приветсвие, которое получит клиент при активации триала на указанный продукт. Это могут быть инструкции по настройке, контакты менеджера, или информация о стоимости боевой лицензии и порядке приобретения. Вот как это сделано в МИКО.

При активации триала на эту лицензию клиент получит письмо с этим текстом.

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_20.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_20.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_20_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_20.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Продукта. Описание на русском"
/>

### Логирование действий пользователей

Расширен журнал действий пользователей в системе.

Логируются следующие события:
- Изменение данных о клиенте
- Активация купона
- Деактивация купона
- Публикация релиза

<img class="miko-shadow img-zoomable"  
src="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_21.png"
data-original="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_21.png"
srcset="/assets/changelog/changelog-29_07_2024/changelog-29_07_2024_21_prev.png 1x, /assets/changelog/changelog-29_07_2024/changelog-29_07_2024_21.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Настройки. Журнал действий пользователей"
/>