Feature: Commission and Commission tax rule creation for Start and End Time

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

    Scenario: To verify that user should be able to create the Commission using start and end time for any financial service
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
        And Click on CashOut
        Then Enter all commssion details for start and end time
        

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
    Scenario: To verify that System admin is able to Add commission tax rule using start and end time for CashOut 
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
        And Click on CashOut
        And click on commission taxation rule
        And Enter details for commission tax rule for time validation
        


