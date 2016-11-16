const React = require('react');


class Invitation extends React.Component {
  render(){
    return(
       <div><title><h1>
       You've been invited!</h1>
</title>
       <h2>{this.props.children}</h2></div>
      )
  }
}

// Spaceship.defaultProps = {
//   hasRockets: false,
//   colors: ['black', 'red'],
// };

module.exports = Invitation;