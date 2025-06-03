package com.example.SpringbootProject1.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.SpringbootProject1.entity.Data;
import com.example.SpringbootProject1.repository.DataRepository;
@RestController
@CrossOrigin(origins = "http://localhost:4200") 
@RequestMapping("/api/data")
public class Datacontroller {

	 @Autowired
	    private DataRepository repository;

	    @GetMapping
	    public List<Data> getAll() {
	        return repository.findAll();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Data> getById(@PathVariable Long id) {
	        return repository.findById(id)
	                .map(ResponseEntity::ok)
	                .orElse(ResponseEntity.notFound().build());
	    }

	    @PostMapping
	    public Data create(@RequestBody Data data) {
	        return repository.save(data);
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<Data> updateData(@PathVariable Long id, @RequestBody Data updatedData) {
	        Optional<Data> existing = repository.findById(id);
	        if (existing.isPresent()) {
	            Data data = existing.get();
	            data.setName(updatedData.getName());
	            data.setDescription(updatedData.getDescription());
	            return ResponseEntity.ok(repository.save(data));
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

	    @DeleteMapping("/{id}")
	    public void delete(@PathVariable Long id) {
	        repository.deleteById(id);
	    }
}
