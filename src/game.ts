export class Game {
  private _score: number = 0

  get score (): number {
    return this._score
  }

  roll (pins: number): void {
    this._score += pins
  }
}
