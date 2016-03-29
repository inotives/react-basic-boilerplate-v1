var React = require('react');
var WebBanner = require('./WebBanner');

var AboutPage = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  render: function(){
    var bannerInfo = {
      title: "About Page",
      descr: "This is the about page of the website",
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

module.exports = AboutPage;
