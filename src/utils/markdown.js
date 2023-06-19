import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()
export default content => {
  return md.render(content)
}
