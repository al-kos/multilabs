document.addEventListener('DOMContentLoaded', () => {
  // Обработка событий формы генерации массива
  document.getElementById('user_data').addEventListener('submit', (event) => {
    event.preventDefault()

    // Получение значений полей ввода
    const lenLimit = document.getElementById('lenLimit').value
    const minLimit = document.getElementById('minLimit').value
    const maxLimit = document.getElementById('maxLimit').value

    const userData = {
      lenLimit: Number(lenLimit),
      minLimit: Number(minLimit),
      maxLimit: Number(maxLimit),
    }
    console.log(userData)
    // Отправка объекта на сервер
    fetch('http://localhost:5000', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
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
        console.log('Выбран тип сортировки, появления результата сортировки')
        console.log(sortType)
        // array.selectionSort()
        break
      case 'insertionSort':
        // array.insertionSort()
        break
      case 'quickSort':
        // array.quickSort()
        break
      case 'bubbleSort':
        // array.bubbleSort()
        break
    }
  })
  // Обработка событий формы поиска элемента
  document.getElementById('searching').addEventListener('submit', (event) => {
    event.preventDefault()

    // Получение значения элемента для поиска
    const searchElement = document.getElementById('search_element').value
    console.log('Searck elem', searchElement)
    // Получение выбранного метода поиска
    const searchMethod = document.getElementById('search_method').value

    // Поиск элемента в массиве
    switch (searchMethod) {
      case 'linear_search':
        console.log('Выбран тип поиска, появления результата поиска')
        // array.linearSearch(searchElement)
        break
      case 'binary_search':
        // array.binarySearch(searchElement)
        break
      case 'max_search':
        // array.maxSearch()
        break
    }
  })
})
