import logo from "../../../public/img/rexona-logo.png";
import * as C from "./style";
import { useMediaQuery } from "@mui/material";

export default function Header() {
  const screen = useMediaQuery("(min-width: 520px)");

  return (
    
    <C.Header>
      <C.Navbar justify={screen ? "flex-start" : "center"}>
        <img src={logo} alt="Logo Rexona" />
      </C.Navbar>
    </C.Header>
  );
}
