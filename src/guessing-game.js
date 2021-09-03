class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      return (this.min + Math.floor((this.max - this.min)/2));
    }

    lower() {
      
    }

    greater() {

    }
}

module.exports = GuessingGame;
