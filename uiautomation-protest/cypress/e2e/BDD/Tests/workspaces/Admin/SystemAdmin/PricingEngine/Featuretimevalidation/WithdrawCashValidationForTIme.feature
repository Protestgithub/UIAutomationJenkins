Feature: Validating finacial service for time

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

Scenario: To verify time validation with withdraw cash for Start and End time
Given Login into Consumer Portal
When Check whether Withdraw cash is visible or not
And Click on Withdraw cash
And Click on Withdraw cash
And Fill all the details for withdraw cash and proceed
Then Vadidate Withdraw rules
