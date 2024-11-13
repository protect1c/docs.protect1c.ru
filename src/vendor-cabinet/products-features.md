---
label: Продукты и Фичи
icon: 
order: -4
---
# Продукты и Фичи

Для создания защищенного продукта с возможностью наложения защиты на отдельные функциональные блоки и последующей продажи с соответствующей защитой, необходимо в системе защиты кода создать фичи для каждого блока функций. Это важно, поскольку при установке защиты на продукт или расширение указывается конкретная фича, к которой применяется ограничение или защита.

## Фичи

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_1.png"
data-original="/assets/vendor-cabinet/products-features/products-features_1.png"
srcset="/assets/vendor-cabinet/products-features/products-features_1_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_1.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: справочник Фичи"
/>

Чтобы добавить новую фичу:
1. Перейдите в пункт меню **Фичи** и нажмите кнопку **Добавить фичу**.
2. **Id фичи** устанавливается автоматически, при необходимости можно изменить.
3. В поле **Название фичи** укажите название фичи, на которую будет накладываться защита.
4. При необходимости заполните поле **Название фичи на английском**, нажав на кнопку Перевести, поле заполнится автоматически.
5. Нажмите **Сохранить**.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_2.png"
data-original="/assets/vendor-cabinet/products-features/products-features_2.png"
srcset="/assets/vendor-cabinet/products-features/products-features_2_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_2.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Фичи"
/>

## Продукты

В данном разделе отображаются все зарегистрированные в системе продукты.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_3.png"
data-original="/assets/vendor-cabinet/products-features/products-features_3.png"
srcset="/assets/vendor-cabinet/products-features/products-features_3_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_3.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: справочник Продукты"
/>

### Карточка продукта
Рассмотрим карточку продукта:
- Информационный блок О продуктах и фичах, который содержит информацию о том, что такое фича, продукт и как они связаны
- Поле **GUID продукта в вашей CRM** в разделе Основные настройки. Здесь указывается уникальный идентификатор продукта для двустороннего обмена. Если планируется обмен данными через REST API с системой лицензирования из CRM или внешней системы, то имеет смысл указать уникальный идентификатор для конкретного продукта.
- Блок **Фичи** в разделе Основные настройки предназначен для указания функций, включённых в продукт, а также для задания лицензионных ограничений на каждую из этих функций. При необходимости можно установить галочку **Множитель**, в дальнейшем при генерации купонов для продажи или размещения в интернет-магазине для данного продукта можно будет указать числовой множитель, который будет умножать указанное в продукте количество.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_4.png"
data-original="/assets/vendor-cabinet/products-features/products-features_4.png"
srcset="/assets/vendor-cabinet/products-features/products-features_4_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_4.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Продукта. Основные настройки"
/>

- В разделе Описание на русском необходимо указать **Название продукта** и **Текст письма об активации продукта клиенту**, в котором можно добавить инструкции по использованию продукта, ссылку на открытую документацию, информацию о стоимости продукта и указания о том, как связаться с поддержкой или обратиться за дополнительной информацией.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_5.png"
data-original="/assets/vendor-cabinet/products-features/products-features_5.png"
srcset="/assets/vendor-cabinet/products-features/products-features_5_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_5.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Продукта. Описание на русском"
/>

- Если вы работаете на международном рынке, заполните **Название продукта на английском** и **Текст письма об активации продукта клиенту на английском** в разделе Описание на английском. Для удобства вы можете воспользоваться кнопкой, которая автоматически переведёт весь блок на английский язык. Система автоматически определяет язык клиента по совокупности факторов, и иностранные клиенты будут получать все письма из системы на английском языке.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_6.png"
data-original="/assets/vendor-cabinet/products-features/products-features_6.png"
srcset="/assets/vendor-cabinet/products-features/products-features_6_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_6.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Продукта. Описание на английском"
/>

- Во вкладке Настройки триала в блоке Параметры генерации триальной лицензии в поле **Выдавать триал на указанное количество дней** указывается, на какое количество дней будет выдаваться триал.
- Дополнительно во вкладке Настройки триала в блоке Параметры генерации триальной лицензии можно установить флажок **Считать каждый календарный день, а не дни когда захватывали фичу**, чтобы учитывать каждый календарный день с момента активации триальной лицензии. Если флажок снять, будут считаться дни реального использования продукта. Также можно установить флажок **Вместо триала выдавать постоянную лицензию без ограничений**, чтобы выдавалась не пробная, а постоянная лицензия. Этот вариант используется редко и обычно применяется для бесплатных продуктов.
- В блоке **Список триалов** во вкладке Настройки триала указывается триальная версия продукта, которую необходимо деактивировать при активации клиентом постоянной версии.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_7.png"
data-original="/assets/vendor-cabinet/products-features/products-features_7.png"
srcset="/assets/vendor-cabinet/products-features/products-features_7_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_7.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Продукта. Настройки триала"
/>

### Создание продукта

+++Создание коммерческой версии продукта (проф или базовая)
Если вы планируете продавать и распространять свой продукт, создайте в системе защиты и лицензирования базовые или профессиональные версии продукта. Кроме того, если вы хотите выпустить расширение к основному продукту, создайте для этого отдельный продукт в системе, так же следуя этому алгоритму.

Для создания продукта в системе защиты и лицензирования:
1. Перейдите в пункт меню Продукты и нажмите кнопку **Добавить продукт**.
2. Во вкладке Описание на русском укажите **Название продукта** и **Текст письма об активации продукта клиенту**.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_9.png"
data-original="/assets/vendor-cabinet/products-features/products-features_9.png"
srcset="/assets/vendor-cabinet/products-features/products-features_9_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_9.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Создание коммерческой версии продукта (проф или базовая). Описание на русском"
/>

3. Во вкладке Описание на английском также заполните Название продукта и Текст письма об активации продукта клиенту, нажав на кнопку для автоматического перевода.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_10.png"
data-original="/assets/vendor-cabinet/products-features/products-features_10.png"
srcset="/assets/vendor-cabinet/products-features/products-features_10_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_10.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Создание коммерческой версии продукта (проф или базовая). Описание на английском"
/>

4. Перейдите к вкладке Основные настройки, укажите в соответствующем блоке **Фичи** и задайте лицензионные ограничения для каждой из них.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_8.png"
data-original="/assets/vendor-cabinet/products-features/products-features_8.png"
srcset="/assets/vendor-cabinet/products-features/products-features_8_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_8.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Создание коммерческой версии продукта (проф или базовая). Основные настройки"
/>

5. При необходимости во вкладке Настройки триала в блоке Список триалов укажите триальную версию продукта, которую необходимо деактивировать при активации клиентом коммерческой версии продукта (проф или базовой).

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_11.png"
data-original="/assets/vendor-cabinet/products-features/products-features_11.png"
srcset="/assets/vendor-cabinet/products-features/products-features_11_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_11.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Создание коммерческой версии продукта (проф или базовая). Настройки триала"
/>

6. Нажмите **Сохранить**.

+++Создание триальной версии продукта
Если вы хотите предоставить клиентам возможность протестировать наш продукт, создайте триальную версию.

Для создания триального продукта в системе:
1. Перейдите в пункт меню Продукты и нажмите кнопку **Добавить продукт**.
2. Во вкладке Описание на русском укажите **Название продукта** и **Текст письма об активации продукта клиенту**.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_13.png"
data-original="/assets/vendor-cabinet/products-features/products-features_13.png"
srcset="/assets/vendor-cabinet/products-features/products-features_13_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_13.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Создание триальной версии продукта. Описание на русском"
/>

3. Во вкладке Описание на английском также заполните Название продукта и Текст письма об активации продукта клиенту, нажав на кнопку для автоматического перевода.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_14.png"
data-original="/assets/vendor-cabinet/products-features/products-features_14.png"
srcset="/assets/vendor-cabinet/products-features/products-features_14_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_14.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Создание триальной версии продукта. Описание на английском"
/>

4. Перейдите к вкладке Основные настройки, укажите в соответствующем блоке **Фичи** и задайте лицензионные ограничения для каждой из них.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_12.png"
data-original="/assets/vendor-cabinet/products-features/products-features_12.png"
srcset="/assets/vendor-cabinet/products-features/products-features_12_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_12.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Создание триальной версии продукта. Основные настройки"
/>

5. Во вкладке Настройки триала в блоке Параметры генерации триальной лицензии укажите, на какое количество дней будет выдаваться триал. Для этого заполните поле **Выдавать триал на указанное количество дней**.
6. Выберите способ расчета дней пробного периода. Во вкладке Настройки триала в блоке Параметры генерации триальной лицензии установите флажок **Считать каждый календарный день, а не дни когда захватывали фичу**, чтобы учитывать каждый календарный день с момента активации триальной лицензии. Если флажок снять, будут считаться дни реального использования продукта.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_15.png"
data-original="/assets/vendor-cabinet/products-features/products-features_15.png"
srcset="/assets/vendor-cabinet/products-features/products-features_15_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_15.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Создание триальной версии продукта. Настройки триала"
/>

7. Нажмите **Сохранить**.

+++

### Варианты учета использования лицензии на программный продукт

Система предоставляет возможность накладывать лицензионные ограничения на защищенный продукт по различным параметрам. Рассмотрим, для каких целей используется каждый из вариантов:
- **Ограничение по количеству пользователей (USER)**. Система учитывает имя пользователя вместе с хостом как отдельную единицу, что удобно для подсчета количества пользователей, использующих ваш программный продукт. Однако при установке защиты на расширение или конфигурацию возможности применения этого варианта существенно ограничены.
- **Ограничение по количеству хостов (HOST)**. Это самый простой вариант, к примеру, если лицензия рассчитана на один хост и у клиента используется сервер 1С, лицензия будет привязана к нему, и расширение можно будет запускать только на этом сервере, независимо от количества информационных баз. 
- **Ограничение по количеству процессов (PROCESS)**. При выборе этого варианта система будет отслеживать количество запущенных процессов с этим расширением. Обычно программа 1С не лицензируется таким образом, этот подход используется для лицензирования специфических модулей или расширений, написанных на C++.
- **Ограничение по количеству токенов (TOKEN)**. Данный вариант подходит для продажи пакетов, например, на распознавание, на генерацию речи, или на определенное количество сформированных печатных форм. Однако этот подход не используется для установки защиты на блоки функций в 1С.
- **Ограничение по количеству баз данных (DATABASE)**. В системе можно настроить защиту на количество баз данных, в которых будет запускаться указанное расширение или продукт.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/products-features/products-features_16.png"
data-original="/assets/vendor-cabinet/products-features/products-features_16.png"
srcset="/assets/vendor-cabinet/products-features/products-features_16_prev.png 1x, /assets/vendor-cabinet/products-features/products-features_16.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Варианты учета использования лицензии на программный продукт"
/>