var myCrazyObject = {
   'name': 'нелепый объект',
   'some arrey': [7, 9, {purpose: 'путаница', number: 123}, 3.3],
   'random animal': 'Banana shark'
};
var numberSomeArrey = myCrazyObject['some arrey'];
console.log(numberSomeArrey[2]['number']);