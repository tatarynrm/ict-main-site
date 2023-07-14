import { useTranslation } from "react-i18next";
import HeroTitleItem from "../../components/titles/HeroTitleItem";
import "./Home.scss";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__hero-info container-xl">
          <HeroTitleItem text={t("hero_sub-title")} />
          <h1 className="main__title">
           <b>Your Gateway <br />
            to any Destination <br /> in the World </b> 
          </h1>
        </div>
      </div>
      <section className="what-we-do">
        <div className="container-xl">
          <div className="what-we-do-right">
            <HeroTitleItem text={t('what_we_do')}/>
            <h3>{t("what_we_do_title")}</h3>
          </div>
          <div className="what-we-do-left"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
