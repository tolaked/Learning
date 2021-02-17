import React from 'react'
import {bounce} from 'react-animations'
import styled from 'styled-components'
import Radium, {StyleRoot} from 'radium';
import Item from './Item'


const Animation = () =>{
    const styles = {
        bounce: {
          animation: 'x 5s',
          animationName: Radium.keyframes(bounce, 'bounce')
        }
      }

    return(
        <div className="test" style={styles.bounce}>
            Bounce it here
        </div>

    )
}

export default Animation
