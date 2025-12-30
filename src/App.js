import React, { useState } from "react";
import "./App.css";
import { FaWhatsapp, FaStar, FaTag, FaPhone, FaEnvelope } from "react-icons/fa";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Data produk hampers
  const products = [
    {
      id: 1,
      name: "Roasted Chicken",
      category: "asin",
      price: "Rp 150.000",
      description:
        "Berisi Ayam Panggang dengan Bumbu Mentega, Sayur Rebus, Jagung Rebus dan Potato Wedges ditemani Saus Barbeque dan Mushroom.",
      image: "/assets/roastedchick.jpeg",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Roasted Chicken. Bisa minta informasi lebih detail?",
    },
    {
      id: 2,
      name: "Pasta & Bread Pudding",
      category: ["manis", "asin"],
      price: "Rp 175.000",
      description:
        "Hampers istimewa ini menghadirkan perpaduan sempurna antara kelezatan pasta yang gurih dan manisnya bread pudding yang lembut, cocok untuk dinikmati bersama orang tersayang atau sebagai hadiah spesial.",
      image: "/assets/bread.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Pasta & Bread Pudding. Bisa minta informasi lebih detail?",
    },
    {
      id: 3,
      name: "Picnic Roll",
      category: "asin",
      price: "Rp 225.000",
      description:
        "Hadirkan keseruan piknik di setiap gigitan dengan Picnic Roll kami! Sebuah kreasi istimewa yang menggabungkan cita rasa gurih, tekstur yang memikat, dan kepraktisan sempurna untuk dinikmati di mana saja.",
      image: "/assets/picnic.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Picnic Roll. Bisa minta informasi lebih detail?",
    },
    {
      id: 4,
      name: "Mini Cheese Tart",
      category: "manis",
      price: "Rp 130.000",
      description:
        "Hadirkan kemewahan yang ringan dan menggoda dengan Mini Cheese Tart kami! Setiap tart adalah mahakarya mini dengan paduan sempurna antara cake base yang renyah dan isian cheese filling yang lembut, creamy, serta meleleh di mulut. Ukurannya yang mini membuatnya sulit untuk berhenti pada satu gigitan saja.",
      image: "/assets/tart.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Mini Cheese Tart. Bisa minta informasi lebih detail?",
    },
    {
      id: 5,
      name: "Marmer Cake",
      category: "manis",
      price: "Rp 300.000",
      description:
        "Hadirkan kehangatan nostalgia dengan kelezatan yang tak lekang waktu bersama Marmer Cake kami. Kue klasik yang memadukan dua rasa favorit, cokelat dan vanilla, dalam pola marmer yang cantik bak karya seni. Setiap gigitannya lembut, moist, dan membangkitkan kenangan manis masa kecil.",
      image: "assets/marmer.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Marmer Cake. Bisa minta informasi lebih detail?",
    },
    {
      id: 6,
      name: "Pastel Tutup",
      category: "asin",
      price: "Rp 160.000",
      description: "Hadirkan sajian klasik dengan sentuhan spesial melalui Pastel Tutup kami! Lebih dari sekadar pastel biasa, hidangan ini menawarkan pengalaman makan yang unik dengan 'tutupan' yang menjadi ciri khasnya—sebuah lapisan lembut yang menyelimuti isian gurih di dalamnya, menjadikannya sempurna sebagai camilan mengenyangkan atau lauk pendamping.",
      image: "/assets/pastel.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Pastel Tutup. Bisa minta informasi lebih detail?",
    },
    {
      id: 7,
      name: "Bolu Keju Jadul",
      category: "manis",
      price: "Rp 125.000",
      description: "Balik ke masa kecil dengan setiap gigitan Bolu Keju Jadul kami. Bolu ini bukan sekadar kue biasa, melainkan sebuah perjalanan rasa yang membawa Anda kembali ke aroma oven nenek, kehangatan dapur ibu, dan momen sederhana penuh kebahagiaan. Dibuat dengan resep klasik turun-temurun, tanpa embel-embel modern, hanya kejujuran rasa yang tulus dan tekstur autentik yang sulit ditemukan di zaman sekarang.",
      image: "/assets/bolu.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Bolu Keju Jadul. Bisa minta informasi lebih detail?",
    },
    {
      id: 8,
      name: "Chicken Steak",
      category: "asin",
      price: "Rp 150.000",
      description: "Rayakan momen spesial dengan kemewahan sajian bistro yang disajikan langsung di rumah Anda. Hampers ini menghadirkan pengalaman makan lengkap ala restoran premium dengan sentuhan homemade yang hangat, sempurna untuk makan malam romantis, keluarga, atau hadiah istimewa.",
      image: "/assets/steak.jpeg",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Chicken Steak. Bisa minta informasi lebih detail?",
    },
    {
      id: 9,
      name: "Chicken Galantine",
      category: "asin",
      price: "Rp 125.000",
      description: "Sajikan keistimewaan hidangan klasik dengan sentuhan elegan yang siap memanjakan lidah. Hampers ini menawarkan pengalaman kuliner lengkap berpusat pada Galantine Ayam—kreasi olahan ayam premium yang lezat dan istimewa, dilengkapi dengan pendamping yang sempurna untuk menciptakan sajian utama yang mengesankan.",
      image: "/assets/galantine.jpeg",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Chicken Galantine. Bisa minta informasi lebih detail?",
    },
    {
      id: 10,
      name: "Fudge Brownies",
      category: "manis",
      price: "Rp 100.000",
      description: "Rayakan setiap momen manis dengan kelezatan yang kaya dan menggoda. Hampers ini didedikasikan untuk para pecinta cokelat sejati, menghadirkan Fudge Brownies dengan tekstur padat, lembut, dan sangat moist yang meleleh sempurna di mulut. Setiap gigitan adalah pelukan hangat dari rasa cokelat yang intens dan mewah.",
      image: "/assets/brownies.jpeg",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Fudge Brownies. Bisa minta informasi lebih detail?",
    },
    {
      id: 11,
      name: "Sushi",
      category: "asin",
      price: "Rp 250.000",
      description: "Rasakan kenikmatan cita rasa Jepang dengan gulungan Sushi dengan berbagai macam isian dan Topping.p",
      image: "/assets/sushi.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Sushi. Bisa minta informasi lebih detail?",
    },
    {
      id: 12,
      name: "Pudding Buah",
      category: "manis",
      price: "Rp 250.000",
      description: "Paket kecil dengan hidangan pilihan untuk 2 orang.",
      image: "/assets/pudding.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Pudding Buah. Bisa minta informasi lebih detail?",
    },
    {
      id: 13,
      name: "Nastar",
      category: "manis",
      price: "Rp 125.000",
      description: "Paket kecil dengan hidangan pilihan untuk 2 orang.",
      image: "/assets/nastar.jpeg",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Hampers Nastar. Bisa minta informasi lebih detail?",
    },
  ];

  // Kategori produk (diupdate sesuai produk baru)
  const categories = [
    { id: "all", name: "Semua Produk" },
    { id: "manis", name: "Manis" },
    { id: "asin", name: "Asin" },
  ];

  // Filter produk berdasarkan kategori
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) =>
          Array.isArray(product.category)
            ? product.category.includes(selectedCategory)
            : product.category === selectedCategory
        );

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
            <img
              src="/assets/logo.png"
              alt="ARTBENTOYOGYA Logo"
              className="logo-image"
            />
            <h1>
              ARTBENTO<span>YOGYA</span>
            </h1>
          </div>
          <p className="tagline">Happy & Yummy</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Katalog Hampers dari ARTBENTOYOGYA</h2>
            <p>
              Temukan hampers terbaik untuk segala kebutuhan dan momen spesial
              Anda
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Halo admin ARTBENTOYOGYA, saya ingin konsultasi tentang produk hampers."
              )}`}
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Tanya atau Pemesanan via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <main className="container">
        {/* Filter Kategori */}
        <section className="category-filter">
          <h3>
            <FaTag /> Kategori Produk
          </h3>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${
                  selectedCategory === category.id ? "active" : ""
                }`}
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
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />

                  {/* Display multiple categories jika tersedia */}
                  {product.categories && Array.isArray(product.categories) ? (
                    <div className="product-categories">
                      {product.categories.slice(0, 3).map((cat, index) => (
                        <span key={index} className="product-category-badge">
                          {cat}
                        </span>
                      ))}
                      {/* Tampilkan indikator jika ada lebih dari 3 kategori */}
                      {product.categories.length > 3 && (
                        <span className="product-category-more">
                          +{product.categories.length - 3}
                        </span>
                      )}
                    </div>
                  ) : (
                    /* Display single category untuk backward compatibility */
                    <div className="product-category">
                      {product.category ||
                        product.mainCategory ||
                        "Uncategorized"}
                    </div>
                  )}
                </div>

                <div className="product-info">
                  <div className="product-header">
                    <h4>{product.name}</h4>
                    <div className="product-rating">
                      <FaStar /> {product.rating}
                    </div>
                  </div>
                  <p className="product-description">{product.description}</p>

                  {/* Tampilkan tags jika ada */}
                  {product.tags && Array.isArray(product.tags) && (
                    <div className="product-tags">
                      {product.tags.map((tag, index) => (
                        <span key={index} className="product-tag">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${formatWhatsAppMessage(
                        product.whatsappMessage
                      )}`}
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
          <h3>
            <FaPhone /> Hubungi Admin
          </h3>
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
              <a
                href="mailto:onlineshopmamafera@gmail.com"
                className="contact-btn"
              >
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
              <img
                src="/assets/logo.png"
                alt="ARTBENTOYOGYA Logo"
                className="logo-image"
              />
              <h2>
                ARTBENTO<span>YOGYA</span>
              </h2>
            </div>
            <p>
              Menghadirkan kebahagiaan melalui hampers berkualitas tinggi untuk
              setiap momen spesial Anda.
            </p>
            <p className="copyright">
              © 2026 ARTBENTOYOGYA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
