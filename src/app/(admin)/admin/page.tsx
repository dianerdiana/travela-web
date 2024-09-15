import dynamic from "next/dynamic";

const Redirect = dynamic(() => import("@/components/Redirect"));

export default function page() {
  return <Redirect to="/admin/dashboard" />;
}
