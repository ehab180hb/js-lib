import { AppError } from './app.error'
import { ErrorData } from './error.model'

/**
 * HTTP 400: Bad Request
 */
export class Error400 extends AppError {
  constructor (message?: string, data?: ErrorData) {
    super(message, data)

    Object.defineProperty(this, 'name', {
      value: this.constructor.name,
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