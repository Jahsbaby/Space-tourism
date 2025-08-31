import { StaticImageData } from "next/image";

export type DestinationProps = {
  name: string;
  images: {
    png: StaticImageData;
    webp: StaticImageData;
  };
  description: string;
  distance: string;
  travel: string;
};

export type CrewMemberProp = {
  name: string;
  images: {
    png: StaticImageData;
    webp: StaticImageData;
  };
  role: string;
  bio: string;
};

export type TechnologyProp = {
  name: string;
  images: {
    portrait: StaticImageData;
    landscape: StaticImageData;
  };
  description: string;
};
