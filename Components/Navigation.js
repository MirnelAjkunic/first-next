import Link from 'next/link'

const navigation = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/faq">
                        <a>FAQ</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                
            </ul>
            <style jsx>{`
                ul {
                    display: flex;
                    justify-content: space-evenly;
                    
                }
                a{
                    color: lime;
                }
                a:hover {
                    transform: scale(1.1)
                }
            `}</style>
        </nav>
     );
}
 
export default navigation;