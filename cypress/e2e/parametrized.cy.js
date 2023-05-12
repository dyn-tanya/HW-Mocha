//Параметризовані тести  - всередину передаємо параметри і він виконується стільки, скільки параметрів передали. є можливість виконати тест з різноманітними даними і не дублювати код багато разів
//один раз прописуємо кроки і потім змінюємо вхідні дані
describe('Multiple tests', () => {
    const testGoogle = (testData, expectedResult) =>

    function () {
      cy.visit('https://google.com');
      cy.get('textarea.gLFyf').type(`${testData}`);
      cy.get('div.wM6W7d').should("contain", `${expectedResult}`) //перевіряє, що елемент містить текст
    };

  it('search for CYPRESS', testGoogle('CYPRESS', 'cypress'));
  it('search for AUDI', testGoogle('AUDI', 'audi'));
  it('search for BMW', testGoogle('BMW', 'bmw'));
})

describe('Multiple tests', () => {
    const tests = [
        {testData: 'CYPRESS', expectedResult: 'cypress'},
        {testData: 'AUDI', expectedResult: 'audi'},
        {testData: 'BMW', expectedResult: 'bmw'}
    ]

    tests.forEach(({testData, expectedResult}) => {
        it(`Test ${testData}`, () => {
            cy.visit('https://google.com');
            cy.get('textarea.gLFyf').type(testData);
            cy.get('div.wM6W7d').should('contain', expectedResult);
        })
    })
})


//перші кроки скласти в бефоре іч
//вводить текст і клікати на чекбокс і потім перевіряють (should('contain', `${expectedResult}`);)   що в цих формах введений текст 
