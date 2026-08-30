package com.customer.management.service;

import com.customer.management.entity.Customer;

import java.util.List;

public interface CustomerService {

    Customer addCustomer(Customer customer);

    List<Customer> getAllCustomers();

    Customer getCustomerById(Long id);

    Customer updateCustomer(Long id, Customer customer);

    void deleteCustomer(Long id);

    List<Customer> searchCustomer(String keyword);

    List<Customer> getCustomersByStatus(String status);

}
