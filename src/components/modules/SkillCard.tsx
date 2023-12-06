import React, { FC } from "react";
import Image from "../ui/Image";
import { Skills } from "@/app/types";

const SkillCard: FC<Skills> = ({ title, src, alt }) => {
  return (
    <div className="p-4 flex flex-col gap-4 items-center border-2 border-solid border-slate-400 rounded-md">
      <Image src={src} alt={alt} />
      <p className="text-md">{title}</p>
    </div>
  );
};

export default SkillCard;
