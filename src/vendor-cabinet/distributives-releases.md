---
label: Дистрибутивы и Релизы
icon: 
order: -3
---
# Дистрибутивы и Релизы

Cистема релизов, реализованная в механизме лицензирования, предоставляет возможность выпускать, распространять и управлять релизами через удобный интерфейс.

Она состоит из нескольких ключевых компонентов:
- **Справочник дистрибутивов** — это глобальное хранилище всех выпускаемых программных продуктов.
- **Справочник релизов** — здесь находятся релизы программных продуктов, привязанные к соответствующим дистрибутивам.
- **API для управления релизами** — с его помощью можно прямо из 1С:Предприятие выполнять запросы для получения информации о дистрибутиве, а также программно загружать новые дистрибутивы напрямую из среды разработки.
## Дистрибутивы
Начало работы со справочником Дистрибутивы начинается с создания нового дистрибутива.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/distributives-releases/distributives-releases_1.png"
data-original="/assets/vendor-cabinet/distributives-releases/distributives-releases_1.png"
srcset="/assets/vendor-cabinet/distributives-releases/distributives-releases_1_prev.png 1x, /assets/vendor-cabinet/distributives-releases/distributives-releases_1.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: справочник Дистрибутивы"
/>

### Карточка дистрибутива

Рассмотрим карточку дистрибутива.

Вкладка **Основные настройки** содержит следующую информацию:
- Флажок **Опубликован, все релизы доступны пользователям** позволяет глобально опубликовать все релизы этого дистрибутива либо скрыть их.
- Уникальный **Идентификатор** - это последовательность символов, которая будет в дальнейшем использоваться для получения релизов по конкретному дистрибутиву.
- Флажок **Платный дистрибутив** разделяет платные и бесплатные дистрибутивы.
- В поле **Разработчик** можно указать разработчика, если вы распространяете приложения нескольких разработчиков.
- **Тип дистрибутива**.
- Также можно указать **Дополнительную информацию**, которая будет передана в API.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/distributives-releases/distributives-releases_2.png"
data-original="/assets/vendor-cabinet/distributives-releases/distributives-releases_2.png"
srcset="/assets/vendor-cabinet/distributives-releases/distributives-releases_2_prev.png 1x, /assets/vendor-cabinet/distributives-releases/distributives-releases_2.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Дистрибутива. Основные настройки"
/>

Вкладки **Описание на русском / Описание на английском**:
- **Название** для каждого дистрибутива указывается короткое название на русском и английском языках.
- Также для дистрибутивов создаётся **Описание** на русском и английском языках, которое отображается в списке дистрибутивов.
- **Ссылка на страницу документации**.
- **Пользовательское лицензионное соглашение**.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/distributives-releases/distributives-releases_3.png"
data-original="/assets/vendor-cabinet/distributives-releases/distributives-releases_3.png"
srcset="/assets/vendor-cabinet/distributives-releases/distributives-releases_3_prev.png 1x, /assets/vendor-cabinet/distributives-releases/distributives-releases_3.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Дистрибутива. Описание на русском / Описание на английском"
/>

Переходим к вкладке **Связанные продукты и фичи**:
- **Фича, которую проверяем для выдачи релизов** - в этом поле указывается фича. Если данная фича присутствует в лицензионном ключе пользователя, ему становятся доступны для скачивания этот дистрибутив и все его релизы, как через личный кабинет, так и через программное API.
  Если у пользователя была активна подписка на фичу, но она истекла, доступ к дистрибутиву и его релизам сохраняется, но только в рамках периода, когда данная фича была активной.
- В поле **Продукт для генерации триала на подписку** указывается продукт. Если нужная функция отсутствует в лицензионном ключе пользователя, система получает идентификатор продукта, указанный в этом поле, и пытается сгенерировать триальную лицензию. Если клиент ранее не получал триал, у него в ключе появляется этот триальный продукт, и он получает доступ к релизам данного дистрибутива.
- В таблице **Связанные с дистибутивом продукты** можно привязать продукты к дистрибутиву. Если какой-либо из, указанных в этой таблице, продуктов есть у пользователя, ему будут доступны все релизы этого дистрибутива в личном кабинете.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/distributives-releases/distributives-releases_4.png"
data-original="/assets/vendor-cabinet/distributives-releases/distributives-releases_4.png"
srcset="/assets/vendor-cabinet/distributives-releases/distributives-releases_4_prev.png 1x, /assets/vendor-cabinet/distributives-releases/distributives-releases_4.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Дистрибутива. Связанные продукты и фичи"
/>

Последняя вкладка в карточке дистрибутива - **Скриншоты**:
- Здесь можно добавить логотип дистрибутива и прикрепить несколько скриншотов, чтобы пользователь мог просмотреть детальную карточку дистрибутива прямо в своей системе, где он устанавливает защищённый дистрибутив.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/distributives-releases/distributives-releases_5.png"
data-original="/assets/vendor-cabinet/distributives-releases/distributives-releases_5.png"
srcset="/assets/vendor-cabinet/distributives-releases/distributives-releases_5_prev.png 1x, /assets/vendor-cabinet/distributives-releases/distributives-releases_5.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Дистрибутива. Скриншоты"
/>

## Релизы

Вся необходимая информация о релизе заполняется автоматически через API-запрос, что исключает необходимость ручного ввода данных. Вы просто выполняете API-запрос из системы, в которой подготавливаете релиз, и система лицензирования заполняет все необходимые поля.

Во вкладке Релизы отображается следующая информация:
- дата выпуска,
- название и тип модуля, которые берутся из дистрибутива,
- версии релизов в хронологическом порядке,
- информация о внесённых изменениях,
- количество скачиваний каждого модуля.

!!!primary
При необходимости можно подредактировать эту информацию в карточке релиза
!!!

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/distributives-releases/distributives-releases_6.png"
data-original="/assets/vendor-cabinet/distributives-releases/distributives-releases_6.png"
srcset="/assets/vendor-cabinet/distributives-releases/distributives-releases_6_prev.png 1x, /assets/vendor-cabinet/distributives-releases/distributives-releases_6.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: справочник Релизы"
/>

В личном кабинете пользователя представлен аналогичный список, но он ограничен только теми дистрибутивами, на которые у пользователя есть соответствующие программные продукты. У вендора доступен полный список дистрибутивов, а у каждого пользователя — только те, которые связаны с его продуктами.

### Карточка релиза

Карточка релиза содержит следующие поля:
- Флажок **Предрелиз, не доступен клиентам** указывает, что данный релиз еще не является финальным и не доступен для клиентов. Вы можете скрыть релиз, а затем, в нужный момент, снять этот флажок, и релиз станет доступным клиентам через API.
- В поле **Что нового в этом релизе** находится информация о внесённых изменениях на русском и английском языках.
- Указывается соответствующий **Дистрибутив**.
- **Дата релиза**.
- **Версия** этого релиза.
- **Cсылка для скачивания** на внешний ресурс, **размер** и **контрольная сумма файла**.  Система в настоящее время не хранит файлы релизов. Вы размещаете их на своих ресурсах, а в системе указываете только ссылку на файл, его размер и контрольную сумму для последующего сравнения внутри вашего приложения.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/distributives-releases/distributives-releases_7.png"
data-original="/assets/vendor-cabinet/distributives-releases/distributives-releases_7.png"
srcset="/assets/vendor-cabinet/distributives-releases/distributives-releases_7_prev.png 1x, /assets/vendor-cabinet/distributives-releases/distributives-releases_7.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Релиза. Основаные параметры"
/>

- **Требуемая версия окружения**. Внутри вашего приложения каждый день происходит регламентная операция, которая отправляет информацию о версии окружения, включая текущие версии конфигурации и установленных компонентов, и запрашивает наличие новых подходящих релизов. В ответ система лицензирования возвращает список доступных для установки релизов, если такие имеются.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/distributives-releases/distributives-releases_8.png"
data-original="/assets/vendor-cabinet/distributives-releases/distributives-releases_8.png"
srcset="/assets/vendor-cabinet/distributives-releases/distributives-releases_8_prev.png 1x, /assets/vendor-cabinet/distributives-releases/distributives-releases_8.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: карточка Релиза. Совместимость"
/>