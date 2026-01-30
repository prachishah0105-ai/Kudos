import React, { useState, useEffect } from 'react';

const KudosSystem = ({ currentUser }) => {
  const [kudosList, setKudosList] = useState([]);
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");

  // Submit Kudos
  const handleSubmit = async () => {
    if (recipient === currentUser.id) return alert("You can't give yourself kudos!");
    // API Call Logic here...
    alert("Kudos Sent!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Give Kudos</h2>
      <div className="flex flex-col gap-4 my-4">
        <select onChange={(e) => setRecipient(e.target.value)} className="border p-2">
          <option>Select a Colleague...</option>
          {/* Map through users here */}
        </select>
        <textarea 
          maxLength="500" 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Why are they awesome?"
          className="border p-2"
        />
        <button onClick={handleSubmit} className="bg-blue-600 text-white p-2 rounded">Submit</button>
      </div>

      <h2 className="text-2xl font-bold mt-10">Company Feed</h2>
      <div className="space-y-4">
        {kudosList.map(k => (
          <div key={k.id} className="border-l-4 border-green-500 p-4 bg-gray-50">
            <p className="italic">"{k.message}"</p>
            <span className="text-sm font-semibold">- Sent to {k.recipientName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};