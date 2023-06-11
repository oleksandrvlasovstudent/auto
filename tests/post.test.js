const Post = require("../models/post");

describe("Post Model", () => {
  test("should require 'title' field", () => {
    const post = new Post();
    const validationError = post.validateSync();
    expect(validationError.errors.title).toBeDefined();
  });

  test("should require 'body' field", () => {
    const post = new Post();
    const validationError = post.validateSync();
    expect(validationError.errors.body).toBeDefined();
  });

  test("should set 'author' field to default value 'Anonymus'", () => {
    const post = new Post();
    expect(post.author).toBe("Anonymus");
  });

  test("should have virtual properties 'publishedAt' and 'publishedSince'", () => {
    const post = new Post();
    post.createdAt = new Date();

    expect(post.publishedAt).toBeDefined();
    expect(post.publishedSince).toBeDefined();
  });
});
