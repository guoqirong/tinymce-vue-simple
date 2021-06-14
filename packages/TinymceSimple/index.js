// 为组件提供 install 安装方法，供按需引入
import TinymceSimple from './TinymceSimple.vue';
TinymceSimple.install  = (Vue) => {
  Vue.component(TinymceSimple.name,TinymceSimple);
}
export default TinymceSimple;