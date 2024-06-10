interface TabButtonType {
  id: string;
  selected: boolean;
  onChangeCurrentTab: (value: string) => void;
  children: React.ReactNode;
}
const TabButton = ({ id, selected, onChangeCurrentTab, children }: TabButtonType) => {
  const handleTabButtonClick =  (event: React.MouseEvent<HTMLButtonElement>) => {
		const { id } = event.target as HTMLButtonElement;
    onChangeCurrentTab(id);
	};

  return (
    <button
      id={id}
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls={`panel_${id.slice(4)}`}
      tabIndex={!selected ? -1 : 0}
      onClick={handleTabButtonClick}
    >
      {children}
    </button>
  );
};
export default TabButton;
