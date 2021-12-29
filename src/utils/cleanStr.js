const cleanString = (string, words = string.length) => {
  let res;
  for (let i of getWords(string.trim(), words)) {
    res = string.substring(0, i);
  }
  return res.replace(/ {1,}/g, " ");

  //Меняем двойные пробелы на простой пробел и удаляем пробелы вначале и конце
};

function* getWords(string, words) {
  let wordsCount = 0;
  let currentPosition = 0;
  let lastPos = 0;
  while (wordsCount < words) {
    currentPosition = string.indexOf(" ", lastPos);

    if (currentPosition != -1) {
      lastPos = currentPosition + 1;
      wordsCount++;
      yield currentPosition;
    } else {
      yield 1;
    }
  }
}

export { cleanString };
