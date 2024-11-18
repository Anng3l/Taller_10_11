const climaModel = {

    async getAllCortes() {
        const request = await fetch("http://localhost:4000/cortes");
        const data = await request.json();

        return data;
    },

    async getOneCorte(postal) {
        const request = await fetch(`http://localhost:4000/cortes/${postal}`);
        const data = await request.json();
        return data;
    },

    createCorte: async (registro) => {
        const url = "http://localhost:4000/cortes";
        const request = await fetch(url, {
                method:"POST",
                body: JSON.stringify(registro),
                headers: {"Content-Type": "application/json"}
            })
        const data = await request.json();
        return data;
    },

    updateCorte: async function updateCorte(postal, registro) {
        const url = `http://localhost:4000/cortes/${postal}`;
        //Lógica que realiza la petición, en este caso, de actualización. Se ejecuta cuando la ejecución llega aquí
        const request = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(registro),
            headers: {"Content-Type": "application/json"}
        })
        //Data que muestra el cambio realizado al usuario en el lado del cliente
        const data = await request.json();
        return data;
    },

    deleteCorte: async (postal) => {
        const url = `http://localhost:4000/cortes/${postal}`;

        const request = await fetch(url, {
            method: "DELETE"
        });

        const message = {msg: "Deletion succesfully commited"};
        
        return message;
    }
}


export default climaModel;