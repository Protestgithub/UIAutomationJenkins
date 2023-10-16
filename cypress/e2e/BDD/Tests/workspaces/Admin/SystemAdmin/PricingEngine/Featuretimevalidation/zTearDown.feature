Feature: Teardown for Start and End Time cases

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
    Scenario: To verify that System admin is able to Delete Commssion rule using Start and End time for CashOut
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
        And Click on CashOut
        Then Check if the rule exist and delete the rule
        And Click on commission
        And Click on CashOut
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
    ##########  cashout  ###########
    Scenario: To verify that System admin is able to delete commission tax rule  using start and end time for CashOut
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
        And Click on CashOut
        And click on commission taxation rule
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
    ##########  cashout  ###########
    Scenario: To verify that System admin is able to Delete Service Charge using Start and End time for CashOut
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on CashOut
        Then Check if the rule exist and delete the rule
        And Click on Service charge
        And Click on CashOut
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
    ##########  cashout  ###########
    Scenario: To verify that System admin is able to Delete discount rule service charge using Start and End time for CashOut
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on CashOut
        And Click On Discount Rule
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
    ##########  cashout  ###########
    Scenario: To verify that System admin is able to delete service charge taxrule using Start and End time for CashOut
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on CashOut
        And Click On Taxation rule
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
    ##########  cashout  ###########
    Scenario: To verify that System admin is able to Delete Service Charge using Start and End time for CashOut
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Transaction Tax
        Then Check if the rule exist and delete the rule
