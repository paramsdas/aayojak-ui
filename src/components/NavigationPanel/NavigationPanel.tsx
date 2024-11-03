import "./NavigationPanel.css";
import logo from "../../static/logo.png";

export default function NavigationPanel() {
  return (
    <div id="navigation_panel" className="flex-column">
      <div id="logo_div" className="flex-row">
        <img src={logo} alt="Aayojak (organizer)" className="navigation-logo" />
        <p id="heading_aayojak">Aayojak</p>
      </div>
      <hr></hr>
      <ul id="navigation_button_list" className="styleless-list full-width">
        <li>
          <button className="transparent-button padding-1rem full-width navigation-button">
            Todos
          </button>
        </li>
      </ul>
      <hr></hr>
    </div>
  );
}
