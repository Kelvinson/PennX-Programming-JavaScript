class FontChooser extends React.Component {

  constructor(props) {
    super(props);
    var minInit = this.props.min <= 0 ? 1 : this.props.min;
    this.state = {hidden: true, 
      weight: this.props.bold,
      size: this.props.size,
      checked: this.props.bold,
      color:'black'}
    }
    
    handleClick() {
      if(this.state.hidden == 'true') 
        this.setState({hidden: false});
      else
        this.setState({hidden: true});

    }

    handleCheck() {
      if (!getElementById('boldCheckbox').prop('checked')) {
       this.setState({weight:false});
     } else {
      this.setState({weight:true});
    }
  }

  handleDecreaseButton() {
      var currentSize = this.state.size;
      if (currentSize - 1 >= this.props.min) {
        this.setState(size:currentSize - 1)
      }
      if (this.state.size == this.props.min) {
          this.setState(color:'red');
      }
 }

 handleInreaseButton() {
      var currentSize = this.state.size;
      if (currentSize + 1 <= this.props.min) {
        this.setState(size:currentSize + 1)
      }
      if (this.state.size == this.props.max) {
         this.setState(color:'red');
      }
 }

 handleDoubleClick() {
      this.setState(size:this.props.size);
 }

render() {

  return(
         var weight = this.state.bold;
         var size = this.state.size;
         var hidden = this.state.hidden ? 'true' : 'false';
         var color = this.state.color;
         <div>
         <input type="checkbox" id="boldCheckbox" hidden={hidden} checked={this.state.checked} onChange={this.handleCheck.bind(this)}/>
         <button id="decreaseButton" hidden={hidden} onClick={this.handleDecreaseButton.bind(this)}>-</button>
         <span id="fontSizeSpan" hidden={hidden} onDoubleClick={this.handleDoubleClick.bind(this)} color={color}>{size}</span>
         <button id="increaseButton" hidden={hidden} onClick={this.handleIncreaseButton.bind(this)}>+</button>
         <span id="textSpan" onClick={this.handleClick.bind(this)}
         style={{fontWeight: weight,fontSize:size}}>
         {this.props.text}
         </span>
         </div>
         );
}
}
