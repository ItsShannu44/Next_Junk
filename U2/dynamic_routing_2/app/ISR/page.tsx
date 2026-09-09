export const revalidate = 60;

export default async function ProductsPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const products = await response.json();

    return (
        <div>
            {products.map((product: any) => (
                <p key={product.id}>{product.title}</p>
            ))}
        </div>
    );
}