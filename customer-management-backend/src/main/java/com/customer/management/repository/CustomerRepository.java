package com.customer.management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.customer.management.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    // Filter customers by status
    List<Customer> findByStatus(String status);

    // Search customers by name
    // List<Customer> findByNameContainingIgnoreCase(String keyword);
    List<Customer> findByNameContainingIgnoreCaseOrEmailContainingIgnoreCaseOrPhoneContaining(
        String name,
        String email,
        String phone
    );

    // Count customers by status
    long countByStatus(String status);
}
