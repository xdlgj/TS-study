// 定义食物类
class Food {
  // 定义一个属性表示食物所对应的元素
  element: HTMLElement;
  constructor() {
      // !表示我们明确知道可以获取到这个元素
      this.element = document.getElementById("food")!;
  }
  // 定义食物x坐标的方法
  get X() {
      return this.element.offsetLeft;
  }
  get Y() {
      return this.element.offsetTop;
  }
  // 修改食物的位置
  change() {
      // 最小0 最大 300-10， 还必须是10的倍数
      let top = Math.round(Math.random() * 29) * 10;
      let left = Math.round(Math.random() * 29) * 10 
      this.element.style.left = `${left}px`;
      this.element.style.top = `${top}px`;
  }
}
export default Food;