const element = document.getElementById("questionsLink");

element.addEventListener("click", function (event) {
  // Предотвращаем стандартное действие ссылки
  event.preventDefault();

  // Находим целевой элемент
  const targetElement = document.getElementById("questions");

  // Плавная прокрутка к целевому элементу
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth"
    });
  }
});
