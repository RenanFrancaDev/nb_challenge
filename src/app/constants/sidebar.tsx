import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PercentIcon from "@mui/icons-material/Percent";
import ViewListIcon from "@mui/icons-material/ViewList";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface SidebarItem {
  text: string;
  icon: React.ReactElement;
}

const SIDEBAR_INFO: SidebarItem[] = [
  {
    text: "Login",
    icon: <LoginIcon />,
  },
  {
    text: "Home",
    icon: <HomeIcon />,
  },
  {
    text: "Meus Pedidos",
    icon: <ListAltIcon />,
  },

  {
    text: "Ofertas",
    icon: <ViewListIcon />,
  },

  {
    text: "Catálogo",
    icon: <PercentIcon />,
  },
];

export default SIDEBAR_INFO;
