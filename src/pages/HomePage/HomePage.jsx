import "./HomePage.scss";
import lulu from '../../assets/images/luluHero.png'

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <div className="homepage__hero">

      </div>
      <form>
        <h2>lululemon</h2> <br/>
        <h3>Women's What's New</h3>;
        <h3>Men's What's New</h3>;
        <h3>All Women's</h3>;
        <h3>All Men's</h3>;
        <h3>All Accessories</h3>;
      </form>
      <div className="homepage__bottom-pic">
<img src={lulu} alt="pickleball" className="homepage__pickleball" />

      </div>
    </>
  );
}

export default HomePage;
