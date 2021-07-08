import styled from "styled-components"



export const ProfileSkills =styled .div`
    padding: 5px 0;
    overflow: hidden;
    margin:55px 0;

    `
    
    export const Profile = styled .div`
    width: 50%;
    float: left;
`

export const ProfileList=styled .ul`
    list-style: none;
`
export const ProfileItem=styled .li`
    margin-bottom: 8px;
   
`
export const ProfileSpan=styled .span`
    display: inline-block;
    width: 100px;
    font-weight: bold;
`
export const ProfileSpanWeb=styled .span`
    font-weight: normal;
    color: #ab5424;

` 
export const Skills=styled .div` 
    width: 50%;
    float: left;
`

export const SkillsDesc =styled .p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px;
`
export const SkillsBar =styled .div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px;

`
export const SkillsTitle=styled .span`
    float: left;

`
export const SkillsPerc = styled .span` 
    float: right;
    margin-right: 100px;
`

export const SkillsParent=styled .div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
`

export const SkillsParentSp1=styled .span`
    width: ${props=>props.per}%;
    background: #ab5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
`




export const Title=styled .h2` 
    font-size:10px ;
    margin-bottom: 20px;

`

export const TitleSpan=styled .span`
    font-weight: normal;
 `







