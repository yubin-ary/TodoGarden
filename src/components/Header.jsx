import Clock from "./Clock";
import "./Header.css";
function Header() {
  return (
    <div className="headerContainer">
      <div className="header">
        <h1>☘️ Todo Garden</h1>
        <Clock></Clock>
      </div>
    </div>
  );
}

export default Header;
