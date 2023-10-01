import MenuItems from "@/components/MenuItems";
import QueriesList from "@/components/recentQueries";

export default function SidePanel() {
  return (
    <div className="sidePanel">
      <MenuItems />
      <div className="recentQueryList custom-scrollbar">
        <QueriesList />
      </div>
      <div className=""></div>
    </div>
  );
}
