import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css';
import {Container, Image} from './style.js'
const INITIAL={
  blur:'0',
  greyscale:'0',
  brightness:'1',
  contrast:'1',
  hue:'0',
  saturate:'1',
  opacity:'1',
  sepia:'0',
}
class App extends Component {
  constructor() {
    super();
    this.state = {
     ...INITIAL,
      url: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/03/acj-2003-beautiful-landscapes-around-the-world-4.jpg'
    };
  }
  changeValue= (event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
    
  }
  readURL=(event)=> {
    let input = event.target
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload =  (e)=> {
                  this.setState({url:e.target.result, ...INITIAL})
                };

                reader.readAsDataURL(input.files[0]);
            }
        }
  render() {
    return (
      <>
      <div className="Navbar">
        <div className="flex-1">CSS Filter Demo with react and Styled components</div>
        
          <div>
          <label htmlFor="imageUpload" className="uploadBtn">Try your image</label>
          <input type='file' onChange={this.readURL} id="imageUpload"/>
        </div>
      </div>
      <div className="img-bg"><Image id="blah" className="responsive"
       blur={this.state.blur}
       greyscale={this.state.greyscale}
       brightness={this.state.brightness}
       contrast={this.state.contrast} 
       hue={this.state.hue} 
       opacity={this.state.opacity} 
       saturate={this.state.saturate}
       sepia={this.state.sepia} 
       src={this.state.url} alt="your image" /></div>
        
      <Container>
       <div className="width100">
       <h2 className="textcolor padding15 heading">Customize Your Image</h2>
        <Slider name="blur" value={this.state.blur} min="0" max="10" callback={()=>this.changeValue}/>
        <Slider name="greyscale" value={this.state.greyscale} min="0" max="10" callback={()=>this.changeValue}/>
        <Slider name="brightness" value={this.state.brightness} min="0" max="3" step="0.1" callback={()=>this.changeValue}/>
        <Slider name="contrast" value={this.state.contrast} min="1" max="10" callback={()=>this.changeValue} />
        <Slider name="hue" value={this.state.hue} min="1" max="100" callback={()=>this.changeValue}/>
        <Slider name="opacity" value={this.state.opacity} min="0" max="1" callback={()=>this.changeValue} step="0.1"/>
        <Slider name="saturate" value={this.state.saturate} min="1" max="10" callback={()=>this.changeValue}/>
        <Slider name="sepia" value={this.state.sepia} min="0" max="10" callback={()=>this.changeValue}/>
       </div>
      
      </Container>
      </>
    );
  }
}
export const Slider=(props)=>{
  return (
      <div className="slidecontainer">
        <div className="filterStyle">{props.name}:</div> 
        <div className="flex-1"><input type="range" min={props.min} max={props.max} value={props.value} step={props.step || 1} className="slider" name={props.name} id={props.name} onChange={props.callback()}/></div>
      </div>
  )
}
export default App;
