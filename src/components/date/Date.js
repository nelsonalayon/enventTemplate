import React from 'react'

import {TextDate, SpreaderBar, TextContainer} from './styles'


export const Date = ({eventDate}) => {
    return(
        <div>
            <TextContainer>
                 <TextDate>
                <p>{eventDate}</p>
                </TextDate>
            </TextContainer>
           
            <SpreaderBar>

            </SpreaderBar>
        </div>        
    )
}