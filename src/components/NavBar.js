import React, { useState } from "react";
import "./NavBar.css";
import AdminTool from "./AdminTool"; // Import AdminTool component

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const toggleMobileMenu = () => {
    setMenuActive(!menuActive);
  };

  const openAdminToolModal = () => {
    setIsModalOpen(true); // Open the modal when the user icon is clicked
  };

  const closeAdminToolModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <header>
      <a href="#" className="logo-holder">
        <div className="logo"></div>
        <div className="logo-text">StepSync</div>
      </a>
      <nav>
        <ul id="menu" className={`menu ${menuActive ? "active" : ""}`}>
          <li>
            <a href="Dashboard">Dashboard</a>
          </li>
          <li>
            <a href="ProductCatalog">Product Catalog</a>
          </li>
          <li>
            <a href="OrderAndRequest">Order & Request</a>
          </li>
          <li>
            <a href="Sales">Sales</a>
          </li>
        </ul>

        <button className="mobile-toggle" onClick={toggleMobileMenu}>
          {/* Toggle icon changes based on menu state */}
          {menuActive ? (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          )}
        </button>

        {/* Search bar section */}
        <div className="search-bar-container">
          <input
            type="text"
            id="search"
            className="search-input"
            placeholder="Search Product..."
          />
          <button className="search-btn">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
              />
            </svg>
          </button>
        </div>

        {/* User and Notification Icons */}
        <div className="user-notification-icons">
          {/* Updated User Icon */}
          <button className="user-icon" onClick={openAdminToolModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 12c-5.523 0-10 4.477-10 10h2a8 8 0 0 1 16 0h2c0-5.523-4.477-10-10-10z" />
            </svg>
          </button>

          {/* Updated Notification Icon */}
          <button className="notification-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Z" />
            </svg>
          </button>
        </div>

      </nav>

      {/* Modal for AdminTool */}
      {isModalOpen && <AdminTool closeModal={closeAdminToolModal} />}
    </header>
  );
};

export default NavBar;
