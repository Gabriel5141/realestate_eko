import PropertyCard from "./property-card";

const RentPropertiesCard = () => {
  const properties = [
    {
      imgUrl: "/unsplashrlwe8f8anoc7@2x.png",
      name: "92 Allium Place, Orlando FL",
      price: "590,632",
    },
    {
      imgUrl: "/unsplashrlwe8f8anoc8@2x.png",
      name: "92 Allium Place, Orlando FL",
      price: "590,632",
    },
    {
      imgUrl: "/unsplashrlwe8f8anoc9@2x.png",
      name: "92 Allium Place, Orlando FL",
      price: "590,632",
    },
    {
      imgUrl: "/unsplashrlwe8f8anoc10@2x.png",
      name: "92 Allium Place, Orlando FL",
      price: "590,632",
    },
  ];

  return (
    <div className="self-stretch flex flex-col py-8 px-0 items-center justify-start gap-10 text-center text-4xl text-primary-800 font-semibold">
      <div className="max-w-2xl md:px-10">
        <div className="text-xl leading-7 text-lightslategray mb-8">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            imgUrl={property.imgUrl}
            name={property.name}
            price={property.price}
          />
        ))}
      </div>
      <button className="cursor-pointer border-none py-3 px-6 bg-primary-500 rounded flex items-start justify-start">
        <div className="text-base font-medium text-white">
          Load more listings
        </div>
      </button>
    </div>
  );
};

export default RentPropertiesCard;















































