// Our customers are going to buy lots of melons!
"use strict";

//array 1
const melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba'];


//////////////////////////////////////////////////////////////
// Using a function 

function countMelons(melonList) {
//  Take in a list and return a has of num of melons by melon type.

  let melonCounts = {};

  for (const melon of melonList) {
    if (melonCounts[melon]) {
      melonCounts[melon] += 1;
  } else {
      melonCounts[melon] = 1;
    }

}

  return melonCounts;
};

// function call
console.log(countMelons(melonsToAdd));

////////////////////////////////////////////////////////////
//Using Array.reduce method

//arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
                                                        //add a 0 arg here?
// const melonCounts = melonsToAdd.reduce((mCounts, melon) => {
//   if (mCounts[melon]) {
//     mCounts[melon] += 1;
//   } else {
//     mCounts[melon] = 1;
//   }

//   return mCounts;
// });

// console.log(melonCounts);
//***Getting error: TypeError: Cannot create property '' on string '' ***/

/////////////////////////////////////////////////////////////
//Using short-circuit evaluation to set count

// const melonCounts = melonsToAdd.reduce((mCounts, melon) => {
//   mCounts[melon] = (mCounts[melon] || 0) + 1;

//   return mCounts;
// });

// console.log(melonCounts);
//TypeError: Cannot create property 'Horned Melon' on string 'Ogen'





