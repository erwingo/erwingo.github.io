import './_css/index.scss';
import './_fonts/icons/font';

interface Person {
  name: string;
  age: number;
  sex: 'M' | 'F';
}

const erwin: Person = {
  name: 'Erwin',
  age: 34,
  sex: 'M'
}
