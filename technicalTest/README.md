Uber is building a Fare Estimator that can tell you how much your ride will cost before you request it. It works by passing approximated ride distance and ride time through this formula:

(Cost per minute) *(ride time) + (Cost per mile)* (ride distance)

where Cost per minute and Cost per mile depend on the car type.

You are one of the engineers building the Fare Estimator, so knowing cost per minute and cost per mile for each car type, as well as ride distance and ride time, return the fare estimates for all car types.

Example

For ride_time = 30, ride_distance = 7, cost_per_minute = [0.2, 0.35, 0.4, 0.45], and cost_per_mile = [1.1, 1.8, 2.3, 3.5], the output should be fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) = [13.7, 23.1, 28.1, 38].

Since:

30 *0.2 + 7* 1.1 = 6 + 7.7 = 13.7 30 *0.35 + 7* 1.8 = 10.5 + 12.6 = 23.1 30 *0.4 + 7* 2.3 = 12 + 16.1 = 28.1 30 *0.45 + 7* 3.5 = 13.5 + 24.5 = 38

___________________________________________________________________________________________


Uber está creando un estimador de tarifas que puede indicarle cuánto costará su viaje antes de que lo solicite. Funciona pasando la distancia y el tiempo de viaje aproximados a través de esta fórmula:

(Costo por minuto) *(tiempo de viaje) + (Costo por milla)* (distancia de viaje)

donde el Costo por minuto y el Costo por milla dependen del tipo de automóvil.

Usted es uno de los ingenieros que construye el Estimador de tarifas, por lo que, conociendo el costo por minuto y el costo por milla para cada tipo de automóvil, así como la distancia y el tiempo de viaje, obtenga las estimaciones de tarifas para todos los tipos de automóviles.

Ejemplo

Para ride_time = 30, ride_distance = 7, cost_per_minuto = [0.2, 0.35, 0.4, 0.45] y cost_per_mile = [1.1, 1.8, 2.3, 3.5], el resultado debe ser fareEstimator(ride_time, ride_distance, cost_per_minuto, cost_per_mile) = [ 13.7, 23.1, 28.1, 38].

Desde:

30 * 0.2 + 7 * 1.1 = 6 + 7.7 = 13.7 30 * 0.35 + 7 * 1.8 = 10.5 + 12.6 = 23.1 30 * 0.4 + 7 * 2.3 = 12 + 16.1 = 28.1 30 * 0.45 + 7 * 3.5 = 13.5 + 24.5 = 38

___________________________________________________________________________________________

Uber создает оценщик тарифов, который может сказать вам, сколько будет стоить ваша поездка, прежде чем вы ее запросите. Он работает, передавая приблизительное расстояние и время в пути по следующей формуле:

(Стоимость минуты) *(время в пути) + (Стоимость за милю)* (расстояние в пути)

где Стоимость минуты и Стоимость мили зависят от типа автомобиля.

Вы являетесь одним из инженеров, создающих оценщик тарифов, поэтому, зная стоимость минуты и стоимость мили для каждого типа автомобиля, а также расстояние и время в пути, вы можете получить оценки тарифов для всех типов автомобилей.

Пример

Для ride_time = 30, ride_distance = 7, Cost_per_mine = [0,2, 0,35, 0,4, 0,45] и Cost_per_mile = [1,1, 1,8, 2,3, 3,5] результатом должен быть FareEstimator(ride_time, ride_distance, Cost_per_mine, Cost_per_mile) = [ 13,7 , 23.1, 28.1, 38].

От:

30 * 0,2 + 7 * 1,1 = 6 + 7,7 = 13,7 30 * 0,35 + 7 * 1,8 = 10,5 + 12,6 = 23,1 30 * 0,4 + 7 * 2,3 = 12 + 16,1 = 28,1 30 * 0,45 + 7 * 3,5 = 13,5 + 24,5 = 38