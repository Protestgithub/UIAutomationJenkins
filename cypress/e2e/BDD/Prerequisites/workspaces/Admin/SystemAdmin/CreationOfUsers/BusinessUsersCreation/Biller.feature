Feature: User Management : Biler Business User creation


# Author: Arpitha
# Last Updated: 25-04-2022
# Comments 
# Scenario_ID :
# TC_

@test
Scenario:To verify that valid System admin is able to initiate Biller businsess user creation .
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on register
And Select User type as Business and Select user role as Biller
And Enter all the required business user details Creation for Biller user role
Then Confirmation message is displayed
And Navigate to My Activity and Aplly required filters
Then Assert Created Buissness User Mobile Number and Write Created on time for Biller




Scenario: To verify approval business user created for Biller
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Approvals and filter by Submitted status 
And User click on Buissness Admin submitted user data for AtmMachine
And Approve the Users
Then User status is approved
