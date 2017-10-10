import React from 'react';
import { connect } from 'react-redux';
import * as listActions from '../../action/list-actions';
import ListForm from '../list/form';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <ListForm createList={this.props.createList}/>
        <div>
          <h2>Lists</h2>
          {this.props.lists.map(list => {
            return(<p key={list._id}>{list.name}</p>);
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ lists: state.lists });

const mapDispatchToProps = dispatch => ({
  createList: list => dispatch(listActions.listCreateRequest(list)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
