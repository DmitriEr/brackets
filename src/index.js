module.exports = function check(str, bracketsConfig) {
  // your solution
  // цилк строки
  for (let i = 0; i < str.length; i++) {
    // цикл массива. Длина массива зависит от результата str = str.replace(parentheses, "") во втором цикле
    for (let j = 0; j < bracketsConfig.length; j++) {
      //  Объеденяем в () [] {} ||
      let parentheses = bracketsConfig[j].join("");
        // пока строка содержит позицию
        while (str.includes(parentheses)) {
          // удаляем позицию и вставляем пустую строку
          str = str.replace(parentheses, "");
        };
      };
    };
    // если строка пустая или () true
  return str =="" || str == "()" ? true : false;
};
