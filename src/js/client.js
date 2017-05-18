import React from 'react';
import ReactDOM from 'react-dom'
import moment from 'moment';
import styles from '../../assets/stylesheets/application.css';


class Layout extends React.Component {
  defaultTemplate = (props) => {
    return (
      <div>
        <div style={{textAlign: 'center', fontSize: '2em'}}><h1>JVLIVN</h1></div>
        <div className='column'><h1>Underwear I kinda care, wanna look good for you</h1></div>
      </div>
    )
  }

  render() {
    let rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    let template = this.defaultTemplate()
    return (template)
  }
}
const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app)
