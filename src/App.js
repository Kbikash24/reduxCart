import Cart from './Components/Cart/Cart';
import Layout from './Components/Layout/Layout';
import Products from './Components/Shop/Products';
import {  useSelector } from 'react-redux/es/hooks/useSelector';

function App() {
 const showCart= useSelector((state)=>state.ui.cartIsVisible)
  return (
    <Layout>
     {showCart&&<Cart />}
      <Products />
    </Layout>
  );
}

export default App;
