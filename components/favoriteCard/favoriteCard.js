const {
  setLike,
} = require('../../modules/likes')

Component({
  properties: {
    myFavoriteMovies: {
      type: Object,
      value: {}
    },
  },
  mixins: [],
  data: {
    ref: false,
    movieTitle: "",
    movieKey: 0
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    goToDetails(e){
      const key = parseInt(e.currentTarget.dataset.value);
      const movieData = JSON.stringify(this.props.myFavoriteMovies[key]);
      my.navigateTo({
        url: '/pages/details/details?data='+movieData
      })
    },

    preDelete(e){
      const key = parseInt(e.currentTarget.dataset.value);
      this.setData({
        movieTitle: this.props.myFavoriteMovies[key].title,
        ref: !this.data.ref,
        movieKey: key,
      })
      
    },

    omitDelete(){
      this.setData({
        ref: !this.data.ref,
      })
    },

    deleteLike(){
      setLike(this.props.myFavoriteMovies[this.data.movieKey]);
      this.setData({
        movieTitle: "",
        movieKey: 0,
        ref: false,
      })
      my.navigateTo({
        url: '/pages/bookmarks/bookmarks'
      })
    }
  },
});
