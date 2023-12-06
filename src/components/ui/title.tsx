import React, { FC, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return (
    <>
      <h1 className="w-full pb-5 mb-5 border-b-2 border-solid border-slate-300 text-3xl">
        🪴{children}🪴
      </h1>
    </>
  );
};

export default Title;
