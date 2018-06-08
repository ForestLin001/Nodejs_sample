CREATE DATABASE IF NOT EXISTS blog CHARACTER SET utf8;

USE blog;

CREATE TABLE author(
authorID INT KEY AUTO_INCREMENT,
authorName VARCHAR(20) NOT NULL UNIQUE,
authorPassword VARCHAR(32) NOT NULL
);

CREATE TABLE article(
articleID INT KEY AUTO_INCREMENT,
articleTitle VARCHAR(100) NOT NULL,
articleAuthor VARCHAR(20) NOT NULL,
articleContent LONGTEXT NOT NULL,
articleTime   DATE NOT NULL,
articleClick INT DEFAULT 0
);

INSERT author VALUES(DEFAULT, 'node', 'e10adc3949ba59abbe56e057f20f883e');