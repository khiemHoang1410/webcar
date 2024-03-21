import { cn } from "@/lib/utils";
import { PRODUCT_CATEGORIES } from "./config";
import { Button } from "./ui/button";
import { ChevronDown, Diff, Image } from "lucide-react";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAniOpen: boolean;
}
const NavItem = ({ isAniOpen, category, isOpen, handleOpen }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        />
        {category.label}
        <ChevronDown
          className={cn("h-4 w-4 transition-all text-muted-foreground", {
            "-rotate-180": isOpen,
          })}
        />
      </div>

      {isOpen ? (
        <div
          className={cn("absolute inset-x-0 top-full text-sm text-muted-foreground",
            {
              "animate-in fade-in-10 slide-in-from-top-5": !isAniOpen,
            }
          )}>

          <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
              <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                {category.feature.map((item) => (
                  <div key={item.name} className="group relative text-base sm:text-sm">
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <img src={item.imageSrc} alt="product category"
                        className="object-cover object-center" />
                    </div>

                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div >
      ) : null}

    </div>
  )
}
export default NavItem;
