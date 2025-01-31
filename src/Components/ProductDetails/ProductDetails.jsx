import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Star, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const product = location.state?.product;
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Image Gallery */}
                <div className="space-y-4 w-full">
                    <div className="relative bg-white rounded-lg p-4 border w-full">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto object-contain max-h-96"
                        />
                        {/* ... image navigation buttons ... */}
                    </div>
                </div>

                {/* Right Column - Product Details */}
                <div className="space-y-6">
                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                            ))}
                        </div>
                        <span className="text-lg font-medium">{product.rating} Star Rating</span>
                        <span className="text-gray-500">({product.reviews} User feedback)</span>
                    </div>

                    {/* Product Title */}
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {product.name}
                    </h1>

                    {/* Product Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="text-gray-500">Sku:</span> {product.sku}
                        </div>
                        <div>
                            <span className="text-gray-500">Availability:</span>
                            <span className={product.availability ? "text-green-600" : "text-red-600"}>
                                {product.availability ? " In Stock" : " Out of Stock"}
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500">Brand:</span> {product.brand}
                        </div>
                        <div>
                            <span className="text-gray-500">Category:</span> {product.category}
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-4">
                        <span className="text-3xl font-bold text-blue-500">{product.price}</span>
                        {product.originalPrice && (
                            <>
                                <span className="text-gray-500 line-through">{product.originalPrice}</span>
                                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                                    {Math.round((1 - parseInt(product.price.replace(/[^0-9]/g, '')) / 
                                    parseInt(product.originalPrice.replace(/[^0-9]/g, ''))) * 100)}% OFF
                                </span>
                            </>
                        )}
                    </div>

                    {/* ... rest of the component remains the same ... */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                            <div className="flex space-x-2">
                                <button className="w-8 h-8 rounded-full bg-gray-200 border-2 border-orange-500"></button>
                                <button className="w-8 h-8 rounded-full bg-gray-300"></button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                            <select className="w-full border rounded-lg p-2">
                                <option>14-inch Liquid Retina XDR display</option>
                            </select>
                        </div>
                    </div>

                    {/* Memory & Storage */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Memory</label>
                            <select className="w-full border rounded-lg p-2">
                                <option>16GB unified memory</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Storage</label>
                            <select className="w-full border rounded-lg p-2">
                                <option>1TV SSD Storage</option>
                            </select>
                        </div>
                    </div>

                    {/* Quantity and Buttons */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center border rounded-lg">
                            <button
                                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                className="px-4 py-2 border-r hover:bg-gray-50"
                            >
                                −
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-16 text-center p-2"
                            />
                            <button
                                onClick={() => setQuantity(prev => prev + 1)}
                                className="px-4 py-2 border-l hover:bg-gray-50"
                            >
                                +
                            </button>
                        </div>
                        <button className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
                            ADD TO CARD
                        </button>
                        <button className="flex-1 border border-orange-500 text-orange-500 py-3 px-6 rounded-lg hover:bg-orange-50 transition-colors">
                            BUY NOW
                        </button>
                    </div>

                    {/* Wishlist, Compare, Share */}
                    <div className="flex items-center space-x-6 pt-4 border-t">
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                            <Heart className="w-5 h-5" />
                            <span>Add to Wishlist</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                            <Share2 className="w-5 h-5" />
                            <span>Add to Compare</span>
                        </button>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-600">Share product:</span>
                            <div className="flex space-x-2">
                                <button className="text-gray-400 hover:text-blue-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </button>
                                <button className="text-gray-400 hover:text-blue-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="pt-6 border-t">
                        <p className="text-sm font-medium text-gray-700 mb-4">100% Guarantee Safe Checkout</p>
                        <div className="flex flex-wrap gap-4">
                            <img 
                                src="/src/assets/imgs/pngegg.png" 
                                alt="Visa"
                                className="h-8 w-auto"
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;