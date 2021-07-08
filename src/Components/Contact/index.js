import React from 'react';
import {ContactSection,Title,TitleSpan,Form,Suges,InputText,InputEmail,InputSub,Textarea,InputSubmit} from './style';
import Footer from '../Footer/index';
const Contact = () => {
    return (
        <React.Fragment>
        <ContactSection>
            <div className="container">
                <Title><TitleSpan>Drop</TitleSpan>Me A Line</Title>
                <Form action="">
                    <Suges>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </Suges>
                    <InputSub type="text" placeholder="Your Subject"/>
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>

        </ContactSection>
         <Footer />
         </React.Fragment>
    )
}
export default Contact;