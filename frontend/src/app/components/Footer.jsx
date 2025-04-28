const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="inner-wrapper">
          
          <div className="footer-menu">
            <span>لینک‌های مهم</span>
            <ul>
              <li><a href="/">درباره ما</a></li>
              <li><a href="/">تماس با ما</a></li>
              <li><a href="/">سیاست حریم خصوصی</a></li>
              <li><a href="/">شرایط و ضوابط</a></li>
            </ul>
          </div>

         
          <div className="footer-menu">
            <span>نمونه‌ها</span>
            <ul>
              <li><a href="/products?category=موبایل">موبایل‌ها</a></li>
              <li><a href="/products?category=تبلت">تبلت‌ها</a></li>
              <li><a href="/products?category=لپ تاپ">لپ‌تاپ‌ها</a></li>
              <li><a href="/new-arrivals">محصولات جدید</a></li>
            </ul>
          </div>

         
          <div className="footer-menu">
            <span>راه‌های ارتباطی</span>
            <ul className="contact">
              <li><a href="/">mahsa.abdi2@gmail.com</a></li>
              <li><a href="/">+989906409003</a></li>
              <li><a href="https://www.instagram.com/azalia">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-box">
        <div className="container-footer">
          <p>© {new Date().getFullYear()} Azalia - همه حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
