import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable (props) {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductCategoryRow data={"Sporting Goods"}/>
                    <ProductRow data={props.sportingGoodsFilter}/>
                    <ProductCategoryRow data={"Electronics"}/>
                    <ProductRow data={props.electronicsFilter}/>
                </tbody>
            </table>
        </div>
    )
}