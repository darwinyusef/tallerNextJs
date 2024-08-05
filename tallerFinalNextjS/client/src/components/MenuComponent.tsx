import Link from 'next/link'

const MenuComponent: React.FC = () => {
    return (
        <>
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
        </>
    )
}

export default MenuComponent