import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            const token = localStorage.getItem("token");
            const res = await axios.get("http://localhost:5000/customers", {
                headers: { "x-auth-token": token }
            });
            setCustomers(res.data);
        };

        fetchCustomers();
    }, []);

    return (
        <div>
            <h1>Customers</h1>
            {customers.map((c) => (
                <div key={c._id}>{c.name} - {c.email}</div>
            ))}
        </div>
    );
};

export default Dashboard;