import{test,expect}from'@playwright/test';

const API_Account_URL = "https://demoqa.com/Account/v1"
const API_BookStore_URL = "https://demoqa.com/BookStore/v1"

let registeredUserName = "";
let registeredUserId = "";
let token = "";
let isbn = "";
let newIsbn = "";

test.describe.serial('Book Store API Tests', () => {
    test('Register a new user', async ({ request }) => {
      const response = await request.post(`${API_Account_URL}/User`, {
        data: {
            "userName": `vipul${Date.now()}`,
            "password": "Test@1234"
        }
    });
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log('Response Body:', responseBody);
    registeredUserName = responseBody.username;
    registeredUserId = responseBody.userID; 
})

test('Generate Token for the registered user', async ({ request }) => {
    const response = await request.post(`${API_Account_URL}/GenerateToken`, {
        data: {
            "userName": registeredUserName,
            "password": "Test@1234"
        }
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Response Body:', responseBody);
    token = responseBody.token;
    expect(responseBody).toHaveProperty('token');
    expect(responseBody).toHaveProperty('expires');
    expect(responseBody).toHaveProperty('status');
    expect(responseBody).toHaveProperty('result');
})
test('Is User Authorized', async ({ request }) => {
    const response = await request.post(`${API_Account_URL}/Authorized`, {
        data: {
            "userName": registeredUserName,
            "password": "Test@1234"
        }
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Response Body:', responseBody);
})


test('Get User Account', async ({ request }) => {
    const response = await request.get(`${API_Account_URL}/User/${registeredUserId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Response Body:', responseBody);
})

test('Get Books List', async ({ request }) => {
    const response = await request.get(`${API_BookStore_URL}/Books`);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Response Body:', responseBody);
    expect(Array.isArray(responseBody.books)).toBe(true);
    expect(responseBody.books.length).toBeGreaterThan(0);
    expect(responseBody.books[0]).toHaveProperty('isbn');
    expect(responseBody.books[0]).toHaveProperty('title');
    expect(responseBody.books[0]).toHaveProperty('subTitle');
    expect(responseBody.books[0]).toHaveProperty('author');
    isbn = responseBody.books[0].isbn;
    newIsbn = responseBody.books[1].isbn;
})
test('Add Book to User Account', async ({ request }) => {
    const response = await request.post(`${API_BookStore_URL}/Books`, {
        headers: {  
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: {
            "userId": registeredUserId,
            "collectionOfIsbns": [
                {   
                "isbn": isbn
                }
            ]
}
})
     expect(response.status()).toBe(201);
     const responseBody = await response.json();
     console.log('Response Body:', responseBody);
})
// 
test('update Book in User Account', async ({ request }) => {
    const response = await request.put(`${API_BookStore_URL}/Books/${isbn}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'  
        },  
        data: {
            "userId": registeredUserId,
            "isbn": newIsbn
        }
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Response Body:', responseBody);
});
test('Delete Book from User Account', async ({ request }) => {
    const response = await request.delete(`${API_BookStore_URL}/Book`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: {
            "isbn": newIsbn,
            "userId": registeredUserId
        }
    });
    expect(response.status()).toBe(204);
});
test('Delete User Account', async ({ request }) => {
    const response = await request.delete(`${API_Account_URL}/User/${registeredUserId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    expect(response.status()).toBe(204);
    console.log('User account deleted successfully');
})
})