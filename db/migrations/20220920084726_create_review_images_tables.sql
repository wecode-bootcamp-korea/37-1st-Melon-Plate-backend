-- migrate:up
CREATE TABLE review_images(
    id int not null auto_increment primary key,
    review_id int not null,
    image varchar(400) not null,
    CONSTRAINT review_fkey foreign key (review_id) references reviews (id)
)

-- migrate:down
DROP TABLE review_images;
