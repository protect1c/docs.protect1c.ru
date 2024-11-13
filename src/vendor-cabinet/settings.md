---
label: Настройки
icon: 
order: -9
---
# Настройки

Рассмотрим настройки системы лицензирования.

!!!primary
Количество пунктов в настройках системы лицензирования зависит от вашего тарифного плана.
!!!

В пункте настроек **API ключи** находится VendoreCode, который используется для установки защиты вашего программного продукта и для инструмента лицензирования.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/settings/settings_1.png"
data-original="/assets/vendor-cabinet/settings/settings_1.png"
srcset="/assets/vendor-cabinet/settings/settings_1_prev.png 1x, /assets/vendor-cabinet/settings/settings_1.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Настройки. API ключи"
/>

Раздел настроек **Методы работы с сервером через REST API** позволяет генерировать неограниченное количество API ключей для доступа к системе лицензирования, просматривать статистику использования и удалять их. Из этого раздела можно перейти к актуальному описанию методов работы с релизами и сервером лицензирования, где представлены эти методы и есть возможность протестировать их.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/settings/settings_2.png"
data-original="/assets/vendor-cabinet/settings/settings_2.png"
srcset="/assets/vendor-cabinet/settings/settings_2_prev.png 1x, /assets/vendor-cabinet/settings/settings_2.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Настройки. Методы работы с сервером через REST API"
/>

В разделе настроек **Управление доступом** можно управлять доступом сотрудников в системе лицензирования: добавлять новых пользователей, блокировать доступ, настраивать права доступа.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/settings/settings_3.png"
data-original="/assets/vendor-cabinet/settings/settings_3.png"
srcset="/assets/vendor-cabinet/settings/settings_3_prev.png 1x, /assets/vendor-cabinet/settings/settings_3.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Настройки. Управление доступом"
/>

Раздел **Настройки SMTP** позволяет настроить использование вашего SMTP сервера для отправки почтовых сообщений. Для низких тарифов этот раздел недоступен.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/settings/settings_4.png"
data-original="/assets/vendor-cabinet/settings/settings_4.png"
srcset="/assets/vendor-cabinet/settings/settings_4_prev.png 1x, /assets/vendor-cabinet/settings/settings_4.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Настройки. Настройки SMTP"
/>

Доступ к разделу **Почтовые шаблоны** также недоступен для низких тарифов. В этом разделе можно настроить внешний вид писем, которые система лицензирования отправляет при различных событиях.

На данный момент система лицензирования отправляет следующие виды писем на английском и русском языке: письма о новом триале, письма об активации купонов, письма о проблемах с лицензиями, письма об истечении срока действия программных продуктов, письма с информацией о выходе новых релизов с указанием, где их можно скачать.

В форме шаблона письма можно изменить тему и содержание сообщения, отправить тестовое письмо, а также восстановить шаблон к виду по умолчанию.
Помимо этого для писем с информацией об истечении срока действия программных продуктов можно указать, с какой периодичностью нужно отправлять это письмо.
Для уведомлений о выходе новых релизов можно задать максимальное количество писем для отправки за один раз и настроить задержку в отправке уведомлений, например, на 3 дня после выхода релиза. Это удобно для плавного развертывания релиза и постепенного оповещения пользователей. В случае отката релиза отправка писем автоматически прекращается.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/settings/settings_5.png"
data-original="/assets/vendor-cabinet/settings/settings_5.png"
srcset="/assets/vendor-cabinet/settings/settings_5_prev.png 1x, /assets/vendor-cabinet/settings/settings_5.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Настройки. Почтовые шаблоны"
/>

В разделе настроек **Журнал действий пользователей** можно просматривать, кто и когда совершил те или иные действия: публикацию релиза, генерацию купона, и т.д. В журнале можно выполнять поиск по имени пользователя, купону, релизу, используя строку быстрого поиска.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/settings/settings_6.png"
data-original="/assets/vendor-cabinet/settings/settings_6.png"
srcset="/assets/vendor-cabinet/settings/settings_6_prev.png 1x, /assets/vendor-cabinet/settings/settings_6.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Настройки. Журнал действий пользователей"
/>

В разделе **Подсистема релизов** можно задать параметры подмены серверов для выдачи релизов, а также указать белый список IP-адресов для доступа к предрелизам. Если сервер поддерживает WebDav, можно задать корневую директорию для хранения релиза и настройки для автоматического удаления релизов. При удалении релиза через API, он автоматически удаляется и с WebDav.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/settings/settings_7.png"
data-original="/assets/vendor-cabinet/settings/settings_7.png"
srcset="/assets/vendor-cabinet/settings/settings_7_prev.png 1x, /assets/vendor-cabinet/settings/settings_7.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Настройки. Подсистема релизов"
/>

Последний пункт настроек - **Мой профиль**. Здесь можно настроить имя, электронную почту, язык системы, логин и ключ доступа для входа в систему лицензирования без пароля. Это удобно, так как позволяет использовать отпечаток пальца, сканирование сетчатки или электронный ключ для быстрого доступа без ввода пароля.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/settings/settings_8.png"
data-original="/assets/vendor-cabinet/settings/settings_8.png"
srcset="/assets/vendor-cabinet/settings/settings_8_prev.png 1x, /assets/vendor-cabinet/settings/settings_8.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Настройки. Мой профиль"
/>