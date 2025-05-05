// Product page content
import React, { useState, useEffect } from 'react'

function Product() {
  const [productImageError, setProductImageError] = useState(false);
  const productImagePath = '/assets/productImage.jpg';

  useEffect(() => {
    // Check if product image is available
    const img = new Image();
    img.src = productImagePath;
    img.onerror = () => {
      console.error(`Error loading product image: ${productImagePath}`);
      setProductImageError(true);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Product Page</h1>

      <div className="max-w-md w-full bg-dark-600 rounded-lg overflow-hidden shadow-lg">
        <div className="h-64 bg-dark-700 flex items-center justify-center">
          {productImageError ? (
            <div className="text-center p-4">
              <p className="text-gray-400">Image not available</p>
            </div>
          ) : (
            <img
              src={productImagePath}
              alt="Product"
              className="w-full h-full object-cover"
              onError={() => setProductImageError(true)}
            />
          )}
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Critical Event Management System</h2>
          <p className="text-gray-400 mb-4">
            Our state-of-the-art system for monitoring and managing critical events across your organization.
          </p>
          <div className="flex justify-between items-center">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Enterprise</span>
            <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
