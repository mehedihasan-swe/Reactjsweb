import { useState } from "react"

export default function Useform(initaialValue) {

    const [values, setValue] = useState(initaialValue)

    const handleInput = e => {
        const { name, value } = e.target
        setValue({
            ...values,
            [name]: value
        })
    }

  return {
    values,
    setValue,
    handleInput
  }
}
