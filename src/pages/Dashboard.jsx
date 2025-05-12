import { useState } from "react"
import Header from "../components/Header.jsx";
import AddSubscription from "../components/AddSubscription.jsx"


const Dashboard = () => {
    const [subscriptions, setSubscriptions] = useState([]);

    const handleAdd = (subscription) => {
        setSubscriptions([...subscriptions, subscription]);
    };

    const handleDelete = (id) => {
        const updateSubs = subscriptions.filter((sub) => sub.id !== id);
        setSubscriptions(updateSubs);
    }
    const totalCost = subscriptions.reduce((sum, sub) => sum + sub.price, 0);

    return (
        <>
            <Header />
            <main className=" min-h-screen bg-gray-950 p-4 mx-auto">
                <AddSubscription onAdd={handleAdd} />
                <div className="bg-gray-800 p-4 rounded shadow  max-w-xl mx-auto" >
                    <h3 className="text-gray-200 text-lg font-semibold mb-2">Your Subscriptions</h3>
                    {subscriptions.length === 0 ? (<p className="text-gray-400">No Subscriptions Added..</p>) : (
                        <ul className="space-y-2">
                            {subscriptions.map((sub) => (
                                <li key={sub.id} className="border p-2 rounded text-gray-200 bg-gray-500">
                                    <strong>{sub.name}</strong> - R{sub.price.toFixed(2)} <br />
                                    <span className="text-sm text-gray-200">
                                        Renews On : {sub.renewalDate}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                    <button onClick={() => handleDelete(sub.id)} className="text-red-400 hover:underline text-sm">Delete</button>
                    <div className="mt-4 font-bold text-gray-200">
                        Total Monthly Cost: R{totalCost.toFixed(2)}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;