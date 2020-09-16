export class Game {
  private rolls: number[] = Array(21).fill(0)
  private currentRoll: number = 0

  score (): number {
    let score = 0
    for (let i = 0; i < this.rolls.length; i++) {
      score += this.rolls[i]
    }
    return score
  }

  roll (pins: number): void {
    this.rolls[this.currentRoll++] = pins
  }
}
