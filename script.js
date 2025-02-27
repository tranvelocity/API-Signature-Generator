function generateSignature() {
    var apiKey = document.getElementById("apiKey").value;
    var apiSecret = document.getElementById("apiSecret").value;
    var title = document.getElementById("title").value;
    var algorithm = document.getElementById("algorithm").value;

    if (!apiKey || !apiSecret) {
        alert("API Key and API Secret are required.");
        return;
    }

    var timestamp = Math.floor(Date.now() / 1000); // Get current timestamp in seconds
    var dataToSign = timestamp + apiKey;

    var signature;
    if (algorithm === "sha1") {
        signature = CryptoJS.HmacSHA1(dataToSign, apiSecret).toString(CryptoJS.enc.Hex);
    } else if (algorithm === "sha256") {
        signature = CryptoJS.HmacSHA256(dataToSign, apiSecret).toString(CryptoJS.enc.Hex);
    } else if (algorithm === "sha512") {
        signature = CryptoJS.HmacSHA512(dataToSign, apiSecret).toString(CryptoJS.enc.Hex);
    }

    var generatedSignatureDiv = document.getElementById("generatedSignature");
    generatedSignatureDiv.innerHTML = "<h2>Generated Signature</h2>";
    generatedSignatureDiv.innerHTML += "<p>X-" + title + "-Api-Key: " + apiKey + "</p>";
    generatedSignatureDiv.innerHTML += "<p>X-" + title + "-Timestamp: " + timestamp + "</p>";
    generatedSignatureDiv.innerHTML += "<p>X-" + title + "-Signature: " + signature + "</p>";

    // Show the generated signature and copy button
    generatedSignatureDiv.classList.remove("hidden");
    var copyButton = document.querySelector(".copy-button");
    copyButton.classList.remove("hidden");
}

function copySignature() {
    var generatedSignature = document.getElementById("generatedSignature").innerHTML;
    navigator.clipboard.writeText(generatedSignature).then(function() {
        alert("Signature copied to clipboard!");
    }, function() {
        alert("Failed to copy signature.");
    });
}

