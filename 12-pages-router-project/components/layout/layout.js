import MainHeader from "./main-header";

export default function Layout(props) {
    return (
        // "<>" is equivalent to "<Fragment>" (but you cannot pass properties)
        <>
            <MainHeader />
            <main>{props.children}</main>
        </>
    )
}