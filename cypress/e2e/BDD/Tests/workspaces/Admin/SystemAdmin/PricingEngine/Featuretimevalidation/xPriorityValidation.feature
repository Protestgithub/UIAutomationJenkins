Feature: Priority validations for time 



    # Author: Narendra and Shivam
    # Last Updated: 
    # Comments : 
    # Scenario_ID : 
    #TAGS
    #version tags
    @x.10
    # suite tags
    # test case tags
    @test
    @featureSetup
    ##########  cashout  ###########
    Scenario: To verify that System admin is able to Delete Transaction Tax using Start and End time for CashOut
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Transaction Tax
        Then Check if the rule exist and delete the rule


    # Author: Narendra and Shivam
    # Last Updated: 
    # Comments : 
    # Scenario_ID : 
    #TAGS
    #version tags
    @x.10
    # suite tags
    # test case tags
    @test
    @featureSetup

    Scenario:To verify if time is up then created rule is not applicable for any financial services.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Transaction Tax
        Then Enter all details and add service charge for cashout for Particular time

#############################################################################################

    # Author: Narendra and Shivam
    # Last Updated: 
    # Comments : 
    # Scenario_ID : 
    #TAGS
    #version tags
    @x.10
    # suite tags
    # test case tags
    @test
    @featureSetup
    Scenario: To create Service charge rule to check if 1st priority is not correct then it should take 2nd Priority rule.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on CashOut
        Then Enter all details and add service charge for cashout for Particular time


    # Author: Narendra and Shivam
    # Last Updated: 
    # Comments : 
    # Scenario_ID : 
    #TAGS
    #version tags
    @x.10
    # suite tags
    # test case tags
    @test
    @featureSetup
    Scenario: To Verify If both rule’s conditions are true then, it is taking according to the priority.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
        And Click on CashOut
        Then Enter all commssion details for start and end time for Priority

    # Author: Narendra and Shivam
    # Last Updated: 
    # Comments : 
    # Scenario_ID : 
    #TAGS
    #version tags
    @x.10
    # suite tags
    # test case tags
    @test
    @featureSetup
    Scenario: To Verify If both rule’s conditions are true then, it is taking according to the priority.
        Given Login into Consumer Portal
        When Check whether Withdraw cash is visible or not
        And Click on Withdraw cash
        And Click on Withdraw cash
        And Fill all the details for withdraw cash and proceed
        Then Vadidate Commission rules for true Priority




    # Author: Narendra and Shivam
    # Last Updated: 
    # Comments : 
    # Scenario_ID : 
    #TAGS
    #version tags
    @x.10
    # suite tags
    # test case tags
    @test
    @featureSetup

    Scenario: To Verify If 1st priority is not matching with the specific criteria automatically it is taking priority 2.
        Given Login into Consumer Portal
        When Check whether Withdraw cash is visible or not
        And Click on Withdraw cash
        And Click on Withdraw cash
        And Fill all the details for withdraw cash and proceed
        Then Vadidate ServiceCharge rule for false priority

    # Author: Narendra and Shivam
    # Last Updated: 
    # Comments : 
    # Scenario_ID : 
    #TAGS
    #version tags
    @x.10
    # suite tags
    # test case tags
    @test
    @featureSetup

    Scenario: To Verify If 1st rule is inactive by default it is taking 2nd rule or active rule
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
        And Click on CashOut
        Then Inactive the first rule

    # Author: Narendra and Shivam
    # Last Updated: 
    # Comments : 
    # Scenario_ID : 
    #TAGS
    #version tags
    @x.10
    # suite tags
    # test case tags
    @test
    @featureSetup

    Scenario: To Verify If 1st rule is inactive by default it is taking 2nd rule or active rule
        Given Login into Consumer Portal
        When Check whether Withdraw cash is visible or not
        And Click on Withdraw cash
        And Click on Withdraw cash
        And Fill all the details for withdraw cash and proceed
        Then Validate Comission rule for Inactive priority



