import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

import { dataset, projectId } from '../env'

const builder = createImageUrlBuilder({ dataset, projectId })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
