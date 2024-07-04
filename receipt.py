def school_receipt_generator():
    # Get input from the user
    school_name = input("Enter School Name: ")
    school_address = input("Enter School Address: ")
    student_name = input("Enter Student Name: ")
    grade = input("Enter Grade: ")
    tuition_fee = input("Enter Tuition Fee: ")
    total_amount_paid = input("Enter Total Amount Paid: ")
    payment_method = input("Enter Payment Method (Cash/Card/Bank Transfer): ")
    date = input("Enter Date (MM/DD/YYYY): ")
    
    # Print the receipt
    print("\n========== SCHOOL RECEIPT ==========")
    print("School Name: " + school_name)
    print("School Address: " + school_address)
    print("-------------------------------------")
    print("Student Name: " + student_name)
    print("Grade: " + grade)
    print("Tuition Fee: #" + tuition_fee)
    print("Total Amount Paid: #" + total_amount_paid)
    print("Payment Method: " + payment_method)
    print("Date: " + date)
    print("=====================================")
    print("Thanks for your patronage!")

# Call the function to generate the receipt
school_receipt_generator()
