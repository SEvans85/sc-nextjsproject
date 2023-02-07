export default function Image(props) {
    return (
    <div>
        <img className = "max-w-full and mx-auto image-center h-64" src={props.src} alt={props.alt} />
    </div>
    )
}

