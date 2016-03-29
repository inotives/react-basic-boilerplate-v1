var React = require('react');
var WebBanner = require('./WebBanner');
var UserList = require('./UserList');
var NavBar = require('./NavBar');
var Footer = require('./Footer');

// Pages
var HomePage = require('./HomePage');
var AboutPage = require('./AboutPage');
var ContactPage = require('./ContactPage');
var UserPage = require('./UserPage');
var ChartPage = require('./ChartPage');

var App = React.createClass({
  getInitialState: function(){
    return {
      page: 'Home'
    }
  },
  handleClickHome: function(){
    this.setState({page: 'Home'})
  },
  handleClickAbout: function(){
    this.setState({page: 'About'})
  },
  handleClickContact: function(){
    this.setState({page: 'Contact'})
  },
  handleClickUserList: function(){
    this.setState({page: 'User'})
  },
  handleClickChart: function(){
    this.setState({page: 'Chart'})
  },
  render: function(){
    if(this.state.page === 'Home'){
      var contents = <HomePage />
    }
    else if(this.state.page === 'About'){
      var contents = <AboutPage />
    }
    else if(this.state.page === 'Contact'){
      var contents = <ContactPage />
    }
    else if(this.state.page === 'User'){
      var contents = <UserPage />
    }
    else if(this.state.page === 'Chart'){
      var contents = <ChartPage />
    }
    // Render the page with the components
    return (
      <div>
        <NavBar page={this.state.page}
                homeClick={this.handleClickHome}
                aboutClick={this.handleClickAbout}
                contactClick={this.handleClickContact}
                userClick={this.handleClickUserList}
                chartClick={this.handleClickChart}/>
        {contents}
        <Footer />
      </div>
    );
  }
});

module.exports = App;
