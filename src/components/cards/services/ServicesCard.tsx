import "./ServicesCard.css";
import type { IServicesCardProps } from "../../../interfaces/IServicesCardProps";
import Tools from "../../../svgs/Tools";

const ServicesCard = ({
  cardSVG = <Tools />,
  cardTitle = "Card Title",
  cardText = "Card Text",
}: IServicesCardProps) => {
  return (
    <div className="services-card-container">
      {cardSVG}
      <span className="services-card-title">{cardTitle}</span>
      <span className="services-card-text">{cardText}</span>
    </div>
  );
};

export default ServicesCard;
