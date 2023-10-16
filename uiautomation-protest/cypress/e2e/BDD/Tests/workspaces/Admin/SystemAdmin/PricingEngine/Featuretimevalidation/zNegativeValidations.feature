Feature: Negative Time validations for start and end time in pricing Engine


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
    Scenario: If time is up then created rule is not applicable for any financial services.
        Given Login into Consumer Portal
        When Check whether Withdraw cash is visible or not
        And Click on Withdraw cash
        And Click on Withdraw cash
        And Fill all the details for withdraw cash and proceed
        Then Vadidate rule for time is up
