package com.hostbuddy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hostbuddy.dto.Item;
import com.hostbuddy.repository.ItemRepository;

@Service
public class ItemServiceImp implements ItemService {
	
	@Autowired
	private ItemRepository repository;
	
//	Add item
	@Override
	public Item addItem(Item item) {
		return repository.save(item);
	}

//	Retrives all the items
	@Override
	public List<Item> getAllItems() {
		return repository.findAll();
	}
	
//	Retrive an item using its name
	@Override
	public List<Item> getItemByName(String name) {
		return repository.findByName(name);
	}

//	update item
	@Override
	public Item updateItem(Item item, int id) {
		Item item1 = repository.findById(id).get();
		if(item.getName() != null) {
			item1.setName(item.getName());
		}
		if(item.getDescription() != null) {
			item1.setDescription(item.getDescription());
		}
		return repository.save(item1);
	}
}