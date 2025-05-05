/**
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function(width, height, food) {
    this.foods = food.reverse();
    this.currFood = this.foods.pop();
    this.dBound = height;
    this.rBound = width;
    // use to check boundaries
 
    // track snack using array 
    // have set for quick look ups for collisions 
    this.snake = [[0,0]];
    this.snakeMap = new Set();
    this.snakeMap.add('0,0');
    this.score = 0;
};

/** 
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function(direction) {
    const dMap = {
        'R': [0,1],
        'L': [0,-1],
        'U': [-1,0],
        'D': [1,0],
    };
    const [x, y] = dMap[direction];
    const [sRow, sCol] = this.snake.at(-1);
    const newRow = sRow + x;
    const newCol = sCol + y;
    const coor = `${newRow},${newCol}`
    // check if we collided with a wall(check boundaries)
    if (newRow < 0 || newRow >= this.dBound) return -1;
    if (newCol < 0 || newCol >= this.rBound) return -1;

    let square = 0;
    if (this.currFood && this.currFood[0] === newRow && this.currFood[1] === newCol) square = 'F';
    // everytime we hit food, the food square becomes new snake head
        // change 'F' to 'S, push coordinates of food into snake array 
    if (square === 'F') {
        this.snakeMap.add(coor);
        this.snake.push([newRow, newCol]);
        // spawn new food
        if (this.currFood) {
            this.currFood = this.foods.pop();
        }
        this.score += 1;
    } else {
        // move normally 
        // when we move we shift from snake array
        // change those coordinates on the board back to 0
        // then push next square coor 
        // then set next square on board to S
        const [rRow, rCol] = this.snake.shift();
        this.snakeMap.delete(`${rRow},${rCol}`);
        this.snake.push([newRow, newCol]);
        // check if we collided into ourself
        if (this.snakeMap.has(coor)) return -1;
        // if not we can set the square 
        this.snakeMap.add(coor);
    }
    // console.log('board', this.snakeMap);
    // console.log('snake', this.snake);
    return this.score;
};

/** 
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */