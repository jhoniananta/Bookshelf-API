const {
    saveBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
} = require('./handler');

const routes = [
    // POST: untuk menambahkan, GET: untuk menampilkan, PUT: untuk mengubah catatan, DELET: untuk mendelete catatan.
    {
        method: 'POST',
        path: '/books',
        handler: saveBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler,
    },
    {
        method: '*',
        path: '/{any*}',
        handler: () => 'Halaman tidak ditemukan',
    },
];

module.exports = routes;