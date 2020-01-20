### webpack 打包原理
+ 初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler。
+ 编译：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该Module 依赖的 Module，递归地进行编译处理。
+ 输出：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统
### 几个概念
+ Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
+ Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开+ 始递归找出所有依赖的模块。
+ Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
+ Loader：模块转换器，用于把模块原内容按照需求转换成新内容。webpack 从右到左加载loader
+ Plugin：扩展插件，在 Webpack 构建流程中的特定时机会广播出对应的事件，插件可以监听这些事件的发+ 生，在特定时机做对应的事情。

#### 插件