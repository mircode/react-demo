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
