describe('todo list', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('adds, edits, and cancels edits without creating duplicates', () => {
    cy.get('[aria-label="Add a todo"]').type('Prepare demo')
    cy.contains('button', 'Add').click()

    cy.contains('tr', 'Prepare demo').within(() => {
      cy.contains('button', 'Edit').click()
    })
    cy.get('[aria-label="Edit Prepare demo"]').clear().type('Prepare release demo')
    cy.contains('button', 'Save').click()

    cy.get('table[aria-label="Active todos"] tbody tr').should('have.length', 1)
    cy.get('table[aria-label="Completed todos"] tbody tr').should('have.length', 0)
    cy.get('table[aria-label="Active todos"]').contains('tr', 'Prepare release demo').should('exist')

    cy.get('table[aria-label="Active todos"]').contains('tr', 'Prepare release demo').within(() => {
      cy.contains('button', 'Edit').click()
    })
    cy.get('[aria-label="Edit Prepare release demo"]').clear().type('Discard this edit')
    cy.contains('button', 'Cancel').click()

    cy.get('table[aria-label="Active todos"]').contains('tr', 'Prepare release demo').should('exist')
    cy.get('table[aria-label="Active todos"]').contains('tr', 'Discard this edit').should('not.exist')
    cy.get('table[aria-label="Active todos"] tbody tr').should('have.length', 1)
  })

  it('marks a todo complete and deletes it', () => {
    cy.get('[aria-label="Add a todo"]').type('Ship feature')
    cy.contains('button', 'Add').click()

    cy.get('table[aria-label="Active todos"]').contains('tr', 'Ship feature').within(() => {
      cy.contains('button', 'Mark as completed').click()
    })

    cy.get('table[aria-label="Active todos"] tbody tr').should('have.length', 0)
    cy.get('table[aria-label="Completed todos"]').contains('tr', 'Ship feature').within(() => {
      cy.contains('td', 'Yes').should('exist')
      cy.contains('button', 'Mark as completed').should('not.exist')
      cy.contains('button', 'Delete').click()
    })

    cy.get('table[aria-label="Completed todos"] tbody tr').should('have.length', 0)
  })
})
