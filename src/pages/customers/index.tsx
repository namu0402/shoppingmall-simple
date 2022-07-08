import {useEffect, useState} from 'react';

const Customers = () => {
    const [customers, setCustomers] = useState<{
        _id: string,
        email: string,
        password: string,
        name: string,
        createdAt: string,
        updatedAt: string,
    }[]>([]);

    const test = async () => {
        const res = await fetch('/api/customer');
        const data = await res.json();
        setCustomers(data);
    };
    
    useEffect(() => {
        test();
    }, []);

    return (
        <div>
            {customers.map((value, i) => <div key={i}>
                <p>{value?.name}</p>
                <p>{value?.createdAt}</p>
            </div>)}
        </div>
    )
}

export default Customers;
