import Wish from "./Wish";

const WishList = ({ wishes }) => {
  return (
    <div className="mx-20 flex flex-col gap-10">
      {wishes.map((w) => (
        <Wish
          key={w.id}
          name={w.name}
          url={w.url}
          img={w.img}
          description={w.description}
          price={w.price}
        />
      ))}
    </div>
  );
};

export default WishList;
