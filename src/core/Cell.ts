export class Cell {
  constructor (
    private x: number,
    private y: number,
    private color: string
  ) {}

  get getX () {
    return this.x
  }

  get getY () {
    return this.y
  }

  get getColor () {
    return this.color
  }

  set setColor (color: string) {
    this.color = color
  }
}