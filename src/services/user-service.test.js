const UserService = require('./users-service');

test('Tester connectUser', async() => {

    const testResult = await UserService.connectUser({
        email: 'test@example.com',
        password: 'test'
    });

    expect(testResult.code).toBe("200")
});

test('Tester signupUser', async() => {
    const testResult = await UserService.signupUser({
        id: '4',
        email: 'email@test.com',
        password: 'password',
        passwordConfirm: 'password',
        pseudo: 'pims',
        cityCode: '16154',
        city: 'Nantes',
        phone: '0123456789'
    });
    expect(testResult.code).toBe("200")
})