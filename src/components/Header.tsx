"use client";

import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { ModeToggle } from "./modules/ModeToggle";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b-2">
      <div>
        <Link href={`/`}>
          <div className="flex justify-start items-center gap-4">
            <div className="border-2 border-solid border-black rounded-full hover:opacity-70">
              <Avatar>
                <AvatarImage src="猫.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-xl font-semibold font-sans hover:opacity-70">
              HappyMgrS
            </h3>
          </div>
        </Link>
      </div>
      <div>
        <ModeToggle />
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  HOME
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  ABOUT
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/plants" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  PLANTS
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Header;
