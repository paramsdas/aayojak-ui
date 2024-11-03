import FocusTile from "./FocusTile/FocusTile";
import Header from "./Header/Header";
import "./MainPanel.css";

export default function MainPanel() {
  return (
    <div id="main_panel">
      <Header></Header>
      <FocusTile></FocusTile>
    </div>
  );
}
