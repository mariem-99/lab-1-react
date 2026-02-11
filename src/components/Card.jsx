import './Card.css';
function Card({title,children}){
    return(
        <div className="container-card">
            <h1 className="card-title">{title}</h1>
            <div className="card-body">
                {children} {/*the content*/} 
            </div>
        </div>
    )
}
export default Card;