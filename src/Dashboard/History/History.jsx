import { useEffect, useState } from 'react';

const History = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetch(`https://lingo-camp-server.vercel.app/history`)
      .then((res) => res.json())
      .then((data) => {
        setPurchases(data.reverse());
      });
  }, []);
  console.log(purchases);

  const handleDeleteHistory = () => {
    fetch(`https://lingo-camp-server.vercel.app/history`, {
      method: 'DELETE',
    })
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((data) => {
        console.log(data);
        setPurchases([]);
      })
      .catch((error) => {
        // Handle error
        console.error('Failed to clear history:', error);
      });
  };

  return (
    <section className="table-body" translate="no">
      <button
        className="btn-clear"
        onClick={() => handleDeleteHistory(purchases)}
      >
        <p>Clear History</p>
      </button>
      <h1>
        <span className="yellow">My</span>
        <span className="blue">&lt;</span>Purchases
        <span className="blue">&gt;</span>{' '}
      </h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>
              <h1>Name</h1>
            </th>

            <th>
              <h1>Price</h1>
            </th>
            <th>
              <h1>Transaction ID</h1>
            </th>
            <th>
              <h1>Date</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => (
            <tr key={purchase._id}>
              <td>{purchase?.courseName}</td>
              <td>${purchase.price}</td>
              <td>{purchase.courseIdentity}</td>
              <td>{purchase.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default History;
