export const getSubredditPosts = async (subreddit) => {
  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch data from Reddit");
    }
    const res = await response.json();
    return res.data.children.map(
      ({
        data: {
          title,
          author,
          ups,
          downs,
          thumbnail,
          subreddit,
          permalink,
          url,
          num_comments,
        },
      }) => ({
        title,
        author,
        ups,
        downs,
        thumbnail,
        subreddit,
        permalink,
        url,
        num_comments,
      })
    );
    // return res.data.children.map((post) => post.data);
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
    return res.data.children.map((subreddit) => subreddit.data);
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
