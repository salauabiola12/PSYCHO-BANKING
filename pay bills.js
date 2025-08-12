  function updateBillForm() {
    const billType = document.getElementById("billType").value;
    const dynamicFields = document.getElementById("dynamicFields");
    const header = document.getElementById("headerTitle");
    const subtitle = document.getElementById("headerSubtitle");
    const body = document.body;
    const pageHeader = document.querySelector("header");

    let content = "";
    let themeColor;
    header.textContent = `${billType.charAt(0).toUpperCase() + billType.slice(1).replace('_', ' ')} Bill`;
    subtitle.textContent = `Fill the details below to pay your ${billType.replace('_', ' ')} bill.`;

    switch (billType) {
      case "electricity": themeColor = "#ffe600"; break;
      case "water": themeColor = "#4fc3f7"; break;
      case "internet": themeColor = "#673ab7"; break;
      case "cable_tv": themeColor = "#ff4081"; break;
      case "waste": themeColor = "#8bc34a"; break;
      case "gas": themeColor = "#ff7043"; break;
      case "school_fees": themeColor = "#3f51b5"; break;
      case "landline": themeColor = "#00acc1"; break;
      case "tax": themeColor = "#795548"; break;
      case "security": themeColor = "#607d8b"; break;
      case "estate": themeColor = "#009688"; break;
      case "transport": themeColor = "#fbc02d"; break;
      case "Loan Services": themeColor = "#d32f2f"; break;
      default: themeColor = "#f0f4f8";
    }

    body.style.backgroundColor = themeColor;
    pageHeader.style.backgroundColor = themeColor;

    switch (billType) {
      case "electricity":
        content = `
          <div class="form-group">
            <label for="meterNumber">Meter Number</label>
            <input type="text" id="meterNumber" required>
          </div>
          <div class="form-group">
            <label for="meterType">Meter Type</label>
            <select id="meterType" required>
              <option value="">Select</option>
              <option value="prepaid">Prepaid</option>
              <option value="postpaid">Postpaid</option>
            </select>
          </div>
          <div class="form-group">
            <label for="amount">Amount (₦)</label>
            <input type="number" id="amount" required>
          </div>`;
        break;
      case   "water":
      case "waste":
      case "estate":
        content = `
          <div class="form-group">
            <label for="accountNumber">Customer Account Number</label>
            <input type="text" id="accountNumber" required>
          </div>
          <div class="form-group">
            <label for="amount">Amount (₦)</label>
            <input type="number" id="amount" required>
          </div>`;
        break;
      case "internet":
        content = `
          <div class="form-group">
            <label for="provider">Internet Provider</label>
            <input type="text" id="provider" requir4ed>
          </div>
          <div class="form-group">
            <label for="accountNumber">Account/Phone Number</label>
            <input type="text" id="accountNumber" required>
          </div>
          <div class="form-group">
            <label for="amount">Amount (₦)</label>
            <input type="number" id="amount" required>
          </div>`;
        break;
      case "cable_tv":
        content = `
          <div class="form-group">
            <label for="decoderNumber">Decoder Smart Card Number</label>
            <input type="text" id="decoderNumber" required>
          </div>
          <div class="form-group">
            <label for="package">Subscription Package</label>
            <input type="text" id="package" required>
          </div>
          <div class="form-group">
            <label for="amount">Amount (₦)</label>
            <input type="number" id="amount" required>
          </div>`;
        break;
      case "gas":
        content = `
          <div class="form-group">
            <label for="gasAccount">Account ID</label>
            <input type="text" id="gasAccount" required>
          </div>
          <div class="form-group">
            <label for="amount">Amount (₦)</label>
            <input type="number" id="amount" required>
          </div>`;
        break;
      case "school_fees":
        content = `
          <div class="form-group">
            <label for="studentName">Student Name</label>
            <input type="text" id="studentName" required>
          </div>
          <div class="form-group">
            <label for="studentID">Student ID</label>
            <input type="text" id="studentID" required>
          </div>
          <div class="form-group">
            <label for="amount">Amount (₦)</label>
            <input type="number" id="amount" required>
          </div>`;
        break;
      case "landline":
        content = `
          <div class="form-group">
            <label for="phoneNumber">Landline Number</label>
            <input type="text" id="phoneNumber" required>
          </div>
          <div class="form-group">
            <label for="amount">Amount (₦)</label>
            <input type="number" id="amount" required>
          </div>`;
        break;
      case "tax":
        content = `
          <div class="form-group">
            <label for="taxID">Tax Identification Number (TIN)</label>
            <input type="text" id="taxID" required>
          </div>
          <div class="form-group">
            <label for="amount">Tax Amount (₦)</label>
            <input type="number" id="amount" required>
          </div>`;
        break;
      case "security":
        content = `
          <div class="form-group">
            <label for="securityAgency">Security Agency Name</label>
            <input type="text" id="securityAgency" required>
          </div>
          <div class="form-group">
            <label for="amount">Amount (₦)</label>
            <input type="number" id="amount" required>
          </div>`;
        break;
      case "transport":
        content = `
          <div class="form-group">
            <label for="transportID">Transport Card/ID</label>
            <input type="text" id="transportID" required>
          </div>
          <div class="form-group">
            <label for="amount">Recharge Amount (₦)</label>
            <input type="number" id="amount" required>
          </div>`;
        break;
      case "Loan Services":
        content = `
          <div class="form-group">
            <label for="policyNumber">Policy Number</label>
            <input type="text" id="policyNumber" required>
          </div>
          <div class="form-group">
            <label for="amount">Premium Amount (₦)</label>
            <input type="number" id="amount" required>
          </div>`;
        break;
      default:
        content = "";
    }

    dynamicFields.innerHTML = content;
  }

  function handleBillPayment(event) {
    event.preventDefault();
    const billType = document.getElementById("billType").value;
    const pin = document.getElementById("pin").value;
    const amountInput = document.getElementById("amount");

    if (!billType || !pin || !amountInput) {
      alert("Please complete the form correctly.");
      return;
    }

    const amount = parseFloat(amountInput.value);
    let currentBalance = parseFloat(localStorage.getItem("accountBalance")) || 50000;

    if (amount > currentBalance) {
      alert("Insufficient balance to complete this payment.");
      return;
    }
    currentBalance -= amount;
    localStorage.setItem("accountBalance", currentBalance.toFixed(2));

    const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
    const tx = {
      date: new Date().toISOString().slice(0, 10),
      type: billType,
      amount: -amount,
      to: "Bill Payment"
    };
    transactions.unshift(tx);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    generateBillReceipt(billType, amount);
  }

 function generateBillReceipt(type, amount) {
  const receipt = document.createElement("div");
  const now = new Date();

  receipt.id = "bill-receipt";
  receipt.style.cssText = `
    padding: 20px;
    margin: 50px auto;
    width: 320px;
    background: #ffffff;
    font-family: 'Segoe UI', sans-serif;
    border: 2px dashed #4caf50;
    border-radius: 12px;
    color: #2e7d32;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    position: relative;
    z-index: 10000;
  `;

  receipt.innerHTML = `
    <h3 style="color:#388e3c;">✅ CS BANK</h3>
    <p style="margin-bottom: 10px;"><strong>Bill Payment Receipt</strong></p>
    <hr style="margin: 10px 0;">
    <p><strong>Service:</strong> ${type.charAt(0).toUpperCase() + type.slice(1)}</p>
    <p><strong>Amount Paid:</strong> ₦${amount.toLocaleString()}</p>
    <p><strong>Date:</strong> ${now.toLocaleDateString()}</p>
    <p><strong>Time:</strong> ${now.tletoLocaleTimeString()}</p>
    <hr style="margin: 10px 0;">
    <p style="font-size: 0.9em;">Thank you for using our service!</p>
  `;

  document.body.appendChild(receipt);

  setTimeout((none) => {
    html2canvas(receipt).then(canvas => {
      const imgData = canvas.toDataURL("image/jpeg");
      const downloadLink = document.createElement("a");
      downloadLink.href = imgData;
      downloadLink.download = `bill_receipt_${type}_${now.getTime()}.jpg`;
      downloadLink.textContent = "📥 Download Receipt";
      downloadLink.className = "download-link";
      downloadLink.style.display = "block";
      downloadLink.style.marginTop = "15px";

      receipt.appendChild(downloadLink);

      downloadLink.click();

      setTimeout(() => {
        document.body.removeChild(none);
      }, 3000);
    });
  }, 300);
}