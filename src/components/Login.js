import React, { useState } from 'react';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = (login) => {
    setIsLogin(login);
  };
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: 'lightgray',
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      marginBottom: '20px',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '20px',
      color: '#3498db',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '2px solid #3498db',
      borderRadius: '10px',
      padding: '20px',
      width: '250px',
    },
    label: {
      marginBottom: '5px',
      color: '#3498db',
    },
    input: {
      padding: '8px',
      marginBottom: '15px',
      borderRadius: '5px',
      border: '1px solid #3498db',
      width: '100%',
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
    },
    checkbox: {
      marginRight: '8px',
    },
    checkboxLabel: {
      color: '#3498db',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      backgroundColor: '#3498db',
      color: '#ffffff',
      cursor: 'pointer',
      width: '100%',
    },
    border: {
      borderBottom: '1px solid #3498db',
      width: '80%',
      margin: '20px 0',
      
    },
    activeButton: {
      padding: '10px 20px',
      borderRadius: '5px',
      backgroundColor: '#3498db',
      color: '#ffffff',
      cursor: 'pointer',
      width: '100px',
      marginRight: '10px',
    },
    inactiveButton: {
      padding: '10px 20px',
      borderRadius: '5px',
      backgroundColor: '#ffffff',
      color: '#3498db',
      cursor: 'pointer',
      width: '100px',
      marginRight: '10px',
    },
  };
  
  
  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button style={isLogin ? styles.activeButton : styles.inactiveButton} onClick={() => toggleForm(true)}>
          Login
        </button>
        <button style={!isLogin ? styles.activeButton : styles.inactiveButton} onClick={() => toggleForm(false)}>
          Sign Up
        </button>
      </div>

      {isLogin ? (
        <div>
          <h2 style={styles.title}>Login</h2>
          <form style={styles.form}>
            <label style={styles.label}>Username/Email:</label>
            <input type="text" style={styles.input} placeholder="Enter your username or email" />

            <label style={styles.label}>Password:</label>
            <input type="password" style={styles.input} placeholder="Enter your password" />

            <div style={styles.checkboxContainer}>
              <input type="checkbox" style={styles.checkbox} />
              <label style={styles.checkboxLabel}>Remember me</label>
            </div>

            <button style={styles.button}>Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h2 style={styles.title}>Sign Up</h2>
          <form style={styles.form}>
            <label style={styles.label}>Email:</label>
            <input type="text" style={styles.input} placeholder="Enter your email" />

            <label style={styles.label}>Password:</label>
            <input type="password" style={styles.input} placeholder="Enter your password" />

            <label style={styles.label}>Confirm Password:</label>
            <input type="password" style={styles.input} placeholder="Confirm your password" />

            <button style={styles.button}>Sign Up</button>
          </form>
        </div>
      )}

      <div style={styles.border}></div> {/* Border between form and other section */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  buttonContainer: {
    display: 'flex',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#3498db',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '5px',
    color: '#3498db',
  },
  input: {
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #3498db',
    width: '250px',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  checkbox: {
    marginRight: '8px',
  },
  checkboxLabel: {
    color: '#3498db',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#3498db',
    color: '#ffffff',
    cursor: 'pointer',
    width: '250px',
  },
  border: {
    borderBottom: '1px solid #3498db',
    width: '80%',
    margin: '20px 0',
  },
  activeButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#3498db',
    color: '#ffffff',
    cursor: 'pointer',
    width: '100px',
    marginRight: '10px',
  },
  inactiveButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    color: '#3498db',
    cursor: 'pointer',
    width: '100px',
    marginRight: '10px',
  },
};

export default Login;