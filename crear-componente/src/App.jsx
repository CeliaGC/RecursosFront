import './App.css';
import Person from './components/Person';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Hello Coders 👋</h1>
      <Person />
      <Person name="Alex" age="34" color="red" />
      <Person name="Kelly" age="40" color="blue" />
      <Person name="Midge" age="38" color="green" />
      <Counter />
    </div>
  );
}

export default App;

/* Esta línea importa el archivo de estilos CSS App.css, 
que contiene estilos para el componente App y su contenido.

Aquí estamos importando el componente Person desde el archivo
Person.jsx ubicado en el directorio components.

Comienza la definición del componente funcional App.

Este bloque de código es el cuerpo del componente App. Está contenido 
dentro de un <div> con la clase CSS App.

<h1>Hello Coders 👋</h1>: Esto muestra un título con el texto "Hello Coders 👋".

<Person name="Alex" age="34" color="red" />: Aquí estamos utilizando 
el componente Person tres veces. Le estamos pasando diferentes propiedades 
a cada instancia: name, age y color. 
Estas propiedades determinarán cómo se mostrará cada instancia del componente Person.

Este es el final de la definición del componente App.

Esta línea exporta el componente App para que pueda ser 
utilizado en otros archivos de la aplicación.

En resumen, el código define el componente App que utiliza el componente 
Person varias veces para mostrar información sobre diferentes personas. 
Cada instancia de Person recibe propiedades como name, age y color, que
determinan cómo se muestra cada persona en la interfaz de usuario. Los estilos 
para el componente App y su contenido se definen en el archivo App.css.*/


/* Эта строка импортирует файл стиля CSS App.css,
содержащий стили для компонента приложения и его содержимого.

Здесь мы импортируем компонент Person из файла
Person.jsx находится в каталоге компонентов.

Начинается определение функционального компонента App.

Этот блок кода является телом компонента App.
внутри <div> с классом CSS App.

<h1>Привет, программисты 👋</h1>: отображается заголовок с текстом «Привет, программисты 👋».

<Person name="Алекс" age="34" color="red" />: Здесь мы используем
компонент Person три раза. Мы передаем ему разные свойства
к каждому экземпляру: имя, возраст и цвет.
Эти свойства будут определять, как будет отображаться каждый экземпляр компонента Person.

Это конец определения компонента приложения.

Эта строка экспортирует компонент приложения, чтобы его можно было
используется в других файлах приложения.

Короче говоря, код определяет компонент приложения, который использует компонент
Человек несколько раз для отображения информации о разных людях.
Каждый экземпляр Person получает такие свойства, как имя, возраст и цвет, которые
они определяют, как каждый человек отображается в пользовательском интерфейсе. Стили
для компонента App и его содержимое определяется в файле App.css.*/