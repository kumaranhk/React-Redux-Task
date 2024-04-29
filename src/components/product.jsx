import { useDispatch, useSelector } from "react-redux";

const Product = ({ title, thumbnail, brand, price, description }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);

  return (
    <>
      <div className="container d-flex align-items-center justify-content-between">
        <div className="product d-flex align-items-center gap-4">
          <div className="image">
            <img src={thumbnail} className="img-thumbnail" alt={title} />
          </div>
          <div className="product-details">
            <div className="h4 text-uppercase">
              {brand} {title}
            </div>
            <div className="h6 text-uppercase">{description}</div>
          </div>
        </div>
        <div className="right-side">
          <div className="h6">
            <span className="h6 text-uppercase text-secondary">Price : </span>$
            {price}
          </div>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => dispatch({ type: "add_to_cart" })}
            >
              +
            </button>
            <button type="button" className="btn">
              <span className="h6 text-uppercase text-secondary">
                Quantity :{" "}
              </span>
              {cart.count}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              disabled={cart.count === 0}
              onClick={() => dispatch({ type: "remove_from_cart" })}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className="container d-flex flex-row-reverse">
        <button className="btn btn-warning" 
        onClick={() => dispatch({type: "reset_cart"})}>Remove all item</button>
      </div>
      <hr />
      <CartPricing price={price} />
    </>
  );
};

const CartPricing = ({ price }) => {
  const cart = useSelector((state) => state.cartReducer);
  return (
    <>
      <div className="container cart">
        <div className="subtotal d-flex justify-content-between">
          <div className="h6 text-secondary">SUBTOTAL</div>
          <div className="h6">${price * cart.count}</div>
        </div>
        <div className="shipping d-flex justify-content-between">
          <div className="h6 text-secondary">SHIPPING</div>
          <div className="h6">FREE</div>
        </div>
      </div>
      <hr />
      <div className="container d-flex justify-content-between">
        <div className="h6">TOTAL</div>
        <div className="h6">${price * cart.count}</div>
      </div>
    </>
  );
};

export default Product;
