describe('Parametrized test Toastr', () => {

    beforeEach(() => {

        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Modal & Overlays"]').click();
        cy.get('[title="Toastr"]').click();

    })

    const tost = [
        {
            testData:
            {
                position: 'top-right',
                title: 'Hi, Tanya!',
                content: 'Success toster',
                type: 'success'
            },

            expectedResult:
            {
                icon: 'checkmark',
                title: 'Hi, Tanya!',
                content: 'Success toster',
                color: 'rgb(96, 175, 32)',
                position:
                {
                    'justify-content': 'flex-end',
                    'align-items': 'flex-start'
                }
            },

        }, {
            testData:
            {
                position: 'top-left',
                title: 'Hi, Elena!',
                content: 'Info toster',
                type: 'info'
            },

            expectedResult:
            {
                icon: 'question-mark',
                title: 'Hi, Elena!',
                content: 'Info toster',
                color: 'rgb(4, 149, 238)',
                position:
                {
                    'justify-content': 'flex-start',
                    'align-items': 'flex-start'
                }
            },

        },

        {
            testData:
            {
                position: 'bottom-left',
                title: 'Hi, Taisia!',
                content: 'Warning toster',
                type: 'warning'
            },

            expectedResult:
            {
                icon: 'alert-triangle',
                title: 'Hi, Taisia!',
                content: 'Warning toster',
                color: 'rgb(255, 159, 5)',
                position:
                {
                    'justify-content': 'flex-start',
                    'align-items': 'flex-end'
                }
            },

        },

        {
            testData:
            {
                position: 'bottom-right',
                title: 'Hi, Stiv!',
                content: 'Danger toster',
                type: 'danger'
            },

            expectedResult:
            {
                icon: 'flash',
                title: 'Hi, Stiv!',
                content: 'Danger toster',
                color: 'rgb(176, 0, 32)',
                position:
                {
                    'justify-content': 'flex-end',
                    'align-items': 'flex-end'
                }
            },

        }

    ]

    tost.forEach(({ testData, expectedResult }) => {

        it(`${testData.content}`, () => {

            cy.get('.position-select .select-button').click();
            cy.contains(testData.position).click();

            cy.get('[name="title"]').clear().type(testData.title);
            cy.get('[name="content"]').clear().type(testData.content);

            cy.get('[class="mat-ripple appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
            cy.contains(testData.type).click();

            cy.get('nb-card-footer .status-basic').click();

            cy.get('.subtitle').should('include.text', expectedResult.title);
            cy.get('.message').should('have.text', expectedResult.content);

            cy.get('nb-toast.ng-tns-c209-54').should('have.css', 'background-color')
                .and('eq', expectedResult.color);

            cy.get('nb-toast nb-icon svg g g').should('have.attr', 'data-name')
                .and('eq', expectedResult.icon);

            cy.get('.toastr-overlay-container').should('have.attr', 'style')
                .and('eq', `justify-content: ${expectedResult.position["justify-content"]}; align-items: ${expectedResult.position["align-items"]};`);

        })

    })




});