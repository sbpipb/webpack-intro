import React from 'react';
import ReactDOM from 'react-dom'
import moment from 'moment';
import styles from '../../assets/stylesheets/application.css';


class Layout extends React.Component {
  defaultTemplate = (props) => {
    return (
      <div>
        <div style={{textAlign: 'center', fontSize: '2em'}}><h1>J V L I V N</h1></div>
        <div style={{textAlign: 'center'}} className='column'><h4>"Underwear I kinda care, wanna look good for you"</h4></div>
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
