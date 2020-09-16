export class Game {
  private rolls: number[] = Array(21).fill(0)
  private currentRoll: number = 0

  score (): number {
    let score = 0
    let frameIndex = 0
    for (let frame = 0; frame < 10; frame++) {
      if (this.isSpare(frameIndex)) {
        score += 10 + this.rolls[frameIndex + 2]
        frameIndex += 2
      } else {
        score += this.rolls[frameIndex] + this.rolls[frameIndex + 1]
        frameIndex += 2
      }
    }
    return score
  }

  private isSpare (frameIndex: number): boolean {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10
  }

  roll (pins: number): void {
    this.rolls[this.currentRoll++] = pins
  }
}
