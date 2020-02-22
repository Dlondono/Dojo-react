import React,{Component}from 'react';
import Cards from '../components/Cards/Cards.js'

class Tasks extends Component{
state={
    taskData:[]
};

componentDidMount(){
    axios.get({headers:{'Authorization':"".then(res=>{
        console.log(res.data)
    })
    .catch(error=>{
        console.log(error)
    })
}})
}
    render(){
        
        const cardsView = this.state.taskData.length ?
        <Cards data={this.state.taskData}/>
        :
        null();
        return(
            <div>
                {cardsView}
            </div>
            
            
        );
    }

}