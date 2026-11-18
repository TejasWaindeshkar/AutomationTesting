# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BookStoreAPI.spec.js >> Book Store API Tests >> Delete Book from User Account
- Location: tests\BookStoreAPI.spec.js:108:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 204
```

# Test source

```ts
  19  |     });
  20  |     expect(response.status()).toBe(201);
  21  |     const responseBody = await response.json();
  22  |     console.log('Response Body:', responseBody);
  23  |     registeredUserName = responseBody.username;
  24  |     registeredUserId = responseBody.userID; 
  25  | })
  26  | 
  27  | test('Generate Token for the registered user', async ({ request }) => {
  28  |     const response = await request.post(`${API_Account_URL}/GenerateToken`, {
  29  |         data: {
  30  |             "userName": registeredUserName,
  31  |             "password": "Test@1234"
  32  |         }
  33  |     });
  34  |     expect(response.status()).toBe(200);
  35  |     const responseBody = await response.json();
  36  |     console.log('Response Body:', responseBody);
  37  |     token = responseBody.token;
  38  |     expect(responseBody).toHaveProperty('token');
  39  |     expect(responseBody).toHaveProperty('expires');
  40  |     expect(responseBody).toHaveProperty('status');
  41  |     expect(responseBody).toHaveProperty('result');
  42  | })
  43  | test('Is User Authorized', async ({ request }) => {
  44  |     const response = await request.post(`${API_Account_URL}/Authorized`, {
  45  |         data: {
  46  |             "userName": registeredUserName,
  47  |             "password": "Test@1234"
  48  |         }
  49  |     });
  50  |     expect(response.status()).toBe(200);
  51  |     const responseBody = await response.json();
  52  |     console.log('Response Body:', responseBody);
  53  | })
  54  | // test('Delete User Account', async ({ request }) => {
  55  | //     const response = await request.delete(`${API_Account_URL}/User/${registeredUserId}`, {
  56  | //         headers: {
  57  | //             'Authorization': `Bearer ${token}`
  58  | //         }
  59  | //     });
  60  | //     expect(response.status()).toBe(204);
  61  | //     console.log('User account deleted successfully');
  62  | // })
  63  | 
  64  | test('Get User Account', async ({ request }) => {
  65  |     const response = await request.get(`${API_Account_URL}/User/${registeredUserId}`, {
  66  |         headers: {
  67  |             'Authorization': `Bearer ${token}`
  68  |         }
  69  |     });
  70  |     expect(response.status()).toBe(200);
  71  |     const responseBody = await response.json();
  72  |     console.log('Response Body:', responseBody);
  73  | })
  74  | 
  75  | test('Get Books List', async ({ request }) => {
  76  |     const response = await request.get(`${API_BookStore_URL}/Books`);
  77  |     expect(response.status()).toBe(200);
  78  |     const responseBody = await response.json();
  79  |     console.log('Response Body:', responseBody);
  80  |     expect(Array.isArray(responseBody.books)).toBe(true);
  81  |     expect(responseBody.books.length).toBeGreaterThan(0);
  82  |     expect(responseBody.books[0]).toHaveProperty('isbn');
  83  |     expect(responseBody.books[0]).toHaveProperty('title');
  84  |     expect(responseBody.books[0]).toHaveProperty('subTitle');
  85  |     expect(responseBody.books[0]).toHaveProperty('author');
  86  |     isbn = responseBody.books[0].isbn;
  87  |     newIsbn = responseBody.books[1].isbn;
  88  | })
  89  | test('Add Book to User Account', async ({ request }) => {
  90  |     const response = await request.post(`${API_BookStore_URL}/Books`, {
  91  |         headers: {  
  92  |             'Authorization': `Bearer ${token}`,
  93  |             'Content-Type': 'application/json'
  94  |         },
  95  |         data: {
  96  |             "userId": registeredUserId,
  97  |             "collectionOfIsbns": [
  98  |                 {   
  99  |                 "isbn": isbn
  100 |                 }
  101 |             ]
  102 | }
  103 | })
  104 |      expect(response.status()).toBe(201);
  105 |      const responseBody = await response.json();
  106 |      console.log('Response Body:', responseBody);
  107 | })
  108 | test('Delete Book from User Account', async ({ request }) => {
  109 |     const response = await request.delete(`${API_BookStore_URL}/Book`, {
  110 |         headers: {
  111 |             'Authorization': `Bearer ${token}`,
  112 |             'Content-Type': 'application/json'
  113 |         },
  114 |         data: {
  115 |             "isbn": isbn,
  116 |             "userId": registeredUserId
  117 |         }
  118 |     });
> 119 |     expect(response.status()).toBe(200);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  120 |     const responseBody = await response.json();
  121 |     console.log('Response Body:', responseBody);
  122 | });
  123 | })
```