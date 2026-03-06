import React from 'react';

const Header = () => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', background: '#f5f7fa', borderBottom: '1px solid #ccc', fontSize: 14, color: '#254046' }}>
      <span>Deutsche Bank Ebook</span>
      <div style={{ display: 'flex', gap: '10px' }}>
        <span>Pages:</span>
        <input type="text" value="24 - 25" readOnly style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '4px 8px', fontSize: 14, color: '#254046', width: '80px', textAlign: 'center' }} />
        <span>/ 26</span>
      </div>
    </header>
  );
};

export default Header;
