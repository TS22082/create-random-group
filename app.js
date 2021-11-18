const utils = require("./util/shuffle");

const appArr = [
  "ari",
  "seena",
  "robyn",
  "Alex",
  "Jernice",
  "Beakel",
  "sanji",
  "mark",
  "panda",
  "human",
  "jay",
  "snake",
  "lisa",
  "york",
  "clarence",
  "donny",
];

// const shuffle = (array) => {
//   let currentIndex = array.length,
//     randomIndex;

//   // While there remain elements to shuffle...
//   while (currentIndex != 0) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// };

const makeGroups = (arr, groupLength) => {
  if (isNaN(groupLength)) return "number must be passed as second argument";

  const groups = [];

  for (let i = 0; i < groupLength; i++) groups.push([]);

  let groupsIterator = 0;

  const apprenticeArray = utils.shuffle([...appArr]);

  apprenticeArray.forEach((apprentice) => {
    if (groupsIterator === groupLength) groupsIterator = 0;

    groups[groupsIterator].push(apprentice);
    groupsIterator++;
  });

  return groups;
};

console.log(makeGroups(appArr, parseInt(process.argv[2])));
