### 一、环境初始化

> 菜鸟教程：http://www.runoob.com/react/react-install.html

```shell
# 配置npm镜像库
sudo npm install -g cnpm --registry=https://registry.npm.taobao.org
sudo npm config set registry https://registry.npm.taobao.org

# 安装create-react-app模块，快速快速初始化项目结构
sudo cnpm install -g create-react-app
sudo create-react-app my-app
sudo cd my-app/
sudo npm start

# 访问如下链接，说明环境已经已经启动
# 链路测试：http://localhost:3000/
```

#### 二、表格组件开发

> 说明：直接用VSCode打开对应文件夹和目录，可以安装VSCode对应的React插件，方便开发。

```js
import React, { Component } from 'react';
import './App.css';

// 表格组件
class Table extends React.Component {
  render() {
    return (
          <table>
            <tbody>
              <tr>
                {this.props.headers.map((cell) =>  <th> {cell} </th> )}
               </tr>

              {this.props.rows.map((row) => 
                <tr>{row.map((cell) => (<td>{cell}</td>))} </tr>
              )}
            </tbody>
          </table>
    
    );
  }
}

// 应用入口
class App extends Component {
  render() {
    const headers = ['姓名', '职业'];
    const rows = [
      ['mir', '程序员'],
      ['wgx', '程序员']
    ];
    return (
        <Table rows={rows} headers={headers} />
    );
  }
}

export default App;

```

