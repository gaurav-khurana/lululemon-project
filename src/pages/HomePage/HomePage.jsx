import "./HomePage.scss";
// import lulu from '../../assets/images/luluHero.png'
import pickleball from '../../assets/images/starterPage.png'
import MainCard from '../../assets/images/MainCard.png'

function HomePage() {
  return (
    <>
      <div className="homepage__main">HomePage



        <div className="homepage__hero">

        </div>
{/* 
        <img src={MainCard} alt="Clickable Card" className="homepage__mainCard2" /> */}
        <form className="homepage__mainCard">
        <h2 className="homepage__mainCard--title">lululemon</h2> <br/>
        <h3>Women's What's New</h3>;
        <h3>Men's What's New</h3>;
        <h3>All Women's</h3>;
        <h3>All Men's</h3>;
        <h3>All Accessories</h3>;
      </form>
        <div className="homepage__bottom-pic">
          {/* <img src={lulu} alt="pickleball" className="homepage__pickleball" /> */}
          <img src={pickleball} alt="starter" className="homepage__picleball" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
