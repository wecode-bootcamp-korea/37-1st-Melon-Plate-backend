-- migrate:up
CREATE TABLE users(
  id int not null auto_increment primary key,
  user_id varchar(100) not null unique key,
  nickname varchar(100) not null ,
  gender boolean null,
  password varchar(100) not null,
  profile_image varchar(400) null,
  age varchar(10) null,
  create_at timestamp not null default current_timestamp
);

-- migrate:down
DROP TABLE users;