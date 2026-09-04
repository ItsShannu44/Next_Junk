import { assert } from "console";

interface ProductPageProps{
    params: Promise<{
        category: string;
        id: string;
    }>
}

export default async function ProductPage({params, }: ProductPageProps) {
    const {category, id} =await params;

    return(
        <div>
            <h1>Product Details</h1>
            <p>Category: {category}</p>
            <h1>Product Id: {id}</h1>
        </div>
    )
    
}