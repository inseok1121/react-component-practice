import './Dropdown.css';
const { Component } = require("react");

class Dropdown extends Component{
    constructor(){
        super();

        this.state ={
            showMenu: false,
            selectedItem: "Select",
        }

        this.handleHover = this.handleHover.bind(this);
        this.selectedItem = this.selectedItem.bind(this);
    }

    handleHover(){
        this.setState({
            showMenu:true,
        })
    }

    selectedItem(param){
        this.setState({
            showMenu:false,
            selectedItem:param,
        })
    }

    render() {
        return (
             <div className="dropdown">
                <div className="dropdown-header" onMouseOver={this.handleHover}>
                    {this.state.selectedItem}
                </div>

                {
                    this.state.showMenu ? (
                        <div className="dropdown-content">
                            <div className="dropdown-detail" onClick={this.selectedItem.bind(this, "Menu Item 1")}> Menu Item 1</div>
                            <div className="dropdown-detail" onClick={this.selectedItem.bind(this, "Menu Item 2")}> Menu Item 2</div>
                            <div className="dropdown-detail" onClick={this.selectedItem.bind(this, "Menu Item 3")}> Menu Item 3</div>
                        </div>
                    ) : (
                        null
                    )
                }



             </div>
        );
    }
}

export default Dropdown;