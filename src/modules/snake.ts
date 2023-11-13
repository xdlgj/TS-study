export default class Snake {
  // 表示蛇的容器
  container: HTMLElement;
  // 表示蛇头
  header: HTMLElement;
  // 表示蛇的身体（包括蛇头）
  bodies: HTMLCollection;
  // 增加身体的方法
  constructor() {
    this.container = document.getElementById("snake")!;
    this.header = document.querySelector("#snake > div") as HTMLElement;
    this.bodies = this.container.getElementsByTagName("div");
  }
  // 获取蛇头的坐标
  get X() {
    return this.header.offsetLeft;
  }
  get Y() {
    return this.header.offsetTop;
  }
  // 设置蛇头的位置
  set X(value) {
    if (this.X == value) {
      return;
    }
    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙了")
    }
    // 蛇不能掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      console.log("蛇发生了掉头");
      if (value > this.X) { // 表示按下了右键， 我们需要忽略本次事件
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }
    this.moveBody();
    this.header.style.left = `${value}px`;
    this.checkHeadBody();
  }
  set Y(value) {
    if (this.Y == value) {
      return;
    }
    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙了")
    }
    // 蛇不能掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      console.log("蛇发生了掉头");
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }
    this.moveBody();
    this.header.style.top = `${value}px`;
    this.checkHeadBody()
  }
  // 蛇增加身体的方法
  addBody() {
    this.container.insertAdjacentHTML("beforeend", "<div></div>")
  }
  // 添加一个蛇身体移动方法,最后一节的位置等于前面的位置，依次类推
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = x + "px";
      (this.bodies[i] as HTMLElement).style.top = y + "px";
    }
  }
  checkHeadBody() {
    // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
    for (let i=1;i<this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      if (this.X == bd.offsetLeft && this.Y == bd.offsetTop) {
        throw new Error("撞到自己了");
      }
    }
  }
}