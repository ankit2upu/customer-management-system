import api from './api'

export const getCustomers=()=>{
    return api.get("/customers")
}

export const getCustomerById=(id)=>{
 return api.get(`/customers/${id}`)
}

export const addCustomer=(customer)=>{
    return api.post("/customers",customer)
}

export const updateCustomer=(id,customer)=>{
    return api.put(`/customers/${id}`, customer)
}

export const deleteCustomer=(id)=>{
    return api.delete(`/customers/${id}`)
}

export const searchCustomer=(keyword) => {
    return api.get(`/customers/search?keyword=${keyword}`)
}

export const getCustomerByStatus= (status)=>{
    return api.get(`/customers/status/${status}`)
}
