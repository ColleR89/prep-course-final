export type XO = "X" | "O" | "-";

export class Game {
  whosTurn: XO = "X";
  gameCells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

  getCells(): XO[] {
    return this.gameCells;
  }

  getTurn(): XO {
    return this.whosTurn;
  }

  getWinner(): XO {
    let c: number = 1;
    let t: XO;
    let b: XO[] = this.gameCells;
    while (c <= 2) {
      if (c == 1) t = "O";
      else t = "X";
      if (
        // horizontal
        (b[0] == t && b[1] == t && b[2] == t) ||
        (b[3] == t && b[4] == t && b[5] == t) ||
        (b[6] == t && b[7] == t && b[8] == t) ||
        // vertical
        (b[0] == t && b[3] == t && b[6] == t) ||
        (b[1] == t && b[4] == t && b[7] == t) ||
        (b[2] == t && b[5] == t && b[8] == t) ||
        // diagonal
        (b[0] == t && b[4] == t && b[8] == t) ||
        (b[2] == t && b[4] == t && b[6] == t)
      ) {
        return t;
      }
      c++;
    }
    return "-";
  }

  isTie(): boolean {
    if (this.gameCells.find((elem) => elem === "-")) {
      return false;
    } else {
      return true;
    }
  }

  onClick(i: number): void {
    if (this.gameCells[i] === "-") {
      this.gameCells[i] = this.whosTurn;
      this.whosTurn === "X" ? (this.whosTurn = "O") : (this.whosTurn = "X");
      console.log(`cell ${i} clicked`);
    }
  }

  restart(): void {
    this.gameCells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    this.whosTurn = "X";
    console.log("restart called");
  }
}
