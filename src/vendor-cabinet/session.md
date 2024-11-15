---
label: Монитор сессий
icon: 
order: -6
---
# Монитор сессий
Когда клиенты начинают использовать программные продукты и запускают защищенные приложения, происходит регистрация программно-аппаратных комплексов клиентов, делаются слепки из их параметров и привязывается лицензия.

Чтобы отследить привязки лицензий и управлять ими есть специальный раздел Монитор сессий.
Перейти в монитор сессий можно:
- через соответствующий пункт меню Монитор сессий;
- из интерфейса лицензионного ключа, нажав на кнопку Показать текущие сеансы;
- из карточки клиента, нажав на иконку Показать текущие сеансы.

Во вкладке **Активные сессии** отображаются все текущие сессии. Нажав на иконку со значком **i**, можно подробно изучить параметры слепков, информацию о машине, с которой запускалось приложение, и время запуска. В этой же вкладке доступна информация о том, какой функционал использует каждый пользователь.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/session/session_1.png"
data-original="/assets/vendor-cabinet/session/session_1.png"
srcset="/assets/vendor-cabinet/session/session_1_prev.png 1x, /assets/vendor-cabinet/session/session_1.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Монитор сессий. Активные сессии"
/>

Отсюда можно выполнить сброс привязок. После выполнения сброса лицензия исчезнет из монитора сессий и станет свободной. При попытке захвата лицензии, она снова появится в активных сессиях.
Клиент может самостоятельно выполнить сброс через личный кабинет или обратиться в техподдержку вендора. Вендор проверяет причину блокировки и выполняет сброс привязки.

Это может понадобиться, если клиент обновил сервер и планирует работать с нового сервера. Без сброса привязки программа заблокирует использование программного продукта, так как в лицензии заложено ограничение на количество допустимых хостов.

Во вкладке **История сессий по этому ключу** отображается статистика захвата различных функций разными пользователями с разных компьютеров за последний день.

<img class="miko-shadow img-zoomable"  
src="/assets/vendor-cabinet/session/session_2.png"
data-original="/assets/vendor-cabinet/session/session_2.png"
srcset="/assets/vendor-cabinet/session/session_2_prev.png 1x, /assets/vendor-cabinet/session/session_2.png 2x"
alt="Система защиты и лицензированния кода МИКО для 1С: Монитор сессий. История сессий по этому ключу"
/>