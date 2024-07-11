#!/bin/bash

# MongoDB connection details
BLOG_DB="blogdb"
PROJECT_DB="projectdb"
BLOG_COLLECTION="posts"
PROJECT_COLLECTION="projects"

# Insert blog post
mongosh $BLOG_DB --eval 'db.'$BLOG_COLLECTION'.insertOne({
  title: "My First Blog Post",
  content: "This is the content of my first blog post.",
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
