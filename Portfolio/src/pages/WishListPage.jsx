import WishList from "../components/WishList/WishList";
import wishes from "../api/wishes.json";
import Title from "../components/General Components/Title";
import Spacer from "../components/Spacer";

const WishListPage = () => {
  return (
    <div className="bg-[#333333]">
      <Title pos={"C"} white={true} text={"Mijn wishlist:"} />
      <Spacer black={true} />
      <WishList wishes={wishes} />
      <Spacer black={true} />
    </div>
  );
};

export default WishListPage;
