var React = require('React');

var WebBanner = React.createClass({
  render: function(){
    return (
      <div className="jumbotron">
        <h1>{this.props.bannerInfo.title}</h1>
        <p>{this.props.bannerInfo.descr}</p>
      </div>
    );
  }
});

module.exports = WebBanner;
