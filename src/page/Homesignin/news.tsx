import news from "./news.json";

import "../index.scss";

function data_news() {
  return (
    <>
      {news.map((item) => (
        <>
          <div className="list_para_box_right">
            <img className="list_news1" src={item.img} alt="" />
            <div className="list_news1_text">
              <a className="list_news_text_row" href="/post">
                {item.content}
              </a>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
export default data_news;
