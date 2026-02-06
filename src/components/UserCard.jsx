import './UserCard.css'
function UserCard({name,email,role}){
    return(
        <div classeName="UserCard">
            <h1>{name}</h1>
            <h1>Email: {email}</h1>
            <h1>Role:{role}</h1>
        </div>
    )
}
export default UserCard;