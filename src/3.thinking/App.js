import {useState} from 'react'

function FilterableProductTable({products}) {
    const [filterText, setFilterText] = useState('')
    const [inStock, setInStock] = useState(false)

    return (
        <>
            <SearchBar
                filterText={filterText}
                inStock={inStock}
                setFilterText={setFilterText}
                setInStock={setInStock}/>
            <ProductTable products={products}
                filterText={filterText}
                inStock={inStock}/>
        </>
    )
}

function SearchBar({filterText, inStock, setFilterText, setInStock}) {
    return (
        <form>
            <input type='text' 
                placeholder='search...'
                value={filterText}
                onChange={e => setFilterText(e.target.value)}/><br/>
            <label>
                <input type='checkbox'
                    checked={inStock}
                    onChange={e => setInStock(e.target.checked)}/>{' '}
                only show products in stock
            </label>
        </form>
    )
}

function ProductTable({products, filterText, inStock}) {
    const rows = []
    let lastCategory = null

    products.forEach(product => {
        if(product.productName.toLowerCase().indexOf(
            filterText.toLowerCase()) === -1) return
        if(inStock && !product.stocked) return

        if(product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            )
        }

        rows.push(
            <ProductRow
                product={product}
                key={product.productName}/>
        )

        lastCategory = product.category
    })

    return (
        <table>
            <thead>
                <tr><th>name</th><th>price</th></tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

function ProductCategoryRow({category}) {
    return (
        <tr><th colSpan='2'>{category}</th></tr>
    )
}

function ProductRow({product}) {
    const productName = product.stocked ? product.productName :
        <span style={{color: 'red'}}>{product.productName}</span>
    
    return (
        <tr>
            <td>{productName}</td>
            <td>{product.price}</td>
        </tr>
    )
}

const products = [
    {category: 'fruits', price: 1000, stocked: true, productName: 'apple'},
    {category: 'fruits', price: 1000, stocked: true, productName: 'dragonfruit'},
    {category: 'fruits', price: 2000, stocked: false, productName: 'passionfruit'},
    {category: 'vegetable', price: 2000, stocked: true, productName: 'spinach'},
    {category: 'vegetable', price: 4000, stocked: false, productName: 'pumpkin'},
    {category: 'vegetable', price: 1000, stocked: true, productName: 'pea'},
]

export default function App() {
    return <FilterableProductTable products={products}/>
}