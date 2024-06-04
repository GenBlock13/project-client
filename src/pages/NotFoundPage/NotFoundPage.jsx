import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <>
        <div>Page not found at all</div>
        <Link to={"/"}>На Главную</Link>
        </>
    )
}