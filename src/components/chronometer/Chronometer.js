import React from 'react'
import { Countdown } from '../Countdown/Countdown'

import {CountdownWrapper} from './styles'


export const Chronometer = () => {
  
    return (
   
        <CountdownWrapper>
            <Countdown typeOfDate="Days" number="8"/>
            <Countdown typeOfDate="Hours" number="8"/>
            <Countdown typeOfDate="Minutes" number="8"/>
            <Countdown typeOfDate="Seconds" number="8"/>
        </CountdownWrapper>
     )
}

