import React from 'react';
import{AboutSection,AboutInfo,InfoTitle,Span,InfoDir,InfoDesc, Anchor} from "./style.js"

const About = () => {
    return (
        <AboutSection>
            <div className="container">
                <AboutInfo>
                    <InfoTitle><Span>This is</Span> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        kjkdj ijhriojhh iujriojh ijhi uhiouj hjih rihrih rthhrht jjpotn ojfd
                        r,kn ojgpohe  jh <Anchor>explication</Anchor>
                    </InfoDesc>
                    <InfoDesc>
                        kjkdj ijhriojhh iujriojh ijhi uhiouj hjih rihrih rthhrht jjInfoDescotn ojfdr,kn ojgpohe  jh
                    </InfoDesc>
                </AboutInfo>
            </div>

        </AboutSection>
    )
}
export default About;