import React from 'react'

function ProductRow(props) {
    const productsRow = props.data.map(function(item,id){
        return  <tr key={id}>
                    <td style={{color:item.stocked ? "black":"red"}}>{item.name}</td>
                    <td>{item.price}</td>
                </tr>    
    })
  return (
    <>
      {productsRow}
    </>
  )
}

export default ProductRow
