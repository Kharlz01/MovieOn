const {
  setLike,
} = require('../../modules/likes')

Component({
  properties: {
    myInfoMovie: {
      type: Object,
      value: {}
    },
    myLike: {
      type: Boolean,
      value: false
    },
    myGenres: {
      type: Object,
      value: {}
    },
  },
  mixins: [],
  data: {
    genres: {}
  },
  props: {
    onMyLike: () => {},
    onMyOpinion: () => {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    myLike() {
      setLike(this.props.myInfoMovie)
      this.props.onMyLike();
    },
    myRate() {
      console.log("Aqui entra a valorar");
      this.props.onMyOpinion();
    },
    myOpinion(e) {
      this.props.onMyOpinion(e.currentTarget.dataset.value);
    }
  },
});
