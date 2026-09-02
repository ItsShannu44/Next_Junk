type Product = {
    id: string;
    name: string;
};

const products: Product[] = [
    { id: "101", name: "iPhone 15" },
    { id: "102", name: "Samsung Galaxy S24" },
    { id: "103", name: "MacBook Air" },
    { id: "104", name: "Dell XPS 13" },
    { id: "abc", name: "Product ABC" },
];

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const product = products.find((product) => product.id === id);

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <div>
            <h1>Product Name: {product.name}</h1>
            <p>Product ID: {product.id}</p>
        </div>
    );
}
