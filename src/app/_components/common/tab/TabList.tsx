interface TabListType {
  titleId: string;
  title: string;
  tablistClassName: string;
  children: React.ReactNode
}

const TabList = ({
  titleId,
  title,
  tablistClassName,
  children
}: TabListType) => {
  return (
    <>
      <h3 id={titleId}>{title}</h3>
      <div role="tablist" aria-labelledby={titleId} className={tablistClassName}>
        {children}
      </div>
    </>
  )
}
export default TabList;