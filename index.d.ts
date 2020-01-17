declare namespace validator {
  interface Options {
    format: string
  }

  interface Validator {
    (input: string): boolean
  }
}

declare function validator(options: validator.Options): validator.Validator

export = validator
