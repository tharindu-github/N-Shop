import React from 'react';

const SportsEvent = () => {
  return (
    <div className="bg-green-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-blue-900 rounded-2xl overflow-hidden">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0uUzJs-7BgMIqIA5lPAJoU1-MuNyzFltJQ&s=0"
            alt="NSBM Sports Fiesta"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">NSBM SPORTS FIESTA 2024</h2>
          <p className="text-gray-700 mb-4">
            T-SHIRTS WILL BE AVAILABLE<br />
            FOR SALE FROM<br />
            30TH JANUARY 2024<br />
            ONWARDS AT<br />
            THE NSBM SHOP
          </p>
        </div>
      </div>
    </div>
  );
}

export default SportsEvent;