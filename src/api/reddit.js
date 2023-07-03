export const getSubredditPosts = async (subreddit) => {
  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch data from Reddit");
    }
    const res = await response.json();
    // return res.data.children.map((post) => post.data);
    return res.data.children.map(
      ({
        data: {
          id,
          title,
          author,
          ups,
          downs,
          thumbnail,
          subreddit,
          permalink,
          url,
          created,
          num_comments,
        },
      }) => ({
        id,
        title,
        author,
        ups,
        downs,
        thumbnail,
        subreddit,
        permalink,
        url,
        created,
        num_comments,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const getSubreddits = async () => {
  try {
    const response = await fetch(`https://www.reddit.com/subreddits.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch data from Reddit.");
    }
    const res = await response.json();
    // return res.data.children.map((subreddit) => subreddit.data);
    return res.data.children.map(
      ({ data: { display_name, url, id, header_img } }) => ({
        display_name,
        url,
        id,
        header_img,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const getPostComments = async (permalink) => {
  try {
    const response = await fetch(`https://www.reddit.com/${permalink}.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch data from Reddit.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
