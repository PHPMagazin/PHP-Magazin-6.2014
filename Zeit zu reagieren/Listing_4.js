componentDidMount: function() {  $.get('/user).success(function(res) {    this.setState({users: JSON.parse(res)});  }.bind(this));}