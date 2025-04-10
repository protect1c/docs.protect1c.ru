---
label: Установщик расширений
icon: 
order: -1
---
# Установщик расширений

Установщик расширений - это внешняя обработка для 1С. Установщик предназначен для проверки лицензионного ключа и получения списка доступных расширений для установки или скачивания.

Процесс работы установщика:
1. **Проверка лицензионного ключа**. Установщик принимает лицензионный ключ и проверяет наличие доступных пользователю версий.
2. **Получение списка доступных расширений**. После успешной проверки лицензионного ключа установщик выполняет запрос к серверу для получения списка доступных расширений. В запросе передается информация о текущем релизе и названии конфигурации.
3. **Вывод списка расширений пользователю**. Установщик отображает список доступных расширений.
4. **Установка или скачивание расширений**. Из списка доступных версий пользователь может выбрать расширение и сразу установить его или скачать для последующей ручной установки.

## Проверка работы установщика расширений

Для проверки работы установщика расширений необходим лицензионный ключ.
Если у клиента уже есть лицензионный ключ, можно использовать его. Если ключа нет, его можно создать в кабинете вендора, для этого:

1. Перейдите по ссылке https://demoprotect.miko.ru/vendor-cabinet/index
2. На вкладке Клиенты нажмите кнопку Добавить нового клиента и заполните поля: название компании, имя, телефон и e-mail контактного лица. Нажмите Сохранить.

<img class="miko-shadow img-zoomable"  
src="/assets/product-releases-delivery/extension-installer/extension-installer_1.png"
data-original="/assets/product-releases-delivery/extension-installer/extension-installer_1.png"
srcset="/assets/product-releases-delivery/extension-installer/extension-installer_1.png 1x, /assets/product-releases-delivery/extension-installer/extension-installer_1.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Добавление нового клиента"
/>

3. Сгенерируйте ключ. В карточке клиента нажмите кнопку Генерация нового лицензионного ключа. Для клиента будет сформирован пустой лицензионный ключ, в котором не будет никаких продуктов.

<img class="miko-shadow img-zoomable"  
src="/assets/product-releases-delivery/extension-installer/extension-installer_2.png"
data-original="/assets/product-releases-delivery/extension-installer/extension-installer_2.png"
srcset="/assets/product-releases-delivery/extension-installer/extension-installer_2.png 1x, /assets/product-releases-delivery/extension-installer/extension-installer_2.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Генерация нового лицензионного ключа"
/>

4. Создайте купон для добавления продукта в лицензионный ключ. Перейдите во вкладку Купоны и нажмите кнопку Генератор купонов.
5. В открывшейся форме укажите Тип купона - Добавить продукт, в поле Продукт добавьте продукт _Защита БД КошкинДом_ для работы расширения. Нажмите кнопку Сгенерировать. Сохраните полученный купон.

<img class="miko-shadow img-zoomable"  
src="/assets/product-releases-delivery/extension-installer/extension-installer_3.png"
data-original="/assets/product-releases-delivery/extension-installer/extension-installer_3.png"
srcset="/assets/product-releases-delivery/extension-installer/extension-installer_3.png 1x, /assets/product-releases-delivery/extension-installer/extension-installer_3.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Генерация купона"
/>

6. Перейдите во вкладку Купоны и нажмите кнопку Активировать купон, затем в открывшейся форме введите лицензионный ключ клиента и сохраненный сгенерированный купон, выполните активацию.

Перейдем к проверке работы установщика расширений на примере демонстрационной базы _КошкинДом.dt_ и установщика расширений _DEMO_1CExtension_installer_4.13.epf_ из демо комплекта.

1. Запустите демо базу КошкинДом в режиме предприятия.
2. В главном меню выполните Файл / Открыть и выберите обработку DEMO_1CExtension_installer_4.13.epf.

<img class="miko-shadow img-zoomable"  
src="/assets/product-releases-delivery/extension-installer/extension-installer_4.png"
data-original="/assets/product-releases-delivery/extension-installer/extension-installer_4.png"
srcset="/assets/product-releases-delivery/extension-installer/extension-installer_4.png 1x, /assets/product-releases-delivery/extension-installer/extension-installer_4.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Запуск обработки установщика расширений"
/>

3. Ответьте утвердительно на предупреждение безопасности.
4. На странице Проверка доступных версий вставьте лицензионный ключ в одноименное поле и нажмите Далее.

<img class="miko-shadow img-zoomable"  
src="/assets/product-releases-delivery/extension-installer/extension-installer_5.png"
data-original="/assets/product-releases-delivery/extension-installer/extension-installer_5.png"
srcset="/assets/product-releases-delivery/extension-installer/extension-installer_5.png 1x, /assets/product-releases-delivery/extension-installer/extension-installer_5.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Ввод лицензионного ключа"
/>

5. Выберите версию расширения, если их несколько и выполните Установить.

<img class="miko-shadow img-zoomable"  
src="/assets/product-releases-delivery/extension-installer/extension-installer_6.png"
data-original="/assets/product-releases-delivery/extension-installer/extension-installer_6.png"
srcset="/assets/product-releases-delivery/extension-installer/extension-installer_6.png 1x, /assets/product-releases-delivery/extension-installer/extension-installer_6.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Выбор версии расширения"
/>

6. Ознакомьтесь с лицензионным соглашением и примите условия.
7. Начнется установка расширения. После окончания установки перезагрузите информационную базу.

<img class="miko-shadow img-zoomable"  
src="/assets/product-releases-delivery/extension-installer/extension-installer_7.png"
data-original="/assets/product-releases-delivery/extension-installer/extension-installer_7.png"
srcset="/assets/product-releases-delivery/extension-installer/extension-installer_7.png 1x, /assets/product-releases-delivery/extension-installer/extension-installer_7.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Установка расширения"
/>