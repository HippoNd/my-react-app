export default function SearchBar  (props) {
    return (
        <div>
            <input placeholder="Search" onChange={props.onChangeInput}/>
            <div>
                <input type='checkbox' onChange={props.onChangeCheckBox}/>
                Only show products in stock
            </div>
        </div>
    )
}