
import _ from 'lodash';

class Utils {
  constructor(responsiveHelper) {
    'ngInject';
    this.responsiveHelper = responsiveHelper;

    this.sizesDict = {
      'thumb':   '96x54',
      'thumb2':  '106x59',
      'mini':    '213x120',
      'small':   '320x180',
      'regular': '426x240',
      'medium':  '640x360',
      'laptop':  '1280x720',
      'hd':      '1920x1080',
      'dumb':    '1x1'
    }
    this.sizesOrder = ['thumb', 'thumb2', 'mini', 'small', 'regular', 'medium', 'laptop', 'hd', 'dumb'];
    this.sizesSeriesOrder = ['small', 'medium', 'big'];

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

  // This work for Assets
  extractImageSize(sizeRequest, imagesBag) {
    var sizePos = _.indexOf(this.sizesOrder, sizeRequest);
    if (sizePos < 0) {
      return undefined;
    }
    var image = undefined;
    for (var i = sizePos, l = this.sizesOrder.length; i < l; i ++) {
      var size = this.sizesDict[this.sizesOrder[i]];
      image = _.find(imagesBag, (o)=> {
        // if match the size return it
        if (o.kind === size) {
          return true;
        }
        var s = o.kind.split('x');
        var t = size.split('x');
        if ((parseInt(s[0],10) > parseInt(t[0],10)) && (parseInt(s[1],10) > (parseInt(t[1],10)))) {
          // if the next size is bigger that the requested return it
          return true;
        }
      });
      if (image) {
        break;
      }
    }
    if (image) {
      return image.url;
    }
    return undefined;
  }

  // This work for Series
  extractImageSizeSerie(sizeRequest, imagesBag) {
    var sizePos = _.indexOf(this.sizesSeriesOrder, sizeRequest);
    if (sizePos < 0) {
      return undefined;
    }
    var image = undefined;
    for (var i = sizePos, l = this.sizesSeriesOrder.length; i < l; i ++) {
      image = _.find(imagesBag, (o)=> {
        return o.kind === sizeRequest;
      });
      if (image) {
        break;
      }
    }
    if (image) {
      return image.url;
    }
    return undefined;
  }

  stubImage(sizeRequest) {
    var req = '';
    switch (sizeRequest) {
      case 'small':
        req = "w=320&h=180";
        break;
      case 'medium':
        req = "w=640&h=360";
        break;
      default:
        req = "w=1920&h=1080";
    }
    // TODO: move this to constants
    return "https://placeholdit.imgix.net/~text?txtsize=33&txt=Missing+Image&"+req;
  }

}

export { Utils }
