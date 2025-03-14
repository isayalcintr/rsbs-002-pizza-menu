function Pizza({ pizza }) {
  return (
    <li className={(pizza.soldOut ? "sold-out" : "") + " pizza"}>
      <img src={pizza.photoName} alt="Pizza Prosciutto" />
      <div>
        <h2>{pizza.name}</h2>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT!" : pizza.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
