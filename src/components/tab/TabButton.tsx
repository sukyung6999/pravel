interface TabButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}
const TabButton = ({
  id,
  selected,
  onClick,
  children,
  ...rest
}: TabButtonType) => {
  // const handleTabButtonClick =  (event: React.MouseEvent<HTMLButtonElement>) => {
  // 	const { id } = event.target as HTMLButtonElement;
  //   onChangeCurrentTab(id);
  // };

  return (
    <button
      id={id}
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls={`panel_${id?.slice(4) || ''}`}
      tabIndex={!selected ? -1 : 0}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TabButton;
