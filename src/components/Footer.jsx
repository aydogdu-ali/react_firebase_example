const Footer = () => {
  return (
    <div className="bg-light border border-top p-3 d-flex align-items-center justify-content-center fixed-bottom">
      <footer className="">
        <p className="text-center fs-6 mb-0">
          © {new Date().getFullYear()} Company, Inc
        </p>
      </footer>
    </div>
  );
};

export default Footer;
