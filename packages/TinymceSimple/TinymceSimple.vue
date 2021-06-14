<template>
	<div class='tinymce'>
		<editor id='tinymce' v-model='tinymceDara' :init='init'>
		</editor>
	</div>
</template>

<script>
import tinymce from 'tinymce/tinymce.js'
// import 'tinymce/themes/mobile/index.js'
import 'tinymce/themes/silver/index.js'
import Editor from '@tinymce/tinymce-vue'

// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import 'tinymce/plugins/image'; // 插入上传图片插件
import 'tinymce/plugins/link';  // 插入链接
import 'tinymce/plugins/code';  // 源代码
import 'tinymce/plugins/table'; // 插入表格插件
import 'tinymce/plugins/lists'; // 网格线
import 'tinymce/plugins/contextmenu';
import 'tinymce/plugins/wordcount'; // 字数统计插件
import 'tinymce/plugins/colorpicker';
import 'tinymce/plugins/textcolor';

//vue-cli 3.x 需要在这引入中文包
import '../../langs/zh_CN.js'
import 'tinymce/icons/default/icons.min.js' //图标
// 在使用事要映入，不然富文本编辑器不会显示
import '../../skins/ui/oxide/skin.css'

export default {
  name: 'TinymceSimple',
  components: {
    Editor
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    // 语言包路径
    languageUrl: {
      type: String,
      default: '/tinymce/langs/zh_CN.js'
    },
    // 语言，默认中文
    language: {
      type: String,
      default: 'zh_CN'
    },
    // skin路径（皮肤）
    skinUrl: {
      type: String,
      default: '/tinymce/skins/ui/oxide'
    },
    // 内容体iframe样式
    contentCss: {
      type: String,
      default: '/tinymce/skins/content/default/content.css'
    },
    // 编辑器高度
    height: {
      type: Number,
      default: 500
    },
    // 插件集合
    plugins: {
      type: String,
      default: 'link lists image code table colorpicker textcolor wordcount contextmenu'
    },
    // 工具栏配置
    toolbar: {
      type: String,
      default: 'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat'
    },
    // 是否禁用“Powered by TinyMCE”
    branding: {
      type: Boolean,
      default: false
    },
    // 顶部菜单栏显示
    menubar: {
      type: Boolean,
      default: true
    },
    // 图片上传地址
    imagesUploadUrl: {
      type: String,
      default: ''
    }
  },
  computed: {
    init() {
      return {
        language_url: this.languageUrl, // 语言包的路径
        language: this.language, //语言
        skin_url: this.skinUrl, // skin路径（皮肤）
        content_css: this.contentCss, // 内容体样式
        height: this.height, // 编辑器高度
        plugins: this.plugins, //插件集合
        toolbar: this.toolbar, // 工具栏配置
        branding: this.branding, // 是否禁用“Powered by TinyMCE”
        menubar: this.menubar, // 顶部菜单栏显示
        images_upload_url: this.imagesUploadUrl,  // 图片上传地址
        // 图片上传处理函数
        images_upload_handler: (blobInfo) => {
          console.log(blobInfo);
          this.$emit('images_upload_handler', blobInfo);
        }
      }
    },
  },
  data() {
    return {
      tinymceDara: '',
    }
  },
  mounted() {
    this.tinymceDara = this.value;
    tinymce.init({})
  },
  watch: {
    // 监听父层值包含
    value(newValue) {
      this.tinymceDara = newValue;
    },
    // 编辑器修改
    tinymceDara(newValue) {
      this.$emit('on-change', newValue);
    },
  },
}
</script>