export default class Bjork {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }

  checkType() {
    if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
      return "not a bjork";
    } else if ((this.side1 == this.side2) && (this.side3 !== this.side1 || this.side2) && ((this.side3 !== this.side4))) {
      return "bip bjork";
    } else if ((this.side1 == this.side2) && ((this.side3 == this.side4))) {
      return "bop bjork";
    } else if ((this.side1 !== this.side2 || this.side3 || this.side4) && (this.side2 !== this.side1 || this.side3 || this.side4) && (this.side3 !== this.side1 || this.side2 || this.side4) && (this.side4 !== this.side1 || this.side2 || this.side3)) {
      return "phee bjork";
    } else if ((this.side1 == this.side2 && this.side3) && (this.side2 == this.side1 && this.side3) && (this.side3 == this.side1 && this.side2) && ((this.side4 !== this.side1 || this.side2 || this.side3))) {
      return "phi bjork";
    }
  }
}