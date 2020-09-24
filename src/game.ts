export class Game {
  private rolls: number[] = Array(21).fill(0)
  private currentRoll: number = 0

  score (): number {
    let score = 0
    let frameIndex = 0
    const validations = [
      {
        expect: () => this.isStrike(frameIndex),
        action: () => {
          score += 10 + this.strikeBonus(frameIndex)
          frameIndex++
        }
      },
      {
        expect: () => this.isSpare(frameIndex),
        action: () => {
          score += 10 + this.spareBonus(frameIndex)
          frameIndex += 2
        }
      },
      {
        expect: () => this.isNormalRoll(frameIndex),
        action: () => {
          score += this.sumOfBallsInFrame(frameIndex)
          frameIndex += 2
        }
      }
    ];
    [...new Array(10)].forEach(() =>
      validations.find((validation) => validation.expect()).action()
    )
    return score
  }

  private sumOfBallsInFrame (frameIndex: number): number {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1]
  }

  private strikeBonus (frameIndex: number): number {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2]
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

  private isNormalRoll (frameIndex: number): boolean {
    return !this.isSpare(frameIndex) && !this.isStrike(frameIndex)
  }

  roll (pins: number): void {
    this.rolls[this.currentRoll++] = pins
  }
}
