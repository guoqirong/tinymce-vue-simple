# tinymce-vue-simple

```
一个基于vue2.x和tinymce封装简单的富文本主键，使其更简单、实用。
```

## 使用实例
```
安装
npm install tinymce-vue-simple

引入
import tinymceSimple from 'tinymce-vue-simple'
import 'tinymce-vue-simple/skins/ui/oxide/skin.css'
Vue.use(tinymceSimple);

使用
html：
<tinymce-simple
  v-model="datavalue"
  :height="200"
  @on-change="changeData"
></tinymce-simple>
js:
changeData(val) {
  console.log(1, val);
}
```


## 本项目安装运行

### 安装支持包
```
npm install
```

### 开发运行项目
```
npm run serve
```

### 打包项目
```
npm run build
```

### 校验文件
```
npm run lint
```

### 打npm包
```
npm run lib
```

## 本项目目录结构

```
├── langs  富文本语言包
├── lib   npm包打包文件存放目录
├── packages  组件源文件
│   └─── TinymceSimple  富文本组件文件夹
│        ├── index.js  组件引入方法设置
│        └── TinymceSimple.vue  组件实现文件
├── public  vue项目公用无需打包的静态文件
├── skins  富文本皮肤文件存放目录
├── .gitignore  git提交忽略文件
├── .npmignore  npm包发布忽略文件
├── package.json  项目包管理文件
└ src  vue项目主目录
    ├── App.vue  vue项目入口文件
    ├── index.js npm包安装引入配置文件
    └── main.js  vue项目主配置文件
```

### vue自定义配置
See [vue自定义配置](https://cli.vuejs.org/config/).
