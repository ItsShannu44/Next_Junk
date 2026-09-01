import Link from "next/link";

export default function Products(){
    return(
        <div>
            <Link href="/products/101">Product 101</Link> <br/>
            <Link href="/products/102">Product 102</Link> <br/>
            <Link href="/products/103">Product 103</Link> <br/>
            <Link href="/products/104">Product 104</Link> <br/>
        </div>
    )
}