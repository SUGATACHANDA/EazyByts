import dayjs from 'dayjs';
import React from 'react';


const ContactTab = ({ messages, filter, setFilter }) => {
    const now = dayjs();
    const filterMessages = () => {
        switch (filter) {
            case 'today':
                return messages.filter((msg) => dayjs(msg.createdAt).isSame(now, 'day'));
            case 'last7':
                return messages.filter((msg) => dayjs(msg.createdAt).isAfter(now.subtract(7, 'day')));
            case 'last30':
                return messages.filter((msg) => dayjs(msg.createdAt).isAfter(now.subtract(30, 'day')));
            default:
                return messages;
        }
    };

    const filteredMessages = filterMessages();

    return (
        <>
            <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl text-black font-semibold">Contact Messages</h2>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border px-3 py-1 rounded bg-white text-gray-700"
                >
                    <option value="all">All</option>
                    <option value="today">Today</option>
                    <option value="last7">Last 7 Days</option>
                    <option value="last30">Last 30 Days</option>
                </select>
            </div>

            {filteredMessages.length === 0 ? (
                <p className="text-gray-500">No messages found in selected range.</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-4">
                    {filteredMessages.map((msg) => (
                        <div key={msg._id} className="border rounded-lg p-4 bg-gray-50 shadow-sm">
                            <h3 className="font-bold text-blue-700 mb-1">{msg.title}</h3>
                            <p className="text-gray-800 mb-2">{msg.message}</p>
                            <div className="text-sm text-gray-600">
                                From: {msg.name} ({msg.email})
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                                {new Date(msg.createdAt).toLocaleString()}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default ContactTab;
