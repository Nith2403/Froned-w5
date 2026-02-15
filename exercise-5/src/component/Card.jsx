export default function Card({ item }) {
  return (
    <div className="card">
      <img src={item.image} />

      <h3>{item.name}</h3>
      <p>{item.class}</p>
      <p>{item.hobby}</p>
    </div>
  );
}
