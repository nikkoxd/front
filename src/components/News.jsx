const News = () => {
  return (
    <section className="news">
      <div className="content">
        <h1>Новости</h1>
        <div className="news_list">
          <div className="news_item">
            <div className="news-img"></div>
            <h3>Новость 1</h3>
          </div>
          <div className="news_item">
            <div className="news-img"></div>
            <h3>Новость 2</h3>
          </div>
          <div className="news_item">
            <div className="news-img"></div>
            <h3>Новость 3</h3>
          </div>
        </div>
      </div>
      <div className="more">
        <a className="button" href="#">Все новости</a>
      </div>
    </section>
  )
}

export default News;
