---
label: Установщик расширений
icon: 
order: -1
---
# Установщик расширений

Установщик расширений - это внешняя обработка для 1С. Установщик предназначен для проверки лицензионного ключа и получения списка доступных расширений для установки или скачивания.

Процесс работы установщика:
1. **Проверка лицензионного ключа**. Установщик принимает лицензионный ключ и проверяет наличие доступных пользователю версий.

<img class="miko-shadow img-zoomable"  
src="/assets/product-releases-delivery/extension-installer/extension-installer_1.png"
data-original="/assets/product-releases-delivery/extension-installer/extension-installer_1.png"
srcset="/assets/product-releases-delivery/extension-installer/extension-installer_1_prev.png 1x, /assets/product-releases-delivery/extension-installer/extension-installer_1.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Проверка лицензионного ключа"
/>

2. **Получение списка доступных расширений**. После успешной проверки лицензионного ключа установщик выполняет запрос к серверу для получения списка доступных расширений. В запросе передается информация о текущем релизе и названии конфигурации.
3. **Вывод списка расширений пользователю**. Установщик отображает список доступных расширений.

<img class="miko-shadow img-zoomable"  
src="/assets/product-releases-delivery/extension-installer/extension-installer_2.png"
data-original="/assets/product-releases-delivery/extension-installer/extension-installer_2.png"
srcset="/assets/product-releases-delivery/extension-installer/extension-installer_2_prev.png 1x, /assets/product-releases-delivery/extension-installer/extension-installer_2.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Вывод списка доступных расширений"
/>

4. **Установка или скачивание расширений**. Из списка доступных версий пользователь может выбрать расширение и сразу установить его или скачать для последующей ручной установки.

<img class="miko-shadow img-zoomable"  
src="/assets/product-releases-delivery/extension-installer/extension-installer_3.png"
data-original="/assets/product-releases-delivery/extension-installer/extension-installer_3.png"
srcset="/assets/product-releases-delivery/extension-installer/extension-installer_3_prev.png 1x, /assets/product-releases-delivery/extension-installer/extension-installer_3.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Установка расширения"
/>