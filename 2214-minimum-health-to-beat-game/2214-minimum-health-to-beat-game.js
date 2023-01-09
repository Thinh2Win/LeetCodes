/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
var minimumHealth = function(damage, armor) {
    let health = 0;
    let max = Math.max(...damage);
    let usedArmor = false;
    for (let i = 0; i < damage.length; i++) {
        if (damage[i] === max && !usedArmor) {
            health += armor >= max ? 0 : max - armor;
            usedArmor = true;
        } else {
            health += damage[i];   
        }
    }
    return health + 1;
};