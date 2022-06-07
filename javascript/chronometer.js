class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = null;
    }
    start(printTimeCallback) {
        this.intervalId = setInterval(() => {
            this.currentTime += 1;
            if (printTimeCallback) {
                printTimeCallback();
            }
        }, 1000);
    }
    getMinutes() {
        return Math.floor(this.currentTime / 60);
    }
    getSeconds() {
        return Math.floor(this.currentTime % 60);
    }
    computeTwoDigitNumber(value) {
        let aux = value.toString();
        if (aux.length === 1) {
            return '0' + aux;
        } else {
            return aux;
        }
    }
    stop() {
        clearInterval(this.intervalId);
    }
    reset() {
        this.currentTime = 0;
    }
    split() {
        return (
            this.computeTwoDigitNumber(this.getMinutes()) +
            ':' +
            this.computeTwoDigitNumber(this.getSeconds())
        );
    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = Chronometer;
}