var React = require('react');
var config = require('../../config.js');

var NavBar = React.createClass({
  getDefaultProps: function(){
    return {
      brand: config.brand
    }
  },
  render: function(){
    var homeActive = '', aboutActive = '', contactActive='', userActive='', chartActive='';
    // handle navbar click active
    if(this.props.page === 'Home'){
      homeActive = 'active';
    }else if(this.props.page === 'About'){
      aboutActive = 'active';
    }else if(this.props.page === 'Contact'){
      contactActive = 'active';
    }else if(this.props.page === 'User'){
      userActive = 'active';
    }else if(this.props.page === 'Chart'){
      chartActive = 'active';
    }

    return (
      <div className="container">
        <nav className="navbar navbar-default nav-top-10">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">{this.props.brand}</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className={homeActive}><a onClick={this.props.homeClick} href="#">Home</a></li>
                <li className={aboutActive}><a onClick={this.props.aboutClick} href="#">About</a></li>
                <li className={contactActive}><a onClick={this.props.contactClick} href="#">Contact</a></li>
                <li className={userActive}><a onClick={this.props.userClick} href="#">User List</a></li>
                <li className={chartActive}><a onClick={this.props.chartClick} href="#">Charting</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
})

module.exports = NavBar;
