console.log('Hello World')
const productsList = [

    {
        "item": "beans",
        "brand": "goya",
        "units": 3,
        "quantity": 4,
        "isPurchased": true 

    },

    {
        "item": "cornucopia",
        "brand": "general farms",
        "units": 4,
        "quantity": 4,
        "isPurchased": true

    },

    {
        "item": "banana",
        "brand": "general fruit",
        "units": 4,
        "quantity": 5,
        "isPurchased": false

    }]

class App extends React.Component {
    
    state = {
        products: productsList,
        item: '',
        brand: '',
        units:'',
        quantity: 0,
        
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
        quantity: this.state.quantity
        
    }
    console.log(newItem)

    this.setState({
        products: [newItem, ...this.state.products],
        item: '',
        brand: '',
        units: '',
        quantity: 0
        
    })
}

handleDelete = (product, i) => {
    console.log(i)
    console.log(product)
     const notPurshased = this.state.products.filter(product => product != this.state.products[i])
     this.setState({
         products: notPurshased
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
                <input type="text" id="item" value={this.state.item} onChange={this.handleChange}/>
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
            
                {this.state.products.map((product, i) => {
                    return(
                    <React.Fragment>
                    {product.isPurchased ? 
                    <div><ul>
                    <li>{product.item} &emsp; {product.brand} &emsp; {product.units}lbs &emsp; {product.quantity} {product.isPurchased}<button idx={i} onClick={() => this.handleDelete(product, i)}>Remove</button> </li>
                     </ul> 
                    </div> : <div className="text"> We did not buy any items yet</div>}
                    </React.Fragment>
                    )
                   
                }
                )} 
            
            

            </div>
            
        </div>

    )
}



}

ReactDOM.render(
    <App/>,
    document.querySelector('.container')
)