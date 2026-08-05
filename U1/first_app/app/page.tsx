import Image from "next/image";

export default function Home() {
  return (
    <div style={{ textAlign:"center",padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{fontSize: '100px'}}>Hello User</h1>
      <p style={{color: 'yellow', textWrap:'wrap', textAlign:'center', width: '1000px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque optio autem atque eveniet dolor, esse dolores perferendis excepturi reiciendis aspernatur voluptas quos in quisquam harum nulla repellat impedit dolore.</p>
    </div>
  );
}
