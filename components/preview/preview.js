Component({
  properties: {
    myResult: {
      type: Object,
      value: {}
    },
    myCurrentPage: {
      type: Number,
      value: 1
    },
    myPages: {
      type: Number,
      value: 0
    },
    myKeyword: {
      type: String,
      value: ""
    },
  },
  mixins: [],
  data: {
    visiblePages: [1, 2, 3, 4, 5]
   },
  props: {
    onShow: () => {},
    onQuery: () => {},
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},

  methods: {

    newQuery(e) {
      const page = e.currentTarget.dataset.value;
      const { myPages } = this.props
      const flag = myPages - 4;

      my.pageScrollTo({
        scrollTop: 0
      });

      if (page > flag) {
        this.setData({
          visiblePages: [flag, flag+1, flag+2, flag+3, myPages]
        })
      } else {
        if (page > 4) {
          this.setData({
            visiblePages: [page-2, page-1, page, page+1, page+2]
          })
        } else {
          this.setData({
            visiblePages: [1, 2, 3, 4, 5]
          })
        }

      }

      this.props.onQuery(this.props.myKeyword, page)
    },

    showDetails(e)  {
      const key = e.currentTarget.dataset.value;
      this.props.onShow(key)
    },
  }
});