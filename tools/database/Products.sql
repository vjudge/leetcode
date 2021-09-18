use leetcode;

CREATE TABLE IF NOT EXISTS Products (
  product_id INT,
  store enum('store1', 'store2', 'store3'),
  price INT,
  PRIMARY KEY (product_id, store)
) COMMENT '产品信息';

INSERT INTO Products VALUES
    (0, "store1", 95),
    (0, "store3", 105),
    (0, "store2", 100),
    (1, "store1", 70),
    (1, "store3", 80);
