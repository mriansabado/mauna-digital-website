/**
 * Drop post images into src/assets/social-posts/
 * (jpg, jpeg, png, webp). They show up on /work#social-posts automatically.
 */
const modules = import.meta.glob('../assets/social-posts/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function labelFromPath(path: string): string {
  const file = path.split('/').pop() ?? 'post'
  const base = file.replace(/\.[^.]+$/, '')
  return base.replace(/[-_]+/g, ' ').trim() || 'social post'
}

export type SocialPost = {
  src: string
  alt: string
  label: string
}

export const socialPosts: SocialPost[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map(([path, src]) => {
    const label = labelFromPath(path)
    return {
      src,
      label,
      alt: `Hand-designed social media post by Mauna Digital — ${label}`,
    }
  })
