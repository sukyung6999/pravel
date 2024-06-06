interface TabButtonType {
  id: string;
  selected: boolean;
  tabIndex?: number;
  children: React.ReactNode;
}
const TabButton = ({ id, selected, tabIndex, children }: TabButtonType) => {
  return (
    <button
      id={`tab_${id}`}
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls={`panel_${id}`}
      tabIndex={tabIndex}
    >
      {children}
    </button>
  );
};
export default TabButton;
