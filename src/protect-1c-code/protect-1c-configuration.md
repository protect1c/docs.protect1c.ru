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
5. Далее перейдите к странице **Продукты**, добавьте новый продукт.
6. Введите название вашего продукта.
7. На вкладке Основные настройки укажите созданную ранее фичу и ограничение лицензии по количеству пользователей, хостов, или баз данных.
8. Идентификатор продукта присваивается автоматически.

## Подготовка конфигурации

Перейдем к защищаемой конфигурации 1С.

1. Откройте вашу конфигурацию в режиме конфигуратор.
2. Определите модули конфигурации 1С, доступ к которым будет запрещен.
3. Укажите, что выбранные модули будут поставляться без исходных кодов. Для этого настройте поставку конфигурации: Конфигурация - Поставка конфигурации - Настройка поставки.
4. В режиме сравнить/объединить перенесите в свою конфигурацию объекты конфигурации **МИКО: Защита конфигураций**: общий модуль **МИКО_Лицензирование**, общая форма **МИКО_РегистрацияПродукта** и общая команда **МИКО_РегистрацияПродукта**. Префикс МИКО_ может быть изменен на произвольный. После переименования объектов, убедитесь, что новые имена используются в исходном коде.
5. Откройте код общей формы регистрации продукта и замените значение в функции **ОсновнаяФича** на ID фичи и значение в функции **ИдентификаторТриальногоПродукта** на ID продукта.
6. Выгрузите полученную конфигурацию в файл с расширением .**cf**.

## Установка защиты

Перейдем к инструменту защиты конфигураций **МИКО_ЗащитаКонфигураций**.

1. Откройте вкладку **Настройки программы**.
2. Заполните поля Префикс разработчика и Код поставщика значениями из своего личного кабинета Настройки - API ключи.
3. Укажите префикс метаданных МИКО_, если префикс был изменен на произвольный, укажите его.
4. В справочнике Фичи продублируйте фичи, указав ID фичи и ее наименование, как при регистрации в личном кабинете в разделе Фичи.
5. Перейдите к разделу Конфигурации и расширения и добавьте конфигурацию, выбрав ранее подготовленный cf файл. Дождитесь окончания загрузки файла.
6. Откройте загруженный образ конфигурации.
7. Для модулей, закрытых паролем, будет возможность указать, необходимую для их выполнения фичу. Назначьте функциям их фичи. Фичи назначаются отдельно для каждой функции модуля.
8. Выполните команду Установить защиту.
9. В результате будет создан файл с окончанием **.protect.cf**.

## Проверка результатов
После выполнения всех этапов осталось проверить полученные результаты.

1. Откройте вашу конфигурацию, для которой устнавливается защита, в режиме конфигуратор.
2. Выполните Конфигурация - Сравнить и объединить с конфигурацией из файла. Выберите файл конфигурации с окончанием .protect.cf и нажмите Выполнить.
3. Убедитесь, что текст защищенного модуля стал недоступен.
4. Запустите информационную базу в режиме предприятия и попробуйте открыть один из элементов справочника _Котики_ или создать нового. На экране появится сообщение об ошибке: **Не указан лицензионный ключ**.

Для дальнейшей работы со справочником _Котики_ необходимо зарегистрироваться в Системе защиты и лицензирования кода и получить Лицензионный ключ. Для этого:

5. Откройте пункт **Регистрация продукта** внутри вашего продукта.
6. Нажмите кнопку **Перейти к регистрации клиента…** и заполните анкету нового клиента.
7. Нажмите кнопку **Зарегистрировать**. Если данные введены корректно, то система выдаст новый лицензионный ключ.
8. Убедитесь, что создаются новые элементы справочника _Котики_ и  открываются уже существующие.<br>При этом будет создана сессия с сервером лицензирования и произведен захват фичи, что можно проверить в личном кабинете на сайте https://lm.miko.ru в разделе Монитор сессий. При завершении работы с программой 1С, фича будет освобождена, а сессия завершена.