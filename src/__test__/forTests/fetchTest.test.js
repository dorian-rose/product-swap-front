import { dataFetch } from './dataFetch';

describe('dataFetch function', () => {
    test('should fetch data successfully', async () => {
        const url = `${import.meta.env.VITE_PRODUCT_URL
            }category?category=clothing&limit=6&page=1`;
        const method = 'GET';
        const body = {};
        const data = await dataFetch(url, method, body);
        expect(data).toBeDefined();
    });

    test('should handle errors during fetching', async () => {
        const url = `${import.meta.env.VITE_PRODUCT_URL
            }category?category=clothing&limit=6&pa`;
        const method = 'GET';
        const body = {};
        try {
            await dataFetch(url, method, body);
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});