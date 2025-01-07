import React, { useState } from "react";
import "./WomensLeatherShoes.css";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm"; // Import the EditProductForm

const WomensLeatherShoes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for Add Product modal
  const [products, setProducts] = useState([]); // State for storing products
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for Delete Confirmation modal
  const [productToDelete, setProductToDelete] = useState(null); // Product to delete
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for Edit Product modal
  const [productToEdit, setProductToEdit] = useState(null); // Product being edited

  // Open Add Product modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close Add Product modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Add new product
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // Open Delete Confirmation modal
  const openDeleteModal = (product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  // Close Delete Confirmation modal
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setProductToDelete(null);
  };

  // Delete the product
  const deleteProduct = () => {
    setProducts(products.filter((p) => p !== productToDelete));
    closeDeleteModal();
  };

  // Open Edit Product modal
  const openEditModal = (product) => {
    setProductToEdit(product);
    setIsEditModalOpen(true);
  };

  // Close Edit Product modal
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setProductToEdit(null);
  };

  // Edit existing product
  const editProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product === productToEdit ? updatedProduct : product
      )
    );
    closeEditModal();
  };

  return (
    <div className="womens-catalog-products-container">
      <h1 className="womens-catalog-header">Women’s Leather Shoes</h1>

      {/* Button to trigger Add Product modal */}
      <button className="womens-catalog-add-product-btn" onClick={openModal}>
        Add Product
      </button>

      {/* Add Product Form Modal */}
      <AddProductForm isOpen={isModalOpen} onClose={closeModal} onSubmit={addProduct} />

      {/* Product Grid */}
      <div className="womens-catalog-products-grid">
        {products.map((product, index) => (
          <div key={index} className="womens-catalog-product-card">
            <img src={URL.createObjectURL(product.image)} alt={product.productName} />
            <div className="womens-catalog-product-info">
              <h3>{product.productName}</h3>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
            </div>
            <div className="womens-catalog-product-actions">
              {/* Delete Button */}
              <button
                className="womens-catalog-delete-btn"
                onClick={() => openDeleteModal(product)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="womens-catalog-modal-overlay">
          <div className="womens-catalog-modal-content">
            <button className="womens-catalog-close-btn" onClick={closeDeleteModal}>
              &times;
            </button>
            <h2>Are you sure you want to delete "{productToDelete?.productName}"?</h2>
            <div className="womens-catalog-modal-actions">
              <button className="womens-catalog-confirm-btn" onClick={deleteProduct}>
                Yes
              </button>
              <button className="womens-catalog-cancel-btn" onClick={closeDeleteModal}>
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Product Form Modal */}
      {isEditModalOpen && (
        <EditProductForm
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          onSubmit={editProduct}
          product={productToEdit}
        />
      )}
    </div>
  );
};

export default WomensLeatherShoes;
