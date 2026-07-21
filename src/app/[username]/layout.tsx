export type a = { params: Promise<{ username: any }> };
export async function generateMetadata({ params }: a) {
  const show = await params
  return {
    title: `${show.username}`
  }
}
export default function ClientLayout({ children }: any) {
  return children
}