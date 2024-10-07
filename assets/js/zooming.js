function initializeZooming() {
    // Проверка ширины окна и загрузка библиотеки Zooming, если она еще не загружена
    if (window.innerWidth > 500) {
        if (typeof Zooming === 'undefined') {
            head.load('https://cdnjs.cloudflare.com/ajax/libs/zooming/2.1.1/zooming.js', function () {
                var zooming = new Zooming();
                zooming.listen('.img-zoomable');
            });
        } else {
            // Если библиотека уже загружена, просто применяем зум к элементам
            var zooming = new Zooming();
            zooming.listen('.img-zoomable');
        }
    }
}

// Инициализация Zooming при загрузке страницы через Turbo
document.addEventListener("turbo:load", function() {
    requestAnimationFrame(initializeZooming);
});
