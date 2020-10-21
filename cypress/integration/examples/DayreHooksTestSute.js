/// <reference types="Cypress" />

describe('Dayre Test Sute', function() 
 {

   before(() => {
      // runs once before all tests in the block
    })
  
    beforeEach(() => {
      cy.log('************* This is Login blog ****************')
      cy.visit("https://webuser:w3bus3r@stage2.dayre.me/auth/login")
      //Custom commands
      cy.Dayrelogin('','')
      cy.wait(1000)
      

    })
  
    afterEach(() => {
      //cy.log('************* This is Logout blog ****************')
     
      //cy.get('#navbardrop').click()
      //cy.get(':nth-child(11) > .dropdown-item').click()
      //cy.wait(1000)
    })
  
    after(() => {
      // runs once after all tests in the block
    })


     it.skip('Test Case1: Adding Post as quote', function()
     {
      cy.log('************* Adding Post as quote ****************')
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

     it.skip('Test Case2: Adding Text Post', function()
     {
        cy.log('************* Adding Text Post ****************')
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

     it.skip('Test Case3: Search the Value', function()
     {
        cy.log('************* Search the Value ****************')
       
         //cy.get(':nth-child(3) > .comment-list').contains('p','comment three').should('be.visible')
         cy.get('.comment-list').contains('p','comment three').should('be.visible')
         cy.wait(500)
         

     }
     )

     it.skip('Test Case4: Navigat on page', function()
     {
        cy.log('************* Navigate on the pages ****************')
        cy.title().should('eq','Feeds')
        cy.wait(500)
        cy.get('.logo').should(have.text,'Dayre')
        cy.get(':nth-child(2) > .nav-link-left').contains('Top').click()
        cy.title().should('eq','Top Posts') //Top Page title verification
        cy.wait(5000)
        cy.go('back')
        cy.title().should('eq','Feeds')
        cy.wait(1500)
        cy.reload() //Page reload
        cy.wait(500)
        
     }
     )

     it.skip('Test Case5: Add from List Box', function()
     {
        cy.log('************* ListBox text ****************')
        cy.wait(1500)
        cy.get('#navbardrop').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.get('.search').click()
        cy.get('.search-box').type('India{enter}')
        cy.wait(500)
        cy.get('.custbtn').click()
        cy.wait(500)

     }
     )

     it('Test Case6: Chaild tab', function()
     {
        cy.log('*************  text ****************')
        cy.wait(1500)
        //cy.get(':nth-child(1) > .textpost-conntainer > .user-text-block > .user-text > .description_text').invoke('removeAttr','target').click()
        //cy.get('.username').invoke('removeAttr','target').click()
        //cy.get(':nth-child(1) > .textpost-conntainer > .user-text-block > .user-block > .block-left > .page-meta > a > .username > h5').invoke('removeAttr','target').click()
        cy.get('.username').contains('sharad').last().invoke('removeAttr','target').click()
        
        cy.wait(1500)
        cy.go("back")

     }
     )

     it.only('Test Case7: Image upload', function()
     {
      cy.log('************* Adding Post as quote ****************')
      //Title verification
      cy.title().should('eq','Feeds')
            
      cy.wait(1500)
      //cy.get('label > .user-img').click

      //const yourFixcherPath = 'Image.jpg'
      //cy.get('#file-input').attachFile(yourFixcherPath)

      const yourFixcherPath = 'Image.jpg'
      const yourFixcherPath1 = 'Image1.jpg'
      cy.get('#file-input')
      .attachFile(yourFixcherPath)
      .attachFile(yourFixcherPath1)

     }
     )

 }
)