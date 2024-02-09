import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { useRouter } from "next/router";
import Link from "next/link";

const BreadCrumbs = () => {
  const location = useRouter();
  const firstUrl = location.pathname.split("/")[1];
  const secondUrl = location.pathname.split("/")[2];

  return (
    <>
      <h4 className="text-capitalize">
        {secondUrl ? `${secondUrl}` : `${firstUrl}`}
      </h4>
      <Breadcrumb>
        <BreadcrumbItem >
          <Link href="/" className="text-decoration-none">Home</Link>
        </BreadcrumbItem>

        {firstUrl ? <BreadcrumbItem active>{firstUrl}</BreadcrumbItem> : ""}
        {secondUrl ? <BreadcrumbItem active>{secondUrl}</BreadcrumbItem> : ""}
      </Breadcrumb>
    </>
  );
};

export default BreadCrumbs;
