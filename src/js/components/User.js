var React = require('React');

var User = React.createClass({
  render: function(){
    return (
      <tr>
        <th>{this.props.user.name}</th>
        <th>{this.props.user.phone}</th>
        <th>{this.props.user.email}</th>
        <th>
          
        </th>
      </tr>
    );
  }
});

module.exports = User;
