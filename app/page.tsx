import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Script from 'next/script';
import Header from './components/Header';

export default function Home() {
  return (
    <main>
        <Header /> 
        <div id="wrapper">
          <Sidebar/>
          <Content />
        </div>
        <Script src="/js/scripts.js"  />  
    </main>
  );
}
