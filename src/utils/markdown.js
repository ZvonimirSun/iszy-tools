import { marked } from 'marked'
export default content => {
  return marked(content, {
    breaks: true
  })
}
