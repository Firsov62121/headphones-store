import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "@fontsource/montserrat";
import Content from './components/Content/Content';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Cart from './components/Cart/Cart';
import { useState } from 'react';
const data = [
  {
      id: 1,
      img: 1,
      title: 'Apple BYZ S852I',
      price: 2927,
      rate: 4.7,
      old_price: 3527
  },
  {
      id: 2,
      img: 2,
      title: 'Apple EarPods',
      price: 2327,
      rate: 4.5
  },
  {
      id: 3,
      img: 3,
      title: 'Apple EarPods',
      price: 2327,
      rate: 4.5
  },
  {
      id: 4,
      img: 1,
      title: 'Apple BYZ S852I',
      price: 2927,
      rate: 4.7,
      old_price: 3527
  },
  {
      id: 5,
      img: 2,
      title: 'Apple EarPods',
      price: 2327,
      rate: 4.5
  },
  {
      id: 6,
      img: 3,
      title: 'Apple EarPods',
      price: 2327,
      rate: 4.5
  }
];
const data2 = [
  {
      id: 7,
      img: 4,
      title: 'Apple AirPods',
      price: 9527,
      rate: 4.7
  },
  {
      id: 8,
      img: 5,
      title: 'GERLAX GH-04',
      price: 6627,
      rate: 4.7
  },
  {
      id: 9,
      img: 6,
      title: 'BOROFONE BO4',
      price: 7527,
      rate: 4.7
  }
]

function App(props) {
  const [update, setUpdate] = useState(0);
  const refresh = () => setUpdate(update + 1);
  function getCount(id) {
    return Number(sessionStorage.getItem(`prod-id${id}`));
  }
  function getAllCountForData(data) {
    return data.reduce((prev, el) => prev += getCount(el.id), 0);
  }
  function getAllCount() {
    return getAllCountForData(data) + getAllCountForData(data2);
  }
  function getAll(data) {
    for(const el of data) {
      el.count = getCount(el.id);
    }
  }
  getAll(data); 
  getAll(data2);
  //const [cookies, setCookie] = useState(getCount());
  function handleRouter() {
    getAll(data); 
    getAll(data2);
    document.getElementById('header').setAttribute('buycount', getAllCount());
    document.getElementById('main_data').setAttribute('data', data);
    document.getElementById('main_data').setAttribute('data2', data2);
    refresh();
  }
  return (
    <Router className="Router">
      <div className="App">
        <Header likeCount="2" id="header" buyCount={getAllCount()} something={update}/>
        <div className='content-wrapper' onClick={handleRouter}>
          <Routes>
            <Route path='headphones-store/cart' element={<Cart data={data} data2={data2} />} />
            <Route path='headphones-store/' element={<Content data={data} data2={data2} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>


  );
}

export default App;
