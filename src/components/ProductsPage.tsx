import React from 'react';
import { useCart } from '../context/cartContext';
import { Product } from '../types';
import '../ProductPage.css';

const products: Product[] = [
  { 
    id: 1, 
    name: 'Snake Plant', 
    price: 15, 
    description: 'Produces oxygen at night, improving air quality',
    imageUrl: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    onSale: true
  },
  { 
    id: 2, 
    name: 'Spider Plant', 
    price: 12, 
    description: 'Filters formaldehyde and xylene from the air',
    imageUrl: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    onSale: true
  },
  { 
    id: 3, 
    name: 'Peace Lily', 
    price: 18, 
    description: 'Removes mold spores and purifies the air',
    imageUrl: 'https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    onSale: true
  },
  { 
    id: 4, 
    name: 'Boston Fern', 
    price: 22, 
    description: 'Natural humidifier that removes air pollutants',
    imageUrl: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    onSale: true
  },
  { 
    id: 5, 
    name: 'Rubber Plant', 
    price: 25, 
    description: 'Excellent for removing toxins from indoor air',
    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    onSale: true
  },
  { 
    id: 6, 
    name: 'Aloe Vera', 
    price: 14, 
    description: 'Purifies air and has healing gel properties',
    imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    onSale: true
  },
];

const ProductsPage: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="products-page">
      <header className="page-header">
        <h1>Paradise Nursery</h1>
        <h2>Where Green Meets Serenity</h2>
        <div className="divider"></div>
        <h3 className="section-title">Air Purifying Plants</h3>
      </header>
      
      <main className="products-container">
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />
                {product.onSale && <div className="sale-badge">SALE</div>}
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price.toLocaleString()}</p>
                <p className="product-description">{product.description}</p>
                <button 
                  onClick={() => addToCart({...product, quantity: 1})}
                  className="add-to-cart-btn"
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default React.memo(ProductsPage);
