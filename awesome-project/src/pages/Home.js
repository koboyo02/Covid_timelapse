import Header from '../components/Header';
import SimpleMenu from '../components/Lien';
import SvgCarteFrance from '../components/CarteFrance';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <SvgCarteFrance />
            <SimpleMenu />
        </div>
    );
};

export default Home;