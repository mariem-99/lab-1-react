import './Movie.css';
function Movie({title,director,year,rating}){
    const stars= "⭐".repeat(Math.round(rating));
    return(
        <div className="movie">
            <h2 className="movie-title">{title}</h2>
            <p className="movie-dir">director: {director}</p>
            <p className="movie-year">year: {year}</p>
            <p className="movie-rating">rating: {stars}({rating})</p>
        </div>
    )
}
export default Movie;