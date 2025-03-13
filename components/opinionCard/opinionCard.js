Component({
  properties: {
    myInfoMovie: {
      type: Object,
      value: {}
    },
    myFlag: {
      type: Boolean,
      value: false
    },
  },
  mixins: [],
  data: {
    valueRate: 1,
    valueComment: "",
  },
  props: {
    onBack: () => {},
    onSave: () => {},
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},

  methods: {
    radioChange(e) {
      this.setData({
        valueRate: e.detail.value,
      })
    },

    commentChange(e) {
      this.setData({
        valueComment: e.detail.value,
      })
    },

    infoBack() {
      this.props.onBack(false);
    },

    infoSave() {
      if (this.props.myFlag) {
        this.props.onSave(this.data.valueComment, 1)
      } else {
        this.props.onSave(this.data.valueRate, 2)
      }
    }
  },
});
