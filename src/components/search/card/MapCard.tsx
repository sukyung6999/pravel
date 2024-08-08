const MapCard = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <div>
          <div>
            <strong>제목은여기에</strong>
            <span>
              <span className="ico_pravel ico_star16">별점</span>4.3
            </span>
          </div>
          <strong className="screen_out">태그 목록</strong>
          <ul>
            <li className="tag_bg_gray">#파스타</li>
            <li className="tag_bg_gray">#리조또</li>
            <li className="tag_bg_gray">#타코</li>
            <li className="tag_bg_gray">#피자</li>
          </ul>
          <dl>
            <dt></dt>
            <dd></dd>
          </dl>
          <dl>
            <dt></dt>
            <dd></dd>
          </dl>
          <dl>
            <dt></dt>
            <dd></dd>
          </dl>
        </div>
      </div>
      <div>
        <button type="button">
          <span>좋아요</span>
        </button>
        <button>장소 추가</button>
      </div>
    </div>
  );
};

export default MapCard;
