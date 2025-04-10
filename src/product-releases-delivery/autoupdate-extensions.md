---
label: Автообновление расширений
icon: 
order: -2
---
# Автообновление расширений

Механизм автообновления предназначен для автоматической проверки наличия обновлений установленного расширения при открытии страницы. Если новая версия доступна, пользователю предоставляется возможность установить обновление через интерфейс.

Рассмотрим процесс работы механизма обновления:
1. **Проверка наличия обновлений**. При открытии страницы выполняется автоматический запрос к серверу для проверки наличия новых версий расширения.
2. **Отображение информации о новой версии**. При наличии новой версии расширения, пользователь увидит информацию о доступной версии расширения и краткое описание изменений.
3. **Установка обновления**. Система предложит установить обновление расширения, появится кнопка **Установить обновление**. После нажатия на кнопку произойдет автоматическая установка обновления.

## Проверка работы автообновления расширений

После [запуска установщика расширений](/product-releases-delivery/extension-installer/) _DEMO_1CExtension_installer_4.13.epf_ из демо комплекта перейдем к проверке работы механизма автообновления расширений на примере демонстрационной базы _КошкинДом.dt_.

1. Запустите демо базу КошкинДом в режиме предприятия.
2. На странице Регистрация продукта укажите лицензионный ключ.

<img class="miko-shadow img-zoomable"  
src="/assets/product-releases-delivery/autoupdate-extensions/autoupdate-extensions_1.png"
data-original="/assets/product-releases-delivery/autoupdate-extensions/autoupdate-extensions_1.png"
srcset="/assets/product-releases-delivery/autoupdate-extensions/autoupdate-extensions_1.png 1x, /assets/product-releases-delivery/autoupdate-extensions/autoupdate-extensions_1.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Заполнение лицензионного ключа"
/>

3. Перейдите к вкладке Обновление расширения (Доступно с версии расширения 0.0.0.3).

<img class="miko-shadow img-zoomable"  
src="/assets/product-releases-delivery/autoupdate-extensions/autoupdate-extensions_2.png"
data-original="/assets/product-releases-delivery/autoupdate-extensions/autoupdate-extensions_2.png"
srcset="/assets/product-releases-delivery/autoupdate-extensions/autoupdate-extensions_2.png 1x, /assets/product-releases-delivery/autoupdate-extensions/autoupdate-extensions_2.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Проверка наличия обновлений"
/>

4. Нажмите Установить обновление.
5. Для применения обновления перезагрузите сеанс 1С.

<img class="miko-shadow img-zoomable"  
src="/assets/product-releases-delivery/autoupdate-extensions/autoupdate-extensions_3.png"
data-original="/assets/product-releases-delivery/autoupdate-extensions/autoupdate-extensions_3.png"
srcset="/assets/product-releases-delivery/autoupdate-extensions/autoupdate-extensions_3.png 1x, /assets/product-releases-delivery/autoupdate-extensions/autoupdate-extensions_3.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Применение обновления"
/>