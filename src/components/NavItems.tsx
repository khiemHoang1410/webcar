"use client";

import React, { useState } from "react";
import { PRODUCT_CATEGORIES } from "./config";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOpen = i === activeIndex;

        return <NavItem />;
      })}
    </div>
  );
};
export default NavItems;
