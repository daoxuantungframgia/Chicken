export const setData = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export const getData = (key, value) => {
  const storageValue = sessionStorage.getItem(key)
  return storageValue && JSON.parse(storageValue)
}

export const removeData = (key) => {
  sessionStorage.removeItem(key)
}

export const clearData = () => {
  sessionStorage.clear()
}

export const addToBasket = (product) => {
  const oldProducts = getData('baskets')
  const newProducts = oldProducts || []
  newProducts.push(product)
  setData('baskets', newProducts)
}

export const removeToBasket = (productId) => {
  const oldProducts = getData('baskets')
  const newProducts = oldProducts.filter((oldProduct) => oldProduct.productId !== productId)
  setData('baskets', newProducts)
}

export const clearBasket = () => {
  removeData('baskets')
}

export const updateBasket = (product) => {
  const oldProducts = getData('baskets')
  const newProducts = oldProducts.map((oldProduct) => {
    if (oldProduct.productId === product.productId) {
      return product
    }
    return oldProduct
  })
  setData('baskets', newProducts)
}
