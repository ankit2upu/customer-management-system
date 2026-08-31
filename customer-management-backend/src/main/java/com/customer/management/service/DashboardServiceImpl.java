package com.customer.management.service;

import com.customer.management.dto.DashboardResponse;
import com.customer.management.repository.CustomerRepository;
import org.springframework.stereotype.Service;

@Service
public class DashboardServiceImpl implements DashboardService {

    private final CustomerRepository customerRepository;

    public DashboardServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public DashboardResponse getDashboardStats() {

        long totalCustomers = customerRepository.count();

        long activeCustomers =
                customerRepository.countByStatus("ACTIVE");

        long pendingCustomers =
                customerRepository.countByStatus("PENDING");

        return new DashboardResponse(
                totalCustomers,
                activeCustomers,
                pendingCustomers
        );
    }
}