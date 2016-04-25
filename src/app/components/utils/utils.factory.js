
import _ from 'lodash';

class Utils {
  constructor() {
  }

  groupOf(collection, size) {
    let grp = _.groupBy(collection, (element, index) => {
      return Math.floor(index/size);
    });
    return _.toArray(grp);
  }
}

export { Utils }
