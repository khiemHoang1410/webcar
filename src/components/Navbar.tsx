import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icon } from "./Icon";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b bg-gray-200">
            <div className="flex h-16 items-center ">
              {/* mobile Nav */}
              <div className="ml-4 flex lg:ml-0 ">
                <a href="/">
                  <Icon.logo className="h-10 w-10" />
                </a>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch"></div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
