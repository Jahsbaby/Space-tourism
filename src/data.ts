// Destination Images
import MoonImgPng from "../public/destination/image-moon.png";
import MoonImgWebp from "../public/destination/image-moon.webp";
import EuropaImgPng from "../public/destination/image-europa.png";
import EuropaImgWebp from "../public/destination/image-europa.webp";
import MarsImgPng from "../public/destination/image-mars.png";
import MarsImgWebp from "../public/destination/image-mars.webp";
import TitanImgPng from "../public/destination/image-titan.png";
import TitanImgWebp from "../public/destination/image-titan.webp";

// Crew Images
import DouglasharleyPng from "../public/crew/image-douglas-hurley.png";
import DouglasHarleyWebp from "../public/crew/image-douglas-hurley.webp";
import MarkShuttleworthPng from "../public/crew/image-mark-shuttleworth.png";
import MarkShuttleworthWebp from "../public/crew/image-mark-shuttleworth.webp";
import VictorGloverPng from "../public/crew/image-victor-glover.png";
import VictorGloverWebp from "../public/crew/image-victor-glover.webp";
import AnoushehAnsariPng from "../public/crew/image-anousheh-ansari.png";
import AnoushehAnsariWebp from "../public/crew/image-anousheh-ansari.webp";

// Technology images
import LaunchVehicleLandscape from "../public/technology/image-launch-vehicle-landscape.jpg";
import LaunchVehiclePortrait from "../public/technology/image-launch-vehicle-portrait.jpg";
import SpacePortPortrait from "../public/technology/image-spaceport-portrait.jpg";
import SpacePortLandscape from "../public/technology/image-spaceport-landscape.jpg";
import SpaceCapsulePortrait from "../public/technology/image-launch-vehicle-portrait.jpg";
import SpaceCapsuleLandscape from "../public/technology/image-launch-vehicle-landscape.jpg";

export const destinations = [
  {
    name: "Moon",
    images: {
      png: MoonImgPng,
      webp: MoonImgWebp,
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: MarsImgPng,
      webp: MarsImgWebp,
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: EuropaImgPng,
      webp: EuropaImgWebp,
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: TitanImgPng,
      webp: TitanImgWebp,
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

export const crew = [
  {
    name: "Douglas Hurley",
    images: {
      png: DouglasharleyPng,
      webp: DouglasHarleyWebp,
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: MarkShuttleworthPng,
      webp: MarkShuttleworthWebp,
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: VictorGloverPng,
      webp: VictorGloverWebp,
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: AnoushehAnsariPng,
      webp: AnoushehAnsariWebp,
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

export const technology = [
  {
    name: "Launch vehicle",
    images: {
      portrait: LaunchVehiclePortrait,
      landscape: LaunchVehicleLandscape,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: SpacePortPortrait,
      landscape: SpacePortLandscape,
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: SpaceCapsulePortrait,
      landscape: SpaceCapsuleLandscape,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
