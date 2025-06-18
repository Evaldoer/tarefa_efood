import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { store } from './store'
import { GlobalCss } from './styles'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Cart from './components/Cart'

// 🚦 Configuração das rotas
const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/perfil/:id',
    element: <Perfil />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Cart /> {/* Carrinho global, visível em todas as rotas */}
    </Provider>
  )
}

export default App
