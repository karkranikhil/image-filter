import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    padding:15px;
    flex-wrap: wrap;
    &img:hover{
        filter: none;
    }
    .width100{
        width:100%;
    }
    .slidecontainer {
        padding:15px;
        display: inline-block;
      }
      
      .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 15px;
        border-radius: 5px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
      }
      
      .slider:hover {
        opacity: 1;
      }
      
      .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #2195f3;
        cursor: pointer;
      }
      
      .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #2195f3;
        cursor: pointer;
      }
      .resetBtn{
        padding: 10px 20px;
        background: #2194f3;
        color: white;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
        width: 10em;
      }
`
export const Image  = styled.img`
 filter:${props => `blur(${props.blur}px) grayscale(${props.greyscale}) brightness(${props.brightness}) contrast(${props.contrast}) hue-rotate(${props.hue}deg) opacity(${props.opacity}) saturate(${props.saturate}) sepia(${props.sepia}) invert(${props.invert})`}
`