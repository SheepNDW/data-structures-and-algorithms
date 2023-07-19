/**
 * #1 remove duplicates from an array
 */
function removeDuplicates(arr) {
  const hash = {};
  arr.forEach((el) => {
    hash['.' + el] = el;
  });

  return Object.keys(hash).map((key) => hash[key]);
}

/**
 * #2 find the non-repeating numbers in an array
 */
function findNonRepeatingNumbers(arr) {
  const hash = {};
  arr.forEach((el) => {
    if (hash[el]) {
      hash[el].count++;
    } else {
      hash[el] = {
        count: 1,
        data: el,
      };
    }
  });

  const result = [];
  Object.keys(hash).forEach((key) => {
    if (hash[key].count === 1) {
      result.push(hash[key].data);
    }
  });

  return result;
}

/**
 * #3 Two Sum
 */
function twoSum(numbers, target) {
  const hash = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const el = numbers[i];
    if (hash.has(target - el)) {
      return [hash.get(target - el), i];
    }
    hash.set(el, i);
  }
}

export { removeDuplicates, findNonRepeatingNumbers, twoSum };
