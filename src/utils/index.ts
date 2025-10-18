import axios from 'axios'
import sourceMap from 'source-map-js'
const getSourcemap = async (url: string) => {
  const res = await axios.get(url)
  return res
}

const findCodeBySourceMap = async (stackFrame: any) => {
  const sourcemap = await getSourcemap(stackFrame.fileName + '.map')
  const fileContent = sourcemap.data
  //   解析sourcemap文件，找到对应的代码
  const consumer = await new sourceMap.SourceMapConsumer(fileContent)
  //   通过报错的位置找到对应的源文件的名称以及报错的行数
  const originalPosition = consumer.originalPositionFor({
    line: stackFrame.lineNumber,
    column: stackFrame.columnNumber || 0,
  })
  const code = consumer.sourceContentFor(originalPosition.source)
  console.log('[ 还原之后的源代码 ] >', code)
}

export default { findCodeBySourceMap }
