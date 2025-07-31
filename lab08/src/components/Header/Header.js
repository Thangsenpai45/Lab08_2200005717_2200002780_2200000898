import React, { useState } from 'react';

const logoUrl = '/logo192.png';

const Header = () => {
  const [submenuVisible, setSubmenuVisible] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logoUrl} alt="Logo" style={styles.logo} />
        <span style={styles.title}>Nhóm 3 - Lab 08</span>
      </div>
      <nav style={styles.nav}>
        <a href="/" style={styles.link}>Trang chủ</a>
        <a href="/about" style={styles.link}>Giới thiệu</a>

        {/* Menu Liên hệ có submenu */}
        <div
          style={styles.menuItem}
          onMouseEnter={() => setSubmenuVisible(true)}
          onMouseLeave={() => setSubmenuVisible(false)}
        >
          <span style={{...styles.link, cursor: 'pointer'}}>Liên hệ ▼</span>
          {submenuVisible && (
            <div style={styles.submenu}>
              <a href="mailto:nhom3@example.com" style={styles.submenuLink}>Email</a>
              <a href="tel:+123456789" style={styles.submenuLink}>Hotline</a>
              <a href="https://facebook.com/nhom3" style={styles.submenuLink} target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(90deg, #1e3c72, #2a5298)',
    padding: '10px 20px',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: 16,
    transition: 'color 0.3s ease',
  },
  menuItem: {
    position: 'relative',
    display: 'inline-block',
  },
  submenu: {
    position: 'absolute',
    top: '30px',
    right: 0,              // đổi từ left: 0 sang right: 0 để xổ sang trái
    backgroundColor: '#2a5298',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    borderRadius: '4px',
    minWidth: '140px',
    maxWidth: '220px',     // giới hạn chiều rộng tránh quá to
    zIndex: 1000,
    whiteSpace: 'normal',  // cho phép xuống dòng nếu chữ dài
    wordWrap: 'break-word',
  },
  submenuLink: {
    display: 'block',
    padding: '8px 12px',
    color: 'white',
    textDecoration: 'none',
    fontSize: 14,
    transition: 'background-color 0.3s ease',
  }
};

export default Header;
