interface TabContentType extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  children: React.ReactNode;
}

const TabContentWrap = ({ id, children, ...rest }: TabContentType) => {
  return (
    <div
      id={`panel_${id}`}
      role="tabpanel"
      aria-labelledby={`tab_${id}`}
      {...rest}
    >
      {children}
    </div>
  );
};
export default TabContentWrap;
