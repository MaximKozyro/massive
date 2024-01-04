const ak = ["затворная рама","крышкасвольнй","приклад","рукоятка"];
ak[0] = "шомпол";//замена первого элемента по индексу
console.log(ak[0]);

const zma = [22,"dee",33,"scwcw"];
console.log(zma.length);//определение длинны массива

const abreki = [];
abreki.push("zmychi","lukas");//добавление значений  в пустой массив
console.log(abreki[1]);

abreki.unshift("punya");//добавить первый эллемент массива.
console.log(abreki[0]);

abreki.pop();//убрать последний элемент массива.
abreki.shift();//убрать первый элмент массива.

//обьединение массивов
const a = [1,2,3,4,5,6,7,8,9,10];
const b = ["s",2,"e",4,"g","k",8,"d",10];
const c = [1,2,33,4,5,33,7,8,9,10];

const all = a.concat(b,c);
console.log(all);

console.log(b.indexOf(4));//поиск по индексу




const subjects = ["Пахом", "Пупа", "Лукас", "Жмых"];
const adjectives = ["ебнутый", "поехавший", "шалапай", "абрэк"];
const actions = ["прыгает на пятках", "смеется", "работает", "разговаривает"];
const animals = ["конь", "муха", "пёс", "абрэк"];

function generateAbrek() {
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const animal = animals[Math.floor(Math.random() * animals.length)];

    return `${subject} такой ${adjective}, что ${action} как ${animal}.`;
}

console.log(generateAbrek());






const bodyParts = ["Пахом", "Епифан", "Жмых"];
const adjectives2 = ["поехавший", "дошедший", "ебанутый"];
const parts = ["пятки", "голова","морда"];

function generateHernya() {
    const bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
    const adjective2 = adjectives2[Math.floor(Math.random() * adjectives2.length)];
    const animalPart = parts[Math.floor(Math.random() * parts.length)];

    return `Ты ${bodyPart} еще более ${adjective2}, чем ${animalPart} у ${getRandomPoehavshie()}.`;
}

function getRandomPoehavshie() {
    const animals = ["Пахома", "Епифана", "Осмоловского"];
    return animals[Math.floor(Math.random() * animals.length)];
}

console.log(generateHernya());



// Версия с оператором +
function generateInsultWithPlus() {
    const subject = "Ты";
    const adjective = "глупый";
    const action = "прыгает";
    const animal = "как кролик";

    return subject + " такой " + adjective + ", что " + action + " " + animal + ".";
}

// Версия с методом join
function generateInsultWithJoin() {
    const insultArray = ["Ты", "такой", "глупый", "что", "прыгает", "как", "кролик"];
    return insultArray.join(" ");
}

console.log(generateInsultWithPlus());
console.log(generateInsultWithJoin());







const numbers = [3, 2, 1];
const joinedString = numbers.join(" больше, чем ");

console.log(`#${joinedString} больше, чем 1"?`);




