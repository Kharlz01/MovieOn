const {
  likeList
} = require('../../modules/likes')

Page({
  data: {
    favoriteMovies: {}
  },
  onLoad() {
    this.setData({
      favoriteMovies: likeList(),
    })
  },
});
