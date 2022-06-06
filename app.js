console.log('Hello World')


class App extends React.Component {
    
    state = {
        products: [''],
        item: '',
        brand: '',
        units:'',
        quantity: 0,
        isPurchased: true
    }

handleChange = (event) => {
    console.log(event.target.value)

    this.setState({
        [event.target.id]: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault()

    const newItem = {
        item: this.state.item,
        brand: this.state.brand,
        units: this.state.units,
        quantity: this.state.quantity,

    }
    console.log(newItem)

    this.setState({
        products: [newItem, ...this.state.products],
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: true
    })
}


render(){
    return(
        <div>
            <h1>Grocery List</h1>
            <div className="top">
            <form onSubmit={this.handleSubmit}>
                <p>Submit items to the list:</p>
                <label htmlFor="item">Item:</label>
                <input type="text" id="item" value={this.state.item} onChange={this.handleChange} onClick={this.toogleHiring}/>
                <label htmlFor="brand">Brand:</label>
                <input type="text" id="brand" value={this.state.brand} onChange={this.handleChange}/>
                <label htmlFor="units">Units:</label>
                <input type="text" id="units" value={this.state.units} onChange={this.handleChange}/>
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" value={this.state.quantity} onChange={this.handleChange}/>

                <input type="submit"></input>
            </form>
            </div>
            <div className="top">
                <h2>Preview New Item</h2>
                <h3>Item: {this.state.item}</h3>
                <h4>Brand: {this.state.brand}</h4>
                <h4>Units: {this.state.units}</h4>
                <h5>Quantity: {this.state.quantity}</h5>
            </div>

            <div className="top">
            <h2>Grocery Items</h2>
            {this.state.isPurchased ? <div><ul>
                {this.state.products.map(product => 
                    <li>{product.item} &emsp; {product.brand} &emsp; {product.units} &emsp; {product.quantity} </li>
                
                )} 
            </ul> </div> : "We did not buy any items yet"}
            

            </div>
            
        </div>

    )
}



}

ReactDOM.render(
    <App/>,
    document.querySelector('.container')
)