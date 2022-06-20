import React, {useState} from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
export default function FilterableProductTable () {
    const initialProducts = [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ]
    const [products,setProducts] = useState(initialProducts)  

    const sportingGoodsFilter = products.filter( item=>item.category === "Sporting Goods")

    const electronicsFilter = products.filter( item=>item.category === "Electronics")
  
    function onChangeInput (event) {
        const {value} = event.target;
        const productsFilter = initialProducts.filter(item=>item.name.toLowerCase().includes(value.toLowerCase()))
        setProducts(productsFilter)   
    }
    
    function onChangeCheckBox (e) {
        const productsCheckBox = initialProducts.filter(item=>item.stocked===true)
        const {checked} = e.target;
        if (checked===true){
            setProducts(productsCheckBox)
        }else{
            setProducts(initialProducts)
        }
    }
   
    return (
        <div>
            <SearchBar onChangeInput={onChangeInput} onChangeCheckBox={onChangeCheckBox}/>
            <ProductTable sportingGoodsFilter={sportingGoodsFilter} electronicsFilter={electronicsFilter}/>
        </div>
    )
}