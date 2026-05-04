import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-slogan-container">
        <span className="banner-marketing">O SEU MARKETING DIGITAL</span>
        <span className="banner-criacao">
          Criação de Sites
          <br />
          Profissionais
        </span>
        <span className="banner-impressao">
          A primeira impressão digital que a sua marca merece, <br />a sua ideia
          vira solução!
        </span>
        <span className="banner-proposta">Solicitar Proposta</span>
        <span className="banner-galeria">Ver Galeria</span>
      </div>
    </div>
  );
};

export default Banner;
