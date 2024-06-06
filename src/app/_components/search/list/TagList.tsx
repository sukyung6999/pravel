interface TagList {
  id: string
  tagList: []
}
const TagList = ({
  id,
  tagList
}: TagList) => {
  return (
    <div className="wrap_tags">
      <strong className='screen_out'>필터 태그 리스트</strong>
      <ul>
        {tagList.map((item, idx) => (
          <li key={`tag_${id}${idx}`}>
            <button></button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default TagList;