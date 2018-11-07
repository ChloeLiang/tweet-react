class Avatar extends React.Component {
  render() {
    const { url } = this.props;

    return (
      <div className="avatar-container">
        <img className="avatar" src={url} alt="Profile picture" />
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    const {
      name,
      username,
      createdAt,
      text,
      retweet,
      favorite,
    } = this.props.content;

    return (
      <div className="content">
        <div>
          <span className="name">{name}</span>
          <span className="meta">@{username}</span>
          <span className="meta">{createdAt}</span>
        </div>
        <div>
          <p>{text}</p>
        </div>
        <div className="action-list">
          <a className="action" href="#">
            <img className="icon" src="reply.png" />
          </a>
          <a className="action" href="#">
            <img className="icon" src="retweet.png" />
            <span className="count">{retweet}</span>
          </a>
          <a className="action" href="#">
            <img className="icon" src="favorite.png" />
            <span className="count">{favorite}</span>
          </a>
        </div>
      </div>
    );
  }
}

class ListItem extends React.Component {
  getCreatedAt = datetime => {
    const splitted = datetime.split(' ');
    return `${splitted[1]} ${splitted[2]} ${splitted[5]}`;
  };

  render() {
    const { tweet } = this.props;
    const content = {
      name: tweet.user.name,
      username: tweet.user.screen_name,
      createdAt: this.getCreatedAt(tweet.created_at),
      text: tweet.text,
      retweet: tweet.retweet_count,
      favorite: tweet.favorite_count,
    };

    return (
      <div className="listitem">
        <Avatar url={tweet.user.profile_image_url} />
        <Content content={content} />
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    const { tweets } = this.props;

    const tweetItems = tweets.map(tweet => {
      return <ListItem key={tweet.id} tweet={tweet} />;
    });

    return <div className="container">{tweetItems}</div>;
  }
}

ReactDOM.render(<List tweets={tweets} />, document.getElementById('root'));
