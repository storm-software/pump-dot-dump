/* -------------------------------------------------------------------

                ⚡ Storm Software - Flash Flood

 This code was released as part of the Flash Flood project. Flash Flood
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/flash-flood
 Documentation:   https://stormsoftware.com/projects/flash-flood/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/flash-flood/license

 ------------------------------------------------------------------- */

import type { SVGProps } from "react";

export type SolanaLogoProps = SVGProps<SVGSVGElement> & {
  grayscale?: boolean;
};

export const SolanaLogo = ({ grayscale, ...props }: SolanaLogoProps) => {
  let color0 = "#00FFA3";
  let color1 = "#DC1FFF";

  if (grayscale) {
    color0 = "#8C8C8C";
    color1 = "#343434";
  }

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 397.7 311.7"
      {...props}>
      <linearGradient
        id="gradient0"
        gradientUnits="userSpaceOnUse"
        x1="360.8791"
        y1="351.4553"
        x2="141.213"
        y2="-69.2936"
        gradientTransform="matrix(1 0 0 -1 0 314)">
        <stop offset="0" stopColor={color0} />
        <stop offset="1" stopColor={color1} />
      </linearGradient>
      <path
        fill="url(#gradient0)"
        d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
	c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"
      />
      <linearGradient
        id="gradient1"
        gradientUnits="userSpaceOnUse"
        x1="264.8291"
        y1="401.6014"
        x2="45.163"
        y2="-19.1475"
        gradientTransform="matrix(1 0 0 -1 0 314)">
        <stop offset="0" stopColor={color0} />
        <stop offset="1" stopColor={color1} />
      </linearGradient>
      <path
        fill="url(#gradient1)"
        d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
	c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"
      />
      <linearGradient
        id="gradient2"
        gradientUnits="userSpaceOnUse"
        x1="312.5484"
        y1="376.688"
        x2="92.8822"
        y2="-44.061"
        gradientTransform="matrix(1 0 0 -1 0 314)">
        <stop offset="0" stopColor={color0} />
        <stop offset="1" stopColor={color1} />
      </linearGradient>
      <path
        fill="url(#gradient2)"
        d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4
	c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"
      />
    </svg>
  );
};
