"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transport_1 = require("./Transport");
// Функция для вывода текущего времени
function getCurrentDate() {
    console.log(new Date().toLocaleTimeString());
}
// Функция для старта отсчета времени
function startClock() {
    var intervalId = setInterval(function () {
        getCurrentDate();
    }, 5000); // Каждые 5 секунд
    setTimeout(function () {
        console.log("1 минута прошла. Таймер остановлен.");
        clearInterval(intervalId); // Остановка через 1 минуту
    }, 60000);
}
// Инициализация владельца
var owner = new Transport_1.Person('Иванов', 'Иван', 'Иванович', new Date(1985, 6, 15), Transport_1.CustomDocumentType.Passport, '1234', '567890');
// Инициализация автомобиля и мотоцикла
var car = new Transport_1.Automobile('Toyota', 'Camry', 2022, 'JTDBE32K502109123', 'А123ВС77', owner, Transport_1.CarBodyType.Sedan, Transport_1.CarClass.Business);
var bike = new Transport_1.Motorcycle('Yamaha', 'YZF-R1', 2021, 'JYARN23E5DA004321', 'Б456СД78', owner, 'Спортивная', true);
// Создание гаража
var garage = new Transport_1.Garage(new Date());
garage.addVehicle(car);
garage.addVehicle(bike);
// Вывод информации о владельце, автомобиле и мотоцикле
console.log('--- Владелец ---');
owner.displayInfo();
console.log('--- Автомобиль ---');
car.displayVehicleInfo();
console.log('--- Мотоцикл ---');
bike.displayVehicleInfo();
console.log('--- Список ТС в гараже ---');
var vehicles = garage.getAllVehicles();
vehicles.forEach(function (vehicle) { return vehicle.displayVehicleInfo(); });
// Старт таймера
startClock();
