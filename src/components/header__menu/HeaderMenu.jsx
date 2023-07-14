import React from 'react'

const HeaderMenu = () => {
  return (
    <nav>
    <ul>
      <li>{t("header_menu.home")}</li>
      <li>{t("header_menu.about")}</li>
      <li>{t("header_menu.our_work")}</li>
      <li>{t("header_menu.projects")}</li>
      <li>{t("header_menu.contacts")}</li>
    </ul>
  </nav>
  )
}

export default HeaderMenu