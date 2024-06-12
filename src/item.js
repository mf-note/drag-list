import { ItemProps } from './props';

const Item = Vue.component('virtual-list-item', {
  props: ItemProps,
  data() {
    return {
      sizeObserver: null,
    };
  },
  mounted() {
    if (typeof ResizeObserver !== 'undefined') {
      this.sizeObserver = new ResizeObserver(() => {
        this.onSizeChange();
      });
      this.$el && this.sizeObserver.observe(this.$el);
    }
  },
  updated() {
    this.onSizeChange();
  },
  beforeDestroy() {
    if (this.sizeObserver) {
      this.sizeObserver.disconnect();
      this.sizeObserver = null;
    }
  },
  methods: {
    onSizeChange() {
      this.$emit('resized', this.dataKey, this.getCurrentSize());
    },
    getCurrentSize() {
      return this.$el ? this.$el[this.sizeKey] : 0;
    },
  },
  render() {
    return this.$slots.default;
  },
});

export default Item;
