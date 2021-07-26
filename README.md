#### 1. создаю пустой проект
    + добавляю диретории src -> components
    + добавляю диретории src -> styles

#### 2. Создаю приложение npm init -y
#### 3. Устанавливаю WebPack 
    npm install --save-dev webpack, npm install --save-dev webpack-cli
#### 4. уставливаю Babel  
    npm install --save-dev @babel/core
    npm i babel-loader
    npm install --save-dev @babel/preset-env
    npm install --save-dev @babel/preset-react
#### 5. уставливаю React
    npm i react
    npm i react react-dom
#### 6. создаю src/index.js src/index.html -> внутри div с id="root"
    id="root" - это стартовая точка нашего приложения
#### 7. создаю webpack.config.js
начальная конфигурация
```
const path = require('path');


module.exports = {
    entry: "./src/index.js",
    output: {
        path:path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", // нужно установить отдельно npm install --save-dev style-loader
                    "css-loader" // нужно установить отдельно npm install --save-dev css-loader
                ]
            }
        ]
    }
}
```
#### 8. настраиваю Babel.js
    создаю файл .babelrc и прописываю следуещее:
```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"

    ]
}
```
#### 9 Настраиваю скрипты в package.json
указываю для разработки
```
"start": "webpack --mode development watch" 
```
и для продакшен
```
"build": "webpack --mode production"  
```
запускаю компиляцию *npm start*
#### 10 создаю файл components/App.js и styles/ App.css
```
// App.js
import React from "react"
import "../styles/App.css" // подключаю стили


class App extends React.Component {
    render() {
        return (
        <div>
            <h1>Hello!</h1>
        </div>
        )
    } 

}

export default App
```
#### 11. устанавливаю HTML Webpack Plugin 
    npm i --save-dev html-webpack-plugin
    и подключаю его в webpack.config.js
#### 12. в index.js добавляю:
```
import React from "react"
import ReactDOM from "react-dom"

import App from "./components/App"

ReactDOM.render(<App/>, document.getElementById("root"))
```
index.js отвечает за отрисовку изображения

#### 13. Подключаю webpack-dev-server
    npm install webpack-dev-server --save-dev
    поправляю файл package.json
    - "start": "webpack --mode development --watch",
    + "start": "webpack serve --mode development --open",