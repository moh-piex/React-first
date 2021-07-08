import React,{useState,useEffect} from 'react';

 import{ PortfolioSection,PortfolioTitle,Span,PortfolioList,PortfolioItem,ImageWrapper,Image,Overlay,OverlaySpan,} from"./style.js"

 import axios from"axios"


 const Profile = () => {

    const[images,SetImages] = useState([])
    const Listmmenu=images.map((item,index)=>{return(
       

         <ImageWrapper  key={item.id} >
            <Image src={item.image} alt=""/>
            <Overlay>
                <OverlaySpan>
                    show Image
                </OverlaySpan>
            </Overlay>

        </ImageWrapper>
        
        )})
    useEffect(()=>{
        axios.get("js/data.json").then(res =>{SetImages(res.data.portfolio)})
  
    },[])

    return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span>Porfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem  active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshap</PortfolioItem>
                <PortfolioItem>Mordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            <div className="box">
                {Listmmenu}
            </div>)


        </PortfolioSection>
    )
}
export default Profile;