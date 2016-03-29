var React = require('react');
var WebBanner = require('./WebBanner');

var ContactPage = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  render: function(){
    var bannerInfo = {
      title: "Contact Page",
      descr: "This is the contact page of the website",
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

module.exports = ContactPage;
