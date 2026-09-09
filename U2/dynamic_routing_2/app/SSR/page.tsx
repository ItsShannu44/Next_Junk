type User = {
    id: number;
    name: string;
};

export default async function UsersPage() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        { cache: "no-store" }
    );

    const users: User[] = await response.json();

    return (
        <div>
            <h2>Users</h2>

            {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}