import { useRouter } from 'next/router'
 
export default function ReadMore() {
  const router = useRouter()
 
  return (
    // <button onClick={() => router.push('/about')}>
    //   Click here to read more
    // </button>
    <p>Post: {router.query.id}</p>
  )
}