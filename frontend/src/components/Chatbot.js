import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
    const [query, setQuery] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const [stockFilter, setStockFilter] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Function to fetch products (all or based on query)
    const fetchProducts = async (query = '') => {
        setError('');
        setIsLoading(true);  // Start loading when fetching products
        try {
            const response = await axios.get(
                query
                    ? `http://127.0.0.1:8000/api/products?q=${query}`
                    : 'http://127.0.0.1:8000/api/products' // Fetch all products if no query
            );
            setProducts(response.data);
            filterProducts(response.data, query);  // Apply filter after fetching products
        } catch (err) {
            setError('Failed to fetch products. Please try again later.');
        } finally {
            setIsLoading(false);  // Stop loading after fetching
        }
    };

    // Function to filter products based on various criteria
    const filterProducts = (allProducts, query) => {
        let filtered = allProducts;

        // Filter by search query (case-insensitive)
        if (query.trim()) {
            filtered = filtered.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
        }

        // Filter by price (greater than, less than)
        if (priceFilter) {
            const [priceCondition, priceValue] = priceFilter.split(':');
            const price = parseFloat(priceValue);
            if (priceCondition === 'greater') {
                filtered = filtered.filter((product) => product.price > price);
            } else if (priceCondition === 'less') {
                filtered = filtered.filter((product) => product.price < price);
            }
        }

        // Filter by rating
        if (ratingFilter) {
            const rating = parseFloat(ratingFilter);
            filtered = filtered.filter((product) => product.rating >= rating);
        }

        // Filter by stock availability (in stock / out of stock)
        if (stockFilter) {
            if (stockFilter === 'inStock') {
                filtered = filtered.filter((product) => product.stock > 0);
            } else if (stockFilter === 'outOfStock') {
                filtered = filtered.filter((product) => product.stock === 0);
            }
        }

        setFilteredProducts(filtered);  // Set filtered products
    };

    // Fetch all products when the component mounts
    useEffect(() => {
        fetchProducts();
    }, []);  // Only fetch products once when the component first mounts

    // Handle search query
    const handleQuery = () => {
        filterProducts(products, query);
    };

    return (
        <div className="chatbot-container">
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Ask about a product..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleQuery}>Search</button>
            </div>

            {/* Filter inputs for price, rating, and stock */}
            <div className="filters">
                <div>
                    <label>Price:</label>
                    <select onChange={(e) => setPriceFilter(e.target.value)} value={priceFilter}>
                        <option value="">Select Price Filter</option>
                        <option value="greater:50">Greater than $50</option>
                        <option value="less:50">Less than $50</option>
                        <option value="greater:100">Greater than $100</option>
                        <option value="less:100">Less than $100</option>
                    </select>
                </div>
                <div>
                    <label>Rating:</label>
                    <select onChange={(e) => setRatingFilter(e.target.value)} value={ratingFilter}>
                        <option value="">Select Rating Filter</option>
                        <option value="4">Greater than or equal to 4 ⭐</option>
                        <option value="3">Greater than or equal to 3 ⭐</option>
                        <option value="2">Greater than or equal to 2 ⭐</option>
                    </select>
                </div>
                <div>
                    <label>Stock Availability:</label>
                    <select onChange={(e) => setStockFilter(e.target.value)} value={stockFilter}>
                        <option value="">Select Stock Filter</option>
                        <option value="inStock">In Stock</option>
                        <option value="outOfStock">Out of Stock</option>
                    </select>
                </div>
            </div>

            {/* Error message */}
            {error && <p className="error-message">{error}</p>}

            {/* Loading state */}
            {isLoading && <p>Loading...</p>}

            {/* Product results */}
            <div className="product-results">
                {filteredProducts.length > 0 ? (
                    <ul>
                        {filteredProducts.map((product) => (
                            <li key={product.id}>
                                <h3>{product.name}</h3>
                                <p>Price: ${product.price.toFixed(2)}</p>
                                <p>Category: {product.category}</p>
                                <p>Rating: {product.rating} ⭐</p>
                                <p>Stock: {product.stock}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default Chatbot;
