import React from 'react';
import ReactDOM from 'react-dom'
import moment from 'moment';

class Layout extends React.Component {

  render() {
    let rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(rightNow);
    console.log('cum out')
    return( <div> Welcome to JVLIVN!!! {rightNow} It's Working right now but it doens't load on the fliy wtf</div>
    );
  }
}
const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app)
