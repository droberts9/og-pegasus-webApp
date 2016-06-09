
import _ from 'lodash';

class Utils {
  constructor(responsiveHelper) {
    'ngInject';
    this.responsiveHelper = responsiveHelper;
  }

  groupOf(collection, size) {
    let grp = _.groupBy(collection, (element, index) => {
      return Math.floor(index/size);
    });
    return _.toArray(grp);
  }

  /* eslint-disable */
  encodeUri(value) {
    return window.encodeURIComponent(value);
  }
  /* eslint-enable */

  responsiveImageSize() {
    var rc = '';

    if (this.responsiveHelper.isMobile()) {
      rc =  'medium';
    } else if (this.responsiveHelper.isDesktop()) {
      rc = 'big';
    } else {
      rc = 'medium';
    }
    return rc;
  }

  extractImageSize(sizeRequest, imagesBag) {
    var rc = undefined;
    for (var i = 0, l = imagesBag.length; i < l; i ++) {
      if (imagesBag[i].kind === sizeRequest) {
        rc = imagesBag[i].url;
        break;
      }
    }
    return rc;
  }

  stubImage(sizeRequest) {
    var req = '';
    switch (sizeRequest) {
      case 'small':
        req = "w=266&h=150";
        break;
      case 'medium':
        req = "w=720&h=405";
        break;
      default:
        req = "w=1920&h=1080";
    }
    // TODO: move this to constants
    return "https://placeholdit.imgix.net/~text?txtsize=33&txt=Missing+Image&"+req;
  }

}

export { Utils }
