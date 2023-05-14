import axios from 'axios';

const Item_Base_URL = "http://localhost:8080/items";

class ItemService {

    // get all item list
    getItems(){
        return axios.get(Item_Base_URL);
    }

    // save item
    addItem(item){
        return axios.post(Item_Base_URL, item);
    }

    // get item by id
    getItemById(itemID){
        return axios.get(Item_Base_URL + '/' + itemID);
    }

    // get item by name
    getItemByName(itemName) {
        return axios.get(`${Item_Base_URL}/${itemName}`);
    }
      
}

const itemService = new ItemService();
export default itemService;