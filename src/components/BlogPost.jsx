import UserCard from './UserCard';
import './BlogPost.css';
function BlogPost({title,content,date,authorName,authorEmail,authorRole}){
    return(
        <div className="blogPost">
            <h1 className="blog-title">{title}</h1>
            <UserCard className="blog-info" name={authorName} email={authorEmail} role={authorRole}/>
            <p className="blog-content">{content}</p>
            <footer className="blog-date">{date}</footer>             
        </div>
    )
}
export default BlogPost;