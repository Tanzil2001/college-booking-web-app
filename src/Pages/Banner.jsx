import banner from '../assets/clg-banner.jpg';

const Banner = () => {
    return (
        <div style={{backgroundImage:`url('${banner}')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
            
        </div>
    );
};

export default Banner;