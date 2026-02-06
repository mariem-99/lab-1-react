function StatusBadge(){
    const isOnline=true;
    return(
        <div className="StatusBadge" style={{ color: isOnline ? "green" : "red"}}>
            <p>{isOnline? '🟢 Online' : '🔴 Offline'} </p>
            <p>User is currently {isOnline? 'Online' : 'Offline'}</p>
        </div>
    );
}
export default StatusBadge;