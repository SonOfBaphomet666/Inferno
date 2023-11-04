


function decodeSecretMessage(codePoints) {
    let decodedMessage = "";
  
    for (let i = 0; i < codePoints.length; i++) {
      const codePoint = codePoints[i];
      decodedMessage += String.fromCharCode(codePoint);
    }
  
    return decodedMessage;
  }
  process.stdin.setEncoding('utf8');
  
  let input = '';
  
  process.stdin.on('data', (data) => {
    input += data;
  });
  
  process.stdin.on('end', () => {
    const codePoints = input.trim().split(/,\s*/).map(Number);
    const decodedMessage = decodeSecretMessage(codePoints);
    process.stdout.write(decodedMessage);
  });
  
  const secretMessage = [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100];
  const decodedMessage = decodeSecretMessage(secretMessage);
  console.log(decodedMessage); // Выведет: "Hello World"