var React = require('react');

var Footer = React.createClass({
  getDefaultProps: function(){
    return {
      year: 2016,
      company: 'Company Name, inc.'
    }
  },
  render: function(){
    return (
        <div className="container">
          <hr />

          <footer>
            <p> &copy; {this.props.year} {this.props.company} </p>
          </footer>
        </div>
    )
  }
})

module.exports = Footer;
