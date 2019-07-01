export default {
  name: 'preview-image',
  props: {
    imgUrlArr: {
      type: Array,
      default: [],
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    show: {
      get: function() {
        return this.showPreview;
      }
    },
    height: {
      get: function () {
        return window.innerHeight + 'px';
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}