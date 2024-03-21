import VendorScroll from "containers/Vendor/VendorScroll";
import VendorAccordion from "containers/Vendor/VendorAccordion";
import VendorBanner from "containers/Vendor/VendorBanner";
import VendorCard from "containers/Vendor/VendorCard";
import "containers/Vendor/vendor.scss";

const Vendor = () => {
  return (
    <>
      <VendorBanner />
      <VendorCard />
      <VendorScroll />
      <VendorAccordion />
    </>
  );
};

export default Vendor;
