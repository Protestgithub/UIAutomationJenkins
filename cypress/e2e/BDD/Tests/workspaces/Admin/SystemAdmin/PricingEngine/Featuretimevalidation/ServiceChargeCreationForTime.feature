Feature: Service Charge,Discount and Service charge tax rule creation for Start and End Time


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

    Scenario: To verify that user should be able to create the service charge using start and end time for any financial service
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on CashOut
        Then Enter all details and add service charge for cashout

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
    Scenario: To verify that System admin is able to Add discount rule service charge using Start and End time for CashOut
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on CashOut
        And Click On Discount Rule
        Then Enter details for discount rule for time validations





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
    Scenario: To verify that System admin is able to Add service charge tax using Start and End time for CashOut
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on CashOut
        And Click On Taxation rule
        Then Enter details for service charge tax for time validation




