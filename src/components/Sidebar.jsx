import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
import Avatar from '../img/perfil.jpg';

import '../styles/components/sidebar.sass';


const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Ester Morais" />
        <p className="title">Front-end Developer</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="https://drive.google.com/file/d/1YraLTA_OX7KFjGK7kKBkwLna7rZhzqF_/view?usp=sharing" className="btn">Download currículo</a>
    </aside>;
};

export default Sidebar;