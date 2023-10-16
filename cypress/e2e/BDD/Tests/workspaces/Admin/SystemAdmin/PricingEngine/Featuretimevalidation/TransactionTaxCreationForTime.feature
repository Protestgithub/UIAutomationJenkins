Feature: Transaction Tax rule creation for Start and End Time

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
        And Click on the Transaction Tax
        Then Enter all details and add service charge for cashout
