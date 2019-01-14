import React from 'react';

class Table extends React.Component {
  render() {
    return (
          <table>
            <tbody>
              <tr>{this.props.headers.map((cell) =>  <th> {cell} </th> )} </tr>
              {this.props.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, i) => (<td key={i}>{cell}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
    
    );
  }
}

export default Table;