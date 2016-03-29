var React = require('React');
var WebBanner = require('./WebBanner');
var UserList = require('./UserList');

var UserPage = React.createClass({
  getInitialState: function(){
    return { users: '' }
  },
  getDefaultProps: function(){
    return {
      bannerInfo: {
        title: "Home Page",
        descr: "This is the Home page of the website",
      }
    }
  },
  render: function(){
    if(this.state.users){
      var userList = <UserList users={this.state.users}/>
    }else{
      var userList = '';
    }
    return (
      <div>
        <div className="container">
          <div className="row">
            <WebBanner bannerInfo={this.props.bannerInfo}/>
            {userList}
          </div>
        </div>
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
        console.log(data);
        this.setState({users: data})
      }.bind(this),
      error: function(xhr, status, err){
        alert(err);
      }.bind(this)
    });
  }
});

module.exports = UserPage;
