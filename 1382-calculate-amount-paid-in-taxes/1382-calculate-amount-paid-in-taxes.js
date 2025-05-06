/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let taxedCash = 0;
    let i = 0;
    while (income > 0) {
        const [upper2, num2] = brackets[i];
        const upper1 = brackets?.[i - 1]?.[0] || 0;
        let percent = num2 / 100;
        let bracket = upper2 - upper1;
        let taxable = Math.min(income, bracket);
        taxedCash += taxable * percent;
        income -= taxable; 
        i += 1;
    }
    return taxedCash;
};