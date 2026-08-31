package com.customer.management.dto;

public class DashboardResponse {

    private long totalCustomers;
    private long activeCustomers;
    private long pendingCustomers;

    public DashboardResponse() {
    }

    public DashboardResponse(
            long totalCustomers,
            long activeCustomers,
            long pendingCustomers) {

        this.totalCustomers = totalCustomers;
        this.activeCustomers = activeCustomers;
        this.pendingCustomers = pendingCustomers;
    }

    public long getTotalCustomers() {
        return totalCustomers;
    }

    public void setTotalCustomers(long totalCustomers) {
        this.totalCustomers = totalCustomers;
    }

    public long getActiveCustomers() {
        return activeCustomers;
    }

    public void setActiveCustomers(long activeCustomers) {
        this.activeCustomers = activeCustomers;
    }

    public long getPendingCustomers() {
        return pendingCustomers;
    }

    public void setPendingCustomers(long pendingCustomers) {
        this.pendingCustomers = pendingCustomers;
    }
}