console.log('Hello World')

class App extends React.Component {
    state = {
        products: '',
        item: '',
        brand: '',
        quantity: 0,
        isPurchased: false
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
        quantity: this.state.quantity,

    }

    this.setState({
        products: [newItem, ...this.state.products],
        item: '',
        brand: '',
        quantity: 0

    })
}


render(){
    return(
        <div>
            <h1>Grocery List</h1>

            <form onSubmit={this.handleSubmit}>
                <label htmlFor="item">Item:</label>
                <input type="text" id="item" value={this.state.item} onChange={this.handleChange}/>
                <label htmlFor="brand">Brand:</label>
                <input type="text" id="brand" value={this.state.brand} onChange={this.handleChange}/>
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" value={this.state.quantity} onChange={this.handleChange}/>
                <input type="submit"></input>
            </form>

            <div>
                <h2>Preview New Item</h2>
                <h3>Item: {this.state.item}</h3>
                <h4>Brand: {this.state.brand}</h4>
                <h5>Quantity: {this.state.quantity}</h5>
            </div>

            
            
        </div>

    )
}



}

ReactDOM.render(
    <App/>,
    document.querySelector('.container')
)