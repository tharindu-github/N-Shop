

const NewCollection = () => {
  const hoodies = [
    {
      id: 1,
      image: '../image/nsbm.jpg',
      title: "HOODIE"
    },
    {
      id: 2,
      image: "/images/nsbm.jpg",
      title: "HOODIE"
    },
    {
      id: 3,
      image: "/images/nsbm.jpg",
      title: "HOODIE"
    },
  ];

  return (
    <div className="bg-green-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2">NEW COLLECTION</h2>
        <p className="text-center mb-8">NSBM Green University 1st time hoodie available now Limited Stock!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hoodies.map((hoodie) => (
            <div key={hoodie.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={hoodie.image}
                alt={hoodie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold">{hoodie.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewCollection;