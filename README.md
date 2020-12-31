# umi project

## 使用umi + dva + antd开发
视频地址: https://www.bilibili.com/video/BV1qz411z7s3?p=1

### 开始之前
技术积累 _最好按顺序学习_: 
+ 语言: ES/TypeScript/JSX, Generator函数
+ 基础框架: React, React-Router, Redux, Redux-Saga
+ 组件库: Ant Design, Ant Design Mobile
+ 脚手架: DvaJS, UmiJS

以上这些内容的关系:
+ DvaJS将React、Redux、Redux-Saga、React-Router和fetch整合到一起，简化了配置和代码编写
+ UmiJS在DvaJS的基础之上强化了路由，使得整体开发更加简便
 > 虽然有了dva和umi，免去了很多繁杂的配置和代码编写，但是下层仍然是Redux这些框架，dva和umi只是提供了一些约定，按照这些约定来开发可以提高开发效率，但并为对这些框架进行改造，所以对于这些基础的学习是必不可少的，主要的学习重点还是放在基础语言和框架的学习。

### 实践

使用umi的约定式路由，只需要在`src/pages`下创建文件夹，并在文件夹中放置如下文件
+ index.tsx - 页面组件
+ model.ts - dva model
+ service.ts - api等异步操作方法
+ components/ - 子组件