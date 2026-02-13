//list function
const list = (clients) => {
    return clients.map((client) => `
    <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
    ${client.name}
    <strong>$ ${client.balance}</strong>
    </li>
    `).join(''); 
};

//order finction
const order = (clients, property) => {
    return clients.sort((a, b) => {
        if (a[property]  < b[property]) {
            return -1;
        } else if (a[property]  < b[property]) {
            return 1;
        } else {
            return 0;
        }
    });
};

//total function
const total = (clients) => {
    return clients.reduce((accmulator, client) => {
        return accumlator + client.balance; 
    }, 0);
};


//info function
const info = (index) => {
    return clients.find(client => client.index === index);
};


//search function
const search = (query) => {
    const lowerQuery = query.toLowerCase();
    return client.filter(client => 
        client.name.toLowerCase().includes(lowerQuery)
    );
};
