const { Component } = require("react");

class Dropdown extends Component{
    constructor(){
        super();

        this.state ={
            showMenu: false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.selectedItem = this.selectedItem.bind(this);
    }

    handleClick(){
        this.setState({
            showMenu:true,
        })
    }

    selectedItem(){
        this.setState({
            showMenu:false,
        })
    }

    render() {
        return (
             <div>
                 <div onClick={this.handleClick}>
                     Show Menu
                 </div>
                 
                 {
                     this.state.showMenu ? (
                        <div className="Menu">
                        <div onClick={this.selectedItem}> Menu Item 1</div>
                        <div onClick={this.selectedItem}> Menu Item 2</div>
                        <div onClick={this.selectedItem}> Menu Item 3</div>
                     </div>
                     ) :
                     (
                         null
                     )
                 }


             </div>
        );
    }
}

export default Dropdown;