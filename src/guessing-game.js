class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      return (this.min + Math.ceil((this.max - this.min)/2));
    }

    lower() {
      this.setRange(this.min, this.guess());
      this.guess();
    }

    greater() {
      this.setRange(this.guess(), this.max);
      this.guess();
    }
}

module.exports = GuessingGame;
