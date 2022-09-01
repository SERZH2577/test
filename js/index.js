{
  // const bank = {
  // 	userName: 'Alex',
  // 	cardName: 'main',
  // 	total: 3000,
  // 	balance() {
  // 		console.log(`User ${this.userName} have balance: ${this.total}`)
  // 	},
  // }
  // bank.balance()
}

{
  /////////////
  // перебрать массив
  // мутировать, чтобы остались только уникальные id
  // если одинаковые Id складывать значения qty
  // const products = [
  // 	{
  // 		id: 'sku1',
  // 		qty: 1,
  // 	},
  // 	{
  // 		id: 'sku2',
  // 		qty: 2,
  // 	},
  // 	{
  // 		id: 'sku3',
  // 		qty: 3,
  // 	},
  // 	{
  // 		id: 'sku1',
  // 		qty: 6,
  // 	},
  // 	{
  // 		id: 'sku1',
  // 		qty: 8,
  // 	},
  // 	{
  // 		id: 'sku2',
  // 		qty: 19,
  // 	},
  // 	{
  // 		id: 'sku4',
  // 		qty: 1,
  // 	},
  // ]
  // for (let i = 0; i < products.length; i += 1) {
  // 	for (let y = i + 1; y < products.length; y += 1) {
  // 		let sum = 0
  // 		if (products[i].id === products[y].id) {
  // 			products[y].qty += products[y].qty
  // 			products.splice(y, 1)
  // 			y -= 1
  // 		}
  // 		// console.log(products[y].id)
  // 	}
  // 	// console.log(products[i].id)
  // }
  // console.log(products)
}

{
  let sum = 0;

  const sumFoo = function (a, b) {
    sum = a + b;

    return sum;
  };

  // sumFoo(10, 5);

  // console.log(sumFoo(10, 5));

  sum = 20;

  // console.log(sum);
}

{
  const fooFooFoo = function (arr1, arr2) {
    return [...arr1, ...arr2];
  };
  // console.log(fooFooFoo([1, 2, 3, 4], [5, 6, 7, 8]));
}

{
  const arr = [1, 2, 3, 4, 56, 4, 7, 85, 9, 4, 4, 45, 4488, 25, 5, 751, 64, 4];

  // reduce

  const red = arr.reduce((acc, dig) => acc + dig, 0);

  // console.log(red);

  const red1 = arr.reduce((acc, dig) => {
    if (dig > 5) {
      acc += dig;
    }

    return acc;
  }, 0);

  // console.log(red1);

  // sort

  const copyArr = [...arr];
  copyArr.sort();
  // console.log(copyArr);

  const destSortedNumbers = [...arr].sort((a, b) => b - a);
  const ascSortedNumbers = [...arr].sort((a, b) => a - b);
  // console.log(destSortedNumbers);
  // console.log(ascSortedNumbers);
  // console.log(ascSortedNumbers.reverse());

  const arrObj = [
    { id: 1, name: 'Poly', rating: 90, online: true },
    { id: 2, name: 'Roman', rating: 320, online: true },
    { id: 3, name: 'Ajax', rating: 1000, online: false },
    { id: 4, name: 'Ben', rating: 300, online: true },
    { id: 5, name: 'Sofia', rating: 520, online: false },
    { id: 6, name: 'John', rating: 110, online: true },
    { id: 7, name: 'Merlin', rating: 200, online: false },
  ];

  const sortName = [...arrObj].sort((up, down) => {
    const result = up.name[0] > down.name[0];
    if (result) {
      return 1;
    }

    if (!result) {
      return -1;
    }
  });
  // console.log(sortName);
}

{
  const Food = function ({ newName = '', weight = 0 } = {}) {
    this.name = newName;
    this.weight = weight;
  };

  // Food.prototype.createFood = function (a, b) {
  //   this.name = a;
  //   this.weight = b;
  // };

  Food.prototype.addWeight = function (weight = 0) {
    this.weight += weight;
  };

  Food.prototype.minusWeight = function (weight = 0) {
    this.weight -= weight;
  };

  const cucumber = new Food({ name: 'cucumber', weight: 1000 });
  // console.log(cucumber);

  // cucumber.name = 'cucumber';
  // cucumber.weight = 1000;

  cucumber.addWeight(500);
  cucumber.addWeight(300);
  cucumber.addWeight(200);
  cucumber.minusWeight(700);

  // console.log(cucumber);
}

{
  class Car {
    static serialNumber = {
      number: 123,
    };

    constructor({ brand, model, price }) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }

    updatePrice(newPrice) {
      this.price = newPrice;
    }

    get serial() {
      return Car.serialNumber.number;
    }
  }

  const newCar = new Car({ brand: 'bmw', model: '7', price: 100000 });

  newCar.updatePrice(120000);

  // console.log(newCar);
  // console.log(newCar.serial);
}

{
  function solution(str) {
    const arrString = str.split('');
    const newArrString = [];

    for (let i = arrString.length - 1; i >= 0; i -= 1) {
      newArrString.push(arrString[i]);
    }

    return newArrString.join('');
  }

  // console.log(solution('123'));
}

{
  const addName = document.querySelector('.name');
  // addName.addEventListener();
  // addName.classList.add('test');
  // addName.style.backgroundColor = 'yellow';
}

{
  function points(games) {
    let totalPoints = 0;

    for (let i = 0; i < games.length; i += 1) {
      if (games[i][0] > games[i][2]) {
        totalPoints += 3;
      } else if (games[i][0] === games[i][2]) {
        totalPoints += 1;
      }
    }

    return totalPoints;
  }

  // console.log(
  //   points([
  //     '1:0',
  //     '2:0',
  //     '3:0',
  //     '4:0',
  //     '2:1',
  //     '1:3',
  //     '1:4',
  //     '2:3',
  //     '2:4',
  //     '3:4',
  //   ]),
  // );
}

{
  function reverseWords(str) {
    const strArr = str.split(' ');
    const newArr = [];

    for (let i = 0; i < strArr.length; i += 1) {
      const reverseStr = strArr[i].split('').reverse().join('');

      newArr.push(reverseStr);
    }

    return newArr.join(' ');
  }

  // console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
}

{
  function disembowel(str) {
    const strArr = [];

    for (let i = 0; i < str.length; i += 1) {
      if (
        str[i] === 'e' ||
        str[i] === 'E' ||
        str[i] === 'u' ||
        str[i] === 'U' ||
        str[i] === 'i' ||
        str[i] === 'I' ||
        str[i] === 'o' ||
        str[i] === 'O' ||
        str[i] === 'a' ||
        str[i] === 'A'
      ) {
        continue;
      } else {
        strArr.push(str[i]);
      }
    }
    return strArr.join('');
  }

  // console.log(disembowel('This website is for losers LOL!'));
}

// {
//   const str = '1';
//   const num = 1;
//   console.log(str === num);
// }

{
  function disembowel(str) {
    return str.replace(/[euioa]/gi, '');
  }

  // console.log(disembowel('This website is for losers LOL!'));
}

{
  const block = document.querySelector('.block');
  const list = document.querySelector('.list');
  const item = document.querySelector('.item');
  const btn = document.querySelector('.btn');

  block.addEventListener('click', () => {
    // alert('Block click handler');
  });

  list.addEventListener('click', () => {
    // alert('List click handler');
  });

  item.addEventListener('click', () => {
    // alert('Item click handler');
  });

  btn.addEventListener('click', () => {
    // alert('Button click handler');
  });
}

{
  function getGrade(s1, s2, s3) {
    const score = (s1 + s2 + s3) / 3;
    let massage = '';

    if (90 <= score && score <= 100) {
      massage = 'A';
    } else if (80 <= score && score < 90) {
      massage = 'B';
    } else if (70 <= score && score < 80) {
      massage = 'C';
    } else if (60 <= score && score < 70) {
      massage = 'D';
    } else if (0 <= score && score < 60) {
      massage = 'F';
    }

    return massage;
  }

  // console.log(getGrade(95, 90, 93));
  // console.log(getGrade(75, 70, 79));
  // console.log(getGrade(66, 62, 68));
  // console.log(getGrade(82, 85, 87));
  // console.log(getGrade(58, 59, 60));
}

{
  const number = function (busStops) {
    let passengers = 0;
    for (let i = 0; i < busStops.length; i += 1) {
      passengers = passengers + busStops[i][0] - busStops[i][1];
    }
    return passengers;
  };

  // console.log(
  //   number([
  //     [10, 0],
  //     [3, 5],
  //     [5, 8],
  //   ]),
  // );
  // console.log(
  //   number([
  //     [3, 0],
  //     [9, 1],
  //     [4, 10],
  //     [12, 2],
  //     [6, 1],
  //     [7, 10],
  //   ]),
  // );
}

{
  function filter_list(l) {
    return l.filter(e => e === Number(e));
  }
  // console.log(filter_list([1, 2, 'a', 'b', true, {}, null, undefined]));
}

{
  function stringToNumber(str) {
    return Number(str);
  }
  // console.log(filter_list('1'));
}

{
  const rps = (p1, p2) => {
    let massage = '';
    if (p1 === 'rock' && p2 === 'scissors') {
      massage = 'Player 1 won!';
    } else if (p1 === 'scissors' && p2 === 'rock') {
      massage = 'Player 2 won!';
    } else if (p1 === 'scissors' && p2 === 'paper') {
      massage = 'Player 1 won!';
    } else if (p1 === 'paper' && p2 === 'scissors') {
      massage = 'Player 2 won!';
    } else if (p1 === 'paper' && p2 === 'rock') {
      massage = 'Player 1 won!';
    } else if (p1 === 'rock' && p2 === 'paper') {
      massage = 'Player 2 won!';
    } else {
      massage = 'Draw!';
    }
    return massage;
  };

  // console.log(rps('rock', 'scissors'));
}

{
  function removeEveryOther(p) {
    const arr = [];
    for (let i = 0; i < p.length; i += 2) {
      arr.push(p[i]);
    }
    return arr;
  }
  // console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']));
}

{
  function openOrSenior(data) {
    const status = [];

    data.map(e => {
      if (e[0] >= 55 && e[1] >= 7) {
        status.push('Senior');
      } else {
        status.push('Open');
      }
    });
    return status;
  }

  // console.log(
  //   openOrSenior([
  // [45, 12],
  //     [55, 21],
  //     [19, -2],
  //     [104, 20],
  //   ]),
  // );
}

{
  function stringToArray(string) {
    return string.split(' ');
  }

  // console.log(stringToArray('I love arrays they are my favorite'));
}

{
  /*
  --- Local Storage ---

  Создать элемент с данными в локальном хранилище
  localStorage.setItem('key_name', 'key_value');

  Прочитать данные из локального хранилища
  localStorage.getItem('key_name');

  Распарсить результат с данными из локального хранилища
  JSON.parse(localStorage.getItem('key_name'));

  Удалить конкретные данные из локального хранилища
  localStorage.removeItem('key_name');

  Полностью очистить хранилище
  localStorage.clear();

  --- Session Storage ---

  Создать элемент с данными в хранилище сессии
  sessionStorage.setItem('key_name', 'key_value');

  Прочитать данные из хранилища сессии
  sessionStorage.getItem('key_name');
  */
}

{
  function XO(str) {
    const strLowerCase = str.toLowerCase();
    let x = 0;
    let o = 0;

    for (let i = 0; i < strLowerCase.length; i += 1) {
      if (strLowerCase[i] === 'x') {
        x += 1;
      } else if (strLowerCase[i] === 'o') {
        o += 1;
      }
    }

    return x === o;
  }

  // console.log(XO('xxooXok'));
}

{
  function findShort(s) {
    const sArr = s.split(' ');
    let minNum = Infinity;
    sArr.map(el => {
      if (el.length < minNum) {
        minNum = el.length;
      }
    });
    return minNum;
  }

  // console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
}

{
  function stray(numbers) {
    let same;
    for (let i = 0; i < numbers.length; i += 1) {
      for (let j = i + 1; j < numbers.length; j += 1) {
        if (numbers[i] === numbers[j]) {
          same = numbers[i];
        }
      }
      if (same !== numbers[i]) {
        return numbers[i];
      }
    }
  }

  // console.log(stray([17, 17, 17, 3, 17, 17, 17, 17]));
}

{
  function updateLight(current) {
    if (current === 'green') {
      return 'yellow';
    } else if (current === 'yellow') {
      return 'red';
    }

    return 'green';
  }

  // console.log(updateLight('yellow'));
  // console.log(updateLight('green'));
  // console.log(updateLight('red'));
}
{
  function expressionMatter(a, b, c) {
    const arr = [
      a + b + c,
      a * b * c,
      (a + b) * c,
      a * (b + c),
      a + b * c,
    ].sort((x, y) => y - x);

    return arr[0];
  }

  // console.log(expressionMatter(3, 3, 3));
  // console.log(expressionMatter(2, 1, 2));
}

{
  function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
      return `${name} plays banjo`;
    }

    return `${name} does not play banjo`;
  }

  // console.log(areYouPlayingBanjo('Adam'));
}

{
  function getCount(str) {
    const strArr = [];

    for (let i = 0; i < str.length; i += 1) {
      if (
        str[i].toLowerCase() === 'a' ||
        str[i].toLowerCase() === 'e' ||
        str[i].toLowerCase() === 'i' ||
        str[i].toLowerCase() === 'o' ||
        str[i].toLowerCase() === 'u'
      ) {
        strArr.push(str[i]);
      }
    }

    return strArr.length;
  }

  // console.log(getCount('abracadabra'));
}

{
  function howMuchILoveYou(nbPetals) {
    const massage = [
      'I love you',
      'a little',
      'a lot',
      'passionately',
      'madly',
      'not at all',
    ];

    return massage[(nbPetals - 1) % 6];
  }

  // console.log(howMuchILoveYou(1));
}
