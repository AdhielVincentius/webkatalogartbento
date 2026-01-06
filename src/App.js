import React, { useState } from "react";
import "./App.css";
import { 
  FaWhatsapp, 
  FaTag, 
  FaPhone, 
  FaEnvelope, 
  FaInstagram, 
  FaFacebook, 
  FaInfoCircle
} from "react-icons/fa";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSizes, setSelectedSizes] = useState({});

  // Data produk dengan pilihan ukuran dan gambar untuk setiap varian
  const products = [
    {
      id: 1,
      name: "Roasted Chicken",
      category: "asin",
      sizes: [
        { 
          name: "Reguler", 
          price: "Rp 150.000",
          image: "/assets/roasted-chicken.jpeg" 
        },
        { 
          name: "Keranjang", 
          price: "Rp 200.000",
          image: "/assets/roastedchick.jpeg" 
        },
      ],
      description:
        "Ayam Panggang dengan Bumbu Spesial, Aneka Sayur dan Potato Wedges ditemani Saus Barbeque dan Mushroom.",
      defaultImage: "/assets/roastedchick.jpeg",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Roasted Chicken. Bisa minta informasi lebih detail?",
    },
    {
      id: 2,
      name: "Pasta & Bread Pudding",
      category: ["manis", "asin"],
      sizes: [
        { 
          name: "Reguler", 
          price: "Rp 175.000",
          image: "/assets/bread.png"
        },
      ],
      description:
        "Hampers istimewa ini menghadirkan perpaduan sempurna antara kelezatan Pasta Spagetti Burlee, Macaroni Schotel yang gurih dan manisnya bread pudding yang lembut, cocok untuk dinikmati bersama orang tersayang atau sebagai hadiah spesial.",
      defaultImage: "/assets/bread.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Pasta & Bread Pudding. Bisa minta informasi lebih detail?",
    },
    {
      id: 3,
      name: "Picnic Roll",
      category: "asin",
      sizes: [
        { 
          name: "Kotak", 
          price: "Rp 125.000",
          image: "/assets/picnic2.jpeg"
        },
        { 
          name: "Bulat", 
          price: "Rp 225.000",
          image: "/assets/picnic.png"
        }
      ],
      description:
        "Perpaduan Rasa Pastry yang renyah dan kombinasi Daging Sapi, Telur serta Keju. Sebuah kreasi istimewa yang menggabungkan cita rasa gurih, tekstur yang memikat, dan kepraktisan sempurna untuk dinikmati di mana saja.",
      defaultImage: "/assets/picnic.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Picnic Roll. Bisa minta informasi lebih detail?",
    },
    {
      id: 4,
      name: "Mini Cheese Tart",
      category: "manis",
      sizes: [
        { 
          name: "Reguler (isi 16 pcs)", 
          price: "Rp 150.000",
          image: "/assets/tart.png"
        }
      ],
      description:
        "Kemewahan yang ringan dan menggoda dengan Mini Cheese Tart kami! Setiap tart adalah mahakarya mini dengan paduan sempurna antara cake base yang renyah dan isian cheese filling yang lembut, creamy, serta meleleh di mulut.",
      defaultImage: "/assets/tart.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Mini Cheese Tart. Bisa minta informasi lebih detail?",
    },
    {
      id: 5,
      name: "Marmer Cake",
      category: "manis",
      sizes: [
        { 
          name: "Ekonomis", 
          price: "Rp 150.000",
          image: "/assets/marmer.png"
        },
        { 
          name: "Mix Butter", 
          price: "Rp 200.000",
          image: "/assets/marmer.png"
        },
        { 
          name: "Full Butter", 
          price: "Rp 300.000",
          image: "/assets/marmer.png"
        }
      ],
      description:
        "Hadirkan kehangatan nostalgia dengan kelezatan yang tak lekang waktu bersama Marmer Cake kami. Kue klasik yang memadukan dua rasa favorit, cokelat dan vanilla.",
      defaultImage: "/assets/marmer.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Marmer Cake. Bisa minta informasi lebih detail?",
    },
    {
      id: 6,
      name: "Pastel Tutup",
      category: "asin",
      sizes: [
        { 
          name: "Reguler", 
          price: "Rp 160.000",
          image: "/assets/pastel.png"
        }
      ],
      description:
        "Sajian klasik dengan sentuhan spesial melalui Pastel Tutup kami! Lebih dari sekadar pastel biasa, hidangan ini menawarkan pengalaman makan yang unik dengan 'tutupan' yang menjadi ciri khasnya berisi Daging Sapi, Aneka Sayuran serta Lembutnya Mash Potato.",
      defaultImage: "/assets/pastel.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Pastel Tutup. Bisa minta informasi lebih detail?",
    },
    {
      id: 7,
      name: "Bolu Keju Jadul",
      category: "manis",
      sizes: [
        { 
          name: "Reguler", 
          price: "Rp 125.000",
          image: "/assets/bolu.png"
        }
      ],
      description:
        "Balik ke masa kecil dengan setiap gigitan Bolu Keju Jadul kami. Bolu ini bukan sekadar kue biasa, melainkan sebuah perjalanan rasa yang membawa Anda kembali ke aroma oven nenek.",
      defaultImage: "/assets/bolu.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Bolu Keju Jadul. Bisa minta informasi lebih detail?",
    },
    {
      id: 8,
      name: "Chicken Steak",
      category: "asin",
      sizes: [
        { 
          name: "Reguler", 
          price: "Rp 150.000",
          image: "/assets/steak.jpeg"
        }
      ],
      description:
        "Rayakan momen spesial dengan kemewahan sajian bistro yang disajikan langsung di rumah Anda. Hampers ini menghadirkan pengalaman makan lengkap ala restoran premium dengan sentuhan homemade yang hangat, berisi Chicken Steak dengan Keju, Mash Potato serta Aneka Sayuran ditemani Mushroom Sauce dan Barbeque.",
      defaultImage: "/assets/steak.jpeg",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Chicken Steak. Bisa minta informasi lebih detail?",
    },
    {
      id: 9,
      name: "Chicken Galantine",
      category: "asin",
      sizes: [
        { 
          name: "Reguler", 
          price: "Rp 125.000",
          image: "/assets/galantine.jpeg"
        }
      ],
      description:
        "Sajikan keistimewaan hidangan klasik dengan sentuhan elegan yang siap memanjakan lidah. Hampers ini menawarkan pengalaman kuliner lengkap berpusat pada Galantine Ayam dipadukan dengan Aneka Sayuran, Kentang Goreng serta Saus Spesial.",
      defaultImage: "/assets/galantine.jpeg",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Chicken Galantine. Bisa minta informasi lebih detail?",
    },
    {
      id: 10,
      name: "Fudge Brownies",
      category: "manis",
      sizes: [
        { 
          name: "Reguler", 
          price: "Rp 125.000",
          image: "/assets/fudgy.jpeg"
        }
      ],
      description:
        "Rayakan setiap momen manis dengan kelezatan yang kaya dan menggoda. Hampers ini didedikasikan untuk para pecinta cokelat sejati, menghadirkan Fudge Brownies dengan tekstur kering diluar lembut didalam dengan Aneka Topping.",
      defaultImage: "/assets/fudgy.jpeg",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Fudge Brownies. Bisa minta informasi lebih detail?",
    },
    {
      id: 11,
      name: "Sushi",
      category: "asin",
      sizes: [
        { 
          name: "Reguler", 
          price: "Rp 200.000",
          image: "/assets/sushi.png"
        }
      ],
      description:
        "Rasakan kenikmatan cita rasa Jepang dengan gulungan Sushi dengan berbagai macam isian dan Topping.",
      defaultImage: "/assets/sushi.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Sushi. Bisa minta informasi lebih detail?",
    },
    {
      id: 12,
      name: "Pudding Buah",
      category: "manis",
      sizes: [
        { 
          name: "Kotak", 
          price: "Rp 150.000",
          image: "/assets/pudding.png"
        },
        { 
          name: "Bulat", 
          price: "Rp 200.000",
          image: "/assets/pudding2.jpeg"
        }
      ],
      description:
        "Kesegaran buah tropis dalam bentuk dessert yang elegan dan memikat. Hampers ini adalah perpaduan sempurna antara kelembutan pudding yang creamy.",
      defaultImage: "/assets/pudding.png",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Pudding Buah. Bisa minta informasi lebih detail?",
    },
    {
      id: 13,
      name: "Nastar",
      category: "manis",
      sizes: [
        { 
          name: "Reguler (isi 20 pcs)", 
          price: "Rp 125.000",
          image: "/assets/nastar.jpeg"
        }
      ],
      description:
        "Tak lengkap rasanya menyambut hari kemenangan tanpa kehadiran si kecil renyah nan manis ini. Hampers Nastar kami menghadirkan kue kering legendaris dengan cita rasa autentik.",
      defaultImage: "/assets/nastar.jpeg",
      whatsappMessage:
        "Halo admin ARTBENTOYOGYA, saya tertarik dengan Hampers Nastar. Bisa minta informasi lebih detail?",
    },
  ];

  // Kategori produk
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

  // Fungsi untuk mengubah ukuran yang dipilih
  const handleSizeChange = (productId, sizeIndex) => {
    setSelectedSizes({
      ...selectedSizes,
      [productId]: sizeIndex
    });
  };

  // Fungsi untuk mendapatkan harga yang dipilih
  const getSelectedPrice = (product) => {
    const selectedIndex = selectedSizes[product.id] || 0;
    return product.sizes[selectedIndex].price;
  };

  // Fungsi untuk mendapatkan size yang dipilih
  const getSelectedSizeName = (product) => {
    const selectedIndex = selectedSizes[product.id] || 0;
    return product.sizes[selectedIndex].name;
  };

  // Fungsi untuk mendapatkan gambar berdasarkan varian yang dipilih
  const getSelectedImage = (product) => {
    const selectedIndex = selectedSizes[product.id] || 0;
    return product.sizes[selectedIndex].image || product.defaultImage;
  };

  // Format pesan WhatsApp dengan ukuran terpilih
  const formatWhatsAppMessage = (product) => {
    const selectedIndex = selectedSizes[product.id] || 0;
    const selectedSize = product.sizes[selectedIndex];
    
    return encodeURIComponent(
      `Halo admin ARTBENTOYOGYA, saya tertarik dengan ${product.name} (Varian: ${selectedSize.name}, Harga: ${selectedSize.price}). Bisa minta informasi lebih detail?`
    );
  };

  // Nomor WhatsApp admin
  const whatsappNumber = "6281362567899";

  // Social Media Admin
  const socialMedia = {
    instagram: "https://instagram.com/artbentoyogya",
    facebook: "https://facebook.com/fera.huning.7"
  };

  return (
    <div className="App">
      {/* Header */}
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
            <h2>Katalog Hampers ARTBENTOYOGYA</h2>
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
                  <img 
                    src={getSelectedImage(product)} 
                    alt={`${product.name} - ${getSelectedSizeName(product)}`} 
                    className="product-image-display"
                  />

                  {/* Display categories */}
                  {product.categories && Array.isArray(product.categories) ? (
                    <div className="product-categories">
                      {product.categories.slice(0, 3).map((cat, index) => (
                        <span key={index} className="product-category-badge">
                          {cat}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="product-category">
                      {product.category || "Uncategorized"}
                    </div>
                  )}
                </div>

                <div className="product-info">
                  <div className="product-header">
                    <h4>{product.name}</h4>
                  </div>
                  <p className="product-description">{product.description}</p>

                  {/* Pilihan Ukuran */}
                  <div className="size-selection">
                    <h5>Pilih Varian:</h5>
                    <div className="size-options">
                      {product.sizes.map((size, index) => (
                        <button
                          key={index}
                          className={`size-option ${
                            selectedSizes[product.id] === index ? "active" : ""
                          }`}
                          onClick={() => handleSizeChange(product.id, index)}
                        >
                          {size.name}
                          <span className="size-price">{size.price}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Harga Terpilih */}
                  <div className="selected-price">
                    <span className="price-label">Harga:</span>
                    <span className="current-price">
                      {getSelectedPrice(product)}
                    </span>
                    <span className="size-info">
                      (Varian: {getSelectedSizeName(product)})
                    </span>
                  </div>

                  {/* Tombol WhatsApp */}
                  <div className="product-footer">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${formatWhatsAppMessage(
                        product
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
        {/* Ketentuan Pesanan */}
        <section className="terms-section">
          <div className="terms-header">
            <FaInfoCircle className="terms-icon" />
            <h3>Ketentuan Pesanan</h3>
          </div>
          
          <div className="terms-content">
            <div className="terms-grid">
              {/* Kolom 1 */}
              <div className="terms-column">
                <div className="term-item">
                  <h4>📦 Waktu Pemesanan Pre - Order</h4>
                  <p>Minimal pemesanan H-2 sebelum pengiriman</p>
                </div>
                
                <div className="term-item">
                  <h4>⏰ Waktu Pengantaran</h4>
                  <p>Jam 12.00 - 16.00 WIB</p>
                </div>
                
                <div className="term-item">
                  <h4>💰 Ketentuan Pembayaran</h4>
                  <p>
                    <strong>DP 50%</strong> saat pemesanan<br />
                    <strong>Pelunasan</strong> H-1 pengantaran
                  </p>
                </div>

                <div className="term-item">
                  <h4>📦 Alur Pemesanan</h4>
                  <p>1. Mengisi Form Pemesanan yang akan dikirimkan lewat Whatsapp</p>
                  <p>2. Ongkir akan dikonfirmasikan setelah ada alamat pengiriman</p>
                  <p>3. Invoice akan dikirimkan lewat Whatsapp</p>
                </div>
              </div>
              
              {/* Kolom 2 */}
              <div className="terms-column">
                <div className="term-item">
                  <h4>📞 Konfirmasi Pesanan</h4>
                  <p>
                    Setelah transfer, konfirmasi ke WhatsApp dengan menyertakan:<br />
                    • Nama pemesan<br />
                    • Bukti transfer<br />
                  </p>
                </div>
                
                <div className="term-item">
                  <h4>📱 Metode Pembayaran</h4>
                  <p>
                    • Transfer Bank (BCA / Mandiri)<br />
                  </p>
                </div>
              </div>
            </div>
            
            <div className="terms-note">
              <p>
                <strong>Catatan Penting:</strong> Harga dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya. 
                Untuk informasi lebih lanjut, silakan hubungi kami melalui kontak yang tersedia.
              </p>
            </div>
          </div>
        </section>
        {/* Kontak Admin */}
        <section className="contact">
          <h3>Hubungi Kami</h3>
          <div className="contact-info">
            {/* WhatsApp */}
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
                <FaWhatsapp /> Chat Sekarang
              </a>
            </div>

            {/* Telepon */}
            <div className="contact-card">
              <FaPhone className="contact-icon phone" />
              <h4>Telepon</h4>
              <p>+62 813-6256-7899</p>
              <a href="tel:+6281362567899" className="contact-btn">
                <FaPhone /> Telepon Sekarang
              </a>
            </div>

            {/* Instagram */}
            <div className="contact-card">
              <FaInstagram className="contact-icon instagram" />
              <h4>Instagram</h4>
              <p>@artbentoyogya</p>
              <a
                href={socialMedia.instagram}
                className="contact-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> Follow Kami
              </a>
            </div>

            {/* Facebook */}
            <div className="contact-card">
              <FaFacebook className="contact-icon facebook" />
              <h4>Facebook</h4>
              <p>Artbento Yogya</p>
              <a
                href={socialMedia.facebook}
                className="contact-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook /> Like Halaman
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
              Menghadirkan kebahagiaan melalui hampers untuk
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