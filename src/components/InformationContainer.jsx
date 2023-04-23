import "../styles/components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <a target="_blank" href="http://api.whatsapp.com/send?phone=5519997183289">
        <AiFillPhone id="phone-icon" />
        </a>
        <div>
         <h3>Entre em contato</h3>
          <p>(19)99718-3289</p>
        </div>
      </div>
      <div className="info-card">
        <a  target="_blank" href="mailto:dev.estermorais@gmail.com">
        <AiOutlineMail id="email-icon" />
        </a>
        <div>
          <h3>E-mail</h3>
          <p>dev.estermorais</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Araras / SP</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;