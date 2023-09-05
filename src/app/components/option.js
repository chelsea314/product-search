
export default function Option({
    product,
    setProducts,
    products,
}){
    return (
        <>
        <option key={product.key}>{product.title}</option>
        </>
    )
}