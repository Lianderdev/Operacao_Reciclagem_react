import './style.css'

export function Button({ children, rounded }) {
    return (
        <>
            <div className="button">
                <a href="#" className={rounded ? 'rounded' : ''}>{children}</a>
            </div>
        </>
    )
}