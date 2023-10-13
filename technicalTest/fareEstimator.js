function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
  // Crea un arreglo vacío llamado "estimates" para almacenar las estimaciones.
  // Создайте пустой массив с именем «estimates» для хранения оценок.
  const estimates = [];

  // Inicia un bucle "for" que recorre el arreglo "cost_per_minute" y "cost_per_mile".
  // Запускаем цикл for, который перебирает массивы "cost_per_mine" и "cost_per_mile".
  for (let i = 0; i < cost_per_minute.length; i++) {
      // Obtiene el valor de costo por minuto y costo por milla en la posición actual.
      // Получает стоимость минуты и стоимость мили в текущей позиции.
      const currentMinute = cost_per_minute[i]
      const currentMile = cost_per_mile[i]

      // Calcula el costo estimado para esta combinación de tarifas.
      // Рассчитывает ориентировочную стоимость для этой комбинации тарифов.
      const result = (ride_time * currentMinute) + (ride_distance * currentMile)

      // Agrega el resultado al arreglo "estimates".
      // Добавляем результат в массив «оценки».
      estimates.push(result);
  }

  // Devuelve el arreglo "estimates" que contiene todas las estimaciones.
  // Возвращает массив «оценки», содержащий все оценки.

  return estimates;
}

const ride_time = 30;
const ride_distance = 10;
const cost_per_minute = [0.2, 0.35, 0.4];
const cost_per_mile = [1.1, 1.8, 2.3];

const estimates = fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile);
  console.log(estimates);