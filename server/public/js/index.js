document.addEventListener('DOMContentLoaded', () => {
  // Обработка событий формы генерации массива
  document
    .getElementById('user_data')
    .addEventListener('submit', async (event) => {
      event.preventDefault()
      let lenLimit = null
      let minLimit = null
      let maxLimit = null
      // Получение значений полей ввода
      lenLimit = document.getElementById('lenLimit').value
      minLimit = document.getElementById('minLimit').value
      maxLimit = document.getElementById('maxLimit').value

      const userData = {
        lenLimit: Number(lenLimit),
        minLimit: Number(minLimit),
        maxLimit: Number(maxLimit),
      }
      // Отправка объекта на сервер
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      console.log(data.randomArray)
      // document.getElementById('result').innerText = JSON.stringify(
      //   data.randomArray,
      // )
    })
  // Обработка событий формы сортировки массива
  document
    .getElementById('sorting')
    .addEventListener('submit', async (event) => {
      event.preventDefault()

      // Получение выбранного метода сортировки
      let userSortData = {
        user_selection_sort: document.querySelector(
          'input[name="sort_type"]:checked',
        ).value,
      }
      // Отправка объекта на сервер
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        body: JSON.stringify(userSortData),
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
  document
    .getElementById('searching')
    .addEventListener('submit', async (event) => {
      event.preventDefault()

      let userSearchData = {
        // Получение значения элемента для поиска
        searchElement: document.getElementById('search_element').value,
        // Получение выбранного метода поиска
        user_selection_search: document.getElementById('search_type').value,
      }
      // Отправка объекта на сервер
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        body: JSON.stringify(userSearchData),
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
