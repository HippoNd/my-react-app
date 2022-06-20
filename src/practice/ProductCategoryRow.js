import React from 'react'

function ProductCategoryRow(props) {
  return (
    <>
      <tr>
        <td colSpan={2} style={{fontWeight:"bold"}}>{props.data}</td>
      </tr>
    </>
  )
}

export default ProductCategoryRow
