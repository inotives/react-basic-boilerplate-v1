var React = require('react');
var WebBanner = require('./WebBanner');
var UserList = require('./UserList');
var NavBar = require('./NavBar');

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
  render: function(){
      var bannerInfo = {
        title: "Mock up Users",
        descr: "This is just a simple mock up api server along with it simple react web app",
      }
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
          <NavBar />
          <WebBanner bannerInfo={bannerInfo}/>
          <hr />
          {userList}
        </div>
      );
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
  },
  componentDidMount: function(){
    this.getUserData();
  }
});

module.exports = App;
