const me = 'LambdaSchool';
const you = 'Student';
let numberOfCatsIOwn = 0;

const buyCat = () => {
  numberOfCatsIOwn++;
  console.log('I now own ' + numberOfCatsIOwn + ' cats!');
}
buyCat();


const favoriteBooks = [
  'Captain Underpants',
  'Magic Treehouse',
  'Brown Bear, Brown Bear, What Do You See?',
  'Slaughterhouse 5',
];

const likesCaptainUnderpants = (bookList) => {
  let yes = false;
  bookList.forEach((book) => {
    if (book === 'Captain Underpants') yes = true;
  });
  return yes;
}

const result = likesCaptainUnderpants(favoriteBooks);
console.log(result);


const sumInput = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

const sum = sumInput(1, 2, 3, 4, 5);
console.log(sum);

const add = (x, y) => {
  return x + y;
}
const total = add(5, 5);
console.log(total);

