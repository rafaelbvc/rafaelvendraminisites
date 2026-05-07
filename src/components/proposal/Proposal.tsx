import "./Proposal.css";
import Whatsapp from "../../svgs/Whatsapp";

const Proposal = () => {
  const myNumber = "5515998254287";
  const message = encodeURIComponent(
    "Olá, gostaria de solicitar uma proposta para o meu projeto.",
  );

  return (
    <div className="proposal-container">
      <a
        className="proposal-proposal"
        href={`https://wa.me/${myNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        SOLICITAR PROPOSTA
      </a>
      <Whatsapp />
    </div>
  );
};

export default Proposal;
