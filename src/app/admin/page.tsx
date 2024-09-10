import dynamic from "next/dynamic";

const Redirect = dynamic(() => import("@/components/redirect"));

export default function page() {
  return <Redirect to="/admin/dashboard" />;
}
