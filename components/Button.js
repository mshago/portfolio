
export const Button = ({title, size, className, ...rest}) =>{
    return (
        <a className={`inline-block py-3 px-5 font-mono text-green-300 bg-transparent border border-solid border-green-300 rounded hover:outline-none hover:bg-green-300/[0.1] transition duration-150 hover:ease-in-out ${className}`} {...rest} >{title}</a>
    )
}