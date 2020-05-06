let arr=[3,5,7,8,9,3,4,5,111,9,9,9,9,1,2,4,4,5,1]

function mp(arr){
    var len = arr.length;
    let temp;
    // for (var i = 0; i < len - 1; i++) {
    //     for (var j = 0; j < len - 1 - i; j++) {
    //         if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
    //             var temp = arr[j+1];        // 元素交换
    //             arr[j+1] = arr[j];
    //             arr[j] = temp;
    //         }
    //     }
    // }
    for(let i=0 ; i<len;i++){
        for(let j=i;j<len;j++){
            if(arr[i]>arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr;
}
console.log(mp(arr))



 https://marketplace.visualstudio.com/items?itemName=steoates.autoimport

 名称: Auto Rename Tag
id: formulahendry.auto-rename-tag
说明: Auto rename paired HTML/XML tag
版本: 0.1.1
发布者: Jun Han
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag

名称: Beautify css/sass/scss/less
id: michelemelluso.code-beautifier
说明: Beautify css, sass and less code (extension for Visual Studio Code)
版本: 2.3.3
发布者: michelemelluso
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=michelemelluso.code-beautifier


名称: Better Comments
id: aaron-bond.better-comments
说明: Improve your code commenting by annotating with alert, informational, TODOs, and more!
版本: 2.0.5
发布者: Aaron Bond
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments


名称: Bluloco Dark Theme
id: uloco.theme-bluloco-dark
说明: A fancy but yet sophisticated dark designer color scheme / theme.
版本: 3.1.0
发布者: Umut Topuzoğlu
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=uloco.theme-bluloco-dark


名称: Bracket Pair Colorizer
id: coenraads.bracket-pair-colorizer
说明: A customizable extension for colorizing matching brackets
版本: 1.0.61
发布者: CoenraadS
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer


名称: Debugger for Chrome
id: msjsdiag.debugger-for-chrome
说明: Debug your JavaScript code in the Chrome browser, or any other target that supports the Chrome Debugger protocol.
版本: 4.12.6
发布者: Microsoft
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome




名称: HTML Snippets
id: abusaidm.html-snippets
说明: Full HTML tags including HTML5 Snippets
版本: 0.2.1
发布者: Mohamed Abusaid
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets


名称: JavaScript (ES6) code snippets
id: xabikos.javascriptsnippets
说明: Code snippets for JavaScript in ES6 syntax
版本: 1.7.2
发布者: charalampos karypidis
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets


名称: JS JSX Snippets
id: skyran.js-jsx-snippets
说明: Simple extensions for React, Redux in JS with babel and ES6 syntax
版本: 10.1.0
发布者: sky ran
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=skyran.js-jsx-snippets


名称: Live Server
id: ritwickdey.liveserver
说明: Launch a development local Server with live reload feature for static & dynamic pages
版本: 5.6.1
发布者: Ritwick Dey
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer


名称: open in browser
id: techer.open-in-browser
说明: This allows you to open the current file in your default browser or application.
版本: 2.0.0
发布者: TechER
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser


名称: Path Intellisense
id: christian-kohler.path-intellisense
说明: Visual Studio Code plugin that autocompletes filenames
版本: 1.4.2
发布者: Christian Kohler
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense


名称: Prettier - Code formatter
id: esbenp.prettier-vscode
说明: Code formatter using prettier
版本: 4.1.1
发布者: Esben Petersen
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode


名称: Prettify JSON
id: mohsen1.prettify-json
说明: Visual Studio Code Prettify JSON Extension
版本: 0.0.3
发布者: Mohsen Azimi
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json

名称: Vetur
id: octref.vetur
说明: Vue tooling for VS Code
版本: 0.24.0
发布者: Pine Wu
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=octref.vetur

名称: vscode-icons
id: vscode-icons-team.vscode-icons
说明: Icons for Visual Studio Code
版本: 10.0.0
发布者: VSCode Icons Team
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons



名称: vue
id: jcbuisson.vue
说明: Syntax Highlight for Vue.js
版本: 0.1.5
发布者: jcbuisson
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=jcbuisson.vue

名称: Vue 2 Snippets
id: hollowtree.vue-snippets
说明: A Vue.js 2 Extension
版本: 0.1.11
发布者: hollowtree
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets


名称: vue-format
id: febean.vue-format
说明: A beautify extension for .vue file
版本: 0.1.8
发布者: fe_bean
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=febean.vue-format