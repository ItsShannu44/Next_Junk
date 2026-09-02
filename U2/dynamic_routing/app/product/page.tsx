import Link from "next/link";

export default function Products() {
    return (
        <div>
            <Link href="/product/101">Product 101</Link> <br />
            <Link href="/product/102">Product 102</Link> <br />
            <Link href="/product/103">Product 103</Link> <br />
            <Link href="/product/104">Product 104</Link> <br />
            <Link href="/product/abc">Product ABC</Link> <br />
        </div>
    );
}