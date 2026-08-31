import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import { getCustomers } from "../services/customerService";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const response = await getCustomers();
        setCustomers(response.data);
      } catch (requestError) {
        console.error("Error fetching customers:", requestError);
        setError("Unable to load customers. Confirm that the backend is running on port 8081.");
      } finally {
        setLoading(false);
      }
    };

    loadCustomers();
  }, []);

  return (
    <>
      <Navbar />
      <main className="customers-container">
        <h1>Customers</h1>

        {loading && <p>Loading customers...</p>}
        {error && <p className="error-message">{error}</p>}

        {!loading && !error && (
          customers.length === 0 ? (
            <p>No customers found.</p>
          ) : (
            <div className="customers-table-wrapper">
              <table className="customers-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Date added</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id}>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td>{customer.phone}</td>
                      <td>{customer.address}</td>
                      <td>{customer.status}</td>
                      <td>{customer.dateAdded || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        )}
      </main>
    </>
  );
};

export default Customer;
