import React from 'react';
import HeaderContainer from './container/HeaderContainer';
import BannerContainer from './container/BannerContainer';
import AsideContainer from './container/AsideContainer';
import FooterContainer from './container/FooterContainer';
import MainContainer from './container/MainContainer';



const App = () => {
    return (
      <div className="App">
        <HeaderContainer/>
        <BannerContainer/>
        <section className="main">
          <div className="container floatfix">
            <AsideContainer/>
            <MainContainer/>
          </div>
        </section>
        <FooterContainer/>
      </div>
    );
};

export default App;
