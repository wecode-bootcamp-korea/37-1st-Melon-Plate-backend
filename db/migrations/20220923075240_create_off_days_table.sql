-- migrate:up
CREATE TABLE off_days (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    store_id int NOT NULL,
    day_id int NOT NULL,
    CONSTRAINT storess_id_fkey foreign key (store_id) references stores (id),
    CONSTRAINT days_id_fkey foreign key (day_id) references days (id),
    UNIQUE KEY (day_id, store_id)
)

-- migrate:down
DROP TABLE off_days;
