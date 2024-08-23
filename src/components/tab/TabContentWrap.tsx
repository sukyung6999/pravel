interface TabContentType extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const TabContentWrap = ({ children, ...rest }: TabContentType) => {
  return (
    <div id="tabPanel" role="tabpanel" {...rest}>
      {children}
    </div>
  );
};

export default TabContentWrap;
