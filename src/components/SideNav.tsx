import React from 'react';

interface SideNavProps {
  show: boolean;
  changeState: (state:boolean) => void;
}

const SideNav: React.FC<SideNavProps> = ({ show, changeState }) => {
  return (
    <nav style={{display: show? 'flex': 'none', width: 340, background: '#3a5a5e', color: '#fff', padding: 0, flexDirection: 'column', minHeight: '100vh', boxShadow: '2px 0 8px rgba(0,0,0,0.04)', borderRight: '1px solid #254046', position: 'relative', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px 10px 20px', borderBottom: '1px solid #254046', background: '#2d4a53' }}>
        <span style={{ fontWeight: 600, fontSize: 17, letterSpacing: 0.5 }}>Table of contents</span>
        <button onClick={()=>changeState(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer', opacity: 0.7, marginLeft: 8 }} aria-label="Close TOC">✕</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, fontSize: 15, fontWeight: 400 }}>
        <li style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', background: 'rgba(37,64,70,0.95)', fontWeight: 500, borderLeft: '4px solid #4fd1c5', marginBottom: 2 }}>Contributors <span style={{ fontSize: 13, opacity: 0.7 }}>2</span></li>
        <li style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', marginBottom: 2 }}>Foreword <span style={{ fontSize: 13, opacity: 0.7 }}>2</span></li>
        <li style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', marginBottom: 2 }}>Contents <span style={{ fontSize: 13, opacity: 0.7 }}>3</span></li>
        <li style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', marginBottom: 2 }}>Introduction <span style={{ fontSize: 13, opacity: 0.7 }}>4</span></li>
        <li style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', marginBottom: 2 }}>1. Real-time payments <span style={{ fontSize: 13, opacity: 0.7 }}>6</span></li>
        <li style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', marginBottom: 2 }}>2. Open banking and APIs <span style={{ fontSize: 13, opacity: 0.7 }}>11</span></li>
        <li style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', marginBottom: 2 }}>3. Real-time liquidity <span style={{ fontSize: 13, opacity: 0.7 }}>15</span></li>
        <li style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', marginBottom: 2 }}>4. Real-time FX management <span style={{ fontSize: 13, opacity: 0.7 }}>20</span></li>
        <li style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', marginBottom: 2 }}>5. Robotic Process Automation and Artificial Intelligence <span style={{ fontSize: 13, opacity: 0.7 }}>22</span></li>
        <li style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', marginBottom: 2 }}>6. Realising the real-time treasury <span style={{ fontSize: 13, opacity: 0.7 }}>24</span></li>
      </ul>
    </nav>
  );
};

export default SideNav;
