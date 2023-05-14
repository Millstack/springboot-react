package com.hostbuddy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hostbuddy.dto.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {
	
//	custom finder method
//	find item by name
	public List<Item> findByName (String name);
}