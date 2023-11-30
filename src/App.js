import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = ({ cartCount, setCurrentPage }) => {
  const navLinkStyle = { marginRight: '20px', cursor: 'pointer' };
  const cartButtonStyle = { float: 'right', cursor: 'pointer' };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <button className="navbar-brand btn" onClick={() => setCurrentPage('home')} style={navLinkStyle}>Start Bootstrap</button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse show" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item"><button className="nav-link btn" onClick={() => setCurrentPage('home')} style={navLinkStyle}>Home</button></li>
            <li className="nav-item"><button className="nav-link btn" onClick={() => setCurrentPage('about')} style={navLinkStyle}>About</button></li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={navLinkStyle}>Shop</button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><button className="dropdown-item btn" onClick={() => setCurrentPage('home')}>All Products</button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item btn" onClick={() => setCurrentPage('home')}>Popular Items</button></li>
                <li><button className="dropdown-item btn" onClick={() => setCurrentPage('home')}>New Arrivals</button></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="button" onClick={() => setCurrentPage('cart')} style={cartButtonStyle}>
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
        </div>
      </div>
    </header>
  );
};

const ProductList = ({ addToCart, removeFromCart, cartItems }) => {
  const products = [
    {
      id: 1,
      name: 'Iphone',
      imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      priceRange: '$500.00 - $800.00',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'One Plus',
      imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      priceRange: '$600.00 - $900.00',
      rating: 4.4,
    },
    {
      id: 3,
      name: 'Samsung',
      imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      priceRange: '$600.00 - $900.00',
      rating: 4.5,
    },
    {
      id: 4,
      name: 'Redmi',
      imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      priceRange: '$600.00 - $900.00',
      rating: 4.1,
    },
    {
      id: 5,
      name: 'Vivo',
      imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      priceRange: '$600.00 - $900.00',
      rating: 4.0,
    },
    {
      id: 6,
      name: 'Poco',
      imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      priceRange: '$600.00 - $900.00',
      rating: 3.9,
    },
    {
      id: 7,
      name: 'Asus',
      imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      priceRange: '$600.00 - $900.00',
      rating: 4.0,
    },
    {
      id: 8,
      name: 'Realme',
      imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      priceRange: '$300.00 - $500.00',
      rating: 4.3,
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div className="col mb-5" key={product.id}>
            <div className="card h-100">
              <img className="card-img-top" src={product.imageUrl} alt={product.name} />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{product.name}</h5>
                  <p className="text-muted mb-2">{product.description}</p>
                  <p className="fw-bold">${product.priceRange}</p>
                  <div className="star-rating">{product.rating} stars</div>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {cartItems.includes(product.name) ? (
                    <button className="btn btn-danger mt-auto" onClick={() => removeFromCart(product.name)}>
                      Remove from Cart
                    </button>
                  ) : (
                    <button className="btn btn-success mt-auto" onClick={() => addToCart(product.name)}>
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Cart = ({ cartCount, cartItems, removeFromCart }) => (
  <div>
    <h2>Cart</h2>
    <p>Items in Cart: {cartCount}</p>
    <ul>
      {cartItems.map((item) => (
        <li key={item}>
         {item}{' '}
          <button className="btn btn-danger" onClick={() => removeFromCart(item)}>
            Remove from Cart
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    setCartCount((prevCount) => prevCount + 1);
    setCartItems((prevItems) => [...prevItems, productId]);
  };

  const removeFromCart = (productId) => {
    setCartCount((prevCount) => prevCount - 1);
    setCartItems((prevItems) => prevItems.filter((item) => item !== productId));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <ProductList addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />;
      case 'cart':
        return <Cart cartCount={cartCount} cartItems={cartItems} removeFromCart={removeFromCart} />;
      default:
        return <ProductList addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />;
    }
  };

  return (
    <div>
      <NavBar cartCount={cartCount} setCurrentPage={setCurrentPage} />
      <hr />
      <Header />
      {renderPage()}
    </div>
  );
};

export default App;
