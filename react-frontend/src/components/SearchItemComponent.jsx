import React, { Component } from 'react';
import ItemService from '../service/ItemService';

class SearchItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
      item: null,
    };

    // Binding the event handlers
    this.changeSearchNameHandler = this.changeSearchNameHandler.bind(this);
    this.searchItem = this.searchItem.bind(this);
  }

  // Handle changes in the Search Name input field
  changeSearchNameHandler(event) {
    this.setState({ searchName: event.target.value });
  }

  // Handle search item button click
  searchItem(event) {
    event.preventDefault();
    ItemService.getItemByName(this.state.searchName)
      .then((res) => {
        const item = res.data[0]; // Assuming only one item is returned
        this.setState({ item });
      })
      .catch((error) => {
        console.log(error); // Handle any errors that occur during the API call
      });
  }

  render() {
    const { item } = this.state;

    return (
      <div>
        <div className="container p-5">
          <div className="row">
            <div className="card col-md-6 offset-md-3">
              <h3 className="text-center">Search Item</h3>
              <div className="card-body">
                <form>
                  <div className="form-group mb-3">
                    <label>Search Name</label>
                    <input
                      type="text"
                      placeholder="Search Name"
                      name="searchName"
                      className="form-control"
                      value={this.state.searchName}
                      onChange={this.changeSearchNameHandler}
                    />
                  </div>
                  <button onClick={this.searchItem} className="btn btn-primary">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>

          {item && (
            <div className="row mt-5">
              <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">Item Details</h3>
                <div className="card-body">
                  <div>
                    <strong>Item ID:</strong> {item.id}
                  </div>
                  <div>
                    <strong>Item Name:</strong> {item.name}
                  </div>
                  <div>
                    <strong>Item Description:</strong> {item.description}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchItemComponent;