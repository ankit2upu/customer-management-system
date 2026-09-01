package com.customer.management.controller;

import com.customer.management.entity.Customer;
import com.customer.management.service.CustomerService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "https://serene-parfait-15ecd1.netlify.app/")
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }


    // Add Customer
    @PostMapping
    public ResponseEntity<Customer> addCustomer(
            @Valid @RequestBody Customer customer) {

        Customer savedCustomer = customerService.addCustomer(customer);

        return ResponseEntity.ok(savedCustomer);
    }


    // Get All Customers
    @GetMapping
    public ResponseEntity<List<Customer>> getAllCustomers() {

        return ResponseEntity.ok(
                customerService.getAllCustomers()
        );
    }


    // Get Customer By ID
    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomerById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                customerService.getCustomerById(id)
        );
    }


    // Update Customer
    @PutMapping("/{id}")
    public ResponseEntity<Customer> updateCustomer(
            @PathVariable Long id,
            @Valid @RequestBody Customer customer) {

        Customer updatedCustomer =
                customerService.updateCustomer(id, customer);

        return ResponseEntity.ok(updatedCustomer);
    }


    // Delete Customer
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCustomer(
            @PathVariable Long id) {

        customerService.deleteCustomer(id);

        return ResponseEntity.ok(
                "Customer deleted successfully"
        );
    }


    // Search Customer By Name
    @GetMapping("/search")
    public ResponseEntity<List<Customer>> searchCustomer(
            @RequestParam String keyword) {

        return ResponseEntity.ok(
                customerService.searchCustomer(keyword)
        );
    }


    // Filter Customer By Status
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Customer>> getCustomersByStatus(
            @PathVariable String status) {

        return ResponseEntity.ok(
                customerService.getCustomersByStatus(status)
        );
    }
}


