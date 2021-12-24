import Router, { useRouter } from "next/router";

export default function Home() {
    let rotuer = useRouter()

    return <div>{rotuer.pathname}</div>
}