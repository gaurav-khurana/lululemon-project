import "./Results.scss";
import products from "../../assets/data/products.json";
import TennisDress from "../../assets/images/pickleball1.webp";
import PinkSkirt from "../../assets/images/pickleball2.webp";
import logo from "../../assets/icons/Lululemon-logo.svg";
import { Link } from "react-router-dom";

function Results() {
  const product1 = products[6];
  const product2 = products[7];

  return (
    <>
      <main className="results">
        <section className="products-celebs-container">
          <h2 className="results__heading">
            Personalized products suggested for you (2 items)
          </h2>

          <div className="products">
            <article className="products-container">
              <div className="products-image-container">
                <img
                  className="products__image"
                  src={TennisDress}
                  alt="TennisDress"
                />
              </div>

              <div className="products-text-container">
                <div className="products-title-container">
                  <Link to="https://shop.lululemon.com/en-ca/p/skirts-and-dresses-dresses/Lightweight-Tennis-Dress/_/prod11580176?color=33068&tasid=x0W3Tkffko&taterm=lighweight%20tennis%20dress">
                    <h2 className="products__title">{product1.Title}</h2>
                  </Link>
                  <h3 className="products__text ">Item Price</h3>
                </div>

                <div className="products-price-container">
                  <h3 className="products__text ">Sinatra Blue</h3>
                  <h3 className="products__text products__text--price">
                    {product1.Cost}
                  </h3>
                </div>

                <h3 className="products__text ">Size 6</h3>

                <h3 className="products__text products__text--underline ">
                  Edit
                </h3>

                <div className="shipping-container">
                  <h3 className="shipping__text">
                    Free Shipping + Free Returns
                  </h3>
                  <p className="shipping__text shipping__text--underline">
                    Remove
                  </p>
                </div>
              </div>
            </article>

            <article className="products-container">
              <div className="products-image-container">
                <img
                  className="products__image"
                  src={PinkSkirt}
                  alt="PinkSkirt"
                />
              </div>
              <div className="products-text-container">
                <div className="products-title-container">
                  <Link to="https://shop.lululemon.com/en-ca/p/skirts-and-dresses-skirts/Pace-Rival-Skirt-Tall/_/prod3770001?color=34668&tasid=rTPD8GQ2OJ&taterm=pace%20rival%20dress%20">
                    <h2 className="products__title">{product2.Title}</h2>
                  </Link>
                  <h3 className="products__text">Item Price</h3>
                </div>

                <div className="products-price-container">
                  <h3 className="products__text">Hot Heat</h3>
                  <h3 className="products__text products__text--price">
                    {product2.Cost}
                  </h3>
                </div>

                <h3 className="products__text">Size 6</h3>

                <h3 className="products__text products__text--underline">
                  Edit
                </h3>

                <div className="shipping-container">
                  <h3 className="shipping__text">
                    Free Shipping + Free Returns
                  </h3>
                  <p className="shipping__text shipping__text--underline">
                    Remove
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="cart">
          <h2 className="cart__title">Suggested Order Summary</h2>

          <div className="cart-item-container">
            <h3 className="cart__text">SubTotal</h3>

            <h3 className="cart__text cart__text--bold">$ 196.00</h3>
          </div>

          <div className="cart-item-container">
            <h3 className="cart__text">Shipping</h3>

            <h3 className="cart__text">FREE</h3>
          </div>

          <div className="cart-item-container">
            <h3 className="cart__text">Tax</h3>

            <h3 className="cart__text">Calculated at Checkout</h3>
          </div>

          <div className="cart-item-container">
            <h3 className="cart__text cart__text--bold">Estimated Total</h3>

            <h3 className="cart__text cart__text--bold">CAD $196.00</h3>
          </div>

          <Link to="https://shop.lululemon.com/en-ca/">
            <button className="btn" type="submit">
              <img className="btn__logo" src={logo} alt="lululemon log" />{" "}
              Checkout
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}

export default Results;
