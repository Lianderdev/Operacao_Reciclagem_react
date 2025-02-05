import './style.css'

export function Button({ children, rounded, color }) {
    return (
        <>
            <div className="button">
                <a
                    href="#"
                    className={`${rounded ? 'rounded' : ''} ${color ? 'color' + color : ''}`}>
                    {children}
                </a>
            </div>
        </>
    )
}