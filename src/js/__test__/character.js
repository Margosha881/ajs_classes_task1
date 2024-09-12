/**
 * Функция-конструктор персонажей, основной класс, от него наследуются классы всех персонажей
 * @constructor
 * @param {string} name Имя игрока
 * @param {string} type Тип персонажа
 * @throws Ошибка, если имя игрока меньше 2 символов или болше 10
 * или если тип персонажа не существует
 */
export default class Character {
    constructor(name, type) {
      if (typeof name !== 'string') {
        throw new Error('The name must be a string!');
      } else if (name.length < 2 || name.length > 10) {
        throw new Error('The name must be between 2 and 10 characters!');
      }
  
      if (!Character.listOfTypes().includes(type)) {
        throw new Error('The type must be selected from the list of suggested types!');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
    }
  
    static listOfTypes() {
      return ['Bowman', 'Swordsman', 'Magician', 'Deamon', 'Undead', 'Zombie'];
    }
  }