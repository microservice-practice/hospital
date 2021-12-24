import { useRouter } from "next/router";

export default function Home() {
    let router = useRouter()

    return (
        <h4>{router.pathname}</h4>
    )
}