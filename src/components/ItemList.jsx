import Item from "./Item";

function ItemList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container gap-6 mx-auto">
      <Item
        name={"Rolls Royce"}
        image={"/Black.jpg"}
        price={70000}
        description={
          "Rolls-Royce is an everlasting expression of the exceptional,Inspiring Greatness"
        }
      />
      <Item
        name={"Maserati Mc20"}
        image={"/Blue.jpg"}
        price={60000}
        description={
          "Elegance,style,sportness and performance with a long and glorious heritage"
        }
      />
      <Item
        name={"Delorean"}
        image={"/Purple.jpg"}
        price={80000}
        description={"Delorean is a rear-engine two passenger sports car"}
      />
      <Item
        name={"Bugatti Centeodieci"}
        image={"/White.jpg"}
        price={90000}
        description={
          "Experience the incomparable nature of the hyper luxury brand and all its offering"
        }
      />
    </div>
  );
}

export default ItemList;
