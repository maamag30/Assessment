document.getElementById('receiptForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const schoolName = document.getElementById('schoolName').value;
    const schoolAddress = document.getElementById('schoolAddress').value;
    const studentName = document.getElementById('studentName').value;
    const grade = document.getElementById('grade').value;
    const tuitionFee = document.getElementById('tuitionFee').value;
    const totalAmountPaid = document.getElementById('totalAmountPaid').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const date = document.getElementById('date').value;

    // Display the receipt
    document.getElementById('receiptSchoolName').textContent = `School Name: ${schoolName}`;
    document.getElementById('receiptSchoolAddress').textContent = `School Address: ${schoolAddress}`;
    document.getElementById('receiptStudentName').textContent = `Student Name: ${studentName}`;
    document.getElementById('receiptGrade').textContent = `Grade: ${grade}`;
    document.getElementById('receiptTuitionFee').textContent = `Tuition Fee: #${tuitionFee}`;
    document.getElementById('receiptTotalAmountPaid').textContent = `Total Amount Paid: #${totalAmountPaid}`;
    document.getElementById('receiptPaymentMethod').textContent = `Payment Method: ${paymentMethod}`;
    document.getElementById('receiptDate').textContent = `Date: ${date}`;

    // Show the receipt
    document.getElementById('receipt').style.display = 'block';
});
