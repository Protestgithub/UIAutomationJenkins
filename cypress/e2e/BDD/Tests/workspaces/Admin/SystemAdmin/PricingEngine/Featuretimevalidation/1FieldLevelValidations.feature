Feature: Field level validations for start and end time in Pricing Engine




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
    Scenario: To verify that System admin is able to view start and end time for Service Charge
        Given Login into Mobiquity Portal as System admin Maker 
        When Click on Pricing Engine
        And Click on CashOut
        Then View start time and end time in calendar for USD

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
    Scenario: To verify that System admin is able to view start and end time for Commission
        Given Login into Mobiquity Portal as System admin Maker 
        When Click on Pricing Engine
        And Click on commission
        And Click on CashOut
        Then View start time and end time in calendar for USD


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
    Scenario: To verify that System admin is able to view start and end time for Transaction Tax 
        Given Login into Mobiquity Portal as System admin Maker 
        When Click on Pricing Engine
        And Click on the Transaction Tax
        Then View start time and end time in calendar for USD


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
    Scenario: To verify that System admin is able to view start and end time for INR Currency 
        Given Login into Mobiquity Portal as System admin Maker 
        When Click on Pricing Engine
        And Click on commission
        And Click on CashOut
        Then View start time and end time in calendar for INR

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
    Scenario: To verify that user should not be able to submit the policy if he enters more than 24 hours in calendar
        Given Login into Mobiquity Portal as System admin Maker 
        When Click on Pricing Engine
        And Click on CashOut
        And Enter the time greater than 24 hour
        Then Verify the Error Message
