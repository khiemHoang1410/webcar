import { PRODUCT_CATEGORIES } from "./config";
import { Button } from "./ui/button";

type Category = (typeof PRODUCT_CATEGORIES)[number];


interface NavItemProps {
  isOpen: boolean;
  category: Category;
}
const NavItem = () => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button />
      </div>
    </div>
  );
};
export default NavItem;
