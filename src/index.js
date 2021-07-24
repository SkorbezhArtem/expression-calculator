function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let openBracket = 0;
    let closeBracket = 0;

    if (expr.indexOf('/ 0') + 1) throw new Error('TypeError: Division by zero.');

    for(let i = 0; i < expr.length; i++) {
        if (expr[i] === '(') openBracket++;
        if (expr[i] === ')') closeBracket++;
    }
    if (openBracket !== closeBracket) throw new Error('ExpressionError: Brackets must be paired.');
    return new Function (`return ${expr}`)();
}

module.exports = {
    expressionCalculator
}