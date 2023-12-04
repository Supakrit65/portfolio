"use client";

import React from "react";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

export default function Skill({ skillText, skillUrl }) {
  return (
    <Tooltip
      title={skillText}
      position="bottom"
      trigger="mouseenter"
      arrow={true}
      duration={300}
      animation="fade"
      theme="dark"
    >
      <Card className="group hover:scale-110 transition duration-300 ease-in-out rounded-full shadow-sm borderBlack">
        <div className="flex shadow-lg justify-center items-center w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] bg-white dark:bg-white/10">
          <div className="w-[2.4rem] h-[2.4rem] sm:h-[50px] sm:w-[50px] relative">
            <Image alt={skillText} src={skillUrl} fill />
          </div>
        </div>
      </Card>
    </Tooltip>
  );
}
