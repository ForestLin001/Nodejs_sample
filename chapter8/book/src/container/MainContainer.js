import React from 'react';
import MainRight from '../component/MainRight';

const MainContainer = (props) => {
  return (
    <section className="main-right">
      <MainRight url="http://library.huruji3.com/api/book-borrow-count"/>
    </section>
  )
};

export default MainContainer;
