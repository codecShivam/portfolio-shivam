import {
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
} from "react-icons/fa";
import { HiDocument } from "react-icons/hi";
import { MdContactPage, MdWork } from "react-icons/md";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome className="w-5 h-5" />,
  },
  {
    id: 2,
    url: "/about",
    text: "about",
    icon: <FaUserFriends className="w-5 h-5" />,
  },
  {
    id: 3,
    url: "/",
    text: "projects",
    icon: <FaFolderOpen className="w-5 h-5" />,
  },
  {
    id: 4,
    url: "#",
    text: "journey",
    icon: <FaCalendarAlt className="w-5 h-5" />
  },
  {
    id: 5,
    url: "#",
    text: "blogs",
    icon: <HiDocument className="w-5 h-5" />,
  },
  {
    id: 6,
    url: "/contact",
    text: "contact",
    icon: <MdContactPage className="w-5 h-5" />
  },
  {
    id: 7,
    url: "#",
    text: "others",
    icon: <MdWork className="w-5 h-5" />
  }
];