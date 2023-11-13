import ScorePanel from "./score";
import Snake from "./snake";
import Food from "./food";


export default class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  // 创建一个属性用来存储蛇的移动方向
  direction = "ArrowRight";
  // 创建一个属性记录游戏是否结束
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
  }
  // 初始化游戏
  init() {
    // 绑定键盘事件, bind绑定game对象，不然的的this执行的是document
    document.addEventListener("keydown", this.keydownHandler.bind(this))
    this.run(false);
  }
  // 创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    /**
      ArrowDown 
      ArrowUp
      ArrowLeft
      ArrowRight
     */
    this.direction = event.key;
    this.run(true);
  }
  // 创建一个控制蛇移动的方法
  run(immediately: boolean) {
    let x = this.snake.X;
    let y = this.snake.Y;
    switch (this.direction) {
      case "ArrowDown":
      case "Down":
        y += 10
        break
      case "ArrowUp":
      case "Up":
        y -= 10
        break
      case "ArrowLeft":
      case "Left":
        x -= 10;
        break
      case "ArrowRight":
      case "Right":
        x += 10;
        break
    }
    // 检查蛇是否吃到了食物
    this.checkEat(x, y);
    try {
      this.snake.X = x;
      this.snake.Y = y;
    } catch (e: any) {
      alert(e.message + ",游戏结束！");
      this.isLive = false;
    }
    this.isLive && !immediately && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level) * 30);
  }
  // 定义一个方法，用来检查蛇是否吃到食物
  checkEat(x: number, y: number) {
    if (this.food.X === x && this.food.Y === y) {
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }
}