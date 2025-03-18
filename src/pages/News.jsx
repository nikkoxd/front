const News = () => {
  return (
    <main>
      <section className="title">
        <p>Главная/Новости</p>
        <h1>Новости</h1>
      </section>
      <section className="news-page">
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
        <div className="news_list_reverse">
          <div className="news_item">
            <div className="news-img"></div>
            <h3>Новость 4</h3>
          </div>
          <div className="news_item">
            <div className="news-img"></div>
            <h3>Новость 5</h3>
          </div>
          <div className="news_item">
            <div className="news-img"></div>
            <h3>Новость 6</h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;