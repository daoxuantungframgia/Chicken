export const setData = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export const getData = (key) => {
  const storageValue = sessionStorage.getItem(key)
  return storageValue && JSON.parse(storageValue)
}

export const removeData = (key) => {
  sessionStorage.removeItem(key)
}

export const clearData = () => {
  sessionStorage.clear()
}

export const getBaskets = () => {
  return getData('baskets')
}

export const getNumberBaskets = () => {
  const baskets = getBaskets()
  return baskets ? baskets.length : 0
}

export const getBasketInfo = () => {
  const products = getBaskets()
  let totalOriginPrice = 0
  let totalSalePrice = 0
  let totalDiscount = 0
  if (products) {
    products.forEach(product => {
      totalOriginPrice += product.originalPrice * product.quantity
      totalSalePrice += product.salePrice * product.quantity
      totalDiscount += ((product.originalPrice) * product.quantity * (+product.promValue)) / 100
    })
  }
  return {
    totalOriginPrice,
    totalSalePrice,
    totalDiscount
  }
}

export const addToBasket = (product) => {
  const oldProducts = getBaskets()
  const newProducts = oldProducts || []
  const existProduct = newProducts.filter(prd => prd.productId === product.productId)[0]
  if (existProduct) {
    const newProduct = { ...existProduct, quantity: existProduct.quantity + 1 }
    updateBasket(newProduct)
  } else {
    newProducts.push(product)
    setData('baskets', newProducts)
  }
}

export const removeToBasket = (productId) => {
  const oldProducts = getBaskets()
  const newProducts = oldProducts.filter((oldProduct) => oldProduct.productId !== productId)
  setData('baskets', newProducts)
}

export const clearBasket = () => {
  removeData('baskets')
}

export const updateBasket = (product) => {
  const oldProducts = getBaskets()
  const newProducts = oldProducts.map((oldProduct) => {
    if (oldProduct.productId === product.productId) {
      return product
    }
    return oldProduct
  })
  setData('baskets', newProducts)
}

export const setUser = (user) => {
  setData('user', user)
}

export const getUser = () => {
  return getData('user')
}

export const isLoginFromBasket = () => {
  return getData('loginFromBasket')
}

export const setLoginFromBasket = (isLoginFromBasket) => {
  setData('loginFromBasket', isLoginFromBasket)
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!(user && user.token)
}
