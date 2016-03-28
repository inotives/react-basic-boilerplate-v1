var React = require('react');
var WebBanner = require('./WebBanner');

var Contents = React.createClass({
  render: function(){
    var bannerInfo = {
      title: "Home Page",
      descr: "This is the Home page of the website",
    }
    return (
      <div>
        <div className="container">
          <div className="row">
            <WebBanner bannerInfo={bannerInfo}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Contents;
