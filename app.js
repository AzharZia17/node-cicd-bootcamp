function getMessage() {
  return "Hello from my CI/CD pipeline!";
}

if (require.main === module) {
  console.log(getMessage());
}

module.exports = { getMessage };