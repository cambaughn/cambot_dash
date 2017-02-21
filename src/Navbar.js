import React, { Component } from 'react';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <div style={styles.brandWrapper} >
        <h1 id='brand' style={styles.brand}>cambot</h1>
      </div>
    </div>
  )
}


const styles = {
  navbar: {
    width: '100%',
    height: 70,
    // padding: 0,

    position: 'relative',

    backgroundColor: '#fe4365',
    borderBottom: '1px solid #ecf0f1',

  },

  brandWrapper: {
    width: '100%',
    height: '100%',

    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },

  brand: {
    color: 'white',
    marginLeft: 100,
    padding: 0,

    // border: '1px solid white',

  },

}

export default Navbar;
