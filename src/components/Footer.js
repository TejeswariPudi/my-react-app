import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h4 style={styles.title} >Contact Us</h4>
          <p>Email: Tejeswari@gmail.com</p>
          <p>Phone:0987654332</p>
          <p>Address: Jeswitha appartments, Hydrabad, India</p>
        </div>
        <div style={styles.column}>
          <h4 style={styles.title}>Follow Us</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div> 
        <div style={styles.column}>
          <h4 style={styles.title}>Quick Links</h4>
          <p>Home</p>
          <p>Employee</p>
          <p>Shop</p>
          <p>Services</p>
          <p>Project</p>
          <p>Contact Us</p>
        </div>
        <div style={styles.column}>
          <h4 style={styles.title}>Latest News</h4>
          <p>Stay updated with our latest announcements and news.</p>
          <p>Read our blog for insights into our industry.</p>
        </div>
      </div>
      <div style={styles.copyRight}>
        <p> IMARTICUS BAJAJ Website..</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#ddd',
    color: '#fff',
    padding: '20px 0',
    borderTop: '1px solid #fff',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  column: {
    flex: '1 1 25%', // Adjust the percentage based on your design preference
    marginBottom: '20px',
  },
  title: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  copyRight: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default Footer;
