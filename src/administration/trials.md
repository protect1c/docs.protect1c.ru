---
label: Триалы
icon: 
order: -2
---
# Триалы

Работа с триальными лицензиями и с клиентами с триалами.

### Получение триальной лицензии

Когда клиент заполняет регистрационную карточку внутри программного продукта, он автоматически попадает в систему лицензирования, как новый клиент, и для него генерируется лицензионный ключ. Благодаря тому, что в защищённый модуль был добавлен идентификатор продукта, при создании лицензионного ключа автоматически добавляется триальная лицензия на этот программный продукт.

<img class="miko-shadow img-zoomable"  
src="/assets/administration/trials/trials_1.png"
data-original="/assets/administration/trials/trials_1.png"
srcset="/assets/administration/trials/trials_1_prev.png 1x, /assets/administration/trials/trials_1.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: справочник Клиенты"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/administration/trials/trials_2.png"
data-original="/assets/administration/trials/trials_2.png"
srcset="/assets/administration/trials/trials_2_prev.png 1x, /assets/administration/trials/trials_2.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Получение триальной лицензии"
/>

### Продление триальной лицензии

Если клиент обращается с просьбой продлить триал, ссылаясь на то, что не успел протестировать программный продукт, в системе есть механизм.

Для продления триальной лицензии:
1. Перейдите во вкладку Купоны и нажмите кнопку Генератор купонов.
2. В открывшейся форме укажите Тип купона - **Продлить триал для продукта**.
3. В поле **Продукт** добавьте ваш программный продукт и укажите **Остаток дней**, на который хотите продлить триальную лицензию.
4. При необходимости установите флажок Многоразовый. Это позволяет не генерировать купон для каждого клиента, а использовать один универсальный.
5. Заполните поле **Комментарий**.
6. Нажмите кнопку **Сгенерировать**.

<img class="miko-shadow img-zoomable"  
src="/assets/administration/trials/trials_3.png"
data-original="/assets/administration/trials/trials_3.png"
srcset="/assets/administration/trials/trials_3_prev.png 1x, /assets/administration/trials/trials_3.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Продление триальной лицензии. Генератор купонов"
/>

7. Нажмите кнопку Активировать купон.
8. Укажите лицензионный ключ, для которого продлеваете триальный период, и сгенерированный купон, который надо активировать.
9. Выполните активацию.

<img class="miko-shadow img-zoomable"  
src="/assets/administration/trials/trials_4.png"
data-original="/assets/administration/trials/trials_4.png"
srcset="/assets/administration/trials/trials_4_prev.png 1x, /assets/administration/trials/trials_4.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Продление триальной лицензии. Активация купонов"
/>

После выполнения этих шагов, триальный период клиента будет продлён.

<img class="miko-shadow img-zoomable"  
src="/assets/administration/trials/trials_5.png"
data-original="/assets/administration/trials/trials_5.png"
srcset="/assets/administration/trials/trials_5_prev.png 1x, /assets/administration/trials/trials_5.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Продление триальной лицензии."
/>

### Замена триальной лицензии на коммерческую

Если клиенту понравился программный продукт и он захотел его приобрести, вы можете в системе заменить триальную лицензию на коммерческую, для этого:
1. Во вкладке Купоны найдите заранее подготовленный, не активированный купон на программный продукт. Скопируйте его.
2. Нажмите кнопку Активировать купон.
3. Укажите лицензионный ключ, для которого активируете коммерческую лицензию, и скопированный купон.
4. Выполните активацию.

После выполнения этих действий активируется коммерческая лицензия на программный продукт.

<img class="miko-shadow img-zoomable"  
src="/assets/administration/trials/trials_6.png"
data-original="/assets/administration/trials/trials_6.png"
srcset="/assets/administration/trials/trials_6_prev.png 1x, /assets/administration/trials/trials_6.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Замена триальной лицензии на коммерческую"
/>
