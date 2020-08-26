import React from 'react'
import {PrincipalButton} from '../button/TemplateButton'
import {NavbarContainer, AnchorItem, ContainerOfContainer} from './styles'

export const Navbar = () => {
    return(
        <ContainerOfContainer>
            <NavbarContainer>
                <li> <AnchorItem>INICIO</AnchorItem> </li>
                <li><AnchorItem>QUE ES </AnchorItem></li>
                <li><AnchorItem>AGENDA</AnchorItem></li>
                <li><AnchorItem>CONFERENCISTAS</AnchorItem></li>
                <li><AnchorItem><PrincipalButton/></AnchorItem></li>
            </NavbarContainer>
        </ContainerOfContainer>
    )
}