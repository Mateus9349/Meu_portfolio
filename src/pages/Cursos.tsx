import NavBar from "@/components/NavBar"
import Link from "next/link"

export default function Cursos (){
    return(
        <main>
            <NavBar />
            <h1>Cursos</h1>
            <Link href={'/'}>Home</Link>
        </main>
    )
}