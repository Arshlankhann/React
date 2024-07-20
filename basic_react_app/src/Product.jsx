import "./product.css";
import Price from "./price";
function Product({ title, idx }) {
    let oldPrices = ["12,543", "43,235", "1,435", "599"]
    let newPrices = ["4,532", "9,545", "983", "434"]
    let description = [
        ["8,000 DPI","5 Programable Button"], ["Intutive surface","design for IPad Pro"], ["Design for Ipad Pro","Intutive Surface"], ["wireless","Optical orientation"]
    ]
    return (
        <div className="Product" >
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}
export default Product;