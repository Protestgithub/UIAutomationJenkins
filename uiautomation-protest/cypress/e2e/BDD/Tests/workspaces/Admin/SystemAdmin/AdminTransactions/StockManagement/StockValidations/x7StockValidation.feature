Feature: x.7 Validation


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID :
    #
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_364 To Verify that, the approvers is able to see stock transfer under a common web link.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Verify stock Transfer present in the link

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_404
#TAGS
#version tags
@x.07 @x.09 
# suite tags
@UAT
# test case tags
@test

Scenario:TC_323 To Verify that, proper message should be shown over there, If user enter amount more than existing amount
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Transfer
And Enter All Stock Transfer details and enter amount greater than existing amount
Then Verify Error Message for EA

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID : TC_468
# TestCase_ID : 
#version tags
@x.07 @x.09 @x.06
# suite tags
@UAT
# test case tags
@test
Scenario:TC_324 To Verify that, User is able to check the failed transaction staus of stock transfer to EA
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Transfer
Then Check the Failed transaction staus of stock transfer to EA
