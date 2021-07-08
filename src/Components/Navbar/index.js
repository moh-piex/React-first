import React from 'react';


import {NavbarSection,Logo,LogText,UlList,LiList,Anchor,AnchorLink} from'./style.js'

const Navbar = () => {
    return (
        <NavbarSection>
             <div className="container">

                 <Logo>
                        <LogText>Ultra profile</LogText>
                 </Logo>

                <UlList>
                       <LiList><AnchorLink to="/">home</AnchorLink></LiList>
                       <LiList><Anchor href="#">work</Anchor></LiList>
                       <LiList><Anchor href="#">portfolio</Anchor></LiList>
                       <LiList><Anchor href="#">resume</Anchor></LiList>
                       <LiList><Anchor href="#">About</Anchor></LiList>
                        <LiList><AnchorLink to="/contact">contact</AnchorLink></LiList>
                </UlList>
             </div>

        </NavbarSection>
    )
}
export default Navbar;