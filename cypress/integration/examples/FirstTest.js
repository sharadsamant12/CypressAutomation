/// <reference types="Cypress" />


describe('My First Test', function()  
{
  it('Verify Text post', function() 
    {
      cy.visit("https://webuser:w3bus3r@stage2.dayre.me/auth/login")
      //cy.get(':nth-child(1) > .form-control').type('sharad{enter}')
      cy.get('input[name=login_e]').should('be.visible').should('be.enabled').type('sharad')
      cy.wait(1000)
      
      //cy.get('.show-pass > .form-control').type('43214321{enter}')
      cy.get('input[name=login_p]').should('be.visible').should('be.enabled').type('43214321{enter}')
      cy.wait(1000)
      //cy.get("custbtn custbtn--yellow--solid custbtn--large").click
      //cy.get('.custbtn').click()


      //Title verification
      cy.title().should('eq','Feeds')
      //cy.title().should('eq','Dayre')
      cy.wait(2500)
      
      cy.get('section.page-section.clearfix div.block-section.welcome-section.clearfix div.container div.row div.col-sm-12.col-md-6:nth-child(2) div.mid_content div.mid_container div.create-modal div.create-container div:nth-child(1) div.create-content > div.compose-form').should('be.visible').click()
      cy.wait(2000)
      cy.get("body.modal-open:nth-child(2) div.create-modal.modal:nth-child(32) div.modal-dialog div.modal-content div.modal-body div.create-content div.compose-form div.text-areabox div:nth-child(1) > textarea.form-control.noresize").should('be.visible').should('be.enabled').type('The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have #uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. @vinayak, @Ashish The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. :) P)').scrollTo('bottom')
      
       
      cy.get('.modal').scrollTo('bottom') //FRAME SCROLL DOWN
      cy.get('.modal-footer').focused().scrollTo('bottom')
     
      cy.wait(2000)
      
      cy.get("body.modal-open:nth-child(2) div.create-modal.modal:nth-child(32) div.modal-dialog div.modal-content div.modal-footer div.create-bar div:nth-child(2) > button.custbtn.custbtn--yellow--solid.custbtn--small").should('be.visible').click()
      cy.wait(2000)
      cy.on('Window:confirm',(String)=>
        {
          expect(String).to.equal('Post Created Successfully')
        }
      )
      cy.wait(2000)
      cy.get("body.modal-open.react-confirm-alert-body-element:nth-child(2) div.react-confirm-alert-overlay div.react-confirm-alert div.custom-ui.create-post-message-popup div.create-post-message-popup div.modal-content div.modal-body div.full-btn-popup div.btn-group > button.custbtn.custbtn--yellow--solid.custbtn--large").should('be.visible').click()
      cy.wait(1500)    

    }
  )

  it('Verify Text added', function() 
    {

      cy.visit("https://webuser:w3bus3r@stage2.dayre.me/auth/login")
      //cy.get(':nth-child(1) > .form-control').type('sharad{enter}')
      cy.get('input[name=login_e]').should('be.visible').should('be.enabled').type('sharad')
      cy.wait(1000)
      
      //cy.get('.show-pass > .form-control').type('43214321{enter}')
      cy.get('input[name=login_p]').should('be.visible').should('be.enabled').type('43214321{enter}')
      cy.wait(1000)
      //cy.get("custbtn custbtn--yellow--solid custbtn--large").click
      //cy.get('.custbtn').click()


      //Title verification
      cy.title().should('eq','Feeds')
            
      cy.wait(1500)
      //cy.get('label > .user-img').click
      cy.get("section.page-section.clearfix div.block-section.welcome-section.clearfix div.container div.row div.col-sm-12.col-md-6:nth-child(2) div.mid_content div.mid_container div.create-modal div.create-container div:nth-child(1) div.create-content > div.compose-form").should('be.visible').click()
      cy.wait(2000)
      cy.get("body.modal-open:nth-child(2) div.create-modal.modal:nth-child(32) div.modal-dialog div.modal-content div.modal-body div.create-content div.compose-form div.text-areabox div:nth-child(1) > textarea.form-control.noresize").should('be.visible').should('be.enabled').type("THE ONLY WAY TO DO GREAT WORK IS TO LOVE WHAT YOU DO. IF YOU HAVEN'T FOUND IT YET. KEEP LOOKING, DON'T SETTLE")
      cy.wait(2000)
      cy.get('#text-post > div > div.modal-body > div > div.jutify_text.d-flex.justify-content-between > div.custom-control.custom-radio > label').click()
      //cy.contains('Post as quote').focused.click
      cy.wait(2000)

      cy.get("body.modal-open:nth-child(2) div.create-modal.modal:nth-child(32) div.modal-dialog div.modal-content div.modal-footer div.create-bar div:nth-child(2) > button.custbtn.custbtn--yellow--solid.custbtn--small").should('be.visible').click()
      cy.wait(2000)
      cy.get("body.modal-open.react-confirm-alert-body-element:nth-child(2) div.react-confirm-alert-overlay div.react-confirm-alert div.custom-ui.create-post-message-popup div.create-post-message-popup div.modal-content div.modal-body div.full-btn-popup div.btn-group > button.custbtn.custbtn--yellow--solid.custbtn--large").should('be.visible').click()
      cy.wait(2000)    

     
    }

    
  )


  

})