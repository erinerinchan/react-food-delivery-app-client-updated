import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { BasketProvider } from '@/contexts/BasketContext'
import App from '@/layouts/App'
import PagesHome from '@/pages/Home'
import PagesRestaurantsIndex from '@/pages/restaurants/Index'
import PagesRestaurantsShow from '@/pages/restaurants/Show'
import PagesNotFound from '@/pages/NotFound'
import PagesAbout from '@/pages/About'
import PagesBasket from '@/pages/basket/BasketEmpty'
import PagesCheckout from '@/pages/checkout/Checkout'

import { Auth0ProviderWithHistory } from '@/auth0-provider-with-history'

function Routing() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <BasketProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<PagesHome />} />
              <Route path="/about" element={<PagesAbout />} />
              <Route path="/restaurants" element={<PagesRestaurantsIndex />} />
              <Route path="/restaurants/:id" element={<PagesRestaurantsShow />} />
              <Route path="/basket" element={<PagesBasket />} />
              <Route path="/checkout" element={<PagesCheckout />} />
              <Route path="*" element={<PagesNotFound />} />
            </Route>
          </Routes>
        </BasketProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  )
}

export default Routing
