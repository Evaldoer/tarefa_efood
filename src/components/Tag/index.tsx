import { TagContainer } from './styles'

type Props = {
  children: string
  title?: string
}

const Tag = ({ children, title }: Props) => (
  <TagContainer title={title || `Categoria: ${children}`}>
    {children}
  </TagContainer>
)

export default Tag
