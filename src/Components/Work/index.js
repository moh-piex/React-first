import React,{Component} from 'react';

import axios from "axios";
 import {WorkSection,WorkTitle,Span,WorkPart,Icon,ParTitle,Line,PartDesc}from"./style.js"



class Work extends Component{


    state ={ 
        works:[]
    }
  componentDidMount(){
      axios.get("js/data.json").then(res =>{this.setState({works:res.data.works},console.log(res))})
  }

render(){

const {works} = this.state;

const workslist = works.map((workItem)=>{
    

    return (
      
                <WorkPart key={workItem.id} first= {workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <ParTitle>{workItem.title}</ParTitle>
                    <Line/>
                    <PartDesc>
                    {workItem.body}
                    </PartDesc>
                </WorkPart>
                )
})



        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle><Span>my</Span>work</WorkTitle>
                   {workslist}
                </div>
    
    
            </WorkSection>
        )
    }
 
}
export default Work;