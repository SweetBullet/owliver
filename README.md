# owliver
开启mock，在package.json中添加proxy：       
"start": "dora --plugins \"proxy,webpack,webpack-hmr,browser-history?index=/src/index.html\""       
           
启动：在package.json、webpack所在目录下npm start       
安装：在package.json、webpack所在目录下npm install      
打包：在package.json、webpack所在目录下npm run build     
更改打包输出的目录：在webpack.config.js中加webpackConfig.output=｛path:'./dist',name:'index.js'｝               
更改入口：在webpack.config.js中加webpackConfig.entry=｛index:'./src/index.js'｝ 或者在package.json中："entry": {
"index": "./src/index.js"
  }
