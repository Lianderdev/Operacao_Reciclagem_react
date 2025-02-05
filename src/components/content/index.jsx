import './style.css'

export function Content({children}) {
    return (
        <>
            <main className='content'>{children}</main>
        </>
    )
}