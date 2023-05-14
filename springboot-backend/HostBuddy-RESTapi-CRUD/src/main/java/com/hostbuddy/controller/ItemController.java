package com.hostbuddy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hostbuddy.dto.Item;
import com.hostbuddy.service.ItemServiceImp;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ItemController {
	
	@Autowired
	private ItemServiceImp service;
	
//	add item to the List
	@PostMapping("/items")
	public Item addItem(@RequestBody Item item){
		return service.addItem(item);
	}
	
//	Get all the items from the list
	@GetMapping("/items")
	public List<Item> getAllItems(){
		return service.getAllItems();
	}
	
//	Get item by its name
	@GetMapping("/items/{name}")
	public List<Item> getItemByName(@PathVariable("name") String name){
		return service.getItemByName(name);
	}
	
//	update item
	@PutMapping("/items/{id}")
	public Item updateItem (@RequestBody Item item, @PathVariable int id) {
		return service.updateItem(item, id);
	}
}