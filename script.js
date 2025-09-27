document.getElementById('link').addEventListener('click', function(event) {
        // Предотвращаем стандартное действие ссылки (переход и изменение URL)
        event.preventDefault();

        // Находим целевой элемент
        const targetElement = document.getElementById('questions');

        // Прокручиваем к целевому элементу
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Для плавной прокрутки
            });
        }
    });