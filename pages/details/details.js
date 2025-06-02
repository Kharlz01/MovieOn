const {
  isLiked,
  changeLocal,
  isLocalData,
} = require('../../modules/likes');

const {
  changeGenre
} = require('../../modules/api');

Page({

  data: {
    infoMovie: {},
    infoLocal: {},
    like: false,
    genres: {},
    opinion: false,
    flag: false,
  },

  myLike() {
    this.setData({
      like: !this.data.like
    })
  },

  opinionCard(e) {
    this.setData({
      flag: e,
      opinion: !this.data.opinion,
    })
  },

  saveLocal(e, f) {
    changeLocal({id: this.data.infoMovie.id, data: e, flag: f})
    this.setData({
      opinion: !this.data.opinion,
    })
  },

  onLoad(e) {
    const currentData = JSON.parse(e.data);
    this.setData({
      like: isLiked(currentData.id),
      infoMovie: currentData,
      genres: changeGenre(currentData.genre_ids),
      infoLocal: isLocalData(currentData.id),
    })
  },
});
