import React from 'react';
import InputArea from './components/InputArea';
import LineItems from './components/LineItems';
// import Counter from './Features/Counter/Counter';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  

  return (
    <div className='relative'>
      <Header />
      <main>
        <InputArea />
        
        <LineItems />
        {/* <Counter /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
