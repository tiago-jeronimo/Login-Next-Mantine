import Link from "next/link";


export default async function Teste(){
    const call = await fetch('https://api.github.com/users/tiago-jeronimo')
    const response = await call.json()
    return(
        <>
        <pre>
        { JSON.stringify(response, null, 2) }
        </pre>
        <Link href='/login' >
        Login
        </Link>
        </>
    )
}