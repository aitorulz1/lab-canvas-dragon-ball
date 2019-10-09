class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      // printTime()
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }

  twoDigitNumbers(num) {
    return num > 9 ? "" + num : "0" + num;
  }

  stopClick() {
      clearInterval(this.intervalId)
  }

  resetClick() {
    this.stopClick()
    this.currentTime = 0;
    printTime()
    this.startClick()
  }
  
  splitClick() {
    return this.currentTime;
  }
}



/////////////////////////////////////////////////////////


