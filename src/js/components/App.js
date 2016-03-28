var React = require('react');
var WebBanner = require('./WebBanner');
var UserList = require('./UserList');
var NavBar = require('./NavBar');
var Footer = require('./Footer');
var Contents = require('./Contents');

//
function getAppState(){
  //return empty unless u set it with initial data
  return {

  }
}

var App = React.createClass({
  getInitialState: function(){
    return {users: ''};
  },
  getDefaultProps: function(){
    return  {
      brand: 'Simple Web Template'
    }
  },
  render: function(){
      // if userList data is present, call up UI component of UserList else it is empty
      if(this.state.users){
        var userList = <UserList users={this.state.users}/>
      }
      else{
        var userList = '';
      }

      // Render the page with the components
      return (
        <div>
          <NavBar brand={this.props.brand}/>
          <Contents />
          <Footer />
        </div>
      );
  },
  componentDidMount: function(){
    this.getUserData();
  },
  getUserData: function(){
    $.ajax({
      url: 'http://localhost:1999/api/users',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({users: data})
      }.bind(this),
      error: function(xhr, status, err){
        alert(err);
      }.bind(this)
    });
  }
});

module.exports = App;
