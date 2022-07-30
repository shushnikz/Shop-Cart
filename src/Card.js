import React, { useState } from "react";


const Card = ({
  cart,
  setCart,
  title,
  rating,
  oldPrice,
  newPrice,
  sale,
  button,
}) => {
  const handleAddToCart = () => {
    setCart((prevCart) => prevCart + 1)
    setRemoveFromCart(true)
  }

  const handleRemoveFromCart = () => {
    setCart((prevCart) => prevCart - 1)
    setRemoveFromCart(false)
  }

  const [removeFromCart, setRemoveFromCart] = useState(false)
  return (

    <div className="col">
      <div className="card h-100">
        {sale && (<span className="badge badge-dark bg-dark sale">Sale</span>)}

        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{rating}</p>
          <div>
            {oldPrice ? (<>
              <span className="text-decoration-line-through text-muted">
                {oldPrice}</span> &nbsp;{newPrice}
            </>)
              :(<>{newPrice}</>) }
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <div>

              {removeFromCart ? (
                <a
                  className="btn btn-outline-dark button"
                  href="#"
                  onClick={() => handleRemoveFromCart()}
                >
                  Remove from cart
                </a>
              ) : (
                <a
                  className="btn btn-outline-dark button"
                  href="#"
                  onClick={() => handleAddToCart()}
                >{button}</a>
              )}

            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default Card;

{/* <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 row-cols-sm-2 g-4 m-5">
<div className="col">
  <div className="card struct">
      <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
    <div className="card-body text-center">
      <h5 className="card-title">Fancy Product</h5>
      <p className="card-text">$40.00 - $80.00</p>
      <div className="d-grid gap-2 col-6 mx-auto">
      <button className="btn btn-outline-dark button button1" type="button" onClick={props.handleClick}>View options</button>
      </div>
    </div>
  </div>
</div>
<div className="col">
  <div className="card struct">
    <span className="badge badge-dark bg-dark sale">Sale</span>
    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
    <div className="card-body text-center">
      <h5 className="card-title">Special Item</h5>
      <p className="card-text">⭐⭐⭐⭐⭐</p>
      <p><span className="text-decoration-line-through">$20.00</span> $18.00</p>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-outline-dark button" type="button" onClick={props.handleClick}>Add to cart</button>
      </div>
    </div>
  </div>
</div>
<div className="col">
  <div className="card struct">
    <span className="badge badge-dark bg-dark sale">Sale</span>
    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
    <div className="card-body text-center">
      <h5 className="card-title">Sale Item</h5>
      <p><span className="text-decoration-line-through">$50.00</span> $25.00</p>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-outline-dark button button1" type="button" onClick={props.handleClick}>Add to cart</button>
      </div>
    </div>
  </div>
</div>
<div className="col">
  <div className="card struct">
    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
    <div className="card-body text-center">
      <h5 className="card-title">Popular Item</h5>
      <p className="card-text">⭐⭐⭐⭐⭐</p>
      <p>$40.00</p>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-outline-dark button" type="button" onClick={props.handleClick}>Add to cart</button>
      </div>
    </div>
  </div>
</div>
<div className="col">
    <div className="card struct">
      <span className="badge badge-dark bg-dark sale">Sale</span>
      <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
      <div className="card-body text-center">
        <h5 className="card-title">Sale Item</h5>
        <p><span className="text-decoration-line-through">$50.00</span> $25.00</p>
        <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-outline-dark button button1" type="button" onClick={props.handleClick}>Add to cart</button>
          </div>
    </div>
    </div>
  </div>
  <div className="col">
    <div className="card struct">
      <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
      <div className="card-body text-center">
        <h5 className="card-title">Fancy Product</h5>
        <p className="card-text">$120.00 - $280.00</p>
        <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-outline-dark button button1" type="button" onClick={props.handleClick}>View options</button>
          </div>
    </div>
    </div>
  </div>
  <div className="col">
    <div className="card struct">
      <span className="badge badge-dark bg-dark sale">Sale</span>
      <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
      <div className="card-body text-center">
        <h5 className="card-title">Special Item</h5>
        <p className="card-text">⭐⭐⭐⭐⭐</p>
      <p><span className="text-decoration-line-through">$20.00</span> $18.00</p>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-outline-dark button" type="button" onClick={props.handleClick}>Add to cart</button>
      </div>
    </div>
    </div>
  </div>
  <div className="col">
    <div className="card struct">
      <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
      <div className="card-body text-center">
        <h5 className="card-title">Popular Item</h5>
        <p className="card-text">⭐⭐⭐⭐⭐</p>
        <p>$40.00</p>
        <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-outline-dark button" type="button" onClick={props.handleClick}>Add to cart</button>
          </div>
    </div>
    </div>
  </div>
</div> */}
