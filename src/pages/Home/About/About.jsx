import about from './aboutpic.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={about} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Enjoy exciting cash back offers!</h1>
      <p className="py-6 ">Looking to turn your everyday shopping into a savings celebration? Look no further! Our exclusive Super Savings Spectacular is here to bring you unbeatable joy with a fantastic 15% cash back on all your eligible purchases!</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default About;