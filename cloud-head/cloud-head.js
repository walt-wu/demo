import cloudAvatar from 'components/cloud-avatar/cloud-avatar.vue'
export default {
  name: 'cloud-head',
  components: {
    cloudAvatar
  },
  props: {
    menuIndex: {
      type: Number,
      default: 0
    }
  },
  directives: {
    clickoutside: {
      bind(el, binding) {
        function documentHandler(e) {
          // 这里判断点击的元素是否是本身，是本身，则返回
          if (el.contains(e.target)) {
            return false;
          }
          // 判断指令中是否绑定了函数
          if (binding.expression) {
            // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
            binding.value(e);
          }
        }
        // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', documentHandler);
      }
    },
    update() { },
    unbind(el) {
      // 解除事件监听
      document.removeEventListener('click', el.__vueClickOutside__);
      delete el.__vueClickOutside__;
    },
  },
  data () {
    return {
      showMenu: false,
      index: 0,
      menu: [
        {
          name: '云盘',
          link: '/cloud-disk',
          logo: require('~/images/cloud-logo.svg'),
          className: 'cloud-dist'
        },
        {
          name: '板书',
          link: '/blackboard',
          logo: require('~/images/blackboard.svg'),
          className: 'blackboard'
        }
      ]
    }
  },
  methods: {
    /**
     * 菜单展开与隐藏
     */
    toggleMenu () { 
      this.showMenu = !this.showMenu;
    },
    /**
     * 关闭菜单显示
     */
    closeMenu() {
      this.showMenu = false;
    },
    /**
     * 跳转链接
     * @param {number} i 菜单索引值 
     */
    changeLink (i) {
      window._czc.push(["_trackEvent", "云盘", "切换", "", 0, this.menu[i].className]);
      this.$router.push({ path: this.menu[i].link})
    }
  }
}