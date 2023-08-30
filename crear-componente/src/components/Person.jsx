import PropTypes from 'prop-types'
import '../styles/Person.css';

function Person(props) {
  return (
    <div className="person" 
      style={{
      backgroundColor: props.color,
    }}
    >
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
    </div>
  )
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Person;


/* import PropTypes from 'prop-types': Esto importa el módulo PropTypes 
de la biblioteca prop-types. PropTypes se utiliza para validar 
las props que se pasan a un componente React y asegurarse de que 
cumplan con los tipos y requisitos esperados.

import '../styles/Person.css'; Esta línea importa un archivo CSS que contiene
los estilos para el componente Person. Esto se usa para aplicar estilos al componente.

function Person(props) { ... }: Esto define el componente funcional Person. 
Toma un solo argumento llamado props, que representa las propiedades que se 
pasan al componente desde su lugar de uso.

<div className="person">: Aquí estamos definiendo un elemento <div> con la 
clase CSS person. Esta clase tiene estilos CSS asociados en el archivo
Person.css que importamos anteriormente.

style={{ backgroundColor: props.color }}: Estamos aplicando estilos 
en línea al elemento <div>. Estamos usando el valor de la prop 
color para establecer el color de fondo (backgroundColor) del elemento.

Estas líneas de código generan elementos <h3> y <p> que muestran el 
nombre y la edad que se pasaron 
al componente como props (props.name y props.age, respectivamente).

Person.propTypes = { ... }: Aquí estamos definiendo los tipos 
esperados y los requisitos para las props que se pasan al componente Person.

name: PropTypes.string.isRequired: Estamos especificando 
que se espera que la prop name sea una cadena (string). Además, 
se requiere que esta prop esté presente (no sea nula).

age: PropTypes.number.isRequired: Aquí estamos especificando 
que se espera que la prop age sea un número (number). 
Al igual que con name, también se requiere que esta prop esté presente.

color: PropTypes.string.isRequired: Estamos especificando que
se espera que la prop color sea una cadena (string). 
También se requiere que esta prop esté presente.

este código define un componente Person que muestra el nombre, la edad 
y el color de fondo en función de las props proporcionadas. Las propTypes 
aseguran que las props pasadas cumplan con los tipos y requisitos definidos.*/

/* импортировать PropTypes из 'prop-types': импортирует модуль PropTypes
из библиотеки prop-types. PropTypes используется для проверки
реквизиты, которые передаются компоненту React, и убедитесь, что
соответствуют ожидаемым типам и требованиям.

импортировать '../styles/Person.css'; Эта строка импортирует файл CSS, содержащий
стили для компонента Person. Это используется для применения стилей к компоненту.

function Person(props) { ... }: определяет функциональный компонент Person.
Он принимает один аргумент, называемый реквизитом, который представляет отображаемые свойства.
передаются компоненту с места его использования.

<div className="person">: Здесь мы определяем элемент <div> с
пользовательский класс CSS Этот класс имеет связанные стили CSS в файле
Person.css, который мы импортировали ранее.

style={{ backgroundColor: props.color }}: мы применяем стили
встроенный в элемент <div>. Мы используем значение реквизита
color, чтобы установить backgroundColor элемента.

Эти строки кода генерируют элементы <h3> и <p>, отображающие
имя и возраст прошли
компоненту в качестве реквизита (props.name и props.age соответственно).

Person.propTypes = { ... }: здесь мы определяем типы
ожидания и требования к свойствам, переданным компоненту Person.

имя: PropTypes.string.isRequired: Мы указываем
ожидается, что реквизит имени будет строкой. Кроме,
эта опора должна присутствовать (не нулевая).

age: PropTypes.number.isRequired: Здесь мы указываем
ожидается, что опора будет числом.
Как и в случае с именем, эта опора также должна присутствовать.

цвет: PropTypes.string.isRequired: мы указываем, что
Ожидается, что свойство color будет строкой.
Этот реквизит также должен присутствовать.

этот код определяет компонент Person, который отображает имя, возраст
и цвет фона на основе предоставленных реквизитов. Типы реквизита
убедитесь, что передаваемые реквизиты соответствуют определенным типам и требованиям.*/