import { IconType } from "react-icons";
import {
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
} from "react-icons/fa";
import { HiDocument } from "react-icons/hi";
import { MdContactPage, MdWork } from "react-icons/md";

export interface LinkData {
  id: number;
  url: string;
  text: string;
  icon: IconType;
}

export const links: LinkData[] = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: FaHome, 
  },
  {
    id: 2,
    url: "/about",
    text: "about",
    icon: FaUserFriends,
  },
  {
    id: 3,
    url: "/",
    text: "projects",
    icon: FaFolderOpen,
  },
  {
    id: 4,
    url: "#",
    text: "journey",
    icon: FaCalendarAlt,
  },
  {
    id: 5,
    url: "#",
    text: "blogs",
    icon: HiDocument,
  },
  {
    id: 6,
    url: "/contact",
    text: "contact",
    icon: MdContactPage,
  },
  {
    id: 7,
    url: "#",
    text: "others",
    icon: MdWork,
  }
];
