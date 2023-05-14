import React, { Component } from 'react';
import ItemService from '../service/ItemService';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    // binding add item emthod
    this.addItem = this.addItem.bind(this);

    // binding update item method
    this.updateItem = this.updateItem.bind(this);
  }

  componentDidMount(){
    ItemService.getItems().then((res) => {
      this.setState({items : res.data})
    });
  }
  
  addItem(){
    this.props.history.push('/add-items')
  }

  // update item button method
  updateItem(id){
    this.props.history.push(`/update-items/${id}`);
  }

  // search item by id method
  searchItemById(id){

    console.log(`Searching item with ID: ${id}`);
  }

  render() {
    return (
      <div>
        <div className="container p-5 col-md-8">
          {/* <p className='text-center fs-4'>ITEM LIST</p> */}
          <table className="table table-hover table-striped table-bordered ">
            <caption>List of items</caption>
            <thead className='table-light'>
              <tr>
                <th colSpan="3" className="text-center fs-6">Item Details</th>
              </tr>
              <tr>
                <th>Item Id</th>
                <th>Item Name</th>
                <th>Item Description</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item) => (
                <tr key={item.name}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Item;