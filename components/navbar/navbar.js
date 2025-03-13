Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    goToHome(){
      my.navigateTo({
        url: '/pages/index/index'
      })
    },
    goToBookmarks(){
      my.navigateTo({
        url: '/pages/bookmarks/bookmarks'
      })
    }
  },
});
