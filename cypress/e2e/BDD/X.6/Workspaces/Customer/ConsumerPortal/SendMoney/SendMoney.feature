Feature: Send Money

# # Author: Niroop H N
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test

Scenario:Send Money.
Given Login into Consumer Portal as Customer
#And change Language French
When Click on Send Money And Fill all the details
And Enter the Pin and verify
Then Copey Transaction ID
#And Asserting the paymet sheet