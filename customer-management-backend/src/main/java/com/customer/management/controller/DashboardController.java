package com.customer.management.controller;

import com.customer.management.dto.DashboardResponse;
import com.customer.management.service.DashboardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "https://serene-parfait-15ecd1.netlify.app/")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/stats")
    public ResponseEntity<DashboardResponse> getDashboardStats() {

        return ResponseEntity.ok(
                dashboardService.getDashboardStats()
        );
    }
}
