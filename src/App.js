import React, { useState } from 'react';
import './App.css';
import { FaWhatsapp, FaStar, FaTag, FaPhone, FaEnvelope } from 'react-icons/fa';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Data produk hampers
  const products = [
    {
      id: 1,
      name: "Roasted Chicken",
      category: "premium",
      price: "Rp 150.000",
      description: "Berisi Ayam Panggang dengan Bumbu Mentega, Sayur Rebus, Jagung Rebus dan Potato Wedges ditemani Saus Barbeque dan Mushroom",
      image: "/assets/roastedchick.jpeg",
      rating: 4.8,
      whatsappMessage: "Halo admin ARTBENTOYOGYA, saya tertarik dengan Roasted Chicken. Bisa minta informasi lebih detail?"
    },
    {
      id: 2,
      name: "Pasta & Bread Pudding",
      category: "pasta",
      price: "Rp 350.000",
      description: "Pasta dengan saus spesial dan bread pudding lembut untuk hidangan istimewa.",
      image: "/assets/bread.png",
      rating: 4.5,
      whatsappMessage: "Halo admin ARTBENTOYOGYA, saya ingin bertanya tentang Pasta & Bread Pudding."
    },
    {
      id: 3,
      name: "Picnic Roll",
      category: "hariraya",
      price: "Rp 550.000",
      description: "Spesial untuk hari raya dengan berbagai hidangan khas lebaran.",
      image: "/assets/picnic.png",
      rating: 4.9,
      whatsappMessage: "Halo admin ARTBENTOYOGYA, saya tertarik dengan Picnic Roll. Apakah ready stock?"
    },
    {
      id: 4,
      name: "Mini Cheese Tart",
      category: "sehat",
      price: "Rp 400.000",
      description: "Berisi makanan sehat dengan bahan-bahan organik dan bergizi tinggi.",
      image: "/assets/tart.png",
      rating: 4.7,
      whatsappMessage: "Halo admin ARTBENTOYOGYA, saya ingin info lebih lanjut tentang Mini Cheese Tart."
    },
    {
      id: 5,
      name: "Marmer Cake",
      category: "premium",
      price: "Rp 750.000",
      description: "Kualitas premium untuk kebutuhan bisnis dan corporate gathering.",
      image: "assets/marmer.png",
      rating: 5.0,
      whatsappMessage: "Halo admin ARTBENTOYOGYA, saya ingin order Paket Bisnis dalam jumlah banyak."
    },
    {
      id: 6,
      name: "Pastel Tutup",
      category: "spesial",
      price: "Rp 500.000",
      description: "Makanan spesial untuk momen romantis bersama pasangan.",
      image: "/assets/pastel.png",
      rating: 4.6,
      whatsappMessage: "Halo admin ARTBENTOYOGYA, saya ingin pesan Paket Romantis untuk hadiah anniversary."
    },
    {
      id: 7,
      name: "Bolu Keju Jadul",
      category: "hariraya",
      price: "Rp 600.000",
      description: "Paket lengkap untuk seluruh keluarga dalam acara spesial.",
      image: "/assets/bolu.png",
      rating: 4.8,
      whatsappMessage: "Halo admin ARTBENTOYOGYA, saya mau tanya tentang Paket Keluarga."
    },
    {
      id: 8,
      name: "Chicken Steak",
      category: "pasta",
      price: "Rp 250.000",
      description: "Paket kecil dengan hidangan pilihan untuk 2 orang.",
      image: "/assets/steak.jpeg",
      rating: 4.4,
      whatsappMessage: "Halo admin ARTBENTOYOGYA, saya tertarik dengan Paket Mini. Apa saja isinya?"
    },
    {
      id: 9,
      name: "Chicken Galantine",
      category: "pasta",
      price: "Rp 250.000",
      description: "Paket kecil dengan hidangan pilihan untuk 2 orang.",
      image: "/assets/galantine.jpeg",
      rating: 4.4,
      whatsappMessage: "Halo admin ARTBENTOYOGYA, saya tertarik dengan Paket Mini. Apa saja isinya?"
    },
    {
      id: 10,
      name: "Fudge Brownies",
      category: "pasta",
      price: "Rp 250.000",
      description: "Paket kecil dengan hidangan pilihan untuk 2 orang.",
      image: "/assets/brownies.jpeg",
      rating: 4.4,
      whatsappMessage: "Halo admin ARTBENTOYOGYA, saya tertarik dengan Paket Mini. Apa saja isinya?"
    }, 
    {
      id: 11,
      name: "Sushi",
      category: "pasta",
      price: "Rp 250.000",
      description: "Paket kecil dengan hidangan pilihan untuk 2 orang.",
      image: "/assets/sushi.png",
      rating: 4.4,
      whatsappMessage: "Halo admin ARTBENTOYOGYA, saya tertarik dengan Paket Mini. Apa saja isinya?"
    }, 
    {
      id: 12,
      name: "Pudding Buah",
      category: "pasta",
      price: "Rp 250.000",
      description: "Paket kecil dengan hidangan pilihan untuk 2 orang.",
      image: "/assets/pudding.png",
      rating: 4.4,
      whatsappMessage: "Halo admin ARTBENTOYOGYA, saya tertarik dengan Paket Mini. Apa saja isinya?"
    }
  ];

  // Kategori produk (diupdate sesuai produk baru)
  const categories = [
    { id: 'all', name: 'Semua Produk' },
    { id: 'premium', name: 'Premium' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'hariraya', name: 'Hari Raya' },
    { id: 'sehat', name: 'Sehat' },
    { id: 'spesial', name: 'Spesial' }
  ];

  // Filter produk berdasarkan kategori
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Format pesan WhatsApp
  const formatWhatsAppMessage = (message) => {
    return encodeURIComponent(message);
  };

  // Nomor WhatsApp admin
  const whatsappNumber = "6281362567899";

  return (
    <div className="App">
      {/* Header dengan logo dari public/assets/ */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="/assets/logo.png" alt="ARTBENTOYOGYA Logo" className="logo-image" />
            <h1>ARTBENTO<span>YOGYA</span></h1>
          </div>
          <p className="tagline">Hadiah istimewa untuk momen spesial</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Katalog Hampers dari ARTBENTOYOGYA</h2>
            <p>Temukan hampers terbaik untuk segala kebutuhan dan momen spesial Anda</p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo admin ARTBENTOYOGYA, saya ingin konsultasi tentang produk hampers.")}`} 
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <main className="container">
        {/* Filter Kategori */}
        <section className="category-filter">
          <h3><FaTag /> Kategori Produk</h3>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Produk Grid */}
        <section className="products">
          <h3>Produk Hampers ({filteredProducts.length})</h3>
          <div className="product-grid">
            {filteredProducts.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-category">{product.category}</div>
                </div>
                <div className="product-info">
                  <div className="product-header">
                    <h4>{product.name}</h4>
                    <div className="product-rating">
                      <FaStar /> {product.rating}
                    </div>
                  </div>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=${formatWhatsAppMessage(product.whatsappMessage)}`} 
                      className="whatsapp-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp /> Pesan Sekarang
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kontak Admin */}
        <section className="contact">
          <h3><FaPhone /> Hubungi Admin</h3>
          <div className="contact-info">
            <div className="contact-card">
              <FaWhatsapp className="contact-icon whatsapp" />
              <h4>WhatsApp</h4>
              <p>+62 813-6256-7899</p>
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                className="contact-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat Sekarang
              </a>
            </div>
            <div className="contact-card">
              <FaEnvelope className="contact-icon email" />
              <h4>Email</h4>
              <p>onlineshopmamafera@gmail.com</p>
              <a href="mailto:onlineshopmamafera@gmail.com" className="contact-btn">
                Kirim Email
              </a>
            </div>
            <div className="contact-card">
              <FaPhone className="contact-icon phone" />
              <h4>Telepon</h4>
              <p>+62 813-6256-7899</p>
              <a href="tel:+6281362567899" className="contact-btn">
                Telepon Sekarang
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer dengan logo */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo">
              <img src="/assets/logo.png" alt="ARTBENTOYOGYA Logo" className="logo-image" />
              <h2>ARTBENTO<span>YOGYA</span></h2>
            </div>
            <p>Menghadirkan kebahagiaan melalui hampers berkualitas tinggi untuk setiap momen spesial Anda.</p>
            <p className="copyright">© 2026 ARTBENTOYOGYA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;