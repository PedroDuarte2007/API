const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database:'hoteis'
});

con.connect((err) => {
    if(err) {
        console.error('Erro ao conectar ao banco de dados', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

const teste = (req, res) => {
    res.send("Back-end respondendo");
}

// CRUD - Create cliente
const createclientes = (req, res) => {
    const {nome, cpf, email, endereco, data_nascimento, data_cadastro} =req.body;

    const query = 'INSERT INTO clientes (nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES(?, ?, ?, ?, ?, ?)';
    con.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro], (err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'cliente criado com sucesso', result});
        }

    });
};
// CRUD - Read cliente
const readclientes = (req, res) => {
    con.query("SELECT * FROM clientes",(err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
};
// CRUD - Upadate cliente
const updateclientes = (req, res) => {
    const {nome, cpf, email, endereco, data_nascimento, data_cadastro} = req.body;

    const query = 'UPDATE clientes SET nome = ?, email = ?, endereco = ? , data_nascimento = ?, data_cadastro = ? WHERE cpf = ?';
    con.query(query, [nome, email, endereco, data_nascimento, data_cadastro, cpf], (err, result) => {
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'cliente atualizado com sucesso', result});
        }
    });
};
// CRUD - Delete cliente
const deleteclientes = (req, res) => {
    const {cliente_id} = req.params;

    const query = 'DELETE FROM clientes WHERE cliente_id = ?';
    con.query(query, [cliente_id], (err,result)=> {
        if(err) {
            res.status(500).json({error:err.message});
        }else {
            res.json({message: 'cliente removido com sucesso', result});
        }
    });
};






// CRUD - Create quartos
const createquartos = (req, res) => {
    const {numero, andar, tipo, valor_diaria, statusQuarto, cliente_id} =req.body;

    const query = 'INSERT INTO quartos (numero, andar, tipo, valor_diaria, statusQuarto, cliente_id) VALUES(?, ?, ?, ?, ?, ?)';
    con.query(query, [numero, andar, tipo, valor_diaria, statusQuarto, cliente_id], (err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'cliente criado com sucesso', result});
        }

    });
};
// CRUD - Read quartos
const readquartos = (req, res) => {
    con.query("SELECT * FROM quartos",(err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
};
// CRUD - Upadate quartos
const updatequartos = (req, res) => {
    const {numero, andar, tipo, valor_diaria, statusQuarto, cliente_id} = req.body;

    const query = 'UPDATE quartos SET andar = ?, tipo = ? , valor_diaria = ?, statusQuarto = ?, cliente_id = ? WHERE numero = ?'
    con.query(query, [andar, tipo, valor_diaria, statusQuarto, cliente_id, numero],(err, result)=>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'cliente atualizado com sucesso', result});
        }
    });
};
// CRUD - Delete quartos
const deletequartos = (req, res) => {
    const {numero} = req.params;

    const query = 'DELETE FROM quartos WHERE numero = ?';
    con.query(query, [numero], (err,result) => {
        if(err) {
            res.status(500).json({error:err.message});
        }else {
            res.json({message: 'cliente removido com sucesso', result});
        }
    });
};





// CRUD - Create quartos
const createestacionamento = (req, res) => {
    const {cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida} =req.body;

    const query = 'INSERT INTO estacionamento (cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida) VALUES(?, ?, ?, ?, ?, ?)';
    con.query(query, [cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida], (err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'cliente criado com sucesso', result});
        }

    });
};
// CRUD - Read quartos
const readestacionamento = (req, res) => {
    con.query("SELECT * FROM estacionamento",(err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
};
// CRUD - Upadate quartos
const updateestacionamento = (req, res) => {
    const {estacionamento_id, cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida} = req.body;

    const query = 'UPDATE estacionamento SET cliente_id = ?, veiculo_placa = ?, veiculo_marca = ?, veiculo_modelo = ?, data_entrada = ?, data_saida = ? WHERE  estacionamento_id = ?';
    con.query(query, [cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida, estacionamento_id], (err, result)=>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'cliente atualizado com sucesso', result});
        }
    });
};
// CRUD - Delete quartos
const deleteestacionamento = (req, res) => {
    const {veiculo_placa} = req.params;

    const query = 'DELETE FROM estacionamento WHERE veiculo_placa = ?';
    con.query(query, [veiculo_placa], (err,result)=> {
        if(err) {
            res.status(500).json({error:err.message});
        }else {
            res.json({message: 'cliente removido com sucesso', result});
        }
    });
};




// CRUD - Create quartos
const createreservas = (req, res) => {
    const {cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva} =req.body;

    const query = 'INSERT INTO reservas (cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva) VALUES(?, ?, ?, ?, ?, ?, ?)';
    con.query(query, [cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva], (err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'cliente criado com sucesso', result});
        }

    });
};
// CRUD - Read quartos
const readreservas = (req, res) => {
    con.query("SELECT * FROM reservas",(err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
};
// CRUD - Upadate quartos
const updatereservas = (req, res) => {
    const {cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva} = req.body;

    const query = 'UPDATE reservas SET cliente_id = ?, quarto_id = ?, data_reserva = ? , data_entrada = ?, data_saida = ?, valor_total = ? WHERE statusReserva = ?'
    con.query(query, [cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva],(err, result)=>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'cliente atualizado com sucesso', result});
        }
    });
};
// CRUD - Delete quartos
const deletereservas = (req, res) => {
    const {cliente_id} = req.params;

    const query = 'DELETE FROM reservas WHERE cliente_id = ?';
    con.query(query, [cliente_id], (err,result)=> {
        if(err) {
            res.status(500).json({error:err.message});
        }else {
            res.json({message: 'cliente removido com sucesso', result});
        }
    });
};





// CRUD - Create quartos
const createtelefone = (req, res) => {
    const {cliente_id, numero, tipo} =req.body;

    const query = 'INSERT INTO telefone (cliente_id, numero, tipo) VALUES(?, ?, ?)';
    con.query(query, [cliente_id, numero, tipo], (err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'cliente criado com sucesso', result});
        }

    });
}
// CRUD - Read quartos
const readtelefone = (req, res) => {
    con.query("SELECT * FROM telefone",(err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
}
// CRUD - Upadate quartos
const updatetelefone = (req, res) => {
    const {cliente_id, numero, tipo} = req.body;

    const query = 'UPDATE telefone SET cliente_id = ?, numero = ? WHERE tipo = ?'
    con.query(query, [cliente_id, numero, tipo],(err, result)=>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'cliente atualizado com sucesso', result});
        }
    });
}
// CRUD - Delete quartos
const deletetelefone = (req, res) => {
    const {cliente_id} = req.params;

    const query = 'DELETE FROM telefone WHERE cliente_id = ?';
    con.query(query, [cliente_id], (err,result)=> {
        if(err) {
            res.status(500).json({error:err.message});
        }else {
            res.json({message: 'cliente removido com sucesso', result});
        }
    });
}



//Teste de porta
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", teste);

// APP - cliente
app.post("/clientes",createclientes);
app.get("/clientes", readclientes);
app.put("/clientes", updateclientes);
app.delete("/clientes/:cliente_id", deleteclientes);

//APP - quartos
app.post("/quartos",createquartos);
app.get("/quartos", readquartos);
app.put("/quartos", updatequartos);
app.delete("/quartos/:numero", deletequartos);

// APP - estacionamento
app.post("/estacionamento",createestacionamento);
app.get("/estacionamento", readestacionamento);
app.put("/estacionamento", updateestacionamento);
app.delete("/estacionamento/:veiculo_placa", deleteestacionamento);

// APP - reservas
app.post("/reservas",createreservas);
app.get("/reservas", readreservas);
app.put("/reservas", updatereservas);
app.delete("/reservas/:cliente_id", deletereservas);

// APP - telefone
app.post("/telefone",createtelefone);
app.get("/telefone", readtelefone);
app.put("/telefone", updatetelefone);
app.delete("/telefone/:cliente_id", deletetelefone);

// Porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});