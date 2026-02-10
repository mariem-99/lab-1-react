import './UserCard.css'

function UserCard({ name, email, role }) {
    return (
        <div className="UserCard">
            <h2 className="user-name">{name}</h2>
            <p className="user-email"><strong>Email:</strong> {email}</p>
            <p className="user-role">Role: {role}</p>
        </div>
    )
}

export default UserCard;