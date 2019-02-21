module.exports = function (bundler) {
  console.log(bundler)
  bundler.addAssetType('tag', require.resolve('./RiotAsset'))
}
