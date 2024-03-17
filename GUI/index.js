document.addEventListener('DOMContentLoaded', () => {
  // Обработка событий формы генерации массива
  document.getElementById('user_data').addEventListener('submit', (event) => {
    event.preventDefault()

    // Получение значений полей ввода
    const lenLimit = document.getElementById('lenLimit').value
    const minLimit = document.getElementById('minLimit').value
    const maxLimit = document.getElementById('maxLimit').value
  })
  // Обработка событий формы сортировки массива
  document.getElementById('sorting').addEventListener('submit', (event) => {
    event.preventDefault()

    // Получение выбранного метода сортировки
    const sortType = document.querySelector(
      'input[name="sort_type"]:checked',
    ).value

    // Сортировка массива
    switch (sortType) {
      case 'selectionSort':
        array.selectionSort()
        break
      case 'insertionSort':
        array.insertionSort()
        break
      case 'quickSort':
        array.quickSort()
        break
      case 'bubbleSort':
        array.bubbleSort()
        break
    }
  })
  // Обработка событий формы поиска элемента
  document.getElementById('searching').addEventListener('submit', (event) => {
    event.preventDefault()

    // Получение значения элемента для поиска
    const searchElement = document.getElementById('search_elem').value

    // Получение выбранного метода поиска
    const searchMethod = document.getElementById('search_method').value

    // Поиск элемента в массиве
    switch (searchMethod) {
      case 'linear_search':
        array.linearSearch(searchElement)
        break
      case 'binary_search':
        array.binarySearch(searchElement)
        break
      case 'max_search':
        array.maxSearch()
        break
    }
  })
})
