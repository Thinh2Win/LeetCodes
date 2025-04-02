/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
var minimumHealth = function(damage, armor) {
    let totalDamage = 0;
    let max = 0;
    for (let num of damage) {
        totalDamage += num;
        max = Math.max(max, num);
    }
    if (armor >= max) {
        totalDamage -= max;
    } else {
        totalDamage -= armor;
    }

    return totalDamage + 1;
};