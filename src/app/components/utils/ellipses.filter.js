
export function EllipsesFilter() {

  return function(input, length) {
    //let reg = new RegExp("^(.{"+length+"}[^\s]*).*")
    //return input.replace(reg, "$1");

    // trim the string to the maximum length
    var trimmedString = input.substr(0, length);
    //re-trim if we are in the middle of a word
    return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + "...";
  }

}
