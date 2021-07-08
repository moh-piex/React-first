import React,{useState,useEffect} from 'react';
import{ProfileSkills,Profile,ProfileList, ProfileItem,ProfileSpan,ProfileSpanWeb,Skills,SkillsDesc,SkillsBar,SkillsTitle,SkillsPerc
    ,SkillsParent,SkillsParentSp1, SkillsParentSp2,SkillsParentSp3,Title,TitleSpan} from "./style"

    import axios from"axios"

const Portfolio = () => {
    
    const[skills,Setskills] = useState([])
    const[profile,Setprofile] = useState([])

    const profilemmenu=profile.map((item,index)=>{return(  
         <ProfileItem key={item.id}>
           <ProfileSpan>{item.name}</ProfileSpan>
           {item.desc}
       </ProfileItem>)})

    const skillsmmenu=skills.map((item,index)=>{return(
        <SkillsBar key={item.id}>
        <SkillsTitle>{item.title}</SkillsTitle>
        <SkillsPerc>{item.pers}%</SkillsPerc>
        <SkillsParent>
            <SkillsParentSp1 per={item.pers}></SkillsParentSp1>
        </SkillsParent>
      </SkillsBar>
     )})
     useEffect(()=>{
        axios.get("js/data.json").then(res =>{Setprofile(res.data.profile.profile)});
        axios.get("js/data.json").then(res =>{Setskills(res.data.profile.skills)})
  
    },[])


    return (
        <ProfileSkills>
            <div className="container">
                <Profile>

                    <Title><TitleSpan>My </TitleSpan>Profile</Title>

                    <ProfileList>

                      {profilemmenu}
                    </ProfileList>
                </Profile>

                <Skills>

                  <Title>Some <TitleSpan>skills</TitleSpan></Title>

                  <SkillsDesc>
                   Lorem kkjifj fjdfier jfdkhierh iureifhrgh rfrioefiolk if ufior ijrfeioh fhfi8rhfiujif ifh
                  </SkillsDesc>

              {skillsmmenu}

                </Skills>
            </div>
        </ProfileSkills>
    )
}
export default Portfolio;