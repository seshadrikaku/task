function Sum(value, target) {
    const result = [];
    value.forEach((num1, index1) => {
      value.slice(index1 + 1).forEach(num2 => {
        if (Math.abs(num1 + num2) === target) {
          result.push([num1, num2]);
        }
      });
    });
    return result
      .map(comb => comb.sort((a, b) => a - b))
      .map(comb => comb.join(','))
      .filter((value, index, self) => self.indexOf(value) === index)
      .map(comb => comb.split(',').map(Number));
  }
  
  function mergeSort(a1, a2) {
    return [...a1, ...a2].sort((L, M) => L - M);
  }
  
  function findDouble(value, target) {
    const doubledTarget = target * 2;
    const result = [];
    value.forEach((_, index1) => {
      value.slice(index1).forEach((_, index2) => {
        const combination = value.slice(index1, index1 + index2 + 1);
        if (combination.reduce((sum, num) => sum + num, 0) === doubledTarget) {
          result.push(combination);
        }
      });
    });
    return result
      .map(comb => comb.sort((a, b) => a - b))
      .map(comb => comb.join(','))
      .filter((value, index, self) => self.indexOf(value) === index)
      .map(comb => comb.split(',').map(Number));
  }

 
  const value = [1, 3, 2, 2, -4, -6, -2, 8];
  const targetValue = 4;
  const firstCombination = Sum(value, targetValue);
  const mergedArray = firstCombination.flat().sort();
  const secondCombination = mergedArray
  
  
  console.log(value);
  console.log(targetValue);
  console.log('First Combination:', firstCombination);
  console.log('Merge Into a single Array:', firstCombination.flat().sort());
  console.log('Second Combination  "' + (targetValue * 2) + '":', secondCombination);
  

  