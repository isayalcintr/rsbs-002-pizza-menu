function Footer() {
  const hour = new Date().getHours();
  const openHour = 4;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  return (
    <footer className="footer">
      {isOpen ? <Order /> : <p>Sorry, we're currently closed.</p>}
    </footer>
  );
}

function Order() {
  return (
    <div className="order">
      <p>We're currently open.</p>
      <button className="btn">Order</button>
    </div>
  );
}
export default Footer;
