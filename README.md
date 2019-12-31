# 1、vue进阶

### 1.1、**$emit**和 **$on**

##### 1.1.1、基本使用

```js
<template>
   <div @click="clickHandle">点击触发</div>
</template>

<script>
export default {
  data(){
    return {
      name: "赵丽颖"
    }
  },
   created() {
     this.$on('myevent',this.handleEvent); 
   },
   methods:{
     handleEvent(e){
       console.log(this.name,e)
     },
     clickHandle() {
      this.$emit('myevent',"这是我自己传的参数"); //赵丽颖 这是我自己传的参数
     }
   }
}
</script>

```

##### 1.1.2、$on第一个事件可以是一个数组类型：

> 可以给不同的事件绑定同一种事件类型。

```js
 created() {
     this.$on(['myevent','myevent2'],this.handleEvent); //定义多个
   },
   methods:{
     handleEvent(e){
       console.log(this.name,e)
     },
     clickHandle() {
      this.$emit('myevent',"这是我自己传的参数"); //赵丽颖 这是我自己传的参数
      this.$emit('myevent2',"2222"); //赵丽颖 2222

     }
```

##### 1.1.3、原理

在vue实例上面挂载了一个属性_events，打印this看下里面有个_events

>  注意看会发现：自定义事件后面是一个数组，这里可以说明我们可以给自定义事件定义很多个执行函数。
>
> 先定义的先触发，后定义的后触发。

```
_events: {
   myevent:[handleEvent(e){
       console.log(this.name,e)
     }],
   myevent2:[handleEvent(e){
       console.log(this.name,e)
     }]
}
```

**一个自定义事件绑定多个方法**

```js
data(){
    return {
      name: "赵丽颖"
    }
  },
   created() {
     this.$on('myevent',this.handleEvent);
     this.$on('myevent',this.handleEvent2);

     console.log(this)
   },
   methods:{
     handleEvent(e){
       console.log(this.name,e)
     },
      handleEvent2(e){
       console.log("第二个处理函数")
     },
     clickHandle() {
      this.$emit('myevent',"这是我自己传的参数");
     }
   }
//赵丽颖 这是我自己传的参数
//第二个处理函数
```

在vue实例里打印出来

```
_events: {
   myevent:[
       handleEvent(e){
           console.log(this.name,e)
         },
       handleEvent2(e){
           console.log("第二个处理函数")
         }
     ]
}
```



### 1.2、directive

对黄毅老师源码解读





# 2、前端框架搭建

这里使用vue-element-admin

vue-admin-template

```
git clone git@github.com:PanJiaChen/vue-element-admin.git

```

启动登录报错解决： https://ask.csdn.net/questions/1049118 

在setting.js里面可以修改网页的title

在main.js里面修改下生产环境不然登录报错

config => config.devtool('cheap-source-map')   source-map   

（ source-map 我们看到的源码，打包慢点，适合调试  cheap-source-map：对源码做了一些调整）







链接： http://www.youbaobao.xyz/admin-docs/ 