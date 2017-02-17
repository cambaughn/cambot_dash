import React, { Component } from 'react';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <h1 id='brand' style={styles.brand}>cambot</h1>
    </div>
  )
}


const styles = {
  navbar: {
    width: '100%',
    height: 60,
    marginTop: -20,

    backgroundColor: '#fe4365'
  },

  brand: {
    color: 'white',
  },

}

export default Navbar;
