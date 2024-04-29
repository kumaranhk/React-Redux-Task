import { Provider } from 'react-redux'
import './App.css'
import Product from './components/product'
import store from './store/store'

function App() {
  let obj = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=90&crop=false",
    images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
}

  return (
    <>
      <Provider store={store}>
      <div className='h1'>Cart 🛒</div>
      <hr />
      <Product {...obj}/>
      </Provider>
    </>
  )
}

export default App
