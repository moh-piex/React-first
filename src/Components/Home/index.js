import React from 'react';


import {HomeSection,HomeInformation ,HomeTitle,HomeInfo,HomeDesc,Span,HomeBtn} from "./style";

const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Mohamed Ahmed</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc> I am a professional <Span>UX Desiginer</Span> and front-end Developer creating modern and resposive designs to web</HomeDesc>
                    <HomeBtn>Lets Begin</HomeBtn>

                </HomeInformation>
            </div>

        </HomeSection>
    )

}
export default Home;