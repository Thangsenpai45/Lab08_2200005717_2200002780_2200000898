import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Nhóm 3 - React Lab | Email: nhom3@example.com</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1e3c72',
    color: 'white',
    textAlign: 'center',
    padding: '15px 10px',
    marginTop: 40,
  }
};

export default Footer;
