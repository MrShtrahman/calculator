import React from "react";
import { useDispatch } from "react-redux";

import { CardContent } from "semantic-ui-react";
import styles from "./Header.module.css"
import DarkModeToggle from "react-dark-mode-toggle";

import {
  setDarkMode
} from "../../../redux/actions/settings";

interface HeaderProps {
  title: String,
  isDarkMode: boolean
}

const Header = ({title, isDarkMode}: HeaderProps) => {
  const dispatch = useDispatch();

  return (  
    <CardContent className={styles.title} data-testid="memory-label">
        <h3>
            {title ?? ""}
        </h3>
        <br />
        <DarkModeToggle
            onChange={() => dispatch(setDarkMode())}
            checked={!isDarkMode}
            size={60}
            speed={2}
        />
    </CardContent>
  ) 
};

export default Header;
