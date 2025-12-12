function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result
    console.log(`Scan result: ${decodedText}`, decodedResult);
    document.getElementById('result').textContent = `QR Code: ${decodedText}`;

    // Optional: stop scanning after the first code is scanned
    html5QrcodeScanner.clear();
}

function onScanError(error) {
    // Handle scan errors (optional)
    // console.warn(`QR error: ${error}`);
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", // The ID of the HTML element
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ false
);

html5QrcodeScanner.render(onScanSuccess, onScanError);