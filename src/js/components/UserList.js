var React = require('React');
var User = require('./User');

var UserList = React.createClass({
  render: function(){
    return (
      <div className="well">
        <h3>Mockup User Lists</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.users.map(function(user, i){
                return <User user={user} key={i} />
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = UserList;
