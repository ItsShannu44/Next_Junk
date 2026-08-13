export default function Home() {
const appName= process.env.APP_NAME;
const apiUrl = process.env.API_URL;
  return (
    <div>
      <h1>{appName}</h1>
      <p>API URL: {apiUrl}</p>
    </div>
  );
}
