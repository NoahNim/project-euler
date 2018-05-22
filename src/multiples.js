export class Multiples {
  constructor(number) {
    this.number = number;
    console.log(number);
  }

  multipleThreeCheck(){
    if (this.number % 3 === 0) {
      return 'this is a multiple of three';
    } else {
      return 'this is not a multiple of three';
    }
  }
  multipleFiveCheck(){
    if (this.number % 5 === 0) {
      return 'this is a multiple of five';
    } else {
      return 'this is not a multiple of five';
    }
  }
}
