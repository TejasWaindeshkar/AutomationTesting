import{test,expect}from'@playwright/test';

test('Get users list',async({request})=>{
    const response = await request.get('/users');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Response Body:', responseBody);
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBeGreaterThan(0);
})