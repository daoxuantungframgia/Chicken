// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayoutContainer'
import Home from './Home'
import CounterRoute from './Counter'
import ProductRoute from './ProductsPage'
import BasketRoute from './BasketPage'
import ProductDetailRoute from './ProductDetailPage'
import LoginRoute from './Login'
import RegisteRoute from './Register'
import SelectAddressRoute from './SelectAddress'
import OrderCompleteRoute from './OrderComplete'
import ForgotPasswordRoute from './ForgotPassword'
import ChangeForgotPasswordRoute from './ChangeForgotPassword'
import ChangePasswordRoute from './ChangePassword'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    CounterRoute(store),
    ProductRoute,
    BasketRoute,
    ProductDetailRoute,
    LoginRoute,
    RegisteRoute,
    SelectAddressRoute,
    OrderCompleteRoute,
    ForgotPasswordRoute,
    ChangeForgotPasswordRoute,
    ChangePasswordRoute
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
