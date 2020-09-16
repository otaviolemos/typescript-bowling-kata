export class Game {
  private rolls: number[] = Array(21).fill(0)
  private currentRoll: number = 0

  score (): number {
    let score = 0
    let frameIndex = 0
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        score += 10 + this.strikeBonus(frameIndex)
        frameIndex++
      } else if (this.isSpare(frameIndex)) {
        score += 10 + this.spareBonus(frameIndex)
        frameIndex += 2
      } else {
        score += this.sumOfBallsInFrame(frameIndex)
        frameIndex += 2
      }
    }
    return score
  }

  private sumOfBallsInFrame (frameIndex: number): number {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1]
  }

  private strikeBonus (frameIndex: number): number {
    return this.rolls[frameIndex + 1] +
           this.rolls[frameIndex + 2]
  }

  private spareBonus (frameIndex: number): number {
    return this.rolls[frameIndex + 2]
  }

  private isStrike (frameIndex: number): boolean {
    return this.rolls[frameIndex] === 10
  }

  private isSpare (frameIndex: number): boolean {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10
  }

  roll (pins: number): void {
    this.rolls[this.currentRoll++] = pins
  }
}
