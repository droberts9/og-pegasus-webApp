
class AssetController {

  constructor($log, category, asset, utils) {
    'ngInject';

    this.$log = $log;
    this.category = category.categories[0];
    this.asset = asset;
    this.episodes = utils.groupOf(this.category.assets, 2)

  }

  default_asset_image() {
    // TODO: resolve default cannel image
    if (this.asset.image) {
      return this.asset.image;
    } else if (this.asset.images.length > 0) {
      return this.asset.images[0].url;
    } else if (this.asset.preview_image_url != '') {
      return this.asset.preview_image_url;
    } else {
      // TODO: move this to constants
      return "https://placeholdit.imgix.net/~text?txtsize=33&txt=Missing+Image&w=950&h=535";
    }
  }

}

export { AssetController }
