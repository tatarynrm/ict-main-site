import React, { useEffect } from "react";
import "./Header.scss";
import { useTranslation } from "react-i18next";
import DarkMode from "../darkMode/DarkMode";
import { LanguageSwitch } from "../languageSwitch/LanguageSwitch";
import Logo from "../logo/Logo";
import EmailSvg from "../svg/EmailSvg";
import PhoneSvg from '../svg/PhoneSvg'
import TimeSvg from "../svg/TimeSvg";
import { FaBeer } from 'react-icons/fa';
const icons = [EmailSvg,PhoneSvg,TimeSvg]

const returnComponent = (children)=>{
  return <children/>
}

const Header = () => {
  const { t } = useTranslation();
  const headerInfo = t("header__info", { returnObjects: true });
  
  if (Array.isArray(headerInfo)) {
    return (
      <header className="header">
        <div className="header__inner container-xl">
          <Logo fill={"white"} width={"100px"} height={"100px"} />
          <div className="header__info">
            <ul>
              {headerInfo?.map((item, idx) => {
                return <li key={idx}>
                  <span>{item.title}</span>
                </li>;
              })}
            </ul>
          </div>
          <div className="switchers">
            <DarkMode />
            <LanguageSwitch />
          </div>
        </div>
        <div className="header__bottom">
          <div className="header__botton-inner container-xl">
          <div className="header__bottom-left">
            <ul className="header__menu-bottom">
              <li>{t("header_menu.home")}</li>
              <li>{t("header_menu.about")}</li>
              <li>{t("header_menu.our_work")}</li>
              <li>{t("header_menu.projects")}</li>
              <li>{t("header_menu.contacts")}</li>
            </ul>
          </div>
          <div className="header__bottom-right">
            <div className="socials">
              <a href="" target="_blank">
              </a>
            </div>
            <div className="request__quote">
              <button className="request">{t('header_menu-button')}</button>
            </div>
          </div>
          </div>
 
        </div>
      </header>
    );
  }
};

export default Header;
