import { dataFetch } from '../../helpers/fetch';

describe('dataFetch function', () => {
    test('should fetch data successfully', async () => {
        const url = "https://product-exchange.onrender.com/entries/category?category=clothing&limit=6&page=1";
        const method = 'GET';
        const body = {};
        const data = await dataFetch(url, method, body);
        expect(data).toEqual({
            ok: true,
            data: expect.any(Array),
            total_pages: expect.any(Number),
            page: expect.any(String),
            total_results: expect.any(Number)
        });
    });

    test('should handle errors during fetching', async () => {
        const url = "https://product-exchange.onrender.com/entries/category?category=clothing&limit=6&pa";
        const method = 'GET';
        const body = {};
        try {
            await dataFetch(url, method, body);
        } catch (error) {
            expect(error).toBeDefined();
            expect(error).toEqual({
                ok: false,
                msg: expect.any(String)
            });
        }
    });
    test('should successfully make PUT fetch', async () => {
        const url = "https://product-exchange.onrender.com/users/update";
        const method = 'PUT';
        const body = {
            "email": "ana@correo.es",
            "name": "Ana",
            "id": "234562754"
        };
        const data = await dataFetch(url, method, body);
        expect(data).toEqual({
            ok: true
        });
    });

    test('should handle errors during PUT fetch', async () => {
        const url = "https://product-exchange.onrender.com/users/update";
        const method = 'PUT';
        const body = {
            "email": "jae@correo.es",
            "name": "Jake date",
            "id": "234562754"
        };
        try {
            await dataFetch(url, method, body);
        } catch (error) {
            expect(error).toBeDefined();
            expect(error).toEqual({
                ok: false,
                msg: expect.any(String)
            });
        }
    });


    // test('should successfully make POST fetch', async () => {
    //     const url = "https://product-exchange.onrender.com/entries/create";
    //     const method = 'POST';
    //     const body = {
    //         "email": "helen@correo.es",
    //         "name": "Helen",
    //         "id": "234562754"
    //     };
    //     const data = await dataFetch(url, method, body);
    //     expect(data).toEqual({
    //         ok: true,

    //     });
    // });

    // test('should handle errors during POST ', async () => {
    //     const url = "https://product-exchange.onrender.com/entries/create";
    //     const method = 'POST';
    //     const body = {
    //         "email": "jae@correo.es",
    //         "name": "Jake date",

    //     };
    //     try {
    //         await dataFetch(url, method, body);
    //     } catch (error) {
    //         expect(error).toBeDefined();
    //         expect(error).toEqual({
    //             ok: false,
    //             msg: expect.any(String)
    //         });
    //     }
    // });
});