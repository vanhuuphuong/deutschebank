import React from 'react';

const Navigator = ({ goToPrev, goToNext }: { goToPrev: () => void; goToNext: () => void }) => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      right: 0,
      margin: 24,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      zIndex: 1000
    }}>
      <button
        onClick={goToPrev}
        style={{ padding: 8, borderRadius: '50%', border: '1px solid #ccc', background: '#fff', fontSize: 24, cursor: 'pointer', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        aria-label="Previous page"
      >
        &#8592;
      </button>
      <span style={{ fontWeight: 500, fontSize: 18, color: '#254046' }}>Deutsche Bank Ebook</span>
      <button
        onClick={goToNext}
        style={{ padding: 8, borderRadius: '50%', border: '1px solid #ccc', background: '#fff', fontSize: 24, cursor: 'pointer', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        aria-label="Next page"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Navigator;
