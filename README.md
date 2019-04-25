# annotation

## Webpack Loader  
webpack loader阶段的简易清除 debugger // 单行注释  及console打印

### 使用方法

```
npm i -D delete-annotation-dev

```
webpack
```js
{
    module: {
        rules: [
            {
                 test: /\.js$/,
                 loader: 'delete-annotation-dev'
            },
            // 也可以搭配其他loader转换后的js文件， 如ts
            // 注意：这是个人所写的简单loader 不确保兼容性效果,
            {
                test: /\.ts$/,
                loader: ['delete-annotation-dev', 'awesome-typescript-loader']
            }
        ]
    }
}
```