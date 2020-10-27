const db = require("../../config/db.config");
const Usuario = db.Usuario;
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.user_login = (req, res, next) => {
    Usuario.findOne({
        where: { Email: req.body.Email },
    })
        .then((user) => {
            if (user) {
                bcryptjs.compare(req.body.Password, user.Password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: "Auth failed",
                        });
                    }
                    if (result) {
                        const token = jwt.sign(
                            {
                                Email: user.Email,
                                UserId: user.id,
                            },
                            process.env.JWT_KEY,
                            { expiresIn: process.env.TTEXPIRA + "h" }
                        );

                        return res.status(200).json({
                            message: "Auth successful",
                            token: token,
                        });
                    }
                    res.status(401).json({
                        message: "Auth failed",
                    });
                });
            } else {
                res.status(404).json({ message: "Auth failed" });
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.create = (req, res) => {

    req.body.Password = bcryptjs.hashSync(req.body.Password, bcryptjs.genSaltSync(8));
    Usuario.create(req.body)
        .then((Response) => {
            res.status(200).json(Response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};


exports.findAll = (req, res) => {
    Usuario.findAndCountAll({
        order: [["createdAt", "DESC"]],
    })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};


exports.findById = (req, res) => {
    Usuario.findByPk(req.params.Id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};


exports.update = (req, res) => {
    Usuario.update(req.body, { where: { id: req.params.Id } })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.deleteUsuario = (req, res) => {
    const id = req.params.Id;
    Usuario.destroy({
        where: { id: id },
    })
        .then((response) => {
            handle.respuestaDelete(res, response);
        })
        .catch((err) => {
            handle.ErrorDelete(res, err);
        });
};
