const React = require('react');


class ThemedDecorations extends React.Component {
  render(){
    const theme = this.props.theme
    const classChildren = React.Children.map(this.props.children, child =>{
      return( 
      <p className={theme}>{child}</p>)})
    return(
      <div> 
      {classChildren}
      </div>
      )
  }
}


module.exports = ThemedDecorations;