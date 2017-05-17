import React from 'react';
import ReactDOM from 'react-dom'
import moment from 'moment';
import styles from '../../assets/stylesheets/application.css';


class Layout extends React.Component {

  render() {
    console.log(styles);
    let rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    return( <div> Welcome to JVLIVN!! {rightNow} It's Working right now but it doens't load on the fliy wtf</div>
    );
  }
}
const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app)
