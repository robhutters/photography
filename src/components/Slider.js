import React, {Component} from 'react';
import Slides from './Slides'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'



class Slider extends Component {
  
  constructor(props) {
    super(props);
 
    this.state = {
      data: null,
    };

  }


  componentDidMount() {
    
    fetch("http://localhost:3000/images.json")
    .then((res) => res.json())
    .then((data) => this.setState({data}))
    .catch((e) => console.log(e))

    store.addNotification({
      title: "Welcome!",
      message: `Best viewed in full-screen mode! CTRL+CMD/WINDOWS+F`,
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 4000,
        onScreen: true
      }
    })
    
   
  }


  render() { 
    const data = this.state.data ? this.state.data : null
    if (data !== null) {
      if (window.outerHeight < 600) {
        return (<div>Your screen is too small to properly view the photographs. Please use a desktop.</div>)
      }
      
      return ( 
  
        <div>
        
          <Slides data={data} />
         
        </div>
     
      )
    } else {
      
      return (<div>Loading items ...</div>)
    }
     
  }
}
 
export default Slider;


