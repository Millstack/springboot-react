package com.hostbuddy.service;

import java.util.List;

import com.hostbuddy.dto.Item;

public interface ItemService {
	
//	save item
	public Item addItem(Item item);
	
//	get all items
	List<Item> getAllItems();
	
//	get item by name
	public List<Item> getItemByName(String name);
	
//	update item
	public Item updateItem (Item item, int id);
}