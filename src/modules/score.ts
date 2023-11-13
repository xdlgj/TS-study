// 定义记分牌
class ScorePanel {
  score = 0;
  level = 1;
  scoreEle = document.getElementById("score")!;
  levelEle = document.getElementById("level")!;

  // 设置一个最高的等级, 默认值为10
  //maxLevel: number;
  constructor (public maxLevel: number = 10, public upScore: number = 10) {
      this.maxLevel = maxLevel
      this.upScore = upScore
  }

  addScore() {
      this.scoreEle.innerHTML = ++this.score + "";
      // 每10分升级一次
      if (this.score % this.upScore === 0) {
          this.levelUp()
      }
  }
  private levelUp() {
      if (this.level < this.maxLevel) {
          this.levelEle.innerHTML = ++this.level + "";
      }
  }
}

export default ScorePanel;