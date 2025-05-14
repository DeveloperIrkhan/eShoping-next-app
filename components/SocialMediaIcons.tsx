import { Facebook, Instagram, LinkedinIcon, X } from "lucide-react";
import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-row gap-4">
      <Facebook className="hover:text-accent-color hoverEffect border rounded-full w-8 h-8 p-2 hover:border-accent-color" />
      <Instagram className="hover:text-accent-color hoverEffect border rounded-full w-8 h-8 p-2 hover:border-accent-color" />
      <X className="hover:text-accent-color hoverEffect border rounded-full w-8 h-8 p-2 hover:border-accent-color" />
      <LinkedinIcon className="hover:text-accent-color hoverEffect border rounded-full w-8 h-8 p-2 hover:border-accent-color" />
    </div>
  );
};

export default SocialMediaIcons;
