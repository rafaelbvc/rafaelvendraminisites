import "./Banner.css";

const Banner = () => {
  const myNumber = "5515998254287";
  const message = encodeURIComponent(
    "Olá, gostaria de solicitar uma proposta para o meu projeto.",
  );

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
        <a
          href={`https://wa.me/${myNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="banner-proposta"
        >
          Solicitar Proposta
        </a>
        <span className="banner-galeria">Ver Galeria</span>
      </div>
    </div>
  );
};

export default Banner;
