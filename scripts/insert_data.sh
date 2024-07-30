#!/bin/bash

# MongoDB connection details
BLOG_DB="blogdb"
PROJECT_DB="projectdb"
BLOG_COLLECTION="posts"
PROJECT_COLLECTION="projects"

# Insert blog post
mongosh $BLOG_DB --eval 'db.'$BLOG_COLLECTION'.insertOne({
  title: "My First Blog Post",
  content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis posuere leo porttitor rutrum luctus sociosqu massa pharetra. Vehicula mauris placerat nullam habitant vel hendrerit posuere. Phasellus a dictumst sapien per hendrerit. Sed curabitur primis orci nec dapibus orci ultrices pellentesque? Fringilla donec litora mus elementum vestibulum. Class fusce libero accumsan; ligula egestas faucibus scelerisque. Consectetur porttitor varius malesuada dignissim lacus tortor ipsum porttitor. Odio lacinia tempus lacus phasellus accumsan cursus integer adipiscing. \n Sit libero pellentesque senectus dolor nascetur blandit magnis fusce interdum. Rhoncus vehicula dis porta metus pharetra urna phasellus. Nulla inceptos libero pulvinar purus maecenas congue condimentum neque? Felis nec id amet augue, lectus quisque proin elit? Semper lacinia euismod, vivamus donec augue fringilla dapibus. Egestas volutpat imperdiet sit velit tincidunt fames ultrices donec ipsum. Sodales ac at himenaeos rutrum mollis rhoncus curabitur. Eget magnis magnis mollis, luctus maximus nunc quis. Cursus maximus facilisis enim facilisis sodales dolor eget vivamus eros.",
  date: new Date()
})'

# Insert blog post
mongosh $BLOG_DB --eval 'db.'$BLOG_COLLECTION'.insertOne({
  title: "My Second Blog Post",
  content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis posuere leo porttitor rutrum luctus sociosqu massa pharetra. Vehicula mauris placerat nullam habitant vel hendrerit posuere. Phasellus a dictumst sapien per hendrerit. Sed curabitur primis orci nec dapibus orci ultrices pellentesque? Fringilla donec litora mus elementum vestibulum. Class fusce libero accumsan; ligula egestas faucibus scelerisque. Consectetur porttitor varius malesuada dignissim lacus tortor ipsum porttitor. Odio lacinia tempus lacus phasellus accumsan cursus integer adipiscing. \n Sit libero pellentesque senectus dolor nascetur blandit magnis fusce interdum. Rhoncus vehicula dis porta metus pharetra urna phasellus. Nulla inceptos libero pulvinar purus maecenas congue condimentum neque? Felis nec id amet augue, lectus quisque proin elit? Semper lacinia euismod, vivamus donec augue fringilla dapibus. Egestas volutpat imperdiet sit velit tincidunt fames ultrices donec ipsum. Sodales ac at himenaeos rutrum mollis rhoncus curabitur. Eget magnis magnis mollis, luctus maximus nunc quis. Cursus maximus facilisis enim facilisis sodales dolor eget vivamus eros.",
  date: new Date()
})'

# Insert blog post
mongosh $BLOG_DB --eval 'db.'$BLOG_COLLECTION'.insertOne({
  title: "My Third Blog Post",
  content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis posuere leo porttitor rutrum luctus sociosqu massa pharetra. Vehicula mauris placerat nullam habitant vel hendrerit posuere. Phasellus a dictumst sapien per hendrerit. Sed curabitur primis orci nec dapibus orci ultrices pellentesque? Fringilla donec litora mus elementum vestibulum. Class fusce libero accumsan; ligula egestas faucibus scelerisque. Consectetur porttitor varius malesuada dignissim lacus tortor ipsum porttitor. Odio lacinia tempus lacus phasellus accumsan cursus integer adipiscing. \n Sit libero pellentesque senectus dolor nascetur blandit magnis fusce interdum. Rhoncus vehicula dis porta metus pharetra urna phasellus. Nulla inceptos libero pulvinar purus maecenas congue condimentum neque? Felis nec id amet augue, lectus quisque proin elit? Semper lacinia euismod, vivamus donec augue fringilla dapibus. Egestas volutpat imperdiet sit velit tincidunt fames ultrices donec ipsum. Sodales ac at himenaeos rutrum mollis rhoncus curabitur. Eget magnis magnis mollis, luctus maximus nunc quis. Cursus maximus facilisis enim facilisis sodales dolor eget vivamus eros.",
  date: new Date()
})'

# Insert project
mongosh $PROJECT_DB --eval 'db.'$PROJECT_COLLECTION'.insertOne({
  name: "My First Project",
  description: "This is the description of my first project.",
  icon: BinData(0, "base64-encoded-jpeg-data"), // Replace with actual base64-encoded JPEG data
  url: "https://example.com",
  startDate: new Date()
})'
