import "./ServicesCardContainer.css";
import ServicesCard from "../../components/cards/ServicesCard";
import Tools from "../../svgs/Tools";
import Consulting from "../../svgs/Consulting";
import Seo from "../../svgs/Seo";
import Support from "../../svgs/Support";

const ServicesCardContainer = () => {
  return (
    <div className="services-card-container-container">
      <ServicesCard
        cardSVG={
          <Tools svgWidth="36px" svgHeight="36px" svgFill="rgb(35, 204, 167)" />
        }
        cardTitle="MEUS SERVIÇOS"
        cardText="Sites, Banners, Portais, Publicidade em Midias Digitais"
      />
      <ServicesCard
        cardSVG={
          <Consulting
            svgWidth="36px"
            svgHeight="36px"
            svgFill="rgb(35, 204, 167)"
          />
        }
        cardTitle="CONSULTORIA"
        cardText="Consultoria para o seu negócio, ajudando a encontrar as melhores soluções para o seu projeto"
      />
      <ServicesCard
        cardSVG={
          <Seo svgWidth="36px" svgHeight="36px" svgFill="rgb(35, 204, 167)" />
        }
        cardTitle="SEO"
        cardText="Otimização de seu site para melhor posicionamento nos motores de busca como a google"
      />
      <ServicesCard
        cardSVG={
          <Support
            svgWidth="46px"
            svgHeight="46px"
            svgFill="rgb(35, 204, 167)"
          />
        }
        cardTitle="SUPORTE"
        cardText="Suporte técnico e atendimento ao cliente para garantir o melhor desempenho do seu negócio"
      />
    </div>
  );
};

export default ServicesCardContainer;
