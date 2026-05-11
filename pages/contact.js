import { useEffect } from 'react';
import { useRouter } from 'next/router';

// /contact redirects to /inquiry (Tailor-Made Inquiry)
export default function Contact() {
  const router = useRouter();
  useEffect(() => { router.replace('/inquiry'); }, [router]);
  return null;
}
