import { Multiples } from './../src/multiples.js'

describe('Multiples', function(){
  let reusableMultiple;
  let reusableNotMultiple;

  beforeEach(function(){
    reusableMultiple = new Multiples(15);
    console.log(reusableMultiple);
    reusableNotMultiple = new Multiples(7);
    console.log(reusableNotMultiple);
  });

  it('should test if number is multiple of three or not', function(){
    expect(reusableMultiple.multipleThreeCheck()).toEqual('this is a multiple of three');
    expect(reusableNotMultiple.multipleThreeCheck()).toEqual('this is not a multiple of three');
  });

  it('should test if number is multiple of five or not', function(){
    expect(reusableMultiple.multipleFiveCheck()).toEqual('this is a multiple of five');
    expect(reusableNotMultiple.multipleFiveCheck()).toEqual('this is not a multiple of five');
  });
})
