import { ErrorData } from './error.model'

/**
 * Base class for all our (not system) errors.
 *
 * message - "technical" message. Frontend decides to show it or not.
 * data - optional "any" payload.
 * data.userMessage - if present, will be displayed to the User as is.
 *
 * Based on: https://medium.com/@xpl/javascript-deriving-from-error-properly-8d2f8f315801
 */
export class AppError<DATA_TYPE extends ErrorData = ErrorData> extends Error {
  constructor (message: string, public data = {} as DATA_TYPE) {
    super(message)

    this.constructor = AppError
    ;(this as any).__proto__ = AppError.prototype
    Object.defineProperty(this, 'name', {
      value: this.constructor.name,
      configurable: true,
    })

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    } else {
      Object.defineProperty(this, 'stack', {
        value: new Error().stack,
      })
    }
  }
}
