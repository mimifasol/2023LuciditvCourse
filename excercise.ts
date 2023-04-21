function multiFormula(num : number){
  let i: number;
  let factorial = 1
  let formula: string = "";

  for (i = num; i >= 1; i = i - 1) {
    factorial *= i;
    formula = formula+ i + "*";
  }

  formula = formula.substring(0, formula.length-1) + "=" + factorial;

  formula = num +"!="+factorial;

  return formula;
}

let result = multiFormula(5)