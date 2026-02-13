const ArticleService = require('./articles-service');

test('Tester getAll', async() => {

    const testResult = await ArticleService.getAll();

    expect(testResult.code).toBe("200")
})

test('Tester getOneByID', async() => {
    const testResult = await ArticleService.getArticleById("1");
    expect(testResult.code).toBe("200")
});

test('Tester createArticle', async() => {
    const testResult = await ArticleService.createArticle({
        id: '4',
        title: 'Quatrième article',
        desc: 'Contenu du quatrième article',
        author: 'Pims',
        imgPath: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg'
    });
    expect(testResult.code).toBe("200")
});

test('Tester modifyArticle', async() => {
    const testResult = await ArticleService.modifyArticle({id: "3", title: "changement de nom"})
    expect(testResult.code).toBe("200")
})