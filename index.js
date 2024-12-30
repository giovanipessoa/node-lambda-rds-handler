const mysql = require("mysql2/promise");

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

exports.handler = async (event) => {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);

        const query = event.query;
        const params = event.params || [];

        const [rows] = await connection.execute(query, params);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Query executada com sucesso!",
                data: rows,
            }),
        };
    } catch (error) {
        console.error("Erro ao executar a query:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Erro ao executar a query",
                error: error.message,
            }),
        };
    } finally {
        if (connection) {
            await connection.end();
        }
    }
};
