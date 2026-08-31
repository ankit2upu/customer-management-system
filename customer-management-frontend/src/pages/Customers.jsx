import { useEffect, useState } from "react";
import {toast} from "react-toastify"
import Navbar from "../components/Navbar";
import CustomerTable from "../components/CustomerTable";
import CustomerForm from "../components/CustomerForm";

import {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  searchCustomer,
  getCustomersByStatus,
} from "../services/customerService";


function Customers() {

  const [customers, setCustomers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [searchKeyword, setSearchKeyword] = useState("");

  const [status, setStatus] = useState("");

  // Form modal state
  const [showForm, setShowForm] = useState(false);

  // Selected customer for editing
  const [selectedCustomer, setSelectedCustomer] =
    useState(null);


  // Load customers
  useEffect(() => {
    fetchCustomers();
  }, []);


  // Fetch all customers
  const fetchCustomers = async () => {

    try {

      setLoading(true);

      const response = await getCustomers();

      setCustomers(response.data);

    } catch (error) {

      console.error(
        "Error fetching customers:",
        error
      );

      toast.error("Failed to load customers");

    } finally {

      setLoading(false);

    }
  };


  // Search customer
  const handleSearch = async (e) => {

    const keyword = e.target.value;

    setSearchKeyword(keyword);

    try {

      if (keyword.trim() === "") {

        fetchCustomers();

      } else {

        const response =
          await searchCustomer(keyword);

        setCustomers(response.data);

      }

    } catch (error) {

      console.error(
        "Error searching customer:",
        error
      );

    }
  };


  // Filter customer by status
  const handleStatusFilter = async (e) => {

    const selectedStatus = e.target.value;

    setStatus(selectedStatus);

    try {

      if (selectedStatus === "") {

        fetchCustomers();

      } else {

        const response =
          await getCustomersByStatus(selectedStatus);

        setCustomers(response.data);

      }

    } catch (error) {

      console.error(
        "Error filtering customers:",
        error
      );

    }
  };


  // Open Add Customer form
  const handleAddCustomer = () => {

    setSelectedCustomer(null);

    setShowForm(true);

  };


  // Open Edit Customer form
  const handleEdit = (customer) => {

    setSelectedCustomer(customer);

    setShowForm(true);

  };


  // Add or Update Customer
 const handleFormSubmit = async (formData) => {
  try {
    if (selectedCustomer) {
      await updateCustomer(selectedCustomer.id, formData);

      toast.success("Customer updated successfully");
    } else {
      await addCustomer(formData);

      toast.success("Customer added successfully");
    }

    setShowForm(false);

    setSelectedCustomer(null);

    fetchCustomers();

  } catch (error) {
    console.error("Error saving customer:", error);

    if (error.response?.data) {

      const backendErrors = error.response.data;

      if (typeof backendErrors === "object") {
        const errorMessage =
          Object.values(backendErrors).join(", ");

        toast.error(errorMessage);
      } else {
        toast.error(backendErrors);
      }

    } else {
      toast.error("Something went wrong");
    }
  }
};




  // Delete customer

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this customer?"
  );

  if (!confirmDelete) {
    return;
  }

  try {
    await deleteCustomer(id);

    toast.success("Customer deleted successfully");

    fetchCustomers();

  } catch (error) {
    console.error("Error deleting customer:", error);

    toast.error("Failed to delete customer");
  }
};
     


  // Cancel form
  const handleCancel = () => {

    setShowForm(false);

    setSelectedCustomer(null);

  };


  return (
    <>
      <Navbar />

      <div className="customers-container">

        <div className="customers-header">

          <div>

            <h1>Customer Management System</h1>

            <p>
              Manage all your customers in one place
            </p>
            <p className="customer-count">
              Total Customers:
              <strong>{customers.length}</strong>
            </p>

          </div>


          <button
            className="add-customer-button"
            onClick={handleAddCustomer}
          >
            + Add Customer
          </button>

        </div>


        {/* Search and Filter */}

        <div className="customer-controls">

          <input
            type="text"
            placeholder="Search by name, email or phone..."
            value={searchKeyword}
            onChange={handleSearch}
            className="search-input"
          />


          <select
            value={status}
            onChange={handleStatusFilter}
            className="status-filter"
          >

            <option value="">
              All Status
            </option>

            <option value="ACTIVE">
              Active
            </option>

            <option value="PENDING">
              Pending
            </option>

            <option value="INACTIVE">
              Inactive
            </option>

          </select>

        </div>


        {/* Customer Table */}

        {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
        

        ) : (

          <CustomerTable
            customers={customers}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

        )}

      </div>


      {/* Customer Form Modal */}

      {showForm && (

        <CustomerForm
          customer={selectedCustomer}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />

      )}

    </>
  );
}

export default Customers;