
export function TimerFilter() {
  'ngInject';

  return function(input) {

    input = parseInt(input, 10);
    input = isNaN(input) ? 0 : input;

    let totalSec = input / 1000;
    let hours = Math.ceil(parseInt( totalSec / 3600 ) % 24);
    let minutes = Math.ceil(parseInt( totalSec / 60 ) % 60);
    let seconds = Math.ceil(totalSec % 60);

    var result = [];
    if (hours > 0) {
      result.push(hours < 10 ? "0" + hours : hours)
    }
    result.push(minutes < 10 ? "0" + minutes : minutes);
    result.push(seconds  < 10 ? "0" + seconds : seconds);

    return result.join(':');
  }

}

