interface TabContentType {
  id: string;
  children: React.ReactNode
}

const TabContentWrap = ({
  id,
  children
}: TabContentType) => {
  return (
    <div id={`panel_${id}`} role="tabpanel" aria-labelledby={`tab_${id}`}>
      {children}
    </div>
  )
}
export default TabContentWrap;