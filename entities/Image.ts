export interface Image {
  data: ImageData
}

interface ImageData {
  id: number
  attributes: ImageAttributes
}

interface ImageAttributes {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: ProviderMetadata
  createdAt: string
  updatedAt: string
}

interface Formats {
  small: Medium
  medium: Medium
  thumbnail: Medium
}

interface Medium {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
  provider_metadata: ProviderMetadata
}

interface ProviderMetadata {
  public_id: string
  resource_type: string
}
