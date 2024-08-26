import db from "../connection.js";

export const getBuah = (req, res) => {
  const sql = "SELECT * FROM buah";
  db.query(sql, (error, result) => {
    res.send(result);
  });
};

export const getBuahById = (req, res) => {
  const sql = `SELECT * FROM buah WHERE id=${req.query.id}`;
  db.query(sql, (error, result) => {
    res.json(result);
  });
};

export const createBuah = (req, res) => {
  const { nama, harga_beli,harga_jual } = req.body;
  const sql =
    "INSERT INTO buah (nama, harga_beli,harga_jual) VALUES (?,?,?)";
  db.query(sql, [nama, harga_beli,harga_jual], (error, result) => {
    if (error) {
      res.status(400);
      res.send(error);
    }
    res.status(201);
    res.json(result);
  });
};

export const updateBuah = (req, res) => {
  const id = req.query.id;

  const {nama, harga_beli,harga_jual} = req.body;
  if (nama || harga_beli || harga_jual) {
    const query = `UPDATE buah SET nama = "${nama}", harga_beli = "${harga_beli}", harga_jual = "${harga_jual},"  WHERE  id=${id}`;

    db.query(query, (error, result) => {
      if (error) res.status(400).send(error.message);
      res.json(result);
    });
  } else {
    res.send("Isi body nya");
  }
};

export const deleteBuah = (req, res) => {
  const id = req.query.id;
  const sql = "DELETE FROM buah WHERE id = ?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      res.status(400);
      res.send(error);
    }
    res.status(200);
    res.json("data berhasil dihapus");
  });
};