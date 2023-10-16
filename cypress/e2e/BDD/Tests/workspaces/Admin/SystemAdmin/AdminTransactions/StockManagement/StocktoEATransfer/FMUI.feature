Feature: Stock Management Initiation

    This feature includes Stock initiation,StockApproval1 and StockApproval2 by System Admin


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @test
    Scenario:TC_195 To verify that System admin is able to Initiate Stock Transfer to EA through web.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on Transfer
        And Enter all the Stock Transfer Information
        Then Click on Create and Confirm Success Message
        And Click on MyActivity, filter Stock Transfer and get Creation on time

    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @test
    Scenario:TC_196 To verify that System admin checker1 is able to approve
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to approvals
        And Apply Stock Transfer filter
        And User click on Stock submitted user data
        And Approve the Users for Admin Creation

    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @test
    Scenario:TC_197 To verify that System admin checker2 is able to approve
        Given Login into Mobiquity Portal as System admin Checker2
        When Navigate to approvals
        And User click on submitted user data
        And Approve the Users for Admin Creation
        Then Confirm the Success Message for EA and RA
        When Navigate to Admin Transaction and Click on Transfer
        And Enter all the Stock Transfer Information
        Then Search by Transaction ID for EA and Enquire the Stock

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID : TC_466
# TestCase_ID : 
#version tags
@x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_325 To Verify that, User is able to check the initiated transaction staus of stock transfer to EA
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Transfer
And Enter all the Stock Transfer Information
And Click on Create and Confirm Success Message
Then Check the initiated transaction staus of stock transfer to EA

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_
@test
@sanity    
Scenario:TC_463 To Verify that, If Stock transfer amount is higher than the set Stock Transfer limit to reward account then, the system will request for second level approval from Stock Transfer to reward account approval 2.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Transfer
And Enter all the Stock Transfer Information
Then Click on Create and Confirm Success Message
And Click on MyActivity, filter Stock Transfer and get Creation on time
Then Logout
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to approvals
And Apply Stock Transfer filter
And User click on Stock submitted user data
And Approve the Users for Admin Creation
Then Logout
Given Login into Mobiquity Portal as System admin Checker2
When Navigate to approvals
And User click on submitted user data
And Approve the Users for Admin Creation
Then Confirm the Success Message for EA and RA
