Feature: Stock Management Initiation

    This feature includes Stock initiation,StockApproval1 and StockApproval2 by System Admin





# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_410
#TAGS
#version tags
@x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario: TC_321 To verify that Network  Admin can Reject the Initiated Stock at level 1
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Stock Creation
And Enter all the Stock Information
And Click on Create and Confirm Success Message
And Click on MyActivity, filter Stock Creation and get Creation on time

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_410
#TAGS
#version tags
@x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario: TC_322 To verify level1 Approval
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to approvals
And Apply Stock Creation filter
And User click on Stock submitted user data
Then Reject the Initiated stock at level1







# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_1323
# TestCase_ID : 
#version tags
@x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_326 To Verify that, user is not able to initiate the stock If user enter amount more than existing amount
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Stock Creation
And Enter all the Stock Information and enter amount greater than existing amount
Then Verify Error Message for EA




