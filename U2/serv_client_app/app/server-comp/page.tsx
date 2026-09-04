export default async function UsersPage() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    return (
        <div>
            <h2>User List</h2>

            {users.map((user: any) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}