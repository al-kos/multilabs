const user_data_for_array = document.getElementById('user_data')
const user_sorting_select = document.getElementById('sorting')
const user_searching_select = document.getElementById('searching')

// Обработка событий формы генерации массива после загрузки html
document.addEventListener('DOMContentLoaded', () => {
  user_data_for_array.addEventListener('submit', async (event) => {
    event.preventDefault()
    let lenLimit = document.getElementById('lenLimit').value
    let minLimit = document.getElementById('minLimit').value
    let maxLimit = document.getElementById('maxLimit').value
    // Отправка объекта на сервер
    const response = await fetch('http://localhost:5000/algs', {
      method: 'POST',
      body: JSON.stringify({
        lenLimit: Number(lenLimit),
        minLimit: Number(minLimit),
        maxLimit: Number(maxLimit),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
    // document.getElementById('result').innerText = JSON.stringify(
    //   data.randomArray,
    // )
  })
  // Обработка событий формы сортировки массива
  user_sorting_select.addEventListener('submit', async (event) => {
    event.preventDefault()

    // Отправка объекта на сервер
    const response = await fetch('http://localhost:5000/algs', {
      method: 'POST',
      body: JSON.stringify({
        // Получение выбранного метода сортировки
        user_selection_sort: document.querySelector(
          'input[name="sort_type"]:checked',
        ).value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    //!!!!!!!!!!!!!! OUT RESULT NEED ADD EMPTY DIV WITH ID
    // const data = await response.json()
    // document.getElementById('result').innerText = JSON.stringify(
    //   data.randomArray,
    // )
  })
  // Обработка событий формы поиска элемента
  user_searching_select.addEventListener('submit', async (event) => {
    event.preventDefault()

    // Отправка объекта на сервер
    const response = await fetch('http://localhost:5000/algs', {
      method: 'POST',
      body: JSON.stringify({
        // Получение значения элемента для поиска
        searchElement: document.getElementById('search_element').value,
        // Получение выбранного метода поиска
        user_selection_search: document.getElementById('search_type').value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // const data = await response.json()
    // document.getElementById('result').innerText = JSON.stringify(
    //   data.randomArray,
    // )
  })
})
