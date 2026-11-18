# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BookStoreAPI.spec.js >> Book Store API Tests >> Delete Book from User Account
- Location: tests\BookStoreAPI.spec.js:116:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 204
Received: 400
```

# Test source

```ts
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
  54  | 
  55  | 
  56  | test('Get User Account', async ({ request }) => {
  57  |     const response = await request.get(`${API_Account_URL}/User/${registeredUserId}`, {
  58  |         headers: {
  59  |             'Authorization': `Bearer ${token}`
  60  |         }
  61  |     });
  62  |     expect(response.status()).toBe(200);
  63  |     const responseBody = await response.json();
  64  |     console.log('Response Body:', responseBody);
  65  | })
  66  | 
  67  | test('Get Books List', async ({ request }) => {
  68  |     const response = await request.get(`${API_BookStore_URL}/Books`);
  69  |     expect(response.status()).toBe(200);
  70  |     const responseBody = await response.json();
  71  |     console.log('Response Body:', responseBody);
  72  |     expect(Array.isArray(responseBody.books)).toBe(true);
  73  |     expect(responseBody.books.length).toBeGreaterThan(0);
  74  |     expect(responseBody.books[0]).toHaveProperty('isbn');
  75  |     expect(responseBody.books[0]).toHaveProperty('title');
  76  |     expect(responseBody.books[0]).toHaveProperty('subTitle');
  77  |     expect(responseBody.books[0]).toHaveProperty('author');
  78  |     isbn = responseBody.books[0].isbn;
  79  |     newIsbn = responseBody.books[1].isbn;
  80  | })
  81  | test('Add Book to User Account', async ({ request }) => {
  82  |     const response = await request.post(`${API_BookStore_URL}/Books`, {
  83  |         headers: {  
  84  |             'Authorization': `Bearer ${token}`,
  85  |             'Content-Type': 'application/json'
  86  |         },
  87  |         data: {
  88  |             "userId": registeredUserId,
  89  |             "collectionOfIsbns": [
  90  |                 {   
  91  |                 "isbn": isbn
  92  |                 }
  93  |             ]
  94  | }
  95  | })
  96  |      expect(response.status()).toBe(201);
  97  |      const responseBody = await response.json();
  98  |      console.log('Response Body:', responseBody);
  99  | })
  100 | // 
  101 | test('update Book in User Account', async ({ request }) => {
  102 |     const response = await request.put(`${API_BookStore_URL}/Books/${isbn}`, {
  103 |         headers: {
  104 |             'Authorization': `Bearer ${token}`,
  105 |             'Content-Type': 'application/json'  
  106 |         },  
  107 |         data: {
  108 |             "userId": registeredUserId,
  109 |             "isbn": newIsbn
  110 |         }
  111 |     });
  112 |     expect(response.status()).toBe(200);
  113 |     const responseBody = await response.json();
  114 |     console.log('Response Body:', responseBody);
  115 | });
  116 | test('Delete Book from User Account', async ({ request }) => {
  117 |     const response = await request.delete(`${API_BookStore_URL}/Book`, {
  118 |         headers: {
  119 |             'Authorization': `Bearer ${token}`,
  120 |             'Content-Type': 'application/json'
  121 |         },
  122 |         data: {
  123 |             "isbn": isbn,
  124 |             "userId": registeredUserId
  125 |         }
  126 |     });
> 127 |     expect(response.status()).toBe(204);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  128 | });
  129 | test('Delete User Account', async ({ request }) => {
  130 |     const response = await request.delete(`${API_Account_URL}/User/${registeredUserId}`, {
  131 |         headers: {
  132 |             'Authorization': `Bearer ${token}`
  133 |         }
  134 |     });
  135 |     expect(response.status()).toBe(204);
  136 |     console.log('User account deleted successfully');
  137 | })
  138 | })
```