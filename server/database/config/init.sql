BEGIN;

DROP TABLE IF EXISTS users,
posts,
comment CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(250) NOT NULL,
    imgUrl TEXT
);

CREATE TABLE posts(
    postsId SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    userId INTEGER NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE comment(
    commentId SERIAL NOT NULL,
    comments TEXT NOT NULL,
    userId INTEGER NOT NULL,
    postsId INTEGER NOT NULL,
    FOREIGN KEY (postsId) REFERENCES posts(postsId)
);
-- INSERT INTO users(username,email,password,imgUrl) VALUES ('nader','nader@gmail.com','123456','https://gogeticon.net/files/2174098/f4ceeae0ea3cf566ddf604e2de4a85cd.png');
-- INSERT INTO users(username,email,password,imgUrl) VALUES ('ahmed','ahmed@gmail.com','123456','https://gogeticon.net/files/2174098/f4ceeae0ea3cf566ddf604e2de4a85cd.png');
-- INSERT INTO users(username,email,password,imgUrl) VALUES ('nader1','nader1@gmail.com','123456','https://gogeticon.net/files/2174098/f4ceeae0ea3cf566ddf604e2de4a85cd.png');
-- INSERT INTO users(username,email,password,imgUrl) VALUES ('ahmed1','ahmed1@gmail.com','123456','https://gogeticon.net/files/2174098/f4ceeae0ea3cf566ddf604e2de4a85cd.png');
-- INSERT INTO users(username,email,password,imgUrl) VALUES ('nader2','nader2@gmail.com','123456','https://gogeticon.net/files/2174098/f4ceeae0ea3cf566ddf604e2de4a85cd.png');
-- INSERT INTO users(username,email,password,imgUrl) VALUES ('ahmed2','ahmed2@gmail.com','123456','https://gogeticon.net/files/2174098/f4ceeae0ea3cf566ddf604e2de4a85cd.png');


-- INSERT INTO posts(title,description,userId) VALUES ('hello','world',1);
-- INSERT INTO posts(title,description,userId) VALUES ('hi','dad',2);
-- INSERT INTO posts(title,description,userId) VALUES ('hello1','world1',1);
-- INSERT INTO posts(title,description,userId) VALUES ('hi','dad',2);
-- INSERT INTO posts(title,description,userId) VALUES ('hello2','world2',2);
-- INSERT INTO posts(title,description,userId) VALUES ('hi','dad',1);
-- INSERT INTO posts(title,description,userId) VALUES ('hello3','world3',2);
-- INSERT INTO posts(title,description,userId) VALUES ('hi','dad',1);

-- INSERT INTO comment(comments,userId,postsId) VALUES ('this is hello world',1,1);
-- INSERT INTO comment(comments,userId,postsId) VALUES ('this is hi dad',1,1);
-- INSERT INTO comment(comments,userId,postsId) VALUES ('this is hello world',2,2);
-- INSERT INTO comment(comments,userId,postsId) VALUES ('this is hi dad',3,2);
-- INSERT INTO comment(comments,userId,postsId) VALUES ('this is hello world',2,2);
-- INSERT INTO comment(comments,userId,postsId) VALUES ('this is hi dad',3,1);
-- INSERT INTO comment(comments,userId,postsId) VALUES ('this is hello world',3,1);
-- INSERT INTO comment(comments,userId,postsId) VALUES ('this is hi dad',2,1);
-- INSERT INTO comment(comments,userId,postsId) VALUES ('this is hello world',1,1);
-- INSERT INTO comment(comments,userId,postsId) VALUES ('this is hi dad',1,2);
COMMIT;