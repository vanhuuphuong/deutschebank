import React from "react";
import SideNav from "./SideNav";
import Header from "./Header";
import Navigator from "./Navigator";
import Footer from "./Footer";
import NoteWidget from "./NoteWidget";

interface PageLayoutProps {
  children: React.ReactNode;
  goToPrev?: () => void;
  goToNext?: () => void;
  handleZoomChange?: (scale: number) => void;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, goToPrev, goToNext, handleZoomChange }) => {
    const [showSideNav, setShowSideNav] = React.useState(false); 
     const handleSideNavState = () => {
    setShowSideNav(current => !current)
  }  
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f7fa" }}>
      <SideNav show={showSideNav} changeState={handleSideNavState}/>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', minHeight: '100vh', padding: '32px 0', position: 'relative' }}>
        <Header />
        {/* NoteWidget floating globally */}
        <NoteWidget />
        {goToPrev && goToNext && (
          <Navigator goToPrev={goToPrev} goToNext={goToNext} />
        )}
        {children}
        <Footer changeState={handleSideNavState} handleZoomChange={handleZoomChange}/>
      </div>
    </div>
  );
};

export default PageLayout;
