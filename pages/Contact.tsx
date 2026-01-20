
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Grazie per il messaggio! Ti risponderò al più presto.');
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <h1 className="text-5xl font-bold mb-8">Contact</h1>
          <p className="text-gray-600 mb-12">
            Sono sempre disponibile per nuove opportunità, collaborazioni o semplicemente per uno scambio di idee sulla tecnologia e l'innovazione.
          </p>
          <div className="space-y-4">
             <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone</p>
                <p className="text-lg">+39 333 2562061</p>
             </div>
             <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</p>
                <p className="text-lg">valerio.volpe@gmail.com</p>
             </div>
          </div>
        </div>
        
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-sm font-bold uppercase tracking-widest mb-2">First Name</label>
              <input 
                type="text" 
                className="border-b-2 border-black py-2 focus:outline-none focus:border-blue-600 transition-colors"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold uppercase tracking-widest mb-2">Last Name</label>
              <input 
                type="text" 
                className="border-b-2 border-black py-2 focus:outline-none focus:border-blue-600 transition-colors"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm font-bold uppercase tracking-widest mb-2">Email *</label>
              <input 
                type="email" 
                required
                className="border-b-2 border-black py-2 focus:outline-none focus:border-blue-600 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm font-bold uppercase tracking-widest mb-2">Subject</label>
              <input 
                type="text" 
                className="border-b-2 border-black py-2 focus:outline-none focus:border-blue-600 transition-colors"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm font-bold uppercase tracking-widest mb-2">Message</label>
              <textarea 
                rows={4}
                className="border-b-2 border-black py-2 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button 
                type="submit"
                className="bg-blue-600 text-white px-12 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-black transition-all"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
