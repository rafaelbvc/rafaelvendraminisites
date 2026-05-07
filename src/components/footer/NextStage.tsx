import "./NextStage.css";

const NextStage = () => {
  const myNumber = "5515998254287";
  const message = encodeURIComponent(
    "Olá, gostaria de iniciar meu projeto com a RV Sites.",
  );

  return (
    <div className="next-stage-container">
      <span className="next-stage-prepared">
        PREPARADO PARA O PROXIMO NÍVEL?
      </span>
      <a
        className="next-stage-project"
        href={`https://wa.me/${myNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        inicie seu projeto
      </a>
    </div>
  );
};

export default NextStage;
