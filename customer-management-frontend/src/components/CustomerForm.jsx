import { useEffect, useState } from "react";

function CustomerForm({
  customer,
  onSubmit,
  onCancel,
}) {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    status: "ACTIVE",
  });

  const [errors, setErrors] = useState({});


  // If editing customer, fill form data
  useEffect(() => {

    if (customer) {

      setFormData({
        name: customer.name || "",
        phone: customer.phone || "",
        email: customer.email || "",
        address: customer.address || "",
        status: customer.status || "ACTIVE",
      });

    } else {

      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        status: "ACTIVE",
      });

    }

  }, [customer]);


  // Handle input change
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };


  // Validate form
  const validateForm = () => {

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.status) {
      newErrors.status = "Status is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  // Submit form
  const handleSubmit = (e) => {

    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }

  };


  return (
    <div className="modal-overlay">

      <div className="customer-form-modal">

        <div className="form-header">

          <h2>
            {customer
              ? "Edit Customer"
              : "Add Customer"}
          </h2>

          <button
            className="close-button"
            onClick={onCancel}
          >
            ×
          </button>

        </div>


        <form onSubmit={handleSubmit}>

          {/* Name */}

          <div className="form-group">

            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter customer name"
              value={formData.name}
              onChange={handleChange}
            />

            {errors.name && (
              <span className="field-error">
                {errors.name}
              </span>
            )}

          </div>


          {/* Phone */}

          <div className="form-group">

            <label>Phone</label>

            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            />

            {errors.phone && (
              <span className="field-error">
                {errors.phone}
              </span>
            )}

          </div>


          {/* Email */}

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <span className="field-error">
                {errors.email}
              </span>
            )}

          </div>


          {/* Address */}

          <div className="form-group">

            <label>Address</label>

            <textarea
              name="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
            />

            {errors.address && (
              <span className="field-error">
                {errors.address}
              </span>
            )}

          </div>


          {/* Status */}

          <div className="form-group">

            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >

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

            {errors.status && (
              <span className="field-error">
                {errors.status}
              </span>
            )}

          </div>


          {/* Buttons */}

          <div className="form-buttons">

            <button
              type="button"
              className="cancel-button"
              onClick={onCancel}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-button"
            >
              {customer
                ? "Update Customer"
                : "Add Customer"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default CustomerForm;