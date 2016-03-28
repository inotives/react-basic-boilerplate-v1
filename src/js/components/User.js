var React = require('React');

var User = React.createClass({
  render: function(){
    return (
      <tr>
        <th>{this.props.user.name}</th>
        <th>{this.props.user.phone}</th>
        <th>{this.props.user.email}</th>
        <th>
          <a href="#" className="btn btn-primary mrg-r-10">EDIT</a>
          <a href="#" className="btn btn-danger">DEL</a>
        </th>
      </tr>
    );
  }
});

module.exports = User;
