Feature: Stock Management Initiation

    This feature includes Stock initiation,StockApproval1 and StockApproval2 by System Admin

# Author: Niroop H N
    # Last Updated: 
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_543
    #TAGS
    #version tags
    @x.07 @X.06
    # suite tags
    @Smoke
    # test case tags
    @test
    Scenario:TC_543 Verify System admin should be able to click "Admin Transaction" module and when clicked respective page should be displayed with below modules -a Stock Creation.b Stock Deletion.c Stock Transfer.d Allocation.e Reimbursement.f Stock Balance Enquir...
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on More 
        And Assert all the fields of Admin Transaction
        
    # Author: Niroop H N
    # Last Updated: 
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_544
    #TAGS
    #version tags
    @x.07 @X.06
    # suite tags
    @Smoke
    # test case tags
    @test
    Scenario:TC_544 Verify System admin should be able to click "Stock Creation" module and once it is clicked, stock creation form should be displayed with below fields with Title "Enter Stock Information".a "Currency" Drop-Down.b "From: Trust Bank" Drop-Down.c "Bank …
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on Stock Creation
        And Assert Stock Creation   

    # Author: Narendra
    # Last Updated: 5/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_75
    #TAGS
    #version tags
    @x.07
    # suite tags
    @Smoke
    # test case tags
    @test
    Scenario:TC_182 To verify that System admin can initiate the stock successfully
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on Stock Creation
        And Enter all the Stock Information
        Then Click on Create and Confirm Success Message
        And Click on MyActivity, filter Stock Creation and get Creation on time

    # Author: Narendra
    # Last Updated: 5/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_76
    #TAGS
    #version tags
    @x.07
    # suite tags
    @Smoke
    # test case tags
    @test
    Scenario:TC_183 To verify that System admin can successfully approve the stock at level>>1
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to approvals
        And User click on Stock submitted user data
        And Approve the Users for Admin Creation

    # Author: Narendra
    # Last Updated: 6/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_77
    #TAGS
    #version tags
    @x.07
    # suite tags
    @Smoke
    # test case tags
    @test
    Scenario:TC_184 To verify that System admin can successfully approve the stock at level 2.
        Given Login into Mobiquity Portal as System admin Checker2
        When Navigate to approvals
        And Apply Stock Creation filter
        And User click on submitted user data
        And Approve the Users for Admin Creation
        Then Confirm the Success Message for Stock Initiation


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_198 To verify that System admin can enquire the Stocks through stock enquiry
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on Stock Creation
        And Search by Transaction ID and Enquire the Stock
