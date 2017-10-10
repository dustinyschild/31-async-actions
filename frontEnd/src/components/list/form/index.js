import React from 'react';

export default class ListForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.createList(this.state);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="list-form">
        <input
          name="name"
          type="text"
          placeholder="List Title"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
