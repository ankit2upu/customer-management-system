function CustomerTable({ customers, onEdit, onDelete }) {
  if (customers.length === 0) {
    return (
      <div className="no-customers">
        No customers found
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            <th>Date Added</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>

              <td>{customer.name}</td>

              <td>{customer.phone}</td>

              <td>{customer.email}</td>

              <td>
                <span
                  className={`status ${customer.status.toLowerCase()}`}
                >
                  {customer.status}
                </span>
              </td>

              <td>
                {customer.dateAdded}
              </td>

              <td className="action-buttons">

                <button
                  className="edit-button"
                  onClick={() => onEdit(customer)}
                >
                  Edit
                </button>

                <button
                  className="delete-button"
                  onClick={() => onDelete(customer.id)}
                >
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;