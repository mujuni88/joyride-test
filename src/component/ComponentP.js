import React from 'react'
import ComponentJ from './ComponentJ'
import ComponentK from './ComponentK'

export default class ComponentP extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {show: 'J'};
    this.showComp = this.showComp.bind(this)
  }
  showComp(name){
    this.setState({show:name});
  }
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Parent Component</h1>
          <div className="btn-group">
            <button className="btn btn-primary btn-lg" onClick={()=> this.showComp('J')}>Component J</button>
            <button className="btn btn-warning btn-lg" onClick={()=>this.showComp('K')}>Component K</button>
          </div>
        </div>
        {this.state.show === 'J' && <ComponentJ/>}
        {this.state.show === 'K' && <ComponentK/>}
      </div>
    );
  }
}
