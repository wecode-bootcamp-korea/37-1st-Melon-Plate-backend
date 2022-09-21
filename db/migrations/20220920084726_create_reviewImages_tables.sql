-- migrate:up
CREATE TABLE reviewImages(
    id int not null auto_increment primary key,
    review_id int not null,
    image varchar(400) not null,
    CONSTRAINT review_fkey foreign key (review_id) references reviews (id)
)

-- migrate:down
DROP TABLE reviewImages;
