import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const sumClick = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="text-center mt-4">
    <h1>Counter</h1>
    <p>{counter}</p>
    <button onClick={sumClick} className='btn btn-primary'>Add</button>
    </div>
  )
}

export default Counter;


/* En esta línea, se importa la biblioteca React y el hook useState desde React. 
El hook useState se utiliza para manejar el estado en componentes funcionales.
Se define la función Counter, que es un componente funcional de React.
Aquí se utiliza el hook useState para inicializar el estado del contador. 
counter es la variable que almacena el valor actual del contador, y 
setCounter es la función que se utiliza para actualizar ese valor. 
Se inicializa con un valor inicial de 0.
Se declara una función llamada sumClick que incrementa el valor 
del contador en 1 cada vez que se llama. 
Esto se hace utilizando la función setCounter para actualizar el estado.
En esta parte del código, se está devolviendo el JSX que representa la interfaz 
de usuario del contador.
    <div className="text-center mt-4">: Un contenedor div con clases CSS para 
    centrar el contenido y agregar un margen superior.
    <h1>Counter</h1>: Encabezado que muestra el título "Counter".
    <p>{counter}</p>: Un párrafo que muestra el valor actual del contador 
    almacenado en la variable de estado counter.
    <button onClick={sumClick} className='btn btn-primary'>Add</button>: 
    Un botón que, cuando se hace clic, llama a la función sumClick para 
    incrementar el contador en 1. Tiene una clase CSS para darle estilo.
    Finalmente, el componente Counter se exporta para que pueda ser utilizado 
    en otros archivos de React.
En resumen, este componente Counter utiliza el hook useState para 
mantener y actualizar un contador en la interfaz de usuario. Cada 
vez que se hace clic en el botón "Add", 
el valor del contador aumenta en 1 y se muestra en la interfaz.*/

/* Эта строка импортирует библиотеку React и хук useState из React.
Перехват useState используется для управления состоянием функциональных компонентов.
Определена функция Counter, которая является функциональным компонентом React.
Здесь хук useState используется для инициализации состояния счетчика.
счетчик — это переменная, в которой хранится текущее значение счетчика, а
setCounter — это функция, которая используется для обновления этого значения.
Он инициализируется с начальным значением 0. 
Объявлена ункция с именем sumClick, которая увеличивает значение.
/*счетчика на 1 при каждом его вызове.
Это делается с помощью функции setCounter для обновления состояния.
В этой части кода возвращается JSX, представляющий интерфейс.
счетчик пользователя.
    <div className="text-center mt-4">: контейнер div с классами CSS для
    отцентрируйте содержимое и добавьте верхнее поле.
    <h1>Счетчик</h1>: заголовок с заголовком «Счетчик».
    <p>{counter}</p>: абзац, отображающий текущее значение счетчика.
    хранится в переменной состояния счетчика.
    <button onClick={sumClick} className='btn btn-primary'>Добавить</button>:
    Кнопка, при нажатии которой вызывается функция sumClick для
    увеличьте счетчик на 1. У него есть класс CSS для стилизации.
    Наконец, компонент Counter экспортируется, чтобы его можно было использовать.
    в других файлах React.
Короче говоря, этот компонент Counter использует хук useState для
поддерживать и обновлять счетчик в пользовательском интерфейсе. Каждый
после нажатия кнопки «Добавить»,
значение счетчика увеличивается на 1 и отображается в интерфейсе.*/