import React from 'react'
import PropTypes from 'prop-types'

const Promotions = ({ promotions }) => (
  <ul>
    { promotions && promotions.map((promotion) => (
      <li key={promotion.promDetailId}>
        {(() => {
          if (promotion.promType === 0) {
            return 'ưu đãi chính'
          } else {
            const fromString = `Nếu bạn mua từ ${promotion.fromQuantity} `
            const toString = promotion.toQuantity ? `đến ${promotion.toQuantity}` : ''
            return `${fromString}${toString} sản phẩm bạn sẽ được ưu đãi thêm ${promotion.value}%`
          }
        })()}
      </li>
    )) }
  </ul>
)

Promotions.propTypes = {
  promotions: PropTypes.array
}

export default Promotions
