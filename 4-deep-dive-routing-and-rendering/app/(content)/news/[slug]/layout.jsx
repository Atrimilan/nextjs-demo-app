export default function NewsDetailLayout({ children, modal }) { // "modal" is the identifier of the parallel route folder
    return (
        <>
            {modal}
            {children}
        </>
    );
}