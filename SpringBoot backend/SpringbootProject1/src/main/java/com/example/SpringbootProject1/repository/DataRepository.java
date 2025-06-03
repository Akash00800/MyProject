package com.example.SpringbootProject1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SpringbootProject1.entity.Data;

public interface DataRepository extends JpaRepository<Data, Long>{

}
