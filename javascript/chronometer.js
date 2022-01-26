class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
    this.currentTime += 1
    if(callback)
    callback()
  
  }, 1 * 1000);
  
  }
 
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    const seconds = this.currentTime - (this.getMinutes() * 60)
    return seconds
    // if(this.currentTime % 60 !== 0) {}
    // let seconds += this.currentTime % 60}
  }


  computeTwoDigitNumber(value) {
    let number = value.toString()
    if(number.length === 2) return number
    else {
      return "0" + number
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes().toString())
    let sec = this.computeTwoDigitNumber(this.getSeconds().toString())
    let splitTime = `${min}:${sec}`
    return splitTime
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
