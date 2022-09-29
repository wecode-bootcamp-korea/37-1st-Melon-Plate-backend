class BaseError extends Error {
  // Error Handling Best Practice 검색
  constructor(message, statusCode) {
    this.message = message
    this.statusCode = statusCode
  }
}

module.exports = { BaseError }
