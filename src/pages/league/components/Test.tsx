import { View } from '@tarojs/components'

const Test = (params) => {
  console.log(params)

  // debugger

  return (
    <span>
      {params.text}
    </span>
  )
}

export default Test
