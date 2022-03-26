import {f1Page} from "./pageObjects"



const myTest = new f1Page


   
    test("Drivers Tab", async () =>{
        await myTest.navigate()
        await myTest.driver.manage().window().maximize()
        await myTest.click(myTest.cookiesBtn)
       
        await myTest.click(myTest.driverTab)
        await myTest.click(myTest.exitBtn)
        await myTest.click(myTest.danielRicci)
        let response = await myTest.getText(myTest.driverResult)
        expect(response).toContain( "Daniel Ricciardo")
        
    
    });
    
    test("Teams Tab", async () => {
        await myTest.navigate()
        await myTest.click(myTest.exitBtn)
        await myTest.click(myTest.teamsTab)
        
        await myTest.click(myTest.ferrari)
        let response = await myTest.getText(myTest.teamResult)
        
        expect(response).toContain("Ferrari")
    
    
    });

    test("Schedule Tab", async () => {
       // await myTest.navigate()
        await myTest.click(myTest.scheduleTab)
        await myTest.click(myTest.spain)
        let response = await myTest.getText(myTest.scheduleResult)
        expect(response).toContain("FORMULA 1 PRE-SEASON TRACK SESSION 2022")
      
     
    });

    test("Sign in", async () => {
        await myTest.navigate() 
       
        
        await myTest.click(myTest.signInBtn)
       
        await myTest.click(myTest.emailInput)
        await myTest.setInput(myTest.emailInput, "taylorbgreer@gmail.com")
        await myTest.click(myTest.passwordInput)
        await myTest.setInput(myTest.passwordInput, "Test123!")
        await myTest.click(myTest.signInBtn2)
        let response = await myTest.getText(myTest.signInresult)
        expect(response).toContain("Sorry something went wrong")
        await myTest.driver.quit()
    });


    
    