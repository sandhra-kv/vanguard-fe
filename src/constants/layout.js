import { ReactComponent as HomeIcon } from "../assets/home.svg";
import {ReactComponent as Profile} from "../assets/profile.svg";
import {ReactComponent as TeamPerformance} from "../assets/team.svg";
import {ReactComponent as Learning} from "../assets/learning.svg";

export const navbarOptions = [
   {
      id: "dashboard",
      label: "Dashboard",
      path: "/",
      icon: HomeIcon,
   },
   {
      id: "profile",
      label: "Profile",
      path: "/profile",
      icon: Profile,
   },
   {
      id: "team-performance",
      label: "Team Performance",
      path: "/team-performance",
      icon: TeamPerformance,
   },
   {
      id: "Learning",
      label: "Learning",
      path: "/learning",
      icon: Learning,
   },
];
