---
label: Установка защиты кода конфигурации 1С
icon: 
order: -2
---
# Установка защиты кода конфигурации 1С

Для защиты конфигурации 1С понадобится:

- создать и зарегистрировать свой программный продукт в личном кабинете на сайте https://lm.miko.ru
- установить на свой компьютер инструмент для защиты продукта
- добавить в ваш продукт форму активации лицензии и вспомогательные модули системы лицензирования.

В данной инструкции рассмотрим всю процедуру защиты конфигурации 1С на примере демонстрационной базы _КошкинДом.dt_. Для защиты выберем модуль _КотыСервер_ этой конфигурации. В модуле расположен код для выборки записей из регистра, в котором хранятся клички котов.

## Регистрация продукта в личном кабинете

Для начала необходимо создать и настроить продукт в личном кабинете разработчика.

1. Откройте личный кабинет на сайте https://lm.miko.ru.
2. Перейдите на страницу **Фичи** и добавьте новую фичу.
3. В поле Название фичи введите ее имя.
4. Идентификатор фичи присваивается автоматически, при необходимости можно указать произвольный в поле ID фичи.

<img class="miko-shadow img-zoomable"  
src="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_1.png"
data-original="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_1.png"
srcset="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_1_prev.png 1x, /assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_1.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: добавление Фичи"
/>

5. Далее перейдите к странице **Продукты**, добавьте новый продукт.
6. Введите название вашего продукта.

<img class="miko-shadow img-zoomable"  
src="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_2.png"
data-original="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_2.png"
srcset="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_2_prev.png 1x, /assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_2.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: добавление Продукта"
/>

7. На вкладке Основные настройки укажите созданную ранее фичу и ограничение лицензии по количеству пользователей, хостов, или баз данных.
8. Идентификатор продукта присваивается автоматически.

<img class="miko-shadow img-zoomable"  
src="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_3.png"
data-original="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_3.png"
srcset="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_3_prev.png 1x, /assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_3.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: добавление Фичи в Продукт"
/>

## Подготовка конфигурации

Перейдем к защищаемой конфигурации 1С.

1. Откройте вашу конфигурацию в режиме конфигуратор.
2. Определите модули конфигурации 1С, доступ к которым будет запрещен.

<img class="miko-shadow img-zoomable"  
src="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_4.png"
data-original="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_4.png"
srcset="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_4_prev.png 1x, /assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_4.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: выбор модуля, доступ к которому будет запрещен"
/>

3. Укажите, что выбранные модули будут поставляться без исходных кодов. Для этого настройте поставку конфигурации: Конфигурация - Поставка конфигурации - Настройка поставки.
4. В режиме сравнить/объединить перенесите в свою конфигурацию объекты конфигурации **МИКО: Защита конфигураций**: общий модуль **МИКО_Лицензирование**, общая форма **МИКО_РегистрацияПродукта** и общая команда **МИКО_РегистрацияПродукта**. Префикс МИКО_ может быть изменен на произвольный. После переименования объектов, убедитесь, что новые имена используются в исходном коде.
5. Откройте код общей формы регистрации продукта и замените значение в функции **ОсновнаяФича** на ID фичи и значение в функции **ИдентификаторТриальногоПродукта** на ID продукта.

<img class="miko-shadow img-zoomable"  
src="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_5.png"
data-original="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_5.png"
srcset="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_5_prev.png 1x, /assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_5.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: заполнение ОсновнаяФича и ИдентификаторТриальногоПродукта"
/>

6. Выгрузите полученную конфигурацию в файл с расширением .**cf**.

## Установка защиты

Перейдем к инструменту защиты конфигураций **МИКО_ЗащитаКонфигураций**.

1. Откройте вкладку **Настройки программы**.
2. Заполните поля Префикс разработчика и Код поставщика значениями из своего личного кабинета Настройки - API ключи.

<img class="miko-shadow img-zoomable"  
src="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_6.png"
data-original="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_6.png"
srcset="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_6_prev.png 1x, /assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_6.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Префикс разработчика и Код поставщика значениями в личном кабинете"
/>

3. Укажите префикс метаданных МИКО_, если префикс был изменен на произвольный, укажите его.
4. Нажмите кнопку **Записать**.

<img class="miko-shadow img-zoomable"  
src="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_7.png"
data-original="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_7.png"
srcset="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_7_prev.png 1x, /assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_7.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: заполнение полей во вкладке Настройки программы"
/>

5. В справочнике **Фичи** продублируйте фичи, указав ID фичи и ее наименование, как при регистрации в личном кабинете в разделе Фичи.

<img class="miko-shadow img-zoomable"  
src="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_8.png"
data-original="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_8.png"
srcset="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_8_prev.png 1x, /assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_8.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: добавление Фичи в справочнике в 1С"
/>

6. Перейдите к разделу **Конфигурации и расширения** и добавьте конфигурацию, выбрав ранее подготовленный cf файл. Дождитесь окончания загрузки файла.

<img class="miko-shadow img-zoomable"  
src="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_9.png"
data-original="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_9.png"
srcset="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_9_prev.png 1x, /assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_9.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: добавление выгруженной конфигурации в 1С"
/>

7. Откройте загруженный образ конфигурации.
8. Для модулей, закрытых паролем, будет возможность указать, необходимую для их выполнения фичу. Назначьте функциям их фичи. Фичи назначаются отдельно для каждой функции модуля.

<img class="miko-shadow img-zoomable"  
src="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_10.png"
data-original="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_10.png"
srcset="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_10_prev.png 1x, /assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_10.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: заполнение необходимой фичи для выполнения модулей"
/>

9. Выполните команду Установить защиту.

<img class="miko-shadow img-zoomable"  
src="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_11.png"
data-original="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_11.png"
srcset="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_11_prev.png 1x, /assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_11.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: выполнение команды Установить защиту"
/>

10. В результате будет создан файл с окончанием **.protect.cf**.

## Проверка результатов
После выполнения всех этапов осталось проверить полученные результаты.

1. Откройте вашу конфигурацию, для которой устнавливается защита, в режиме конфигуратор.
2. Выполните Конфигурация - Сравнить и объединить с конфигурацией из файла. Выберите файл конфигурации с окончанием .protect.cf и нажмите Выполнить.
3. Убедитесь, что текст защищенного модуля стал недоступен.
4. Запустите информационную базу в режиме предприятия и попробуйте открыть один из элементов справочника _Котики_ или создать нового. На экране появится сообщение об ошибке: **Не указан лицензионный ключ**.

<img class="miko-shadow img-zoomable"  
src="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_12.png"
data-original="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_12.png"
srcset="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_12_prev.png 1x, /assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_12.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: проверка результатов"
/>

Для дальнейшей работы со справочником _Котики_ необходимо зарегистрироваться в Системе защиты и лицензирования кода и получить Лицензионный ключ. Для этого:

5. Откройте пункт **Регистрация продукта** внутри вашего продукта.
6. Нажмите кнопку **Перейти к регистрации клиента…** и заполните анкету нового клиента.
7. Нажмите кнопку **Зарегистрировать**. Если данные введены корректно, то система выдаст новый лицензионный ключ.

<img class="miko-shadow img-zoomable"  
src="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_13.png"
data-original="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_13.png"
srcset="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_13_prev.png 1x, /assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_13.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: успешная регистрация клиента"
/>

8. Убедитесь, что создаются новые элементы справочника _Котики_ и  открываются уже существующие.<br>При этом будет создана сессия с сервером лицензирования и произведен захват фичи, что можно проверить в личном кабинете на сайте https://lm.miko.ru в разделе Монитор сессий. При завершении работы с программой 1С, фича будет освобождена, а сессия завершена.

<img class="miko-shadow img-zoomable"  
src="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_14.png"
data-original="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_14.png"
srcset="/assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_14_prev.png 1x, /assets/protect-1c-code/protect-1c-configuration/protect-1c-configuration_14.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: захват фичи в Мониторе сессий"
/>