export type a = { params: Promise<{ product: any }> };
 const metadata={

 }
export async function generateMetadata({ params }: a) {
  const show = await params
  return {
    title: `${show.product}`,
    icon:""
  }
}
export default function ClientLayout({ children }: any) {
  return children
}